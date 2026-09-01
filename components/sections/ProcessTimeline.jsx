import { process } from '@/data/services';
import SectionHeader from '@/components/ui/SectionHeader';
import './sections.css';

export default function ProcessTimeline({ theme = 'theme-sky' }) {
  return (
    <section className={`section ${theme} bg-grid-light`}>
      <div className="container">
        <SectionHeader tag="How it works" title="Six simple steps from site visit to savings" accent={['savings']} lead="You always know which step you are on. No surprises, no hidden costs." align="center" />
        <div className="process-grid mt-5" data-stagger>
          {process.map((p, i) => (
            <div className="process-step reveal" key={p.step}>
              <div className="ps-num">{p.step}</div>
              <h3 className="h4">{p.title}</h3>
              <p className="mb-0">{p.text}</p>
              {i < process.length - 1 && <span className="ps-line" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
