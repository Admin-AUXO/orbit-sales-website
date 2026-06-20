import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { BookDemoButton } from "@/components/ui/BookDemoButton";
import { GradientText } from "@/components/ui/GradientText";
import { buttonBase, buttonVariants } from "@/lib/button-variants";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: "/orbit", label: "Overview" },
  { href: "/science", label: "The Science" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-display text-7xl font-extrabold tracking-tight sm:text-8xl">
          <GradientText>404</GradientText>
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-ns-text md:text-4xl">
          This page drifted out of orbit
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-ns-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className={`${buttonBase} ${buttonVariants.primary}`}
          >
            Back to home
          </Link>
          <BookDemoButton variant="secondary" location="not_found">
            Book a Demo
          </BookDemoButton>
        </div>

        <div className="mt-12 w-full border-t border-ns-border pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ns-text-muted">
            Or explore
          </p>
          <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ns-text-muted underline-offset-4 transition-colors hover:text-ns-text hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
