// Master Site Content Data Structure for Hubs & Subpages

export const HOME_PAGE_CONTENT = {
  seoTitle: 'NG Stellar | Transformation & Sustainability Advisory',
  metaDescription:
    'NG Stellar helps businesses transform through business, people, process and technology advisory, with sustainability, innovation and long-term growth at the core.',
  h1: 'Transform the Business. Sustain the Impact.',
  hero: {
    primaryText:
      'NG Stellar is a Transformation & Sustainability Advisory firm helping businesses navigate change, solve complex challenges, unlock opportunities and build sustainable long-term value.',
    secondaryText:
      'From business strategy and process transformation to technology, AI, digital growth and sustainability, we help organizations understand what needs to change—and turn that understanding into measurable action.',
    ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
    ctaSecondary: { label: 'Explore Our Approach', href: '/approach' }
  },
  impactSection: {
    title: 'From Problem or Idea to Sustainable Impact',
    paragraphs: [
      'Every business reaches a point where something needs to change.',
      'It could be a growth challenge, inefficient process, people dependency, outdated technology, a new business idea, market opportunity or the need to build a more resilient and sustainable organization.',
      'NG Stellar brings together business thinking, people, processes, technology and the right ecosystem to help businesses move from problem or idea to sustainable impact.'
    ],
    approachStages: [
      { step: '01', title: 'Discover', desc: 'Understand context & challenges' },
      { step: '02', title: 'Diagnose', desc: 'Uncover root causes & gaps' },
      { step: '03', title: 'Design', desc: 'Target operating blueprint' },
      { step: '04', title: 'Connect', desc: 'Ecosystem & team alignment' },
      { step: '05', title: 'Transform', desc: 'Agile sprint execution' },
      { step: '06', title: 'Sustain', desc: 'Continuous governance' }
    ]
  },
  whatWeTransform: {
    title: 'What We Transform',
    items: [
      {
        id: 'business',
        title: 'Business Transformation',
        route: '/transformation/business',
        desc: 'We help businesses strengthen strategy, business models, growth opportunities, market positioning and organizational direction.',
        badge: 'Strategy & Direction'
      },
      {
        id: 'people',
        title: 'People & Organization Transformation',
        route: '/transformation/people-organization',
        desc: 'We help businesses improve organizational structures, role clarity, capabilities, productivity and leadership readiness.',
        badge: 'People & Capability'
      },
      {
        id: 'process',
        title: 'Process & Operational Transformation',
        route: '/transformation/process-operations',
        desc: 'We identify process gaps, reduce inefficiencies, improve workflows and build practical operating systems.',
        badge: 'Process & Systems'
      },
      {
        id: 'technology',
        title: 'Technology Transformation',
        route: '/transformation/technology',
        desc: 'We assess technology maturity and enable businesses through digital platforms, automation, AI, software, data and integrated systems.',
        badge: 'Technology & AI'
      },
      {
        id: 'sustainability',
        title: 'Sustainability Transformation',
        route: '/sustainability',
        desc: 'We help organizations build economically viable, people-focused, responsible and resilient businesses.',
        badge: 'Resilience & ESG'
      }
    ]
  },
  healthCheckSection: {
    title: 'Our Transformation Health Check',
    subtitle: 'Before recommending a solution, we understand the business.',
    description: 'The NG Stellar Transformation Health Check™ assesses your business across:',
    dimensions: ['Business', 'People', 'Process', 'Technology', 'Sustainability'],
    deliverablesTitle: 'You Receive',
    deliverables: [
      'Current-state assessment',
      'Gap analysis',
      'Opportunity identification',
      'Transformation priorities',
      'Recommended actions',
      'Transformation roadmap'
    ],
    cta: { label: 'Assess Your Business', href: '/transformation-health-check' }
  },
  whySection: {
    title: 'Why NG Stellar?',
    lead: "We don't just advise. We help transform.",
    comparisons: [
      { role: 'Traditional consultants', action: 'may diagnose.' },
      { role: 'Technology companies', action: 'may build.' },
      { role: 'Marketing agencies', action: 'may promote.' }
    ],
    summary: 'NG Stellar brings these capabilities together.',
    cycleTitle: 'Our Transformation Cycle',
    journey: ['Understand', 'Advise', 'Connect', 'Transform', 'Measure', 'Sustain']
  },
  capabilitiesSection: {
    title: 'Our Capabilities',
    subtitle: 'Our transformation capabilities include:',
    items: [
      { title: 'Strategy & Research', href: '/capabilities/strategy-research' },
      { title: 'Brand & Experience', href: '/capabilities/brand-experience' },
      { title: 'Technology Transformation', href: '/capabilities/technology-transformation' },
      { title: 'AI & Automation', href: '/capabilities/technology-transformation/ai-automation' },
      { title: 'Digital Platforms', href: '/capabilities/technology-transformation/digital-platforms' },
      { title: 'Digital Growth', href: '/capabilities/digital-growth' },
      { title: 'Website & Software Development', href: '/capabilities/technology-transformation/software-development' },
      { title: 'Digital Marketing', href: '/capabilities/digital-growth/digital-marketing' }
    ],
    cta: { label: 'Explore Our Capabilities', href: '/capabilities' }
  },
  sustainabilitySection: {
    title: 'Sustainability',
    lead: 'Sustainability is not an add-on. It is part of transformation.',
    considerationsTitle: 'We consider:',
    considerations: [
      { title: 'Economic sustainability', href: '/sustainability/economic' },
      { title: 'People & social sustainability', href: '/sustainability/people-social' },
      { title: 'Governance', href: '/sustainability/governance' },
      { title: 'Environmental responsibility', href: '/sustainability/environmental' },
      { title: 'Business resilience', href: '/sustainability/business-resilience' }
    ],
    objective: 'Our objective is to help businesses create value that can be measured, maintained and improved over time.',
    cta: { label: 'Explore Sustainability Advisory', href: '/sustainability' }
  },
  finalCta: {
    title: 'Ready to transform your business?',
    description:
      "Let's understand where you are today, identify what needs to change and build a practical path toward sustainable impact.",
    cta: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }
  }
};

