import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCta from '@/components/layout/FloatingCta';
import Preloader from '@/components/layout/Preloader';
import JsonLd from '@/components/ui/JsonLd';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import { site } from '@/data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Grando Solar | Rooftop & Industrial Solar EPC Company in Gujarat', template: '%s | Grando Solar' },
  description: 'Grando Solar Energy installs storm-safe rooftop, ground-mounted and carport solar plants for homes, societies and industries across Surat, Vadodara, Vapi, Bharuch and Ahmedabad.',
  applicationName: 'Grando Solar',
  robots: { index: true, follow: true },
  other: { 'grando-build': 'v1.2-audit-complete-2026-08-31' },
  openGraph: { type: 'website', locale: 'en_IN', siteName: site.legalName },
};

export const viewport = { themeColor: '#0b2a5b', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Noto+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Preloader />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCta />
        </SmoothScroll>
      </body>
    </html>
  );
}
