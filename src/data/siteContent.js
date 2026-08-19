// Master Site Content Data Structure for Hubs & Subpages

export const TRANSFORMATION_HUB = {
  h1: 'Business Transformation for Sustainable Growth',
  tagline: 'Reinvent Operating Models. Modernize Workflows. Build Lasting Competitive Advantage.',
  metaDescription: 'NG Stellar helps organizations transform business models, people, processes, and technology to build agile, high-performing, and resilient enterprises.',
  heroDescription:
    'True business transformation is not simply introducing new software or restructuring teams in isolation. It is the deliberate, synchronized alignment of business strategy, organizational talent, lean operations, and modern technology architectures to drive compounding economic value.',
  dimensions: [
    { title: 'Business Strategy', desc: 'Clarifying business models, customer value propositions, pricing architectures, and competitive moats.' },
    { title: 'Organization & Leadership', desc: 'Empowering leadership, flattening communication barriers, and fostering an agile, accountability-driven culture.' },
    { title: 'People & Skills', desc: 'Upskilling talent, aligning KPIs with enterprise goals, and cultivating continuous learning.' },
    { title: 'Process & Workflows', desc: 'Eliminating operational waste, removing organizational friction, and standardizing agile operating procedures.' },
    { title: 'Technology & Architecture', desc: 'Deploying scalable cloud systems, custom software platforms, and AI automation to unlock productivity.' },
    { title: 'Customer Experience', desc: 'Designing intuitive customer journeys, friction-free digital touchpoints, and value-focused brand interactions.' },
    { title: 'Sustainability & Governance', desc: 'Embedding ethical oversight, resource stewardship, and risk resilience into daily operations.' },
  ],
  frameworkStages: [
    { step: '01', title: 'Discover', desc: 'Uncovering root operational challenges, market dynamics, and leadership objectives.' },
    { step: '02', title: 'Diagnose', desc: 'Conducting structured multi-dimensional health checks and capability gap assessments.' },
    { step: '03', title: 'Design', desc: 'Architecting the target operating model, technology blueprint, and phased transformation roadmap.' },
    { step: '04', title: 'Connect', desc: 'Mobilizing cross-functional teams, technology partners, and specialized domain advisors.' },
    { step: '05', title: 'Transform', desc: 'Executing iterative delivery sprints, agile workflow re-engineering, and system deployments.' },
    { step: '06', title: 'Sustain', desc: 'Embedding governance frameworks, KPIs, and continuous optimization mechanisms.' },
  ],
  areas: [
    {
      id: 'business',
      title: 'Business Transformation',
      route: '/transformation/business',
      desc: 'Realign business models, revenue channels, and strategic positioning to capture new market opportunities.',
      badge: 'Strategy & Growth'
    },
    {
      id: 'people-organization',
      title: 'People & Organization Transformation',
      route: '/transformation/people-organization',
      desc: 'Cultivate leadership agility, upskill teams, and structure organizational talent for high performance.',
      badge: 'Human Capital'
    },
    {
      id: 'process-operations',
      title: 'Process & Operational Transformation',
      route: '/transformation/process-operations',
      desc: 'Eliminate bottlenecks, streamline end-to-end workflows, and introduce lean operational discipline.',
      badge: 'Operations'
    },
    {
      id: 'technology',
      title: 'Technology Transformation',
      route: '/transformation/technology',
      desc: 'Modernize legacy infrastructure, build bespoke digital platforms, and automate core workflows with AI.',
      badge: 'Technology'
    },
  ],
  ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
  ctaSecondary: { label: 'Request a Transformation Health Check', href: '/transformation-health-check' },
};

