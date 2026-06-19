"use client";

import Link from "next/link";
import { trackCTA } from "@/lib/analytics";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ns-accent text-ns-on-accent hover:bg-ns-accent-hover border border-ns-accent",
  secondary:
    "bg-transparent text-ns-text border border-ns-border hover:border-ns-text hover:text-ns-text",
  ghost: "bg-transparent text-ns-text-muted hover:text-ns-text border border-transparent",
};

export function TrackedButton({
  href,
  variant = "primary",
  children,
  className = "",
  action,
  location,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  action: "buy" | "demo" | "report";
  location: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackCTA(action, location)}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
