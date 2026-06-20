"use client";

import { type ReactNode } from "react";

interface ReportChapterProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function ReportChapter({
  id,
  children,
  className = "",
}: ReportChapterProps) {
  return (
    <section
      id={id}
      data-chapter={id}
      className={`min-h-[85vh] py-16 md:min-h-screen md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
