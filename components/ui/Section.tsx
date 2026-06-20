import { type ElementType, type ReactNode } from "react";
import { sectionPadding } from "@/components/ui/SectionTypography";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

const bgClass = {
  default: "",
  elevated: "bg-ns-bg-elevated",
  card: "bg-ns-bg-card",
} as const;

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
  bg = "default",
  contained = true,
  ariaLabelledby,
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  bg?: keyof typeof bgClass;
  contained?: boolean;
  ariaLabelledby?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${sectionPadding} ${bgClass[bg]} ${className}`}
    >
      {contained ? (
        <Container className={innerClassName}>{children}</Container>
      ) : (
        children
      )}
    </Tag>
  );
}

const gapClass = {
  tight: "gap-4",
  default: "gap-6",
  loose: "gap-8",
} as const;

const colsClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function SectionGrid({
  children,
  cols = 3,
  gap = "default",
  className = "",
}: {
  children: ReactNode;
  cols?: keyof typeof colsClass;
  gap?: keyof typeof gapClass;
  className?: string;
}) {
  return (
    <div className={`grid ${gapClass[gap]} ${colsClass[cols]} ${className}`}>
      {children}
    </div>
  );
}
