'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import Icon from '@/components/ui/Icon';
import { site } from '@/data/site';
import './home.css';

const words = ['Power.', 'Performance.', 'Profit.'];

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const delay = sessionStorage.getItem('gs-loaded') === '1' && performance.now() < 4000 ? 1.9 : 0.2;
      const tl = gsap.timeline({ delay });
      tl.from('.hero-bg-img', { scale: 1.15, duration: 2.2, ease: 'power2.out' }, 0)
        .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7 }, 0.2)
        .to('.hero-title .split-word > span', { y: 0, duration: 1, stagger: 0.08, ease: 'power4.out' }, 0.3)
        .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8 }, 0.9)
        .to('.hero-ctas', { opacity: 1, y: 0, duration: 0.8 }, 1.05)
        .to('.hero-trust', { opacity: 1, y: 0, duration: 0.8 }, 1.2)
        .to('.hero-card', { opacity: 1, y: 0, rotate: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, 0.8)
        .to('.hero-scroll', { opacity: 1, duration: 0.6 }, 1.6);

      gsap.to('.hero-bg-img', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-content', { yPercent: -10, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero-bg">
        <Image src="/images/structure-wide.jpg" alt="Grando Solar storm-safe elevated solar structure on a Gujarat rooftop" fill priority sizes="100vw" className="hero-bg-img" />
        <div className="hero-veil" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 hero-content">
            <span className="hero-eyebrow"><span className="dot" /> Solar EPC Company · Gujarat, India</span>
            <h1 className="hero-title">
              {words.map((w, i) => (
                <span className="split-word" key={i}>
                  <span className={i >= 2 ? 'accent' : ''}>{w}</span>
                </span>
              ))}
              <br />
              <span className="split-word"><span className="thin">Turn your rooftop into a long-term energy asset.</span></span>
            </h1>
            <p className="hero-sub">
              Grando Solar delivers end-to-end solar solutions for homes, housing societies, businesses and industries — engineered on storm-safe structures and supported by offices in Surat, Vadodara, Vapi, Bharuch and Ahmedabad. Subsidy and financing assistance included.
            </p>
            <div className="hero-ctas">
              <Link href="/contact-us" className="btn-gs lg">Get Free Site Visit <span className="ico"><Icon name="arrow" size={18} /></span></Link>
              <a href={site.whatsappHref} target="_blank" rel="noopener" className="btn-gs lg outline"><Icon name="whatsapp" size={18} /> WhatsApp Us</a>
            </div>
            <ul className="hero-trust">
              <li><Icon name="shield" size={18} /> Electrical contractor licence approved</li>
              <li><Icon name="star" size={18} /> Waaree authorised channel partner</li>
              <li><Icon name="pin" size={18} /> 5 offices across Gujarat</li>
            </ul>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-cards">
              <div className="hero-card card-a">
                <span className="hc-label">PM Surya Ghar subsidy</span>
                <strong>₹78,000</strong>
                <span className="hc-sub">for 3 kW+ home systems, credited to your account</span>
              </div>
              <div className="hero-card card-b">
                <span className="hc-label">Storm-safe structure</span>
                <strong>HDGI + SS304</strong>
                <span className="hc-sub">pre-fabricated, no on-site welding, rust-proof</span>
              </div>
              <div className="hero-card card-c">
                <span className="hc-label">Plant warranty</span>
                <strong>5 yrs</strong>
                <span className="hc-sub">free repair &amp; replacement · 10-yr inverter warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll"><span /> Scroll</div>
    </section>
  );
}
