import { FadeIn } from "@/components/ui/FadeIn";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  TextLink,
  sectionPadding,
} from "@/components/ui/SectionTypography";

const proofPoints = [
  "Signal features validated against lab-standard EEG equipment",
  "Cognitive states distinguished reliably across multiple conditions in internal testing",
  "Models built to stay robust under real-world movement and noise",
  "Compared to your own baseline — not population averages",
  "In-house ethics committee with external neuroscience experts",
];

export function TeamSignal() {
  return (
    <section
      id="science-anchor"
      aria-labelledby="science-anchor-heading"
      className={`edge-fade-y ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>The science</Eyebrow>
              <SectionTitle id="science-anchor-heading" className="mt-4">
                Research-grade sensing. Scores you can trust.
              </SectionTitle>
              <SectionDescription className="mt-4">
                Orbit&apos;s algorithms are trained on validated cognitive data
                and tested against laboratory-grade EEG equipment. Every score
                is built to reflect your performance — not a population average.
              </SectionDescription>
              <p className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <TextLink href="/science">Explore the science →</TextLink>
                <TextLink href="/about">Meet the team →</TextLink>
              </p>
            </div>

            <ul className="space-y-4">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-silver" />
                  <p className="text-sm leading-relaxed text-ns-text-muted md:text-base">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
