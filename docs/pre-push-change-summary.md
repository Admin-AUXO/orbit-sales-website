# Orbit Website — What's Changing, and Why

**For:** the executive team and engineering (Karthik).
**About:** everything in the current working version of the site that hasn't been published yet.
**Goal:** so everyone — technical or not — understands what we built, what we reused from the old
Wix site, and the thinking behind the big decisions.

---

## In one minute

We took the new website from a rough scaffold to **launch-ready**. In plain terms:

- **Booking a demo now works smoothly.** One clean, on-brand pop-up, no glitches.
- **We can finally measure what's working** — which pages convert, where people drop off — with
  privacy handled properly.
- **We're on the right side of the law** — a cookie banner and updated privacy/terms built for
  India's DPDP Act and Europe's GDPR.
- **The site is fuller and more polished** — a careers section, a smarter homepage, a branded
  "page not found" screen, and cleaner visuals throughout.

Nothing is live yet. This is the review before we publish.

**By the numbers:** ~130 files updated, 70 new, 50 removed. Roughly 3,500 lines changed.

---

## What changed, explained

Each item below is written for everyone, with a short **Technical note** for engineering.

### 1. Booking a demo — the thing that earns us money

Orbit is a premium, high-touch product, so the website's single most important job is to get the
right person onto a call. Every "Book a Demo" button now opens **one consistent, brand-styled
scheduling pop-up**. We deliberately did **not** build an online checkout — a conversation
converts far better than a shopping cart for a product at this price and stage.

We also fixed a rough edge: on desktop the scheduler used to show an ugly inner scrollbar. It now
sizes itself perfectly to the content.

> **Technical note:** the booking pop-up is a global `CalendlyModal` opened via a custom event;
> CTAs render `BookDemoButton`. The scrollbar fix replaces the hand-coded `<iframe>` with
> Calendly's official `widget.js` + `initInlineWidget({ resize: true })`, which auto-sizes to
> content (a raw iframe can't — its scrollbar sits inside Calendly's own document, untouchable by
> our CSS). A booking fires the `schedule_demo` conversion event.

### 2. Knowing what works — analytics

Until now we were flying blind. The site now reports into **Google Analytics 4** (a fresh, clean
account) and **Microsoft Clarity** (which records anonymized session playbacks and heatmaps, so we
can literally watch where people hesitate). We track the moments that matter: demo bookings, career
applications, FAQ opens, contact clicks, and how far people get in the interactive report.

> **Technical note:** GA4 `G-F75KF0N3SH` via `@next/third-parties`; Clarity `x9xec923ng`. Events
> run through one helper (`lib/analytics.ts`) that dual-fires to GA4 + Vercel. Key events:
> `schedule_demo`, `careers_apply`.

### 3. Asking permission — consent & privacy

Because Orbit deals with sensitive brain and body data, we're held to a high bar. The site now
shows a **cookie consent banner**, and analytics stay **switched off until the visitor agrees**.
The Privacy Policy and Terms were rewritten to cover India's DPDP Act and Europe's GDPR — including
explicit consent for biometric data, the right to withdraw, and a named point of contact for data
questions.

> **Technical note:** Consent Mode v2 — defaults to "denied", upgrades on accept
> (`CookieConsent.tsx` + `lib/consent.ts`). Clarity loads only after consent. Personal-data form
> fields are masked in recordings.
>
> **Needs a human:** a real Grievance Officer name and a lawyer's final sign-off.

### 4. New pages

- **Careers** — real job listings with their own detail pages and an application form (with résumé
  upload) that emails applications to the team.
- **Privacy Policy & Terms** — rewritten and expanded (see above).
- **Styleguide** — an internal, hidden page documenting our colors, fonts, and components so the
  site stays consistent as it grows.

### 5. A smarter homepage

We resequenced the homepage to tell a tighter story — problem, product, proof — and added sections
that build trust: the CES launch moment, partner credibility, real press highlights, and the team.
We removed a pile of leftover early-draft sections that no longer fit.

### 6. The interactive report tour

The `/report` walkthrough that shows a sample Orbit report was rebuilt to feel on-brand. One busy,
hard-to-read "rainbow" chart was redrawn cleanly so it's legible on phones.

