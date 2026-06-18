import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

const behavioralMetrics = [
  { label: "Avg Deep Work Duration", value: "28 s" },
  { label: "Deep Work %", value: "40.9%" },
  { label: "Intrusion Rate", value: "1.2 /min" },
  { label: "Recovery %", value: "12.0%" },
];

export function ProductDemo() {
  return (
    <section
      id="product-demo"
      aria-labelledby="product-demo-heading"
      className="bg-ns-bg-elevated py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
            What your first session looks like
          </p>
          <h2
            id="product-demo-heading"
            className="max-w-2xl text-3xl font-extrabold tracking-tight text-ns-text md:text-4xl"
          >
            This is what 15 minutes of Orbit data looks like.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ns-text-muted">
            Three scores. Twelve behavioural metrics. An analysis of exactly
            where your focus held and where it broke. You get this after every
            session — not a generic wellness summary. Your data, compared only
            to yourself.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* IMAGE PLACEHOLDER — Executive session report UI:
                Three gauge dials (Cognitive Speed 58.4, Cognitive Agility 39.6,
                Cognitive Endurance 33.9), behavioural metrics panel, and
                Cognitive State Timeline graph. Replace with high-quality SVG. */}
            <PlaceholderVisual
              title="Session Report — Cognitive Speed · Agility · Endurance"
              designerNote="Full session report UI: three arc gauges at top (Speed 58.4, Agility 39.6, Endurance 33.9), 12-cell behavioural metrics grid below, Cognitive State Timeline graph at bottom. Dark background. Real report layout from the Neurostellar app."
              aspectRatio="aspect-[16/10]"
            />

            {/* Metric callout cards */}
            <div className="flex flex-col justify-center gap-4">
              {behavioralMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-ns-border bg-ns-bg-card px-5 py-4"
                >
                  <p className="text-2xl font-extrabold text-ns-text">{m.value}</p>
                  <p className="mt-1 text-xs text-ns-text-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm text-ns-text-muted/70">
            Real session data from a 15-minute executive work session.
            This is what high cognitive speed with lower agility looks like —
            and exactly what your coach uses to build your improvement plan.
          </p>
          <p className="mt-4">
            <Link
              href="/report"
              className="text-sm font-semibold text-ns-accent underline-offset-4 hover:underline"
            >
              Take the interactive tour →
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
