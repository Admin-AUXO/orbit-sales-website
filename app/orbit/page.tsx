import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { GradientText } from "@/components/ui/GradientText";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { BookDemoButton } from "@/components/ui/BookDemoButton";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  orbitCta,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
} from "@/lib/cta-content";
import { OrbitDesignGallery } from "@/components/orbit/OrbitDesignGallery";
import { OrbitDesignPhilosophy } from "@/components/orbit/OrbitDesignPhilosophy";
import { OrbitTechSpecs } from "@/components/orbit/OrbitTechSpecs";
import { OrbitUseCases } from "@/components/orbit/OrbitUseCases";
import { OrbitValueProps } from "@/components/orbit/OrbitValueProps";
import { JsonLd } from "@/components/seo/JsonLd";
import { brandAssets } from "@/lib/brand";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  "Orbit — Smart Headgear for Mental Fitness",
  "Neurostellar Orbit combines brain and body sensing in premium smart headgear. Explore the engineering, design, and technical specs — then see how Speed, Agility, and Endurance become your edge.",
  "/orbit",
);

export default function OrbitPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          productJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Orbit", path: "/orbit" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="The product"
        title={
          <>
            Neurostellar <GradientText>Orbit</GradientText>™
          </>
        }
        description="Premium smart headgear engineered for intentional mental fitness. Brain-grade sensing. Executive-grade design. Your edge, measured."
      />

      <section className="pb-8 pt-4 md:pb-12">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative mx-auto aspect-square max-w-md">
                <div className="absolute inset-0 rounded-full bg-ns-accent-muted blur-3xl" />
                <Image
                  src={brandAssets.device.front}
                  alt="Neurostellar Orbit front product view"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-ns-text-muted">
                Orbit is a smart headband that turns 10–15 minute sessions into
                instant cognitive reports — Speed, Agility, Endurance, and 12
                behavioral metrics. Built for people who perform when the margin
                is mental.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <BookDemoButton location="orbit_hero">{primaryCtaLabel}</BookDemoButton>
                <Button href={secondaryCtaHref} variant="secondary">
                  {secondaryCtaLabel}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <OrbitDesignPhilosophy />
      <OrbitValueProps />
      <OrbitDesignGallery />
      <OrbitTechSpecs />
      <OrbitUseCases />
      <CTABand {...orbitCta} />
    </PageShell>
  );
}
