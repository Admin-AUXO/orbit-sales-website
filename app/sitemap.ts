import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.neuro-stellar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/orbit",
    "/buy",
    "/demo",
    "/faq",
    "/science",
    "/athletes",
    "/executives",
    "/case-studies",
    "/research",
  ];

  const caseStudyPages = getCaseStudies().map((s) => ({
    url: `${BASE}/case-studies/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...caseStudyPages,
  ];
}
