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

export const productCtaTitle = "Ready to train your brain with data?";

export const productCtaDescription =
  "One device. One coaching program. Cognitive Speed, Agility, and Endurance — after every session.";

export const productCtaActions: CTAAction[] = [
  { href: primaryCtaHref, label: primaryCtaLabel },
  { href: secondaryCtaHref, label: secondaryCtaLabel, variant: "secondary" },
];
