// High-fidelity Mock Data for Corporate Edge

export const servicesData = [
  {
    id: "web-dev",
    name: "Web Development",
    iconName: "Globe",
    description: "We architect and engineer enterprise-grade web applications that deliver unmatched performance, security, and scalability. Tailored to complex business processes, our solutions optimize operations and convert users.",
    benefits: [
      "Next-generation React & Next.js architectures",
      "Headless CMS and content decoupling integrations",
      "Highest Core Web Vitals rankings & SEO performance",
      "Robust API integration and microservices frameworks"
    ]
  },
  {
    id: "mobile-apps",
    name: "Mobile Applications",
    iconName: "Smartphone",
    description: "Reach your audience anywhere with native and cross-platform mobile experiences that feel premium, fluid, and intuitive. We bridge the gap between high-level hardware performance and modern tactile design.",
    benefits: [
      "Highly responsive iOS and Android application suite",
      "Built with React Native & Flutter for resource efficiency",
      "Offline-first sync capability and local secure caching",
      "Biometric security and secure gateway payment integrations"
    ]
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design Systems",
    iconName: "Palette",
    description: "Design is more than aesthetics; it is a business strategy. We construct scalable design systems that unify your brand expression, streamline front-end handoffs, and foster high user retention.",
    benefits: [
      "Rigorous user research and cognitive accessibility testing",
      "Scalable Figma UI kits and component token libraries",
      "Immersive prototyping and direct feedback cycles",
      "Data-driven UI updates based on hotjar & analytics"
    ]
  },
  {
    id: "cloud-solutions",
    name: "Cloud Architectures",
    iconName: "Cloud",
    description: "Migrate, modernize, and manage cloud infrastructures built for absolute fault tolerance and automated scaling. We build resilient virtual setups that dramatically lower hosting overheads.",
    benefits: [
      "Automated AWS, Azure, and Google Cloud configuration",
      "Infrastructure as Code (IaC) setup via Terraform",
      "Kubernetes orchestration and containerization strategies",
      "Continuous CI/CD pipeline auditing and auto-healing"
    ]
  },
  {
    id: "ai-automation",
    name: "AI & Intelligent Automation",
    iconName: "Cpu",
    description: "Supercharge workflows, eliminate manual repetition, and unlock deep metrics from legacy systems using machine learning models, customized LLMs, and data analytics engines.",
    benefits: [
      "Custom NLP and generative text integrations",
      "Automated robotic process pipelines (RPA)",
      "Cognitive predictive modeling for financial risk",
      "Autonomous customer service chatbots with CRM sync"
    ]
  },
  {
    id: "consulting",
    name: "Strategic Technology Consulting",
    iconName: "TrendingUp",
    description: "Navigate digital disruption with certainty. We audit your technical debt, align technology Roadmaps with business strategies, and guide team training for sustainable digital evolution.",
    benefits: [
      "Full stack software architecture and design audits",
      "ISO-standard security and compliance assessments",
      "SaaS product viability and financial modeling",
      "Agile process alignment and product owner mentoring"
    ]
  }
];

