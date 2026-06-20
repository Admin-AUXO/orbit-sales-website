import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SpecRow = {
  label: string;
  value: string;
};

const deviceSpecs: SpecRow[] = [
  { label: "Form factor", value: "Smart headband — adjustable, over-ear fit" },
  { label: "Weight", value: "98 g" },
  { label: "Materials", value: "Biocompatible polyurethane · Polycarbonate casing" },
  { label: "Brain sensing", value: "2 active EEG channels (AF7 & AF8)" },
  { label: "Body sensing", value: "Triple-wavelength PPG (IR, Red, Green)" },
  { label: "Motion sensing", value: "Tri-axial accelerometer" },
  { label: "Battery", value: "8+ hours · USB-C fast charging" },
  { label: "Wireless", value: "Bluetooth Low Energy 5.4" },
  { label: "Compatibility", value: "iOS, Android, Windows, macOS" },
  { label: "Data & privacy", value: "Encrypted local-first storage" },
  { label: "Session length", value: "10–15 minutes (intentional use)" }
];

const inBox: SpecRow[] = [
  { label: "Device", value: "Orbit smart headband with EEG + PPG sensors" },
  { label: "Charging Cable", value: "Braided USB-C cable" },
  { label: "Quick start guide", value: "Setup in minutes" },
  { label: "App access", value: "iOS & Android — session history & trend reports" }
];

function SpecTable({ rows, caption }: { rows: SpecRow[]; caption: string }) {
  return (
    <div className="rounded-2xl border border-ns-border bg-ns-bg-elevated p-5 sm:p-6 md:p-8">
      <h3 className="text-lg font-bold tracking-tight text-ns-text md:text-xl">
        {caption}
      </h3>
      <dl className="mt-4 divide-y divide-ns-border/70">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-0.5 py-3.5 sm:grid-cols-[minmax(8rem,11rem)_1fr] sm:gap-6 sm:py-4"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-ns-silver sm:text-sm sm:font-medium sm:normal-case sm:tracking-normal sm:text-ns-text-muted">
              {row.label}
            </dt>
            <dd className="text-sm leading-relaxed text-ns-text">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function OrbitTechSpecs() {
  return (
    <Section id="specs" ariaLabelledby="specs-heading">
        <SectionHeading
          id="specs-heading"
          eyebrow="Technical specifications"
          title="The details, distilled"
          description="Product engineering and what's in the box — everything you need to evaluate Orbit as hardware."
        />

        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
            <SpecTable rows={deviceSpecs} caption="Orbit" />
            <SpecTable rows={inBox} caption="In the box" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-ns-border bg-ns-bg-elevated p-6 md:p-8">
            <p className="text-sm leading-relaxed text-ns-text-muted">
              Sensor validation, signal processing methodology, and the neuroscience
              behind the scores live on our{" "}
              <Link
                href="/science"
                className="font-medium text-ns-text underline decoration-ns-border underline-offset-4 transition hover:decoration-ns-text"
              >
                Science page
              </Link>
              . This page is about the product — the Science page is about the proof.
            </p>
          </div>
        </FadeIn>
    </Section>
  );
}
