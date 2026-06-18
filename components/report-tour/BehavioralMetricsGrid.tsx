import type { BehavioralMetric } from "@/lib/report-tour-data";

interface BehavioralMetricsGridProps {
  metrics: BehavioralMetric[];
}

export function BehavioralMetricsGrid({ metrics }: BehavioralMetricsGridProps) {
  return (
    <div>
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-ns-text-muted">
        Behavioural metrics
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[#333333] bg-[#232323] px-3 py-2.5"
          >
            <p className="text-sm font-bold tabular-nums text-ns-text">
              {m.value}
            </p>
            <p className="mt-0.5 text-[9px] leading-tight text-ns-text-muted">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
