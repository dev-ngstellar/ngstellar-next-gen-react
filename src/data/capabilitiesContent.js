// Master Capabilities Content Data Structure

export const CAPABILITIES_MASTER = {
  h1: 'Our Transformation Capabilities',
  seoTitle: 'Business Transformation & Digital Capabilities | NG Stellar',
  metaDescription:
    "Explore NG Stellar's capabilities across strategy, research, branding, customer experience, technology transformation, software development, AI, automation and digital growth.",
  intro:
    'From strategy to execution, we bring together the capabilities required to help businesses transform.\n\nOur capabilities combine business thinking, creativity, technology and digital execution.',
  categories: [
    {
      id: 'strategy-research',
      title: 'Strategy & Research',
      h1: 'Strategy & Research',
      badge: 'Strategy & Insights',
      href: '/capabilities/strategy-research',
      seoTitle: 'Business Strategy & Market Research Services | NG Stellar',
      metaDescription:
        'We study businesses, markets, customers, competitors and opportunities to create strategies aligned with real business objectives.',
      heroText:
        'Transformation begins with understanding.\n\nWe study businesses, markets, customers, competitors and opportunities to create strategies aligned with real business objectives.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'Business research',
        'Market research',
        'Competitor analysis',
        'Customer research',
        'Business analysis',
        'Opportunity analysis',
        'Digital strategy',
        'Transformation strategy',
        'Growth strategy'
      ],
      outcomeTitle: 'Outcome',
      outcomesList: ['Better information.', 'Better decisions.', 'Better direction.'],
      cta: 'Discuss Strategy & Research',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      id: 'brand-experience',
      title: 'Brand & Experience',
      h1: 'Brand & Experience Transformation',
      badge: 'Brand & CX',
      href: '/capabilities/brand-experience',
      seoTitle: 'Brand Strategy & Customer Experience Transformation | NG Stellar',
      metaDescription:
        'NG Stellar helps businesses build stronger brands and meaningful customer experiences across physical and digital touchpoints.',
      heroText:
        'A strong business needs a clear identity and a consistent customer experience.\n\nNG Stellar helps businesses build stronger brands and meaningful customer experiences across physical and digital touchpoints.',
      childLinksTitle: 'Explore Brand & Experience Capabilities:',
      childLinks: [
        { title: 'Branding', href: '/capabilities/brand-experience/branding', desc: 'Define and express your brand clearly with distinct positioning and visual identity.' },
        { title: 'UI/UX & Customer Experience', href: '/capabilities/brand-experience/ui-ux', desc: 'Intuitive digital experiences combining UX research, wireframing, and usability thinking.' }
      ],
      cta: 'Discuss Brand & Experience',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      id: 'technology-transformation',
      title: 'Technology Transformation',
      h1: 'Technology Transformation',
      badge: 'Engineering & Platforms',
      href: '/capabilities/technology-transformation',
      seoTitle: 'Technology Transformation Services | NG Stellar',
      metaDescription:
        'We use technology to solve business problems, improve efficiency and create better customer experiences.',
      heroText:
        'We use technology to solve business problems, improve efficiency and create better customer experiences.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'Website design',
        'Software development',
        'Mobile applications',
        'E-commerce',
        'AI & automation',
        'Digital platforms',
        'Business applications',
        'System integration',
        'Data & analytics'
      ],
      approachTitle: 'Our Approach',
      approachSteps: ['Assess', 'Architect', 'Build', 'Integrate', 'Optimize'],
      childLinksTitle: 'Explore Technology Capabilities:',
      childLinks: [
        { title: 'Website Design', href: '/templates', desc: 'Responsive, accessible and performance-focused websites.' },
        { title: 'Software Development', href: '/capabilities/technology-transformation/software-development', desc: 'Reliable, secure and scalable custom software solutions.' },
        { title: 'Mobile Applications', href: '/capabilities/technology-transformation/mobile-applications', desc: 'Mobile applications connecting customers, employees and operations.' },
        { title: 'E-commerce', href: '/capabilities/technology-transformation/ecommerce', desc: 'Digital commerce experiences connecting products, operations and payments.' },
        { title: 'AI & Automation', href: '/capabilities/technology-transformation/ai-automation', desc: 'Practical AI to reduce repetitive work and increase productivity.' },
        { title: 'Digital Platforms', href: '/capabilities/technology-transformation/digital-platforms', desc: 'Platforms connecting customers, partners, employees and business processes.' }
      ],
      cta: 'Discuss Technology Transformation',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      id: 'digital-growth',
      title: 'Digital Growth',
      h1: 'Digital Growth',
      badge: 'Growth & Acquisition',
      href: '/capabilities/digital-growth',
      seoTitle: 'Digital Growth & Digital Marketing Services | NG Stellar',
      metaDescription:
        'Grow your digital presence with SEO, content marketing, performance marketing and conversion optimization focused on measurable business outcomes.',
      heroText:
        'Digital presence should ultimately contribute to business performance.\n\nNG Stellar combines strategy, content, search, paid campaigns and conversion optimization to help businesses attract, engage and convert customers.',
      childLinksTitle: 'Explore Digital Growth Capabilities:',
      childLinks: [
        { title: 'Digital Marketing', href: '/capabilities/digital-growth/digital-marketing', desc: 'Build visibility, generate qualified leads and improve customer acquisition.' },
        { title: 'Search Engine Optimization (SEO)', href: '/capabilities/digital-growth/seo', desc: 'Improve search engine visibility and attract relevant organic traffic.' },
        { title: 'Content Marketing', href: '/capabilities/digital-growth/content-marketing', desc: 'Content strategies that build authority, trust and customer relationships.' },
        { title: 'Performance Marketing', href: '/capabilities/digital-growth/performance-marketing', desc: 'Data-driven campaigns focused on measurable commercial outcomes.' }
      ],
      cta: 'Accelerate Digital Growth',
      ctaHref: '/contact/transformation-conversation'
    }
  ],

  // Specific Capability Subpages
  subpages: {
    // 1. BRAND & EXPERIENCE SUBPAGES
    'branding': {
      category: 'Brand & Experience',
      title: 'Branding',
      h1: 'Branding',
      href: '/capabilities/brand-experience/branding',
      seoTitle: 'Brand Strategy & Branding Services | NG Stellar',
      metaDescription:
        'We help businesses define and express their brand clearly with positioning, visual identity, and brand guidelines.',
      heroText: 'We help businesses define and express their brand clearly.',
      intro: 'We help businesses define and express their brand clearly.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'Brand positioning',
        'Brand strategy',
        'Visual identity',
        'Brand guidelines',
        'Messaging',
        'Digital brand presence',
        'Marketing assets',
        'Brand consistency'
      ],
      outcomeTitle: 'Outcome',
      outcomeText: 'A credible, consistent and memorable brand.',
      cta: 'Discuss Branding',
      ctaHref: '/contact/transformation-conversation'
    },
    'ui-ux': {
      category: 'Brand & Experience',
      title: 'UI/UX & Customer Experience',
      h1: 'UI/UX & Customer Experience',
      href: '/capabilities/brand-experience/ui-ux',
      seoTitle: 'UI UX Design & Customer Experience Services | NG Stellar',
      metaDescription:
        'Great experiences make technology easier to use and businesses easier to engage with. UI/UX design and customer experience optimization by NG Stellar.',
      heroText:
        'Great experiences make technology easier to use and businesses easier to engage with.\n\nWe combine user research, information architecture, wireframing, prototyping and usability thinking to create intuitive digital experiences.',
      intro:
        'Great experiences make technology easier to use and businesses easier to engage with.\n\nWe combine user research, information architecture, wireframing, prototyping and usability thinking to create intuitive digital experiences.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'UX research',
        'User journeys',
        'Information architecture',
        'Wireframes',
        'UI design',
        'Prototyping',
        'Usability testing',
        'Design systems',
        'Customer experience optimization'
      ],
      outcomeTitle: 'Outcome',
      outcomesList: ['Simpler experiences.', 'Better engagement.', 'Higher conversion.'],
      cta: 'Improve UI/UX & Experience',
      ctaHref: '/contact/transformation-conversation'
    },

    // 2. TECHNOLOGY TRANSFORMATION SUBPAGES
    'software-development': {
      category: 'Technology Transformation',
      title: 'Software Development',
      h1: 'Software Development',
      href: '/capabilities/technology-transformation/software-development',
      seoTitle: 'Custom Software Development Services | NG Stellar',
      metaDescription:
        'We build reliable, secure and scalable software solutions aligned with business requirements.',
      heroText:
        'We build reliable, secure and scalable software solutions aligned with business requirements.',
      intro:
        'We build reliable, secure and scalable software solutions aligned with business requirements.',
      capabilitiesTitle: 'We Develop',
      capabilities: [
        'Custom business applications',
        'Web applications',
        'SaaS platforms',
        'Portals',
        'Workflow systems',
        'Enterprise applications',
        'API integrations',
        'Business automation platforms'
      ],
      focusTitle: 'Our Focus',
      focusList: ['Performance', 'Security', 'Scalability', 'Maintainability'],
      cta: 'Discuss Software Development',
      ctaHref: '/contact/transformation-conversation'
    },
    'mobile-applications': {
      category: 'Technology Transformation',
      title: 'Mobile Application Development',
      h1: 'Mobile Application Development',
      href: '/capabilities/technology-transformation/mobile-applications',
      seoTitle: 'Mobile App Development Services | NG Stellar',
      metaDescription:
        'We design and develop mobile applications that connect customers, employees and business operations.',
      heroText:
        'We design and develop mobile applications that connect customers, employees and business operations.',
      intro:
        'We design and develop mobile applications that connect customers, employees and business operations.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'Android applications',
        'iOS applications',
        'Cross-platform applications',
        'Field-force applications',
        'Customer applications',
        'Business applications',
        'Mobile workflow solutions',
        'API integration'
      ],
      outcomeTitle: 'Outcome',
      outcomeText: 'Mobile experiences designed around real business needs.',
      cta: 'Discuss Mobile Applications',
      ctaHref: '/contact/transformation-conversation'
    },
    'ecommerce': {
      category: 'Technology Transformation',
      title: 'E-commerce Transformation',
      h1: 'E-commerce Transformation',
      href: '/capabilities/technology-transformation/ecommerce',
      seoTitle: 'E-commerce Development & Digital Commerce Solutions | NG Stellar',
      metaDescription:
        'We help businesses build and improve digital commerce experiences that connect products, customers, operations and payments.',
      heroText:
        'We help businesses build and improve digital commerce experiences that connect products, customers, operations and payments.',
      intro:
        'We help businesses build and improve digital commerce experiences that connect products, customers, operations and payments.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'E-commerce websites',
        'Product catalogues',
        'Shopping experiences',
        'Payment integration',
        'Order management',
        'Customer accounts',
        'Inventory integration',
        'Analytics',
        'Marketing integration',
        'Custom commerce platforms'
      ],
      outcomeTitle: 'Outcome',
      outcomeText: 'A scalable digital commerce experience aligned with business growth.',
      cta: 'Discuss E-commerce Transformation',
      ctaHref: '/contact/transformation-conversation'
    },
    'ai-automation': {
      category: 'Technology Transformation',
      title: 'AI & Business Automation',
      h1: 'AI & Business Automation',
      href: '/capabilities/technology-transformation/ai-automation',
      seoTitle: 'AI & Business Automation Solutions | NG Stellar',
      metaDescription:
        'Use AI and automation to reduce repetitive work, improve decision-making, increase productivity and transform business operations with NG Stellar.',
      heroText:
        'AI should create measurable business value—not simply become another technology experiment.\n\nWe identify practical opportunities to use AI and automation across business operations.',
      intro:
        'AI should create measurable business value—not simply become another technology experiment.\n\nWe identify practical opportunities to use AI and automation across business operations.',
      capabilitiesTitle: 'Opportunities',
      capabilities: [
        'Process automation',
        'Customer support',
        'Lead management',
        'Document processing',
        'Business intelligence',
        'Content workflows',
        'Marketing automation',
        'Internal knowledge systems',
        'AI assistants',
        'Predictive analytics'
      ],
      approachTitle: 'Our Approach',
      approachSteps: ['Identify', 'Evaluate', 'Pilot', 'Implement', 'Measure'],
      cta: 'Explore AI & Automation',
      ctaHref: '/contact/transformation-conversation'
    },
    'digital-platforms': {
      category: 'Technology Transformation',
      title: 'Digital Platforms',
      h1: 'Digital Platforms',
      href: '/capabilities/technology-transformation/digital-platforms',
      seoTitle: 'Digital Platform Development Services | NG Stellar',
      metaDescription:
        'We design and develop digital platforms that connect customers, employees, partners and business processes.',
      heroText:
        'We design and develop digital platforms that connect customers, employees, partners and business processes.',
      intro:
        'We design and develop digital platforms that connect customers, employees, partners and business processes.',
      capabilitiesTitle: 'Examples',
      capabilities: [
        'Customer portals',
        'Partner portals',
        'Business platforms',
        'SaaS products',
        'Marketplaces',
        'Internal platforms',
        'Workflow platforms',
        'Data-driven applications'
      ],
      focusTitle: 'Focus',
      focusText: 'Scalable architecture + user experience + business integration',
      cta: 'Discuss Digital Platforms',
      ctaHref: '/contact/transformation-conversation'
    },

    // 3. DIGITAL GROWTH SUBPAGES
    'digital-marketing': {
      category: 'Digital Growth',
      title: 'Digital Marketing',
      h1: 'Digital Marketing',
      href: '/capabilities/digital-growth/digital-marketing',
      seoTitle: 'Digital Marketing Services for Business Growth | NG Stellar',
      metaDescription:
        'We help businesses build visibility, generate qualified leads and improve digital customer acquisition.',
      heroText:
        'We help businesses build visibility, generate qualified leads and improve digital customer acquisition.',
      intro:
        'We help businesses build visibility, generate qualified leads and improve digital customer acquisition.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'Digital marketing strategy',
        'SEO',
        'Social media',
        'Content marketing',
        'Paid advertising',
        'Lead generation',
        'Conversion optimization',
        'Analytics',
        'Campaign management'
      ],
      outcomeTitle: 'Outcome',
      outcomesList: ['More relevant traffic.', 'Better leads.', 'Measurable growth.'],
      cta: 'Discuss Digital Marketing',
      ctaHref: '/contact/transformation-conversation'
    },
    'seo': {
      category: 'Digital Growth',
      title: 'Search Engine Optimization',
      h1: 'Search Engine Optimization',
      href: '/capabilities/digital-growth/seo',
      seoTitle: 'SEO Services & Search Engine Optimization | NG Stellar',
      metaDescription:
        'We help businesses improve their visibility in search engines and attract relevant organic traffic.',
      heroText:
        'We help businesses improve their visibility in search engines and attract relevant organic traffic.',
      intro:
        'We help businesses improve their visibility in search engines and attract relevant organic traffic.',
      capabilitiesTitle: 'SEO Capabilities',
      capabilities: [
        'Technical SEO',
        'Keyword strategy',
        'On-page SEO',
        'Content strategy',
        'Local SEO',
        'Website optimization',
        'Search performance analysis',
        'Conversion-focused SEO'
      ],
      goalTitle: 'Goal',
      goalText: 'Be found by the right customers at the right moment.',
      cta: 'Discuss Search Engine Optimization',
      ctaHref: '/contact/transformation-conversation'
    },
    'content-marketing': {
      category: 'Digital Growth',
      title: 'Content Marketing',
      h1: 'Content Marketing',
      href: '/capabilities/digital-growth/content-marketing',
      seoTitle: 'Content Marketing Strategy & Services | NG Stellar',
      metaDescription:
        'Good content builds authority, trust and customer relationships. Content strategies designed around business objectives with NG Stellar.',
      heroText:
        'Good content builds authority, trust and customer relationships.\n\nWe create content strategies designed around business objectives and customer journeys.',
      intro:
        'Good content builds authority, trust and customer relationships.\n\nWe create content strategies designed around business objectives and customer journeys.',
      capabilitiesTitle: 'Content Areas',
      capabilities: [
        'Website content',
        'Thought leadership',
        'Blogs',
        'Social content',
        'Video',
        'Case studies',
        'Educational content',
        'Lead-generation content'
      ],
      outcomeTitle: 'Outcome',
      outcomeText: 'Content that informs, builds trust and contributes to growth.',
      cta: 'Discuss Content Marketing',
      ctaHref: '/contact/transformation-conversation'
    },
    'performance-marketing': {
      category: 'Digital Growth',
      title: 'Performance Marketing',
      h1: 'Performance Marketing',
      href: '/capabilities/digital-growth/performance-marketing',
      seoTitle: 'Performance Marketing & Lead Generation Services | NG Stellar',
      metaDescription:
        'We use data-driven campaigns to help businesses generate qualified traffic, leads and measurable commercial outcomes.',
      heroText:
        'We use data-driven campaigns to help businesses generate qualified traffic, leads and measurable commercial outcomes.',
      intro:
        'We use data-driven campaigns to help businesses generate qualified traffic, leads and measurable commercial outcomes.',
      capabilitiesTitle: 'Capabilities',
      capabilities: [
        'Google Ads',
        'Meta Ads',
        'Lead generation',
        'Campaign strategy',
        'Landing pages',
        'Conversion optimization',
        'Remarketing',
        'Analytics',
        'ROI measurement'
      ],
      philosophyTitle: 'Our Philosophy',
      philosophyText: 'We optimize for business outcomes, not vanity metrics.',
      cta: 'Discuss Performance Marketing',
      ctaHref: '/contact/transformation-conversation'
    }
  }
};
