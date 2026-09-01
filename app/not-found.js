import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="section theme-dark bg-grid" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 180 }}>
      <div className="container text-center">
        <span className="sec-tag">404</span>
        <h1 className="mt-3">This page has gone off-grid.</h1>
        <p className="sec-lead mx-auto">The link may be outdated. Head back home or book a free site visit.</p>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          <Link href="/" className="btn-gs">Back to home <span className="ico"><Icon name="arrow" size={18} /></span></Link>
          <Link href="/contact-us" className="btn-gs outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
