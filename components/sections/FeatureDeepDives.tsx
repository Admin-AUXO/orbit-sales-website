import { FadeIn } from "@/components/ui/FadeIn";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

const features = [
  {
    index: "01",
    slug: "speed",
    eyebrow: "Cognitive Speed",
    title: "Know when your brain is at its sharpest — and use that window well.",
    description:
      "Cognitive Speed measures how quickly you enter and sustain deep, high-intensity focus. It tells you when you're absorbing information fast and processing at your best — so you can schedule your most demanding work for when it actually counts.",
    bullets: [
      "Tracks your brain's ability to rapidly enter high-focus states",
      "Surfaces your natural high-speed processing window each session",
      "Coach uses your speed score to time cognitive demands across your week",
    ],
    visual: {
      title: "Cognitive Speed — Session Report",
      designerNote:
        "Arc gauge showing Cognitive Speed score (0–100). Score highlighted in the upper range. Below: a timeline graph showing rapid entry into deep work at session start. Caption: 'Speed 58.4 — above average entry pace'. Dark background, clean typography.",
      aspectRatio: "aspect-[4/3]",
    },
    imageLeft: false,
  },
  {
    index: "02",
    slug: "agility",
    eyebrow: "Cognitive Agility",
    title: "See when your thinking flows easily — and when it's being forced.",
    description:
      "Cognitive Agility captures how smoothly your brain adapts, synthesises, and shifts between ideas. High agility means working from instinct and experience — not grinding through effort. Low agility is the first signal your mental resources are depleting.",
    bullets: [
      "Measures ease of idea synthesis and mental flow across a session",
      "Identifies when effortful processing is replacing instinctive thinking",
      "Gives your coach the signal to adjust session intensity or recovery timing",
    ],
    visual: {
      title: "Cognitive Agility — Session Report",
      designerNote:
        "Arc gauge showing Cognitive Agility score (0–100). Score in mid-range with a trend arrow. Below: a flow-state indicator showing proportion of session spent in flow vs fragmented states. Caption: 'Agility 39.6 — synthesis capacity below peak'. Dark UI.",
      aspectRatio: "aspect-[4/3]",
    },
    imageLeft: true,
  },
  {
    index: "03",
    slug: "endurance",
    eyebrow: "Cognitive Endurance",
    title: "Find out how long your peak performance actually lasts.",
    description:
      "Cognitive Endurance measures your ability to sustain consistent, high-quality thinking over time with minimal fragmentation. It reveals cognitive fatigue before it shows up in your decisions, your output, or your relationships.",
    bullets: [
      "Tracks performance stability across the full length of a session",
      "Detects fragmentation — the earliest signal that endurance is dropping",
      "Week-on-week trends show whether your protocols are building lasting capacity",
    ],
    visual: {
      title: "Cognitive Endurance — Session Report",
      designerNote:
        "Arc gauge showing Cognitive Endurance score (0–100). Score in lower range. Below: a session timeline showing sustained engagement zones vs fragmented drop-offs. Caption: 'Endurance 33.9 — fragmentation increasing after 8 minutes'. Dark UI.",
      aspectRatio: "aspect-[4/3]",
    },
    imageLeft: false,
  },
];

export function FeatureDeepDives() {
  return (
    <section id="features" aria-label="Core features" className="py-8 md:py-12">
      {features.map((feature, i) => (
        <div
          key={feature.slug}
          className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-ns-bg-elevated" : ""}`}
        >
          <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                feature.imageLeft ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <FadeIn delay={0.05}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ns-accent">
                  {feature.index} / {feature.eyebrow}
                </p>
                <h2 className="text-2xl font-extrabold tracking-tight text-ns-text md:text-3xl lg:text-4xl">
                  {feature.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ns-text-muted md:text-lg">
                  {feature.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-ns-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Visual placeholder */}
              <FadeIn delay={0.15}>
                <PlaceholderVisual
                  title={feature.visual.title}
                  designerNote={feature.visual.designerNote}
                  aspectRatio={feature.visual.aspectRatio}
                  className="w-full"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
