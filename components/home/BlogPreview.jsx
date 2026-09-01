import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/blog';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './home.css';

const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card reveal">
      <div className="pc-img"><Image src={post.image} alt={post.title} fill sizes="(max-width: 767px) 100vw, 33vw" /></div>
      <div className="pc-body">
        <div className="pc-meta"><span className="cat">{post.category}</span><span>{fmtDate(post.date)}</span></div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  );
}

export default function BlogPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-end g-4 mb-5">
          <div className="col-lg-7"><SectionHeader tag="Solar knowledge" title="Clear answers before you decide." accent={['Clear']} /></div>
          <div className="col-lg-5 text-lg-end"><Link href="/blog" className="link-arrow reveal">All articles <span className="circle"><Icon name="arrow" size={18} /></span></Link></div>
        </div>
        <div className="row g-4" data-stagger>
          {posts.slice(0, 3).map((p) => <div className="col-md-6 col-lg-4" key={p.slug}><PostCard post={p} /></div>)}
        </div>
      </div>
    </section>
  );
}
