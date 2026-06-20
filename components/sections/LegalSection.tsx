import { type ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section">
      <h2 className="text-xl font-semibold tracking-tight text-ns-text md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ns-text-muted [&_a]:text-ns-text [&_a]:underline [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ns-text [&_li]:ml-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
