# Grando Solar — Corporate Website

Next.js (App Router, JavaScript only) · React · Bootstrap 5 · GSAP + ScrollTrigger · Lenis · Google Fonts (Montserrat + Noto Sans).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Project structure

```
app/                     Routes (App Router). Every page exports SEO metadata.
  page.js                Homepage
  about-us/  solutions/[slug]  services/[slug]  storm-safe-structure/
  pm-surya-ghar-subsidy/ locations/[slug]  blog/[slug]  contact-us/  privacy-policy/
  sitemap.js robots.js   Auto-generated sitemap.xml and robots.txt
  api/lead/route.js      Lead form endpoint (see "Leads" below)
components/
  layout/                Header, Footer, SmoothScroll (Lenis + GSAP), Preloader, FloatingCta
  home/                  Homepage-only sections (Hero, WhyGrando, SavingsCalculator, …)
  sections/              Reusable sections (PageHero, ProcessTimeline, WhatWeGive, LocationsGrid, FaqSection, ContactPanel, …)
  ui/                    Small primitives (Icon, SplitText, Counter, Faq, LeadForm, JsonLd)
data/                    ALL site content lives here — edit these, not the components
  site.js                Contact details, offices, nav, partners, warranties, subsidy figures
  solutions.js services.js faqs.js blog.js
lib/seo.js               Metadata + JSON-LD builders (Organization, LocalBusiness, FAQ, Service, Article, Breadcrumb)
public/images/           Photos cropped from the 2026 brochure + logo
```

## Editing content

* Phone / WhatsApp / email / addresses → `data/site.js` (`site` and `locations`).
* Add a solution, service, FAQ or blog post → add an object to the matching file in `data/`. Pages, nav, footer and sitemap update automatically.
* Subsidy amounts → `data/site.js` → `subsidy`, and the calculator assumptions in `components/home/SavingsCalculator.jsx`.

## Leads

`POST /api/lead` receives the form. By default it logs to the server console.
Set `LEAD_WEBHOOK_URL` in `.env.local` to forward every lead as JSON to a webhook (Zapier, Make, Google Sheets, CRM, or your own email service). The form also offers a WhatsApp fallback with the details pre-filled.

## Animations

All scroll animations are driven by simple class hooks, handled once in `components/layout/SmoothScroll.jsx`:

* `.reveal` — fade-up on scroll (wrap a group in `data-stagger` to stagger children)
* `.reveal-img` — clip-path reveal for images
* `<SplitText />` — word-by-word title reveal
* `data-parallax="10"` — subtle parallax on an element
* `<Counter to={…} />` — count-up numbers (only use with real figures)

`prefers-reduced-motion` is respected everywhere.

## Before going live — content to add

* Real project photos → `/projects` page (currently intentionally not built) and image cards
* Verified customer testimonials → replace the Instagram block in `components/home/SocialProof.jsx`
* Partner / DISCOM logo files → `components/sections/PartnersMarquee.jsx` (currently text badges)
* Certificate scans (Waaree partner, electrical contractor licence) → About page
* Real numbers (years, installs, kW) → use `<Counter />` on the homepage
* Set `NEXT_PUBLIC_SITE_URL` / `site.url` if the domain changes, and add Google Search Console verification in `app/layout.js` metadata.
