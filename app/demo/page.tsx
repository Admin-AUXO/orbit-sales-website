import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { DemoForm } from "@/components/forms/DemoForm";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Book a Demo",
  "Schedule a personalized Neurostellar Orbit demo. See how mental fitness tracking works for athletes and executives.",
  "/demo",
);

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-2xl text-ns-text">
                Request a demo
              </h2>
              <DemoForm />
            </div>
            {CALENDLY_URL ? (
              <Card className="overflow-hidden p-0">
                <iframe
                  src={CALENDLY_URL}
                  title="Schedule a Neurostellar demo"
                  className="h-[600px] w-full border-0"
                />
              </Card>
            ) : (
              <Card>
                <h2 className="font-display text-xl text-ns-text">
                  What to expect
                </h2>
                <ul className="mt-4 space-y-4 text-ns-text-muted">
                  <li>15-minute personalized walkthrough of Orbit</li>
                  <li>How mental fitness tracking fits your routine</li>
                  <li>Q&A on trials, science, and availability</li>
                  <li>No pressure — just clarity</li>
                </ul>
                <p className="mt-6 text-sm text-ns-text-muted">
                  Set <code className="text-ns-accent">NEXT_PUBLIC_CALENDLY_URL</code>{" "}
                  to embed your Calendly scheduler here.
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>
      <CTABand />
    </PageShell>
  );
}
