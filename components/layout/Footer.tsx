import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import { brandAssets } from "@/lib/brand";
import { primaryCtaLabel, secondaryCtaLabel } from "@/lib/cta-content";

const navLinks = {
  Product: [
    { href: "/orbit", label: "Orbit" },
    { href: "/demo", label: primaryCtaLabel },
    { href: "/report", label: secondaryCtaLabel },
  ],
  Company: [
    { href: "/science", label: "The Science" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ],
};

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

const socials = [
  {
    label: "X",
    href: "https://x.com/Neuro_stellar",
    icon: (
      <path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-5.98l-4.68-6.12L5.7 21H2.73l6.94-7.93L2.25 3h6.13l4.23 5.6L17.53 3Zm-1.05 16.2h1.65L7.6 4.71H5.83L16.48 19.2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/neurostellar/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.84v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.46c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21H9V9Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/neuro_stellar/",
    icon: (
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4.01 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 1.8A3.14 3.14 0 1 0 15.14 12 3.14 3.14 0 0 0 12 8.86Zm5.14-3.2a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@neurostellarofficial",
    icon: (
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ns-border bg-ns-bg-elevated">
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-[1.5fr_2fr]">
          <div>
            <Link href="/" className="relative block h-11 w-52">
              <Image
                src={brandAssets.logos.horizontalLight}
                alt="Neurostellar"
                fill
                sizes="208px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ns-text-muted">
              Neuroscience-driven mental fitness for athletes and executives —
              brain and body data turned into your competitive edge.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ns-border text-ns-text-muted transition-colors hover:border-ns-text hover:bg-ns-accent-muted hover:text-ns-text"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-[17px] w-[17px]"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 sm:justify-self-end sm:gap-x-14 lg:gap-x-20">
            {Object.entries(navLinks).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ns-text">
                  {group}
                </h3>
                <ul>
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-block py-1 text-sm text-ns-text-muted transition-colors hover:text-ns-text"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ns-text">
                Legal
              </h3>
              <ul>
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-1 text-sm text-ns-text-muted transition-colors hover:text-ns-text"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <CookieSettingsButton className="cursor-pointer py-1 text-sm text-ns-text-muted transition-colors hover:text-ns-text" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-ns-border pt-6 text-xs text-ns-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Neurostellar. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="mailto:support@neuro-stellar.com" className="py-1 hover:text-ns-text">
              support@neuro-stellar.com
            </a>
            <a href="tel:+917845216763" className="py-1 hover:text-ns-text">
              +91 78452 16763
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
