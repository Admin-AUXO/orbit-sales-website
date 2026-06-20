# Brand Assets

All website imagery lives under `public/brand/`, organized by usage. Conventions and the full inventory are below. The cross-session brand reference is the `neurostellar-brand` skill.

## Conventions
- **kebab-case, semantic names** (`orbit-front.webp`, not `Front_Orbit.webp`).
- **webp**, optimized. Sources from Wix can be 20–25 MB — always run `npm run optimize-images` after fetching.
- **Reference through the central map** in `lib/brand.ts` (`brandAssets`, `partnerLogos`, `pressLogos`, `deviceSlideshow`). Do not hardcode `/brand/...` paths in components.
- One folder per usage. Add new folders only for a genuinely new category.

## Folder inventory

| Folder | Contents | Map reference |
|---|---|---|
| `logos/` | Neurostellar wordmarks (horizontal/stacked × light/dark, svg+png), IIT Madras | `brandAssets.logos` |
| `device/` | 14 product renders `orbit-*.webp` (front, angle, isometric, side, top, exploded, headmodel, concrete, chessboard, desk, zen, …) | `brandAssets.device`, `deviceSlideshow` |
| `hero/` | 9 lifestyle hero tiles (board-meeting, coder, chess-player, racer, archer, musician, painting, leisure, meditation) | `lib/hero-tiles.ts` |
| `metrics/` | 5 app-mockup cards: focus-ready, relaxation-recovery, metrics-history, biofeedback-training, activity-types | `brandAssets.metrics` |
| `report/` | Session-report mockups (the cognitive-state timeline is now a coded SVG, not an image — see below) | `brandAssets.report` |
| `partners/` | 10 credibility logos: iit-madras, nit-rourkela, iaf, birac, meity, htic, edii, tie-women, prayas, t50 | `partnerLogos` |
| `press/` | ces-2025, tedx, moneycontrol, ilanjar-mani, tamilpreneur | `brandAssets.press`, `pressLogos` |
| `team/` | 9 headshots, named (see note) | `lib/team.ts` |
| `news/` | 5 highlights: mou-vishnu-prasanna, ather-investment, ces-2025, dubai-ai-week, gitex-2024 | (build-time) |
| `video/` | orbit-explode-loop, orbit-promo | `brandAssets.video` |
| `fonts/` | Manrope weights | `lib/fonts.ts` |

### Device renders — background type matters
The section cards use an aurora glow with `object-contain` for a "floating device" look, so they need **transparent** renders:
- **Transparent bg** (use on floating-device cards / heroes): `front`, `angle`, `exploded`, `isometric`, `topView`.
- **Solid dark bg** (don't use on the glow cards — they show a dark rectangle): `headmodel`, `concrete`, and the lifestyle shots `desk`, `chess`, `zen`.
- **`orbit-isometric` is a tight close-up crop** (band runs off the edges) — fine in the `/orbit` gallery, but **not as a hero/section image**.
- Keep each render used **≤1× outside the gallery.** Current assignments: orbit hero = `front`, WhatIsOrbit = `topView`, SensorSystems = `exploded`, science hero = `angle`, SpecGrid = `concrete`. (Note: the brand-map key for `orbit-top.webp` is `device.topView`.)

### Team roster — confirmed
Names + roles in `lib/team.ts`, photo↔person mapping **confirmed by the user**: Karthik Raghavendran (CEO), Dhanushya Sree (COO), Dr. Fayaz Khan Pathan (Technology), Aravind G (Product), Adhiamaan Arulanandham (Customer Experience), Karthik Venkataraman (Design), Dr. Vrinda M (Neuroscience), Varsha V (Psychology), Mukesh T Srinivasan (Embedded Engineering).

### Charts are coded, not images
The two off-brand chart images were removed. `cognitive-load.webp` was unused. The rainbow `cognitive-state-timeline.webp` is replaced by a coded SVG — `components/report-tour/CognitiveStateTimeline.tsx` — drawn with the `--ns-chart-*` tokens (teal/sky lines, calm cool state bands), legible on mobile. Build new data-viz this way, not as raster exports.

### Social share image (OG)
The Open Graph / Twitter card is generated in code at `app/opengraph-image.tsx` (`next/og`, 1200×630, Manrope from `public/brand/fonts/`, the horizontal-light logo, teal→sky headline). There is no static `og.png` to maintain.

## Tooling
- `npm run fetch-wix [manifest.json]` — download originals from the Wix CDN (`scripts/fetch-wix-assets.mjs`, reads `scripts/wix-assets.json` by default). Node global fetch — curl's TLS to wixstatic fails on this machine.
- `npm run optimize-images [dir...]` — sharp resizes to per-folder caps (news 1600px, team 640px, metrics 1200px, device 1400px, hero 1100px, report 1800px, partners/press 400px) and converts to webp. Reads file into a buffer first (Windows file-lock safe).
- `npm run optimize-videos` — ffmpeg-static re-encodes `video/*.mp4` (H.264 crf30, ≤1080p, audio stripped, faststart).

## Adding an asset
1. Get it (design export, or fetch from Wix per the steps above).
2. Place it in the right `public/brand/<usage>/` folder, kebab-case.
3. `npm run optimize-images <folder>`.
4. Add the path to `lib/brand.ts`.
5. Reference via the map in components.
