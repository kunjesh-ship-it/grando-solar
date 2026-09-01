import PageHero from '@/components/sections/PageHero';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FaqSection from '@/components/sections/FaqSection';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { homeFaqs } from '@/data/faqs';

export const metadata = buildMetadata({
  title: 'Solar Solutions – Residential, Society, Commercial & Industrial Solar in Gujarat',
  description: 'Explore Grando Solar’s rooftop, housing-society, commercial, industrial, ground-mounted and carport solar solutions across Gujarat. Free site visit and 3D design.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }])} />
      <PageHero tag="Solutions" title="Solar for every roof, every load, every budget." lead="Choose the solution that matches your property. Every one is built on the same storm-safe structure, Tier-1 components and end-to-end service." crumbs={[{ name: 'Solutions' }]} image="/images/panel-array.jpg" />
      <SolutionsGrid header={false} />
      <ProcessTimeline />
      <FaqSection items={homeFaqs.slice(0, 6)} />
      <ContactPanel />
    </>
  );
}
