import PageHero from '@/components/sections/PageHero';
import { PostCard } from '@/components/home/BlogPreview';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { posts } from '@/data/blog';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Solar Blog – Subsidy, Savings & Installation Guides for Gujarat',
  description: 'Plain-language guides from Grando Solar on rooftop solar subsidy, savings, installation and maintenance for homes and businesses in Gujarat.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])} />
      <PageHero tag="Solar knowledge" title="Clear answers before you decide." lead="Guides written by the people who install and service the plants." crumbs={[{ name: 'Blog' }]} image="/images/home-roof.jpg" />
      <section className="section">
        <div className="container">
          <div className="row g-4" data-stagger>
            {posts.map((p) => <div className="col-md-6 col-lg-4" key={p.slug}><PostCard post={p} /></div>)}
          </div>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}
