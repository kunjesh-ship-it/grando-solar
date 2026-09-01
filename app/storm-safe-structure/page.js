import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import WhyGrando from '@/components/home/WhyGrando';
import WhatWeGive from '@/components/sections/WhatWeGive';
import FaqSection from '@/components/sections/FaqSection';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

export const metadata = buildMetadata({
  title: 'Storm-Safe Solar Mounting Structure – HDGI, SS304, Hilti | Grando Solar',
  description: 'Grando Solar’s storm-safe solar structure: pre-fabricated HDGI virgin steel from JSW/Essar/Tata, SS304 nut-bolts, Hilti RE10 airtight anchoring and zero on-site welding. Rust-proof, leak-proof, engineered for Gujarat wind loads.',
  path: '/storm-safe-structure',
  image: '/images/storm-safe-structure.jpg',
});

const compare = [
  { k: 'Steel', us: 'HDGI virgin steel (JSW / Essar / Tata)', them: 'Painted MS angle or re-rolled steel' },
  { k: 'Fabrication', us: 'Factory pre-fabricated, bolted on site', them: 'Cut and welded on the roof' },
  { k: 'Fasteners', us: 'SS304 nut-bolts, J-bolts and ties', them: 'Plain MS bolts that rust' },
  { k: 'Roof anchoring', us: 'Hilti RE10 chemical anchor, airtight seal', them: 'Wedge anchors, exposed holes' },
  { k: 'Corrosion', us: 'Rust-proof for plant life', them: 'Rust within 2–3 monsoons' },
  { k: 'Wind safety', us: 'Engineer-certified design', them: 'Rule-of-thumb sizing' },
];

const faqs = [
  { q: 'What is HDGI and why does it matter?', a: 'HDGI stands for hot-dip galvanised iron: steel dipped in molten zinc to form a bonded protective layer. Unlike paint, it does not chip or peel, so the structure stays rust-free for decades in coastal, humid Gujarat.' },
  { q: 'Why is no on-site welding important?', a: 'Welding on site burns off the galvanised coating at every joint and depends on the welder’s skill that day. Our structures are pre-fabricated in the factory and simply bolted together on your roof, so every joint is consistent and fully protected.' },
  { q: 'Will the anchoring damage or leak my roof?', a: 'No. Hilti RE10 is a chemical anchoring system that bonds to the concrete and seals the hole airtight. It is stronger than mechanical anchors and prevents water ingress.' },
  { q: 'Can the terrace still be used?', a: 'Yes. Our elevated structures keep the terrace walkable underneath — ideal for societies and homes that use the roof.' },
  { q: 'Is the structure covered by warranty?', a: 'The complete plant carries a 5-year warranty with free repair and replacement, and the structure is built to last the full 25–30 year life of the panels.' },
];

export default function StructurePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Storm-Safe Structure', path: '/storm-safe-structure' }])} />
      <PageHero tag="Technology" title="Storm-safe solar mount. Your safety is our obsession." lead="Panels last 25 years only if the structure under them does. Grando Solar engineers, pre-fabricates and anchors every structure to survive Gujarat’s heat, humidity and cyclone-season winds." crumbs={[{ name: 'Storm-Safe Structure' }]} image="/images/storm-safe-structure.jpg" />

      <WhyGrando />

      <section className="section">
        <div className="container">
          <SectionHeader tag="Grando vs. typical" title="Where cheap structures cut corners — and we don’t." accent={['don’t.']} align="center" />
          <div className="table-responsive mt-5 reveal">
            <table className="table cmp-table align-middle">
              <thead><tr><th>Component</th><th className="us">Grando storm-safe structure</th><th>Typical low-cost structure</th></tr></thead>
              <tbody>
                {compare.map((r) => (
                  <tr key={r.k}>
                    <td className="fw-bold text-navy cmp-k" data-label="Component">{r.k}</td>
                    <td className="us" data-label="Grando storm-safe structure"><Icon name="check" size={16} strokeWidth={3} /> {r.us}</td>
                    <td data-label="Typical low-cost structure"><Icon name="close" size={16} /> {r.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <style>{`
            .cmp-table { border-collapse: separate; border-spacing: 0; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--gs-line); }
            .cmp-table th { background: var(--gs-navy-900); color: #fff; font-family: var(--ff-heading); font-size: 0.85rem; letter-spacing: 0.04em; padding: 18px 22px; border: 0; }
            .cmp-table th.us { background: var(--gs-navy); color: var(--gs-yellow); }
            .cmp-table td { padding: 16px 22px; border-color: var(--gs-line); vertical-align: middle; }
            .cmp-table td.us { background: #fffbe8; color: var(--gs-navy); font-weight: 600; }
            .cmp-table td.us svg { color: var(--gs-green); margin-right: 6px; }
            .cmp-table td:last-child { color: var(--gs-muted); }
            .cmp-table td:last-child svg { color: #c0392b; margin-right: 6px; }
            /* Mobile: stacked card layout instead of a clipped table */
            @media (max-width: 767.98px) {
              .cmp-table { border: 0; }
              .cmp-table thead { display: none; }
              .cmp-table, .cmp-table tbody, .cmp-table tr, .cmp-table td { display: block; width: 100%; }
              .cmp-table tr { border: 1px solid var(--gs-line); border-radius: var(--radius); overflow: hidden; margin-bottom: 14px; background: #fff; }
              .cmp-table td { border: 0; padding: 12px 16px; }
              .cmp-table td.cmp-k { background: var(--gs-navy-900); color: #fff !important; font-family: var(--ff-heading); padding: 12px 16px; }
              .cmp-table td[data-label]:not(.cmp-k)::before { content: attr(data-label); display: block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gs-muted); margin-bottom: 4px; }
              .cmp-table td.us[data-label]::before { color: var(--gs-green-600); }
            }
          `}</style>
        </div>
      </section>

      <section className="section theme-sky">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <SectionHeader tag="Engineering" title="Certified design. Shadow-analysed layout." accent={['Certified']} />
              <p className="reveal">Every structure is designed by a certified engineer for the site’s wind zone, roof type and panel layout. Our shadow analysis positions rows for up to 20% more generation than a standard layout.</p>
              <ul className="check-list reveal">
                <li>Site-specific wind-load engineering</li>
                <li>Elevated, tilt and flush-mount options</li>
                <li>Sheet-roof clamps that avoid drilling the sheet</li>
                <li>Rain-water management along rows</li>
              </ul>
              <Link href="/contact-us" className="btn-gs reveal mt-2">Request Site Survey <span className="ico"><Icon name="arrow" size={18} /></span></Link>
            </div>
            <div className="col-lg-7">
              <div className="feature-img reveal-img" style={{ aspectRatio: '16 / 10' }}>
                <Image src="/images/structure-wide.jpg" alt="Underside of a Grando Solar elevated structure" fill sizes="(max-width: 991px) 100vw, 58vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeGive />
      <FaqSection items={faqs} title="Structure questions, answered" />
      <ContactPanel intent="Site Survey" title="See the structure on your own roof — free." />
    </>
  );
}
