import { images } from './images';

export const companyData = {
  name: "Solarix",
  logo: images.logo,
  tagline: "Clean, Sustainable & Reliable Solar Power",
  subTagline: "Empowering homes, commercial buildings, and industrial facilities with next-generation solar energy and battery storage systems.",
  description: "Solarix is a premier renewable energy solution provider specializing in high-efficiency photovoltaic solar installations, battery storage, and smart grid management. We help clients cut energy costs while building a cleaner future.",
  foundedYear: 2014,

  // Centralized Image References
  heroImage: images.hero,
  aboutImage: images.about.installation,
  aboutTeamImage: images.about.team,
  ctaImage: images.cta,
  
  // Contact Details
  contact: {
    phone: "+1 (800) 555-SOLAR",
    phoneClean: "+18005557652",
    email: "info@solarix-energy.com",
    address: "742 Evergreen Terrace, Suite 400, GreenTech Valley, CA 94025",
    workingHours: "Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM",
    emergencySupport: "24/7 Monitoring & Emergency Support Available"
  },

  // Social Links
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter / X", url: "https://twitter.com", icon: "Twitter" },
    { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube" }
  ],

  // Key Statistics
  stats: [
    { id: "projects", value: "1,250+", label: "Projects Completed", description: "Successful residential & commercial installs" },
    { id: "capacity", value: "350+ MW", label: "Solar Capacity Installed", description: "Clean electricity generated annually" },
    { id: "satisfaction", value: "99.4%", label: "Customer Satisfaction", description: "Based on post-installation reviews" },
    { id: "co2", value: "420,000", label: "Tons of CO2 Saved", description: "Equivalent to planting 7 million trees" }
  ],

  // Trusted Clients / Partners Logos (represented as clean modern placeholders)
  trustedBy: [
    { name: "EcoGrid Global", logoText: "ECOGRID" },
    { name: "TerraPower Industries", logoText: "TERRAPOWER" },
    { name: "CleanTech Venture", logoText: "CLEANTECH" },
    { name: "NextGen Logistics", logoText: "NEXTGEN" },
    { name: "Apex Commercial Group", logoText: "APEX" },
    { name: "Verde Infrastructure", logoText: "VERDE" }
  ],

  // Process Steps
  process: [
    {
      step: "01",
      title: "Free Consultation",
      description: "We review your current energy consumption, roof layout, and energy goals with zero obligation."
    },
    {
      step: "02",
      title: "Site Assessment & Engineering",
      description: "Our certified engineers conduct a 3D shading analysis and custom-design your solar array."
    },
    {
      step: "03",
      title: "Permitting & Approval",
      description: "We handle all local permits, utility grid connection filings, and rebate applications for you."
    },
    {
      step: "04",
      title: "Precision Installation",
      description: "Our licensed solar technicians install high-efficiency panels and battery storage in 1-3 days."
    },
    {
      step: "05",
      title: "Grid Activation & Support",
      description: "System power-on, mobile app setup, and 25-year performance monitoring & warranty coverage."
    }
  ],

  // Why Choose Us Core Highlights
  whyChooseUs: [
    {
      title: "Tier-1 High-Efficiency Equipment",
      description: "We partner exclusively with top-tier panel and inverter manufacturers offering 25+ year warranties.",
      icon: "ShieldCheck"
    },
    {
      title: "Turnkey Installation Service",
      description: "From design and permits to panel mounting and utility interconnection, we manage every step.",
      icon: "Wrench"
    },
    {
      title: "Maximized Tax Credits & Savings",
      description: "Our experts help you lock in federal ITC tax credits, local rebates, and net metering benefits.",
      icon: "Coins"
    },
    {
      title: "24/7 Smart Monitoring",
      description: "Real-time mobile app tracking allows you to monitor energy production and battery state anywhere.",
      icon: "Activity"
    }
  ],

  // Core Values
  values: [
    {
      title: "Sustainability First",
      description: "We drive the global transition toward 100% renewable clean energy to preserve our planet.",
      icon: "Leaf"
    },
    {
      title: "Engineering Excellence",
      description: "We never compromise on safety, code compliance, or structural panel integrity.",
      icon: "Award"
    },
    {
      title: "Transparency & Trust",
      description: "Clear upfront pricing, no hidden costs, and honest ROI estimates before you sign.",
      icon: "CheckCircle2"
    },
    {
      title: "Customer Commitment",
      description: "Long-term partnership with ongoing maintenance, panel cleaning, and lifetime support.",
      icon: "HeartHandshake"
    }
  ]
};
