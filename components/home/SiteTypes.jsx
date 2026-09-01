import { siteTypes } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import '@/components/sections/sections.css';

export default function SiteTypes() {
  return (
    <section className="section theme-sky">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-4">
            <SectionHeader tag="Where we install" title="If it has a roof or open land, we can power it." accent={['power']} lead="From a 3 kW home to a multi-megawatt industrial estate — the same engineering, the same components." />
          </div>
          <div className="col-xl-8">
            <div className="types-grid" data-stagger>
              {siteTypes.map((t) => (
                <div className="type-chip reveal" key={t}><span className="dot" />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
