"use client";

import dynamic from "next/dynamic";

const ExecutiveReportTour = dynamic(
  () =>
    import("@/components/report-tour/ExecutiveReportTour").then(
      (m) => m.ExecutiveReportTour,
    ),
  {
    ssr: false,
    loading: () => <div className="min-h-screen" aria-hidden />,
  },
);

export function ExecutiveReportTourLoader() {
  return <ExecutiveReportTour />;
}
