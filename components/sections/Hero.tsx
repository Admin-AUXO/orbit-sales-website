import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] items-center overflow-hidden -mt-16 lg:-mt-20"
    >
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-overlay opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--ns-glow-strong),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-[var(--ns-max-width)] px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="mb-4 inline-block rounded-full border border-ns-border bg-ns-accent-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-ns-silver">
            Neurostellar Orbit™
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-ns-text md:text-6xl lg:text-[4.25rem]"
          >
            Train your brain like you train your body.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ns-text-muted md:text-xl">
            Orbit gives your brain its first real metrics — cognitive speed,
            agility, and endurance. Ten minutes of data. A lifetime of better
            decisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/buy">Buy Orbit — $250</Button>
            <Button href="/demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
          <p className="mt-5 text-xs text-ns-text-muted/60">
            Free shipping&nbsp;·&nbsp;400+ hours of validated cognitive data&nbsp;·&nbsp;IIT Madras R&amp;D
          </p>
        </FadeIn>

        {/* IMAGE PLACEHOLDER — Orbit headband on a real person during a work session */}
        {/* Replace this comment with <Image> once SVG asset is ready */}
      </div>
    </section>
  );
}
