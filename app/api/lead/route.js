import { NextResponse } from 'next/server';

/**
 * Lead capture endpoint.
 * Forwards submissions from the website lead form to the Grando Solar CRM API.
 * Follows the Grando Solar Lead Capture API Integration Guide v1.0.
 */
export async function POST(req) {
  try {
    const form = await req.json();

    // 1. Normalise name
    const name = String(form?.name || '').trim();

    // 2. Normalise mobile: digits only, strip spaces, dashes, country code prefix if 12 digits starting with 91
    const mobile = String(form?.phone || form?.mobile || '')
      .replace(/\D/g, '')
      .replace(/^91(?=\d{10}$)/, '');

    // Validation for required fields
    if (!name) {
      return NextResponse.json({ ok: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!mobile || mobile.length < 6 || mobile.length > 15) {
      return NextResponse.json({ ok: false, message: 'Enter a valid phone number.' }, { status: 400 });
    }

    // 3. Normalise property type: must be exactly 'residential' or 'commercial'
    let propertyType = null;
    if (form?.type || form?.propertyType) {
      const rawType = String(form.type || form.propertyType).toLowerCase();
      if (rawType.includes('residential') || rawType.includes('home') || rawType.includes('society')) {
        propertyType = 'residential';
      } else if (rawType.includes('commercial') || rawType.includes('industrial') || rawType.includes('factory') || rawType.includes('ground') || rawType.includes('parking') || rawType.includes('carport')) {
        propertyType = 'commercial';
      }
    }

    // 4. Normalise monthly electricity bill: numeric value
    let monthlyElectricityBill = null;
    if (form?.bill !== undefined && form?.bill !== null && form?.bill !== '') {
      const parsedBill = Number(String(form.bill).replace(/[^\d.]/g, ''));
      if (!isNaN(parsedBill) && parsedBill >= 0) {
        monthlyElectricityBill = parsedBill;
      }
    }

    // 5. Normalise city and message
    const cityArea = form?.city ? String(form.city).trim() : (form?.cityArea ? String(form.cityArea).trim() : null);
    const message = form?.message ? String(form.message).trim() : null;

    const payload = {
      name,
      mobile,
      cityArea: cityArea || null,
      propertyType: propertyType || null,
      monthlyElectricityBill,
      message: message || null,
    };

    const apiHost = process.env.CRM_API_HOST?.trim();
    const apiKey = process.env.WEBSITE_LEAD_API_KEY?.trim();

    // If CRM credentials are provided, call Grando Solar CRM Lead API
    if (apiHost && apiKey) {
      const cleanHost = apiHost.replace(/\/+$/, '');
      const endpoint = `${cleanHost}/api/v1/public/lead`;
      console.log('[CRM API Request]=======', { endpoint, payload });

      const crmRes = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(payload),
      });

      const body = await crmRes.json().catch(() => null);
      // console.log('[CRM API Response]', { status: crmRes.status, ok: crmRes.ok, body });

      if (crmRes.ok) {
        // console.log('[CRM Lead Created Successfully]', { id: body?.data?.id, created: body?.data?.created });
        return NextResponse.json({
          ok: true,
          message: body?.responseMessage || 'Thank you. Your enquiry has been received and our team will contact you shortly.',
          id: body?.data?.id,
          data: body?.data,
        });
      }

      if (crmRes.status === 400) {
        // Validation error from CRM
        console.warn('[CRM API Validation Error]', body);
        return NextResponse.json(
          { ok: false, message: body?.responseMessage || 'Please check your submitted details.', data: body?.data },
          { status: 400 }
        );
      }

      // Log upstream failure (401, 429, 500, etc.)
      console.error('[CRM Lead Capture Failed]', { status: crmRes.status, body });
      return NextResponse.json(
        { ok: false, message: 'Sorry, something went wrong while submitting. Please call us directly or use WhatsApp.' },
        { status: 502 }
      );
    }

    // Fallback: Optional webhook or console logging if CRM credentials are not yet set
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
      });
    } else {
      // console.log('[Grando Lead Received (CRM env variables not set)]:', payload);
    }

    return NextResponse.json({
      ok: true,
      message: 'Thank you. Your enquiry has been received and our team will contact you shortly.',
    });
  } catch (err) {
    console.error('Lead route error:', err);
    return NextResponse.json(
      { ok: false, message: 'Server error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}
