import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { brandAssets } from "@/lib/brand";

const useCases = [
  {
    href: "/executives",
    eyebrow: "For executives & founders",
    title: "You make high-stakes decisions all day. Do you know when your brain is sharp enough to make them well?",
    description:
      "Orbit shows you your peak cognitive window — so you can schedule your hardest thinking for when your brain is actually ready, not just when the calendar says so.",
    bullets: [
      { label: "Decision clarity", body: "Know when you're at peak analytical capacity. Schedule your hardest work for when it counts most." },
      { label: "Cognitive endurance", body: "Track the invisible load of back-to-back meetings and high-pressure leadership before burnout shows up." },
      { label: "Deep work protection", body: "Identify your natural focus windows and defend them with data, not willpower alone." },
    ],
    stat: { value: "+67%", label: "deep work block consistency in 6 weeks — Sarah, Founder & CEO" },
    cta: "Explore executive benefits",
    image: brandAssets.device.desk,
    imageAlt: "Neurostellar Orbit on a premium executive desk setup",
    imageRight: true,
    bg: "",
  },
  {
    href: "/athletes",
    eyebrow: "For competitive athletes",
    title: "Your physical training is tracked to the gram. Your mental preparation isn't tracked at all.",
    description:
      "Orbit gives your brain the same rigour as your body — measuring cognitive recovery, focus under pressure, and mental readiness before competition.",
    bullets: [
      { label: "Focus under fatigue", body: "Know when your mind stays sharp during long training blocks — and when it doesn't." },
      { label: "Mental recovery", body: "Measure mental reset as seriously as physical recovery. Know when you're truly ready for the next effort." },
      { label: "Pre-competition readiness", body: "Build pre-game routines backed by your own focus and readiness data, not guesswork." },
    ],
    stat: { value: "76%", label: "of athletes improved sustained focus duration over 8 weeks" },
    cta: "Explore athlete benefits",
    image: brandAssets.device.chess,
    imageAlt: "Neurostellar Orbit — chess athlete cognitive tracking",
    imageRight: false,
    bg: "bg-ns-bg-elevated",
  },
  {
    href: "/science",
    eyebrow: "For biohackers & knowledge workers",
    title: "You track sleep, HRV, and nutrition. But not the thing those metrics are supposed to protect.",
    description:
      "Orbit closes the loop with the only metric that measures what you're actually trying to optimise — your cognitive output. The layer above everything else you already track.",
    bullets: [
      { label: "Complete the picture", body: "EEG + PPG together give you brain-body signals that no physical tracker can provide." },
      { label: "Compare to yourself", body: "No population averages. Orbit builds a personal baseline so every score is meaningful to you specifically." },
      { label: "Understand → Experiment loop", body: "See what interventions — sleep, nutrition, breathwork — actually improve your cognitive state." },
    ],
    stat: { value: "82%", label: "reported measurable improvement in sustained focus within 8 weeks" },
    cta: "See the science",
    image: brandAssets.device.front,
    imageAlt: "Neurostellar Orbit headband — front view",
    imageRight: true,
    bg: "",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" aria-label="Who Orbit is for">
      {useCases.map((useCase) => (
        <div key={useCase.href} className={`py-24 md:py-32 ${useCase.bg}`}>
          <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                useCase.imageRight ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Text */}
              <FadeIn delay={0.05}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ns-accent">
                  {useCase.eyebrow}
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-ns-text md:text-3xl lg:text-4xl">
                  {useCase.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ns-text-muted md:text-lg">
                  {useCase.description}
                </p>

                <ul className="mt-8 space-y-5">
                  {useCase.bullets.map((b) => (
                    <li key={b.label} className="flex gap-4">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                      <div>
                        <p className="text-sm font-semibold text-ns-text">{b.label}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-ns-text-muted">{b.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {useCase.stat && (
                  <div className="mt-10 border-l-2 border-ns-accent pl-5">
                    <p className="text-3xl font-bold text-ns-accent">{useCase.stat.value}</p>
                    <p className="mt-1 text-sm text-ns-text-muted">{useCase.stat.label}</p>
                  </div>
                )}

                <Link
                  href={useCase.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ns-text hover:text-ns-accent transition-colors"
                >
                  {useCase.cta}
                  <span aria-hidden>→</span>
                </Link>
              </FadeIn>

              {/* Image */}
              <FadeIn delay={0.15}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ns-border">
                  <Image
                    src={useCase.image}
                    alt={useCase.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