export const SUSTAINABILITY_HUB = {
  h1: 'Sustainability for Long-Term Business Value',
  tagline: 'Balance Profitability, People, Governance, and Environmental Stewardship for Compounding Resilience.',
  metaDescription: 'NG Stellar helps organizations embed economic durability, social equity, ethical governance, and environmental responsibility into core business operations.',
  heroDescription:
    'Sustainable business is resilient business. We help forward-thinking leaders integrate sustainability directly into their commercial operating models—transforming compliance obligations into long-term strategic advantages.',
  dimensions: [
    {
      id: 'economic',
      title: 'Economic Sustainability',
      route: '/sustainability/economic',
      tagline: 'Financial Durability & Long-Term Value Creation',
      desc: 'Building sustainable revenue models, optimizing cost structures, managing capital efficiently, and designing business models that endure market disruptions.',
      focus: ['Sustainable business models', 'Revenue diversification', 'Operational efficiency', 'Long-term capital planning', 'Business continuity & risk mitigation']
    },
    {
      id: 'people-social',
      title: 'People & Social Sustainability',
      route: '/sustainability/people-social',
      tagline: 'Human-Centered Growth & Workplace Well-Being',
      desc: 'Fostering equitable workplace practices, employee safety and well-being, continuous skill development, and meaningful community stakeholder engagement.',
      focus: ['Workplace well-being & safety', 'Inclusive talent practices', 'Continuous capability building', 'Employee retention & culture', 'Community & stakeholder value']
    },
    {
      id: 'governance',
      title: 'Governance & Responsible Business',
      route: '/sustainability/governance',
      tagline: 'Integrity, Transparency & Ethical Oversight',
      desc: 'Establishing clear accountability structures, robust risk oversight, regulatory compliance mechanisms, and ethical operating policies.',
      focus: ['Corporate governance frameworks', 'Regulatory compliance & risk audits', 'Ethical conduct & transparency', 'Board & executive oversight', 'Policy & internal controls']
    },
    {
      id: 'environmental',
      title: 'Environmental Responsibility',
      route: '/sustainability/environmental',
      tagline: 'Resource Efficiency & Operational Stewardship',
      desc: 'Practical strategies for reducing waste, optimizing energy consumption, streamlining supply chain logistics, and managing environmental footprints.',
      focus: ['Energy efficiency & cost reduction', 'Waste minimization & circular practices', 'Supply chain sustainability', 'Environmental footprint assessment', 'Regulatory compliance']
    },
    {
      id: 'business-resilience',
      title: 'Business Resilience',
      route: '/sustainability/business-resilience',
      tagline: 'Agility & Continuity in Volatile Environments',
      desc: 'Preparing organizations to anticipate market shocks, adapt to supply chain volatility, and ensure seamless continuity across critical operations.',
      focus: ['Crisis readiness & contingency planning', 'Supply chain diversification', 'Operational redundancy', 'Cyber & data security resilience', 'Adaptive leadership workflows']
    },
  ],
  ctaPrimary: { label: 'Discuss Your Sustainability Priorities', href: '/contact/transformation-conversation' },
  ctaSecondary: { label: 'Explore Sustainability Assessment', href: '/transformation-health-check/sustainability' },
};

