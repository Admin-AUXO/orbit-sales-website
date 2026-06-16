# Neurostellar Sales Website

Premium marketing site for Neurostellar Orbit — built with Next.js, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand Assets

Source files live in `brand-assets/` at the project root:

- `Logo/Logo/` — horizontal and stacked SVG/PNG logos
- `manrope-font/` — Manrope TTF files (all weights)
- `product-renders/` — 3D Orbit renders
- `Neurostellar - Brand Guidelines - MQ.pdf` — black/white palette, Manrope typography

Copied to `public/brand/` for the site. See `public/brand/README.md` for refresh instructions.

## Content

Edit JSON files in `content/` — see `content/WRITING_GUIDE.md`.

## Environment Variables

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — production URL for SEO/sitemap
- `NEXT_PUBLIC_CALENDLY_URL` — Calendly embed URL for `/demo`

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy

## DNS Cutover (from Wix)

1. Verify preview deployment
2. Point `www.neuro-stellar.com` CNAME to `cname.vercel-dns.com`
3. Add domain in Vercel project settings
4. Enable SSL

## Project Structure

- `app/` — Pages and API routes
- `components/` — UI, layout, sections
- `content/` — Case studies, trials, FAQ (JSON)
- `lib/` — Content loaders, SEO, fonts, analytics
- `public/brand/` — Brand assets
