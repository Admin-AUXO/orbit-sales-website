import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  sectionPadding,
} from "@/components/ui/SectionTypography";
import { brandAssets, partnerLogos } from "@/lib/brand";

export function CredibilityWall() {
  return (
    <section
      id="credibility-wall"
      aria-labelledby="credibility-wall-heading"
      className={`bg-ns-bg ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <FadeIn className="max-w-2xl">
            <Eyebrow>Backing</Eyebrow>
            <SectionTitle id="credibility-wall-heading" className="mt-4">
              Recognized & supported by leading{" "}
              <GradientText>organizations</GradientText>.
            </SectionTitle>
            <SectionDescription className="mt-4">
              From premier institutes to government innovation programs, Orbit is
              built on partnerships that hold us to a high bar.
            </SectionDescription>
          </FadeIn>

          <FadeIn delay={0.08} className="shrink-0">
            <div className="flex items-center gap-4 rounded-2xl border border-ns-border bg-ns-bg-card p-4">
              <div className="relative h-12 w-24 shrink-0 rounded-lg">
                <Image
                  src={brandAssets.press.ces2025}
                  alt="CES 2025"
                  fill
                  className="object-contain object-left"
                  sizes="96px"
                />
              </div>
              <p className="text-sm font-medium text-ns-text">
                Launched at CES 2025
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max animate-marquee items-center">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="relative mr-6 h-24 w-36 shrink-0 sm:mr-8 sm:h-28 sm:w-44"
                  aria-hidden={i >= partnerLogos.length ? true : undefined}
                >
                  <Image
                    src={logo.src}
                    alt={i >= partnerLogos.length ? "" : logo.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 176px, 208px"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
