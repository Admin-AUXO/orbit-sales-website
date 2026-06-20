import Image from "next/image";
import { asset } from "@/lib/brand";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  Eyebrow,
  SectionTitle,
  sectionPadding,
} from "@/components/ui/SectionTypography";

type NewsItem = {
  image: string;
  caption: string;
  href: string;
};

const news: NewsItem[] = [
  {
    image: "/brand/news/mou-vishnu-prasanna.webp",
    caption:
      "Announcing Stellarmate — Neurostellar partners with Grandmaster Vishnu Prasanna",
    href: "https://www.linkedin.com/posts/neurostellar_chess-mentalperformance-mentalfitness-activity-7330486339575922690-3Oz9",
  },
  {
    image: "/brand/news/ather-investment.webp",
    caption:
      "Ather Energy's co-founders Swapnil and Tarun join Neurostellar as angel investors",
    href: "https://www.thehindubusinessline.com/info-tech/chennai-deep-tech-start-up-neurostellar-raises-funds-from-ather-energy-founders/article69567573.ece",
  },
  {
    image: "/brand/news/ces-2025.webp",
    caption: "Introducing Neurostellar Orbit at CES 2025",
    href: "https://www.linkedin.com/posts/neurostellar_unveilingorbitbeta-ces2025-eurekapark-activity-7282475583446364161-rVT6",
  },
  {
    image: "/brand/news/dubai-ai-week.webp",
    caption:
      "Neurostellar at Dubai AI Week 2025 with the IIT Madras global delegation",
    href: "https://www.linkedin.com/posts/dhanushya-neurostellar_last-week-i-was-at-the-dubai-ai-week-2025-activity-7322668817174642688-E-fd",
  },
  {
    image: "/brand/news/gitex-2024.webp",
    caption:
      "Neurostellar debuts globally at GITEX Global — Expand North Star 2024",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7251902577422839808",
  },
  {
    image: "/brand/news/founders-story.webp",
    caption: "The Neurostellar story, from co-founder Dhanushya Sree",
    href: "https://www.linkedin.com/in/dhanushya-neurostellar/",
  },
];

export function NewsStrip() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className={`bg-ns-bg-elevated ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <Eyebrow>Recent highlights</Eyebrow>
          <SectionTitle id="news-heading" className="mt-4">
            Where Orbit has been making news
          </SectionTitle>
        </FadeIn>

        <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {news.map((item, i) => (
            <FadeIn
              key={item.image}
              className="h-full w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-auto"
              delay={0.05 + (i % 3) * 0.06}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-ns-border bg-ns-bg-card transition-colors hover:border-ns-text/30"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={asset(item.image)}
                    alt={item.caption}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 items-start gap-2 px-5 py-4">
                  <p className="line-clamp-2 flex-1 text-sm leading-snug text-ns-text-muted">
                    {item.caption}
                  </p>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-ns-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ns-text"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