> **Technical note:** the chart is now a coded SVG (`CognitiveStateTimeline.tsx`) using brand color
> tokens, not an exported image — so it stays on-brand and needs no re-export.

### 7. A consistent look

We built a small kit of reusable building blocks (buttons, badges, section layouts, accordions) so
every page looks like it belongs to the same product, and so future changes are faster and safer.

### 8. Polish

- A **branded "page not found" (404)** screen — if someone hits a broken or hidden link, they get
  an on-brand page with a way back, not a blank error.
- A **custom social-share image** — when the site is shared on LinkedIn, X, or WhatsApp, it shows a
  designed preview with our logo and tagline.
- Cleaner imagery throughout, with the whole image library tidied and consistently named.

> **Technical note:** `app/not-found.tsx`; the middleware now renders this branded page (with a
> real 404 status + noindex) for hidden routes instead of a blank body. The share image is
> generated in code (`app/opengraph-image.tsx`), so there's no static asset to maintain.

---

## What we reused from the old Wix site

We didn't start from a blank page. The Wix site was our **content and image source**. Using a Wix
access key and a small fetch script, we pulled across and optimized:

- **Product and lifestyle photos** — the Orbit device renders and the hero imagery (executives,
  athletes, musicians, and so on).
- **Credibility logos** — partners (IIT Madras, BIRAC, IAF, and more), press, and CES 2025.
- **Press & news highlights** — the real LinkedIn posts, the Ather investment article, the
  founder's story.
- **Team** — the photos and the confirmed roster of names and roles.
- **Careers** — the actual job descriptions.
- **Copy** — the FAQ answers, the $250 price, phone number, social links, and the **starting text
  for the Privacy Policy and Terms** (which we then expanded).

What we did **not** carry over: Wix's analytics account (we started clean), its page structure, or
its third-party form embeds (which couldn't be measured properly).

---

## The big decisions, and the reasoning

| Decision | Why |
|---|---|
| **Book a demo, no online checkout** | Premium, high-touch product — a sales conversation converts better than a cart, and it avoids building payments before launch. |
| **A fresh analytics account, not Wix's** | Wix's data is tangled and mis-configured. A clean start means we can trust the numbers from day one. The old account stays untouched on the live Wix site until we switch over. |
| **Cookie banner + consent built in** | We handle biometric and analytics data; Indian and EU law require clear, withdrawable consent. |
| **Charts and the share image are "drawn in code," not exported pictures** | They always match our brand, read well on mobile, and never need re-exporting when the brand evolves. |
| **Some pages built but hidden** (`/buy`, athletes, executives, etc.) | They're ready behind a switch, so we can launch lean now and turn them on without a rebuild. |
| **American spelling + USD pricing** | Matches the audience and the price we present. |

---

## Before we go live

A short, honest checklist of what's still owed — most of it is configuration, not building:

- **Settings:** add the analytics, Calendly, site, and email keys in our hosting (Vercel), then
  redeploy.
- **Email:** confirm the Calendly account and verify our email-sending domain so career
  applications actually arrive.
- **Legal:** name a Grievance Officer and get a lawyer's sign-off on Privacy/Terms.
- **Analytics setup:** mark the key conversions, set data retention, and exclude our own team's
  traffic.
- **Search:** verify the domain with Google Search Console and submit the sitemap.
- **Go-live:** point the `neuro-stellar.com` domain from Wix to the new site.

---

## For engineering — shipping this safely

- This work is **uncommitted**. Commit it on a branch and open a PR; don't push straight to `main`.
- It **will conflict** with the latest `main` commit `c7dcf4e` ("refine CTA copy, footer socials,
  and section polish"), which edits 5 files we also changed: `app/page.tsx`,
  `components/layout/Footer.tsx`, `components/sections/ProblemStatement.tsx`,
  `components/sections/ProductDemo.tsx`, `lib/cta-content.ts`. Reconcile those by hand.
- `npm run verify` (lint, types, tests, link check, build) must pass — it does today.
- Commit once so line endings (LF→CRLF) normalize together, or later diffs look noisy.
