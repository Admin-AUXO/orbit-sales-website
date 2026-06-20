import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const metrics = [
  {
    eyebrow: "Cognitive Speed",
    title: "Know when your brain is at its sharpest",
    body: "See how quickly you enter deep focus — and schedule your hardest work for when you actually absorb and process at your best.",
    outcome: "Protect your peak window. Stop guessing when to think hard.",
  },
  {
    eyebrow: "Cognitive Agility",
    title: "See when thinking flows — and when it's forced",
    body: "Track how smoothly you adapt, synthesise, and shift between ideas. High agility means instinct; low agility is your earliest depletion signal.",
    outcome: "Adjust intensity before effort replaces flow.",
  },
  {
    eyebrow: "Cognitive Endurance",
    title: "Find out how long peak performance lasts",
    body: "Measure sustained, high-quality thinking across a session. Catch fragmentation before it shows up in decisions, output, or relationships.",
    outcome: "Pace your day with data — not willpower alone.",
  },
];

export function OrbitValueProps() {
  return (
    <Section
      id="what-orbit-delivers"
      ariaLabelledby="what-orbit-delivers-heading"
      className="bg-ns-bg-elevated"
    >
        <SectionHeading
          id="what-orbit-delivers-heading"
          eyebrow="What you get"
          title="Three scores. One clear picture of your edge."
          description="After every 10–15 minute session, Orbit delivers Cognitive Speed, Agility, and Endurance — plus 12 behavioral metrics and trend reports over time. No jargon. Just what to do next."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.eyebrow} className="h-full" delay={i * 0.1}>
              <Card className="flex h-full flex-col" premium>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
                  {metric.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-bold text-ns-text md:text-2xl">
                  {metric.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-ns-text-muted">
                  {metric.body}
                </p>
                <p className="mt-6 border-t border-ns-border pt-4 text-sm font-medium text-ns-text">
                  {metric.outcome}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
    </Section>
  );
}
