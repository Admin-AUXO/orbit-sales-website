import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { OrbitExplodeVideo } from "@/components/orbit/OrbitExplodeVideo";

const principles = [
  {
    title: "Intentional, not ambient",
    body: "Orbit captures data during sessions you choose — strategy, deep work, recovery. Every score has context, not background noise.",
  },
  {
    title: "Built for still focus",
    body: "Engineered for high-stakes moments at a desk, on the mat, or in quiet preparation — where precision matters more than step counts.",
  },
  {
    title: "Premium without compromise",
    body: "Brain-grade sensing in a silhouette you'd wear in a boardroom. Lightweight, adjustable, and stable enough for 10–15 minute sessions without distraction.",
  },
  {
    title: "Hardware that earns trust",
    body: "Three years of R&D across multiple prototypes. Sensor placement, materials, and fit refined until the device disappears — and the data doesn't.",
  },
];

export function OrbitDesignPhilosophy() {
  return (
    <section
      id="why-orbit"
      aria-labelledby="why-orbit-heading"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ns-accent">
              Engineering intent
            </p>
            <h2
              id="why-orbit-heading"
              className="text-3xl font-bold tracking-tight text-ns-text md:text-4xl"
            >
              Why Orbit is built the way it is
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ns-text-muted">
              Most wearables measure your body in the background. Orbit measures
              your mind when you decide it matters — then turns that into
              actionable scores in minutes, not days.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-ns-border md:mt-12">
            <OrbitExplodeVideo />
          </div>
        </FadeIn>

        <div className="mt-12 lg:mt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ns-accent md:mb-8">
            Product Philosophy
          </p>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {principles.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 + i * 0.08}>
                <Card className="h-full" premium>
                  <h3 className="text-base font-semibold text-ns-text md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ns-text-muted">
                    {item.body}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
