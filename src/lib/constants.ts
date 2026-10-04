// Technical terms and copy constants
export const TECHNICAL_TERMS = {
  PAYMENT_METHODS: ['iDeal', 'Sofort', 'SEPA Direct Debit', 'Bancontact', 'EPS', 'Giropay'],
  COMPLIANCE: ['GDPR', 'BaFin', 'ACPR', 'AFM', 'Local VAT reverse-charge', 'e-Factura XML validation'],
  REGULATIONS: ['PSD2', 'MiFID II', 'EMIR', 'SFTR', 'MAR', 'UCITS'],
};

// Microcopy and FAQ responses
export const MICROCOPY = {
  COOKIE_BANNER: {
    TEXT: "We use cookies. But not the creepy ones. No data shared with Zuck.",
    ACCEPT_BUTTON: "Fine",
    REJECT_BUTTON: "Whatever",
  },
  FAQ: [
    {
      question: "Do we own the code?",
      answer: "Yes. 100%. We aren't holding your IP hostage."
    },
    {
      question: "How much of my CTO's time?",
      answer: "About 3 hours for architecture handoff. Then we leave them alone."
    },
    {
      question: "What about ongoing maintenance?",
      answer: "We monitor, maintain, and update integrations for the lifetime of our partnership. No broken APIs on your watch."
    },
    {
      question: "Can we audit your security?",
      answer: "Please do. We have nothing to hide. SOC 2 Type II, ISO 27001, and penetration tested annually."
    }
  ]
};

// Hero section copy
export const HERO_COPY = {
  HEADLINE: "Building a startup is your job. Taking it to the EU is ours.",
  SUBHEADLINE: "We adapt your product, handle EU compliance, and integrate local APIs (iDeal, Sofort, e-factura) in 30 days. No internal devs required.",
  PRIMARY_CTA: "Generate EU Roadmap",
  SECONDARY_CTA: "How it works"
};

// Pain points
export const PAIN_POINTS = [
  {
    title: "The Compliance Trap",
    description: "GDPR isn't the worst of it. Try navigating BaFin, ACPR, and 15 different e-Factura implementations across EU countries.",
    icon: "shield-alert"
  },
  {
    title: "The API Hell",
    description: "Integrating 15 different EU payment methods with varying compliance requirements. Good luck getting iDeal and Sofort to work together.",
    icon: "plug-zap"
  },
  {
    title: "The Dev Drain",
    description: "Pulling your core team off the roadmap to figure out German tax laws. While your competitors ship features.",
    icon: "battery-drain"
  }
];

// Solution steps
export const SOLUTION_STEPS = [
  {
    title: "Adapt",
    description: "Compliance automation and API integrations tailored to your stack.",
    details: ["GDPR compliance framework", "Local payment method integration", "Tax calculation engines"]
  },
  {
    title: "Deploy",
    description: "Production-ready in 30 days with comprehensive testing and monitoring.",
    details: ["Full staging environment", "Load testing simulations", "Rollback procedures"]
  },
  {
    title: "Support",
    description: "We stay on your Slack/Jira and handle ongoing maintenance.",
    details: ["24/7 monitoring", "API failure resolution", "Compliance update management"]
  }
];

// Outcomes
export const OUTCOMES = [
  {
    title: "Command bigger valuations",
    description: "EU expansion increases TAM by 3-5x. Investors notice.",
    metric: "+40% average valuation increase"
  },
  {
    title: "Crush local copycats",
    description: "Beat region-first competitors with native-level compliance and UX.",
    metric: "3x faster time to market vs. local alternatives"
  },
  {
    title: "Protect your core team",
    description: "Your engineers focus on core product while we handle EU complexity.",
    metric: "120+ hours saved per quarter per engineer"
  }
];

// Use cases
export const USE_CASES = [
  {
    title: "Fintech",
    description: "Payment orchestration, compliance automation, and local banking integrations.",
    example: "UK neobank expanding to DE, FR, NL with iDeal, Sofort, and SEPA integration.",
    linkText: "Read fintech case study"
  },
  {
    title: "B2B SaaS",
    description: "Tax-compliant invoicing, e-Factura automation, and regional API integrations.",
    example: "Enterprise SaaS entering Southern Europe with local VAT handling.",
    linkText: "Read B2B SaaS case study"
  }
];