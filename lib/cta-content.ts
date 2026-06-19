export type CTAAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  rel?: string;
};

export const primaryCtaHref = "/demo";
export const primaryCtaLabel = "Book a Demo";

export const secondaryCtaHref = "/report";
export const secondaryCtaLabel = "See What You'll Unlock";

export const productCtaTitle = "Train your brain like you train your body.";

export const productCtaDescription =
  "Understand how your brain is performing — then make better decisions about focus, work, training, and recovery.";

export const productCtaActions: CTAAction[] = [
  { href: primaryCtaHref, label: primaryCtaLabel },
  { href: secondaryCtaHref, label: secondaryCtaLabel, variant: "secondary" },
];
