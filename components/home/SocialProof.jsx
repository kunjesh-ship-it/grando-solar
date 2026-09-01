import { site } from '@/data/site';
import Icon from '@/components/ui/Icon';
import './home.css';

/**
 * Testimonials are intentionally NOT shown until verified customer reviews are supplied.
 * This block points to Grando's active Instagram (real installs, reels and customer stories).
 */
export default function SocialProof() {
  return (
    <section className="section-sm">
      <div className="container">
        <div className="insta-card reveal">
          <div>
            <span className="eyebrow">See our work</span>
            <h3 className="mt-2 mb-2">Real installs, real customers — on Instagram.</h3>
            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520 }}>Follow @grandosolar for site stories, reels from rooftops across Gujarat and customer testimonials.</p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-4">
            <div className="insta-stats">
              <div><strong>14.5K+</strong><span>followers</span></div>
              <div><strong>100+</strong><span>posts &amp; reels</span></div>
            </div>
            <a href={site.instagram} target="_blank" rel="noopener" className="btn-gs"><Icon name="instagram" size={18} /> @grandosolar</a>
          </div>
        </div>
      </div>
    </section>
  );
}
