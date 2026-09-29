import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { site } from '@/data/site';
import './sections.css';

export default function ReadyToGoSolar() {
  return (
    <section className="section-sm theme-dark bg-grid" style={{borderTop:"1px solid #ffffff",}}>
      <div className="footer-cta">
        <div className="container">
          <div className="footer-cta-box" style={{marginTop: "0",}}>
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
    </section>
  );
}
