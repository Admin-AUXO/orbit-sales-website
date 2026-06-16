import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedCaseStudies } from "@/lib/content";

export function CaseStudyHighlights() {
  const studies = getFeaturedCaseStudies();

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="case-studies-heading"
          eyebrow="Proof"
          title="Real performers. Measurable results."
          description="How athletes and executives use Neurostellar Orbit to unlock their edge."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.1}>
              <Link href={`/case-studies/${study.slug}`}>
                <Card className="h-full transition-colors hover:border-ns-accent/50">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-ns-accent">
                    {study.persona}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-ns-text">
                    {study.headline}
                  </h3>
                  <blockquote className="mt-4 border-l-2 border-ns-accent pl-4 italic text-ns-text-muted">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-sm text-ns-text-muted">— {study.name}</p>
                  {study.results[0] && (
                    <p className="mt-6 text-3xl font-medium text-ns-accent">
                      {study.results[0].change}
                      <span className="ml-2 text-sm font-normal text-ns-text-muted">
                        {study.results[0].metric}
                      </span>
                    </p>
                  )}
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-ns-accent hover:underline"
          >
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
