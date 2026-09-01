import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FaqSection from '@/components/sections/FaqSection';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { services, getService } from '@/data/services';
import { homeFaqs } from '@/data/faqs';
import { buildMetadata, breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import '@/components/sections/sections.css';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: `${s.title} – Grando Solar Gujarat`, description: `${s.short} ${s.intro.slice(0, 110)}…`, path: `/services/${s.slug}`, image: s.image });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: s.title, path: `/services/${s.slug}` }]),
        serviceJsonLd({ name: s.title, description: s.short, path: `/services/${s.slug}` }),
      ]} />
      <PageHero tag="Service" title={s.title} lead={s.short} crumbs={[{ name: 'Services', href: '/services' }, { name: s.title }]} image={s.image} />

      <section className="section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="feature-img reveal-img"><Image src={s.image} alt={s.title} fill sizes="(max-width: 991px) 100vw, 50vw" /></div>
            </div>
            <div className="col-lg-6">
              <SectionHeader tag="Overview" title={s.title} />
              <p className="reveal" style={{ fontSize: '1.08rem' }}>{s.intro}</p>
              <div className="row g-3 mt-2" data-stagger>
                {s.benefits.map((b) => (
                  <div className="col-sm-6" key={b}>
                    <div className="d-flex gap-3 align-items-center reveal">
                      <span className="icon-badge mb-0" style={{ width: 40, height: 40, minWidth: 40, borderRadius: 12, background: 'var(--gs-yellow)' }}><Icon name="check" size={18} strokeWidth={3} /></span>
                      <span className="fw-semibold text-navy">{b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section theme-sky bg-grid-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <SectionHeader tag="How it works" title="Step by step." />
              <Link href="/contact-us" className="btn-gs reveal">Get Free Site Visit <span className="ico"><Icon name="arrow" size={18} /></span></Link>
            </div>
            <div className="col-lg-8">
              <ol className="steps-list" data-stagger>{s.steps.map((st) => <li className="reveal" key={st}>{st}</li>)}</ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader tag="Other services" title="Everything else we handle for you." align="center" />
          <div className="row g-4 mt-2" data-stagger>
            {others.map((o) => (
              <div className="col-md-6 col-lg-4" key={o.slug}>
                <div className="card-gs reveal">
                  <span className="icon-badge"><Icon name={o.icon} /></span>
                  <h3 className="h4">{o.title}</h3>
                  <p className="small">{o.short}</p>
                  <Link href={`/services/${o.slug}`} className="link-arrow stretched-link" style={{ fontSize: '0.78rem' }}>Learn more <span className="circle"><Icon name="arrow" size={16} /></span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline theme="theme-sky" />
      <FaqSection items={homeFaqs.slice(1, 7)} />
      <ContactPanel />
    </>
  );
}
