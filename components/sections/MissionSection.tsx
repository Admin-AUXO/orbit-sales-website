import { FadeIn } from "@/components/ui/FadeIn";
import { BrainVisual } from "@/components/sections/BrainVisual";
import { Eyebrow, sectionPadding } from "@/components/ui/SectionTypography";

function Em({ children }: { children: string }) {
  return <span className="font-medium text-ns-text">{children}</span>;
}

export function MissionSection() {
  return (
    <section
      id="mission"
      aria-label="Our mission"
      className={`relative overflow-hidden bg-ns-bg ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <Eyebrow>Our mission</Eyebrow>
            <div className="mt-6 space-y-6 text-2xl font-light leading-snug tracking-[-0.01em] text-ns-text-muted sm:text-3xl">
              <p>
                We&rsquo;re pushing the boundaries of human evolution. Not with
                wearables, but with <Em>insight</Em>.
              </p>
              <p>
                We&rsquo;re here to give you the tools to know your true self —
                deeply and authentically. Forget the fluff. This is about{" "}
                <Em>clarity</Em>. About <Em>balance</Em>. About living in full
                alignment with <Em>who you are</Em> — powered by science, backed
                by purpose.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-first lg:order-last">
            <BrainVisual />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
