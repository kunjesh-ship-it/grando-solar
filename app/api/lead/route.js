import { NextResponse } from 'next/server';

/**
 * Lead endpoint. Currently logs the lead and returns OK.
 * Wire this to email (Resend / Nodemailer), Google Sheets, or a CRM webhook:
 *   - set LEAD_WEBHOOK_URL in .env.local to forward the JSON payload.
 */
export async function POST(req) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.phone) return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    // Basic anti-spam: reject obviously bad phone numbers
    if (!/^[0-9+ ]{10,15}$/.test(body.phone)) return NextResponse.json({ ok: false, error: 'Invalid phone' }, { status: 400 });

    const payload = { ...body, receivedAt: new Date().toISOString() };
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } else {
      console.log('[Grando lead]', payload);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
