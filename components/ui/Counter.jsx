'use client';
import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

export default function Counter({ to, prefix = '', suffix = '', duration = 2, className = 'stat-num' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (prefersReducedMotion()) { el.textContent = `${prefix}${to}${suffix}`; return undefined; }
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to, duration, ease: 'power2.out',
      onUpdate: () => { el.textContent = `${prefix}${Math.round(obj.v).toLocaleString('en-IN')}${suffix}`; },
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
    return () => tween.kill();
  }, [to, prefix, suffix, duration]);
  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
