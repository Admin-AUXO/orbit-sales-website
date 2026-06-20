"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonBase, buttonVariants } from "@/lib/button-variants";
import { openRoles } from "@/lib/open-roles";

// The static export has no server, so the application form (which emailed via
// Resend through /api/careers) is replaced with a direct email-to-apply flow.
const APPLY_EMAIL = "careers@neuro-stellar.com";

function applyMailto(roleTitle: string) {
  const subject = encodeURIComponent(`Application — ${roleTitle}`);
  const body = encodeURIComponent(
    "Tell us what you'd want to work on and why, and attach your resume (PDF).",
  );
  return `mailto:${APPLY_EMAIL}?subject=${subject}&body=${body}`;
}

export function CareersSection() {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {openRoles.map((role, i) => (
          <FadeIn key={role.id} className="h-full" delay={i * 0.08}>
            <Card className="flex h-full flex-col">
              <span className="inline-flex w-fit items-center rounded-full border border-ns-border bg-ns-accent-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ns-silver">
                {role.team}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-ns-text">
                {role.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-ns-text-muted">
                {role.type}
              </p>
              <p className="text-sm text-ns-text-muted">{role.location}</p>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ns-text-muted">
                {role.summary}
              </p>
              <Link
                href={`/careers/${role.slug}`}
                className="mt-2 inline-block text-sm font-semibold text-ns-text underline-offset-4 transition-colors hover:text-ns-accent hover:underline"
              >
                Read more →
              </Link>

              <div className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ns-border/70 px-2.5 py-1 text-xs text-ns-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={applyMailto(role.title)}
                  className={`${buttonBase} ${buttonVariants.primary} mt-5 w-full`}
                >
                  Apply
                </a>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <div id="apply" className="mx-auto mt-20 max-w-2xl text-center">
        <h2 className="font-display text-2xl text-ns-text">Apply</h2>
        <p className="mt-4 leading-relaxed text-ns-text-muted">
          Email us at{" "}
          <a
            href={`mailto:${APPLY_EMAIL}`}
            className="font-semibold text-ns-text underline-offset-4 hover:text-ns-accent hover:underline"
          >
            {APPLY_EMAIL}
          </a>{" "}
          with a short note on what you&apos;d want to build and your resume
          attached as a PDF. If there&apos;s a fit, we&apos;ll be in touch.
        </p>
        <a
          href={`mailto:${APPLY_EMAIL}`}
          className={`${buttonBase} ${buttonVariants.primary} mt-8`}
        >
          Email your application
        </a>
      </div>
    </>
  );
}
