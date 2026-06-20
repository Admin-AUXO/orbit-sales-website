import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { sectionPadding } from "@/components/ui/SectionTypography";
import { team } from "@/lib/team";
import { asset } from "@/lib/brand";

export function TeamGrid() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className={`bg-white ${sectionPadding}`}
    >
      <div className="mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
            <h2
              id="team-heading"
              className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl"
            >
              Meet the <GradientText>Team</GradientText>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-neutral-400 sm:text-xl">
              We&apos;re{" "}
              <span className="font-medium text-neutral-900">
                scientists, innovators, and engineers
              </span>{" "}
              — with a common goal:{" "}
              <span className="font-medium text-neutral-900">
                to change the world within.
              </span>
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/careers"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-neutral-700"
            >
              Join the Team
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-3 lg:gap-8">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={0.05 + (i % 3) * 0.06}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={asset(member.photo)}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  {member.role}
                </p>
                <h3 className="mt-1.5 text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
                  {member.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
