import { FadeIn } from "@/components/ui/FadeIn";
import { DeviceSlideshow } from "@/components/ui/DeviceSlideshow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OrbitDesignGallery() {
  return (
    <section
      id="design"
      aria-labelledby="design-heading"
      className="border-t border-ns-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="design-heading"
          eyebrow="Design & ergonomics"
          title="Designed for precision"
          description="Every angle engineered for fit, stability, and sensor placement — from the executive desk to recovery. Explore the full device, inside and out."
        />
        <FadeIn>
          <div className="mx-auto max-w-5xl">
            <DeviceSlideshow variant="hero" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ns-text-muted">
            Adjustable headband geometry, biocompatible materials, and a
            98&nbsp;g profile that stays put through intentional sessions — without
            looking or feeling like clinical hardware.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
