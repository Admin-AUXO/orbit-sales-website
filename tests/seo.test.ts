import { describe, expect, it } from "vitest";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  pageMetadata,
  productJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

describe("pageMetadata", () => {
  it("sets title, description, and canonical path", () => {
    const meta = pageMetadata("FAQ", "Answers", "/faq");
    expect(meta.title).toBe("FAQ");
    expect(meta.description).toBe("Answers");
    expect(meta.alternates?.canonical).toBe("/faq");
  });
});

describe("JSON-LD builders", () => {
  it("organization has required schema fields", () => {
    const org = organizationJsonLd();
    expect(org["@type"]).toBe("Organization");
    expect(org.name).toBe("Neurostellar");
    expect(org.url).toMatch(/^https?:\/\//);
  });

  it("website and product are typed correctly", () => {
    expect(websiteJsonLd()["@type"]).toBe("WebSite");
    expect(productJsonLd()["@type"]).toBe("Product");
  });

  it("faq maps questions to Question entities", () => {
    const ld = faqJsonLd([{ question: "Q?", answer: "A." }]);
    expect(ld["@type"]).toBe("FAQPage");
    expect(ld.mainEntity).toHaveLength(1);
    expect(ld.mainEntity[0].acceptedAnswer.text).toBe("A.");
  });

  it("breadcrumb positions are 1-indexed and ordered", () => {
    const ld = breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ]);
    expect(ld.itemListElement[0].position).toBe(1);
    expect(ld.itemListElement[1].position).toBe(2);
  });
});
