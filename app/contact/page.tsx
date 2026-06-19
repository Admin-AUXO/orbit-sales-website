import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact Us",
  "Reach the right Neurostellar team — whether you want to buy Orbit, explore a partnership, invest, collaborate on research, or ask a general question.",
  "/contact",
);

const SUPPORT_EMAIL = "support@neuro-stellar.com";
const SUPPORT_PHONE = "+91 78452 16763";
const SUPPORT_PHONE_HREF = "tel:+917845216763";

type ContactChannel = {
  id: string;
  eyebrow: string;
  title: string;
  audience: string;
  prompts: string[];
  team: string;
  email: string;
  phone?: string;
  phoneHref?: string;
  cta?: { label: string; href: string };
};

const channels: ContactChannel[] = [
  {
    id: "d2c",
    eyebrow: "Individual purchases",
    title: "Athletes & executives",
    audience:
      "Direct-to-consumer customers who want to try or purchase Orbit for personal performance.",
    prompts: [
      "You want to buy Orbit for yourself",
      "You have questions about trials, pricing, or shipping",
      "You need product or onboarding support",
    ],
    team: "Customer success",
    email: SUPPORT_EMAIL,
    phone: SUPPORT_PHONE,
    phoneHref: SUPPORT_PHONE_HREF,
    // cta: { label: "Buy Orbit", href: "/buy" },
  },
  {
    id: "b2b",
    eyebrow: "Partnerships & integrations",
    title: "Coaches, organisations & tech teams",
    audience:
      "B2B2C partners improving teams and workforces — plus companies exploring integrations with Orbit.",
    prompts: [
      "You coach athletes or run a performance program",
      "You want Orbit for your organisation or workforce",
      "You are exploring a business or distribution partnership",
      "You want to integrate Orbit with your platform or product",
    ],
    team: "Partnerships",
    email: "business@neuro-stellar.com",
    phone: SUPPORT_PHONE,
    phoneHref: SUPPORT_PHONE_HREF,
    // cta: { label: "Book a demo", href: "/demo" },
  },
  {
    id: "investors",
    eyebrow: "Investment",
    title: "Investors",
    audience:
      "Investors and funds looking to connect with Neurostellar founders about investment opportunities.",
    prompts: [
      "You want to learn about our funding roadmap",
      "You are exploring a strategic or financial investment",
      "You would like to speak directly with the founding team",
    ],
    team: "Founders",
    email: "karthik@neuro-stellar.com, dhanushya@neuro-stellar.com",
  },
  {
    id: "research",
    eyebrow: "Academic collaboration",
    title: "Researchers",
    audience:
      "Academic and clinical researchers interested in collaborating on neuroscience and performance studies.",
    prompts: [
      "You want to run or co-author a research study",
      "You are exploring a clinical or field trial partnership",
      "You have questions about our published research and methods",
    ],
    team: "Research & science",
    email: "research@neuro-stellar.com",
    // cta: { label: "View research", href: "/research" },
  },
  {
    id: "general",
    eyebrow: "General inquiries",
    title: "Everything else",
    audience:
      "Press, media, careers, and any other questions about Neurostellar that do not fit the categories above.",
    prompts: [
      "You have a general question about the business",
      "You are interested in working at Neurostellar",
      "You are from the media or press",
    ],
    team: "Neurostellar team",
    email: SUPPORT_EMAIL,
    phone: SUPPORT_PHONE,
    phoneHref: SUPPORT_PHONE_HREF,
    // cta: { label: "View careers", href: "/careers" },
  },
];

