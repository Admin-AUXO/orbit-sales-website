import { FadeIn } from "@/components/ui/FadeIn";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  sectionPadding,
} from "@/components/ui/SectionTypography";

const metrics = [
  {
    value: "2",
    label: "Iterative product revisions",
  },
  {
    value: "500+",
    label: "Pilot users",
  },
  {
    value: "3",
    label: "Cohorts completed",
  },
  {
    value: "20,000+",
    label: "Minutes tracked",
  },
] as const;

function StatCell({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex h-full flex-col items-center justify-center px-4 py-6 text-center sm:px-7 sm:py-8">
        <p className="text-2xl font-bold tabular-nums tracking-tight text-ns-text sm:text-3xl md:text-4xl">
          {value}
        </p>
        <p className="mt-2 text-xs leading-snug text-ns-text-muted sm:text-sm">{label}</p>
      </div>
    </FadeIn>
  );
}

export function CredibilityStrip() {
  return (
    <section
      id="credibility"
      aria-labelledby="credibility-heading"
      className={`relative border-t border-ns-border/50 ${sectionPadding}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <FadeIn>
            <Eyebrow>How we got started</Eyebrow>
            <SectionTitle id="credibility-heading" className="mt-4">
              Born at IIT Madras. Built with scientific rigor.
            </SectionTitle>
            <SectionDescription className="mt-4">
              We started with a simple gap: bodies are measured precisely, brains
              are not. Born at IIT Madras, Orbit pairs validated sensing with
              published research methods — refined through real pilot programmes
              and thousands of tracked sessions.
            </SectionDescription>
          </FadeIn>

          <div className="relative overflow-hidden rounded-2xl border border-ns-border bg-ns-bg-card">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-ns-border to-transparent" />
              <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-ns-border to-transparent" />
            </div>

            <div className="grid grid-cols-2">
              {metrics.map((metric, i) => (
                <StatCell
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  delay={0.05 + i * 0.06}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
