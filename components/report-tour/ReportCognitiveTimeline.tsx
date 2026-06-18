import Image from "next/image";

export function ReportCognitiveTimeline() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/brand/report/cognitive-state-timeline.png"
        alt="Cognitive State Timeline showing Intensity and Efficiency over 15 minutes with Engaged, Flow, Fragmented, Idle, Transition, and Poor Signal state bands"
        width={2625}
        height={1260}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
