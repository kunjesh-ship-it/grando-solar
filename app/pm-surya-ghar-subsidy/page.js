import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import SavingsCalculator from '@/components/home/SavingsCalculator';
import FaqSection from '@/components/sections/FaqSection';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { subsidyFaqs } from '@/data/faqs';
import { subsidy } from '@/data/site';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

export const metadata = buildMetadata({
  title: 'PM Surya Ghar Subsidy in Gujarat – ₹78,000 Rooftop Solar Subsidy | Grando Solar',
  description: 'How to get the PM Surya Ghar: Muft Bijli Yojana subsidy in Gujarat — ₹78,000 for 3 kW+ homes, ₹18,000/kW for housing societies. Eligibility, process and documents. Grando Solar files it for you.',
  path: '/pm-surya-ghar-subsidy',
  image: '/images/home-roof.jpg',
});

const steps = [
  { t: 'Register on the portal', d: 'We register you on the National Portal for Rooftop Solar with your electricity consumer number.' },
  { t: 'DISCOM feasibility approval', d: 'Your DISCOM (DGVCL, MGVCL, PGVCL, UGVCL or Torrent) approves the proposed capacity.' },
  { t: 'Installation by Grando', d: 'Plant installed with the storm-safe structure and Tier-1 components; installation report uploaded.' },
  { t: 'Inspection & net meter', d: 'DISCOM inspects and installs the bi-directional meter. Commissioning certificate is generated.' },
  { t: 'Subsidy credited', d: 'Bank details submitted; subsidy is credited directly to your account by the central government.' },
];

const docs = ['Latest electricity bill', 'Aadhaar card', 'Bank passbook / cancelled cheque', 'Passport-size photo', 'Property ownership proof (if asked by DISCOM)', 'Society resolution & member list (for group housing)'];

export default function SubsidyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'PM Surya Ghar Subsidy', path: '/pm-surya-ghar-subsidy' }])} />
      <PageHero tag="PM Surya Ghar: Muft Bijli Yojana" title="Your subsidy, credited directly to your account. The paperwork is ours." lead="The central government pays a large part of your rooftop solar cost. As an approved channel partner, Grando Solar handles the entire application so you only receive the credit." crumbs={[{ name: 'PM Surya Ghar Subsidy' }]} image="/images/home-roof.jpg">
        <div className="d-flex flex-wrap gap-3 mt-4 reveal">
          <Link href="/contact-us" className="btn-gs lg">Check My Subsidy <span className="ico"><Icon name="arrow" size={18} /></span></Link>
          <a href="#calculator" className="btn-gs lg outline">Estimate savings</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="row g-4" data-stagger>
            <div className="col-md-6">
              <div className="card-gs reveal" style={{ background: 'var(--gs-navy-900)', borderColor: 'transparent' }}>
                <span className="eyebrow">Residential</span>
                <div className="stat-num text-yellow mt-2">{subsidy.residential.amount}</div>
                <p className="mt-2 mb-0" style={{ color: 'rgba(255,255,255,0.75)' }}>{subsidy.residential.note}. Systems of 1–2 kW receive a lower, pro-rated amount.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-gs reveal" style={{ background: 'var(--gs-navy)', borderColor: 'transparent' }}>
                <span className="eyebrow">Housing Society / RWA</span>
                <div className="stat-num text-yellow mt-2">{subsidy.society.amount}</div>
                <p className="mt-2 mb-0" style={{ color: 'rgba(255,255,255,0.75)' }}>{subsidy.society.note} — for common facilities such as lifts, pumps and lighting, up to 500 kW (3 kW per house).</p>
              </div>
            </div>
          </div>
          <p className="small text-muted mt-3 reveal">{subsidy.disclaimer}</p>
        </div>
      </section>

      <section className="section theme-sky bg-grid-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionHeader tag="Process" title="Five steps. We do four of them." accent={['four']} />
              <p className="reveal">You provide the documents. Grando Solar does the rest — registration, approvals, installation report, inspection and claim.</p>
              <h3 className="h4 mt-4 reveal">Documents you need</h3>
              <ul className="check-list reveal">{docs.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
            <div className="col-lg-7">
              <ol className="steps-list" data-stagger>
                {steps.map((s) => <li className="reveal" key={s.t}><div><strong className="d-block text-navy">{s.t}</strong><span className="fw-normal" style={{ color: 'var(--gs-body)' }}>{s.d}</span></div></li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <SavingsCalculator />
      <FaqSection items={subsidyFaqs} title="Subsidy questions, answered" theme="theme-sky" />
      <ContactPanel intent="Subsidy Check" title="Find out exactly what you are eligible for." points={['Eligibility check for your connection', 'Capacity sizing to maximise subsidy', 'Complete portal and DISCOM filing', 'Loan assistance for the balance amount']} />
    </>
  );
}
