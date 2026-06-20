import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTypography";
import { CTABand } from "@/components/sections/CTABand";
import { contactCta } from "@/lib/cta-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact Us",
  "Reach the right Neurostellar team — whether you want to get started with Orbit, explore a partnership, invest, collaborate on research, or ask a general question.",
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
  },
  {
    id: "b2b",
    eyebrow: "Partnerships & integrations",
    title: "Coaches, organizations & tech teams",
    audience:
      "B2B2C partners improving teams and workforces — plus companies exploring integrations with Orbit.",
    prompts: [
      "You coach athletes or run a performance program",
      "You want Orbit for your organization or workforce",
      "You are exploring a business or distribution partnership",
      "You want to integrate Orbit with your platform or product",
    ],
    team: "Partnerships",
    email: "business@neuro-stellar.com",
    phone: SUPPORT_PHONE,
    phoneHref: SUPPORT_PHONE_HREF,
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
  },
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
    <Card className="hover-lift flex h-full flex-col" premium={channel.id === "d2c" || channel.id === "b2b"}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
        {channel.eyebrow}
      </span>
      <h3 className="mt-3 font-display text-xl text-ns-text">{channel.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ns-text-muted">{channel.audience}</p>

      <div className="mt-6 border-t border-ns-border pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ns-text-muted">
          Contact {channel.team}
        </p>
        <div className="mt-3 space-y-2">
          {channel.email.split(",").map((email) => {
            const address = email.trim();
            return (
              <a
                key={address}
                href={`mailto:${address}`}
                className="flex items-center gap-2 text-sm text-ns-text transition-colors hover:text-ns-accent"
              >
                <MailIcon />
                {address}
              </a>
            );
          })}
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
        description="No forms to fill out — just reach the people who can help. Whether you want to get started with Orbit, explore a partnership, invest, or collaborate on research, start with the channel that matches your goal."
      />

      <Section>
          <div className="mb-10 max-w-2xl">
            <SectionTitle>Who to contact</SectionTitle>
            <p className="mt-3 leading-relaxed text-ns-text-muted">
              Pick the channel that matches your goal — email reaches the right team
              fastest. The phone number is one shared support line you can call for any
              of them.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel, i) => (
              <FadeIn key={channel.id} className="h-full" delay={i * 0.06}>
                <ContactCard channel={channel} />
              </FadeIn>
            ))}
          </div>
      </Section>

      <CTABand {...contactCta} />
    </PageShell>
  );
}
