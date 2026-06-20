import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Our Team",
  "Meet the performance coaches, neuroscientists, and engineers behind Neurostellar Orbit. Our team combines deep expertise in cognitive science, sports psychology, and wearable technology.",
  "/team",
);

const coaches = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Performance Coach",
    bio: "Former Olympic sports psychologist with 12 years of experience working with elite athletes and C-suite executives. Sarah leads the performance coaching program at Neurostellar.",
  },
  {
    name: "Marcus Reid",
    role: "Senior Performance Coach",
    bio: "Certified performance coach specialising in cognitive endurance and high-stakes decision-making. Previously worked with professional football and cycling teams.",
  },
  {
    name: "Priya Nair",
    role: "Performance Coach",
    bio: "Background in neurofeedback therapy and mindfulness-based stress reduction. Priya specialises in recovery protocols and deep work optimisation for knowledge workers.",
  },
];

const scientists = [
  {
    name: "Prof. James Okafor",
    role: "Chief Neuroscientist",
    credentials: "PhD Cognitive Neuroscience, Stanford",
    bio: "James leads Neurostellar's neuroscience research, overseeing the evidence base behind every intervention the coaching team deploys. His work focuses on cognitive load, attention, and performance under stress.",
  },
  {
    name: "Dr. Lena Vogel",
    role: "Research Neuroscientist",
    credentials: "PhD Clinical Neuropsychology, Heidelberg",
    bio: "Lena's research examines the relationship between sleep quality, neural recovery, and next-day cognitive performance. She curates recovery intervention programs for Orbit members.",
  },
  {
    name: "Dr. Arjun Mehta",
    role: "Neuroscience Advisor",
    credentials: "PhD Computational Neuroscience, MIT",
    bio: "Arjun bridges cognitive neuroscience and data science — translating EEG signal patterns into the cognitive metrics that power Orbit's reporting layer.",
  },
];

export default function TeamPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Our Team", path: "/team" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="The team"
        title="The minds behind Orbit"
        description="Your performance coach is your primary guide through the Neurostellar program. Behind every recommendation, our neuroscience team ensures each intervention is grounded in research and tailored to your data."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ns-accent">
              Performance Coaches
            </p>
            <h2 className="font-display text-2xl text-ns-text">
              Your guide through the program
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ns-text-muted">
              Your coach is your point of contact — they review your session data, understand
              your goals, and build a personalized plan you can follow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coaches.map((c, i) => (
              <FadeIn key={c.name} className="h-full" delay={i * 0.1}>
                <Card className="h-full">
                  <div className="mb-4 h-14 w-14 rounded-full bg-ns-bg-elevated border border-ns-border" />
                  <h3 className="font-display text-base text-ns-text">{c.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ns-accent">
                    {c.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ns-text-muted">{c.bio}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ns-bg-elevated py-16 md:py-24">
        <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ns-silver">
              Neuroscience Team
            </p>
            <h2 className="font-display text-2xl text-ns-text">
              The science behind every intervention
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ns-text-muted">
              Our neuroscientists analyse your cognitive patterns and curate the interventions
              your coach delivers — ensuring every recommendation is evidence-based.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {scientists.map((s, i) => (
              <FadeIn key={s.name} className="h-full" delay={i * 0.1}>
                <Card className="h-full">
                  <div className="mb-4 h-14 w-14 rounded-full bg-ns-bg border border-ns-border" />
                  <h3 className="font-display text-base text-ns-text">{s.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ns-silver">
                    {s.role}
                  </p>
                  <p className="mt-0.5 text-xs text-ns-text-muted/60">{s.credentials}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ns-text-muted">{s.bio}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
