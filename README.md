# Neurostellar Sales Website

Marketing site for Neurostellar Orbit. Built with Next.js, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demos & Analytics

- **Demos:** Calendly only, demo-first. Every "Book a Demo" CTA opens a branded Calendly **modal** (`components/forms/CalendlyModal.tsx`). No custom forms.
- **Analytics:** GA4 on a fresh property via `@next/third-parties`, with a **Consent Mode v2** cookie banner. Set `NEXT_PUBLIC_GA_ID` to enable.

## Content

Content lives as JSON in `content/`. See `content/WRITING_GUIDE.md`.

## Brand Assets

Served from `public/brand/` (logos, fonts, device renders, hero images, report images, video). See `public/brand/README.md`.

## Environment Variables

Set these in `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — production URL for SEO/sitemap
- `NEXT_PUBLIC_GA_ID` — GA4 Measurement ID (analytics loads only when set)
- `NEXT_PUBLIC_CALENDLY_URL` — Calendly scheduler URL (overrides the default)

## Deploy

Hosted on Vercel.

1. Push to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set environment variables.
4. Deploy.

Domain port from Wix (`neuro-stellar.com`) is planned.

## Project Structure

- `app/` — pages and API routes
- `components/` — UI, layout, sections
- `content/` — case studies, trials, FAQ (JSON)
- `lib/` — content loaders, SEO, fonts, analytics
- `public/brand/` — brand assets
