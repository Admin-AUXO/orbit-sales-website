import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroImageTiles } from "@/components/sections/HeroImageTiles";
import { brandAssets } from "@/lib/brand";
import {
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
} from "@/lib/cta-content";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden -mt-16 lg:-mt-20"
    >
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--ns-glow-strong),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-[var(--ns-max-width)] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl gap-x-14 gap-y-16 xl:max-w-none xl:grid xl:grid-cols-2 xl:items-center">
          <FadeIn className="relative z-10 xl:max-w-xl">
            <p className="mb-4 inline-block rounded-full border border-ns-border bg-ns-accent-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-ns-silver">
              Neurostellar Orbit™
            </p>
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ns-text sm:text-6xl"
            >
              Train your brain like you train your body.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ns-text-muted sm:text-xl">
              Orbit helps you understand how your brain is performing,
              so you can make better decisions about focus, work, training and recovery.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={primaryCtaHref}>{primaryCtaLabel}</Button>
              <Button href={secondaryCtaHref} variant="secondary">
                {secondaryCtaLabel}
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 sm:gap-5">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-ns-silver">
                Incubated &amp; backed by
              </span>
              <Image
                src={brandAssets.logos.iitMadras}
                alt="IIT Madras"
                width={150}
                height={150}
                className="h-[3.375rem] w-auto sm:h-[3.75rem]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <HeroImageTiles />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
