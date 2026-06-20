import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTypography";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { CareersSection } from "./CareersForm";

export const metadata = pageMetadata(
  "Careers",
  "Join Neurostellar and help build the future of mental fitness for elite athletes and high performers. We work at the intersection of neuroscience, coaching, and product.",
  "/careers",
);

const values = [
  {
    title: "A mission that matters",
    body: "Everything we ship changes how people think, focus, and recover. You'll see your work in the performance of the athletes and executives who rely on Orbit.",
  },
  {
    title: "The people you'll work with",
    body: "You'll sit alongside neuroscientists, performance coaches, and engineers who hold a high bar. Strong ideas win here, regardless of who they come from.",
  },
  {
    title: "Grounded in science",
    body: "We don't ship guesses. Our decisions are evidence-led, our claims are measured, and our neuroscience team keeps the product honest.",
  },
  {
    title: "Room to grow",
    body: "We're a compact team, so the scope is wide and the ownership is real. You'll take on more than your title implies and grow faster for it.",
  },
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
        eyebrow="Careers"
        title={
          <>
            Build the future of <GradientText>mental fitness</GradientText>
          </>
        }
        description="We're looking for people who want to push what wearable technology can do for human performance — at the intersection of neuroscience, coaching, and product."
      />

      <Section>
        <SectionTitle className="mb-10">Why Neurostellar</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} className="h-full" delay={i * 0.08}>
              <Card className="h-full">
                <h3 className="text-base font-bold tracking-tight text-ns-text">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ns-text-muted">
                  {v.body}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="elevated">
        <div className="mx-auto mb-12 max-w-2xl">
          <SectionTitle>Open roles</SectionTitle>
          <p className="mt-4 leading-relaxed text-ns-text-muted">
            These are the roles we&apos;re hiring for now. Pick the one that
            fits and apply below. Don&apos;t see a match? Send a general
            application — we&apos;re always looking for exceptional people.
          </p>
        </div>
        <CareersSection />
      </Section>
    </PageShell>
  );
}
