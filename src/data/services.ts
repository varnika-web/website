export type Service = {
  slug: string;
  title: string;
  description: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  image: string;
  href: string;
  content: string[];
  highlights: string[];
  tags: string[];
};

export const Services: Service[] = [
  {
    slug: "financial-planning",
    title: "Financial Planning",
    description:
      "Holistic planning that covers investments, retirement, tax, insurance, and your major life goals.",
    tagline:
      "A complete roadmap for your money — built around your goals, timeline, and risk comfort.",
    metaTitle: "Financial Planning Services | VR Wealth Creation",
    metaDescription:
      "Get a personalised financial plan covering investments, retirement, tax, and insurance. VR Wealth Creation helps you align every rupee with your life goals.",
    category: "Core Service",
    image: "/images/services/s1.jpg",
    href: "/financial-planning",
    content: [
      "Financial planning is the foundation of lasting wealth. Without a clear picture of where you are today and where you want to be tomorrow, even strong investment returns can fall short of what you actually need.",
      "At VR Wealth Creation, we start by understanding your complete financial life — income, expenses, assets, liabilities, family responsibilities, and the milestones that matter to you. Whether you are building your first corpus, preparing for a child's education, or planning an early retirement, every plan is tailored, not templated.",
      "Our process covers cash-flow management, emergency reserves, goal-based investing, debt optimisation, and periodic reviews. We do not chase products; we design a strategy that keeps you on track through market cycles and life changes.",
      "You receive a structured plan with clear action steps, allocation guidance, and milestones you can measure. As your circumstances evolve — a promotion, a new business, a property purchase — we adjust the plan so it stays relevant.",
      "Sound financial planning removes guesswork and replaces it with confidence. That is the outcome we work toward with every client.",
    ],
    highlights: [
      "Goal-based planning for education, home, and major purchases",
      "Cash-flow and emergency fund structuring",
      "Integrated view of investments, tax, and insurance",
      "Quarterly reviews and course corrections",
    ],
    tags: [
      "financial planning",
      "goal-based investing",
      "wealth roadmap",
      "personal finance",
    ],
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    description:
      "Research-backed equity and portfolio guidance for investors who want conviction, not noise.",
    tagline:
      "Disciplined research and clear recommendations — so you invest with purpose, not impulse.",
    metaTitle: "Investment Advisory Services | VR Wealth Creation",
    metaDescription:
      "Expert investment advisory for Indian equities and diversified portfolios. VR Wealth Creation delivers research-backed recommendations with a long-term, value-oriented approach.",
    category: "Investment",
    image: "/images/services/s2.jpg",
    href: "/investment-advisory",
    content: [
      "Markets offer opportunity, but they also reward preparation. Our investment advisory service is built for individuals who want professional guidance without surrendering understanding of their own portfolio.",
      "We analyse businesses, sectors, and macro trends through a disciplined, fundamentals-first lens. Recommendations are grounded in quality, valuation, and your risk profile — not short-term headlines or speculative tips.",
      "Whether you prefer direct equities, mutual funds, or a blended approach, we help you construct a portfolio aligned with your time horizon and tolerance for volatility. Diversification, position sizing, and regular rebalancing are core to how we manage risk.",
      "Clients receive clear rationale behind every recommendation, ongoing portfolio monitoring, and timely alerts when action is warranted. We believe informed investors stay committed through downturns — and that patience is a strategy, not a fallback.",
      "Our advisory extends beyond stock picks. We help you think in terms of asset allocation, tax efficiency, and long-term compounding — the levers that truly move wealth over decades.",
    ],
    highlights: [
      "Fundamental research on Indian equities",
      "Portfolio construction and rebalancing",
      "Risk-adjusted allocation guidance",
      "Transparent rationale for every recommendation",
    ],
    tags: [
      "investment advisory",
      "equity research",
      "portfolio management",
      "Indian stocks",
    ],
  },
  {
    slug: "wealth-management",
    title: "Wealth Management",
    description:
      "End-to-end stewardship of your portfolio and financial affairs for sustained growth.",
    tagline:
      "Dedicated oversight of your wealth — so your portfolio, planning, and priorities stay aligned.",
    metaTitle: "Wealth Management Services | VR Wealth Creation",
    metaDescription:
      "Comprehensive wealth management for high-net-worth individuals and families. VR Wealth Creation provides portfolio oversight, planning integration, and personalised stewardship.",
    category: "Premium Service",
    image: "/images/services/s3.jpg",
    href: "/wealth-management",
    content: [
      "Wealth management goes beyond picking investments. It is the ongoing stewardship of your financial life — coordinating portfolio decisions, planning priorities, and the complexities that come with growing assets.",
      "VR Wealth Creation serves clients who want a trusted partner to manage the details while keeping the big picture in focus. We integrate investment advisory, financial planning, tax awareness, and estate considerations into a single, coherent strategy.",
      "Your dedicated relationship means proactive communication, not reactive responses. We monitor allocations, flag opportunities and risks, and ensure your portfolio reflects both market conditions and personal milestones.",
      "For business owners, professionals, and families with multi-generational goals, we provide the structure and discipline that protect and grow wealth across cycles. Discretion, transparency, and alignment with your values guide every decision.",
      "The result is not just performance — it is peace of mind knowing your wealth is being managed with the same care you would apply yourself, backed by professional expertise and institutional-grade process.",
    ],
    highlights: [
      "Integrated portfolio and planning oversight",
      "Proactive monitoring and rebalancing",
      "Suited for HNI and business-owner clients",
      "Multi-asset, tax-aware strategy",
    ],
    tags: [
      "wealth management",
      "HNI services",
      "portfolio stewardship",
      "family wealth",
    ],
  },
  // {
  //   slug: "retirement-planning",
  //   title: "Retirement Planning",
  //   description:
  //     "Build a retirement corpus that lets you maintain the lifestyle you have worked for.",
  //   tagline:
  //     "Turn decades of earning into decades of financial independence — with a plan you can trust.",
  //   metaTitle: "Retirement Planning Services | VR Wealth Creation",
  //   metaDescription:
  //     "Plan a secure and comfortable retirement with VR Wealth Creation. We help you estimate corpus needs, optimise investments, and create sustainable withdrawal strategies.",
  //   category: "Life Planning",
  //   image: "/images/services/s4.jpg",
  //   href: "/retirement-planning",
  //   content: [
  //     "Retirement is not an age — it is a financial state. The question is whether your savings, investments, and income sources can support the life you want for 25 or 30 years without a paycheque.",
  //     "We help you quantify that goal. Starting with your expected lifestyle, healthcare needs, inflation assumptions, and other income sources, we calculate the corpus required and map a realistic path to get there.",
  //     "Our retirement plans balance growth during accumulation with stability as you approach your target date. We consider NPS, EPF, mutual funds, equities, fixed income, and annuities — selecting the mix that fits your timeline and risk appetite.",
  //     "For clients nearing retirement, we focus on withdrawal strategies, tax-efficient drawdowns, and preserving purchasing power. For younger clients, we emphasise compounding and disciplined SIPs that make the target achievable.",
  //     "Retirement planning with VR Wealth Creation means clarity on where you stand today, what it takes to reach financial independence, and a partner who adjusts the plan as life unfolds.",
  //   ],
  //   highlights: [
  //     "Corpus estimation with inflation adjustment",
  //     "Accumulation and decumulation strategies",
  //     "NPS, EPF, and mutual fund integration",
  //     "Tax-efficient withdrawal planning",
  //   ],
  //   tags: [
  //     "retirement planning",
  //     "financial independence",
  //     "pension planning",
  //     "corpus building",
  //   ],
  // },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    description:
      "Legitimate strategies to reduce your tax burden while keeping investments efficient.",
    tagline:
      "Keep more of what you earn — through smart, compliant tax planning woven into your financial strategy.",
    metaTitle: "Tax Planning Services | VR Wealth Creation",
    metaDescription:
      "Strategic tax planning for salaried professionals, business owners, and investors. VR Wealth Creation helps you optimise deductions, capital gains, and investment structures.",
    category: "Tax Efficiency",
    image: "/images/services/s5.jpg",
    href: "/tax-planning",
    content: [
      "Taxes are one of the largest drains on investment returns over a lifetime. Effective tax planning is not about avoidance — it is about using every legitimate provision to structure your finances efficiently.",
      "We review your income sources, investment holdings, and financial goals to identify opportunities under current Indian tax law. This includes optimising Section 80C and 80D deductions, planning equity and debt capital gains, and choosing tax-efficient investment vehicles.",
      "For investors with substantial portfolios, we coordinate harvesting strategies, holding-period decisions, and asset location so that taxes support — rather than undermine — your wealth-building plan.",
      "Business owners receive guidance on structuring remuneration, investments, and succession in a tax-aware manner. We work alongside your CA where needed, ensuring recommendations are practical and compliant.",
      "Tax planning at VR Wealth Creation is integrated with your broader financial plan. Every rupee saved in tax is a rupee that can compound toward your goals.",
    ],
    highlights: [
      "Deduction and exemption optimisation",
      "Capital gains planning for equity and debt",
      "Tax-efficient fund and instrument selection",
      "Coordination with your existing CA or tax advisor",
    ],
    tags: ["tax planning", "capital gains", "tax efficiency", "Section 80C"],
  },
  // {
  //   slug: "insurance-planning",
  //   title: "Insurance Planning",
  //   description:
  //     "Right-sized life and health cover that protects your family without overpaying.",
  //   tagline:
  //     "Protect what matters most — with coverage that fits your needs, not an agent's commission.",
  //   metaTitle: "Insurance Planning Services | VR Wealth Creation",
  //   metaDescription:
  //     "Unbiased insurance planning for life and health cover. VR Wealth Creation helps you choose adequate protection without unnecessary premiums or product overlap.",
  //   category: "Protection",
  //   image: "/images/services/s6.jpg",
  //   href: "/insurance-planning",
  //   content: [
  //     "Insurance exists to protect your financial plan from events you cannot predict. But the wrong policy — or too many of them — can erode returns without adding real security.",
  //     "We assess your existing coverage, family dependencies, liabilities, and income replacement needs to determine how much protection you actually require. Our recommendations favour term life and comprehensive health policies over investment-linked products that combine high costs with opaque returns.",
  //     "For families, we ensure breadwinners have adequate term cover and dependents have health insurance that matches their medical profile and budget. For business owners, we evaluate key-person and partnership continuity needs.",
  //     "Because we are not tied to any insurer, our advice is unbiased. We compare features, exclusions, claim ratios, and premiums — then recommend policies that deliver value, not just sales targets.",
  //     "Insurance planning at VR Wealth Creation is one piece of a larger strategy. Protection and growth work together so that neither your family nor your corpus is left exposed.",
  //   ],
  //   highlights: [
  //     "Needs-based life and health cover analysis",
  //     "Unbiased, insurer-agnostic recommendations",
  //     "Term insurance over costly bundled products",
  //     "Review of existing policies for gaps and overlap",
  //   ],
  //   tags: [
  //     "insurance planning",
  //     "term insurance",
  //     "health insurance",
  //     "family protection",
  //   ],
  // },
];

export const getServiceBySlug = (slug: string) =>
  Services.find((service) => service.slug === slug);
