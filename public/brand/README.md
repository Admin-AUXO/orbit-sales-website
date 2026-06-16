# Brand Assets (served from `public/brand/`)

Source files live in `brand-assets/` at the project root. Run copy after updating source assets:

```powershell
$src = "brand-assets"
$pub = "public/brand"
Copy-Item "$src\Logo\Logo\*" "$pub\logos\" -Force
Copy-Item "$src\manrope-font\*.ttf" "$pub\fonts\" -Force
```

## Current inventory

### Logos (`logos/`)
- `neurostellar-logo-horizontal-light.svg` — primary (dark backgrounds)
- `neurostellar-logo-horizontal-dark.svg` — light backgrounds
- Stacked variants for large-format use

### Fonts (`fonts/`)
- Manrope (ExtraLight → ExtraBold) — wired in `lib/fonts.ts`

### Device renders (`device/`)
- `Headmodel_Orbit.png` — hero
- `Isometric_Orbit.png` — product moment
- `Front_Orbit.png` — product page
- `Chessboard_Orbit.png` / `Concrete_Orbit.png` — persona cards
- Additional angles: `TopFront_Angle_Orbit.png`, `Side_Upper_Orbit.png`, `Zen_Orbit.png`

### Brand guidelines
- `brand-assets/Neurostellar - Brand Guidelines - MQ.pdf`
- Primary palette: Black `#000000`, White `#FFFFFF`
- Typography: Manrope for all marketing materials
