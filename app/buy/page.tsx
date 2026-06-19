import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { ReserveForm } from "@/components/forms/ReserveForm";
import { Card } from "@/components/ui/Card";
import { DeviceSlideshow } from "@/components/ui/DeviceSlideshow";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  "Buy Neurostellar Orbit",
  "Reserve your Neurostellar Orbit — premium mental fitness wearable for athletes and executives. Be first to own the edge.",
  "/buy",
);

const features = [
  "Neurostellar Orbit headband — EEG + PPG sensors",
  "Cognitive Speed, Agility & Endurance scores after every session",
  "12 behavioural metrics per session (deep work, recovery, intrusion rate, and more)",
  "iOS & Android app with session history and trend reports",
  "Weekly review with a dedicated performance coach",
  "Neuroscience team-curated intervention protocols",
  "8+ hours battery life",
  "Encrypted local-first data storage — your data is never sold or shared",
];

export default function BuyPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          productJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Buy", path: "/buy" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Own the edge"
        title="Reserve Neurostellar Orbit"
        description="Everything you need to start training your brain with data. One device. One coaching program. Every cognitive insight, yours."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="premium-border premium-surface overflow-hidden">
              <DeviceSlideshow />
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-ns-text">Neurostellar Orbit™</h2>
                <p className="mt-2 text-ns-text-muted">Premium mental fitness wearable</p>
                <p className="mt-6 text-4xl font-bold text-ns-text">$250</p>
                <p className="mt-1 text-sm text-ns-text-muted">Includes device + performance coaching program · Free shipping</p>
                <ul className="mt-8 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ns-text-muted">
                      <span className="text-ns-silver">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-ns-text">Reserve yours</h2>
              <ReserveForm />
              <p className="mt-6 text-sm text-ns-text-muted">
                Prefer to talk first?{" "}
                <Link href="/demo" className="text-ns-text underline hover:no-underline">
                  Book a demo
                </Link>{" "}
                and our team will walk you through Orbit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </PageShell>
  );
}
