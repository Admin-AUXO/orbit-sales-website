import {
  Eyebrow,
  SectionDescription,
  SectionTitle,
} from "@/components/ui/SectionTypography";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={`mb-10 ${alignClass}`}>
      {eyebrow ? <Eyebrow className={align === "center" ? "mb-3" : "mb-4"}>{eyebrow}</Eyebrow> : null}
      <SectionTitle id={id}>{title}</SectionTitle>
      {description ? (
        <SectionDescription className={`mt-4 ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </SectionDescription>
      ) : null}
    </div>
  );
}
