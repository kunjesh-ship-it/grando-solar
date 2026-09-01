import Hero from '@/components/home/Hero';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import ProblemSolution from '@/components/home/ProblemSolution';
import WhyGrando from '@/components/home/WhyGrando';
import SavingsCalculator from '@/components/home/SavingsCalculator';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import SubsidyBand from '@/components/home/SubsidyBand';
import AboutIntro from '@/components/home/AboutIntro';
import SiteTypes from '@/components/home/SiteTypes';
import WhatWeGive from '@/components/sections/WhatWeGive';
import SocialProof from '@/components/home/SocialProof';
import LocationsGrid from '@/components/sections/LocationsGrid';
import FaqSection from '@/components/sections/FaqSection';
import BlogPreview from '@/components/home/BlogPreview';
import ContactPanel from '@/components/sections/ContactPanel';
import { homeFaqs } from '@/data/faqs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Grando Solar | Rooftop, Society & Industrial Solar EPC Company in Gujarat',
  description:
    'Grando Solar Energy installs storm-safe rooftop, housing-society, industrial, ground-mounted and carport solar plants across Surat, Vadodara, Vapi, Bharuch and Ahmedabad. PM Surya Ghar subsidy and loan paperwork handled. Book a free site visit.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <SolutionsGrid />
      <ProblemSolution />
      <WhyGrando />
      <SavingsCalculator />
      <ProcessTimeline />
      <SubsidyBand />
      <AboutIntro />
      <SiteTypes />
      <WhatWeGive />
      <SocialProof />
      <LocationsGrid />
      <FaqSection items={homeFaqs} />
      <BlogPreview />
      <ContactPanel />
    </>
  );
}
