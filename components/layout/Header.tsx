"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookDemoButton } from "@/components/ui/BookDemoButton";
import { primaryCtaLabel } from "@/lib/cta-content";
import { brandAssets } from "@/lib/brand";

type NavItem = { label: string; href: string };

const nav: NavItem[] = [
  { label: "Orbit", href: "/orbit" },
  { label: "The Science", href: "/science" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

function isActive(href: string, pathname: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled && !mobileOpen
          ? "border-b border-ns-border/60 bg-ns-bg/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--ns-max-width)] items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link href="/" className="relative z-10 block h-8 w-40 lg:h-9 lg:w-44">
          <Image
            src={brandAssets.logos.horizontalLight}
            alt="Neurostellar"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href, pathname) ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition-colors hover:text-ns-text ${
                isActive(item.href, pathname)
                  ? "text-ns-text"
                  : "text-ns-text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookDemoButton
            variant="primary"
            location="header"
            className="whitespace-nowrap px-4 py-2.5 text-xs max-lg:hidden lg:px-6 lg:text-sm"
          >
            {primaryCtaLabel}
          </BookDemoButton>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className={`block h-px w-5 bg-ns-text-muted transition-all duration-200 ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ns-text-muted transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ns-text-muted transition-all duration-200 ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ns-bg/95 backdrop-blur-2xl transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 aurora-bg opacity-30" />
        <nav
          className="relative flex flex-1 flex-col items-center justify-center gap-2 px-6"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`w-full max-w-xs rounded-2xl py-4 text-center text-2xl font-semibold tracking-tight transition-colors ${
                  active
                    ? "bg-ns-accent-muted text-ns-text"
                    : "text-ns-text-muted hover:text-ns-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="mt-8 w-full max-w-xs"
            onClick={() => setMobileOpen(false)}
          >
            <BookDemoButton
              variant="primary"
              location="mobile-nav"
              className="w-full justify-center py-4 text-base"
            >
              {primaryCtaLabel}
            </BookDemoButton>
          </div>
        </nav>
      </div>
    </>
  );
}
