import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow, sectionPadding } from "@/components/ui/SectionTypography";
import {
  cohortProofs,
  proofFootnote,
  proofHeadline,
  type CohortMetric,
} from "@/lib/cohort-proof";

const personaLabel = {
  athlete: "Athletes",
  executive: "Executives",
} as const;

function MetricPill({ metric }: { metric: CohortMetric }) {
  return (
    <div className="rounded-xl border border-ns-border/60 bg-ns-bg-elevated/40 px-2 py-2.5 text-center">
      <p className="text-[0.65rem] font-semibold uppercase tracking-normal text-ns-silver">
        {metric.name}
      </p>
      <p className="mt-1.5 text-base font-bold tabular-nums tracking-tight text-ns-text sm:text-lg">
        <CountUp value={metric.improved} /> of {metric.total}
      </p>
      <p className="mt-0.5 text-xs font-medium leading-tight text-ns-text-muted">
        improved
      </p>
    </div>
  );
}

export function CaseStudyHighlights() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className={`bg-ns-bg-elevated ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="case-studies-heading"
          eyebrow="Proof that our approach works"
          title="Real performers. Measurable results."
          description="Early cohort data from structured programs — chess academy and executive deep-work pilots."
        />

        <FadeIn>
          <div className="rounded-2xl border border-ns-border bg-ns-bg-card px-6 py-8 text-center md:px-10 md:py-9">
            <p className="text-4xl font-bold tabular-nums tracking-tight text-ns-text md:text-5xl">
              {proofHeadline.value}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-ns-text-muted">
              {proofHeadline.label}
            </p>
          </div>
        </FadeIn>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {cohortProofs.map((proof, i) => (
            <FadeIn key={proof.cohort} className="h-full" delay={0.08 + i * 0.08}>
              <Card className="flex h-full flex-col">
                <Eyebrow className="tracking-[0.2em]">{personaLabel[proof.persona]}</Eyebrow>
                <h3 className="mt-2 text-xl font-bold text-ns-text">{proof.cohort}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ns-text-muted">{proof.context}</p>

                <div className="mt-auto grid grid-cols-3 gap-3 pt-6">
                  {proof.metrics.map((metric) => (
                    <MetricPill key={metric.name} metric={metric} />
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-xs leading-relaxed text-ns-text-muted">
            {proofFootnote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
