export type Insight = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  dek: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "navigating-digital-transformation-in-technology-leadership",
    title: "Navigating Digital Transformation in Technology Leadership",
    category: "Technology leadership",
    readTime: "4 min read",
    dek: "Transformation becomes durable when leaders connect technology choices to operating behavior, decision rights, and measurable outcomes.",
    sections: [
      {
        heading: "Transformation is an operating-model change",
        paragraphs: [
          "Digital transformation is not the accumulation of new platforms. It is the deliberate redesign of how an organization makes decisions, serves customers, manages risk, and learns from delivery evidence.",
          "Technology leaders create the conditions for that change: a clear outcome, a sequenced roadmap, visible decision ownership, and a feedback loop that makes progress measurable.",
        ],
      },
      {
        heading: "Five leadership moves",
        paragraphs: ["The strongest programs balance innovation with disciplined execution."],
        bullets: [
          "Set a transformation narrative that connects business outcomes to technical work.",
          "Prioritize a small number of platform capabilities instead of funding disconnected tools.",
          "Make customer and delivery evidence part of routine governance.",
          "Design change management into the roadmap rather than adding it at the end.",
          "Review measurable outcomes frequently and adjust the sequence without losing the objective.",
        ],
      },
      {
        heading: "What leadership should measure",
        paragraphs: [
          "Milestones alone cannot show whether transformation is working. Leaders need a balanced view of customer experience, operating efficiency, delivery predictability, adoption, security, and organizational learning.",
          "The practical goal is not change for its own sake. It is an organization that can respond to new information without sacrificing control or trust.",
        ],
      },
    ],
  },
  {
    slug: "secure-digital-payments-trends-and-best-practices",
    title: "Secure Digital Payments: Trends and Best Practices",
    category: "Secure platforms",
    readTime: "4 min read",
    dek: "Payment modernization succeeds when convenience, resilience, privacy, and fraud controls are treated as one product decision.",
    sections: [
      {
        heading: "Trust is part of the payment experience",
        paragraphs: [
          "Contactless experiences, mobile wallets, biometrics, and real-time risk decisions continue to reshape digital commerce. Their value depends on a control environment that protects data without creating unnecessary friction.",
          "Security is therefore not a separate technical workstream. It is a product capability that must be designed into the customer journey, operating model, and release process.",
        ],
      },
      {
        heading: "A layered control model",
        paragraphs: ["No single control is sufficient for a high-volume payment platform."],
        bullets: [
          "Minimize sensitive data exposure through tokenization and strong data boundaries.",
          "Use risk-based authentication and step-up controls for anomalous behavior.",
          "Apply real-time monitoring to transaction, device, and identity signals.",
          "Rehearse recovery and incident decision paths before production changes.",
          "Keep regulatory and control evidence connected to delivery governance.",
        ],
      },
      {
        heading: "The leadership question",
        paragraphs: [
          "The most useful question is not whether every control exists. It is whether the organization can explain which risks matter, how controls reduce them, and what evidence supports a production decision.",
          "That shared view allows product, engineering, security, and operations leaders to move quickly without obscuring accountability.",
        ],
      },
    ],
  },
  {
    slug: "the-future-of-ai-driven-platforms-in-business",
    title: "The Future of AI-Driven Platforms in Business",
    category: "Enterprise AI",
    readTime: "4 min read",
    dek: "Enterprise AI creates value when automation is paired with evidence, clear guardrails, and accountable human decisions.",
    sections: [
      {
        heading: "From isolated models to operating platforms",
        paragraphs: [
          "AI-driven platforms are moving from standalone experiments into everyday workflows: analyzing signals, automating routine decisions, personalizing experiences, and helping teams identify risk earlier.",
          "The strategic opportunity is not simply better prediction. It is a more responsive operating system in which people can act on trustworthy evidence faster.",
        ],
      },
      {
        heading: "Conditions for enterprise value",
        paragraphs: ["A scalable AI program needs more than model performance."],
        bullets: [
          "A specific decision or workflow with a measurable outcome.",
          "Reliable data lineage, quality controls, and appropriate access boundaries.",
          "Transparent explanations for high-impact recommendations.",
          "Human review and escalation paths for uncertainty or exceptions.",
          "Ongoing evaluation for quality, fairness, resilience, and adoption.",
        ],
      },
      {
        heading: "Governance as an accelerator",
        paragraphs: [
          "Effective governance makes responsible experimentation easier. Teams know which evidence is required, who can approve risk, and how a pilot becomes an operational capability.",
          "The future belongs to organizations that combine AI fluency with delivery discipline: small learning loops, explicit guardrails, and the willingness to improve the system as evidence changes.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
