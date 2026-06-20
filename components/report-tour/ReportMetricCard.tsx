import type { BehavioralMetric } from "@/lib/report-tour-data";

interface ReportMetricCardProps {
  metric: BehavioralMetric;
}

export function ReportMetricCard({ metric }: ReportMetricCardProps) {
  return (
    <div className="rounded-lg border border-ns-border bg-ns-bg-card px-3 py-3">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium leading-tight text-white">
          {metric.label}
        </p>
        <p className="shrink-0 text-sm font-semibold tabular-nums text-white">
          {metric.value}
        </p>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ns-border">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${metric.barFill}%`,
            backgroundColor: metric.barColor,
          }}
        />
      </div>

      <p className="mt-2 text-[9px] leading-snug text-ns-text-muted">
        {metric.description}
      </p>
    </div>
  );
}
