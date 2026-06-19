export type CognitiveMetric = {
  id: "speed" | "agility" | "endurance";
  tabLabel: string;
  eyebrow: string;
  title: string;
  context: string;
  measure: string;
  questions: string[];
};

export const cognitiveMetrics: CognitiveMetric[] = [
  {
    id: "speed",
    tabLabel: "Speed",
    eyebrow: "Cognitive Speed",
    title: "Think more clearly when it matters most",
    context:
      "Whether you're learning, solving problems, or making important decisions, the speed at which your brain processes information influences how effectively you perform.",
    measure:
      "Cognitive Speed measures how efficiently your brain processes information.",
    questions: [
      "When is my brain processing information most efficiently?",
      "Which routines or habits are improving my mental sharpness?",
      "How does my cognitive speed change from day to day?",
    ],
  },
  {
    id: "agility",
    tabLabel: "Agility",
    eyebrow: "Cognitive Agility",
    title: "Adapt effectively when demands change",
    context:
      "Whether you're switching between tasks, navigating uncertainty, or responding to new challenges, your ability to adapt influences how effectively you perform.",
    measure:
      "Cognitive Agility measures how effectively your brain adapts to changing demands.",
    questions: [
      "When am I most adaptable to new information and changing demands?",
      "How does stress affect my ability to think flexibly?",
      "Which factors seem to improve or reduce my mental adaptability?",
    ],
  },
  {
    id: "endurance",
    tabLabel: "Endurance",
    eyebrow: "Cognitive Endurance",
    title: "Sustain your best work for longer",
    context:
      "Whether you're working through a demanding project, training for a goal, or navigating a long day of decisions, your ability to maintain performance shapes the quality of your output.",
    measure:
      "Cognitive Endurance measures how long your brain can sustain performance before fatigue begins to affect output.",
    questions: [
      "How long can I sustain high cognitive performance before fatigue appears?",
      "At what point does my mental performance begin to decline?",
      "Is my capacity for sustained focus improving over time?",
    ],
  },
];
