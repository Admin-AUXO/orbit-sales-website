import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.neuro-stellar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/orbit",
    "/demo",
    "/faq",
    "/science",
    "/report",
    "/about",
    "/contact",
  ];

  return staticPages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
