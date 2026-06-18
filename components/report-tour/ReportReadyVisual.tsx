import Image from "next/image";

export function ReportReadyVisual() {
  return (
    <div className="mx-auto w-full max-w-[380px] overflow-hidden">
      <Image
        src="/report-ready-mobile.svg"
        alt="Orbit session complete — your cognitive report is ready with Speed, Agility, and Endurance scores"
        width={380}
        height={733}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
