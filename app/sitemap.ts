import type { MetadataRoute } from "next";
import { openRoles } from "@/lib/open-roles";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.neuro-stellar.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/orbit",
    "/demo",
    "/faq",
    "/science",
    "/report",
    "/about",
    "/careers",
    ...openRoles.map((role) => `/careers/${role.slug}`),
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return staticPages.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
