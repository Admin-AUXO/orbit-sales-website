import { brandAssets } from "@/lib/brand";

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

const demoActions: CTAAction[] = productCtaActions;

export type CTAVariant = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: CTAAction[];
  image?: { src: string; alt: string };
  imageBg?: string;
  imageContain?: boolean;
};

export const homeCta: CTAVariant = {
  eyebrow: "Open beta",
  title: "Push Limits. Break Barriers. Own Your Performance.",
  description:
    "Mental fitness, measured. See where you stand, train the gaps, and compound small gains into a real competitive edge.",
  actions: demoActions,
  image: {
    src: brandAssets.hero.pushLimitsChess,
    alt: "Competitor wearing Neurostellar Orbit during a focused chess match",
  },
  imageBg: "bg-white",
  imageContain: true,
};

export const orbitCta: CTAVariant = {
  eyebrow: "See it in action",
  title: "Engineered for your sharpest hours.",
  description:
    "Watch Orbit turn a 15-minute session into focus, recovery, and endurance you can act on.",
  actions: demoActions,
};

export const scienceCta: CTAVariant = {
  eyebrow: "From research to results",
  title: "Research-grade sensing. Put it to work.",
  description:
    "The science is only useful when it moves your numbers. Book a demo and see your own data.",
  actions: [{ href: primaryCtaHref, label: primaryCtaLabel }],
};

export const aboutCta: CTAVariant = {
  eyebrow: "Join us",
  title: "Build the future of mental fitness.",
  description:
    "We're a small team of scientists, engineers, and builders. See the product — or come build it with us.",
  actions: [
    { href: primaryCtaHref, label: primaryCtaLabel },
    { href: "/careers", label: "View open roles", variant: "secondary" },
  ],
};

export const contactCta: CTAVariant = {
  eyebrow: "Prefer to see it first",
  title: "Book a demo before you reach out.",
  description:
    "A 30-minute walkthrough of Orbit and a sample report answers most questions faster than email.",
  actions: [{ href: primaryCtaHref, label: primaryCtaLabel }],
};

export const faqCta: CTAVariant = {
  eyebrow: "Still curious",
  title: "Ask us anything — live.",
  description:
    "Book a demo and we'll show you exactly how Orbit measures, scores, and coaches.",
  actions: [{ href: primaryCtaHref, label: primaryCtaLabel }],
};
