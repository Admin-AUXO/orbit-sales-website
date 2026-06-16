import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCaseStudies } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "For Executives",
  "Neurostellar Orbit helps executives sustain clarity, protect cognitive endurance, and lead without burning out.",
  "/executives",
);

const benefits = [
  {
    title: "Decision clarity",
    body: "Know when your mind is at peak analytical capacity — and schedule your hardest work accordingly.",
  },
  {
    title: "Cognitive endurance",
    body: "Protect yourself from invisible burnout during back-to-back meetings, fundraising, and high-stakes leadership.",
  },
  {
    title: "Deep work protection",
    body: "Identify your natural focus windows and defend them with data, not willpower alone.",
  },
];

export default function ExecutivesPage() {
  const execStudies = getCaseStudies().filter((c) => c.persona === "executive");

  return (
    <PageShell>
      <JsonLd
        data={[
          articleJsonLd({
            title: "Neurostellar Orbit for Executives",
            description:
              "Mental fitness wearable for leaders and executives — cognitive load tracking, focus optimization, and burnout prevention.",
            url: "/executives",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "For Executives", path: "/executives" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="For executives"
        title="Lead with clarity. Not exhaustion."
        description="The demands on leaders have never been higher. Orbit gives executives objective insight into cognitive load, focus patterns, and recovery — so you can perform sustainably."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <Card className="h-full">
                  <h2 className="font-display text-xl text-ns-accent">{b.title}</h2>
                  <p className="mt-3 leading-relaxed text-ns-text-muted">{b.body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {execStudies.length > 0 && (
        <section className="bg-ns-bg-elevated py-16 md:py-24">
          <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
            <h2 className="mb-10 font-display text-3xl text-ns-text">
              Executive case studies
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {execStudies.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                  <Card className="h-full transition-colors hover:border-ns-accent/50">
                    <h3 className="font-display text-xl text-ns-text">{study.headline}</h3>
                    <p className="mt-2 text-sm text-ns-text-muted">— {study.name}</p>
                    {study.results[0] && (
                      <p className="mt-4 text-2xl text-ns-accent">{study.results[0].change}</p>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 text-center">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <Button href="/buy">Buy Orbit</Button>
          <span className="mx-4 text-ns-text-muted">or</span>
          <Button href="/demo" variant="secondary">
            Book a Demo
          </Button>
        </div>
      </section>
      <CTABand />
    </PageShell>
  );
}
