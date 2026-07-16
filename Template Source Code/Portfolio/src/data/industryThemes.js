// ============================================================
// INDUSTRY PORTFOLIO THEMES DATA (REFACTORED WITH UNIQUE PRODUCT IDENTITIES)
// Premium Multi-Role Portfolio Template Ecosystem
// ============================================================

export const industryThemes = [
  {
    slug: "technology",
    title: "Developer Dashboard",
    industry: "Technology",
    layout: "technology",
    theme: "developer-dark",
    description: "SaaS-inspired dark-mode console layout modeled after GitHub, Stripe, and Linear. Showcases custom code terminal outputs, tech stack chips, repositories, and automated Git contribution calendars.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    style: "Developer Console Dark",
    supportedRoles: [
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "AI Engineer",
      "Cyber Security Expert",
      "Cloud Engineer",
      "DevOps Engineer",
      "Data Analyst",
      "Data Scientist"
    ]
  },
  {
    slug: "creative",
    title: "Creative Showcase",
    industry: "Creative",
    layout: "creative",
    theme: "creative-purple",
    description: "Visually striking layout inspired by Behance and Awwwards. Highlight visual projects, design processes, before/after comparisons, client lists, and awards with fluid, responsive masonry galleries.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    style: "Showcase Grid Purple",
    supportedRoles: [
      "Graphic Designer",
      "UI/UX Designer",
      "Photographer",
      "Video Editor",
      "Content Creator",
      "Animator"
    ]
  },
  {
    slug: "business",
    title: "Founder Brand",
    industry: "Business",
    layout: "business",
    theme: "business-gold",
    description: "High-credibility professional branding format for executives and entrepreneurs. Highlights built ventures, speaking keynotes, media mentions, angel investments, and client case studies.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    style: "Editorial Executive Gold",
    supportedRoles: [
      "Entrepreneur",
      "Founder",
      "Consultant",
      "Business Coach",
      "Freelancer",
      "Public Speaker"
    ]
  },
  {
    slug: "academic",
    title: "Research Scholar",
    industry: "Academic",
    layout: "academic",
    theme: "academic-green",
    description: "Clean, academic-first publication database design. Showcases journal papers, educational timelines, citation metrics, h-index charts, and ongoing scientific grants.",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    style: "Clean Scholarly Green",
    supportedRoles: [
      "Teacher",
      "Professor",
      "Student",
      "Research Scholar"
    ]
  },
  {
    slug: "engineering",
    title: "Blueprint Professional",
    industry: "Engineering",
    layout: "engineering",
    theme: "industrial-blue",
    description: "Technical workspace layout with schematic blueprint design markers. Features construction project timelines, CAD drawing portfolios, technical certifications, and build metrics.",
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    style: "Schematic Blueprint Blue",
    supportedRoles: [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Architect",
      "Interior Designer",
      "Project Manager"
    ]
  },
  {
    slug: "healthcare",
    title: "Medical Professional",
    industry: "Healthcare",
    layout: "healthcare",
    theme: "healthcare-teal",
    description: "Clinical, trust-building light layouts suitable for doctors and trainers. Focuses on clinical specializations, treatment catalogs, patient testimonials, and integrated appointment scheduling forms.",
    thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
    style: "Trust Clinical Teal",
    supportedRoles: [
      "Doctor",
      "Therapist",
      "Fitness Trainer",
      "Nutritionist"
    ]
  },
  {
    slug: "legal",
    title: "Authority & Trust",
    industry: "Legal",
    layout: "legal",
    theme: "luxury-black",
    description: "High-prestige black and gold branding modeled after premium corporate law firms. Highlights case results ledger lists, litigation practice areas, legal books, and advisory consultancy request forms.",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    style: "High-Contrast Luxury Black",
    supportedRoles: [
      "Lawyer",
      "Legal Advisor",
      "Corporate Consultant"
    ]
  },
  {
    slug: "finance",
    title: "Financial Authority",
    industry: "Finance",
    layout: "finance",
    theme: "finance-emerald",
    description: "Premium investment-oriented layout inspired by Deloitte and KPMG. Displays audit ledgers, accounting certifications, portfolio management ratios, and customer compliance histories.",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    style: "Corporate Audit Emerald",
    supportedRoles: [
      "Chartered Accountant",
      "Financial Advisor",
      "Investment Consultant",
      "Tax Consultant"
    ]
  },
  {
    slug: "marketing",
    title: "Growth Expert",
    industry: "Marketing",
    layout: "marketing",
    theme: "marketing-orange",
    description: "Results-driven campaign growth portfolio. Built around traffic charts, CTR conversion analytics metrics, brands worked with, and advertising campaign cards.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    style: "Analytics Growth Orange",
    supportedRoles: [
      "Digital Marketer",
      "SEO Specialist",
      "Social Media Manager",
      "Growth Marketer"
    ]
  },
  {
    slug: "sports",
    title: "Athlete Profile",
    industry: "Sports",
    layout: "sports",
    theme: "sports-orange",
    description: "Energetic sports profile showing athletic statistics, physical conditioning benchmarks, championship medals, and sponsorship assets.",
    thumbnail: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    style: "High-Energy Athletic Orange",
    supportedRoles: [
      "Athlete",
      "Coach",
      "Trainer",
      "Sports Consultant"
    ]
  }
];

export const getThemeBySlug = (slug) =>
  industryThemes.find((theme) => theme.slug === slug);
