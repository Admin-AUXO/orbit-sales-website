import Image from "next/image";
import { type ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <div className="relative overflow-hidden border-b border-ns-border bg-ns-bg-elevated pt-14 pb-12 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,var(--ns-aurora-1),transparent_55%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div
          className={
            image
              ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-12"
              : undefined
          }
        >
          <FadeIn>
            {eyebrow && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ns-silver">
                {eyebrow}
              </p>
            )}
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ns-text sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ns-text-muted md:text-xl">
                {description}
              </p>
            )}
          </FadeIn>
          {image && (
            <FadeIn delay={0.1} className="order-first lg:order-last">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
                <div className="absolute inset-[12%] rounded-full bg-ns-glow opacity-70 blur-3xl" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 85vw, 560px"
                  className="object-contain"
                  priority
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
