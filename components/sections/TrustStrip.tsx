import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  "400+ hours of validated cognitive data",
  "500+ beta users tracked",
  "3+ years of R&D at IIT Madras",
  "Peer-reviewed research published 2025",
  "EEG + PPG validated against research-grade lab equipment",
  "29 subjects · 600+ recordings · p < 0.001",
];

export function TrustStrip() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="border-y border-ns-border bg-ns-bg-elevated py-10 overflow-hidden"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <h2 id="trust-heading" className="sr-only">
            Research validation
          </h2>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ns-text-muted">
            Built on evidence, not wellness claims.
          </p>
        </FadeIn>
      </div>

      {/* Marquee — full-bleed, overflows max-width container */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-0">
          {/* Render items twice for seamless loop */}
          {[...stats, ...stats].map((stat, i) => (
            <span
              key={i}
              className="inline-flex items-center whitespace-nowrap px-8 text-sm text-ns-text-muted/70"
            >
              {stat}
              <span className="ml-8 text-ns-border" aria-hidden>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
