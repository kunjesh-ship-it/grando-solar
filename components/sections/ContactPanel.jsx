import LeadForm from '@/components/ui/LeadForm';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import { site } from '@/data/site';
import './sections.css';

export default function ContactPanel({ title = 'Speak directly with a solar expert.', intent = 'Free Site Visit', tag = 'Get started', points }) {
  const bullets = points || [
    'Free site visit and shadow analysis',
    '3D layout and generation estimate',
    'Subsidy and loan paperwork handled',
    'Storm-safe structure, 5-year plant warranty',
  ];
  return (
    <section className="section theme-navy bg-grid contact-panel">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-lg-center">
          <div className="col-lg-5">
            <SectionHeader tag={tag} title={title} accent={['expert.']} />
            <ul className="check-list reveal mb-4">{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="contact-quick reveal">
              <a href={site.phoneHref}><Icon name="phone" /> <span><small>Call</small>{site.phone}</span></a>
              <a href={site.whatsappHref} target="_blank" rel="noopener"><Icon name="whatsapp" /> <span><small>WhatsApp</small>Chat now</span></a>
              <a href={`mailto:${site.email}`}><Icon name="mail" /> <span><small>Email</small>{site.email}</span></a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="lead-card reveal">
              <LeadForm intent={intent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
