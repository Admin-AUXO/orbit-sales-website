import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTABand() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-y border-ns-border py-24 md:py-32"
    >
      <div className="absolute inset-0 aurora-bg opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,var(--ns-glow),transparent_60%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 text-center lg:px-8">
        <FadeIn>
          <h2
            id="cta-heading"
            className="text-3xl font-extrabold text-ns-text md:text-5xl"
          >
            Your brain is the one performance organ you&apos;ve never trained with data. Start now.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/buy">Buy Orbit — $250</Button>
            <Button
              href="https://wa.me/917845216763"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Questions? Chat on WhatsApp
            </Button>
          </div>
          <p className="mt-5 text-xs text-ns-text-muted/60">
            Free shipping&nbsp;·&nbsp;Includes device + performance coaching program
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
