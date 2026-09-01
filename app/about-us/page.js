import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import WhatWeGive from '@/components/sections/WhatWeGive';
import LocationsGrid from '@/components/sections/LocationsGrid';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { site } from '@/data/site';
import '@/components/sections/sections.css';

export const metadata = buildMetadata({
  title: 'About Grando Solar – Solar EPC Company in Surat, Gujarat',
  description: 'Grando Solar Energy is a brand of Om Shanti Machineries Exim: a licensed solar EPC company with storm-safe structures, Waaree partnership and offices in Surat, Vadodara, Vapi, Bharuch and Ahmedabad.',
  path: '/about-us',
  image: '/images/team-carport.jpg',
});

const values = [
  { icon: 'shield', t: 'Safety first', d: 'Your safety is our obsession. Every structure is engineered, pre-fabricated and anchored to outlast storms.' },
  { icon: 'file', t: 'Transparency', d: 'Itemised quotations, named components and a 3D design before you pay a rupee.' },
  { icon: 'clock', t: 'Long-term partnership', d: 'A solar plant is a 25-year relationship. Our local teams stay accountable after commissioning.' },
  { icon: 'leaf', t: 'Clean energy for every roof', d: 'Our vision: affordable, sustainable solar power for every home and business in Gujarat.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about-us' }])} />
      <PageHero tag="About us" title="Powering tomorrow with clean energy today." lead="Grando Solar Energy is a solar EPC company headquartered in Surat and a brand of Om Shanti Machineries Exim. We make going solar simple, safe and rewarding for homes, societies, businesses and industries across Gujarat." crumbs={[{ name: 'About Us' }]} image="/images/team-carport.jpg" />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <SectionHeader tag="Who we are" title="Your solar growth partner." accent={['growth', 'partner.']} />
              <p className="reveal">
                Grando Solar was built on a simple belief: a solar plant should be as strong as the savings it promises. That is why we engineer our own storm-safe HDGI structures, install with our own trained teams and stay responsible for monitoring and maintenance long after commissioning.
              </p>
              <p className="reveal">
                We are an electrical-contractor-licensed EPC company, an authorised channel and franchise partner of Waaree Energies, and a government-approved channel partner with Gujarat’s DISCOMs (DGVCL, PGVCL, MGVCL, GETCO, GUVNL, Torrent Power) under MNRE and GEDA programmes. That lets us handle design, supply, installation, subsidy and net metering under one roof.
              </p>
              <div className="d-flex flex-wrap gap-2 reveal">
                <span className="pill">Residential</span><span className="pill">Housing Society</span><span className="pill">Commercial</span><span className="pill">Industrial</span><span className="pill light">Ground-mount</span><span className="pill light">Carport</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-img reveal-img">
                <Image src="/images/structure-wide.jpg" alt="Grando Solar elevated storm-safe structure" fill sizes="(max-width: 991px) 100vw, 50vw" />
                <div className="float-badge">
                  <span className="icon-badge"><Icon name="pin" /></span>
                  <div><strong>5 cities</strong><span>Surat · Vadodara · Vapi · Bharuch · Ahmedabad</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-sky bg-grid-light">
        <div className="container">
          <SectionHeader tag="Vision · Mission · Values" title="What we stand for." align="center" />
          <div className="row g-4 mt-2" data-stagger>
            <div className="col-md-6">
              <div className="card-gs reveal">
                <span className="icon-badge"><Icon name="sun" /></span>
                <h3>Vision</h3>
                <p className="mb-0">To empower every home and business with clean, affordable and sustainable solar energy for a brighter future.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-gs reveal">
                <span className="icon-badge"><Icon name="bolt" /></span>
                <h3>Mission</h3>
                <p className="mb-0">To deliver reliable, innovative solar solutions that reduce energy costs and promote environmental responsibility — one roof at a time.</p>
              </div>
            </div>
          </div>
          <div className="tick-grid cols-4 mt-4" data-stagger>
            {values.map((v) => (
              <div className="tick-card reveal" key={v.t}>
                <span className="icon-badge"><Icon name={v.icon} /></span>
                <h3>{v.t}</h3><p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee />
      <WhatWeGive />
      <LocationsGrid />
      <ContactPanel title="Let’s talk about your roof." />
    </>
  );
}
