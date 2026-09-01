import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FaqSection from '@/components/sections/FaqSection';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { locations, site } from '@/data/site';
import { homeFaqs } from '@/data/faqs';
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

const bySlug = (slug) => locations.find((l) => `solar-company-in-${l.slug}` === slug);

export function generateStaticParams() {
  return locations.map((l) => ({ slug: `solar-company-in-${l.slug}` }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const l = bySlug(slug);
  if (!l) return {};
  return buildMetadata({
    title: `Solar Company in ${l.city} – Rooftop & Industrial Solar Installation`,
    description: `Grando Solar ${l.city}: rooftop, society, commercial and industrial solar installation with PM Surya Ghar subsidy assistance. ${l.label} at ${l.address}. Call ${l.phone} for a free site visit.`,
    path: `/locations/${slug}`,
  });
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const l = bySlug(slug);
  if (!l) notFound();

  const cityFaqs = [
    { q: `Does Grando Solar install rooftop solar in ${l.city}?`, a: `Yes. Our ${l.city} office at ${l.address} handles survey, installation and service for ${l.areas.join(', ')} and surrounding areas.` },
    { q: `Which DISCOM handles net metering in ${l.city}?`, a: `Net metering in ${l.city} is generally through ${l.discom}. Grando Solar is an approved channel partner and coordinates feasibility, inspection and meter installation.` },
    ...homeFaqs.slice(1, 5),
  ];

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: l.city, path: `/locations/${slug}` }]),
        localBusinessJsonLd(l),
      ]} />
      <PageHero tag={`${l.label} · ${l.city}`} title={`Solar company in ${l.city}, Gujarat.`} lead={l.blurb} crumbs={[{ name: 'Locations', href: '/locations' }, { name: l.city }]}>
        <div className="d-flex flex-wrap gap-3 mt-4 reveal">
          <a href={l.phoneHref} className="btn-gs lg"><Icon name="phone" size={18} /> {l.phone}</a>
          <Link href="/contact-us" className="btn-gs lg outline">Get Free Site Visit</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="card-gs reveal">
                <span className="pill yellow mb-3">{l.label}</span>
                <h3 className="mb-3">Grando Solar – {l.city}</h3>
                <p className="d-flex gap-2"><Icon name="pin" size={20} className="flex-shrink-0 text-navy" /> {l.address}</p>
                <p className="d-flex gap-2"><Icon name="phone" size={20} className="flex-shrink-0 text-navy" /> <a href={l.phoneHref}>{l.phone}</a></p>
                <p className="d-flex gap-2"><Icon name="mail" size={20} className="flex-shrink-0 text-navy" /> <a href={`mailto:${site.email}`}>{site.email}</a></p>
                <p className="d-flex gap-2 mb-4"><Icon name="bolt" size={20} className="flex-shrink-0 text-navy" /> DISCOM: {l.discom}</p>
                <div className="d-flex flex-wrap gap-2">
                  <a href={l.map} target="_blank" rel="noopener" className="btn-gs navy sm">Get Directions</a>
                  <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn-gs green sm"><Icon name="whatsapp" size={16} /> WhatsApp</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <SectionHeader tag="Areas we serve" title={`Rooftop, society and industrial solar across ${l.city}.`} />
              <p className="reveal">Our {l.city} team conducts free site visits, prepares 3D designs, files PM Surya Ghar subsidy applications with {l.discom}, and installs storm-safe HDGI structures with Tier-1 components. After commissioning, the same local team handles monitoring, cleaning and service.</p>
              <div className="d-flex flex-wrap gap-2 reveal">{l.areas.map((a) => <span className="pill light" key={a}>{a}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <SolutionsGrid theme="theme-sky" />
      <ProcessTimeline theme="" />
      <FaqSection items={cityFaqs} title={`Solar in ${l.city} — common questions`} theme="theme-sky" />
      <ContactPanel title={`Book a free site visit in ${l.city}.`} />
    </>
  );
}
