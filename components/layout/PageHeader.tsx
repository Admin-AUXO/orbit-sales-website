import { FadeIn } from "@/components/ui/FadeIn";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      className="border-b border-ns-border bg-ns-bg-elevated pt-32 pb-16 md:pt-44 md:pb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,var(--ns-aurora-1),transparent_45%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight text-ns-text md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ns-text-muted">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
