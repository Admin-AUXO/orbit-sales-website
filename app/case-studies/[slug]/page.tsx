import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata(study.headline, study.challenge, `/case-studies/${slug}`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <PageShell>
      <JsonLd
        data={[
          articleJsonLd({
            title: study.headline,
            description: study.challenge,
            url: `/case-studies/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: study.headline, path: `/case-studies/${slug}` },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={study.persona}
        title={study.headline}
        description={study.name}
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <section>
            <h2 className="font-display text-2xl text-ns-text">The challenge</h2>
            <p className="mt-4 leading-relaxed text-ns-text-muted">{study.challenge}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-ns-text">How they used Orbit</h2>
            <p className="mt-4 leading-relaxed text-ns-text-muted">{study.intervention}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-ns-text">Results</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {study.results.map((r) => (
                <Card key={r.metric}>
                  <p className="text-3xl font-medium text-ns-accent">{r.change}</p>
                  <p className="mt-1 text-sm font-medium text-ns-text">{r.metric}</p>
                  <p className="mt-2 text-xs text-ns-text-muted">
                    {r.before} → {r.after}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <blockquote className="mt-12 border-l-2 border-ns-accent pl-6">
            <p className="text-xl italic text-ns-text">&ldquo;{study.quote}&rdquo;</p>
            <footer className="mt-4 text-sm text-ns-text-muted">— {study.name}</footer>
          </blockquote>

          {study.trialRef && (
            <p className="mt-8 text-sm text-ns-text-muted">
              Related trial:{" "}
              <Link href="/research" className="text-ns-accent hover:underline">
                View research
              </Link>
            </p>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/buy">Buy Orbit</Button>
            <Button href="/demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
