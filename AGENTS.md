<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from your training data. Before writing code, read the relevant guide in `node_modules/next/dist/docs/` and follow any deprecation notices.
<!-- END:nextjs-agent-rules -->

# Neurostellar Orbit — Agent Guide

The production marketing site for **Neurostellar Orbit**, a mental-fitness wearable. Next.js 16 (App Router) + React 19 + Tailwind v4 + Framer Motion, deployed on Vercel.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (must pass before you finish)
- `npm run lint` — ESLint (must be clean — zero warnings)
- `npm run typecheck` — `tsc --noEmit`
- `npm run test` — Vitest unit tests (pure logic in `lib/`)
- `npm run check-links` — static link audit (broken + disabled-route links)
- `npm run verify` — lint + typecheck + test + check-links + build (run before finishing)

Always run `npm run verify` before declaring a task done.

## Where things live
- `app/` — routes (one folder per page), `api/`, `sitemap.ts`, `robots.ts`, `layout.tsx`
- `components/` — `ui/` (primitives), `layout/`, `sections/` (page blocks), `orbit/`, `report-tour/`, `forms/`, `seo/`
- `content/` — case studies, trials, FAQ as JSON + the writing guide. Edit copy here.
- `lib/` — content loaders, `seo.ts` (metadata + JSON-LD), `brand.ts` (asset map), `analytics.ts`, `cta-content.ts`
- `styles/tokens.css` — design tokens as `--ns-*` CSS variables in **oklch**, wired to Tailwind via `@theme inline`. Change colors only here.
- `public/brand/` — logos, fonts, device renders, hero tiles
- `docs/analytics/` — GA4, UTM, GSC, Clarity plans. `docs/deployment-and-domain-port.md` — deploy + DNS.

## Conventions
- **No code comments** unless load-bearing (eslint directives, TODO/FIXME).
- **American English** everywhere (matches the `en_US` locale + USD pricing).
- **Colors:** use `--ns-*` oklch tokens or `ns-*` Tailwind classes. No raw hex for brand colors.
- **One `<h1>` per page.** Page metadata via `pageMetadata()` in `lib/seo.ts`.
- **Copy** lives in `content/*.json` and `lib/*-content.ts`, not inline in components.
- **Brand tone:** confident, precise, evidence-based; second person ("you"); short, declarative sentences; lead with outcomes, not sensors. No medical claims (fitness/performance framing only), no hype, no wellness fluff. See `content/WRITING_GUIDE.md`.

## How the site works
- **Conversion = Calendly modal, demo-first** (no checkout). Every "Book a Demo" CTA renders `components/ui/BookDemoButton.tsx`, which opens the global `components/forms/CalendlyModal.tsx` (mounted once in `PageShell`). The themed URL + open helper live in `lib/calendly.ts`. Booking fires `schedule_demo`. No custom forms.
- **Analytics:** Vercel Analytics + GA4 via `@next/third-parties` (env-gated on `NEXT_PUBLIC_GA_ID`). Fire events through `lib/analytics.ts` (`trackEvent`/`trackCTA`/`trackScheduleDemo`) so both sinks stay in sync.
- **Consent Mode v2:** default-denied script in `app/layout.tsx`; `components/CookieConsent.tsx` + `lib/consent.ts` grant/deny analytics. GA respects it.
- **Disabled routes:** `lib/disabled-routes.ts` + `middleware.ts` return 404 + noindex for `/buy`, `/athletes`, `/executives`, `/case-studies`, `/research`, `/team`, `/careers`. Pages still exist in `app/` for development. To publish one, flip `DISABLED_ROUTES_ENABLED`, then update `sitemap.ts` and `public/llms.txt` and fix any links.

## Design system
- Colors: oklch `--ns-*` tokens in `styles/tokens.css`. Accent = white; the **teal→sky gradient** (`<GradientText>` / `.text-gradient-brand`) goes on ONE emphasis word per heading only — never whole sentences or every page.
- Reusable UI: `FadeIn`, `CountUp` (stat count-up on view), `Card`, `SectionTypography` (Eyebrow/SectionTitle/SectionDescription/sectionPadding), `.hover-lift`/`.sheen`. ALL motion must respect `prefers-reduced-motion`.
- `/styleguide` (noindex) documents tokens, type, animations, and common layouts. Keep it in sync when adding patterns.
- **Device renders:** front/angle/exploded/isometric/topView are transparent (use on aurora "floating device" cards); headmodel/concrete/desk/chess/zen have solid dark backgrounds. `orbit-isometric` is a tight crop — don't use it as a hero.

## Asset tooling
- `npm run fetch-wix [manifest]` pulls images from the old Wix CDN; `npm run optimize-images`/`optimize-videos` (sharp/ffmpeg-static) compress to webp/H.264. Reference assets through `lib/brand.ts`. Full guide: `docs/brand-assets.md`.

## Environment variables
- `NEXT_PUBLIC_SITE_URL` — production URL (SEO, sitemap, JSON-LD)
- `NEXT_PUBLIC_GA_ID` — GA4 Measurement ID (analytics loads only when set)
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity project ID (loads only when set + analytics consent granted)
- `NEXT_PUBLIC_CALENDLY_URL` — Calendly scheduler URL for `/demo`

## Done means
Build passes, lint is clean, typecheck passes, and you verified the change does what it should.
