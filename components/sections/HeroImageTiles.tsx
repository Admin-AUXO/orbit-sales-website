import Image from "next/image";
import { type HeroTile, heroTiles, splitHeroTiles } from "@/lib/hero-tiles";

const TILE_CLASS =
  "relative aspect-[4/5] w-48 shrink-0 overflow-hidden rounded-xl bg-ns-bg-card shadow-md shadow-black/20 sm:w-56 lg:w-60";

function HeroImageTile({
  src,
  alt,
  priority = false,
  className = TILE_CLASS,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className="relative shrink-0">
      <div className={className}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 52vw, 240px"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function ScrollColumn({
  tiles,
  reverse = false,
  priorityFirst = false,
}: {
  tiles: HeroTile[];
  reverse?: boolean;
  priorityFirst?: boolean;
}) {
  const loop = [...tiles, ...tiles];

  return (
    <div
      className={`flex flex-col gap-6 sm:gap-7 ${
        reverse ? "animate-marquee-vertical-reverse" : "animate-marquee-vertical"
      } group-hover/tiles:[animation-play-state:paused]`}
    >
      {loop.map((tile, i) => (
        <HeroImageTile
          key={`${tile.src}-${i}`}
          src={tile.src}
          alt={tile.alt}
          priority={priorityFirst && i === 0}
        />
      ))}
    </div>
  );
}

export function HeroImageTiles() {
  const [leftColumn, rightColumn] = splitHeroTiles(2);

  return (
    <>
      {/* Mobile — horizontal infinite scroll */}
      <div
        aria-hidden
        className="group/tiles hero-tiles-mask-x relative mt-10 overflow-hidden md:hidden"
      >
        <div className="flex w-max animate-marquee-hero gap-5 group-hover/tiles:[animation-play-state:paused]">
          {[...heroTiles, ...heroTiles].map((tile, i) => (
            <HeroImageTile
              key={`mobile-${tile.src}-${i}`}
              src={tile.src}
              alt={tile.alt}
              priority={i === 0}
            />
          ))}
        </div>
      </div>

      {/* Desktop — staggered 2-column vertical infinite scroll */}
      <div
        aria-hidden
        className="group/tiles hero-tiles-mask-y relative mt-14 hidden h-[min(640px,75vh)] overflow-hidden sm:-mt-32 md:mt-0 md:block lg:justify-self-end lg:-translate-x-8 xl:-translate-x-14"
      >
        <div className="flex justify-end gap-6 sm:gap-7">
          <div className="shrink-0 pt-10 sm:pt-16">
            <ScrollColumn tiles={leftColumn} priorityFirst />
          </div>

          <div className="shrink-0 -translate-y-14 sm:-translate-y-20">
            <ScrollColumn tiles={rightColumn} reverse priorityFirst={false} />
          </div>
        </div>
      </div>
    </>
  );
}
