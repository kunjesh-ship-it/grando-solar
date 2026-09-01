'use client';
import { useState } from 'react';
import { site, locations } from '@/data/site';
import Icon from './Icon';

/**
 * Lead form. On submit it POSTs to /api/lead (which you can wire to email/CRM)
 * and also offers a WhatsApp fallback with the details pre-filled.
 */
export default function LeadForm({ compact = false, title = 'Get your free site visit', intent = 'Free Site Visit', dark = false }) {
  const [state, setState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [data, setData] = useState({ name: '', phone: '', city: '', type: 'Residential (Home)', bill: '', message: '' });

  const update = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const waLink = () => {
    const msg = `Hi Grando Solar, I want a ${intent}.%0AName: ${data.name}%0APhone: ${data.phone}%0ACity: ${data.city}%0AType: ${data.type}%0AAvg bill: ${data.bill}%0A${data.message}`;
    return `https://wa.me/${site.whatsapp}?text=${msg}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, intent, page: window.location.pathname }),
      });

      const json = await res.json().catch(() => null);
      // console.log('Lead form API response:', { status: res.status, ok: res.ok, data: json });

      if (res.ok && json?.ok) {
        if (json?.message) {
          setSuccessMessage(json.message);
        }
        setState('done');
      } else {
        console.warn('Lead form submission failed:', json);
        setErrorMessage(json?.message || `Could not send right now — please use WhatsApp or call ${site.phone}.`);
        setState('error');
      }
    } catch (err) {
      console.error('Lead form submit error:', err);
      setErrorMessage(`Could not send right now — please use WhatsApp or call ${site.phone}.`);
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <div className={`lead-form form-gs ${dark ? 'dark' : ''}`}>
        <div className="text-center py-4">
          <div className="icon-badge mx-auto" style={{ background: 'var(--gs-green)', color: '#fff' }}><Icon name="check" /></div>
          <h3>Thank you, {data.name.split(' ')[0]}!</h3>
          <p>{successMessage || `Our team will call you on ${data.phone} within one working day to schedule your visit.`}</p>
          {/* <a href={waLink()} target="_blank" rel="noopener" className="btn-gs green"><Icon name="whatsapp" size={18} /> Send details on WhatsApp too</a> */}
        </div>
      </div>
    );
  }

  return (
    <form className={`lead-form form-gs ${dark ? 'dark' : ''}`} onSubmit={submit}>
      {title && <h3 className="mb-1">{title}</h3>}
      {!compact && <p className="form-note mb-4">Free, no-obligation visit by a Grando engineer. We never share your details.</p>}
      <div className="row g-3">
        <div className={compact ? 'col-12' : 'col-md-6'}>
          <label htmlFor="lf-name">Your name</label>
          <input id="lf-name" name="name" className="form-control" required value={data.name} onChange={update} placeholder="Full name" />
        </div>
        <div className={compact ? 'col-12' : 'col-md-6'}>
          <label htmlFor="lf-phone">Mobile number</label>
          <input id="lf-phone" name="phone" className="form-control" required pattern="[0-9+ ]{10,15}" value={data.phone} onChange={update} placeholder="+91" inputMode="tel" />
        </div>
        <div className={compact ? 'col-12' : 'col-md-6'}>
          <label htmlFor="lf-city">City / area</label>
          <input id="lf-city" name="city" className="form-control" list="lf-cities" required value={data.city} onChange={update} placeholder="e.g. Surat" />
          <datalist id="lf-cities">{locations.map((l) => <option key={l.slug} value={l.city} />)}</datalist>
        </div>
        <div className={compact ? 'col-12' : 'col-md-6'}>
          <label htmlFor="lf-type">Property type</label>
          <select id="lf-type" name="type" className="form-select" value={data.type} onChange={update}>
            <option>Residential (Home)</option>
            <option>Housing Society</option>
            <option>Commercial</option>
            <option>Industrial / Factory</option>
            <option>Ground-mount / Land</option>
            <option>Parking / Carport</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="lf-bill">Average monthly electricity bill (₹)</label>
          <input id="lf-bill" name="bill" className="form-control" value={data.bill} onChange={update} placeholder="e.g. 3500" inputMode="numeric" />
        </div>
        {!compact && (
          <div className="col-12">
            <label htmlFor="lf-msg">Anything else?</label>
            <textarea id="lf-msg" name="message" className="form-control" rows={3} value={data.message} onChange={update} placeholder="Roof type, preferred time, questions…" />
          </div>
        )}
        <div className="col-12 d-flex flex-wrap gap-2 align-items-center">
          <button type="submit" className="btn-gs" disabled={state === 'sending'}>
            {state === 'sending' ? 'Sending…' : `Request ${intent}`} <span className="ico"><Icon name="arrow" size={18} /></span>
          </button>
          
          {/* <a href={waLink()} target="_blank" rel="noopener" className="wa-alt"><Icon name="whatsapp" size={17} /> or send on WhatsApp</a> */}
        </div>
        {state === 'error' && <p className="text-danger small mb-0">{errorMessage || `Could not send right now — please use WhatsApp or call ${site.phone}.`}</p>}
      </div>
    </form>
  );
}
