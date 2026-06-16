import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const proofPoints = [
  "EEG signal features correlated >0.5 with lab-standard equipment",
  "Task classification: p < 0.001 across multiple cognitive conditions",
  "Model robustness maintained within 8% under high-magnitude noise conditions",
  "Individual baseline only — compared to you, not population averages",
  "In-house ethics committee with external neuroscience experts",
];

export function TeamSignal() {
  return (
    <section
      id="science-anchor"
      aria-labelledby="science-anchor-heading"
      className="border-y border-ns-border py-20"
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left — headline + body */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
                The science behind the scores
              </p>
              <h2
                id="science-anchor-heading"
                className="text-2xl font-extrabold tracking-tight text-ns-text md:text-3xl"
              >
                Built at IIT Madras. Validated against research-grade equipment.
              </h2>
              <p className="mt-5 leading-relaxed text-ns-text-muted">
                Orbit was developed over 3+ years with neuroscientists and
                biomedical engineers. The algorithms are trained on 400+ hours
                of validated cognitive data — tested against laboratory-grade
                EEG and ECG equipment. A 2025 peer-reviewed preprint documents
                the full methodology.
              </p>
              <Link
                href="/science"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ns-text hover:text-ns-accent transition-colors"
              >
                Read the research
                <span aria-hidden>→</span>
              </Link>
            </div>

            {/* Right — proof points */}
            <ul className="space-y-4 pt-1">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-accent" />
                  <p className="text-sm leading-relaxed text-ns-text-muted">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
