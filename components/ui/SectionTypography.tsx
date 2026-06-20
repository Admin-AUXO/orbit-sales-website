import Link from "next/link";
import { type ReactNode } from "react";

export const sectionPadding = "py-16 sm:py-20 lg:py-24";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-ns-silver ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-balance text-3xl font-bold tracking-tight text-ns-text md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-pretty text-base leading-relaxed text-ns-text-muted md:text-lg ${className}`}
    >
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`cursor-pointer text-sm font-semibold text-ns-text underline-offset-4 transition-colors hover:text-ns-accent hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}
