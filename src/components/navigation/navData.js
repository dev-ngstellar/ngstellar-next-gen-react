export const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    type: 'link',
  },
  {
    id: 'capabilities',
    label: 'Capabilities',
    dropdownTitle: 'CAPABILITIES & SERVICES',
    href: '/capabilities',
    type: 'mega-menu',
    tagline: 'End-to-end digital transformation, technology implementation, custom engineering, and growth capabilities.',
    cta: {
      label: 'Explore All Capabilities',
      href: '/capabilities',
    },
    categories: [
      {
        category: 'TRANSFORMATION & ADVISORY',
        href: '/digital-transformation',
        links: [
          { title: 'Digital Transformation', href: '/digital-transformation' },
          { title: 'Process Automation', href: '/process-automation' },
          { title: 'Business Strategy', href: '/transformation/business' },
          { title: 'Operations Modernization', href: '/transformation/process-operations' },
        ],
      },
      {
        category: 'SYSTEMS & SOFTWARE',
        href: '/software-system-implementation',
        links: [
          { title: 'Software & System Implementation', href: '/software-system-implementation' },
          { title: 'Custom Software Development', href: '/custom-software-development' },
          { title: 'Technology Transformation', href: '/transformation/technology' },
          { title: 'Website Solutions & Templates', href: '/templates' },
        ],
      },
      {
        category: 'DIGITAL CHANNELS',
        href: '/website-development',
        links: [
          { title: 'Website Development', href: '/website-development' },
          { title: 'Mobile App Development', href: '/mobile-app-development' },
        ],
      },
      {
        category: 'GROWTH & EXPERIENCE',
        href: '/digital-marketing',
        links: [
          { title: 'Digital Marketing & SEO', href: '/digital-marketing' },
          { title: 'Branding & UI/UX Design', href: '/branding-ui-ux' },
        ],
      },
    ],
  },
  {
    id: 'transformation',
    label: 'Transformation',
    dropdownTitle: 'TRANSFORMATION ADVISORY',
    href: '/transformation',
    type: 'mega-menu',
    tagline: 'Transform business models, people, processes, and technology to create stronger and more adaptable organizations.',
    cta: {
      label: 'Explore Transformation',
      href: '/transformation',
    },
    items: [
      {
        title: 'Business Transformation',
        href: '/transformation/business',
        description: 'Reinvent business models, market positioning, and revenue strategies for lasting competitive advantage.',
        badge: 'Core Advisory',
      },
      {
        title: 'People & Organization Transformation',
        href: '/transformation/people-organization',
        description: 'Cultivate leadership, organizational agility, talent development, and high-performance culture.',
        badge: 'Organizational',
      },
      {
        title: 'Process & Operational Transformation',
        href: '/transformation/process-operations',
        description: 'Streamline workflows, eliminate inefficiencies, and build lean, resilient operational architectures.',
        badge: 'Operations',
      },
      {
        title: 'Technology Transformation',
        href: '/transformation/technology',
        description: 'Modernize enterprise architecture, harness cloud ecosystems, and accelerate digital enablement.',
        badge: 'Digital & Tech',
      },
    ],
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    dropdownTitle: 'SUSTAINABILITY',
    href: '/sustainability',
    type: 'mega-menu',
    tagline: 'Build organizations that create lasting economic, social, environmental, and operational value.',
    cta: {
      label: 'Explore Sustainability',
      href: '/sustainability',
    },
    items: [
      {
        title: 'Economic Sustainability',
        href: '/sustainability/economic',
        description: 'Long-term financial health, capital allocation, and sustainable profitability models.',
      },
      {
        title: 'People & Social Sustainability',
        href: '/sustainability/people-social',
        description: 'Workplace well-being, community impact, DE&I, and equitable human capital practices.',
      },
      {
        title: 'Governance',
        href: '/sustainability/governance',
        description: 'Ethical governance structures, compliance rigor, accountability, and risk oversight.',
      },
      {
        title: 'Environmental Responsibility',
        href: '/sustainability/environmental',
        description: 'Decarbonization, resource efficiency, circular economy, and ESG impact frameworks.',
      },
      {
        title: 'Business Resilience',
        href: '/sustainability/business-resilience',
        description: 'Crisis readiness, systemic risk management, and operational continuity in volatile markets.',
      },
    ],
  },
  {
    id: 'health-check',
    label: 'Health Check',
    dropdownTitle: 'Transformation Health Check',
    href: '/transformation-health-check',
    type: 'mega-menu',
    isPrimaryService: true,
    tagline: 'Understand where your business stands today and identify the transformation priorities that matter most.',
    cta: {
      label: 'Start Your Health Check',
      href: '/transformation-health-check',
      sublabel: 'Complimentary executive diagnostic & benchmark scorecard',
    },
    items: [
      {
        title: 'Business Assessment',
        href: '/transformation-health-check/business',
        description: 'Evaluate business viability, value proposition, and market resilience.',
        icon: 'briefcase',
      },
      {
        title: 'People Assessment',
        href: '/transformation-health-check/people',
        description: 'Assess team capabilities, organizational health, and leadership readiness.',
        icon: 'users',
      },
      {
        title: 'Process Assessment',
        href: '/transformation-health-check/process',
        description: 'Identify bottlenecks, operational inefficiencies, and automation opportunities.',
        icon: 'workflow',
      },
      {
        title: 'Technology Assessment',
        href: '/transformation-health-check/technology',
        description: 'Audit tech stack maturity, infrastructure scalability, and security posture.',
        icon: 'cpu',
      },
      {
        title: 'Sustainability Assessment',
        href: '/transformation-health-check/sustainability',
        description: 'Measure ESG alignment, sustainability readiness, and regulatory compliance.',
        icon: 'shield',
      },
      {
        title: 'Transformation Roadmap',
        href: '/transformation-health-check/roadmap',
        description: 'Receive a prioritized, phased implementation plan with clear KPIs and ROI.',
        icon: 'milestone',
        highlight: true,
      },
    ],
  },
  {
    id: 'approach',
    label: 'Approach',
    dropdownTitle: 'Our Approach',
    href: '/approach',
    type: 'mega-menu',
    tagline: 'Our six-stage transformation methodology engineered for sustainable impact.',
    cta: {
      label: 'Explore Our Approach',
      href: '/approach',
    },
    stages: [
      {
        step: '01',
        title: 'Discover',
        href: '/approach/discover',
        description: 'Deep stakeholder immersion, market scanning, and core challenge identification.',
      },
      {
        step: '02',
        title: 'Diagnose',
        href: '/approach/diagnose',
        description: 'Rigorous quantitative audits, gap analyses, and capability benchmarking.',
      },
      {
        step: '03',
        title: 'Design',
        href: '/approach/design',
        description: 'Architecting transformation blueprints, target operating models, and roadmaps.',
      },
      {
        step: '04',
        title: 'Connect',
        href: '/approach/connect',
        description: 'Orchestrating ecosystem partners, expert advisors, and enabling technologies.',
      },
      {
        step: '05',
        title: 'Transform',
        href: '/approach/transform',
        description: 'Agile execution, iterative rollouts, change management, and pilot validation.',
      },
      {
        step: '06',
        title: 'Sustain',
        href: '/approach/sustain',
        description: 'Continuous value measurement, governance embedding, and capability transfer.',
      },
    ],
  },
  {
    id: 'locations',
    label: 'Locations',
    dropdownTitle: 'Regional Hubs',
    href: '/locations/erode',
    type: 'dropdown',
    inMoreGroup: true,
    tagline: 'Local digital transformation and technology implementation hubs across Tamil Nadu.',
    cta: {
      label: 'View Local Presence',
      href: '/contact',
    },
    items: [
      { title: 'Erode Hub', href: '/locations/erode', description: 'Business registration, compliance, audit, due diligence, and advisory in Erode.' },
      { title: 'Coimbatore Hub', href: '/locations/coimbatore', description: 'Custom software, mobile applications, and system implementation in Coimbatore.' },
    ],
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem',
    dropdownTitle: 'Ecosystem',
    href: '/ecosystem',
    type: 'dropdown',
    inMoreGroup: true,
    tagline: 'A collaborative network of industry leaders, innovators, and technology pioneers.',
    cta: {
      label: 'Join the Ecosystem',
      href: '/ecosystem',
    },
    items: [
      { title: 'Expert Network', href: '/ecosystem/expert-network', description: 'Seasoned industry executives and domain specialists.' },
      { title: 'Industry Partners', href: '/ecosystem/industry-partners', description: 'Sector-specific alliances driving collaborative growth.' },
      { title: 'Technology Partners', href: '/ecosystem/technology-partners', description: 'Leading enterprise platforms and cloud providers.' },
      { title: 'Professional Partners', href: '/ecosystem/professional-partners', description: 'Legal, financial, and regulatory advisory partners.' },
      { title: 'Startups', href: '/ecosystem/startups', description: 'Disruptive ventures bringing breakthrough innovation.' },
      { title: 'Incubators & Accelerators', href: '/ecosystem/incubators-accelerators', description: 'Ecosystem programs fostering scale and agility.' },
      { title: 'Strategic & Implementation Partners', href: '/ecosystem/strategic-implementation-partners', description: 'Delivery partners ensuring end-to-end execution.' },
    ],
  },
  {
    id: 'stories',
    label: 'Transformation Stories',
    dropdownTitle: 'Transformation Stories',
    href: '/transformation-stories',
    type: 'dropdown',
    inMoreGroup: true,
    tagline: 'Real-world case studies delivering measurable business and sustainability outcomes.',
    cta: {
      label: 'View All Case Studies',
      href: '/transformation-stories',
    },
    items: [
      { title: 'Business Transformation', href: '/transformation-stories/business', description: 'Turnarounds, growth acceleration, and strategic pivots.' },
      { title: 'Process Transformation', href: '/transformation-stories/process', description: 'Operational excellence and workflow modernization.' },
      { title: 'Technology Transformation', href: '/transformation-stories/technology', description: 'Platform scale, cloud adoption, and AI enablement.' },
      { title: 'Digital Growth', href: '/transformation-stories/digital-growth', description: 'Customer acquisition, market reach, and brand elevation.' },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    dropdownTitle: 'Insights',
    href: '/insights',
    type: 'mega-menu',
    inMoreGroup: true,
    tagline: 'Thought leadership, executive briefings, and frameworks on transformation and ESG.',
    cta: {
      label: 'Read All Insights',
      href: '/insights',
    },
    items: [
      { title: 'Transformation', href: '/insights/transformation', description: 'Strategic guides on modernizing enterprise operations.' },
      { title: 'Sustainability', href: '/insights/sustainability', description: 'ESG frameworks, green transition, and impact governance.' },
      { title: 'Business Growth', href: '/insights/business-growth', description: 'Scalable models, revenue resilience, and market expansion.' },
      { title: 'Technology & AI', href: '/insights/technology-ai', description: 'Demystifying AI, automation, and enterprise tech.' },
      { title: 'SME Leadership', href: '/insights/sme-leadership', description: 'Actionable playbooks for founders and growing businesses.' },
    ],
    featuredInsight: {
      tag: 'Executive Briefing',
      title: 'The Sustainable Transformation Imperative: Balancing Profitability with ESG Resilience',
      date: 'Latest Edition',
      readTime: '6 min read',
      href: '/insights/sustainability',
    },
  },
  {
    id: 'about',
    label: 'About',
    dropdownTitle: 'About NG Stellar',
    href: '/about',
    type: 'dropdown',
    inMoreGroup: true,
    tagline: 'NG Stellar is a trusted transformation & sustainability advisory partner.',
    cta: {
      label: 'Discover Our Story',
      href: '/about',
    },
    items: [
      { title: 'Who We Are', href: '/about/who-we-are', description: 'Our mission, advisory model, and value proposition.' },
      { title: 'Our Purpose', href: '/about/purpose', description: 'Why we exist: Transform the business. Sustain the impact.' },
      { title: 'Our Principles', href: '/about/principles', description: 'The non-negotiable values guiding every client engagement.' },
      { title: 'Leadership', href: '/about/leadership', description: 'Executive team and advisory board.' },
      { title: 'Our Journey', href: '/about/journey', description: 'Milestones, evolution, and future trajectory.' },
    ],
  },
  {
    id: 'careers',
    label: 'Careers',
    dropdownTitle: 'Careers at NG Stellar',
    href: '/careers',
    type: 'link',
    inMoreGroup: true,
    tagline: 'Think Bold. Build Impact. Shape the Future with our team.',
    cta: {
      label: 'Explore Careers',
      href: '/careers',
    },
  },
  {
    id: 'contact',
    label: 'Contact',
    dropdownTitle: 'Contact NG Stellar',
    href: '/contact',
    type: 'link',
    inMoreGroup: true,
    tagline: 'Engage with our senior team to start your transformation conversation.',
    cta: {
      label: 'Contact NG Stellar',
      href: '/contact',
    },
  },
];