export const TRANSFORMATION_HUB = {
  h1: 'Business Transformation Advisory',
  seoTitle: 'Business Transformation Advisory | NG Stellar',
  metaDescription:
    'NG Stellar provides business transformation advisory across strategy, people, processes and technology to help organizations improve performance and prepare for sustainable growth.',
  heroDescription:
    'Transformation is more than implementing new technology. It is about changing the way a business thinks, operates and creates value.\n\nNG Stellar helps businesses identify transformation opportunities, design practical strategies and implement changes across business, people, processes and technology.',
  frameworkTitle: 'Our Transformation Framework',
  frameworkStages: [
    {
      step: '01',
      id: 'discover',
      title: 'DISCOVER',
      label: 'Discover',
      desc: 'Understand the business, current situation, challenges, goals and opportunities.'
    },
    {
      step: '02',
      id: 'diagnose',
      title: 'DIAGNOSE',
      label: 'Diagnose',
      desc: 'Identify root causes, gaps, inefficiencies and opportunities.'
    },
    {
      step: '03',
      id: 'design',
      title: 'DESIGN',
      label: 'Design',
      desc: 'Create a practical transformation strategy and roadmap.'
    },
    {
      step: '04',
      id: 'connect',
      title: 'CONNECT',
      label: 'Connect',
      desc: 'Bring together the right experts, partners, technologies and ecosystem.'
    },
    {
      step: '05',
      id: 'transform',
      title: 'TRANSFORM',
      label: 'Transform',
      desc: 'Support implementation, change management and execution.'
    },
    {
      step: '06',
      id: 'sustain',
      title: 'SUSTAIN',
      label: 'Sustain',
      desc: 'Measure outcomes, continuously improve and build long-term resilience.'
    }
  ],
  areas: [
    {
      id: 'business',
      title: 'Business Transformation',
      route: '/transformation/business',
      desc: 'We help businesses strengthen strategy, business models, growth opportunities, market positioning and organizational direction.',
      badge: 'Strategy & Direction'
    },
    {
      id: 'people-organization',
      title: 'People & Organization Transformation',
      route: '/transformation/people-organization',
      desc: 'We help businesses improve organizational structures, role clarity, capabilities, productivity and leadership readiness.',
      badge: 'People & Capability'
    },
    {
      id: 'process-operations',
      title: 'Process & Operational Transformation',
      route: '/transformation/process-operations',
      desc: 'We identify process gaps, reduce inefficiencies, improve workflows and build practical operating systems.',
      badge: 'Process & Systems'
    },
    {
      id: 'technology',
      title: 'Technology Transformation',
      route: '/transformation/technology',
      desc: 'We assess technology maturity and enable businesses through digital platforms, automation, AI, software, data and integrated systems.',
      badge: 'Technology & AI'
    }
  ],
  ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
  ctaSecondary: { label: 'Explore Transformation Health Check', href: '/transformation-health-check' }
};

