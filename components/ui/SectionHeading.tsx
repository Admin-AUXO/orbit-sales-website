export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-ns-text md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ns-text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
