import Link from 'next/link';
import Image from 'next/image';
import SplitText from '@/components/ui/SplitText';

export default function PageHero({ tag, title, lead, crumbs = [], image = '/images/structure-wide.jpg', children }) {
  return (
    <section className="page-hero">
      <div className="hero-bg"><Image src={image} alt="" fill sizes="100vw" priority data-parallax="8" /></div>
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i}>{c.href ? <Link href={c.href}>{c.name}</Link> : c.name}</span>
          ))}
        </nav>
        {tag && <span className="sec-tag reveal">{tag}</span>}
        <SplitText as="h1" text={title} />
        {lead && <p className="lead reveal">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
