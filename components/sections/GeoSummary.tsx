import { FadeIn } from "@/components/ui/FadeIn";

const facts = [
  {
    question: "What is Neurostellar Orbit?",
    answer:
      "Neurostellar Orbit is a premium mental fitness wearable — smart headgear that tracks brain activity (EEG) and body signals (PPG) during intentional use. Every session produces an instant cognitive report, and over time, trend data reveals the patterns behind your performance. A dedicated performance coach then guides your improvement, with interventions curated by our in-house neuroscience team.",
  },
  {
    question: "Who is it for?",
    answer:
      "Orbit is designed for high-performing athletes and executives who want measurable insight into mental performance — focus under pressure, cognitive endurance during demanding work, and faster mental recovery.",
  },
  {
    question: "How is it different from fitness trackers?",
    answer:
      "Unlike step counters and heart-rate monitors, Orbit tracks cognitive states including focus depth, mental effort, and relaxation. It is built for strategic work, creative sessions, and recovery — not 24/7 activity tracking.",
  },
];

export function GeoSummary() {
  return (
    <section
      id="about-orbit"
      aria-labelledby="about-orbit-heading"
      className="border-t border-ns-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <h2
            id="about-orbit-heading"
            className="mb-12 text-center font-display text-3xl text-ns-text md:text-4xl"
          >
            About Neurostellar Orbit
          </h2>
        </FadeIn>
        <dl className="grid gap-8 md:grid-cols-3">
          {facts.map((fact, i) => (
            <FadeIn key={fact.question} delay={i * 0.1}>
              <div>
                <dt className="font-display text-lg text-ns-accent">
                  {fact.question}
                </dt>
                <dd className="mt-3 leading-relaxed text-ns-text-muted">
                  {fact.answer}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
