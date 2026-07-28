export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroImage: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  category: string;
}

export interface Attorney {
  id: string;
  name: string;
  designation: string;
  experience: string;
  specialization: string;
  photo: string;
  bio: string;
  education: string[];
  barAdmissions: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  caseType: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const PRACTICE_AREAS = [
  {
    id: "corporate-law",
    title: "Corporate & M&A Law",
    category: "Corporate",
    shortDesc: "Strategic counsel for high-stakes corporate transactions, cross-border mergers, and regulatory compliance.",
    fullDesc: "Our Corporate Law practice provides sophisticated legal architecture for multinational corporations, venture capital funds, and emerging growth enterprises. We specialize in structuring complex mergers, acquisitions, corporate restructurings, and institutional financing while ensuring strict adherence to international regulatory governance.",
    iconName: "Building2",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Mitigate transactional risks in cross-border acquisitions",
      "Tailored corporate governance and compliance frameworks",
      "Seamless intellectual property and asset transfer structures",
      "Strategic negotiation of high-value venture capital & private equity terms"
    ],
    process: [
      { title: "1. Due Diligence & Audit", desc: "Comprehensive examination of financial, operational, and legal liabilities." },
      { title: "2. Strategic Structuring", desc: "Crafting optimized transactional contracts and shareholder agreements." },
      { title: "3. Regulatory Clearance", desc: "Navigating antitrust, competition, and international commerce filings." },
      { title: "4. Execution & Closing", desc: "Ensuring flawless closing conditions and post-merger integration." }
    ]
  },
  {
    id: "family-law",
    title: "Family & Estate Planning",
    category: "Personal",
    shortDesc: "Compassionate, discreet legal governance for high-net-worth family assets, trusts, and matrimonial matters.",
    fullDesc: "We provide refined legal guidance for high-net-worth individuals and prestigious legacy families. Our attorneys handle private wealth preservation, prenuptial agreements, complex marital asset division, child custody resolution, and family trust administration with utmost discretion and empathy.",
    iconName: "Users",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Discreet protection of personal and family wealth",
      "Custom estate trusts and cross-generational succession plans",
      "Mediation-first approach to complex matrimonial disputes",
      "International child guardianship and relocation advocacy"
    ],
    process: [
      { title: "1. Confidential Assessment", desc: "In-depth review of family holdings, objectives, and personal concerns." },
      { title: "2. Bespoke Strategy", desc: "Formulating legal instruments and privacy safeguards." },
      { title: "3. Collaborative Dispute Resolution", desc: "Privately negotiating terms to prevent public litigation." },
      { title: "4. Legacy Implementation", desc: "Enforcing wealth distributions and trust declarations." }
    ]
  },
  {
    id: "criminal-defense",
    title: "White Collar & Criminal Defense",
    category: "Litigation",
    shortDesc: "Formidable trial representation defending executive integrity, financial compliance, and legal rights.",
    fullDesc: "Representing corporate directors, public officials, and high-profile individuals in government investigations, securities litigation, fraud defense, and complex criminal proceedings. We champion relentless courtroom litigation combined with meticulous investigative strategy.",
    iconName: "ShieldAlert",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Immediate trial-ready defense representation",
      "Internal forensic corporate investigations and audit defense",
      "Protection against reputational and financial exposure",
      "Aggressive pretrial motion practice and constitutional defense"
    ],
    process: [
      { title: "1. Immediate Crisis Response", desc: "Deploying senior trial counsel to protect client rights immediately." },
      { title: "2. Forensic Investigation", desc: "Uncovering critical exculpatory evidence and expert testimony." },
      { title: "3. Government Negotiation", desc: "Seeking dismissal, charge reduction, or pretrial disposition." },
      { title: "4. Courtroom Advocacy", desc: "Vigorous jury trial representation backed by senior litigators." }
    ]
  },
  {
    id: "property-law",
    title: "Commercial Property & Real Estate",
    category: "Corporate",
    shortDesc: "End-to-end legal architecture for real estate investments, land acquisition, zoning, and leasing.",
    fullDesc: "Advising institutional developers, private REITs, and sovereign funds on premier commercial property ventures. Our expertise encompasses commercial land acquisition, municipal zoning entitlements, construction financing contracts, and multi-tenant lease negotiation.",
    iconName: "Home",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Seamless title verification and land clearance protocols",
      "High-value commercial lease drafting and dispute resolution",
      "Zoning and land development permit approval management",
      "Real estate investment trust (REIT) structuring"
    ],
    process: [
      { title: "1. Title & Deed Audit", desc: "Rigorous verification of ownership titles, liens, and encumbrances." },
      { title: "2. Contractual Formulation", desc: "Drafting bulletproof purchase agreements and development covenants." },
      { title: "3. Regulatory Approvals", desc: "Securing municipal zoning, environmental, and building clearances." },
      { title: "4. Settlement & Closing", desc: "Managing escrow and executing title transfers seamlessly." }
    ]
  },
  {
    id: "immigration",
    title: "Global Business Immigration",
    category: "Consulting",
    shortDesc: "Executive mobility, global talent visas, corporate relocation, and citizenship by investment.",
    fullDesc: "Facilitating seamless international mobility for corporate executives, specialized talent, investors, and family members. We manage complex visa petitions, permanent residency pathways, regulatory compliance for international workforces, and citizenship strategies.",
    iconName: "Globe",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Expedited processing for executive and investor visas",
      "Corporate workforce mobility compliance programs",
      "Representation in complex administrative appeals",
      "Tailored citizenship and dual residency advisory"
    ],
    process: [
      { title: "1. Eligibility Audit", desc: "Evaluating international qualifications and visa route options." },
      { title: "2. Dossier Compilation", desc: "Assembling verified legal documentation and petition packages." },
      { title: "3. Government Advocacy", desc: "Filing petitions with consular authorities and immigration agencies." },
      { title: "4. Permanent Settlement", desc: "Guiding post-arrival residency compliance and naturalization." }
    ]
  },
  {
    id: "civil-litigation",
    title: "Commercial & Civil Litigation",
    category: "Litigation",
    shortDesc: "Relentless dispute resolution, high-value breach of contract claims, and appellate litigation.",
    fullDesc: "When high-stakes commercial disputes arise, our veteran litigators deliver decisive, results-oriented courtroom advocacy. We handle shareholder disputes, contractual breaches, IP infringement claims, and complex international arbitration cases across global tribunals.",
    iconName: "Scale",
    heroImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Decisive trial strategy tailored to commercial goals",
      "Alternative dispute resolution (ADR) and international arbitration",
      "Pre-trial injunctive relief and emergency asset freeze orders",
      "Comprehensive appellate practice across superior courts"
    ],
    process: [
      { title: "1. Case Assessment", desc: "Analyzing evidentiary strength, liability risks, and financial exposure." },
      { title: "2. Emergency Relief", desc: "Filing injunctions or protective motions where time is critical." },
      { title: "3. Pre-Trial Discovery", desc: "Executing rigorous depositions and document production." },
      { title: "4. Trial Representation", desc: "Presenting compelling oral argument and forensic testimony." }
    ]
  },
  {
    id: "tax-law",
    title: "International Tax & Wealth Strategy",
    category: "Corporate",
    shortDesc: "Sophisticated cross-border tax optimization, dispute defense, and corporate structuring.",
    fullDesc: "Navigating intricate international tax treaties, transfer pricing compliance, and wealth preservation strategies for multinational corporations and ultra-high-net-worth individuals. We protect assets while ensuring full regulatory transparency.",
    iconName: "Receipt",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Cross-border transaction tax optimization",
      "Resolution of complex tax audit and transfer pricing disputes",
      "Structured offshore holding and trust governance",
      "Implementation of BEPS compliance and FATCA/CRS reporting"
    ],
    process: [
      { title: "1. Tax Architecture Analysis", desc: "Mapping corporate entity structures across multi-tax jurisdictions." },
      { title: "2. Strategic Restructuring", desc: "Realigning holding models to minimize double-tax risks." },
      { title: "3. Regulatory Filing Defense", desc: "Representing clients before national tax authorities during audits." },
      { title: "4. Ongoing Advisory", desc: "Providing dynamic tax governance adapted to changing international law." }
    ]
  },
  {
    id: "employment-law",
    title: "Employment & Executive Labor",
    category: "Corporate",
    shortDesc: "Counseling leadership on executive compensation, workplace policies, and labor disputes.",
    fullDesc: "Protecting business reputation and executive careers through expert labor law advisory. We draft executive severance packages, non-compete covenants, workforce restructuring strategies, and defend corporate clients against employment tribunal claims.",
    iconName: "Briefcase",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Robust executive employment & equity compensation contracts",
      "Protection of trade secrets through bulletproof restrictive covenants",
      "Strategic guidance during corporate downsizing or restructuring",
      "Effective representation in harassment and wrongful termination claims"
    ],
    process: [
      { title: "1. Policy & Contract Review", desc: "Auditing employee manuals, contracts, and compensation plans." },
      { title: "2. Dispute Mediation", desc: "Handling grievances before formal tribunal escalation." },
      { title: "3. Corporate Defense", desc: "Defending employers against regulatory audits and labor lawsuits." },
      { title: "4. Compliance Training", desc: "Equipping HR teams with legal compliance best practices." }
    ]
  }
];

