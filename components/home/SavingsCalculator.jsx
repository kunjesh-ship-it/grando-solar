'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './home.css';

/**
 * Indicative estimate only. Assumptions are shown to the user.
 * - Tariff: residential ~₹7/unit, commercial/industrial ~₹9/unit (typical Gujarat slabs)
 * - Generation: ~120 units per kW per month (Gujarat average)
 * - Subsidy: PM Surya Ghar — ₹30,000/kW up to 2 kW, ₹78,000 for 3 kW+ (residential only)
 */
const TARIFF = { home: 7, society: 7, business: 9 };
const GEN_PER_KW = 120;

const fmt = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

export default function SavingsCalculator() {
  const [bill, setBill] = useState(4000);
  const [type, setType] = useState('home');

  const r = useMemo(() => {
    const units = bill / TARIFF[type];
    let kw = Math.max(1, Math.ceil(units / GEN_PER_KW));
    if (type === 'home') kw = Math.min(kw, 10);
    const monthlyGen = kw * GEN_PER_KW;
    const monthlySaving = Math.min(bill, monthlyGen * TARIFF[type]);
    let subsidy = 0;
    if (type === 'home') subsidy = kw >= 3 ? 78000 : kw * 30000;
    if (type === 'society') subsidy = kw * 18000;
    return { kw, monthlyGen, monthlySaving, yearly: monthlySaving * 12, subsidy, life: monthlySaving * 12 * 25 };
  }, [bill, type]);

  return (
    <section className="section calculator-section" id="calculator">
      <div className="container">
        <SectionHeader tag="Savings estimate" title="See what your roof could save in 30 seconds." accent={['save']} lead="Move the slider to your average monthly bill. This is an indicative estimate — your free site visit gives the exact number." align="center" />
        <div className="calc-card mt-5 reveal">
          <div className="calc-in">
            <label className="d-block mb-2 fw-bold text-navy">Your property</label>
            <div className="calc-seg mb-4">
              <button type="button" className={type === 'home' ? 'on' : ''} onClick={() => setType('home')}>Home</button>
              <button type="button" className={type === 'society' ? 'on' : ''} onClick={() => setType('society')}>Housing Society</button>
              <button type="button" className={type === 'business' ? 'on' : ''} onClick={() => setType('business')}>Business / Factory</button>
            </div>
            <div className="d-flex justify-content-between align-items-end mb-2">
              <label htmlFor="calc-bill" className="fw-bold text-navy mb-0">Average monthly electricity bill</label>
              <span className="calc-val">{fmt(bill)}</span>
            </div>
            <input id="calc-bill" type="range" className="calc-range" min={1000} max={type === 'business' ? 300000 : 30000} step={type === 'business' ? 5000 : 500} value={Math.min(bill, type === 'business' ? 300000 : 30000)} onChange={(e) => setBill(Number(e.target.value))} />
            <div className="d-flex justify-content-between small text-muted mt-1"><span>₹1,000</span><span>{type === 'business' ? '₹3,00,000' : '₹30,000'}</span></div>
            <p className="small text-muted mt-4 mb-0">
              Assumes ~{GEN_PER_KW} units/kW/month (Gujarat average) and ₹{TARIFF[type]}/unit tariff. Subsidy as per PM Surya Ghar for residential and group-housing consumers.
            </p>
          </div>
          <div className="calc-out">
            <h3 className="mb-1">Your estimated plant</h3>
            <p className="mb-0">Recommended capacity: <strong className="text-yellow">{r.kw} kW</strong></p>
            <div className="calc-result">
              <div><strong>{fmt(r.monthlySaving)}</strong><span>saving per month</span></div>
              <div><strong>{fmt(r.yearly)}</strong><span>saving per year</span></div>
              <div><strong>{r.subsidy ? fmt(r.subsidy) : '—'}</strong><span>{r.subsidy ? 'govt. subsidy' : 'accelerated depreciation applies'}</span></div>
              <div><strong>{fmt(r.life)}</strong><span>saving over 25 years</span></div>
            </div>
            <Link href="/contact-us" className="btn-gs w-100 justify-content-center">Get exact quote — free site visit <span className="ico"><Icon name="arrow" size={18} /></span></Link>
            <p className="calc-note mt-3 mb-0">Estimate only. Actual generation depends on roof orientation, shading, tariff slab and DISCOM policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
