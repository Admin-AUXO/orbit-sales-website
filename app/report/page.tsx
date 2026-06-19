import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { ExecutiveReportTour } from "@/components/report-tour/ExecutiveReportTour";
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

      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 pb-4 text-center lg:px-8">
        <Link
          href="/executives"
          className="text-sm text-ns-text-muted underline-offset-4 hover:text-ns-accent hover:underline"
        >
          ← Back to For Executives
        </Link>
      </div>

      <CTABand />
    </PageShell>
  );
}
