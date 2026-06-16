import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandAssets } from "@/lib/brand";

const benefits = [
  "Track focus, cognitive load, and recovery in one seamless experience",
  "Built for intentional use during strategy, creation, and recovery",
  "A dedicated performance coach who guides your progress — with interventions curated by our in-house neuroscience team",
];

export function ProductMoment() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,var(--ns-aurora-3),transparent_50%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-square max-w-lg mx-auto premium-border rounded-3xl overflow-hidden">
              <div className="absolute inset-0 aurora-bg mesh-overlay" />
              <Image
                src={brandAssets.device.isometric}
                alt="Neurostellar Orbit isometric product render"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              id="product-heading"
              eyebrow="The product"
              title="A breakthrough in mental fitness"
              description="For those who refuse to settle. Orbit turns brain and body data into your edge."
            />
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 text-ns-text-muted leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-silver" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/orbit">Discover Orbit</Button>
              <Link
                href="/buy"
                className="inline-flex items-center text-sm font-medium text-ns-silver hover:text-ns-text hover:underline"
              >
                Buy now →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
