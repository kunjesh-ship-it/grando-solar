import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import WhatWeGive from '@/components/sections/WhatWeGive';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { services } from '@/data/services';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

export const metadata = buildMetadata({
  title: 'Solar Services – Survey, EPC Installation, Subsidy & AMC in Gujarat',
  description: 'Grando Solar’s end-to-end services: free site survey and 3D design, licensed EPC installation, PM Surya Ghar subsidy and loan assistance, and maintenance, AMC and monitoring across Gujarat.',
  path: '/services',
  image: '/images/team-carport.jpg',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />
      <PageHero tag="Services" title="From the first site visit to the 25th year." lead="Grando Solar is a licensed EPC company — engineering, procurement, construction, approvals and after-sales are all in-house. Here is what that looks like." crumbs={[{ name: 'Services' }]} image="/images/team-carport.jpg" />

      <section className="section">
        <div className="container">
          <div className="row g-4" data-stagger>
            {services.map((s, i) => (
              <div className="col-md-6" key={s.slug}>
                <div className="img-card reveal" style={{ aspectRatio: '16 / 10' }}>
                  <Image src={s.image} alt={s.title} fill sizes="(max-width: 767px) 100vw, 50vw" />
                  <div className="overlay" />
                  <div className="caption">
                    <span className="pill yellow mb-3">0{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <Link href={`/services/${s.slug}`} className="link-arrow mt-3 stretched-link" style={{ color: '#fff' }}>Learn more <span className="circle"><Icon name="arrow" size={18} /></span></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <WhatWeGive />
      <ContactPanel />
    </>
  );
}