export const HEALTH_CHECK_HUB = {
  h1: 'Transformation Health Check',
  tagline: 'Understand Where Your Organization Stands. Pinpoint High-Impact Transformation Priorities.',
  metaDescription: 'Evaluate your organization across business model, people, processes, technology, and sustainability dimensions with the NG Stellar Transformation Health Check diagnostic.',
  heroDescription:
    'Before embarking on a major transformation initiative, leadership teams need diagnostic clarity. The NG Stellar Transformation Health Check benchmarks your current capabilities against industry standards, uncovers operational bottlenecks, and charts a clear roadmap for action.',
  assessmentSubpages: [
    {
      id: 'business',
      href: '/transformation-health-check/business',
      title: 'Business Transformation Assessment',
      shortTitle: 'Business Assessment',
      h1: 'Business Transformation Assessment',
      desc: 'Evaluate your business model, strategy, market position, customer value, revenue opportunities, and growth barriers to define clear transformation priorities.',
      whatWeAssess: [
        'Business model viability and revenue sustainability',
        'Market positioning and competitive differentiation',
        'Customer value proposition and churn drivers',
        'Growth barriers, margin leaks, and monetization gaps',
        'Target operating model alignment with strategic vision'
      ],
      keyQuestions: [
        'Does our current business model generate resilient, recurring value across market cycles?',
        'Where are the primary friction points in our revenue generation engine?',
        'How well-aligned is our strategic vision with day-to-day capital and resource allocation?',
        'What emerging market threats or customer shifts require proactive business model adaptation?'
      ],
      outcomes: [
        'Comprehensive assessment of commercial strengths and vulnerabilities',
        'Clear identification of untapped revenue expansion and cost optimization opportunities',
        'Prioritized list of strategic transformation initiatives ranked by business impact and feasibility'
      ],
      fromAssessmentToAction: 'Following the Business Transformation Assessment, our advisory team delivers an executive briefing and works with your leadership to construct an executable transformation roadmap.',
      cta: 'Request a Business Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'people',
      href: '/transformation-health-check/people',
      title: 'People & Organization Assessment',
      shortTitle: 'People Assessment',
      h1: 'People & Organization Assessment',
      desc: 'Assess organizational structure, leadership alignment, talent capabilities, workplace culture, and change readiness to unlock your workforce potential.',
      whatWeAssess: [
        'Organizational structure and reporting hierarchy efficiency',
        'Leadership alignment on strategic transformation priorities',
        'Roles, responsibilities, and decision-making clarity (RACI)',
        'Critical skill gaps in digital, analytics, and modern operations',
        'Workplace culture, collaboration friction, and change readiness'
      ],
      keyQuestions: [
        'Do our teams have the specific capabilities required to execute our future-state strategy?',
        'Where do communication silos and decision bottlenecks slow down operational agility?',
        'How receptive and prepared is our organizational culture for continuous transformation?'
      ],
      outcomes: [
        'Organization capability matrix highlighting critical skill shortages and leadership gaps',
        'Actionable change enablement plan to prepare teams for operational modernization',
        'Streamlined role and governance structure to accelerate decision-making velocity'
      ],
      fromAssessmentToAction: 'We translate organizational findings into targeted leadership workshops, capability upskilling tracks, and agile structural redesigns.',
      cta: 'Assess Your Organization',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'process',
      href: '/transformation-health-check/process',
      title: 'Process & Operations Assessment',
      shortTitle: 'Process Assessment',
      h1: 'Process & Operations Assessment',
      desc: 'Identify workflow bottlenecks, manual work, duplication, and operational inefficiencies to design lean, automated operating procedures.',
      whatWeAssess: [
        'End-to-end core operational workflows and handoff points',
        'Process bottlenecks, manual spreadsheet dependencies, and cycle times',
        'Operational duplication, error rates, and compliance vulnerabilities',
        'Readiness for workflow automation and digital tooling',
        'Service level agreements (SLAs) and operational performance tracking'
      ],
      keyQuestions: [
        'Which core business workflows consume the most manual hours and create operational lag?',
        'Where do cross-department handoffs cause customer dissatisfaction or data loss?',
        'How can routine administrative and reporting tasks be automated to free up high-value talent?'
      ],
      outcomes: [
        'Visual process mapping showing critical bottlenecks and waste hot-spots',
        'Quantified cost-saving and throughput improvement opportunities',
        'Standardized operational SOP recommendations and automation candidate list'
      ],
      fromAssessmentToAction: 'Our operational consultants partner with your teams to re-engineer workflows, eliminate friction, and implement automated operational platforms.',
      cta: 'Assess Your Operations',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'technology',
      href: '/transformation-health-check/technology',
      title: 'Technology Transformation Assessment',
      shortTitle: 'Technology Assessment',
      h1: 'Technology Transformation Assessment',
      desc: 'Evaluate your technology landscape, software applications, infrastructure, data pipelines, integrations, digital maturity, and AI opportunities.',
      whatWeAssess: [
        'Current software applications, ERP, CRM, and bespoke system stack',
        'Cloud infrastructure reliability, scalability, and security posture',
        'Data architecture, pipeline integrity, and reporting accessibility',
        'API connectivity, legacy software technical debt, and system fragmentation',
        'Practical artificial intelligence (AI) and robotic process automation (RPA) opportunities'
      ],
      keyQuestions: [
        'Does our technology stack support or constrain our long-term business growth ambitions?',
        'Where does legacy technical debt pose operational, security, or maintenance risks?',
        'Which modern digital platforms and AI tools can deliver immediate operational leverage?'
      ],
      outcomes: [
        'Technology landscape map detailing architectural debt, redundancy, and security posture',
        'Cloud modernization and custom software development priority matrix',
        'Vendor and infrastructure total cost of ownership (TCO) optimization plan'
      ],
      fromAssessmentToAction: 'We architect modern digital solutions, custom web and mobile applications, and AI integrations that turn technological constraints into competitive accelerators.',
      cta: 'Assess Your Technology Landscape',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'sustainability',
      href: '/transformation-health-check/sustainability',
      title: 'Sustainability Assessment',
      shortTitle: 'Sustainability Assessment',
      h1: 'Sustainability Assessment',
      desc: 'Benchmark your enterprise against the 5 dimensions of sustainability: Economic durability, People & Social well-being, Governance rigor, Environmental stewardship, and Business Resilience.',
      whatWeAssess: [
        'Economic sustainability: cash flow resilience, margin stability, and recurring revenue models',
        'People & Social: workplace health, fair talent practices, and employee retention',
        'Governance: corporate oversight, ethical controls, and regulatory audit compliance',
        'Environmental: resource efficiency, energy optimization, and footprint transparency',
        'Business Resilience: business continuity plans, crisis readiness, and supply chain buffers'
      ],
      keyQuestions: [
        'How resilient is our operating model against macro-economic volatility and regulatory changes?',
        'Are our governance and compliance safeguards adequate to protect shareholder value?',
        'Where can resource optimization directly reduce operational overhead while advancing environmental responsibility?'
      ],
      outcomes: [
        '5-Dimensional Sustainability Scorecard benchmarking your current maturity level',
        'Gap analysis identifying regulatory compliance exposures and operational vulnerabilities',
        'Actionable sustainability roadmap aligning ESG goals with bottom-line profitability'
      ],
      fromAssessmentToAction: 'We assist executive teams in institutionalizing sustainable governance policies, operational efficiency initiatives, and resilience safeguards.',
      cta: 'Request a Sustainability Assessment',
      ctaHref: '/contact/health-check'
    },
    {
      id: 'roadmap',
      href: '/transformation-health-check/roadmap',
      title: 'Transformation Roadmap',
      shortTitle: 'Transformation Roadmap',
      h1: 'Transformation Roadmap',
      desc: 'Learn how NG Stellar synthesizes assessment findings across business, talent, process, technology, and sustainability into an actionable, phased transformation blueprint.',
      whatWeAssess: [
        'Current State: Synthesizing diagnostic baselines and risk areas',
        'Priority Areas: Ranking initiatives by business impact, urgency, and feasibility',
        'Future State: Defining the target operating model and expected performance metrics',
        'Transformation Initiatives: Scoping discrete workstreams across strategy, people, processes, and tech',
        'Implementation Phases: Structuring agile 90-day sprints and milestone checkpoints',
        'Success Measures: Establishing clear operational and financial KPIs to track value realization'
      ],
      keyQuestions: [
        'How do we sequence transformation initiatives to deliver immediate quick wins while building long-term capability?',
        'What governance structure ensures accountability across cross-functional workstreams?',
        'How will progress and return on investment be measured at each phase?'
      ],
      outcomes: [
        'Executive Transformation Blueprint ready for board and leadership alignment',
        'Phased implementation timeline with resource allocation and dependency mapping',
        'Real-time KPI dashboard framework to govern value delivery'
      ],
      fromAssessmentToAction: 'Our senior advisory and technical implementation teams remain embedded alongside your leadership to co-execute every phase of the transformation roadmap.',
      cta: 'Build Your Transformation Roadmap',
      ctaHref: '/contact/transformation-conversation'
    },
  ]
};

