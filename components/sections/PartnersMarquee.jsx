'use client';
import { useEffect, useRef } from 'react';
import { partners } from '@/data/site';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import './sections.css';

export default function PartnersMarquee({ dark = false }) {
  const track = useRef(null);
  useEffect(() => {
    if (prefersReducedMotion() || !track.current) return undefined;
    const tween = gsap.to(track.current, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
    const el = track.current;
    const pause = () => tween.pause();
    const play = () => tween.play();
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', play);
    return () => { tween.kill(); el.removeEventListener('mouseenter', pause); el.removeEventListener('mouseleave', play); };
  }, []);

  const items = [...partners, ...partners];
  return (
    <div className={`partners ${dark ? 'dark' : ''}`}>
      <div className="container">
        <p className="partners-label">Government-approved channel partner &amp; authorised by</p>
      </div>
      <div className="marquee" aria-label="Approvals and partners">
        <div className="marquee-track" ref={track}>
          {items.map((p, i) => (
            <span className="marquee-item" key={i}>
              <span className="dot" />
              <span>{p.name}<small>{p.note}</small></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
