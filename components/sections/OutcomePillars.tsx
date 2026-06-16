import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Focus",
    description:
      "See when your mind is truly locked in. Make sharper decisions, react faster, and execute with precision during your highest-stakes moments.",
  },
  {
    title: "Resilience",
    description:
      "Know your cognitive load before you burn out. Push your limits with smart pacing — not guesswork.",
  },
  {
    title: "Recovery",
    description:
      "Understand how deep recovery shapes your next performance. Reset faster and show up ready when it counts.",
  },
];

export function OutcomePillars() {
  return (
    <section
      id="outcomes"
      aria-labelledby="outcomes-heading"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="outcomes-heading"
          eyebrow="Mental fitness"
          title="What you measure, you master."
          description="Three dimensions of performance that separate good from exceptional — now tracked, reported, and coached."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <Card className="h-full" premium>
                <h3 className="text-2xl font-bold text-ns-text">{pillar.title}</h3>
                <p className="mt-4 leading-relaxed text-ns-text-muted">
                  {pillar.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
