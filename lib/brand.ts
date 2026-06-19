export const brandAssets = {
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
  },
  device: {
    hero: "/brand/device/Headmodel_Orbit.webp",
    front: "/brand/device/Front_Orbit.webp",
    isometric: "/brand/device/Isometric_Orbit.webp",
    angle: "/brand/device/TopFront_Angle_Orbit.webp",
    topView: "/brand/device/Top_View_Orbit.webp",
    zen: "/brand/device/Zen_Orbit.webp",
    desk: "/brand/device/Desk_Orbit.webp",
    chess: "/brand/device/Chessboard_Orbit.webp",
    concrete: "/brand/device/Concrete_Orbit.webp",
    side: "/brand/device/Side_Upper_Orbit.webp",
    sideAlt: "/brand/device/Side_Upper_Orbit2.webp",
    sideView: "/brand/device/side_view_Orbit.webp",
    down: "/brand/device/Down_Orbit.webp",
    exploded: "/brand/device/Exploded_Orbit.webp",
  },
  hero: {
    boardMeeting: "/brand/hero/board-meeting.png",
    chessPlayer: "/brand/hero/chess-player.png",
    coder: "/brand/hero/coder.png",
    leisure: "/brand/hero/leisure.png",
    archer: "/brand/hero/archer.png",
    meditation: "/brand/hero/meditation.png",
    musician: "/brand/hero/musician.png",
    painting: "/brand/hero/painting.png",
    racer: "/brand/hero/racer.png",
  },
  report: {
    sessionReportPages: [
      {
        src: "/brand/report/executive-session-report-page1.png",
        label: "Session scores & metrics",
        alt: "Sample Neurostellar Orbit session report — cognitive scores and behavioural metrics",
      },
      {
        src: "/brand/report/executive-session-report-page2.png",
        label: "Session analysis",
        alt: "Sample Neurostellar Orbit session report — cognitive state analysis and recommendations",
      },
    ],
  },
} as const;

/** All product-angle shots for buy-page slideshow */
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
