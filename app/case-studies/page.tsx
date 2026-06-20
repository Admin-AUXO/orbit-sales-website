import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCaseStudies } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { guardDisabledRoute } from "@/lib/route-guard";

export const metadata = pageMetadata(
  "Case Studies",
  "Real stories from athletes and executives using Neurostellar Orbit to improve focus, recovery, and performance.",
  "/case-studies",
);

export default function CaseStudiesPage() {
  guardDisabledRoute("/case-studies");
  const studies = getCaseStudies();

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHeader
        eyebrow="Proof"
        title="Case studies"
        description="How high performers use Neurostellar Orbit to unlock measurable improvements in focus, recovery, and cognitive endurance."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {studies.map((study, i) => (
              <FadeIn key={study.slug} className="h-full" delay={i * 0.05}>
                <Link href={`/case-studies/${study.slug}`} className="block h-full">
                  <Card className="h-full transition-colors hover:border-ns-accent/50">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-ns-accent">
                      {study.persona}
                    </span>
                    <h2 className="mt-3 font-display text-2xl text-ns-text">
                      {study.headline}
                    </h2>
                    <p className="mt-2 text-sm text-ns-text-muted">{study.name}</p>
                    <blockquote className="mt-4 text-ns-text-muted italic">
                      &ldquo;{study.quote}&rdquo;
                    </blockquote>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </PageShell>
  );
}
