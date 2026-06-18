"use client";

import { type ReactNode, forwardRef } from "react";

interface ReportChapterProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export const ReportChapter = forwardRef<HTMLElement, ReportChapterProps>(
  function ReportChapter({ id, children, className = "" }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        data-chapter={id}
        className={`min-h-[85vh] py-16 md:min-h-screen md:py-24 ${className}`}
      >
        {children}
      </section>
    );
  },
);