export const APPROACH_HUB = {
  h1: 'Our Approach to Transformation',
  tagline: 'A Structured, Six-Stage Framework Engineered for Compounding, Sustainable Impact.',
  metaDescription: 'Explore the NG Stellar 6-stage transformation methodology: Discover, Diagnose, Design, Connect, Transform, and Sustain. From assessment to continuous value realization.',
  heroDescription:
    'Successful transformation requires disciplined execution. Our structured six-stage methodology guides organizations from initial diagnostic discovery through solution design, partner ecosystem mobilization, technical execution, and long-term governance.',
  stages: [
    {
      step: '01',
      id: 'discover',
      title: 'Discover',
      h1: 'Discover: Understand Before You Transform',
      tagline: 'Understand Context, Goals & Challenges',
      href: '/approach/discover',
      desc: 'Every meaningful transformation begins with deep listening and contextual understanding. We engage with executive leadership, operational managers, frontline staff, and key customers to establish a 360-degree baseline of business realities, market forces, strategic aspirations, and core challenges.',
      activities: [
        'Executive stakeholder alignment interviews',
        'Current-state operational and financial baseline review',
        'Market dynamics and competitive positioning analysis',
        'Customer journey and satisfaction inquiry',
        'Strategic aspiration and priority goal setting'
      ],
      deliverables: ['Contextual Discovery Report', 'Stakeholder Alignment Brief', 'Transformation Scope Definition'],
      cta: 'Start Your Transformation Conversation',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      step: '02',
      id: 'diagnose',
      title: 'Diagnose',
      h1: 'Diagnose: Identify What Needs to Change',
      tagline: 'Identify Root Causes & Bottlenecks',
      href: '/approach/diagnose',
      desc: 'Using our Transformation Health Check framework, we evaluate your organization across business model, organizational culture, process efficiency, technology maturity, and sustainability readiness. We look beyond surface symptoms to isolate the root bottlenecks constraining growth.',
      activities: [
        '5-Dimension Health Check diagnostic execution',
        'End-to-end process workflow mapping and waste audit',
        'Technology stack and architectural debt assessment',
        'Organizational capability matrix and skills gap analysis',
        'Root cause identification and priority scoring'
      ],
      deliverables: ['Diagnostic Assessment Scorecard', 'Process Bottleneck Heatmap', 'Technology Debt Audit'],
      cta: 'Request a Transformation Health Check',
      ctaHref: '/transformation-health-check'
    },
    {
      step: '03',
      id: 'design',
      title: 'Design',
      h1: 'Design: Create the Transformation Blueprint',
      tagline: 'Create the Transformation Blueprint',
      href: '/approach/design',
      desc: 'We translate diagnostic insights into a comprehensive target operating model, technology architecture, and phased transformation blueprint. Every initiative is mapped against expected business outcomes, investment requirements, and risk mitigation strategies.',
      activities: [
        'Target Operating Model (TOM) architecture',
        'Digital platform and technology solution design',
        'Process re-engineering and automation specifications',
        'Change management and communication planning',
        'Multi-phase implementation roadmap with 90-day milestone gates'
      ],
      deliverables: ['Target Operating Model Design', 'Transformation Architecture Blueprint', 'Phased Implementation Roadmap'],
      cta: 'Design Your Transformation Blueprint',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      step: '04',
      id: 'connect',
      title: 'Connect',
      h1: 'Connect: Bring People, Technology & Partners Together',
      tagline: 'Mobilize Teams & Ecosystem Partners',
      href: '/approach/connect',
      desc: 'Transformation cannot happen in isolation. We connect internal teams, senior leadership, subject matter experts, technology vendors, and ecosystem partners into a unified delivery coalition with shared governance and clear accountability.',
      activities: [
        'Cross-functional transformation squad mobilization',
        'Ecosystem partner onboarding and API integration alignment',
        'Steering committee and governance charter establishment',
        'Change enablement and team readiness workshops',
        'Vendor and platform selection alignment'
      ],
      deliverables: ['Transformation Governance Charter', 'Ecosystem Integration Matrix', 'Change Enablement Plan'],
      cta: 'Explore Ecosystem Partnerships',
      ctaHref: '/ecosystem'
    },
    {
      step: '05',
      id: 'transform',
      title: 'Transform',
      h1: 'Transform: Turn Strategy Into Action',
      tagline: 'Execute with Speed, Agility & Precision',
      href: '/approach/transform',
      desc: 'We bring the blueprint to life through disciplined, agile execution sprints. Whether engineering bespoke software platforms, automating critical workflows, or modernizing operational protocols, we prioritize rapid time-to-value and minimal business disruption.',
      activities: [
        'Agile development sprints and software deployment',
        'Process re-engineering and workflow automation rollout',
        'Legacy system migration and cloud platform deployment',
        'Frontline staff training and SOP rollout',
        'Sprint milestone demonstrations and business value tracking'
      ],
      deliverables: ['Functional Software Platforms', 'Automated Operating Workflows', 'Sprint Value Realization Reports'],
      cta: 'Execute Your Transformation',
      ctaHref: '/contact/transformation-conversation'
    },
    {
      step: '06',
      id: 'sustain',
      title: 'Sustain',
      h1: 'Sustain: Make Transformation Last',
      tagline: 'Institutionalize Continuous Value & Governance',
      href: '/approach/sustain',
      desc: 'Transformation is not a one-time project; it is a permanent organizational capability. We establish ongoing governance rhythms, performance dashboards, and continuous improvement loops to ensure your operational gains compound over time.',
      activities: [
        'Real-time KPI and operational health dashboard deployment',
        'Executive governance and continuous review cadences',
        'Capability transfer and internal team empowerment',
        'Sustainability and resilience compliance auditing',
        'Ongoing iterative optimization and technology maintenance'
      ],
      deliverables: ['Executive KPI Dashboard', 'Capability Transfer Playbook', 'Annual Resilience & Sustainability Audit'],
      cta: 'Build Sustainable Transformation',
      ctaHref: '/contact/transformation-conversation'
    },
  ]
};

