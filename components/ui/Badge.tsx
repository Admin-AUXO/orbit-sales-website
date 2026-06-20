import { type ReactNode } from "react";

export type BadgeVariant = "default" | "accent" | "outline" | "tag";

const variants: Record<BadgeVariant, string> = {
  default:
    "border border-ns-border bg-ns-accent-muted text-ns-text",
  accent:
    "border border-ns-border bg-ns-bg-elevated/40 text-ns-silver",
  outline: "border border-ns-border/60 text-ns-text-muted",
  tag: "border border-ns-border bg-ns-bg-card text-ns-text-muted",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
