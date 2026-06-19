"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandAssets } from "@/lib/brand";

const useCases = [
  {
    id: "office",
    label: "Office & leadership",
    title: "Clarity through the back-to-back",
    description:
      "Tag high-stakes sessions — board prep, strategy blocks, decision sprints. Know when your cognitive endurance is holding and when to protect recovery before the next meeting.",
    image: brandAssets.device.desk,
    imageAlt: "Neurostellar Orbit on a premium executive desk setup",
  },
  {
    id: "athletes",
    label: "Athletes & competitors",
    title: "The margin is mental",
    description:
      "Train focus under fatigue. Measure recovery between sessions. Orbit gives competitive athletes the same cognitive visibility they already expect from physical metrics.",
    image: brandAssets.device.chess,
    imageAlt: "Neurostellar Orbit during chess-focused athletic training",
  },
  {
    id: "wellness",
    label: "Wellness & recovery",
    title: "Recovery with intention",
    description:
      "Guided breathwork, meditation, and journaling sessions — tracked with the same rigour as deep work. See how Speed, Agility, and Endurance shift across your day.",
    image: brandAssets.device.zen,
    imageAlt: "Neurostellar Orbit in a calm wellness and recovery setting",
  },
] as const;

type UseCaseId = (typeof useCases)[number]["id"];

export function OrbitUseCases() {
  const [active, setActive] = useState<UseCaseId>("office");
  const current = useCases.find((item) => item.id === active) ?? useCases[0];

  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="relative overflow-hidden bg-ns-bg-elevated py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,var(--ns-aurora-2),transparent_55%)]" />
      <div className="relative mx-auto max-w-[var(--ns-max-width)] px-6 lg:px-8">
        <SectionHeading
          id="use-cases-heading"
          eyebrow="One device. Three ways to perform."
          title="Built for how you actually work"
          description="Orbit adapts to your context — whether you're leading, competing, or resetting."
        />

        <FadeIn>
          <div
            role="tablist"
            aria-label="Orbit use cases"
            className="mx-auto mb-10 flex max-w-2xl flex-wrap justify-center gap-2"
          >
            {useCases.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active === item.id}
                aria-controls={`use-case-panel-${item.id}`}
                id={`use-case-tab-${item.id}`}
                onClick={() => setActive(item.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  active === item.id
                    ? "border-ns-text/40 bg-ns-bg text-ns-text"
                    : "border-ns-border bg-transparent text-ns-text-muted hover:border-ns-text/25 hover:text-ns-text"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div
              role="tabpanel"
              id={`use-case-panel-${current.id}`}
              aria-labelledby={`use-case-tab-${current.id}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-2xl font-bold text-ns-text md:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-ns-text-muted">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ns-border bg-ns-bg-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ns-bg-card/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
