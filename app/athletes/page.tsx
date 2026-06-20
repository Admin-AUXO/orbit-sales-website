import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCaseStudies } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "For Athletes",
  "Neurostellar Orbit helps athletes master focus under fatigue, optimize recovery, and perform when the margin is mental.",
  "/athletes",
);

const benefits = [
  {
    title: "Focus under fatigue",
    body: "Track when your mind stays sharp during long training blocks and competition — and when it doesn't.",
  },
  {
    title: "Recovery between sessions",
    body: "Measure mental reset as seriously as physical recovery. Know when you're truly ready for the next effort.",
  },
  {
    title: "Pre-performance readiness",
    body: "Build pre-game and pre-race routines backed by your own focus and relaxation data.",
  },
];

export default function AthletesPage() {
  const athleteStudies = getCaseStudies().filter((c) => c.persona === "athlete");

  return (
    <PageShell>
      <JsonLd
        data={[
          articleJsonLd({
            title: "Neurostellar Orbit for Athletes",
            description:
              "Mental fitness wearable for competitive athletes — focus tracking, recovery reporting, and expert coaching from a dedicated performance coach backed by our neuroscience team.",
            url: "/athletes",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "For Athletes", path: "/athletes" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="For athletes"
        title="The mental edge is measurable"
        description="You train your body with data. It's time to train your mind the same way. Orbit gives competitive athletes objective insight into focus, load, and recovery."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} className="h-full" delay={i * 0.1}>
                <Card className="h-full">
                  <h2 className="font-display text-xl text-ns-accent">{b.title}</h2>
                  <p className="mt-3 leading-relaxed text-ns-text-muted">{b.body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {athleteStudies.length > 0 && (
        <section className="bg-ns-bg-elevated py-16 md:py-24">
          <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
            <h2 className="mb-10 font-display text-3xl text-ns-text">
              Athlete case studies
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {athleteStudies.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="block h-full">
                  <Card className="flex h-full flex-col transition-colors hover:border-ns-accent/50">
                    <h3 className="font-display text-xl text-ns-text">{study.headline}</h3>
                    <p className="mt-2 text-sm text-ns-text-muted">— {study.name}</p>
                    {study.results[0] && (
                      <p className="mt-auto pt-4 text-2xl text-ns-accent">{study.results[0].change}</p>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </PageShell>
  );
}
