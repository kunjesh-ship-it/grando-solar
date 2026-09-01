import Link from 'next/link';
import Faq from '@/components/ui/Faq';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import JsonLd from '@/components/ui/JsonLd';
import { faqJsonLd } from '@/lib/seo';
import { site } from '@/data/site';

export default function FaqSection({ items, title = 'Questions people ask before going solar', tag = 'FAQ', theme = '', withSchema = true }) {
  return (
    <section className={`section ${theme}`}>
      {withSchema && <JsonLd data={faqJsonLd(items)} />}
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <SectionHeader tag={tag} title={title} />
            <p className="reveal">Still have a question? Ask us directly — a Grando engineer will answer, not a bot.</p>
            <div className="d-flex flex-wrap gap-2 reveal">
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn-gs green sm"><Icon name="whatsapp" size={16} /> WhatsApp</a>
              <Link href="/contact-us" className="btn-gs navy sm">Contact Us</Link>
            </div>
          </div>
          <div className="col-lg-8">
            <Faq items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
