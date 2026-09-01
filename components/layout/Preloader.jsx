'use client';
import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import './preloader.css';

export default function Preloader() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReducedMotion() || sessionStorage.getItem('gs-loaded')) { el.remove(); return undefined; }
    sessionStorage.setItem('gs-loaded', '1');
    document.body.classList.add('is-loading');
    const tl = gsap.timeline({
      onComplete: () => { el.remove(); document.body.classList.remove('is-loading'); },
    });
    tl.to('.pre-ring', { rotate: 360, duration: 1.1, ease: 'power2.inOut' })
      .to('.pre-word span', { y: 0, duration: 0.6, stagger: 0.04, ease: 'power4.out' }, 0.2)
      .to(el, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '+=0.25');
    return () => tl.kill();
  }, []);

  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <div className="pre-inner">
        <div className="pre-ring" />
        <div className="pre-word">{'GRANDO SOLAR'.split('').map((c, i) => <span key={i}>{c === ' ' ? ' ' : c}</span>)}</div>
      </div>
    </div>
  );
}
