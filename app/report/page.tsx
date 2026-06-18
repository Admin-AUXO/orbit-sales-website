import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExecutiveReportTour } from "@/components/report-tour/ExecutiveReportTour";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Executive Report Tour",
  "Explore an interactive walkthrough of the Orbit cognitive session report, weekly trends, science-backed recommendations, and your performance coach.",
  "/report",
);

export default function ExecutiveReportPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "For Executives", path: "/executives" },
          { name: "Report Tour", path: "/report" },
        ])}
      />

      <PageHeader
        eyebrow="Performance Report"
        title="Your cognitive report, explained."
        description="Scroll through a real session report, see how trends build over a week, and follow the conversation with your performance coach."
      />

      <ExecutiveReportTour />

      <section className="border-t border-ns-border bg-ns-bg-elevated py-16 text-center md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <h2 className="font-display text-2xl text-ns-text md:text-3xl">
            Ready to see your own data?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ns-text-muted">
            Orbit turns every session into insight — and your coach turns insight
            into a plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/buy">Buy Orbit</Button>
            <Button href="/demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
          <p className="mt-6">
            <Link
              href="/executives"
              className="text-sm text-ns-text-muted underline-offset-4 hover:text-ns-accent hover:underline"
            >
              ← Back to For Executives
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
