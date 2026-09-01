import PageHero from '@/components/sections/PageHero';
import LocationsGrid from '@/components/sections/LocationsGrid';
import ContactPanel from '@/components/sections/ContactPanel';
import JsonLd from '@/components/ui/JsonLd';
import { buildMetadata, breadcrumbJsonLd, allLocalBusinessJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Offices – Solar Company in Surat, Vadodara, Vapi, Bharuch & Ahmedabad',
  description: 'Grando Solar offices across Gujarat: Surat (head office), Vadodara, Vapi, Bharuch and Ahmedabad. Local engineers, local service, free site visits.',
  path: '/locations',
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }]), ...allLocalBusinessJsonLd()]} />
      <PageHero tag="Our presence" title="Five offices. One team across Gujarat." lead="Wherever your roof is in Gujarat, a Grando engineer is nearby for survey, installation and service." crumbs={[{ name: 'Locations' }]} />
      <LocationsGrid showHeader={false} />
      <ContactPanel />
    </>
  );
}