export const SUSTAINABILITY_HUB = {
  h1: 'Sustainability Advisory',
  seoTitle: 'Sustainability Advisory Services for Businesses | NG Stellar',
  metaDescription:
    'NG Stellar provides sustainability advisory focused on economic viability, people, governance, environmental responsibility and business resilience.',
  heroDescription:
    'Sustainability is not simply about the environment.\n\nA sustainable business is one that can create value, adapt to change, remain economically viable and continue to serve its stakeholders responsibly over the long term.\n\nNG Stellar integrates sustainability into business transformation.',
  centerConcept: 'Long-Term Business Value',
  dimensions: [
    {
      id: 'economic',
      title: 'ECONOMIC SUSTAINABILITY',
      displayTitle: 'Economic Sustainability',
      route: '/sustainability/economic',
      tagline: 'Financially Viable & Resilient Operating Models',
      desc: 'We help businesses build financially viable and resilient operating models.',
      focusAreasTitle: 'Focus areas:',
      focus: [
        'Profitability',
        'Cost efficiency',
        'Revenue diversification',
        'Cash-flow resilience',
        'Business continuity',
        'Long-term viability'
      ]
    },
    {
      id: 'people-social',
      title: 'PEOPLE & SOCIAL SUSTAINABILITY',
      displayTitle: 'People & Social Sustainability',
      route: '/sustainability/people-social',
      tagline: 'Investing in People and Social Impact',
      desc: 'Sustainable organizations invest in people.',
      focusAreasTitle: 'Focus areas:',
      focus: [
        'Employee capability',
        'Productivity',
        'Leadership development',
        'Organizational culture',
        'Talent retention',
        'Workplace practices',
        'Community impact'
      ]
    },
    {
      id: 'governance',
      title: 'GOVERNANCE',
      displayTitle: 'Governance',
      route: '/sustainability/governance',
      tagline: 'Accountability, Policies & Risk Management',
      desc: 'Strong businesses need strong governance.',
      focusAreasTitle: 'Focus areas:',
      focus: [
        'Accountability',
        'Policies',
        'Compliance',
        'Risk management',
        'Decision-making',
        'Internal controls',
        'Performance governance'
      ]
    },
    {
      id: 'environmental',
      title: 'ENVIRONMENTAL RESPONSIBILITY',
      displayTitle: 'Environmental Responsibility',
      route: '/sustainability/environmental',
      tagline: 'Resource Efficiency & Impact Reduction',
      desc: 'We help businesses identify opportunities to reduce environmental impact and improve resource efficiency.',
      focusAreasTitle: 'Focus areas:',
      focus: [
        'Energy efficiency',
        'Waste reduction',
        'Resource utilization',
        'Responsible sourcing',
        'Environmental practices',
        'Regulatory awareness'
      ]
    },
    {
      id: 'business-resilience',
      title: 'BUSINESS RESILIENCE',
      displayTitle: 'Business Resilience',
      route: '/sustainability/business-resilience',
      tagline: 'Viability When Circumstances Change',
      desc: 'Can your business remain viable when circumstances change?',
      focusAreasTitle: 'We assess resilience against:',
      focus: [
        'Customer concentration',
        'Supplier dependency',
        'Key-person dependency',
        'Technology disruption',
        'Market changes',
        'Economic uncertainty',
        'Regulatory changes'
      ]
    }
  ],
  finalMessage: 'A transformation is successful only when the business can sustain the results.',
  ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
  ctaSecondary: { label: 'Explore Sustainability Assessment', href: '/transformation-health-check/sustainability' }
};

