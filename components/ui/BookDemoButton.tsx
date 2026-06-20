"use client";

import { type ReactNode } from "react";
import { trackCTA } from "@/lib/analytics";
import { openBookDemo } from "@/lib/calendly";
import {
  buttonBase,
  buttonVariants,
  type ButtonVariant,
} from "@/lib/button-variants";

export function BookDemoButton({
  children,
  variant = "primary",
  location,
  className = "",
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  location: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        trackCTA("demo", location);
        openBookDemo();
      }}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
