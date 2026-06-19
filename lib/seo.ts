import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.neuro-stellar.com";
const SITE_NAME = "Neurostellar";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Neurostellar Orbit™ | Mental Fitness for Peak Performance",
    template: "%s | Neurostellar",
  },
  description:
    "Neurostellar Orbit is a premium mental fitness wearable for athletes and executives. Track focus, cognitive load, and recovery — then work with a dedicated performance coach backed by our in-house neuroscience team.",
  keywords: [
    "mental fitness",
    "EEG wearable",
    "focus tracking",
    "cognitive performance",
    "athlete recovery",
    "executive performance",
    "performance coaching",
    "neuroscientist",
    "cognitive reports",
    "Neurostellar Orbit",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "Neurostellar Orbit™ | Mental Fitness for Peak Performance",
    description:
      "Train your mind like you train your body. Neurostellar Orbit helps high performers master focus, resilience, and recovery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurostellar Orbit™",
    description: "Premium mental fitness for athletes and executives.",
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neurostellar",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logos/neurostellar-logo-horizontal-light.svg`,
    description:
      "Neurostellar builds neuroscience-driven mental fitness technology for athletes and executives.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@neuro-stellar.com",
      telephone: "+91-78452-16763",
      contactType: "customer support",
    },
    sameAs: [],
  };
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Neurostellar Orbit",
    description:
      "A smart headgear wearable that tracks brain and body signals to deliver instant cognitive reports, long-term trend insights, and coaching from a dedicated performance coach backed by an in-house neuroscience team.",
    brand: { "@type": "Brand", name: "Neurostellar" },
    category: "Mental Fitness Wearable",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      url: `${SITE_URL}/demo`,
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    datePublished: article.datePublished ?? new Date().toISOString(),
    author: { "@type": "Organization", name: "Neurostellar" },
    publisher: {
      "@type": "Organization",
      name: "Neurostellar",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/logos/neurostellar-logo-horizontal-light.svg`,
      },
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
