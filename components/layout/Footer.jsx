import Link from 'next/link';
import Image from 'next/image';
import { site, locations } from '@/data/site';
import { solutions } from '@/data/solutions';
import { services } from '@/data/services';
import Icon from '@/components/ui/Icon';
import './footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container">
          <div className="footer-cta-box">
            <div>
              <span className="eyebrow">Ready to go solar?</span>
              <h2 className="mb-2">Book your free site visit today.</h2>
              <p className="mb-0">Our engineer measures your roof, runs a shadow analysis and shares a 3D design — free, no obligation.</p>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-gs lg">Get Free Site Visit <span className="ico"><Icon name="arrow" size={18} /></span></Link>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn-gs lg outline"><Icon name="whatsapp" size={18} /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="row g-5">
          <div className="col-lg-4">
            <Image src="/images/brand/logo-white.png" alt="Grando Solar Energy" width={200} height={42} className="footer-logo" />
            <p className="mt-3">
              Grando Solar Energy is a solar EPC company in Gujarat and a brand of {site.parent}. We design, install and maintain storm-safe rooftop, ground-mounted and carport solar plants for homes, societies, businesses and industries.
            </p>
            <div className="footer-badges">
              <span>Electrical Contractor Licence Approved</span>
              <span>Waaree Authorised Channel Partner</span>
              <span>Govt. Approved Channel Partner</span>
            </div>
            <div className="d-flex gap-2 mt-4">
              <a href={site.instagram} target="_blank" rel="noopener" className="soc" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href={site.facebook} target="_blank" rel="noopener" className="soc" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="soc" aria-label="WhatsApp"><Icon name="whatsapp" size={18} /></a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h4>Solutions</h4>
            <ul>{solutions.map((s) => <li key={s.slug}><Link href={`/solutions/${s.slug}`}>{s.title}</Link></li>)}</ul>
          </div>
          <div className="col-6 col-lg-2">
            <h4>Services</h4>
            <ul>
              {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>)}
              <li><Link href="/storm-safe-structure">Storm-Safe Structure</Link></li>
              <li><Link href="/pm-surya-ghar-subsidy">PM Surya Ghar Subsidy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/locations">Our Offices</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h4>Cities</h4>
            <ul>{locations.map((l) => <li key={l.slug}><Link href={`/locations/solar-company-in-${l.slug}`}>Solar in {l.city}</Link></li>)}</ul>
          </div>
        </div>

        <div className="footer-contact row g-4">
          <div className="col-md-4">
            <span className="lbl">Head Office</span>
            <p>{locations[0].address}</p>
          </div>
          <div className="col-md-4">
            <span className="lbl">Call Us</span>
            <a href={site.phoneHref} className="big">{site.phone}</a>
          </div>
          <div className="col-md-4">
            <span className="lbl">Email</span>
            <a href={`mailto:${site.email}`} className="big">{site.email}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-wrap justify-content-between gap-2">
          <span>© {year} {site.legalName}. All rights reserved. A brand of {site.parent}.</span>
          <span>Website by <a href="https://www.sassyinfotech.com/" target="_blank" rel="noopener" className="credit-link">Sassy Infotech Private Limited</a></span>
        </div>
      </div>
    </footer>
  );
}