export const HEALTH_CHECK_HUB = {
  h1: 'NG Stellar Transformation Health Check™',
  seoTitle: 'Business Transformation Health Check | NG Stellar',
  metaDescription:
    'Assess your business across strategy, people, processes, technology and sustainability with the NG Stellar Transformation Health Check. Identify gaps and transformation priorities.',
  heroTagline: 'Understand where your business stands. Discover what needs to change.',
  heroDescription:
    'Every business has strengths, gaps and opportunities.\n\nOur Transformation Health Check provides a structured assessment of your organization across five critical dimensions.',
  fiveDimensions: ['BUSINESS', 'PEOPLE', 'PROCESS', 'TECHNOLOGY', 'SUSTAINABILITY'],
  connectsTo: 'Transformation Priorities',
  assessmentSubpages: [
    {
      id: 'business',
      href: '/transformation-health-check/business',
      title: 'Business Assessment',
      shortTitle: 'Business Assessment',
      h1: 'Business Assessment',
      desc: 'Structured evaluation of strategy, business model, market position, revenue streams, growth readiness, and competitive positioning.',
      evaluatesTitle: 'We evaluate:',
      whatWeAssess: [
        'Strategy',
        'Business model',
        'Market position',
        'Revenue',
        'Growth readiness',
        'Competitive position'
      ],
      cta: 'Start Business Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'people',
      href: '/transformation-health-check/people',
      title: 'People Assessment',
      shortTitle: 'People Assessment',
      h1: 'People Assessment',
      desc: 'Structured evaluation of organizational structure, role clarity, capabilities, productivity, leadership readiness, and key-person dependencies.',
      evaluatesTitle: 'We evaluate:',
      whatWeAssess: [
        'Organization structure',
        'Roles',
        'Capabilities',
        'Productivity',
        'Leadership',
        'Key-person dependency'
      ],
      cta: 'Start People Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'process',
      href: '/transformation-health-check/process',
      title: 'Process Assessment',
      shortTitle: 'Process Assessment',
      h1: 'Process Assessment',
      desc: 'Structured evaluation of process maturity, standard operating procedures, workflows, operational bottlenecks, manual tasks, and efficiency.',
      evaluatesTitle: 'We evaluate:',
      whatWeAssess: [
        'Process maturity',
        'SOPs',
        'Workflow',
        'Bottlenecks',
        'Manual work',
        'Operational efficiency'
      ],
      cta: 'Start Process Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'technology',
      href: '/transformation-health-check/technology',
      title: 'Technology Assessment',
      shortTitle: 'Technology Assessment',
      h1: 'Technology Assessment',
      desc: 'Structured evaluation of digital maturity, software systems, system integration, automation opportunities, AI readiness, and data reporting.',
      evaluatesTitle: 'We evaluate:',
      whatWeAssess: [
        'Digital maturity',
        'Systems',
        'Integration',
        'Automation',
        'AI readiness',
        'Data & reporting'
      ],
      cta: 'Start Technology Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'sustainability',
      href: '/transformation-health-check/sustainability',
      title: 'Sustainability Assessment',
      shortTitle: 'Sustainability Assessment',
      h1: 'Sustainability Assessment',
      desc: 'Structured evaluation of economic viability, people, governance policies, environmental responsibility, and business resilience.',
      evaluatesTitle: 'We evaluate:',
      whatWeAssess: [
        'Economic viability',
        'People',
        'Governance',
        'Environmental responsibility',
        'Business resilience'
      ],
      cta: 'Start Sustainability Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'roadmap',
      href: '/transformation-health-check/roadmap',
      title: 'Transformation Roadmap',
      shortTitle: 'Transformation Roadmap',
      h1: 'Transformation Roadmap',
      desc: 'Translate assessment scores and diagnostic findings across business, people, process, technology, and sustainability into prioritized actions.',
      evaluatesTitle: 'Transformation Priorities Synthesis:',
      whatWeAssess: [
        'Overall Business Health Score',
        'Dimension-wise Scores',
        'Critical Gaps',
        'Growth Opportunities',
        'Transformation Priorities',
        'Recommended Actions',
        'Transformation Roadmap'
      ],
      cta: 'Request Transformation Roadmap',
      ctaHref: '/contact/health-check'
    }
  ],
  reportSection: {
    title: 'Your Transformation Report',
    intro: 'The assessment can provide:',
    deliverables: [
      'Overall Business Health Score',
      'Dimension-wise Scores',
      'Critical Gaps',
      'Growth Opportunities',
      'Transformation Priorities',
      'Recommended Actions',
      'Transformation Roadmap'
    ]
  },
  ctaPrimary: { label: 'Start Your Health Check', href: '/contact/health-check' }
};

