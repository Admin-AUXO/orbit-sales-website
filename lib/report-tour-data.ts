export type ReportHotspot = {
  id: string;
  label: string;
  tooltipTitle: string;
  tooltipBody: string;
};

export type DayEvent = {
  activity: string;
  time: string;
  timeMinutes: number;
  speed: number;
  agility: number;
  endurance: number;
};

export type BehavioralMetric = {
  label: string;
  value: string;
  description: string;
  barColor: "#05c796" | "#0ea5e9" | "#6e7686";
  barFill: number;
};

export type WeeklyTrendPoint = {
  day: string;
  speed: number;
  agility: number;
  endurance: number;
};

export type Recommendation = {
  score: "Cognitive Speed" | "Cognitive Agility" | "Cognitive Endurance";
  title: string;
  rationale: string;
  metric: string;
  protocol: string;
};

export type CoachMessage = {
  role: "coach" | "user";
  text: string;
};

export type TourChapter = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type GaugeScore = {
  label: string;
  score: number;
  description: string;
};

export const sessionMeta = {
  title: "Meeting Preparation",
  summary:
    "Hello, this report summarizes your cognitive performance during your session on June 15, 2026, from 04:08 PM to 04:23 PM (15m 4s)",
  generatedAt: "Report generated on June 15, 2026 10:55 AM",
} as const;

export const sessionScores: GaugeScore[] = [
  {
    label: "Cognitive Speed",
    score: 67.3,
    description: "How quickly your brain engages and begins processing",
  },
  {
    label: "Cognitive Agility",
    score: 38.7,
    description: "How smoothly your thinking adapts and flows during tasks",
  },
  {
    label: "Cognitive Endurance",
    score: 18.4,
    description:
      "How consistently you sustain cognitive performance over time",
  },
];

export const behavioralMetrics: BehavioralMetric[] = [
  {
    label: "Avg Deep Work Duration",
    value: "28 s",
    description: "Average duration of deep work bouts (s).",
    barColor: "#05c796",
    barFill: 80,
  },
  {
    label: "Deep Work %",
    value: "40.9%",
    description:
      "Proportion of session time spent in deep work bouts.",
    barColor: "#0ea5e9",
    barFill: 40,
  },
  {
    label: "Max Deep Work Duration",
    value: "88 s",
    description:
      "Longest uninterrupted deep work bout (s).",
    barColor: "#05c796",
    barFill: 90,
  },
  {
    label: "Avg Recovery Duration",
    value: "12 s",
    description: "Average duration of recovery bouts (s).",
    barColor: "#05c796",
    barFill: 80,
  },
  {
    label: "Recovery %",
    value: "12.0%",
    description:
      "Proportion of session time spent in recovery bouts.",
    barColor: "#0ea5e9",
    barFill: 40,
  },
  {
    label: "Deep Work Ramp-Up",
    value: "36 s",
    description:
      "Seconds to accumulate 10s of deep-work. Lower is better.",
    barColor: "#0ea5e9",
    barFill: 70,
  },
  {
    label: "Intensity Median",
    value: "34.9",
    description: "Median Intensity score.",
    barColor: "#05c796",
    barFill: 50,
  },
  {
    label: "Intensity Surges %",
    value: "22.6%",
    description:
      "Proportion of time with high intensity surges.",
    barColor: "#05c796",
    barFill: 80,
  },
  {
    label: "Intrusion Rate",
    value: "1.2 /min",
    description:
      "Rate of entries into Fragmented state per minute. Lower is better.",
    barColor: "#0ea5e9",
    barFill: 50,
  },
  {
    label: "Efficiency Median",
    value: "18.9",
    description: "Median Efficiency score.",
    barColor: "#6e7686",
    barFill: 60,
  },
  {
    label: "Efficiency Surges %",
    value: "10.2%",
    description:
      "Proportion of time with high efficiency surges.",
    barColor: "#0ea5e9",
    barFill: 40,
  },
  {
    label: "State Dynamics",
    value: "6.00 /min",
    description:
      "Cognitive-state switches per minute; higher means more dynamics.",
    barColor: "#05c796",
    barFill: 80,
  },
];

