'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/data/site';
import Icon from '@/components/ui/Icon';
import './header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    if (open) window.__lenis?.stop(); else window.__lenis?.start();
    return () => { document.body.classList.remove('nav-open'); };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <div className="topbar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <a href={site.phoneHref}><Icon name="phone" size={14} /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Icon name="mail" size={14} /> {site.email}</a>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <span><Icon name="pin" size={14} /> Surat · Vadodara · Vapi · Bharuch · Ahmedabad</span>
            <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" size={15} /></a>
            <a href={site.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Icon name="facebook" size={15} /></a>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/" className="brand" aria-label="Grando Solar home">
            <Image src="/images/brand/logo.png" alt="Grando Solar Energy" width={190} height={40}  />
          </Link>

          <nav className="main-nav d-none d-lg-flex" aria-label="Primary">
            {nav.map((item) => (
              <div className={`nav-item ${item.children ? 'has-sub' : ''}`} key={item.href}>
                <Link href={item.href} className={isActive(item.href) ? 'active' : ''}>
                  {item.label}
                  {item.children && <Icon name="chevron" size={14} />}
                </Link>
                {item.children && (
                  <div className="sub-menu">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className={pathname === c.href ? 'active' : ''}>{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="d-flex align-items-center gap-2 gap-lg-3">
            <Link href="/contact-us" className="btn-gs sm d-none d-sm-inline-flex">Get Free Site Visit <span className="ico"><Icon name="arrow" size={18} /></span></Link>
            <button className="hamburger d-lg-none" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <Icon name="menu" size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-nav ${open ? 'show' : ''}`} data-lenis-prevent>
        <div className="mobile-nav-head">
          <Image src="/images/brand/logo.png" alt="Grando Solar" width={150} height={32} />
          <button className="hamburger" aria-label="Close menu" onClick={() => setOpen(false)}><Icon name="close" size={26} /></button>
        </div>
        <nav aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.href} className={`m-item ${sub === item.href ? 'open' : ''}`}>
              <div className="m-row">
                <Link href={item.href}>{item.label}</Link>
                {item.children && (
                  <button aria-label={`Expand ${item.label}`} onClick={() => setSub(sub === item.href ? null : item.href)}><Icon name="chevron" size={18} /></button>
                )}
              </div>
              {item.children && (
                <div className="m-sub">
                  {item.children.map((c) => <Link key={c.href} href={c.href}>{c.label}</Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mobile-nav-foot">
          <a href={site.phoneHref} className="btn-gs navy w-100 justify-content-center"><Icon name="phone" size={18} /> {site.phone}</a>
          <a href={site.whatsappHref} className="btn-gs green w-100 justify-content-center" target="_blank" rel="noopener"><Icon name="whatsapp" size={18} /> WhatsApp Us</a>
        </div>
      </div>
      <div className={`mobile-backdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
    </>
  );
}
