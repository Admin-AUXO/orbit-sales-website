export type RoleSection = {
  heading: string;
  items?: string[];
  body?: string[];
};

export type OpenRole = {
  id: string;
  slug: string;
  title: string;
  type: string;
  location: string;
  team: string;
  tags: string[];
  summary: string;
  intro: string[];
  sections: RoleSection[];
};

export const openRoles: OpenRole[] = [
  {
    id: "nso25003",
    slug: "mechanical-design-engineer",
    title: "Mechanical Design Engineer",
    type: "Full-time · Onsite",
    location: "IIT Madras, Chennai",
    team: "Hardware",
    tags: ["Mechanical", "CAD", "DFMA", "Wearables"],
    summary:
      "Own mechanical design for the Orbit wearable end to end — from early sketches to production-ready assemblies — across DFMA, parametric CAD, FEA, and rapid prototyping. 4–8 years on shipped consumer-electronics or wearable products.",
    intro: [
      "We're looking for a hands-on Design Engineer to support the end-to-end mechanical design of our wearable hardware. You'll collaborate closely with industrial designers, electronics engineers, and external manufacturing partners to bring compact, ergonomic, and production-ready hardware to life.",
      "This is an on-site role at our Chennai facility, with occasional travel (up to 25%) to visit toolmakers, vendors, and manufacturing and assembly locations.",
    ],
    sections: [
      {
        heading: "Key responsibilities",
        items: [
          "Mechanical product design: drive end-to-end mechanical design for consumer wearable products — from early sketches to production-ready assemblies.",
          "Hardware integration: work with electronics and embedded engineers to integrate PCBs, batteries, connectors, sensors, and antennas into enclosures, balancing functional and ergonomic constraints.",
          "Vendor collaboration: support tooling, trials, pilot builds, audits, and production ramp with external manufacturers; debug part issues and iterate design during build phases.",
          "CAD modelling & documentation: create parametric 3D CAD models, detailed drawings (with GD&T), and BOMs; maintain version-controlled design documentation.",
          "Simulation & analysis: use FEA to validate structural and thermal performance; perform tolerance stack-ups to support early-stage validation.",
          "Rapid prototyping: build and test functional prototypes using 3D printing, CNC, and soft tooling; create basic jigs and fixtures as needed.",
          "Reverse engineering & benchmarking: tear down wearables to uncover design, material, and manufacturing strategies; derive DFM insights to enhance product development.",
          "Quality & compliance: ensure mechanical systems meet safety, comfort, and reliability standards — familiarity with ISO 9001, CE, FCC, RoHS, and tests like durability, IP ratings, thermal cycling, and drop performance. EMI/EMC awareness is a plus.",
        ],
      },
      {
        heading: "Qualifications",
        items: [
          "Education: B.E./B.Tech in Mechanical Engineering or a related field. Master's preferred but not mandatory.",
          "Experience: 4–8 years in mechanical design for consumer electronics or wearables. You must have worked on real-world shipped products — academic, research, or prototyping-only experience won't be considered.",
          "CAD tools: proficient in a parametric CAD tool (SolidWorks, Creo, NX, Fusion 360, or equivalent) for 3D assemblies and manufacturing drawings.",
          "Simulation: basic FEA skills using CAD-integrated tools for early-stage structural and thermal checks.",
          "Design for manufacturing: strong knowledge of GD&T, tolerance stack-up, and DFM principles.",
          "Materials & processes: solid understanding of plastics, metals, silicones, elastomers, and soft goods, and their manufacturing methods.",
          "Prototyping: hands-on experience with rapid prototyping, lab tools, and 3D printers.",
          "Cross-functional collaboration: proven experience working with industrial designers, human-factors researchers, and electronics/firmware engineers.",
        ],
      },
      {
        heading: "Who you are",
        items: [
          "Comfortable in fast-paced, iterative environments.",
          "Detail-oriented, but able to prioritise what matters at each phase.",
          "A strong communicator across design, engineering, and manufacturing.",
          "Hands-on, curious, and motivated to build impactful hardware.",
          "Thrives in an early-stage startup where clarity evolves with progress.",
        ],
      },
      {
        heading: "Why join us",
        body: [
          "At Neurostellar, you'll work on products that sit at the intersection of neuroscience, design, and engineering. You'll help define not just how our devices look and function — but how they feel and the impact they have in people's lives.",
          "Neurostellar is an equal-opportunity employer. We value diverse perspectives and welcome applicants from all backgrounds.",
        ],
      },
    ],
  },
  {
    id: "nso25006",
    slug: "creative-media-intern",
    title: "Creative Media Intern",
    type: "Internship · Onsite",
    location: "Chennai",
    team: "Marketing",
    tags: ["Content", "Design", "Social"],
    summary:
      "Help tell the Neurostellar story. Create content and creative media across our channels — from short-form video to launch campaigns.",
    intro: [
      "We're looking for a Creative Media Intern to help tell the Neurostellar story. You'll create content and creative media across our channels — from short-form video to launch campaigns — and help shape how a new category of mental-fitness hardware shows up in the world.",
      "This is an on-site internship in Chennai, working closely with our marketing and product teams.",
    ],
    sections: [
      {
        heading: "What you'll do",
        items: [
          "Produce short-form video and motion graphics for our social channels.",
          "Design on-brand graphics for launches, events, and campaigns.",
          "Capture behind-the-scenes content across the team, the lab, and the field.",
          "Help maintain a consistent visual voice across everything we publish.",
          "Pitch creative ideas — and ship them fast.",
        ],
      },
      {
        heading: "What we look for",
        items: [
          "A strong eye for design, storytelling, and detail.",
          "Hands-on with tools like Figma, Premiere/After Effects, or CapCut (or equivalents).",
          "A self-starter who can take a brief and run with it.",
          "A portfolio or reel that shows your range.",
          "Bonus: photography, copywriting, or community experience.",
        ],
      },
    ],
  },
  {
    id: "nso25007",
    slug: "machine-learning-signal-processing-engineer",
    title: "Machine Learning & Signal Processing Engineer",
    type: "Full-time · Onsite",
    location: "IIT Madras, Chennai",
    team: "Science",
    tags: ["ML", "Signal Processing", "EEG", "Python"],
    summary:
      "Build the models behind Orbit's scores. Work on biosignal processing (EEG, PPG/HRV) and ML/DL for real-world cognitive measurement — filtering, feature extraction, classification and regression, in Python.",
    intro: [
      "We're looking for a curious and enthusiastic Machine Learning & Signal Processing Engineer who's excited to work at the intersection of health, technology, and innovation.",
      "You'll join a team that thrives on exploration — turning real-world signals into meaningful insights that drive the next generation of health-tech solutions.",
    ],
    sections: [
      {
        heading: "Requirements",
        items: [
          "Hands-on experience in biosignal processing, preferably EEG and ECG (PPG/HRV is a plus).",
          "Strong understanding of signal processing: filtering, ICA/PCA, wavelets, and feature extraction across time, frequency, and time-frequency domains.",
          "Good conceptual knowledge of linear algebra, probability, multivariate statistics, and optimization.",
          "Practical experience applying machine learning and deep learning to biosignals — both classification and regression.",
          "Proficiency in Python and ML/AI libraries such as scikit-learn, TensorFlow/PyTorch, Pandas, NumPy, and MNE.",
          "Familiarity with cloud platforms (Google Colab, AWS, Azure) for training, testing, and deploying models.",
          "Experience with real-time biosignal pipelines for wearables or neurotech is a plus.",
        ],
      },
      {
        heading: "You should also",
        items: [
          "Work collaboratively with the business team as they provide and refine requirements.",
          "Be self-motivated, able to work independently, and communicate to a wide range of audiences.",
          "Bring strong analytical skills and sound decision-making.",
          "Be genuinely passionate and curious about deep technology.",
        ],
      },
    ],
  },
];

export function getRole(slug: string): OpenRole | undefined {
  return openRoles.find((role) => role.slug === slug);
}
