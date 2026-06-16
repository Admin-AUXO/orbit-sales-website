interface PlaceholderVisualProps {
  title: string;
  designerNote: string;
  aspectRatio?: string;
  className?: string;
}

export function PlaceholderVisual({
  title,
  designerNote,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: PlaceholderVisualProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-white/10 bg-white/[0.025] ${aspectRatio} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <svg
          className="mb-4 text-white/20"
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
        >
          <rect
            x="1"
            y="5"
            width="24"
            height="18"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="13" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M9 5L10.5 2h5L17 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="21" cy="9" r="1" fill="currentColor" />
        </svg>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/25">
          {title}
        </p>
        <p className="mt-2.5 max-w-[260px] text-xs leading-relaxed text-white/18">
          {designerNote}
        </p>
      </div>
    </div>
  );
}
