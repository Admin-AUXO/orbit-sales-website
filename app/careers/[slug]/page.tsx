import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRole, openRoles } from "@/lib/open-roles";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return openRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) {
    return pageMetadata("Careers", "Open roles at Neurostellar.", "/careers");
  }
  return pageMetadata(
    `${role.title} — Careers`,
    role.summary,
    `/careers/${role.slug}`,
  );
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const applyHref = `/careers?role=${encodeURIComponent(role.title)}#apply`;

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
          { name: role.title, path: `/careers/${role.slug}` },
        ])}
      />

      <div className="relative overflow-hidden border-b border-ns-border bg-ns-bg-elevated pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,var(--ns-aurora-1),transparent_55%)]" />
        <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <Link
            href="/careers"
            className="text-sm font-medium text-ns-text-muted transition-colors hover:text-ns-text"
          >
            ← All open roles
          </Link>
          <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-ns-text sm:text-4xl md:text-5xl">
            {role.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ns-text-muted">
            <span className="font-medium text-ns-text">{role.team}</span>
            <span aria-hidden>·</span>
            <span>{role.type}</span>
            <span aria-hidden>·</span>
            <span>{role.location}</span>
          </div>
          <div className="mt-8">
            <Button href={applyHref}>Apply for this role</Button>
          </div>
        </div>
      </div>

      <Section innerClassName="max-w-3xl">
        <div className="space-y-5 leading-relaxed text-ns-text-muted">
          {role.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 space-y-12">
          {role.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold tracking-tight text-ns-text md:text-2xl">
                {section.heading}
              </h2>
              {section.items ? (
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ns-silver"
                      />
                      <span className="text-sm leading-relaxed text-ns-text-muted md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.body ? (
                <div className="mt-5 space-y-4 leading-relaxed text-ns-text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-ns-border bg-ns-bg-elevated p-6 md:p-8">
          <h2 className="text-lg font-bold tracking-tight text-ns-text">
            Ready to apply?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ns-text-muted">
            Send your details and resume — we read every application.
          </p>
          <div className="mt-5">
            <Button href={applyHref}>Apply for this role</Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