export const ECOSYSTEM_HUB = {
  h1: 'Our Transformation Ecosystem',
  tagline: 'Collaborating with Industry Specialists, Technology Innovators, and Strategic Partners.',
  metaDescription: 'Learn how NG Stellar collaborates with expert networks, industry advisors, technology providers, professional services, startups, and implementation partners.',
  heroDescription:
    'Complex business challenges require multidisciplinary expertise. The NG Stellar Transformation Ecosystem unites domain specialists, software vendors, industry advisors, and startup innovators into an integrated network that delivers tailored solutions for our clients.',
  partnerships: [
    {
      id: 'expert-network',
      title: 'Expert Network',
      badge: 'Domain Specialists',
      href: '/ecosystem/expert-network',
      desc: 'Senior domain advisors, corporate strategists, industry veterans, and specialized consultants who provide deep functional insights on complex transformation projects.',
      focus: ['Industry-specific advisory', 'Executive mentorship', 'Regulatory & compliance guidance', 'Functional domain expertise']
    },
    {
      id: 'industry-partners',
      title: 'Industry Partners',
      badge: 'Sector Leaders',
      href: '/ecosystem/industry-partners',
      desc: 'Industry associations, trade bodies, and sectoral leaders collaborating to identify emerging trends, benchmark operational standards, and pioneer sustainable practices.',
      focus: ['Industry benchmarking', 'Regulatory harmonization', 'Sectoral research', 'Knowledge sharing initiatives']
    },
    {
      id: 'technology-partners',
      title: 'Technology Partners',
      badge: 'Platforms & Cloud',
      href: '/ecosystem/technology-partners',
      desc: 'Leading cloud platforms, enterprise SaaS providers, API networks, and developer tool ecosystems that power our digital engineering architectures.',
      focus: ['Cloud infrastructure', 'Enterprise SaaS integrations', 'Cybersecurity frameworks', 'Scalable database architectures']
    },
    {
      id: 'professional-partners',
      title: 'Professional Partners',
      badge: 'Legal & Advisory',
      href: '/ecosystem/professional-partners',
      desc: 'Corporate legal advisors, audit firms, tax consultants, and financial restructuring specialists who ensure compliance and governance rigor.',
      focus: ['Corporate compliance', 'Governance auditing', 'Financial modeling', 'Risk management frameworks']
    },
    {
      id: 'startups',
      title: 'Startups',
      badge: 'Innovation Drivers',
      href: '/ecosystem/startups',
      desc: 'Emerging technology ventures and agile startup innovators bringing bleeding-edge automation, AI models, and specialized digital capabilities to enterprise problems.',
      focus: ['Applied AI & automation', 'Next-gen customer experience', 'Agile workflow innovation', 'Disruptive business models']
    },
    {
      id: 'incubators-accelerators',
      title: 'Incubators & Accelerators',
      badge: 'Venture Ecosystems',
      href: '/ecosystem/incubators-accelerators',
      desc: 'Startup hubs, technology parks, and incubation programs collaborating to nurture digital capabilities and connect enterprise clients with high-potential solutions.',
      focus: ['Innovation pilot programs', 'Technology scouting', 'Venture development', 'Entrepreneurial ecosystem engagement']
    },
    {
      id: 'strategic-implementation-partners',
      title: 'Strategic Implementation Partners',
      badge: 'Delivery Coalitions',
      href: '/ecosystem/strategic-implementation-partners',
      desc: 'Specialized systems integrators, regional delivery firms, and engineering agencies that collaborate with NG Stellar to execute complex transformation roadmaps.',
      focus: ['End-to-end system integration', 'Cross-border deployment', 'Staff augmentation & training', 'Operational cutover management']
    },
  ],
  ctaPrimary: { label: 'Partner With NG Stellar', href: '/contact/partner' },
};

