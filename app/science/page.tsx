import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { SectionTitle } from "@/components/ui/SectionTypography";
import { CTABand } from "@/components/sections/CTABand";
import { scienceCta } from "@/lib/cta-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { brandAssets } from "@/lib/brand";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "The Science",
  "The neuroscience behind Neurostellar Orbit — EEG brain sensing, PPG body tracking, and the expert coaching methodology that turns data into measurable progress.",
  "/science",
);

const specs = [
  {
    category: "Brain Sensing (EEG)",
    items: [
      "2 active EEG channels (AF7 & AF8) for precision brain activity tracking",
      "Advanced signal processing for clean, noise-free data",
      "Tracks beta waves (focus), theta/beta ratio (cognitive load), alpha waves (relaxation)",
    ],
  },
  {
    category: "Body Sensing (PPG)",
    items: [
      "Triple wavelength PPG (IR, Red, Green) for heart rate and respiration",
      "Heart rate variability (HRV) for recovery insights",
      "Adaptive light filtering for varying conditions",
    ],
  },
  {
    category: "Design & Build",
    items: [
      "Lightweight ergonomic fit (98g), adjustable and stable",
      "Biocompatible polyurethane with polycarbonate casing",
      "Tri-axial motion sensors to minimize movement artifacts",
      "8+ hours battery, USB-C fast charging",
      "BLE 5.4 wireless, iOS & Android compatible",
      "Encrypted data storage and privacy protection",
    ],
  },
];

const foundations = [
  "EEG-based attention and mental workload tracking",
  "Stress and fatigue detection using HRV and brain signals",
  "Human-in-the-loop coaching: a dedicated performance coach guides your progress, with interventions curated by in-house neuroscientists who interpret your data",
  "Principles used in elite athlete training and clinical performance programs",
];

export default function SciencePage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Science", path: "/science" },
        ])}
      />
      <PageHeader
        eyebrow="For the curious"
        title={
          <>
            Decades of <GradientText>brain science</GradientText>. Distilled for
            daily performance.
          </>
        }
        description="The technical depth behind Orbit — for those who want to understand how it works."
      />

      <section className="bg-ns-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeIn>
              <SectionTitle>Scientific foundation</SectionTitle>
              <p className="mt-4 leading-relaxed text-ns-text-muted">
                Neurostellar Orbit has been in active R&D for over 3 years, refined
                through multiple prototypes and real-world testing. Our foundation
                is built on:
              </p>
              <ul className="mt-6 space-y-3">
                {foundations.map((item) => (
                  <li key={item} className="flex gap-3 text-ns-text-muted">
                    <span className="text-ns-accent">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
                <div className="absolute inset-[10%] rounded-full bg-ns-glow opacity-70 blur-3xl" />
                <Image
                  src={brandAssets.device.angle}
                  alt="Neurostellar Orbit — angled product view showing the full headband"
                  fill
                  sizes="(max-width: 1024px) 85vw, 520px"
                  className="object-contain"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {specs.map((spec, i) => (
              <FadeIn key={spec.category} className="h-full" delay={i * 0.1}>
                <Card className="h-full">
                  <h3 className="font-display text-lg text-ns-accent">
                    {spec.category}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {spec.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-ns-text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>

          <p className="mt-12 text-sm text-ns-text-muted">
            Developed with neuroscientists, biomedical engineers, and research
            experts. Tested against gold standards in EEG research with
            personalized baselines that adapt over time.
          </p>
        </div>
      </section>
      <CTABand {...scienceCta} />
    </PageShell>
  );
}
