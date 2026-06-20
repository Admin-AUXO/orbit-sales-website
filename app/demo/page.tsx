import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { BookDemoButton } from "@/components/ui/BookDemoButton";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Book a Demo",
  "Schedule a personalized Neurostellar Orbit demo. See how mental fitness tracking works for athletes and executives.",
  "/demo",
);

export default function DemoPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book a Demo", path: "/demo" },
        ])}
      />
      <PageHeader
        eyebrow="See it in action"
        title="Book a Demo"
        description="Talk with our team about how Orbit fits your performance goals — whether you compete on the field or in the boardroom."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <h2 className="font-display text-2xl text-ns-text">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4 text-ns-text-muted">
                <li>15-minute personalized walkthrough of Orbit</li>
                <li>How mental fitness tracking fits your routine</li>
                <li>Q&amp;A on trials, science, and availability</li>
                <li>No pressure — just clarity</li>
              </ul>
            </div>

            <Card className="flex flex-col items-start gap-5">
              <div>
                <h2 className="font-display text-xl text-ns-text">
                  Pick a time that works
                </h2>
                <p className="mt-3 text-ns-text-muted">
                  Book a 30-minute call with our team — the scheduler opens in a
                  click. No forms, no back-and-forth.
                </p>
              </div>
              <BookDemoButton location="demo_page">Book a Demo</BookDemoButton>
              <p className="text-sm text-ns-text-muted">
                Prefer email? Reach us at{" "}
                <a
                  href="mailto:support@neuro-stellar.com"
                  className="text-ns-text underline"
                >
                  support@neuro-stellar.com
                </a>
                .
              </p>
            </Card>
          </div>
        </div>
      </section>
      <CTABand />
    </PageShell>
  );
}
