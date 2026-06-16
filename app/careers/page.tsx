import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Careers",
  "Join Neurostellar and help build the future of mental fitness for elite athletes and high performers. We're always looking for people who want to work at the intersection of neuroscience and technology.",
  "/careers",
);

const values = [
  {
    title: "Mission-driven work",
    body: "Everything we build has a direct impact on how people perform and feel. You'll see the results of your work in the athletes and executives you help.",
  },
  {
    title: "Deep expertise",
    body: "We work with neuroscientists, sports psychologists, and elite coaches. Whatever your discipline, you'll learn from the best in adjacent fields.",
  },
  {
    title: "Small team, big scope",
    body: "We're a compact team where every person has meaningful ownership. Good ideas win regardless of where they come from.",
  },
  {
    title: "Remote-first",
    body: "We operate across time zones and believe great work happens when people have the autonomy to choose where and how they work best.",
  },
];

const openRoles: { title: string; team: string; location: string }[] = [
  // Populate when roles are available
];

export default function CareersPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Join us"
        title="Build the future of mental fitness"
        description="We're looking for people who want to push what wearable technology can do for human performance — at the intersection of neuroscience, coaching, and product."
      />

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <h2 className="mb-10 font-display text-2xl text-ns-text">Why Neurostellar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <Card className="h-full">
                  <h3 className="font-display text-base text-ns-accent">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ns-text-muted">{v.body}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-ns-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <h2 className="mb-10 font-display text-2xl text-ns-text">Open roles</h2>

          {openRoles.length > 0 ? (
            <div className="space-y-4">
              {openRoles.map((role) => (
                <Card key={role.title} className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-base text-ns-text">{role.title}</p>
                    <p className="mt-1 text-sm text-ns-text-muted">
                      {role.team} · {role.location}
                    </p>
                  </div>
                  <Button href="/about" variant="secondary">
                    Apply
                  </Button>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-ns-border bg-ns-bg/50 px-8 py-12 text-center">
              <p className="font-display text-lg text-ns-text">No open roles right now</p>
              <p className="mt-3 text-ns-text-muted">
                We don&apos;t always have listed roles, but we&apos;re always open to hearing from
                exceptional people. If you think you belong here, reach out.
              </p>
              <div className="mt-8">
                <Button href="mailto:careers@neuro-stellar.com" variant="secondary">
                  Get in touch
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