export const ATTORNEYS: Attorney[] = [
  {
    id: "alexander-vance",
    name: "Alexander Vance, Esq.",
    designation: "Managing Senior Partner",
    experience: "24+ Years Experience",
    specialization: "Corporate M&A & International Taxation",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Alexander Vance is a globally renowned corporate attorney with over two decades of experience presiding over multi-billion-dollar cross-border transactions and sovereign wealth fund disputes. Prior to founding Vance & Sterling, he served as Lead Counsel for top Wall Street firms.",
    education: [
      "J.D., Harvard Law School (Magna Cum Laude)",
      "B.A. in Economics, Yale University"
    ],
    barAdmissions: [
      "New York State Bar Association",
      "Supreme Court of the United States",
      "International Bar Association (Geneva)"
    ]
  },
  {
    id: "eleanor-sterling",
    name: "Eleanor Sterling",
    designation: "Senior Partner & Head of Litigation",
    experience: "20+ Years Experience",
    specialization: "White Collar Crime & Civil Litigation",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Eleanor Sterling has earned a formidable reputation as one of the nation's premier court litigators. Known for her incisive cross-examinations and courtroom composure, Eleanor has secured dismissals and favorable verdicts in over 350 trial proceedings.",
    education: [
      "J.D., Columbia Law School (Harlan Fiske Stone Scholar)",
      "B.S. in Political Science, Stanford University"
    ],
    barAdmissions: [
      "District of Columbia Bar",
      "U.S. Court of Appeals for the Second Circuit",
      "American College of Trial Lawyers"
    ]
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    designation: "Partner",
    experience: "16+ Years Experience",
    specialization: "Commercial Real Estate & Investment",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Marcus leads the firm's commercial property division, advising global real estate syndicates and urban development giants. His legal frameworks have empowered major skyline projects and multi-use urban transformations worldwide.",
    education: [
      "J.D., University of Oxford (First Class Honours)",
      "LL.M., New York University School of Law"
    ],
    barAdmissions: [
      "New York Bar Association",
      "Law Society of England & Wales"
    ]
  },
  {
    id: "sophia-montgomery",
    name: "Dr. Sophia Montgomery",
    designation: "Partner & Global Immigration Lead",
    experience: "14+ Years Experience",
    specialization: "Global Business Immigration & Mobility",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Dr. Montgomery specializes in high-net-worth investor residency, corporate workforce relocation, and executive diplomatic visas. She frequently consults with international policy groups on trade mobility laws.",
    education: [
      "Ph.D. in International Law, Cambridge University",
      "J.D., Georgetown University Law Center"
    ],
    barAdmissions: [
      "State Bar of California",
      "International Migration Lawyers Network"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "David Rothschild",
    role: "Chief Executive Officer",
    company: "Apex Global Holdings",
    rating: 5,
    comment: "Vance & Sterling navigated our $1.4B cross-border acquisition with surgical precision. Their legal acumen and strategic discretion are completely unprecedented.",
    caseType: "Corporate M&A",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    clientName: "Victoria Sinclair",
    role: "Founder & Chairwoman",
    company: "Sinclair Luxury Group",
    rating: 5,
    comment: "When our private enterprise faced complex regulatory scrutiny, Eleanor Sterling delivered exceptional trial defense. Absolute champions of executive integrity.",
    caseType: "White Collar Defense",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    clientName: "Julian Hayes",
    role: "Managing Director",
    company: "Horizon Capital Partners",
    rating: 5,
    comment: "Marcus Thorne restructured our real estate investment portfolio across 12 countries. Their team's foresight saved us millions in taxation and regulatory delays.",
    caseType: "Commercial Real Estate",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Navigating Cross-Border M&A: Essential Regulatory Safeguards for 2026",
    slug: "navigating-cross-border-ma-regulatory-safeguards",
    category: "Legal Updates",
    excerpt: "With shifting antitrust regulations in Europe and North America, multinational dealmakers must recalibrate their due diligence and foreign investment audit frameworks.",
    content: "The global M&A landscape is experiencing a paradigm shift in regulatory enforcement. Antitrust authorities in key economic jurisdictions are applying heightened scrutiny to technology and infrastructure consolidations...",
    author: "Alexander Vance, Esq.",
    authorRole: "Managing Senior Partner",
    date: "July 24, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Protecting Corporate Executive Integrity in Federal Investigations",
    slug: "protecting-corporate-executive-integrity",
    category: "Case Studies",
    excerpt: "A tactical guide for corporate leadership on internal compliance audits, privilege preservation, and preemptive defense strategies during regulatory enquiries.",
    content: "When a government agency initiates an inquiry, immediate response protocols dictate the outcome. Protecting corporate privilege while demonstrating total compliance requires delicate precision...",
    author: "Eleanor Sterling",
    authorRole: "Senior Partner",
    date: "July 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: "3",
    title: "The Evolution of Family Office Wealth Protection & Dynasty Trusts",
    slug: "evolution-family-office-wealth-protection",
    category: "Industry News",
    excerpt: "How modern high-net-worth families are leveraging international private wealth structures to preserve generational assets amidst changing inheritance tax laws.",
    content: "Dynasty trusts and private foundation frameworks have evolved from simple tax-mitigation vehicles into comprehensive governance shields designed to protect family values and enterprise longevity...",
    author: "Marcus Thorne",
    authorRole: "Partner",
    date: "July 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    id: "4",
    title: "Global Mobility: Fast-Tracking Tech Executive Visas & Investor Citizenship",
    slug: "global-mobility-executive-visas-investor-citizenship",
    category: "Legal Updates",
    excerpt: "An overview of newly introduced investor visa programs in Switzerland, the UAE, and Singapore tailored for tech founders and fund managers.",
    content: "Geopolitical agility is now a key strategic asset for founders and investors. European and Asian hubs are expanding expedited Golden Visa pathways designed for high-capital legal contributors...",
    author: "Dr. Sophia Montgomery",
    authorRole: "Partner",
    date: "July 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    featured: false
  }
];

export const FAQS = [
  {
    question: "How quickly can your firm initiate legal representation or crisis response?",
    answer: "Our senior legal hotline operates 24/7 for existing and prospective executive clients. For emergency litigation, asset protection, or regulatory investigations, we can deploy a dedicated legal team within hours."
  },
  {
    question: "What is your approach to legal consultation and fee structures?",
    answer: "We offer transparent, bespoke billing models tailored to client needs, including structured retainer agreements, project-based transactional fees, and transparent hourly rates. Every engagement begins with a comprehensive, confidential preliminary assessment."
  },
  {
    question: "Does Vance & Sterling represent international clients with multi-jurisdictional needs?",
    answer: "Yes. Over 60% of our transactional and advisory practice involves multi-jurisdictional matters. We possess an active global network of partner counsel in Geneva, London, Singapore, New York, and Dubai."
  },
  {
    question: "How do you ensure complete client confidentiality?",
    answer: "Client discretion is our paramount commitment. All communications benefit from strict attorney-client privilege protocols, encrypted digital communication portals, and non-disclosure standards compliant with elite international legal guidelines."
  },
  {
    question: "Can I schedule a consultation directly with a Senior Partner?",
    answer: "Absolute accessibility to decision-makers is a hallmark of Vance & Sterling. Initial strategy consultations are conducted directly by Senior Partners specializing in your area of legal need."
  }
];
