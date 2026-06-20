"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { brandAssets } from "@/lib/brand";

export function LaunchBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Introducing Neurostellar Orbit, launched at CES 2025"
      className="relative overflow-hidden bg-ns-bg"
    >
      {reduceMotion ? (
        <Image
          src={brandAssets.video.launchPoster}
          alt=""
          fill
          aria-hidden
          className="object-cover opacity-40"
          sizes="100vw"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={brandAssets.video.launchPoster}
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src={brandAssets.video.launchLoop} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-ns-bg/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_30%,var(--ns-bg)_85%)]" />

      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 py-24 text-center lg:px-8 lg:py-32">
        <FadeIn>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-ns-text sm:text-5xl md:text-6xl">
            Introducing Neurostellar <GradientText>Orbit</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ns-text-muted sm:text-xl">
            A breakthrough in mental fitness for those who refuse to settle.
          </p>
          <div className="mt-9 flex items-center justify-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ns-silver">
              Launched in
            </span>
            <div className="relative h-8 w-20">
              <Image
                src={brandAssets.press.ces2025}
                alt="CES 2025"
                fill
                className="object-contain object-left"
                sizes="80px"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
