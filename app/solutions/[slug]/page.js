import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import WhatWeGive from '@/components/sections/WhatWeGive';
import FaqSection from '@/components/sections/FaqSection';
import ContactPanel from '@/components/sections/ContactPanel';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import JsonLd from '@/components/ui/JsonLd';
import { solutions, getSolution } from '@/data/solutions';
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return buildMetadata({ title: `${s.title} in Gujarat`, description: `${s.short} ${s.intro.slice(0, 120)}…`, path: `/solutions/${s.slug}`, image: s.image });
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }, { name: s.title, path: `/solutions/${s.slug}` }]),
        serviceJsonLd({ name: s.title, description: s.short, path: `/solutions/${s.slug}` }),
      ]} />
      <PageHero tag={s.title} title={s.hero} lead={s.short} crumbs={[{ name: 'Solutions', href: '/solutions' }, { name: s.title }]} image={s.image}>
        <div className="d-flex flex-wrap gap-3 mt-4 reveal">
          <Link href="/contact-us" className="btn-gs lg">{s.cta} <span className="ico"><Icon name="arrow" size={18} /></span></Link>
          <a href="#included" className="btn-gs lg outline">What’s included</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <SectionHeader tag="Overview" title={s.title} />
              <p className="reveal" style={{ fontSize: '1.08rem' }}>{s.intro}</p>
              <h3 className="h4 mt-4 reveal">Ideal for</h3>
              <ul className="check-list reveal">{s.forWhom.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
            <div className="col-lg-6">
              <div className="feature-img reveal-img">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 991px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-sky bg-grid-light">
        <div className="container">
          <SectionHeader tag="What holds people back" title="The concerns we solve." accent={['solve.']} align="center" />
          <div className="tick-grid mt-5" data-stagger>
            {s.painPoints.map((p, i) => (
              <div className="tick-card reveal" key={p.title}>
                <span className="icon-badge">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3><p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-navy bg-grid" id="included">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <SectionHeader tag="What’s included" title="Everything, from survey to service." accent={['Everything,']} />
              <p className="reveal">One accountable partner for design, supply, installation, approvals and after-sales.</p>
              <Link href="/contact-us" className="btn-gs reveal">{s.cta} <span className="ico"><Icon name="arrow" size={18} /></span></Link>
            </div>
            <div className="col-lg-7">
              <ul className="check-list reveal" style={{ columns: 1 }}>{s.included.map((i) => <li key={i} style={{ fontSize: '1.05rem', padding: '10px 0', borderBottom: '1px solid var(--gs-line-dark)' }}>{i}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline theme="" />
      <WhatWeGive theme="theme-dark" />
      <FaqSection items={s.faqs} title={`${s.title} — common questions`} />
      <SolutionsGrid exclude={s.slug} theme="theme-sky" />
      <ContactPanel intent={s.cta} title={`Ready for ${s.title.toLowerCase()}? Start with a free visit.`} />
    </>
  );
}
