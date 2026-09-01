'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

/**
 * Lenis smooth scroll wired into GSAP's ticker so ScrollTrigger stays in sync.
 * Also runs the global reveal animations (.reveal, .reveal-img, .split-word) on every route.
 */
export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    // Scroll to top on route change, then set up reveals for the new page
    window.__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set('.reveal, .split-word > span', { opacity: 1, y: 0 });
        gsap.set('.reveal-img', { clipPath: 'inset(0 0 0% 0)' });
        return;
      }
      // Generic fade-up reveals (staggered per parent group when data-stagger is set)
      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        const items = group.querySelectorAll('.reveal');
        if (!items.length) return;
        gsap.to(items, {
          opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        });
      });
      gsap.utils.toArray('.reveal').forEach((el) => {
        if (el.closest('[data-stagger]')) return;
        gsap.to(el, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      });
      // Image clip reveals
      gsap.utils.toArray('.reveal-img').forEach((el) => {
        gsap.to(el, { clipPath: 'inset(0 0 0% 0)', duration: 1.3, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
      });
      // Word-by-word title reveals
      gsap.utils.toArray('[data-split]').forEach((el) => {
        const spans = el.querySelectorAll('.split-word > span');
        if (!spans.length) return;
        gsap.to(spans, { y: 0, duration: 0.9, stagger: 0.05, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      });
      // Parallax images
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const amt = parseFloat(el.dataset.parallax) || 12;
        gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    });
    // Keep trigger positions accurate as images/fonts load and layout shifts
    const refresh = () => ScrollTrigger.refresh();
    const t = setTimeout(refresh, 300);
    window.addEventListener('load', refresh);
    let ro;
    if ('ResizeObserver' in window) {
      let raf;
      ro = new ResizeObserver(() => { cancelAnimationFrame(raf); raf = requestAnimationFrame(refresh); });
      ro.observe(document.body);
    }
    return () => { clearTimeout(t); window.removeEventListener('load', refresh); ro?.disconnect(); ctx.revert(); };
  }, [pathname]);

  return children;
}
