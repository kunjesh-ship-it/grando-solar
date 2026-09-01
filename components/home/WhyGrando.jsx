'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './home.css';

const points = [
  { k: '01', t: 'HDGI virgin steel', d: 'Hot-dip galvanised steel from JSW, Essar or Tata — rust-free for the life of the plant.', x: 55, y: 62 },
  { k: '02', t: 'Pre-fabricated, zero site welding', d: 'Every member is cut and finished in the factory, so joints are consistent and coatings stay intact.', x: 30, y: 35 },
  { k: '03', t: 'SS304 nut-bolts & ties', d: 'Stainless fasteners that do not corrode in Gujarat’s humid, coastal air.', x: 78, y: 48 },
  { k: '04', t: 'Hilti RE10 anchoring', d: 'Chemical anchoring with an airtight seal — strong hold, no roof leakage.', x: 18, y: 80 },
  { k: '05', t: 'Engineered for high wind', d: 'Certified engineer design with shadow analysis — up to 20% more generation and storm-safe strength.', x: 62, y: 20 },
];

export default function WhyGrando() {
  const [active, setActive] = useState(0);
  return (
    <section className="section theme-dark bg-grid bg-glow">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="why-media reveal-img">
              <Image src="/images/storm-safe-structure.jpg" alt="Grando Solar storm-safe HDGI elevated structure with SS304 fasteners and Hilti anchoring" fill sizes="(max-width: 991px) 100vw, 50vw" />
              {points.map((p, i) => (
                <button
                  key={p.k}
                  type="button"
                  className={`hotspot ${active === i ? 'active' : ''} ${p.x > 60 ? 'flip' : ''}`}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  data-label={p.t}
                  aria-label={p.t}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <SectionHeader tag="Your safety is our obsession" title="Storm-safe structure. Because panels are only as good as what holds them." accent={['Storm-safe', 'structure.']} />
            <div className="why-list mb-4" data-stagger>
              {points.map((p, i) => (
                <div key={p.k} className={`why-item reveal ${active === i ? 'active' : ''}`} onMouseEnter={() => setActive(i)}>
                  <span className="k">{p.k}</span>
                  <div><h4>{p.t}</h4><p>{p.d}</p></div>
                </div>
              ))}
            </div>
            <div className="warranty-pills reveal mb-4">
              <span className="pill yellow">5-year plant warranty</span>
              <span className="pill ghost">10-year inverter warranty</span>
              <span className="pill ghost">30-year panel life</span>
            </div>
            <Link href="/storm-safe-structure" className="link-arrow reveal">How our structure is built <span className="circle"><Icon name="arrow" size={18} /></span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
