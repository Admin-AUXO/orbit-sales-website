import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  TextLink,
  sectionPadding,
} from "@/components/ui/SectionTypography";
import { brandAssets } from "@/lib/brand";

const pillars = [
  {
    title: "Measure",
    body: "Capture objective cognitive performance data in every session.",
  },
  {
    title: "Understand",
    body: "See how your Speed, Agility, and Endurance change over time.",
  },
  {
    title: "Improve",
    body: "Use insights and coaching to build better cognitive habits.",
  },
] as const;

export function WhatIsOrbit() {
  return (
    <section
      id="what-is-orbit"
      aria-labelledby="what-is-orbit-heading"
      className={sectionPadding}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl premium-border">
              <div className="absolute inset-0 aurora-bg opacity-60" />
              <Image
                src={brandAssets.device.front}
                alt="Neurostellar Orbit front view with the status light illuminated"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Eyebrow>What is Orbit?</Eyebrow>
            <SectionTitle id="what-is-orbit-heading" className="mt-4">
              Your brain has been performing blind. Orbit changes that.
            </SectionTitle>
            <SectionDescription className="mt-4">
              Orbit is a cognitive performance system that combines real-time
              brain sensing with personalized coaching — so you can measure,
              understand, and improve how your mind performs.
            </SectionDescription>

            <ol className="mt-8 space-y-7">
              {pillars.map((pillar, index) => (
                <li key={pillar.title} className="relative pl-10">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-ns-border bg-ns-bg-elevated text-xs font-semibold tabular-nums text-ns-silver"
                  >
                    {index + 1}
                  </span>
                  {index < pillars.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute left-[13px] top-8 bottom-[-1.25rem] w-px bg-gradient-to-b from-ns-border via-ns-border/70 to-transparent"
                    />
                  ) : null}
                  <h3 className="text-lg font-bold tracking-tight text-ns-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ns-text-muted md:text-base">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8">
              <TextLink href="/orbit">See the full product →</TextLink>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
