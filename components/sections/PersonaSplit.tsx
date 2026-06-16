import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandAssets } from "@/lib/brand";

const personas = [
  {
    href: "/athletes",
    title: "For Athletes",
    description:
      "Master focus under fatigue. Optimize recovery between sessions. Perform when the margin is mental.",
    image: brandAssets.device.chess,
    imageAlt: "Neurostellar Orbit in an athletic chess training setting",
    cta: "Explore athlete benefits",
  },
  {
    href: "/executives",
    title: "For Executives",
    description:
      "Sustain clarity through back-to-back decisions. Protect cognitive endurance. Lead without burning out.",
    image: brandAssets.device.desk,
    imageAlt: "Neurostellar Orbit on a premium executive desk setup",
    cta: "Explore executive benefits",
  },
];

export function PersonaSplit() {
  return (
    <section
      id="personas"
      aria-labelledby="personas-heading"
      className="bg-ns-bg-elevated py-24 md:py-32 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,var(--ns-aurora-3),transparent_55%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="personas-heading"
          eyebrow="Built for you"
          title="Performance looks different. The edge is the same."
          description="Whether you compete on the field or in the boardroom, Orbit adapts to how you perform."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {personas.map((persona, i) => (
            <FadeIn key={persona.href} delay={i * 0.1}>
              <Link href={persona.href} className="group block h-full">
                <Card className="h-full overflow-hidden p-0 transition-colors group-hover:border-ns-text/30" premium>
                  <div className="relative aspect-[16/9] overflow-hidden bg-ns-bg-card">
                    <Image
                      src={persona.image}
                      alt={persona.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ns-bg-card via-ns-bg-card/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-ns-text md:text-3xl">
                      {persona.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ns-text-muted">
                      {persona.description}
                    </p>
                    <span className="mt-6 inline-block text-sm font-semibold text-ns-text group-hover:underline">
                      {persona.cta} →
                    </span>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
