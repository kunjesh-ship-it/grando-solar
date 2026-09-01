import PageHero from '@/components/sections/PageHero';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = { ...buildMetadata({ title: 'Privacy Policy', description: 'How Grando Solar Energy collects, uses and protects your personal information.', path: '/privacy-policy' }), robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <>
      <PageHero tag="Legal" title="Privacy Policy" crumbs={[{ name: 'Privacy Policy' }]} />
      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: 820 }}>
            <p>{site.legalName} (a brand of {site.parent}) respects your privacy. This policy explains what information we collect through {site.url} and how we use it.</p>
            <h2>Information we collect</h2>
            <p>When you submit an enquiry form, call, email or message us on WhatsApp, we collect the details you provide — typically your name, phone number, city, property type, average electricity bill and any message. We also collect standard, non-identifying technical data such as browser type and pages visited to improve the website.</p>
            <h2>How we use it</h2>
            <p>We use your details only to respond to your enquiry, schedule site visits, prepare designs and quotations, process subsidy or loan applications you ask us to handle, and provide after-sales service. We do not sell your personal information.</p>
            <h2>Sharing</h2>
            <p>Your information may be shared with government portals, DISCOMs and financing partners solely to process applications you have requested, and with service providers that help us operate this website, under confidentiality obligations.</p>
            <h2>Retention and security</h2>
            <p>We keep enquiry data for as long as needed to serve you and meet legal obligations, and apply reasonable technical and organisational safeguards to protect it.</p>
            <h2>Your choices</h2>
            <p>You may request access to, correction of, or deletion of your personal data by writing to {site.email} or calling {site.phone}.</p>
            <h2>Updates</h2>
            <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
          </div>
        </div>
      </section>
    </>
  );
}
