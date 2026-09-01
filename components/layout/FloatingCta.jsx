import Link from 'next/link';
import { site } from '@/data/site';
import Icon from '@/components/ui/Icon';
import './floating.css';

export default function FloatingCta() {
  return (
    <>
      <a href={site.whatsappHref} target="_blank" rel="noopener" className="wa-float d-none d-md-grid" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={28} />
        <span className="wa-tip">Chat with us</span>
      </a>
      <div className="mobile-cta d-md-none">
        <a href={site.phoneHref}><Icon name="phone" size={18} /> Call</a>
        <a href={site.whatsappHref} target="_blank" rel="noopener" className="wa"><Icon name="whatsapp" size={18} /> WhatsApp</a>
        <Link href="/contact-us" className="primary"><Icon name="ruler" size={18} /> Free Site Visit</Link>
      </div>
    </>
  );
}
