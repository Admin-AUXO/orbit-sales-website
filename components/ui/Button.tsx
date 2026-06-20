import Link from "next/link";
import { type ReactNode } from "react";
import {
  buttonBase,
  buttonVariants,
  type ButtonVariant,
} from "@/lib/button-variants";

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
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
