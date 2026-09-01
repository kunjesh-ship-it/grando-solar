import Link from 'next/link';
import { solutions } from '@/data/solutions';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './sections.css';

export default function SolutionsGrid({ header = true, exclude = null, theme = '' }) {
  const list = solutions.filter((s) => s.slug !== exclude);
  return (
    <section className={`section ${theme}`}>
      <div className="container">
        {header && (
          <div className="row align-items-end g-4 mb-5">
            <div className="col-lg-7">
              <SectionHeader tag="Solutions" title="Solar for every roof, every load, every budget." accent={['every']} />
            </div>
            <div className="col-lg-5 text-lg-end">
              <Link href="/solutions" className="link-arrow reveal">All solutions <span className="circle"><Icon name="arrow" size={18} /></span></Link>
            </div>
          </div>
        )}
        <div className="row g-4" data-stagger>
          {list.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={s.slug}>
              <div className="card-gs sol-card reveal">
                <span className="card-num">0{i + 1}</span>
                <span className="icon-badge"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link href={`/solutions/${s.slug}`} className="link-arrow stretched-link">Explore <span className="circle"><Icon name="arrow" size={18} /></span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