export const APPROACH_HUB = {
  h1: 'Our Approach',
  seoTitle: 'Our Transformation Approach & Methodology | NG Stellar',
  metaDescription:
    'Transformation is not a project. It is a journey. Explore the NG Stellar 6-stage transformation methodology: Discover, Diagnose, Design, Connect, Transform, and Sustain.',
  heroTagline: 'Transformation is not a project. It is a journey.',
  heroDescription:
    'Every organization is different.\n\nSome need better processes. Some need stronger leadership. Some need technology. Some need a new business model. Others simply need clarity about what is holding them back.\n\nOur approach begins by understanding the business before recommending solutions.',
  stages: [
    {
      step: '01',
      id: 'discover',
      title: 'Discover',
      h1: 'Discover',
      tagline: 'Understand before we act.',
      href: '/approach/discover',
      desc: 'We begin by understanding your business, market, people, customers, challenges and ambitions.\n\nWe look beyond symptoms to understand the bigger picture.',
      weExploreTitle: 'We explore:',
      exploreItems: [
        'Business objectives',
        'Current business model',
        'Market position',
        'Customer expectations',
        'Organizational capabilities',
        'Technology landscape',
        'Growth opportunities',
        'Sustainability priorities'
      ],
      outcome: 'A clear understanding of where you are and where you want to go.',
      cta: 'Start a Transformation Conversation',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      step: '02',
      id: 'diagnose',
      title: 'Diagnose',
      h1: 'Diagnose',
      tagline: 'Identify what is really holding you back.',
      href: '/approach/diagnose',
      desc: 'Problems are often interconnected.\n\nA sales problem may actually be a process problem.\nA technology problem may actually be a people problem.\nA profitability problem may actually be an operating-model problem.\n\nWe assess the organization across business, people, process, technology and sustainability.',
      outcome: 'A practical transformation health check identifying gaps, risks, opportunities and priorities.',
      cta: 'Request a Health Check',
      ctaHref: '/contact/health-check'
    },
    {
      step: '03',
      id: 'design',
      title: 'Design',
      h1: 'Design',
      tagline: 'Turn insights into a practical transformation roadmap.',
      href: '/approach/design',
      desc: 'Transformation should not create unnecessary complexity.\n\nWe design practical solutions aligned with your business objectives, resources and capabilities.',
      weHelpDesignTitle: 'We help design:',
      designItems: [
        'Business transformation strategies',
        'Operating models',
        'Process improvements',
        'Organization structures',
        'Technology strategies',
        'Digital initiatives',
        'Growth strategies',
        'Sustainability frameworks'
      ],
      outcome: 'A prioritized roadmap with clear actions, responsibilities and measurable outcomes.',
      cta: 'Discuss Solution Design',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      step: '04',
      id: 'connect',
      title: 'Connect',
      h1: 'Connect',
      tagline: 'Bring the right people and capabilities together.',
      href: '/approach/connect',
      desc: "You don't always need to build everything yourself.\n\nThrough our ecosystem, we connect businesses with relevant experts, technology companies, startups, professional advisors, implementation partners and industry specialists.",
      ecosystemIncludesTitle: 'Our ecosystem includes:',
      ecosystemItems: [
        'Subject-matter experts',
        'Industry partners',
        'Technology partners',
        'Professional advisors',
        'Startups',
        'Incubators & accelerators',
        'Strategic partners',
        'Implementation partners'
      ],
      outcome: 'Access to the right capabilities at the right time.',
      cta: 'Explore Ecosystem Capabilities',
      ctaHref: '/ecosystem'
    },
    {
      step: '05',
      id: 'transform',
      title: 'Transform',
      h1: 'Transform',
      tagline: 'Move from strategy to execution.',
      href: '/approach/transform',
      desc: 'A strategy has value only when it creates measurable change.\n\nWe support organizations in converting transformation plans into action.',
      engagementIncludesTitle: 'Depending on the engagement, this may include:',
      transformItems: [
        'Business model transformation',
        'Process redesign',
        'Technology implementation',
        'Digital transformation',
        'Organization transformation',
        'Marketing and growth initiatives',
        'Performance improvement',
        'Change management'
      ],
      outcome: 'Transformation that delivers measurable business value.',
      cta: 'Start Execution Sprints',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      step: '06',
      id: 'sustain',
      title: 'Sustain',
      h1: 'Sustain',
      tagline: 'Make the transformation last.',
      href: '/approach/sustain',
      desc: 'Transformation should not disappear once the project ends.\n\nWe help organizations build systems, capabilities and practices that allow improvements to continue.',
      weFocusOnTitle: 'We focus on:',
      sustainItems: [
        'Performance measurement',
        'Governance',
        'Continuous improvement',
        'Capability building',
        'Leadership development',
        'Sustainability',
        'Risk management',
        'Long-term growth'
      ],
      outcome: 'Sustainable impact beyond the initial transformation.',
      cta: 'Ensure Sustainable Impact',
      ctaHref: '/contact/transformation-conversation'
    }
  ]
};

