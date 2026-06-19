import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { brandAssets } from "@/lib/brand";

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
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
            <ul className="mt-10 space-y-6">
              {principles.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                  <div>
                    <p className="text-sm font-semibold text-ns-text">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ns-text-muted">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-3xl premium-border">
              <div className="absolute inset-0 aurora-bg opacity-50" />
              <Image
                src={brandAssets.device.isometric}
                alt="Neurostellar Orbit isometric product render"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