export const STORIES_HUB = {
  h1: 'Transformation Stories',
  tagline: 'Practical Insights from Real-World Transformation Scenarios.',
  metaDescription: 'Explore illustrative transformation scenarios across business strategy, process optimization, technology modernization, and digital growth.',
  heroDescription:
    'Every organization faces distinct challenges. The following illustrative scenarios demonstrate how our advisory frameworks, diagnostic methodologies, and digital capabilities solve complex business problems to create lasting enterprise value.',
  categories: [
    {
      id: 'business',
      title: 'Business Transformation',
      badge: 'Strategy & Operating Model',
      href: '/transformation-stories/business',
      scenarios: [
        {
          title: 'Scaling from Regional Manufacturer to Multi-Market Enterprise',
          industry: 'Industrial Manufacturing',
          challenge: 'A legacy manufacturer faced margin compression, fragmented communication across 4 regional units, and declining market share against tech-enabled competitors.',
          approach: 'Conducted a Business Transformation Health Check, designed a centralized target operating model, and realigned product pricing structures to emphasize high-margin custom configurations.',
          solution: 'Transitioned the business to a unified digital operating platform, restructured regional leadership roles with clear profit-center accountability, and launched a direct-to-enterprise customer portal.',
          outcome: 'Improved operating margins, reduced inter-unit order turnaround from weeks to days, and unlocked predictable expansion into adjacent geographic markets.'
        },
        {
          title: 'Modernizing a B2B Distribution Model for Recurring Revenue',
          industry: 'Wholesale Distribution',
          challenge: 'A traditional wholesale distributor relied entirely on manual sales reps and paper purchase orders, leading to high transaction costs and customer churn.',
          approach: 'Assessed customer buying behaviors, identified recurring consumable demand, and modeled a subscription-style supply replenishment framework.',
          solution: 'Architected a custom digital B2B ordering portal with automated inventory alerts, dynamic pricing tiers, and ERP integration.',
          outcome: 'Increased repeat order frequency, lowered cost per order processing, and generated stable recurring monthly cash flow.'
        }
      ]
    },
    {
      id: 'process',
      title: 'Process Transformation',
      badge: 'Operations & Workflow',
      href: '/transformation-stories/process',
      scenarios: [
        {
          title: 'Eliminating Operational Lag in High-Volume Service Fulfillment',
          industry: 'Professional Services',
          challenge: 'A rapid-growth compliance firm experienced client onboarding delays of over 14 days due to manual document collection and fragmented email threads.',
          approach: 'Mapped the complete end-to-end onboarding lifecycle, identified 12 redundant approval handoffs, and designed a streamlined self-service workflow.',
          solution: 'Engineered an automated digital client portal with secure document verification, automated status notifications, and real-time SLA tracking.',
          outcome: 'Cut average client onboarding cycle time by 70%, eliminated manual spreadsheet tracking, and enabled the existing team to manage double the client volume without adding overhead.'
        }
      ]
    },
    {
      id: 'technology',
      title: 'Technology Transformation',
      badge: 'Software & Cloud',
      href: '/transformation-stories/technology',
      scenarios: [
        {
          title: 'Legacy Core Migration to Scalable Cloud Microservices',
          industry: 'Supply Chain & Logistics',
          challenge: 'An enterprise logistics operator struggled with an aging on-premise monolithic database that suffered frequent outages during peak seasonal shipping volumes.',
          approach: 'Conducted a Technology Assessment and developed a zero-downtime microservices modernization roadmap with containerized cloud architecture.',
          solution: 'Built and deployed a resilient cloud-native application with API integrations to partner carriers, real-time GPS fleet tracking, and automated dispatch algorithms.',
          outcome: 'Achieved 99.99% system uptime during peak season, reduced infrastructure hosting costs, and enabled instant onboarding of new third-party logistics partners.'
        }
      ]
    },
    {
      id: 'digital-growth',
      title: 'Digital Growth',
      badge: 'Brand & Marketing',
      href: '/transformation-stories/digital-growth',
      scenarios: [
        {
          title: 'Establishing Digital Market Authority for a Specialized B2B Brand',
          industry: 'Industrial Engineering',
          challenge: 'An established engineering solutions company had zero digital inbound leads and was losing brand visibility to newer, digitally savvy competitors.',
          approach: 'Conducted an in-depth Brand & SEO Audit, refined core value messaging, and designed a high-intent technical content strategy targeting decision-makers.',
          solution: 'Launched a high-performance corporate web platform, optimized technical SEO architecture, and deployed focused search marketing campaigns around key capabilities.',
          outcome: 'Drove a steady pipeline of qualified inbound corporate inquiries, shortened initial sales cycles, and established verifiable search authority across core solution categories.'
        }
      ]
    }
  ],
  ctaPrimary: { label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' },
};

export const INSIGHTS_HUB = {
  h1: 'Insights on Transformation, Sustainability & Growth',
  tagline: 'Strategic Frameworks, Industry Briefings, and Practical Advisory Insights.',
  metaDescription: 'Read executive insights, strategic frameworks, and practical perspectives on business transformation, enterprise sustainability, technology modernizations, and SME leadership.',
  heroDescription:
    'Our insights provide business leaders with actionable perspectives on navigating transformation, building resilient operating models, adopting responsible technology, and embedding sustainability into core strategy.',
  categories: [
    {
      id: 'transformation',
      title: 'Transformation',
      href: '/insights/transformation',
      desc: 'Strategic roadmaps, operating model redesign, and change leadership frameworks.',
      articles: [
        {
          title: 'Why Most Digital Transformations Stall — And How to Build One That Endures',
          date: 'Quarterly Strategic Briefing',
          readTime: '6 min read',
          summary: 'Why technology-first initiatives often fail without equal alignment across business strategy, process re-engineering, and organizational change enablement.',
          h2s: ['The Alignment Gap in Digital Initiatives', 'The 4 Pillars of Durable Transformation', 'Measuring Real Value Beyond Deployment']
        },
        {
          title: 'The Target Operating Model: Bridging Strategy and Daily Execution',
          date: 'Executive Advisory Notes',
          readTime: '5 min read',
          summary: 'How leading organizations design adaptive operating models that translate high-level board vision into disciplined frontline workflows.',
          h2s: ['What Makes an Operating Model Adaptive', 'Designing Clear Decision Rhythms', 'Avoiding Organizational Silos']
        }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      href: '/insights/sustainability',
      desc: 'Economic durability, governance rigor, and practical ESG integration for mid-market enterprises.',
      articles: [
        {
          title: 'Sustainability as a Value Driver: Moving Beyond Regulatory Checkboxes',
          date: 'Sustainability Series',
          readTime: '7 min read',
          summary: 'How forward-thinking companies turn environmental stewardship and ethical governance into measurable cost savings and brand equity.',
          h2s: ['The Commercial Case for Sustainability', 'Operational Efficiency Through Resource Optimization', 'Building Stakeholder Trust']
        }
      ]
    },
    {
      id: 'business-growth',
      title: 'Business Growth',
      href: '/insights/business-growth',
      desc: 'Revenue model innovation, market expansion strategies, and margin resilience.',
      articles: [
        {
          title: 'Protecting Operating Margins in Volatile Economic Cycles',
          date: 'Growth Perspective',
          readTime: '5 min read',
          summary: 'Practical approaches for identifying hidden cost leaks, automating repetitive overhead, and optimizing high-margin revenue streams.',
          h2s: ['Conducting a Margin Leak Audit', 'Value-Based Pricing Architecture', 'Building Recurring Revenue Layers']
        }
      ]
    },
    {
      id: 'technology-ai',
      title: 'Technology & AI',
      href: '/insights/technology-ai',
      desc: 'Pragmatic artificial intelligence, cloud modernization, and software architecture.',
      articles: [
        {
          title: 'Pragmatic AI: Where Mid-Market Enterprises Should Actually Start',
          date: 'Technology Executive Review',
          readTime: '6 min read',
          summary: 'A realistic evaluation of AI automation use cases that deliver measurable ROI without multi-million dollar R&D overhead.',
          h2s: ['Separating Hype from High-ROI Automation', 'Data Pipeline Readiness Checklist', 'Integrating AI into Daily Business Workflows']
        }
      ]
    },
    {
      id: 'sme-leadership',
      title: 'SME Leadership',
      href: '/insights/sme-leadership',
      desc: 'Empowering founders and leadership teams to scale without operational chaos.',
      articles: [
        {
          title: 'Scaling from Founder-Led to Systems-Driven Operations',
          date: 'Leadership Insights',
          readTime: '6 min read',
          summary: 'The critical inflection point where business owners must transition from personal micromanagement to structured digital systems and delegated governance.',
          h2s: ['The Founder Bottleneck Syndrome', 'Codifying Tribal Knowledge into Digital SOPs', 'Building a Resilient Management Tier']
        }
      ]
    }
  ]
};

export const ABOUT_HUB = {
  h1: 'About NG Stellar',
  tagline: 'Transform the Business. Sustain the Impact.',
  metaDescription: 'Learn about NG Stellar, a premier Transformation and Sustainability Advisory firm dedicated to helping organizations build agile, resilient, and high-performing enterprises.',
  heroDescription:
    'NG Stellar is an integrated Transformation & Sustainability Advisory firm. We partner with ambitious leaders to diagnose operational challenges, architect modern operating models, engineer custom digital platforms, and embed enduring governance.',
  whoWeAre: {
    heading: 'Who We Are',
    subheading: 'An Integrated Advisory and Digital Capabilities Partner',
    paragraphs: [
      'NG Stellar operates at the intersection of business strategy, organizational capability, technology engineering, and enterprise sustainability. We are not traditional theoretical consultants who produce slide decks and walk away, nor are we a transactional software agency building tools without commercial context.',
      'We act as your dedicated transformation partner—combining diagnostic strategic rigor with hands-on software development, process automation, and long-term sustainability governance.',
      'Our team comprises seasoned corporate advisors, software architects, process engineers, and growth specialists committed to creating enduring enterprise value.'
    ],
    pillars: [
      { title: 'Strategic Advisory', desc: 'Clarifying business models, market positioning, and capital efficiency.' },
      { title: 'Brand & Experience', desc: 'Building authoritative brands and intuitive digital customer journeys.' },
      { title: 'Technology Engineering', desc: 'Developing custom software, cloud systems, and automated workflows.' },
      { title: 'Digital Growth', desc: 'Driving high-intent acquisition and measurable market authority.' },
    ]
  },
  purpose: {
    heading: 'Our Purpose',
    coreMessage: 'Transform the Business. Sustain the Impact.',
    paragraphs: [
      'In a business landscape characterized by rapid technological disruption and fluctuating market conditions, organizations cannot afford short-lived fixes or disconnected digital activity.',
      'Our purpose is to help organizations build resilient foundations that thrive across market cycles. We measure our success not by the volume of code shipped or reports delivered, but by the tangible, compounding impact created for our clients, their people, and their stakeholders.'
    ]
  },
  principles: {
    heading: 'Our Principles',
    subheading: 'The Core Values Guiding Every Engagement',
    list: [
      { title: 'Business-First Thinking', desc: 'We always begin with business fundamentals—unit economics, operational bottlenecks, and customer value—before recommending technology or structural changes.' },
      { title: 'Evidence-Based Decisions', desc: 'Our advisory recommendations are grounded in verifiable data, diagnostic baselines, and objective performance benchmarks.' },
      { title: 'Sustainable Value Creation', desc: 'We design solutions engineered for long-term durability and resilience, rejecting superficial shortcuts that create future technical or operational debt.' },
      { title: 'Practical Transformation', desc: 'We believe in actionable, phased roadmaps that deliver rapid quick-wins while systematically building future-state enterprise capabilities.' },
      { title: 'Responsible Technology', desc: 'We advocate for secure, ethical, and scalable technology choices that solve real business problems without unnecessary complexity.' },
      { title: 'Authentic Collaboration', desc: 'We work as an extension of your leadership team, fostering transparency, mutual trust, and knowledge transfer throughout the engagement.' },
      { title: 'Continuous Improvement', desc: 'We institutionalize measurement systems, feedback loops, and governance rhythms that ensure operational gains compound indefinitely.' }
    ]
  },
  leadership: {
    heading: 'Leadership & Governance',
    subheading: 'Experienced Practitioners Guided by Integrity',
    paragraphs: [
      'NG Stellar is guided by an executive advisory leadership team with extensive backgrounds in corporate governance, enterprise technology, operational management, and commercial strategy.',
      'Our leadership structure ensures rigorous oversight on every client engagement, maintaining high standards of confidentiality, analytical rigor, and delivery excellence.'
    ]
  },
  journey: {
    heading: 'Our Journey & Evolution',
    subheading: 'From Digital Execution to Comprehensive Enterprise Advisory',
    milestones: [
      {
        stage: 'Where We Started',
        desc: 'Established with a focus on engineering high-performance software applications and modern web solutions for growing businesses.'
      },
      {
        stage: 'What We Learned',
        desc: 'Recognized that digital tools alone cannot fix broken processes, unaligned organizational structures, or unsustainable business models.'
      },
      {
        stage: 'How We Evolved',
        desc: 'Expanded into an integrated Transformation & Sustainability Advisory firm, bridging business strategy with end-to-end technical execution.'
      },
      {
        stage: 'Where We Are Going',
        desc: 'Continuously expanding our transformation ecosystem, AI automation capabilities, and sustainability frameworks to serve mid-market enterprises across diverse sectors.'
      }
    ]
  }
};
