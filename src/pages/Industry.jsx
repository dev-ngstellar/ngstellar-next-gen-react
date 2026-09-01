import { useState, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaWallet,
  FaShoppingCart,
  FaDumbbell,
  FaGraduationCap,
  FaTshirt,
  FaFirstAid,
  FaBuilding,
  FaBolt,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaLayerGroup,
  FaHandshake,
  FaCogs,
  FaMicrochip
} from 'react-icons/fa';
import Typewriter from '../components/Typewriter';

export default function Industry() {
  const industries = [
    {
      title: "Manufacturing & Industrial Engineering",
      points: ["Production line telemetry & IoT integration", "Predictive maintenance dashboards", "ERP & supply chain synchronization", "Work order & inventory tracking"],
      icon: <FaCogs />,
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
      image: "/enterprise.webp"
    },
    {
      title: "Textiles, Garments & Export Clusters",
      points: ["Order-to-shipment tracking systems", "Dyeing & weaving batch automation", "Multi-warehouse stock reconciliation", "B2B client export portals"],
      icon: <FaTshirt />,
      gradient: "bg-gradient-to-r from-indigo-500 to-violet-500",
      image: "/close-up-hand-holding.webp"
    },
    {
      title: "Fintech & Financial Services",
      points: ["Secure digital transactional systems", "Scalable loan & billing platforms", "Compliance & audit-ready architectures", "Executive reporting & ledger dashboards"],
      icon: <FaWallet />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/fintech.webp"
    },
    {
      title: "Retail & Omnichannel Commerce",
      points: ["High-speed e-commerce platforms", "Multi-branch POS & inventory sync", "Automated customer loyalty workflows", "Conversion rate optimization (CRO)"],
      icon: <FaShoppingCart />,
      gradient: "bg-gradient-to-r from-fuchsia-500 to-pink-500",
      image: "/e-commerce.webp"
    },
    {
      title: "Healthcare & Life Sciences",
      points: ["Secure patient management platforms", "Diagnostic lab workflow automation", "HIPAA & regulatory data compliance", "Mobile tele-consultation applications"],
      icon: <FaFirstAid />,
      gradient: "bg-gradient-to-r from-teal-500 to-emerald-500",
      image: "/man-holds-medical-medical.webp"
    },
    {
      title: "Education & Learning Ecosystems",
      points: ["Scalable learning management systems (LMS)", "Fee payment & student lifecycle portals", "Parent-teacher communication apps", "Automated grading & attendance tools"],
      icon: <FaGraduationCap />,
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      image: "/education.webp"
    },
    {
      title: "Power, Energy & Utilities",
      points: ["Grid monitoring & asset telemetry", "Regulatory billing & tariff management", "Field-force maintenance tracking", "Environmental & ESG reporting platforms"],
      icon: <FaBolt />,
      gradient: "bg-gradient-to-r from-amber-500 to-orange-500",
      image: "/10120542.webp"
    },
    {
      title: "Health, Fitness & Wellness",
      points: ["Member subscription & booking engines", "Mobile fitness & workout tracking apps", "Content streaming & community hubs", "Automated billing & renewal workflows"],
      icon: <FaDumbbell />,
      gradient: "bg-gradient-to-r from-rose-500 to-pink-500",
      image: "/healthy.webp"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30">
      <Helmet>
        <title>Industries We Transform | NG Stellar Technology Implementation</title>
        <meta
          name="description"
          content="NG Stellar delivers digital transformation, process automation, and custom software tailored to manufacturing, textiles, fintech, healthcare, retail, and energy sectors."
        />
        <meta
          name="keywords"
          content="Industry Digital Transformation, Manufacturing IT, Textile Process Automation, Healthcare Software, Fintech Platforms, Enterprise Systems"
        />
        <link rel="canonical" href="https://ngstellar.com/industry" />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden flex items-center justify-center pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-10 md:pb-16">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-200 text-xs font-medium uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
            Sector Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight flex flex-col justify-center">
            <span>Engineering Digital Transformation Across Industries That Demand</span>
            <span className="block mt-2">
              <Typewriter 
                words={['Operational Rigor', 'High Performance', 'Scalability', 'System Stability']} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-300 break-words"
                wait={2000}
              />
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            We bridge deep industry domain knowledge with custom software engineering and enterprise process automation to evaluate, digitize, systemize, and scale your operations.
          </p>
          <div className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide flex flex-wrap justify-center gap-2">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center">
                <span>{ind.title}</span>
                {i < industries.length - 1 && <span className="mx-2 text-slate-600">|</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. TIMELINE OF SECTORS */}
      <section className="py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative px-4 md:px-0">
          {/* Central Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/30 to-transparent md:-translate-x-1/2 hidden md:block"></div>

          <div className="flex flex-col gap-24 md:gap-32">
            {industries.map((industry, index) => (
              <IndustryBlock key={index} data={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CROSS-INDUSTRY VALUE SECTION */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(79,70,229,0.05),transparent)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Stays <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-emerald-400">Consistent</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Regardless of the sector, our core delivery principles and architectural rigor remain constant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-2xl text-primary-400 mb-6">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance-first Engineering</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We optimize every system for high throughput, sub-second latency, and stability under heavy operational loads.
              </p>
            </SpotlightCard>

            <SpotlightCard>
              <div className="w-12 h-12 rounded-xl bg-secondary-500/10 flex items-center justify-center text-2xl text-secondary-400 mb-6">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security & Compliance</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Role-based access controls, encrypted databases, automated backup snapshots, and compliance with statutory data regulations.
              </p>
            </SpotlightCard>

            <SpotlightCard>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl text-cyan-400 mb-6">
                <FaLayerGroup />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modular, Scalable Architecture</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Future-proof system architectures designed to support multi-branch growth, new product lines, and high transaction volumes without friction.
              </p>
            </SpotlightCard>

            <SpotlightCard>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl text-emerald-400 mb-6">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business-Aligned Outcomes</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We don't build software in silos. Every tool, workflow automation, and custom dashboard is engineered to generate measurable ROI and sustainable efficiency.
              </p>
            </SpotlightCard>
          </div>

          {/* CTA Footer */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Discuss Your Industry Requirements</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function IndustryBlock({ data, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={`px-4 relative flex flex-col items-center gap-12 md:gap-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Central Connector Dot (Desktop) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20 relative">
          <div className="text-primary-400 text-lg">{data.icon}</div>
        </div>
      </div>

      {/* Image Side */}
      <div className={`w-full md:w-1/2 relative ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
        <IndustryImage data={data} position={isEven ? 'right' : 'left'} />
      </div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 md:text-right md:items-end' : 'md:pl-16 md:text-left md:items-start'}`}>
        <IndustryContent data={data} align={isEven ? 'right' : 'left'} />
      </div>
    </motion.section>
  );
}

const IndustryContent = ({ data, align }) => (
  <div className={`flex flex-col items-center text-center ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-2xl text-white mb-6 md:hidden`}>
      {data.icon}
    </div>
    
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white">{data.title}</h2>
    <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${data.gradient} mb-6`}></div>
    <ul className={`space-y-3 flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'}`}>
      {data.points.map((point, i) => (
        <li key={i} className={`flex items-center gap-3 text-sm sm:text-base text-slate-300 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_10px_rgba(99,102,241,0.8)] shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const IndustryImage = ({ data, position }) => (
  <div className="relative group perspective-1000">
    <div className={`relative rounded-3xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] ${position === 'right' ? 'origin-left' : 'origin-right'}`}>
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-20 mix-blend-overlay z-10`}></div>
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-full h-64 md:h-80 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
    {/* Floating backdrop decoration */}
    <div className={`absolute -inset-4 bg-gradient-to-r ${data.gradient} opacity-20 blur-2xl -z-10 rounded-full group-hover:opacity-30 transition-opacity duration-500`}></div>
  </div>
);

// Spotlight Card Component
function SpotlightCard({ children, className = "" }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 hover:border-primary-500/40 transition-colors cursor-default ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition opacity-0 duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10 text-left">{children}</div>
    </div>
  );
}
