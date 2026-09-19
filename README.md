# Imperium Plumbing — Website

Static marketing/lead-gen site for Imperium Plumbing. Next.js (App Router) + React + TypeScript + Tailwind CSS v4. No backend, no database — the contact form is a frontend-only stub ready to wire into a CRM or form provider.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Project structure

- `lib/config.ts` — single source of truth for business facts (name, phone, email, **service area/geography**). Change the service area here and it propagates to every page, metadata block, and JSON-LD schema.
- `lib/services-data.ts` — all 6 service pages' content (unique copy per page — symptoms, process, FAQs, etc).
- `lib/faq-data.ts`, `lib/problem-solution-data.ts` — homepage/FAQ content.
- `lib/schema.ts` — JSON-LD builders (LocalBusiness/Plumber, Service, FAQPage, BreadcrumbList, WebSite, Organization).
- `lib/seo.ts` — shared metadata builder used by every page.
- `lib/leads.ts` — **the one place to wire up real lead delivery.** Currently simulates success; set `NEXT_PUBLIC_LEAD_WEBHOOK_URL` to POST form submissions to a real endpoint (Formspree, a serverless function, a CRM webhook).
- `components/` — organized by domain (layout, navigation, hero, services, forms, cta, faq, trust, testimonials, service-area, seo).
- `app/` — routes, `sitemap.ts`, `robots.ts`, `icon.tsx` / `apple-icon.tsx` / `opengraph-image.tsx` (generated, no binary assets needed).

## What's a placeholder (do not treat as fact)

The source company document didn't include these — they're marked clearly in the UI/code so nothing fabricated ships as real:

- **Reviews** (`/reviews`, homepage testimonials) — `[CUSTOMER REVIEW WILL BE ADDED HERE]` slots, no fake reviews.
- **Brand colors** — approximated navy/gold (`app/globals.css` `@theme` block). No logo file was supplied; replace the `--color-navy-*` / `--color-gold-*` values once you have the real logo.
- **Photography** — the hero and all imagery use an abstract SVG mark instead of stock photos (see `components/hero/HeroGraphic.tsx`), since no real company photos were provided and the brief asked not to pass off stock photos as real staff/work. Swap in real photography via `next/image` wherever you like — no layout changes needed.
- **Social links, licenses, certifications, awards, review counts, pricing, guarantees** — none were supplied, so none appear anywhere on the site (see `businessConfig.social` in `lib/config.ts`, currently empty).
- **Privacy Policy / Terms** (`/privacy`, `/terms`) — structural placeholders, `noIndex`ed until replaced with real legal copy.

## Geography

The source document said "Bay Area" but the business actually operates out of **Chicago, IL** (confirmed directly). All copy, metadata, and schema use `businessConfig.primaryCity` / `serviceArea` from `lib/config.ts` — update those two fields if the service area ever changes; nothing else needs touching.

## Analytics / conversion tracking

Wired but inert until configured — see `analyticsConfig` in `lib/config.ts` and `trackEvent()`, which fires `phone_click`, `form_start`, `form_submit`, `request_service_click` once `NEXT_PUBLIC_GA_ID` or `NEXT_PUBLIC_GTM_ID` env vars are set. No placeholder tracking IDs are hardcoded.

## Deploying

Works on Vercel, Netlify, or any Node host that supports Next.js. Update `siteConfig.url` in `lib/config.ts` to the real production domain before launch (sitemap/canonical/OG URLs all derive from it).
