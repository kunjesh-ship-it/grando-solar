import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './home.css';

const problems = [
  { t: 'Bills that rise every year', d: 'Tariff hikes and fuel surcharges keep pushing the monthly bill upward — for homes and factories alike.' },
  { t: 'Fear of a flimsy structure', d: 'Cheap angle-iron frames rust, leak and can fail in monsoon winds. Nobody wants panels flying off the roof.' },
  { t: 'Subsidy paperwork confusion', d: 'Portal registration, DISCOM approval, inspection, net meter — too many steps, too little clarity.' },
  { t: 'Nobody after the sale', d: 'Many installers vanish after commissioning. Who cleans, who repairs, who answers the phone?' },
];
const answers = [
  { t: 'Sized to your bill, not a brochure', d: 'Free site visit, shadow analysis and 3D design so the plant matches your actual consumption.' },
  { t: 'Storm-safe HDGI structure', d: 'Pre-fabricated virgin steel, SS304 bolts, Hilti anchoring. No on-site welding, no rust, no leaks.' },
  { t: 'We handle the paperwork', d: 'Approved channel partner with Gujarat DISCOMs. Subsidy filed, approvals chased, net meter installed.' },
  { t: 'Local teams in 5 cities', d: 'Real-time monitoring, AMC and after-sales service from Surat, Vadodara, Vapi, Bharuch and Ahmedabad.' },
];

export default function ProblemSolution() {
  return (
    <section className="section theme-sky bg-grid-light">
      <div className="container">
        <SectionHeader tag="Why organisations delay solar" title="Electricity costs keep rising. Your energy bill does not have to." accent={['does', 'not', 'have', 'to.']} lead="The four concerns we hear on every site visit — and how Grando Solar resolves each one." align="center" />
        <div className="ps-wrap mt-5 position-relative" data-stagger>
          <div className="ps-col problem reveal">
            <div className="ps-head"><Icon name="close" size={18} /> The concern</div>
            {problems.map((p, i) => (
              <div className="ps-item" key={p.t}>
                <span className="n">{i + 1}</span>
                <div><h4>{p.t}</h4><p>{p.d}</p></div>
              </div>
            ))}
          </div>
          <span className="ps-arrow d-none d-lg-grid"><Icon name="arrow" size={26} strokeWidth={2.5} /></span>
          <div className="ps-col solution reveal">
            <div className="ps-head"><Icon name="check" size={18} /> The Grando Solar answer</div>
            {answers.map((p, i) => (
              <div className="ps-item" key={p.t}>
                <span className="n">{i + 1}</span>
                <div><h4>{p.t}</h4><p>{p.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
