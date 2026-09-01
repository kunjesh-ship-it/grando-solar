import { site, locations } from '@/data/site';
import { solutions } from '@/data/solutions';
import { services } from '@/data/services';
import { posts } from '@/data/blog';

export default function sitemap() {
  const now = new Date();
  const url = (p) => `${site.url}${p}`;
  const entries = [
    { url: url('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: url('/about-us'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/solutions'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/services'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/storm-safe-structure'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/pm-surya-ghar-subsidy'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/locations'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: url('/contact-us'), lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    ...solutions.map((s) => ({ url: url(`/solutions/${s.slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.85 })),
    ...services.map((s) => ({ url: url(`/services/${s.slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.8 })),
    ...locations.map((l) => ({ url: url(`/locations/solar-company-in-${l.slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.85 })),
    ...posts.map((p) => ({ url: url(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: 'yearly', priority: 0.6 })),
  ];
  return entries;
}