export const caseStudiesData = [
  {
    id: 1,
    client: "Apex Health Global",
    industry: "Healthcare Systems",
    title: "Modernizing Patient Portals to Support 2M+ Daily Users",
    challenge: "Apex Health's legacy database struggled under traffic surges, suffering constant timeouts, delayed updates, and HIPAA compliance risks.",
    solution: "We re-architected their server infrastructure into a serverless AWS setup using GraphQL APIs, secured patient data via end-to-end encryption, and built a modern React frontend dashboard.",
    results: {
      metrics: ["99.99% Portal Uptime", "40% Lower Infrastructure Costs", "94% Patient Satisfaction Score"],
      details: "Database query times decreased from 4.2 seconds to 80ms, eliminating queue bottle-necks."
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    client: "Veloce Logistics",
    industry: "Supply Chain & Delivery",
    title: "AI-Powered Dispatch Routing Saving Millions in Fuel",
    challenge: "Manual dispatch scheduling resulted in non-optimal truck loads, longer routes, and rising shipping delays across North American hubs.",
    solution: "Developed an autonomous machine learning routing model integrated into a custom React Native driver app, utilizing real-time traffic, load constraints, and weather forecasts.",
    results: {
      metrics: ["18% Fuel Usage Reduction", "28% Faster Delivery Timeframes", "$4.2M Annual Savings"],
      details: "The system automates 96% of dispatch allocations, routing over 20,000 deliveries daily."
    },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    client: "Orbis Neobank",
    industry: "Fintech & Banking",
    title: "Next-Gen Fintech App Launching to 500k Users In 6 Months",
    challenge: "Orbis needed a secure, multi-currency wallet application that complied with international KYC standards in a extremely tight timeframe.",
    solution: "We engineered a clean cross-platform app utilizing React Native, integrated with Stripe and Plaid APIs, and designed a sleek, high-retention onboarding UI.",
    results: {
      metrics: ["500k Active App Downloads", "3-Minute Average KYC Verification", "4.8/5 Apple App Store Rating"],
      details: "Launched ahead of schedule with zero major security incidents reported post-audit."
    },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    client: "Novartis Retail",
    industry: "E-Commerce",
    title: "Decoupled Headless Commerce Architecture Boosting Conversions",
    challenge: "Their monolithic e-commerce stack loaded slowly (6.8s average mobile load time), leading to abandoned carts and poor organic SEO rankings.",
    solution: "Built a fully decoupled Next.js storefront utilizing Shopify Plus APIs, powered by Tailwind CSS and edge servers via Vercel.",
    results: {
      metrics: ["3.2x Mobile Load Speed", "22% Cart Conversion Growth", "46% Higher Organic Search Traffic"],
      details: "Page loading speed dropped under 1.5 seconds worldwide, increasing repeat customer conversions."
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    client: "Energia Corp",
    industry: "Energy & Utilities",
    title: "Cloud Infrastructure Migration to Prevent Power Grid Failure",
    challenge: "Aging on-premise servers couldn't handle real-time IoT grid sensory metrics, risking power outages during extreme grid fluctuations.",
    solution: "Designed a secure multi-region hybrid-cloud infrastructure on Microsoft Azure, processing millions of sensor data packets via event streams.",
    results: {
      metrics: ["Zero Data Packet Loss", "100% Real-time Alerts Accuracy", "65% Grid Maintenance Efficiency"],
      details: "Operators now receive predictions of system overload 15 minutes before failures occur."
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    client: "Acme Industrial",
    industry: "Manufacturing Solutions",
    title: "Proprietary ERP Dashboard Streamlining Operations",
    challenge: "Managers lacked a single source of truth, managing factory output, warehouse storage, and raw inputs via detached spreadsheets.",
    solution: "Created a bespoke, responsive web-based ERP portal integrating factory metrics, shipping feeds, and invoicing dashboards.",
    results: {
      metrics: ["100% Paperless Factory Operations", "35% Shorter Order Processing", "Total Operations Transparency"],
      details: "Managers can trace material batches from vendor delivery directly to final client shipment."
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "Apex Health Global",
    text: "Corporate Edge did not just write code; they partnered with our leadership to design a highly scalable patient database architecture. Their team operates with high professionalism and delivered ahead of schedule.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Marcus Aurelius",
    role: "Director of Supply Operations",
    company: "Veloce Logistics",
    text: "The AI routing algorithms built by Corporate Edge have transformed our logistics profitability. We reduced fuel consumption by 18% in the first quarter alone. Their expertise in machine learning is top-tier.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "Orbis Neobank",
    text: "Building a fintech app with cross-border compliance is exceptionally tough. Corporate Edge navigated global KYC protocols with ease and gave us a design that has our users raving. Highly recommended.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Chief Digital Officer",
    company: "Novartis Retail Group",
    text: "Our conversion rates spiked immediately after launch. Moving to a headless setup was a major technical risk for us, but Corporate Edge executed it flawlessly. The loading speed of our store is incredible.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const statisticsData = [
  { id: "projects", label: "Completed Deployments", value: "350+" },
  { id: "clients", label: "Active Global Partners", value: "80+" },
  { id: "satisfaction", label: "Client Retention Rate", value: "98%" },
  { id: "experts", label: "Senior Cloud & Code Experts", value: "120+" }
];

export const teamMembersData = [
  {
    name: "Katherine Vance",
    role: "Chief Executive Officer & Founder",
    bio: "Ex-Accenture Managing Director with 20+ years driving digital transformation strategies for Fortune 500 banks and healthcare providers.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=450&q=80",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Dr. Ryan Patel",
    role: "Chief Technology Officer",
    bio: "Ph.D. in Computer Science from MIT. Former Principal Cloud Architect at AWS. Leading our software engineering, AI, and cloud scaling strategies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=450&q=80",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Maya Lin",
    role: "Head of Experience Design (UI/UX)",
    bio: "Ex-Stripe Design Lead. Passionate about constructing scalable CSS architectures, interactive data dashboards, and beautiful customer portals.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=450&q=80",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  {
    name: "Jameson Blake",
    role: "VP of Product Strategy",
    bio: "Former Deloitte Principal Consultant, specializing in SaaS market validation, growth modeling, and agile software execution frameworks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=450&q=80",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
];
