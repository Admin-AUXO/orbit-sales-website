import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionDescription, SectionTitle, sectionPadding } from "@/components/ui/SectionTypography";
import {
  productCtaActions,
  productCtaDescription,
  productCtaTitle,
  type CTAAction,
} from "@/lib/cta-content";

export type CTABandProps = {
  title?: ReactNode;
  description?: ReactNode;
  actions?: CTAAction[];
  footnote?: ReactNode;
};

export function CTABand({
  title = productCtaTitle,
  description = productCtaDescription,
  actions = productCtaActions,
  footnote,
}: CTABandProps = {}) {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className={`relative overflow-hidden border-y border-ns-border ${sectionPadding}`}
    >
      <div className="absolute inset-0 aurora-bg opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,var(--ns-glow),transparent_60%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 text-center lg:px-8">
        <FadeIn>
          <SectionTitle id="cta-heading" className="mx-auto max-w-2xl">
            {title}
          </SectionTitle>
          {description ? (
            <SectionDescription className="mx-auto mt-4 max-w-2xl">
              {description}
            </SectionDescription>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {actions.map((action) => (
              <Button
                key={`${action.href}-${action.label}`}
                href={action.href}
                variant={action.variant}
                target={action.target}
                rel={action.rel}
              >
                {action.label}
              </Button>
            ))}
          </div>
          {footnote ? <div className="mt-5">{footnote}</div> : null}
        </FadeIn>
      </div>
    </section>
  );
}
