import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandAssets } from "@/lib/brand";

const steps = [
  {
    step: "01",
    title: "Wear it for 10–15 minutes",
    description:
      "During deep work, a meeting, training, or recovery. No gel, no setup, no all-day commitment. Tag what you're doing and let Orbit capture your brain and body in action.",
    visual: {
      type: "image" as const,
      src: brandAssets.device.hero,
      alt: "Person wearing the Neurostellar Orbit headband during a focused session",
    },
  },
  {
    step: "02",
    title: "Get your cognitive report",
    description:
      "Instant scores for cognitive speed, agility, and endurance — plus deep work patterns, recovery quality, and where your focus broke. Ready before your next meeting.",
    visual: {
      type: "placeholder" as const,
      title: "Instant Report + Trend View — App UI",
      designerNote:
        "Split-panel app view. Left: post-session report with three gauge scores (Speed, Agility, Endurance). Right: 4-week trend lines per metric in white/silver. Minimal dark UI.",
    },
  },
  {
    step: "03",
    title: "Your coach builds the plan",
    description:
      "A Neurostellar performance coach reviews your trends weekly and creates a protocol to extend your peak windows and reduce cognitive drain — backed by the in-house neuroscience team.",
    visual: {
      type: "placeholder" as const,
      title: "Coach Session — Lifestyle Photo",
      designerNote:
        "One-on-one video call: user has Orbit dashboard open showing latest trend data. Coach visible on laptop screen. Professional, warm setting. Not overly staged.",
    },
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-ns-bg-elevated py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="How it works"
          title="Wear. Report. Improve."
          description="From the moment you put it on to the expert who helps you act on the data."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.1}>
              <div className="flex h-full flex-col">
                {/* Visual */}
                {item.visual.type === "image" ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ns-border">
                    <Image
                      src={item.visual.src}
                      alt={item.visual.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <PlaceholderVisual
                    title={item.visual.title}
                    designerNote={item.visual.designerNote}
                    aspectRatio="aspect-[4/3]"
                  />
                )}

                {/* Text */}
                <div className="mt-6 flex flex-col flex-1">
                  <span className="font-display text-4xl text-ns-accent/30">{item.step}</span>
                  <h3 className="mt-3 font-display text-xl text-ns-text">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ns-text-muted">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
