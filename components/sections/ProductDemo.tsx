import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  TextLink,
  sectionPadding,
} from "@/components/ui/SectionTypography";
import { brandAssets } from "@/lib/brand";

const sessionReport = brandAssets.report.sessionReportPages[0];

export function ProductDemo() {
  return (
    <section
      id="product-demo"
      aria-labelledby="product-demo-heading"
      className={sectionPadding}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="self-start lg:sticky lg:top-[calc(5rem+1.5rem)]">
            <FadeIn>
              <Eyebrow>Your session report</Eyebrow>
              <SectionTitle id="product-demo-heading" className="mt-4 max-w-xl">
                This is what 15 minutes of Orbit data looks like.
              </SectionTitle>
              <SectionDescription className="mt-4 max-w-xl">
                Three scores. Twelve behavioural metrics. A clear read on where
                your focus held and where it broke — after every session, compared
                only to yourself.
              </SectionDescription>
              <p className="mt-6">
                <TextLink href="/report">Walk through a sample performance report →</TextLink>
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-ns-border bg-ns-bg">
              <Image
                src={sessionReport.src}
                alt={sessionReport.alt}
                width={1200}
                height={1600}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