export const sessionAnalysis = {
  title: "Session Analysis",
  body: "You built productive moments, though the session had bumps. Your deep-work proportion was 41%. Small tweaks could turn these moments into longer stretches. Top strength: Intensity Median. Area for improvement: Cognitive Agility. Quick next step: repeat what worked and aim to extend the scores by 10% in the next trial.",
} as const;

export const sessionRecommendations = {
  title: "Recommendations",
  items: [
    {
      label: "Insight from this session:",
      body: "High Cognitive Speed indicates strong learning capacity. You are absorbing information well.",
    },
    {
      label: "Mindset to cultivate:",
      body: "Curiosity beats judgment. Ask 'what one thing improved today?' rather than 'why didn't I do better?'.",
    },
  ],
} as const;

export const reportHotspots: Record<string, ReportHotspot> = {
  scores: {
    id: "scores",
    label: "Cognitive Performance Scores",
    tooltipTitle: "Cognitive Performance Scores",
    tooltipBody:
      "Speed (67.3), Agility (38.7), and Endurance (18.4) — compared to global benchmarks. Personal baselines are coming in a future release.",
  },
  timeline: {
    id: "timeline",
    label: "Cognitive State Timeline",
    tooltipTitle: "Cognitive State Timeline",
    tooltipBody:
      "Intensity and Efficiency lines over 15 minutes, with cognitive state bands: Engaged, Flow, Fragmented, Idle, Transition, and Poor Signal.",
  },
  metrics: {
    id: "metrics",
    label: "Behavioral metrics",
    tooltipTitle: "Twelve behavioral metrics",
    tooltipBody:
      "Deep work duration, intrusion rate, recovery percentage, and nine more signals — each with your value, visual bar, and personal average range.",
  },
  analysis: {
    id: "analysis",
    label: "Session Analysis",
    tooltipTitle: "Session Analysis",
    tooltipBody:
      "A plain-language summary of your session: strengths, areas for improvement, and a concrete next step — generated instantly after every session.",
  },
  recommendations: {
    id: "recommendations",
    label: "Session Recommendations",
    tooltipTitle: "Recommendations",
    tooltipBody:
      "Science-backed insight and mindset guidance from this session. Your coach builds on these in your weekly review.",
  },
};

export const dailyEvents: DayEvent[] = [
  {
    activity: "Morning Breath Exercise",
    time: "7:00 AM",
    timeMinutes: 7 * 60,
    speed: 79.2,
    agility: 71.5,
    endurance: 83.1,
  },
  {
    activity: "Meeting Prep",
    time: "9:30 AM",
    timeMinutes: 9 * 60 + 30,
    speed: 62.8,
    agility: 44.3,
    endurance: 38.7,
  },
  {
    activity: "Board Meeting",
    time: "2:00 PM",
    timeMinutes: 14 * 60,
    speed: 31.6,
    agility: 27.4,
    endurance: 19.8,
  },
  {
    activity: "Journalling before Sleep",
    time: "9:30 PM",
    timeMinutes: 21 * 60 + 30,
    speed: 51.2,
    agility: 56.9,
    endurance: 64.5,
  },
];

export const weeklyTrend: WeeklyTrendPoint[] = [
  { day: "Mon", speed: 52.1, agility: 35.2, endurance: 38.4 },
  { day: "Tue", speed: 55.8, agility: 37.1, endurance: 36.2 },
  { day: "Wed", speed: 67.3, agility: 38.7, endurance: 18.4 },
  { day: "Thu", speed: 61.2, agility: 41.3, endurance: 31.8 },
  { day: "Fri", speed: 64.0, agility: 43.0, endurance: 28.5 },
  { day: "Sat", speed: 62.5, agility: 42.1, endurance: 30.2 },
  { day: "Sun", speed: 60.8, agility: 40.8, endurance: 32.6 },
];

