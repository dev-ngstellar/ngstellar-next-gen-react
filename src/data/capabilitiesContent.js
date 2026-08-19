// Granular Content Dictionary for all Capabilities & Subpages

export const CAPABILITIES_MASTER = {
  h1: 'Capabilities That Turn Strategy Into Action',
  tagline: 'End-to-End Capabilities Across Strategy, Brand Experience, Technology Transformation, and Digital Growth.',
  metaDescription: 'Explore the full spectrum of NG Stellar capabilities: Strategy & Research, Brand Experience, Custom Software, Mobile Apps, AI & Automation, E-commerce, and Digital Growth.',
  heroDescription:
    'Strategy without execution is ineffective; execution without strategy is wasteful. We combine strategic business advisory with specialized engineering, design, and growth capabilities to deliver measurable transformation across every layer of your business.',
  categories: [
    {
      id: 'strategy-research',
      title: 'STRATEGY & RESEARCH',
      h1: 'Strategy & Research',
      badge: 'Strategic Foundation',
      href: '/capabilities/strategy-research',
      tagline: 'Grounded Insight. Clear Direction. Actionable Roadmaps.',
      metaDescription: 'Business research, market analysis, competitive benchmarking, customer understanding, and strategic planning with NG Stellar.',
      desc: 'We conduct comprehensive business research, competitive benchmarking, market positioning analysis, and customer journey discovery to eliminate strategic guesswork and pinpoint high-return growth avenues.',
      deliverables: [
        'Business model and revenue sustainability analysis',
        'Market opportunity and addressable market sizing',
        'Competitive differentiation and value proposition mapping',
        'Customer persona, buying behavior, and journey research',
        'Multi-year strategic transformation roadmap'
      ],
      methodology: [
        { title: 'Market & Competitor Scans', desc: 'Analyzing macro-economic shifts, category disruption, and rival positioning.' },
        { title: 'Customer Discovery', desc: 'Conducting in-depth stakeholder interviews to uncover unmet customer needs.' },
        { title: 'Commercial Modeling', desc: 'Evaluating unit economics, margin potential, and strategic investment requirements.' },
        { title: 'Strategic Roadmap Design', desc: 'Structuring sequenced phases with clear milestone checkpoints and accountability.' }
      ],
      outcomes: 'Strategic clarity, de-risked capital investment, and aligned executive decision-making.',
      cta: 'Discuss Your Strategy',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      id: 'brand-experience',
      title: 'BRAND & EXPERIENCE',
      h1: 'Brand Strategy, Design & Experience',
      badge: 'Brand & CX',
      href: '/capabilities/brand-experience',
      tagline: 'Build Authoritative Brands and Compelling Customer Journeys.',
      metaDescription: 'Brand strategy, visual identity systems, UI/UX design, customer journey mapping, and conversion experience design with NG Stellar.',
      desc: 'We architect authoritative brand positioning and intuitive digital user experiences that elevate market perception, engage decision-makers, and drive customer loyalty.',
      deliverables: [
        'Brand positioning and messaging framework',
        'Complete visual identity systems and digital design tokens',
        'User research, information architecture, and UI/UX wireframes',
        'High-fidelity interactive web and mobile prototypes',
        'Customer journey mapping and conversion funnel optimization'
      ],
      methodology: [
        { title: 'Brand Differentiation Audit', desc: 'Identifying your unique enterprise value story.' },
        { title: 'Design System Engineering', desc: 'Creating scalable UI component libraries and brand guidelines.' },
        { title: 'User Testing & Iteration', desc: 'Validating interface usability with real end-user feedback.' }
      ],
      outcomes: 'Distinct market authority, higher digital engagement, and reduced user friction.',
      cta: 'Build Your Brand',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      id: 'technology-transformation',
      title: 'TECHNOLOGY TRANSFORMATION',
      h1: 'Technology Transformation & Engineering',
      badge: 'Engineering & Platforms',
      href: '/capabilities/technology-transformation',
      tagline: 'Scalable Software, Resilient Cloud Architecture, and Practical AI.',
      metaDescription: 'Custom software development, mobile apps, web applications, SaaS platforms, e-commerce, and AI automation by NG Stellar.',
      desc: 'We design and build bespoke software applications, enterprise SaaS architectures, custom workflows, and secure cloud environments engineered for scalability, speed, and business agility.',
      deliverables: [
        'Custom web applications and enterprise software systems',
        'Cross-platform iOS and Android mobile applications',
        'B2B & B2C e-commerce storefronts and ordering portals',
        'Applied AI automation workflows and intelligent data pipelines',
        'Cloud infrastructure setup, API integrations, and security hardening'
      ],
      methodology: [
        { title: 'Architectural Blueprinting', desc: 'Designing modular, scalable, and secure system topologies.' },
        { title: 'Agile Full-Stack Engineering', desc: 'Rapid bi-weekly sprint delivery with continuous integration and testing.' },
        { title: 'DevOps & Cloud Governance', desc: 'Automated deployment pipelines and enterprise-grade uptime monitoring.' }
      ],
      outcomes: 'Modernized tech stack, eliminated operational debt, and accelerated feature delivery.',
      cta: 'Discuss Your Software Project',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      id: 'digital-growth',
      title: 'DIGITAL GROWTH',
      h1: 'Digital Marketing & Growth Strategy',
      badge: 'Performance & Demand',
      href: '/capabilities/digital-growth',
      tagline: 'Sustainable Acquisition, Search Authority, and Measurable ROI.',
      metaDescription: 'Digital marketing strategy, technical SEO, high-intent content marketing, and conversion-focused performance campaigns by NG Stellar.',
      desc: 'We execute data-driven digital growth strategies designed for compounding organic visibility, qualified inbound pipeline generation, and measurable commercial return.',
      deliverables: [
        'Comprehensive digital marketing and acquisition strategy',
        'Technical SEO, on-page optimization, and structured search data',
        'High-value content marketing and thought leadership assets',
        'Targeted paid acquisition campaigns across search and social',
        'Analytics instrumentation and conversion rate optimization (CRO)'
      ],
      methodology: [
        { title: 'Audience & Search Intent Research', desc: 'Pinpointing high-intent commercial keywords and target buyer queries.' },
        { title: 'Content & Technical Optimization', desc: 'Building authoritative content backed by semantic site architecture.' },
        { title: 'Continuous Experimentation', desc: 'A/B testing landing pages and campaign creatives to maximize conversion ROI.' }
      ],
      outcomes: 'Compounding organic search traffic, qualified enterprise leads, and lower customer acquisition costs.',
      cta: 'Accelerate Your Digital Growth',
      ctaHref: '/contact/transformation-conversation'
    }
  ],

  // Specific Capability Subpages
  subpages: {
    // 1. Brand Experience Subpages
    'branding': {
      category: 'BRAND & EXPERIENCE',
      title: 'Brand Strategy & Branding',
      h1: 'Brand Strategy & Branding',
      href: '/capabilities/brand-experience/branding',
      tagline: 'Define Your Purpose. Differentiate Your Enterprise. Build Market Authority.',
      metaDescription: 'Brand strategy, market positioning, messaging frameworks, visual identity systems, and brand guidelines with NG Stellar.',
      desc: 'A powerful brand is a strategic business asset that commands price premiums, attracts top-tier talent, and fosters customer loyalty. We help organizations clarify their positioning, articulate compelling value narratives, and establish cohesive visual identity systems that resonate across all digital and physical touchpoints.',
      capabilities: [
        'Brand Positioning & Market Differentiation',
        'Core Messaging, Value Propositions & Tone of Voice',
        'Visual Identity: Logo Systems, Typography & Color Palettes',
        'Design Systems & Brand Asset Libraries',
        'Corporate Collateral, Pitch Decks & Digital Assets',
        'Internal Brand Culture & Employee Alignment'
      ],
      methodology: [
        { title: '1. Brand Discovery & Competitor Audit', desc: 'Uncovering whitespace in your category and understanding customer perceptions.' },
        { title: '2. Strategic Positioning & Narrative', desc: 'Crafting an authentic, defensible value proposition that sets you apart.' },
        { title: '3. Visual Identity System Design', desc: 'Creating typography, color tokens, and graphical components engineered for digital scale.' },
        { title: '4. Brand Governance & Asset Delivery', desc: 'Publishing comprehensive guidelines to ensure consistent execution across teams.' }
      ],
      outcomes: 'Clear market differentiation, enhanced corporate credibility, and cohesive brand touchpoints.',
      cta: 'Build Your Brand',
      ctaHref: '/contact/transformation-conversation'
    },
    'ui-ux': {
      category: 'BRAND & EXPERIENCE',
      title: 'UI/UX & Customer Experience',
      h1: 'UI/UX & Customer Experience',
      href: '/capabilities/brand-experience/ui-ux',
      tagline: 'Intuitive Interfaces. Frictionless Journeys. Meaningful Customer Interactions.',
      metaDescription: 'UI/UX design, customer journey mapping, user research, wireframing, interactive prototyping, and usability testing by NG Stellar.',
      desc: 'Exceptional digital experiences emerge from deep user empathy and meticulous interface engineering. We design intuitive, accessible, and high-converting interfaces that simplify complex workflows and delight end-users across web, tablet, and mobile platforms.',
      capabilities: [
        'User Research, Persona Development & Usability Testing',
        'Information Architecture & Navigation Flow Mapping',
        'Wireframing & Interactive Prototyping (Figma)',
        'Design System Creation & Component Libraries',
        'Mobile App & Enterprise Dashboard UI/UX Design',
        'Conversion Funnel & Checkout Flow Optimization'
      ],
      methodology: [
        { title: '1. User Research & Task Analysis', desc: 'Mapping user goals, pain points, and current drop-off barriers.' },
        { title: '2. Wireframing & Structural Design', desc: 'Structuring frictionless user pathways and logical information hierarchies.' },
        { title: '3. High-Fidelity UI & Micro-interactions', desc: 'Crafting responsive, aesthetically refined visual interfaces.' },
        { title: '4. Usability Validation & Developer Handoff', desc: 'Testing with target users and delivering production-ready design tokens.' }
      ],
      outcomes: 'Higher customer satisfaction, reduced onboarding time, lower churn, and increased conversion rates.',
      cta: 'Improve Your Customer Experience',
      ctaHref: '/contact/transformation-conversation'
    },

    // 2. Technology Transformation Subpages
    'software-development': {
      category: 'TECHNOLOGY TRANSFORMATION',
      title: 'Custom Software Development',
      h1: 'Custom Software Development',
      href: '/capabilities/technology-transformation/software-development',
      tagline: 'Purpose-Built Software Engineered for Scalability, Security & Performance.',
      metaDescription: 'Custom software development, enterprise business applications, SaaS platforms, ERP, CRM, APIs, and cloud architecture by NG Stellar.',
      desc: 'Off-the-shelf software often forces organizations into rigid, suboptimal workflows. We engineer bespoke web applications, enterprise portals, workflow automation tools, and SaaS platforms built precisely around your operational requirements and scalable for future growth.',
      capabilities: [
        'Enterprise Business Applications & Operations Portals',
        'Custom CRM, ERP, and Supply Chain Workflow Systems',
        'Multi-Tenant SaaS Platform Engineering',
        'Robust REST & GraphQL API Architecture',
        'Third-Party Software & Legacy System Integrations',
        'Database Optimization & Scalable Cloud Infrastructure'
      ],
      methodology: [
        { title: '1. Technical Scoping & Architecture Design', desc: 'Defining data models, system boundaries, and security protocols.' },
        { title: '2. Agile Sprint Delivery', desc: 'Bi-weekly sprint demos providing transparent progress and working software.' },
        { title: '3. Automated Testing & Code Quality Audits', desc: 'Rigorous unit, integration, and security test coverage.' },
        { title: '4. Cloud Deployment & CI/CD Pipelines', desc: 'Automated, zero-downtime deployment pipelines on AWS, Google Cloud, or Azure.' }
      ],
      outcomes: 'Tailored operational leverage, complete IP ownership, eliminated manual work, and unlimited scaling potential.',
      cta: 'Discuss Your Software Project',
      ctaHref: '/contact/transformation-conversation'
    },
    'mobile-applications': {
      category: 'TECHNOLOGY TRANSFORMATION',
      title: 'Mobile Application Development',
      h1: 'Mobile Application Development',
      href: '/capabilities/technology-transformation/mobile-applications',
      tagline: 'High-Performance iOS, Android & Cross-Platform Mobile Solutions.',
      metaDescription: 'Mobile app development for iOS and Android, React Native, cross-platform apps, mobile UX, and secure backend integrations with NG Stellar.',
      desc: 'We design, engineer, and deploy native and cross-platform mobile applications that provide intuitive user experiences, seamless offline capabilities, and secure backend synchronization for both consumer and enterprise use cases.',
      capabilities: [
        'Cross-Platform Mobile Apps (React Native)',
        'Native iOS (Swift) & Android (Kotlin) Development',
        'Enterprise Field Operations & Service Mobile Apps',
        'Secure Biometric Authentication & Role-Based Access',
        'Push Notifications, Geo-location & Device Integrations',
        'App Store & Google Play Deployment & Compliance'
      ],
      methodology: [
        { title: '1. Mobile Strategy & UX Prototyping', desc: 'Designing touch-first interfaces optimized for various screen sizes.' },
        { title: '2. Cross-Platform Engineering', desc: 'Building unified, maintainable codebases for rapid multi-platform release.' },
        { title: '3. API & Offline Data Sync', desc: 'Ensuring seamless performance in low-connectivity operational environments.' },
        { title: '4. App Store Submission & Maintenance', desc: 'Managing app approval guidelines, security reviews, and ongoing updates.' }
      ],
      outcomes: 'Engaging mobile touchpoints, empowered mobile workforces, and rapid time-to-market.',
      cta: 'Discuss Your Mobile Application',
      ctaHref: '/contact/transformation-conversation'
    },
    'ecommerce': {
      category: 'TECHNOLOGY TRANSFORMATION',
      title: 'E-commerce Solutions',
      h1: 'E-commerce Solutions',
      href: '/capabilities/technology-transformation/ecommerce',
      tagline: 'High-Converting Online Storefronts, Seamless Checkouts & B2B Portals.',
      metaDescription: 'Custom e-commerce platforms, B2B wholesale portals, payment gateway integrations, catalog management, and conversion optimization with NG Stellar.',
      desc: 'We build robust, secure, and conversion-optimized e-commerce platforms that streamline product catalogs, simplify checkout flows, integrate complex payment gateways, and connect seamlessly with your inventory and ERP systems.',
      capabilities: [
        'B2C Online Stores & Custom E-commerce Platforms',
        'B2B Wholesale Portals with Tiered Pricing & Credit Workflows',
        'Multi-Currency & Localized Payment Gateway Integrations',
        'Inventory Management & ERP/Logistics API Synchronization',
        'Cart Optimization, One-Click Checkout & Abandonment Recovery',
        'Customer Account Portals, Order History & Self-Service Invoicing'
      ],
      methodology: [
        { title: '1. E-Commerce Architecture Planning', desc: 'Structuring product taxonomies, variant models, and payment workflows.' },
        { title: '2. Conversion-Focused Storefront Design', desc: 'Building responsive, fast-loading shopping and checkout interfaces.' },
        { title: '3. Payment & Logistics Integration', desc: 'Connecting secure payment providers, tax engines, and automated shipping carriers.' },
        { title: '4. Launch, Security & Performance Tuning', desc: 'Ensuring PCI compliance, SSL security, and sub-second page load times.' }
      ],
      outcomes: 'Higher average order values, reduced checkout friction, and automated order processing.',
      cta: 'Launch Your E-commerce Platform',
      ctaHref: '/contact/transformation-conversation'
    },
    'ai-automation': {
      category: 'TECHNOLOGY TRANSFORMATION',
      title: 'AI & Business Automation',
      h1: 'AI & Business Automation',
      href: '/capabilities/technology-transformation/ai-automation',
      tagline: 'Practical AI Workflows, Intelligent Document Processing & Process Automation.',
      metaDescription: 'Practical AI solutions, workflow automation, intelligent chatbots, document processing, and data-driven decision support by NG Stellar.',
      desc: 'We help organizations harness the practical power of artificial intelligence and robotic process automation (RPA) to eliminate repetitive administrative burdens, extract insights from unstructured data, and accelerate operational decision-making.',
      capabilities: [
        'Automated Document Processing & Data Extraction (OCR/LLM)',
        'Intelligent Customer Support Chatbots & Knowledge Assistants',
        'Workflow Automation Across CRM, ERP, and Communication Channels',
        'Predictive Analytics & Inventory Demand Forecasting',
        'Internal Knowledge Bases & Semantic Search Systems',
        'Human-in-the-Loop AI Review & Verification Workflows'
      ],
      methodology: [
        { title: '1. Automation Opportunity Audit', desc: 'Identifying high-friction, repetitive workflows with immediate ROI potential.' },
        { title: '2. Data Readiness & Pipeline Setup', desc: 'Cleaning and structuring business data securely for model integration.' },
        { title: '3. Model Fine-Tuning & Integration', desc: 'Deploying secure, privacy-compliant AI models via robust APIs.' },
        { title: '4. Monitoring & Continuous Accuracy Tuning', desc: 'Tracking automation throughput and refining prompts and rules over time.' }
      ],
      outcomes: 'Significant reduction in manual labor hours, near-zero error rates, and rapid customer response times.',
      cta: 'Explore AI Automation Solutions',
      ctaHref: '/contact/transformation-conversation'
    },
    'digital-platforms': {
      category: 'TECHNOLOGY TRANSFORMATION',
      title: 'Digital Platform Development',
      h1: 'Digital Platform Development',
      href: '/capabilities/technology-transformation/digital-platforms',
      tagline: 'Multi-Tenant Architectures, Client Portals & Scalable SaaS Ecosystems.',
      metaDescription: 'Digital platform engineering, multi-tenant SaaS architecture, client self-service portals, API ecosystems, and scalable infrastructure with NG Stellar.',
      desc: 'We engineer multi-sided digital platforms, partner ecosystems, and enterprise client portals that enable multi-tenant access, secure role-based permissions, real-time data exchange, and seamless integration with third-party software providers.',
      capabilities: [
        'Multi-Tenant SaaS Architecture & Subscription Billing',
        'Client & Vendor Self-Service Portals',
        'Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
        'Developer APIs, Webhooks & Partner Integration Hubs',
        'Real-Time Analytics Dashboards & Custom Reporting',
        'Enterprise Security, Compliance & Data Isolation'
      ],
      methodology: [
        { title: '1. Platform Domain Modeling', desc: 'Structuring entity relationships, multi-tenant isolation, and permission matrices.' },
        { title: '2. Cloud-Native Scalable Architecture', desc: 'Leveraging microservices, serverless queues, and distributed databases.' },
        { title: '3. Intuitive Portal UI/UX Design', desc: 'Crafting clean dashboards that empower external users to self-serve.' },
        { title: '4. API Documentation & Partner Sandbox', desc: 'Enabling rapid third-party developer integration and ecosystem expansion.' }
      ],
      outcomes: 'Automated customer self-service, scalable recurring software revenue, and connected operational ecosystems.',
      cta: 'Build Your Digital Platform',
      ctaHref: '/contact/transformation-conversation'
    },

    // 3. Digital Growth Subpages
    'digital-marketing': {
      category: 'DIGITAL GROWTH',
      title: 'Digital Marketing for Sustainable Growth',
      h1: 'Digital Marketing for Sustainable Growth',
      href: '/capabilities/digital-growth/digital-marketing',
      tagline: 'Strategic Inbound Acquisition, Audience Targeting & Sustainable Growth.',
      metaDescription: 'Digital marketing strategy, multi-channel campaigns, inbound lead generation, audience targeting, and ROI tracking with NG Stellar.',
      desc: 'We design holistic digital marketing strategies that connect your brand with high-intent decision-makers, build long-term digital authority, and convert traffic into qualified commercial opportunities.',
      capabilities: [
        'Comprehensive Digital Marketing Strategy & Planning',
        'Inbound Lead Generation & Marketing Funnel Design',
        'Multi-Channel Campaign Strategy (Search, Social, Email)',
        'Audience Segmentation & Behavioral Retargeting',
        'Marketing Automation & Lead Nurturing Sequences',
        'Marketing Analytics, Attribution & ROI Measurement'
      ],
      methodology: [
        { title: '1. Audience & Channel Analysis', desc: 'Pinpointing where your target buyers research solutions.' },
        { title: '2. Full-Funnel Campaign Architecture', desc: 'Designing awareness, consideration, and decision-stage campaigns.' },
        { title: '3. Creative & Copy Execution', desc: 'Developing persuasive, benefit-driven messaging assets.' },
        { title: '4. Performance Attribution & Optimization', desc: 'Continuously refining channel spend based on actual revenue contribution.' }
      ],
      outcomes: 'Predictable inbound lead generation, improved customer lifetime value, and clear marketing ROI.',
      cta: 'Accelerate Your Digital Marketing',
      ctaHref: '/contact/transformation-conversation'
    },
    'seo': {
      category: 'DIGITAL GROWTH',
      title: 'Search Engine Optimization',
      h1: 'Search Engine Optimization',
      href: '/capabilities/digital-growth/seo',
      tagline: 'Technical Architecture, Search Intent Alignment & Organic Authority.',
      metaDescription: 'Technical SEO, on-page optimization, keyword intent research, structured data, Core Web Vitals, and semantic site architecture by NG Stellar.',
      desc: 'Sustainable SEO is built on clean technical architecture, fast page load speeds, semantic structured data, and high-value content that matches real search intent. We optimize every layer of your digital presence to secure durable organic rankings.',
      capabilities: [
        'Comprehensive Technical SEO Audits & Crawlability Fixes',
        'Core Web Vitals, Site Speed & Mobile Performance Tuning',
        'Commercial Keyword & Search Intent Mapping',
        'On-Page Optimization: Title Tags, Meta, Headings & Internal Linking',
        'Schema.org Structured Data & Rich Snippet Implementation',
        'SEO Analytics, Keyword Rank Tracking & Organic Reporting'
      ],
      methodology: [
        { title: '1. Technical Health & Architecture Audit', desc: 'Eliminating indexing roadblocks, slow render bottlenecks, and schema errors.' },
        { title: '2. Search Intent & Keyword Strategy', desc: 'Targeting commercial search terms used by active enterprise buyers.' },
        { title: '3. Content & Semantic Enhancements', desc: 'Optimizing on-page hierarchies and internal linking architectures.' },
        { title: '4. Continuous Monitoring & Authority Building', desc: 'Tracking rankings, organic conversions, and search algorithm updates.' }
      ],
      outcomes: 'Compounding organic traffic, high search engine visibility, and reduced reliance on paid advertising.',
      cta: 'Optimize Your Search Visibility',
      ctaHref: '/contact/transformation-conversation'
    },
    'content-marketing': {
      category: 'DIGITAL GROWTH',
      title: 'Content Marketing',
      h1: 'Content Marketing',
      href: '/capabilities/digital-growth/content-marketing',
      tagline: 'Thought Leadership, Strategic Briefings & High-Converting Content.',
      metaDescription: 'Content marketing strategy, thought leadership articles, case studies, executive briefings, and search-aligned content development with NG Stellar.',
      desc: 'High-performing content informs, educates, and persuades. We produce executive-level thought leadership, practical guides, in-depth service explanations, and transformation scenarios that build market trust and guide prospects through their decision cycle.',
      capabilities: [
        'Content Strategy & Editorial Calendar Planning',
        'Executive Thought Leadership & Strategic Articles',
        'In-Depth Industry Guides & Whitepapers',
        'Transformation Case Studies & Customer Success Stories',
        'Search-Aligned Pillar Pages & Knowledge Centers',
        'Repurposing Content for Social & Newsletter Distribution'
      ],
      methodology: [
        { title: '1. Topic Opportunity & Competitor Research', desc: 'Identifying knowledge gaps and questions your buyers actively search for.' },
        { title: '2. Expert Content Creation', desc: 'Writing insightful, authoritative content free of generic fluff.' },
        { title: '3. SEO & Formatting Optimization', desc: 'Structuring content with clear headings, callouts, and conversion hooks.' },
        { title: '4. Distribution & Performance Tracking', desc: 'Measuring engagement, time on page, and direct lead conversions.' }
      ],
      outcomes: 'Established thought leadership, increased organic inbound traffic, and accelerated sales cycles.',
      cta: 'Elevate Your Content Strategy',
      ctaHref: '/contact/transformation-conversation'
    },
    'performance-marketing': {
      category: 'DIGITAL GROWTH',
      title: 'Performance Marketing',
      h1: 'Performance Marketing',
      href: '/capabilities/digital-growth/performance-marketing',
      tagline: 'High-Intent Paid Acquisition, Conversion Tracking & Continuous Optimization.',
      metaDescription: 'Performance marketing, Google Search Ads, LinkedIn B2B campaigns, paid acquisition, conversion tracking, and landing page optimization with NG Stellar.',
      desc: 'We execute disciplined performance marketing campaigns across search and social channels, focusing strictly on high-intent commercial audiences, conversion rate optimization, and transparent return on advertising spend (ROAS).',
      capabilities: [
        'Google Search Ads (PPC) Targeting High-Intent Keywords',
        'LinkedIn B2B Account-Based Advertising (ABM)',
        'Conversion-Focused Dedicated Landing Page Design',
        'Advanced Pixel, Server-Side Tracking & Google Analytics 4 Setup',
        'Ad Creative, Copywriting & Continuous A/B Split Testing',
        'Budget Allocation, Bid Optimization & ROAS Reporting'
      ],
      methodology: [
        { title: '1. Commercial Intent Keyword & Audience Setup', desc: 'Filtering out low-intent clicks to maximize spend efficiency.' },
        { title: '2. High-Converting Landing Page Pairing', desc: 'Aligning ad copy directly with landing page value propositions.' },
        { title: '3. Robust Conversion Tracking', desc: 'Configuring server-side events and CRM integration for precise attribution.' },
        { title: '4. Daily Bid & Placement Optimization', desc: 'Reallocating budget to top-performing ad groups and audiences.' }
      ],
      outcomes: 'Immediate qualified lead flow, lower cost per acquisition (CPA), and positive campaign ROI.',
      cta: 'Launch Your Performance Campaign',
      ctaHref: '/contact/transformation-conversation'
    }
  }
};
