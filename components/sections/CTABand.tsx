import Image from "next/image";
import { type ReactNode } from "react";
import { BookDemoButton } from "@/components/ui/BookDemoButton";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
  sectionPadding,
} from "@/components/ui/SectionTypography";
import {
  productCtaActions,
  productCtaDescription,
  productCtaTitle,
  type CTAAction,
} from "@/lib/cta-content";

export type CTABandProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  actions?: CTAAction[];
  footnote?: ReactNode;
  image?: { src: string; alt: string };
  imageBg?: string;
  imageContain?: boolean;
};

function CtaActions({
  actions,
  align,
}: {
  actions: CTAAction[];
  align: "center" | "left";
}) {
  return (
    <div
      className={`mt-8 flex flex-row flex-nowrap items-stretch gap-3 sm:flex-wrap sm:items-center sm:gap-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {actions.map((action) =>
        action.href === "/demo" ? (
          <BookDemoButton
            key={`${action.href}-${action.label}`}
            variant={action.variant}
            location="cta_band"
            className="flex-1 whitespace-nowrap px-3 text-sm sm:flex-none sm:px-6"
          >
            {action.label}
          </BookDemoButton>
        ) : (
          <Button
            key={`${action.href}-${action.label}`}
            href={action.href}
            variant={action.variant}
            target={action.target}
            rel={action.rel}
            className="flex-1 whitespace-nowrap px-3 text-sm sm:flex-none sm:px-6"
          >
            {action.label}
          </Button>
        ),
      )}
    </div>
  );
}

export function CTABand({
  eyebrow,
  title = productCtaTitle,
  description = productCtaDescription,
  actions = productCtaActions,
  footnote,
  image,
  imageBg,
  imageContain,
}: CTABandProps = {}) {
  if (image) {
    return (
      <section
        id="cta"
        aria-labelledby="cta-heading"
        className={`edge-fade-y relative overflow-hidden ${sectionPadding}`}
      >
        <div className="absolute inset-0 aurora-bg opacity-60" />
        <div className="relative mx-auto grid max-w-[var(--ns-max-width)] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <FadeIn>
            {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
            <SectionTitle id="cta-heading" className="!text-4xl sm:!text-5xl md:!text-6xl">
              {title}
            </SectionTitle>
            {description ? (
              <SectionDescription className="mt-5 max-w-xl">
                {description}
              </SectionDescription>
            ) : null}
            <CtaActions actions={actions} align="left" />
            {footnote ? <div className="mt-5">{footnote}</div> : null}
          </FadeIn>

          <FadeIn delay={0.1} className="order-first lg:order-last">
            <div
              className={`relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl premium-border ${
                imageBg ?? ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={imageContain ? "object-contain p-4" : "object-cover"}
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

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
          {eyebrow ? (
            <Eyebrow className="mb-4 flex justify-center">{eyebrow}</Eyebrow>
          ) : null}
          <SectionTitle id="cta-heading" className="mx-auto max-w-2xl">
            {title}
          </SectionTitle>
          {description ? (
            <SectionDescription className="mx-auto mt-4 max-w-2xl">
              {description}
            </SectionDescription>
          ) : null}
          <div className="flex justify-center">
            <CtaActions actions={actions} align="center" />
          </div>
          {footnote ? <div className="mt-5">{footnote}</div> : null}
        </FadeIn>
      </div>
    </section>
  );
}