export const ECOSYSTEM_HUB = {
  h1: 'Ecosystem',
  seoTitle: 'Transformation Ecosystem & Partner Network | NG Stellar',
  metaDescription:
    'No business can transform alone. NG Stellar brings together an ecosystem of specialists, technology partners, startups and advisors to help businesses access the right capabilities.',
  heroTagline: 'No business can transform alone.',
  heroDescription:
    "No business can transform alone.\n\nThe right transformation often requires capabilities that don't exist within one organization.\n\nNG Stellar brings together an ecosystem of specialists and organizations to help businesses access the right capabilities.",
  ecosystemIncludes: [
    { title: 'Expert Network', desc: 'Subject-matter experts and senior domain specialists.' },
    { title: 'Industry Partners', desc: 'Sector-specific organizations and industry leaders.' },
    { title: 'Technology Partners', desc: 'Enterprise cloud platforms, SaaS and software systems.' },
    { title: 'Professional Partners', desc: 'Corporate legal, compliance, governance and financial advisors.' },
    { title: 'Startups', desc: 'Agile digital innovators bringing emerging tech and automation.' },
    { title: 'Incubators & Accelerators', desc: 'Innovation hubs fostering scalable venture growth.' },
    { title: 'Strategic Partners', desc: 'Alliances collaborating on comprehensive transformation opportunities.' },
    { title: 'Implementation Partners', desc: 'Engineering teams and execution specialists.' }
  ],
  transformationModelTitle: 'Transformation Model',
  transformationModelSteps: [
    'Design practical solutions.',
    'Access the right ecosystem.',
    'Execute transformation.',
    'Sustain the results.'
  ],
  ctaPrimary: { label: 'Partner With NG Stellar', href: '/contact/partner' },
  ctaSecondary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }
};

export const STORIES_HUB = {
  h1: 'Transformation Stories',
  status: 'CONTENT REQUIRED',
  statusNotice: 'Dedicated content not currently provided. Real approved case studies and client stories will be added in a future update.',
  seoTitle: 'Transformation Stories | NG Stellar',
  metaDescription: 'Illustrative transformation scenarios across business, process, technology and digital growth.',
  categories: [
    { id: 'business', title: 'Business Transformation', href: '/transformation-stories/business', status: 'CONTENT REQUIRED' },
    { id: 'process', title: 'Process Transformation', href: '/transformation-stories/process', status: 'CONTENT REQUIRED' },
    { id: 'technology', title: 'Technology Transformation', href: '/transformation-stories/technology', status: 'CONTENT REQUIRED' },
    { id: 'digital-growth', title: 'Digital Growth', href: '/transformation-stories/digital-growth', status: 'CONTENT REQUIRED' }
  ],
  ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }
};

export const INSIGHTS_HUB = {
  h1: 'Insights',
  status: 'CONTENT REQUIRED',
  statusNotice: 'Dedicated editorial content not currently provided. Thought leadership and executive briefings will be published separately.',
  seoTitle: 'Insights on Transformation, Sustainability & Growth | NG Stellar',
  metaDescription: 'Executive insights and strategic perspectives on transformation, sustainability, business growth, technology, AI, and SME leadership.',
  categories: [
    { id: 'transformation', title: 'Transformation', href: '/insights/transformation', status: 'CONTENT REQUIRED' },
    { id: 'sustainability', title: 'Sustainability', href: '/insights/sustainability', status: 'CONTENT REQUIRED' },
    { id: 'business-growth', title: 'Business Growth', href: '/insights/business-growth', status: 'CONTENT REQUIRED' },
    { id: 'technology-ai', title: 'Technology & AI', href: '/insights/technology-ai', status: 'CONTENT REQUIRED' },
    { id: 'sme-leadership', title: 'SME Leadership', href: '/insights/sme-leadership', status: 'CONTENT REQUIRED' }
  ]
};

