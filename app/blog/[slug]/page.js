import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import { PostCard } from '@/components/home/BlogPreview';
import ContactPanel from '@/components/sections/ContactPanel';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/ui/JsonLd';
import { posts, getPost } from '@/data/blog';
import { site } from '@/data/site';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, image: p.image, type: 'article' });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const others = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const date = new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: p.title, path: `/blog/${p.slug}` }]), articleJsonLd(p)]} />
      <PageHero tag={p.category} title={p.title} lead={p.excerpt} crumbs={[{ name: 'Blog', href: '/blog' }, { name: p.title }]} image={p.image}>
        <p className="reveal mt-3" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Published {date} · Grando Solar Energy</p>
      </PageHero>
      <article className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="feature-img reveal-img mb-5" style={{ aspectRatio: '16 / 9' }}><Image src={p.image} alt={p.title} fill sizes="(max-width: 991px) 100vw, 66vw" /></div>
              <div className="prose">{p.body.map((para, i) => <p key={i}>{para}</p>)}</div>
              <div className="card-gs mt-5" style={{ background: 'var(--gs-navy-900)', borderColor: 'transparent' }}>
                <h3 style={{ color: '#fff' }}>Want the exact number for your roof?</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)' }}>Book a free site visit — our engineer measures, analyses and designs before you spend anything.</p>
                <div className="d-flex flex-wrap gap-2">
                  <Link href="/contact-us" className="btn-gs">Get Free Site Visit <span className="ico"><Icon name="arrow" size={18} /></span></Link>
                  <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn-gs green"><Icon name="whatsapp" size={18} /> WhatsApp</a>
                </div>
              </div>
            </div>
            <aside className="col-lg-4">
              <h3 className="h4 mb-3">More articles</h3>
              <div className="d-grid gap-4" data-stagger>{others.map((o) => <PostCard post={o} key={o.slug} />)}</div>
            </aside>
          </div>
        </div>
      </article>
      <ContactPanel />
    </>
  );
}
