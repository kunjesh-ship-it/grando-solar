import PageHero from '@/components/sections/PageHero';
import LeadForm from '@/components/ui/LeadForm';
import Icon from '@/components/ui/Icon';
import LocationsGrid from '@/components/sections/LocationsGrid';
import FaqSection from '@/components/sections/FaqSection';
import JsonLd from '@/components/ui/JsonLd';
import { site } from '@/data/site';
import { homeFaqs } from '@/data/faqs';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

export const metadata = buildMetadata({
  title: 'Contact Grando Solar – Free Site Visit for Rooftop Solar in Gujarat',
  description: `Book a free site visit or talk to a solar expert. Call ${site.phone}, WhatsApp, or email ${site.email}. Offices in Surat, Vadodara, Vapi, Bharuch and Ahmedabad.`,
  path: '/contact-us',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact-us' }])} />
      <PageHero tag="Contact" title="Talk to a solar expert. Book your free site visit." lead="Tell us about your roof and average bill. A Grando engineer will call within one working day to schedule the visit." crumbs={[{ name: 'Contact Us' }]} />
      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="lead-card reveal" style={{ boxShadow: 'var(--shadow)' }}>
                <LeadForm title="Request a free site visit" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-quick reveal" style={{ marginBottom: 24 }}>
                <a href={site.phoneHref} style={{ background: 'var(--gs-navy)', color: '#fff' }}><Icon name="phone" /> <span><small>Call us</small>{site.phone}</span></a>
                <a href={site.whatsappHref} target="_blank" rel="noopener" style={{ background: '#25d366', color: '#fff' }}><Icon name="whatsapp" /> <span><small>WhatsApp</small>Chat with our team</span></a>
                <a href={`mailto:${site.email}`} style={{ background: 'var(--gs-sky)', color: 'var(--gs-navy)' }}><Icon name="mail" /> <span><small>Email</small>{site.email}</span></a>
                <a href={site.instagram} target="_blank" rel="noopener" style={{ background: 'var(--gs-sky)', color: 'var(--gs-navy)' }}><Icon name="instagram" /> <span><small>Instagram</small>@grandosolar</span></a>
              </div>
              <div className="card-gs reveal" style={{ height: 'auto' }}>
                <h3 className="h4">What happens next</h3>
                <ol className="steps-list mt-3" style={{ gap: 8 }}>
                  <li style={{ padding: '12px 14px' }}>We call to understand your roof, bill and timeline.</li>
                  <li style={{ padding: '12px 14px' }}>Engineer visits, measures and runs shadow analysis — free.</li>
                  <li style={{ padding: '12px 14px' }}>You receive a 3D layout, generation estimate and itemised quote.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LocationsGrid />
      <FaqSection items={homeFaqs.slice(0, 5)} withSchema={false} />
    </>
  );
}
