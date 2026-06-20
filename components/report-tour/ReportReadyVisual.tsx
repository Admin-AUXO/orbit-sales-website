import Image from "next/image";
import { asset } from "@/lib/brand";

export function ReportReadyVisual() {
  return (
    <div className="mx-auto w-full max-w-[380px] overflow-hidden">
      <Image
        src={asset("/report-ready-mobile.svg")}
        alt="Orbit session complete — your cognitive report is ready with Speed, Agility, and Endurance scores"
        width={380}
        height={733}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