export const recommendations: Recommendation[] = [
  {
    score: "Cognitive Speed",
    title: "Protect your morning deep-work block",
    rationale:
      "Prefrontal cortex engagement peaks in the first 90 minutes after waking. Your Speed scores confirm this is your highest-throughput window.",
    metric: "↑ 12 pts this week",
    protocol: "90-minute protected block before 10am — no meetings, no email.",
  },
  {
    score: "Cognitive Agility",
    title: "Front-load high-stakes decisions",
    rationale:
      "Agility recovers faster than Endurance. Scheduling analytical work before 2pm aligns with your synthesis capacity curve.",
    metric: "Improving mid-week",
    protocol: "Move board-level decisions and strategy reviews to pre-lunch slots.",
  },
  {
    score: "Cognitive Endurance",
    title: "Insert recovery between meeting clusters",
    rationale:
      "Endurance drops correlate with back-to-back cognitive switching. Brief parasympathetic recovery restores sustained attention capacity.",
    metric: "↓ Thu–Fri afternoons",
    protocol: "10-minute walk or breathwork between consecutive meetings.",
  },
];

export const coachIntro = {
  title: "Your coach. Your data. Your plan.",
  points: [
    "You get a dedicated Neurostellar Performance Coach — not a chatbot, not a generic wellness app.",
    "They review your day-to-day activities, session history, and which protocols you've actually followed before suggesting anything new.",
    "Recommendations are personalized to your schedule — meeting prep, deep work, recovery — not one-size-fits-all advice.",
  ],
} as const;

export const coachScript: CoachMessage[] = [
  {
    role: "coach",
    text: "I've reviewed your meeting prep sessions and the morning deep-work protocol you followed Mon–Wed. Your Speed scores responded well.",
  },
  {
    role: "user",
    text: "Afternoon back-to-back calls on Thu/Fri still wiped me out though.",
  },
  {
    role: "coach",
    text: "Right — I can see Endurance dropped on those days in your activity breakdown. Let's adjust before adding anything new.",
  },
  {
    role: "coach",
    text: "Try moving high-stakes calls before 2pm and keep the 10-min recovery between clusters. We'll review next week.",
  },
  {
    role: "user",
    text: "That fits my calendar better. I'll stick with the morning block too.",
  },
  {
    role: "coach",
    text: "Perfect. I'll only suggest new protocols once we've seen how these land in your day-to-day routine.",
  },
];

export const tourChapters: TourChapter[] = [
  {
    id: "intro",
    eyebrow: "Instant insight",
    title: "After each tracking session with Orbit you get an instant report",
    description:
      "No waiting. No generic wellness summary. Your cognitive scores and behavioral metrics are ready before your next meeting.",
  },
  {
    id: "session",
    eyebrow: "Session report",
    title: "Three scores. Twelve behavioral metrics. Where your focus held and broke.",
    description:
      "This is the exact report you receive after every session — click each highlighted point to explore what it means.",
  },
  {
    id: "analysis",
    eyebrow: "Session insights",
    title: "Instant analysis and recommendations from your session data.",
    description:
      "Every report includes a plain-language summary and science-backed guidance — not just numbers.",
  },
  {
    id: "collate",
    eyebrow: "Building history",
    title: "Each activity you track builds a picture of your day.",
    description:
      "From morning breathwork to evening journaling — see how Speed, Agility, and Endurance shift across your day.",
  },
  {
    id: "trend",
    eyebrow: "Weekly trend",
    title: "Your weekly trend shows how Speed, Agility, and Endurance are changing.",
    description:
      "Speed and Agility climbed through the week. Endurance dipped Thursday and Friday — your earliest signal that afternoon capacity needs protection.",
  },
  {
    id: "recommendations",
    eyebrow: "Science-backed plan",
    title: "Recommendations are grounded in neuroscience — not generic wellness tips.",
    description:
      "Every protocol is tied to a signal in your data and reviewed by the Neurostellar neuroscience team before it reaches you.",
  },
  {
    id: "coach-intro",
    eyebrow: "Your performance coach",
    title: "A dedicated coach who knows your routine before recommending anything new.",
    description:
      "Your Neurostellar Performance Coach reviews what you actually did — not just your scores — and only suggests new protocols after understanding what you've tried.",
  },
  {
    id: "coach-chat",
    eyebrow: "Weekly review",
    title: "Walk through your trends together — like a conversation, not a lecture.",
    description:
      "Your coach explains the science behind your data and builds a protocol you can start the same day.",
  },
];
