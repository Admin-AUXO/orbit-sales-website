import { type ReactNode } from "react";

type BulletColor = "silver" | "accent" | "teal";

const dotColor: Record<BulletColor, string> = {
  silver: "bg-ns-silver",
  accent: "bg-ns-accent",
  teal: "bg-ns-teal",
};

export function BulletList({
  items,
  color = "silver",
  className = "",
  itemClassName = "",
}: {
  items: ReactNode[];
  color?: BulletColor;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 text-sm text-ns-text-muted ${itemClassName}`}
        >
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor[color]}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
