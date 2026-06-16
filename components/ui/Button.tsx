import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ns-accent text-ns-on-accent hover:bg-ns-accent-hover border border-ns-accent",
  secondary:
    "bg-transparent text-ns-text border border-ns-border hover:border-ns-text hover:text-ns-text",
  ghost: "bg-transparent text-ns-text-muted hover:text-ns-text border border-transparent",
};

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
