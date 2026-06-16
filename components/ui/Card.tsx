import { type ReactNode } from "react";

export function Card({
  children,
  className = "",
  premium = false,
}: {
  children: ReactNode;
  className?: string;
  premium?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-ns-border bg-ns-bg-card p-6 md:p-8 ${
        premium ? "premium-border premium-surface" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
