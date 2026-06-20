import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type CaseStudy = {
  slug: string;
  persona: "athlete" | "executive";
  name: string;
  headline: string;
  challenge: string;
  intervention: string;
  results: {
    metric: string;
    before: string;
    after: string;
    change: string;
  }[];
  quote: string;
  photo: string;
  trialRef?: string;
  featured?: boolean;
};

export type Trial = {
  slug: string;
  title: string;
  partner: string;
  duration: string;
  cohort: string;
  method: string;
  headlineResult: string;
  status: "completed" | "ongoing";
};

export type FaqItem = {
  question: string;
  answer: string;
  category?: string;
};

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

export function getTrials(): Trial[] {
  const dir = path.join(contentDir, "trials");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => readJson<Trial>(path.join(dir, f)));
}

export function getCaseStudies(): CaseStudy[] {
  const dir = path.join(contentDir, "case-studies");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const data = readJson<CaseStudy>(path.join(dir, f));
      return { ...data, slug: f.replace(".json", "") };
    });
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const filePath = path.join(contentDir, "case-studies", `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  return { ...readJson<CaseStudy>(filePath), slug };
}

export function getFaq(): FaqItem[] {
  const filePath = path.join(contentDir, "faq.json");
  if (!fs.existsSync(filePath)) return [];
  return readJson<FaqItem[]>(filePath);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies().filter((c) => c.featured);
}