// Helper functions for responsive menus
export const getPrimaryNavItems = (isDesktopWide = true) => {
  if (isDesktopWide) {
    // Desktop >= 1200px: Home, Capabilities, Transformation, Sustainability, Health Check, Approach
    return NAV_ITEMS.filter((item) => ['home', 'capabilities', 'transformation', 'sustainability', 'health-check', 'approach'].includes(item.id));
  }
  // Tablet 768px - 1199px: Home, Capabilities, Transformation, Sustainability, Health Check (Approach is in More)
  return NAV_ITEMS.filter((item) => ['home', 'capabilities', 'transformation', 'sustainability', 'health-check'].includes(item.id));
};

export const getMoreNavItems = (isDesktopWide = true) => {
  if (isDesktopWide) {
    // Desktop >= 1200px: Locations, Ecosystem, Stories, Insights, About, Careers, Contact
    return NAV_ITEMS.filter((item) => ['locations', 'ecosystem', 'stories', 'insights', 'about', 'careers', 'contact'].includes(item.id));
  }
  // Tablet 768px - 1199px: Approach, Locations, Ecosystem, Stories, Insights, About, Careers, Contact
  return NAV_ITEMS.filter((item) => ['approach', 'locations', 'ecosystem', 'stories', 'insights', 'about', 'careers', 'contact'].includes(item.id));
};
