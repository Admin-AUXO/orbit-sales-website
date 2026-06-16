"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrackedButton } from "@/components/ui/TrackedButton";
import { brandAssets } from "@/lib/brand";

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: NavChild[] };

const nav: NavItem[] = [
  {
    label: "Orbit",
    children: [
      { label: "Overview",    href: "/orbit" },
      { label: "The Science", href: "/science" },
    ],
  },
  {
    label: "Customers",
    children: [
      { label: "Athletes",   href: "/athletes" },
      { label: "Executives", href: "/executives" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Research",     href: "/research" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers",  href: "/careers" },
    ],
  },
  { label: "FAQ", href: "/faq" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={className}>
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-ns-border/60 bg-ns-bg/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--ns-max-width)] items-center justify-between px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-10 block h-8 w-40 lg:h-9 lg:w-44">
          <Image
            src={brandAssets.logos.horizontalLight}
            alt="Neurostellar"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-ns-text-muted transition-colors hover:text-ns-text"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`transition-transform duration-150 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-150 ${
                    openMenu === item.label
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 -translate-y-1"
                  }`}
                >
                  <div className="min-w-[160px] rounded-xl border border-ns-border bg-ns-bg/95 p-1.5 shadow-2xl backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-lg px-4 py-2.5 text-sm text-ns-text-muted transition-colors hover:bg-white/5 hover:text-ns-text"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-ns-text-muted transition-colors hover:text-ns-text"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTAs + hamburger */}
        <div className="flex items-center gap-3">
          <TrackedButton
            href="/demo"
            variant="secondary"
            action="demo"
            location="header"
            className="hidden px-4 py-2.5 text-xs sm:inline-flex lg:px-6 lg:text-sm"
          >
            Book a Demo
          </TrackedButton>
          <TrackedButton
            href="/buy"
            variant="primary"
            action="buy"
            location="header"
            className="px-4 py-2.5 text-xs lg:px-6 lg:text-sm"
          >
            Buy Orbit
          </TrackedButton>

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

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[calc(100dvh-4rem)]" : "max-h-0"
        }`}
      >
        <nav
          className="flex flex-col border-t border-ns-border/50 px-6 pb-6 pt-2"
          aria-label="Mobile navigation"
        >
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-ns-border/30 last:border-0">
                <button
                  className="flex w-full items-center justify-between py-3.5 text-sm text-ns-text-muted"
                  onClick={() =>
                    setMobileExpanded((e) => (e === item.label ? null : item.label))
                  }
                  aria-expanded={mobileExpanded === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`transition-transform duration-150 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileExpanded === item.label ? "max-h-48 pb-2" : "max-h-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 pl-4 text-sm text-ns-text-muted/70 hover:text-ns-text"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-ns-border/30 py-3.5 text-sm text-ns-text-muted last:border-0 hover:text-ns-text"
              >
                {item.label}
              </Link>
            )
          )}

          <div className="mt-5 flex flex-col gap-3">
            <TrackedButton
              href="/demo"
              variant="secondary"
              action="demo"
              location="mobile-nav"
              className="w-full justify-center"
            >
              Book a Demo
            </TrackedButton>
            <TrackedButton
              href="/buy"
              variant="primary"
              action="buy"
              location="mobile-nav"
              className="w-full justify-center"
            >
              Buy Orbit
            </TrackedButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
