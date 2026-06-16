import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getTrials } from "@/lib/content";

export function TrialCards() {
  const trials = getTrials();

  return (
    <section
      id="trials"
      aria-labelledby="trials-heading"
      className="bg-ns-bg-elevated py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="trials-heading"
          eyebrow="Research"
          title="Trials at a glance"
          description="Rigorous validation with real performers — not just lab conditions."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {trials.map((trial, i) => (
            <FadeIn key={trial.slug} delay={i * 0.1}>
              <Card className="flex h-full flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-ns-accent">
                  {trial.status}
                </span>
                <h3 className="mt-3 font-display text-xl text-ns-text">
                  {trial.title}
                </h3>
                <dl className="mt-4 space-y-2 text-sm text-ns-text-muted">
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
                </dl>
                <p className="mt-auto pt-6 text-lg font-medium text-ns-accent">
                  {trial.headlineResult}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/research"
            className="text-sm font-medium text-ns-accent hover:underline"
          >
            Explore all research →
          </Link>
        </div>
      </div>
    </section>
  );
}
