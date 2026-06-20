export type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonBase =
  "inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-ns-accent text-ns-on-accent hover:bg-ns-accent-hover border border-ns-accent",
  secondary:
    "bg-transparent text-ns-text border border-ns-border hover:border-ns-text hover:text-ns-text",
  ghost:
    "bg-transparent text-ns-text-muted hover:text-ns-text border border-transparent",
};
