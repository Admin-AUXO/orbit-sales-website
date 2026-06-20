export type CohortMetric = {
  name: "Speed" | "Agility" | "Endurance";
  improved: number;
  total: number;
};

export type CohortProof = {
  persona: "athlete" | "executive";
  cohort: string;
  context: string;
  metrics: CohortMetric[];
};

export const proofHeadline = {
  value: "60–80%",
  label:
    "of active users showed positive directional movement across Speed, Agility, and Endurance",
};

export const cohortProofs: CohortProof[] = [
  {
    persona: "athlete",
    cohort: "Chess academy cohort",
    context: "5 active users · 3–30 sessions · embedded in training for 3 months",
    metrics: [
      { name: "Speed", improved: 4, total: 5 },
      { name: "Agility", improved: 3, total: 5 },
      { name: "Endurance", improved: 4, total: 5 },
    ],
  },
  {
    persona: "executive",
    cohort: "Executive cohort",
    context: "5 active users · 2–13 deep-work sessions · 11 deployed",
    metrics: [
      { name: "Speed", improved: 4, total: 5 },
      { name: "Agility", improved: 4, total: 5 },
      { name: "Endurance", improved: 3, total: 5 },
    ],
  },
];

export const proofFootnote =
  "Directional pre/post trends from active users in live programs · early cohorts with promising signals · scaling enrolment to validate at statistical significance.";
