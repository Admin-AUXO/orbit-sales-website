import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { brandAssets } from "@/lib/brand";

const differentiators = [
  {
    label: "You control when it captures",
    body: "You choose the session — so every score has context. This isn't a physical tracker running in the background.",
  },
  {
    label: "In 10 minutes, you know",
    body: "Cognitive speed, agility, endurance, and deep work patterns — ready before your next meeting.",
  },
  {
    label: "Weeks of sessions reveal your peak window",
    body: "When is your brain sharpest? Orbit tells you — so you can protect that time and use it for what matters.",
  },
  {
    label: "A coach turns data into a plan",
    body: "Your performance coach reviews your sessions weekly and builds a protocol — backed by the Neurostellar neuroscience team.",
  },
];

export function WhatIsOrbit() {
  return (
    <section
      id="what-is-orbit"
      aria-labelledby="what-is-orbit-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* IMAGE PLACEHOLDER — Orbit device front-view, clean and premium */}
          {/* Replace the div below with high-quality SVG once asset is ready */}
          <FadeIn>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl premium-border">
              <div className="absolute inset-0 aurora-bg opacity-60" />
              <Image
                src={brandAssets.device.front}
                alt="Neurostellar Orbit — front view"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
              What is Orbit?
            </p>
            <h2
              id="what-is-orbit-heading"
              className="text-3xl font-extrabold tracking-tight text-ns-text md:text-4xl"
            >
              Your brain has been performing blind. Orbit changes that.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ns-text-muted">
              Orbit is a smart headband that measures your brain and body
              signals during intentional 10–15 minute sessions. After each
              session you get an instant cognitive report. Over weeks, you see
              exactly when you peak — and what&apos;s costing you.
            </p>

            <ul className="mt-10 space-y-6">
              {differentiators.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                  <div>
                    <p className="text-sm font-semibold text-ns-text">{d.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ns-text-muted">{d.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
