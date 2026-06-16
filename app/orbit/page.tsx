import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { brandAssets } from "@/lib/brand";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  "Orbit — Smart Headgear for Mental Fitness",
  "Neurostellar Orbit combines brain and body sensing in premium smart headgear. Track focus, cognitive load, and recovery — then work with a dedicated performance coach backed by our neuroscience team.",
  "/orbit",
);

const benefits = [
  {
    title: "See when you're locked in",
    body: "Detect deep focus and attention lapses so you can make sharper decisions and execute with precision.",
  },
  {
    title: "Know before you burn out",
    body: "Measure mental effort in real time and optimize your workload — push limits without overextending.",
  },
  {
    title: "Recover on purpose",
    body: "Track relaxation and recovery signals so you reset faster and show up ready for what comes next.",
  },
];

const inBox = [
  "Neurostellar Orbit smart headgear",
  "USB-C charging cable",
  "Carrying case",
  "Quick start guide",
  "iOS & Android app access",
];

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
        title="Neurostellar Orbit™"
        description="A breakthrough in mental fitness. Smart headgear that turns brain and body data into your competitive edge."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-square max-w-md mx-auto">
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
              <h2 className="text-3xl font-bold text-ns-text">
                Built for intentional performance
              </h2>
              <p className="mt-4 leading-relaxed text-ns-text-muted">
                Orbit is optimized for still, high-focus moments — strategy,
                creation, recovery. Tag your high-stakes sessions, track progress,
                and uncover what works best for you.
              </p>
              <div className="mt-8 flex gap-4">
                <Button href="/buy">Buy Orbit</Button>
                <Button href="/demo" variant="secondary">
                  Book a Demo
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-ns-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-ns-text md:text-4xl">
            What Orbit delivers
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <Card className="h-full">
                  <h3 className="text-xl font-semibold text-ns-text">{b.title}</h3>
                  <p className="mt-3 text-ns-text-muted leading-relaxed">{b.body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ns-border py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-ns-text">
            Designed for precision
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[brandAssets.device.angle, brandAssets.device.side, brandAssets.device.zen].map(
              (src, i) => (
                <FadeIn key={src} delay={i * 0.1}>
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-ns-border bg-ns-bg-card">
                    <Image
                      src={src}
                      alt="Neurostellar Orbit product detail"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                </FadeIn>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-ns-text">What&apos;s in the box</h2>
              <ul className="mt-6 space-y-3">
                {inBox.map((item) => (
                  <li key={item} className="flex gap-3 text-ns-text-muted">
                    <span className="text-ns-text">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ns-text">Technical details</h2>
              <p className="mt-4 text-ns-text-muted leading-relaxed">
                Full sensor specifications, connectivity details, and scientific
                validation are available on our{" "}
                <a href="/science" className="text-ns-text underline hover:no-underline">
                  Science page
                </a>
                . Orbit is engineered for precision — we keep the specs there
                for those who want depth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
