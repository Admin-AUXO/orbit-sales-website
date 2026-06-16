import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { brandAssets } from "@/lib/brand";

const links = {
  Product: [
    { href: "/orbit", label: "Orbit" },
    { href: "/buy", label: "Buy" },
    { href: "/demo", label: "Book a Demo" },
  ],
  Proof: [
    { href: "/athletes", label: "For Athletes" },
    { href: "/executives", label: "For Executives" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/research", label: "Research & Trials" },
  ],
  Learn: [
    { href: "/science", label: "The Science" },
    { href: "/faq", label: "FAQ" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-ns-border bg-ns-bg-elevated">
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="relative mb-6 block h-8 w-40">
              <Image
                src={brandAssets.logos.horizontalLight}
                alt="Neurostellar"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-ns-text-muted">
              Neuroscience-driven mental fitness for athletes and executives who
              refuse to settle. Neurostellar Orbit turns brain and body data
              into your competitive edge.
            </p>
            <div className="flex gap-3">
              <Button href="/buy">Buy Orbit</Button>
              <Button href="/demo" variant="secondary">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ns-text">
                  {group}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ns-text-muted transition-colors hover:text-ns-text"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-ns-border pt-8 text-sm text-ns-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Neurostellar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:support@neuro-stellar.com" className="hover:text-ns-text">
              support@neuro-stellar.com
            </a>
            <a href="tel:+917845216763" className="hover:text-ns-text">
              +91 78452 16763
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
