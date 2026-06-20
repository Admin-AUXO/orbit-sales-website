"use client";

import dynamic from "next/dynamic";

const CalendlyModal = dynamic(
  () => import("./CalendlyModal").then((m) => m.CalendlyModal),
  { ssr: false },
);

export function CalendlyModalLoader() {
  return <CalendlyModal />;
}