export const ABOUT_HUB = {
  h1: 'About NG Stellar',
  seoTitle: 'About NG Stellar | Transformation & Sustainability Advisory',
  metaDescription:
    'NG Stellar is a Transformation & Sustainability Advisory firm helping businesses navigate growth, technology, organizational change and sustainability.',
  whoWeAre: {
    h1: 'Who We Are',
    text: 'NG Stellar is a Transformation & Sustainability Advisory firm helping businesses navigate growth, technology, organizational change and sustainability.',
    positioning: 'Transformation & Sustainability Advisory',
    brandPromise: 'Transform the Business. Sustain the Impact.'
  },
  purpose: {
    h1: 'Our Purpose',
    coreMessage: 'Transform the Business. Sustain the Impact.',
    text: 'NG Stellar helps businesses understand what needs to change, connect the right capabilities and create transformation that delivers sustainable long-term value.'
  },
  principles: {
    h1: 'Our Principles',
    items: [
      {
        title: 'Business First',
        desc: 'Technology and solutions should serve the business — never the other way around.'
      },
      {
        title: 'Practical Transformation',
        desc: 'We focus on solutions that can actually be implemented.'
      },
      {
        title: 'Ecosystem Thinking',
        desc: 'The right answer may come from the right partner, expert or technology — not necessarily from us.'
      },
      {
        title: 'Long-Term Value',
        desc: 'We focus on sustainable outcomes rather than short-term fixes.'
      },
      {
        title: 'Responsible Innovation',
        desc: 'Innovation should create meaningful value while considering people, governance and long-term impact.'
      },
      {
        title: 'Measurable Impact',
        desc: 'Transformation should lead to measurable improvement.'
      }
    ]
  },
  leadership: {
    h1: 'Leadership',
    members: [
      {
        name: 'Bharathi',
        role: 'CEO & Founder',
        bio: 'Bharathi leads NG Stellar with a vision to build a transformation ecosystem that helps businesses navigate growth, technology, organizational change and sustainability. His focus is on connecting business challenges with practical solutions, strategic expertise and implementation capabilities.',
        focus: 'Business Transformation | Strategy | Growth | Ecosystem Development'
      },
      {
        name: 'Gokul Rengarajan',
        role: 'Board Advisor',
        bio: 'Gokul provides strategic perspective and advisory support to NG Stellar, contributing to organizational direction, business thinking and long-term growth.',
        focus: 'Strategic Advisory | Business Perspective | Growth'
      },
      {
        name: 'CS Rajmohan Nithya',
        role: 'Compliance & Governance Advisor',
        bio: 'Rajmohan Nithya supports NG Stellar with perspectives on governance, compliance, risk and responsible business practices.',
        focus: 'Governance | Compliance | Risk | Business Advisory'
      },
      {
        name: 'Selvi Rajendran',
        role: 'Enterprise Technology Advisor',
        bio: 'Selvi brings enterprise technology perspectives to help organizations evaluate technology opportunities, digital transformation initiatives and scalable technology strategies.',
        focus: 'Enterprise Technology | Digital Transformation | Technology Strategy'
      }
    ]
  },
  journey: {
    h1: 'Our Journey',
    tagline: 'From technology execution to transformation thinking.',
    paragraphs: [
      "NG Stellar's journey has evolved alongside the changing needs of businesses.",
      "What began with technology and digital capabilities has grown into a broader vision:\n\nBusinesses don't need more technology. They need better transformation.",
      'Our evolution has been shaped by experience across technology, digital initiatives, business challenges, partnerships and organizational transformation.',
      'Today, NG Stellar brings these capabilities together through a transformation and sustainability ecosystem.',
      'Our journey continues.\n\nWe are building a platform where businesses can access the right thinking, people, technology and partners to create sustainable growth.'
    ]
  },
  ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
  ctaSecondary: { label: 'Explore Our Approach', href: '/approach' }
};

