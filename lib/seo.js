import { site, locations } from '@/data/site';

export const absolute = (path = '/') => `${site.url}${path === '/' ? '' : path}`;

/** Build Next.js metadata for a page */
export function buildMetadata({ title, description, path = '/', image = '/images/structure-wide.jpg', type = 'website' }) {
  const fullTitle = path === '/' ? title : `${title} | Grando Solar`;
  const url = absolute(path);
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.legalName,
      locale: 'en_IN',
      type,
      images: [{ url: absolute(image), width: 1600, height: 900, alt: title }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [absolute(image)] },
  };
}

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: absolute('/images/brand/logo.png'),
  email: site.email,
  telephone: site.phone,
  slogan: site.tagline,
  parentOrganization: { '@type': 'Organization', name: site.parent },
  sameAs: [site.instagram, site.facebook],
  areaServed: { '@type': 'State', name: 'Gujarat' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18, Navjivan Ind. Co-op Service Society, Udhna Magdalla Road, Khatodara',
    addressLocality: 'Surat',
    addressRegion: 'Gujarat',
    postalCode: '395002',
    addressCountry: 'IN',
  },
  contactPoint: [{ '@type': 'ContactPoint', telephone: site.phone, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en', 'hi', 'gu'] }],
});

export const localBusinessJsonLd = (loc) => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Electrician'],
  '@id': `${site.url}/locations/solar-company-in-${loc.slug}#business`,
  name: `Grando Solar – ${loc.city}`,
  parentOrganization: { '@id': `${site.url}/#organization` },
  url: absolute(`/locations/solar-company-in-${loc.slug}`),
  image: absolute('/images/structure-wide.jpg'),
  telephone: loc.phone,
  email: site.email,
  priceRange: '₹₹',
  address: { '@type': 'PostalAddress', streetAddress: loc.address, addressLocality: loc.city, addressRegion: 'Gujarat', addressCountry: 'IN' },
  areaServed: loc.areas.map((a) => ({ '@type': 'Place', name: a })),
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '19:00' }],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Rooftop Solar Installation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Industrial Solar EPC' } },
  ],
});

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.legalName,
  publisher: { '@id': `${site.url}/#organization` },
  inLanguage: 'en-IN',
});

export const faqJsonLd = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const serviceJsonLd = ({ name, description, path, type = 'Service' }) => ({
  '@context': 'https://schema.org',
  '@type': type,
  name,
  description,
  url: absolute(path),
  provider: { '@id': `${site.url}/#organization` },
  areaServed: { '@type': 'State', name: 'Gujarat' },
  serviceType: 'Solar energy system installation',
});

export const breadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absolute(it.path) })),
});

export const articleJsonLd = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: absolute(post.image),
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Organization', name: site.legalName },
  publisher: { '@id': `${site.url}/#organization` },
  mainEntityOfPage: absolute(`/blog/${post.slug}`),
});

export const allLocalBusinessJsonLd = () => locations.map(localBusinessJsonLd);