const routingGuide = [
  { question: "Want to buy Orbit for yourself?", channel: "Individual purchases" },
  { question: "Coach athletes or run a performance program?", channel: "Partnerships & integrations" },
  { question: "Bring Orbit to your organisation or workforce?", channel: "Partnerships & integrations" },
  { question: "Integrate Orbit with your product or platform?", channel: "Partnerships & integrations" },
  { question: "Explore an investment with our founders?", channel: "Investment" },
  { question: "Collaborate on academic or clinical research?", channel: "Academic collaboration" },
  { question: "Something else — careers, press, or general questions?", channel: "General inquiries" },
];

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M3 4.5 8 8.5l5-4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4.5 2.5h2l1 3-1.5 1a7.5 7.5 0 0 0 3.5 3.5L10.5 8l3 1v2a1.5 1.5 0 0 1-1.5 1.5C6.2 12.5 3.5 9.8 3.5 5A1.5 1.5 0 0 1 4.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactCard({ channel }: { channel: ContactChannel }) {
  return (
    <Card className="flex h-full flex-col" premium={channel.id === "d2c" || channel.id === "b2b"}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
        {channel.eyebrow}
      </span>
      <h3 className="mt-3 font-display text-xl text-ns-text">{channel.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ns-text-muted">{channel.audience}</p>

      <div className="mt-5 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ns-text">
          You might reach out if…
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ns-text-muted">
          {channel.prompts.map((prompt) => (
            <li key={prompt} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ns-accent" aria-hidden />
              <span>{prompt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-ns-border pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ns-text-muted">
          Contact {channel.team}
        </p>
        <div className="mt-3 space-y-2">
          <a
            href={`mailto:${channel.email}`}
            className="flex items-center gap-2 text-sm text-ns-text transition-colors hover:text-ns-accent"
          >
            <MailIcon />
            {channel.email}
          </a>
          {channel.phone && channel.phoneHref && (
            <a
              href={channel.phoneHref}
              className="flex items-center gap-2 text-sm text-ns-text transition-colors hover:text-ns-accent"
            >
              <PhoneIcon />
              {channel.phone}
            </a>
          )}
        </div>
        {/* Card CTAs — uncomment channel.cta above and this block to restore action buttons
        {channel.cta && (
          <div className="mt-5">
            <Button href={channel.cta.href} variant="secondary">
              {channel.cta.label}
            </Button>
          </div>
        )}
        */}
      </div>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Get in touch"
        title="Contact the right team"
        description="No forms to fill out — just reach the people who can help. Whether you want to purchase Orbit, explore a partnership, invest, or collaborate on research, start with the channel that matches your goal."
      />

      {/* Routing guide */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
              Not sure where to start?
            </p>
            <h2 className="mt-3 font-display text-2xl text-ns-text md:text-3xl">
              Find your contact channel
            </h2>
            <p className="mt-4 leading-relaxed text-ns-text-muted">
              Answer the question that best describes you — then use the matching card below for
              email and phone details.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <Card className="divide-y divide-ns-border p-0">
              {routingGuide.map((item, i) => (
                <FadeIn key={item.question} delay={i * 0.05}>
                  <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-8">
                    <p className="text-sm text-ns-text">{item.question}</p>
                    <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-ns-accent">
                      {item.channel}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </Card>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="bg-ns-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-2xl text-ns-text">Who to contact</h2>
            <p className="mt-3 leading-relaxed text-ns-text-muted">
              Each card covers a distinct audience. Email is the fastest way to reach us; phone
              support is available for purchase and general inquiries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {channels.slice(0, 4).map((channel, i) => (
              <FadeIn key={channel.id} delay={i * 0.08}>
                <ContactCard channel={channel} />
              </FadeIn>
            ))}
          </div>

          <div className="mt-6 max-w-xl">
            <FadeIn delay={0.32}>
              <ContactCard channel={channels[4]} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="rounded-2xl border border-ns-border bg-ns-bg-card px-8 py-10 text-center md:px-12">
            <h2 className="font-display text-xl text-ns-text">Still have questions?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ns-text-muted">
              Browse our FAQ for product, trial, and support answers — or email us directly at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-ns-text underline decoration-ns-border underline-offset-4 transition-colors hover:text-ns-accent"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/faq" variant="secondary">
                Read the FAQ
              </Button>
              <Button href={SUPPORT_PHONE_HREF} variant="ghost">
                Call {SUPPORT_PHONE}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
