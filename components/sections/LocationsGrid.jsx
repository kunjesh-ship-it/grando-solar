import Link from 'next/link';
import { locations } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './sections.css';

export default function LocationsGrid({ showHeader = true }) {
  return (
    <section className="section theme-sky">
      <div className="container">
        {showHeader && (
          <SectionHeader tag="Our presence" title="Five offices. One team across Gujarat." accent={['Gujarat.']} lead="Local engineers and service teams in Surat, Vadodara, Vapi, Bharuch and Ahmedabad — so support is never far away." align="center" />
        )}
        <div className="row g-4 mt-2" data-stagger>
          {locations.map((l) => (
            <div className="col-md-6 col-lg-4" key={l.slug}>
              <div className="card-gs loc-card reveal">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className={`pill ${l.slug === 'surat' ? 'yellow' : 'light'}`}>{l.label}</span>
                  <span className="icon-badge mb-0" style={{ width: 46, height: 46 }}><Icon name="pin" size={22} /></span>
                </div>
                <h3>{l.city}</h3>
                <p className="small">{l.address}</p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a href={l.phoneHref} className="btn-gs navy sm"><Icon name="phone" size={16} /> {l.phone}</a>
                  <a href={l.map} target="_blank" rel="noopener" className="btn-gs outline-navy sm">Directions</a>
                </div>
                <Link href={`/locations/solar-company-in-${l.slug}`} className="stretched-link" aria-label={`Solar company in ${l.city}`} />
              </div>
            </div>
          ))}
          <div className="col-md-6 col-lg-4">
            <div className="card-gs loc-card reveal d-flex flex-column justify-content-center text-center" style={{ background: 'var(--gs-navy)', color: '#fff', borderColor: 'transparent' }}>
              <h3 style={{ color: '#fff' }}>Not in these cities?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>We serve all of Gujarat. Tell us where you are and we will schedule a visit.</p>
              <Link href="/contact-us" className="btn-gs mx-auto">Contact Us <span className="ico"><Icon name="arrow" size={18} /></span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
