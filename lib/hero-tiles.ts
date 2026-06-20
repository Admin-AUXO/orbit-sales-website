import { brandAssets } from "@/lib/brand";

export const HERO_TILE_ASPECT = "4 / 5" as const;
export const HERO_TILE_WIDTH = 1000;
export const HERO_TILE_HEIGHT = 1250;

export type HeroTile = {
  src: string;
  alt: string;
};

export const heroTiles: HeroTile[] = [
  {
    src: brandAssets.hero.coder,
    alt: "Developer wearing Orbit during a focused coding session",
  },
  {
    src: brandAssets.hero.boardMeeting,
    alt: "Executive wearing Orbit in a board meeting",
  },
  {
    src: brandAssets.hero.chessPlayer,
    alt: "Chess player wearing Orbit during competitive play",
  },
  {
    src: brandAssets.hero.racer,
    alt: "Racer wearing Orbit before a high-performance event",
  },
  {
    src: brandAssets.hero.archer,
    alt: "Archer wearing Orbit during focused training",
  },
  {
    src: brandAssets.hero.musician,
    alt: "Musician wearing Orbit while practicing",
  },
  {
    src: brandAssets.hero.painting,
    alt: "Artist wearing Orbit while painting",
  },
  {
    src: brandAssets.hero.leisure,
    alt: "Person wearing Orbit during leisure and downtime",
  },
];

export function splitHeroTiles(columns = 2): HeroTile[][] {
  const cols: HeroTile[][] = Array.from({ length: columns }, () => []);
  heroTiles.forEach((tile, i) => {
    cols[i % columns]!.push(tile);
  });
  return cols;
}
