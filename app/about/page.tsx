import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Us",
  "Neurostellar was founded on a simple conviction: elite performance is as much a cognitive challenge as a physical one. Meet the team building the future of mental fitness.",
  "/about",
);

const values = [
  {
    title: "Precision over noise",
    body: "We don't track for the sake of tracking. Every metric Orbit captures has a purpose — turning signal into insight you can act on.",
  },
  {
    title: "Human-led, data-informed",
    body: "Technology is the enabler. Our performance coaches and neuroscientists are the experts who make the data meaningful for each person.",
  },
  {
    title: "Performance without burnout",
    body: "True peak performance is sustainable. We build tools that help people achieve more by understanding — and protecting — their cognitive limits.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Our story"
        title="Built by people who understand peak performance"
        description="Neurostellar was founded on a simple conviction: elite performance is as much a cognitive challenge as a physical one. We built Orbit to bring the same rigour athletes and executives apply to physical training directly to the mind."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-display text-2xl text-ns-text">Why we started</h2>
            <div className="space-y-5 leading-relaxed text-ns-text-muted">
              <p>
                The highest performers in sport and business already invest heavily in physical
                conditioning, nutrition, and recovery. But cognitive performance — the ability to
                focus under pressure, make sharp decisions at the end of a long day, and recover
                mental energy between efforts — was largely left to guesswork.
              </p>
              <p>
                We set out to change that. Orbit is a wearable that measures brain and body signals
                during intentional sessions, delivering instant cognitive reports and long-term trend
                data that a dedicated performance coach can actually use to build a personalised
                improvement plan.
              </p>
              <p>
                Behind every coaching recommendation, our in-house neuroscience team analyses
                individual patterns and curates interventions grounded in research. The result is
                professional-grade mental fitness support available to any high performer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ns-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <h2 className="mb-10 font-display text-2xl text-ns-text">What we stand for</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <Card className="h-full">
                  <h3 className="font-display text-lg text-ns-accent">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ns-text-muted">{v.body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
