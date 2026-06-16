import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTrials } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Research & Trials",
  "Clinical and field trials validating Neurostellar Orbit for athletes and executives — focus, cognitive load, recovery, and expert-coached performance research.",
  "/research",
);

export default function ResearchPage() {
  const trials = getTrials();

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Research & Trials", path: "/research" },
        ])}
      />
      <PageHeader
        eyebrow="Validated"
        title="Research & trials"
        description="Rigorous validation with real performers — built on over 3 years of R&D across neuroscience, engineering, and performance science."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-ns-text-muted">
            Neurostellar Orbit is developed with neuroscientists, biomedical
            engineers, and research experts. Our trials measure real-world
            outcomes — not just lab metrics.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {trials.map((trial, i) => (
              <FadeIn key={trial.slug} delay={i * 0.1}>
                <Card className="flex h-full flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-ns-accent">
                    {trial.status}
                  </span>
                  <h2 className="mt-3 font-display text-xl text-ns-text">
                    {trial.title}
                  </h2>
                  <dl className="mt-4 flex-1 space-y-2 text-sm text-ns-text-muted">
                    <div>
                      <dt className="inline font-medium text-ns-text">Partner: </dt>
                      <dd className="inline">{trial.partner}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-ns-text">Duration: </dt>
                      <dd className="inline">{trial.duration}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-ns-text">Cohort: </dt>
                      <dd className="inline">{trial.cohort}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-ns-text">Method: </dt>
                      <dd className="inline">{trial.method}</dd>
                    </div>
                  </dl>
                  <p className="mt-6 text-lg font-medium text-ns-accent">
                    {trial.headlineResult}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/science" variant="secondary">
              Explore the science
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
