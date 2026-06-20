// Assets live in /public but the site is served from a basePath subpath on
// GitHub Pages. next/image does not prepend basePath when images are
// unoptimized, so we prefix every public asset path here at the source.
// Must match the default in next.config.ts so routing basePath and asset
// prefixing always agree (override both via NEXT_PUBLIC_BASE_PATH).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/orbit-sales-website";

function prefixAssets<T>(value: T): T {
  if (typeof value === "string") {
    return (value.startsWith("/") ? `${BASE_PATH}${value}` : value) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => prefixAssets(item)) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [key, prefixAssets(val)]),
    ) as T;
  }
  return value;
}

// Prefix a single public asset path (e.g. for inline string refs).
export function asset(path: string): string {
  return prefixAssets(path);
}

const rawBrandAssets = {
  logos: {
    horizontalLight: "/brand/logos/neurostellar-logo-horizontal-light.svg",
    horizontalDark: "/brand/logos/neurostellar-logo-horizontal-dark.svg",
    stackedLight: "/brand/logos/neurostellar-logo-stacked-light.svg",
    stackedDark: "/brand/logos/neurostellar-logo-stacked-dark.svg",
    iitMadras: "/brand/logos/iit-madras-logo.svg",
  },
  video: {
    explodeLoop: "/brand/video/orbit-explode-loop.mp4",
    promo: "/brand/video/orbit-promo.mp4",
    launchLoop: "/brand/video/orbit-launch-loop.mp4",
    launchPoster: "/brand/video/orbit-launch-poster.webp",
  },
  device: {
    hero: "/brand/device/orbit-headmodel.webp",
    front: "/brand/device/orbit-front.webp",
    isometric: "/brand/device/orbit-isometric.webp",
    angle: "/brand/device/orbit-angle.webp",
    topView: "/brand/device/orbit-top.webp",
    zen: "/brand/device/orbit-zen.webp",
    desk: "/brand/device/orbit-desk.webp",
    chess: "/brand/device/orbit-chessboard.webp",
    concrete: "/brand/device/orbit-concrete.webp",
    side: "/brand/device/orbit-side.webp",
    sideAlt: "/brand/device/orbit-side-alt.webp",
    sideView: "/brand/device/orbit-side-view.webp",
    down: "/brand/device/orbit-down.webp",
    exploded: "/brand/device/orbit-exploded.webp",
  },
  hero: {
    boardMeeting: "/brand/hero/board-meeting.webp",
    chessPlayer: "/brand/hero/chess-player.webp",
    coder: "/brand/hero/coder.webp",
    leisure: "/brand/hero/leisure.webp",
    archer: "/brand/hero/archer.webp",
    meditation: "/brand/hero/meditation.webp",
    musician: "/brand/hero/musician.webp",
    painting: "/brand/hero/painting.webp",
    racer: "/brand/hero/racer.webp",
    pushLimitsChess: "/brand/hero/push-limits-chess.webp",
  },
  metrics: {
    focus: "/brand/metrics/focus-ready.webp",
    relaxation: "/brand/metrics/relaxation-recovery.webp",
    history: "/brand/metrics/metrics-history.webp",
    biofeedback: "/brand/metrics/biofeedback-training.webp",
    activityTypes: "/brand/metrics/activity-types.webp",
  },
  press: {
    ces2025: "/brand/press/ces-2025.webp",
  },
} as const;

export const brandAssets = prefixAssets(rawBrandAssets);

export const partnerLogos = prefixAssets([
  { src: "/brand/partners/iit-madras.webp", name: "IIT Madras" },
  { src: "/brand/partners/nit-rourkela.webp", name: "NIT Rourkela" },
  { src: "/brand/partners/iaf.webp", name: "Indian Air Force" },
  { src: "/brand/partners/birac.webp", name: "BIRAC" },
  { src: "/brand/partners/meity.webp", name: "MeitY" },
  { src: "/brand/partners/htic.webp", name: "HTIC" },
  { src: "/brand/partners/edii.webp", name: "EDII" },
  { src: "/brand/partners/tie-women.webp", name: "TiE Women" },
  { src: "/brand/partners/prayas.webp", name: "Prayas" },
  { src: "/brand/partners/t50.webp", name: "T50" },
] as const);

export const pressLogos = prefixAssets([
  { src: "/brand/press/tedx.webp", name: "TEDx" },
  { src: "/brand/press/moneycontrol.webp", name: "Moneycontrol" },
  { src: "/brand/press/ilanjar-mani.webp", name: "Ilanjar Mani" },
  { src: "/brand/press/tamilpreneur.webp", name: "Tamilpreneur" },
] as const);

export const deviceSlideshow = [
  { src: brandAssets.device.front, label: "Front" },
  { src: brandAssets.device.angle, label: "Angle" },
  { src: brandAssets.device.isometric, label: "Isometric" },
  { src: brandAssets.device.side, label: "Side" },
  { src: brandAssets.device.sideAlt, label: "Side profile" },
  { src: brandAssets.device.sideView, label: "Side view" },
  { src: brandAssets.device.topView, label: "Top" },
  { src: brandAssets.device.down, label: "Underside" },
  { src: brandAssets.device.exploded, label: "Exploded" },
  { src: brandAssets.device.hero, label: "On model" },
] as const;
