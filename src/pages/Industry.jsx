import { useState, useRef } from 'react';
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWallet, FaShoppingCart, FaDumbbell, FaGraduationCap, FaTshirt, FaFirstAid, FaBuilding, FaBolt, FaArrowRight, FaRocket, FaShieldAlt, FaLayerGroup, FaHandshake } from 'react-icons/fa';
import Typewriter from '../components/Typewriter';
import StarBorder from '../components/StarBorder';

export default function Industry() {
  const industries = [
    {
      title: "Fintech",
      points: ["Secure digital systems", "Scalable SaaS platforms", "Compliance-ready builds", "Dashboards & payments"],
      icon: <FaWallet />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/fintech.webp" // Fintech image
    },
    {
      title: "E-Commerce",
      points: ["High-speed platforms", "UX & conversion focus", "Payments & workflows", "Growth scalability"],
      icon: <FaShoppingCart />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/e-commerce.webp" // E-commerce image
    },
    {
      title: "Health & Fitness",
      points: ["Engagement-driven UX", "Fitness platforms", "Wellness & content hubs", "Performance & usability"],
      icon: <FaDumbbell />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/healthy.webp" // Health image
    },
    {
      title: "Education",
      points: ["Learning platforms", "Student / parent UX", "Admin-friendly systems", "Scalable content"],
      icon: <FaGraduationCap />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/education.webp" // Education image
    },
    {
      title: "Fashion & Retail",
      points: ["Brand-centric design", "Fast & immersive UX", "Conversion optimization", "Online sales growth"],
      icon: <FaTshirt />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/close-up-hand-holding.webp" // Best fit for fashion/retail (hand holding bag/product)
    },
    {
      title: "Healthcare",
      points: ["Secure platforms", "Patient-friendly UX", "Accessibility focus", "Regulatory alignment"],
      icon: <FaFirstAid />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/man-holds-medical-medical.webp" // Healthcare image
    },
    {
      title: "Enterprise",
      points: ["Reliable systems", "Large-scale platforms", "Integrations & tooling", "Digital transformation"],
      icon: <FaBuilding />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/enterprise.webp" // Enterprise image
    },
    {
      title: "Power & Energy",
      points: ["Informative platforms", "Infrastructure focus", "Lead generation", "Stakeholder engagement"],
      icon: <FaBolt />,
      gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      image: "/10120542.webp" // Assumed Power & Energy image
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30">
      <Helmet>
        <title>Industries We Serve - NG Stellar</title>
        <meta
          name="description"
          content="Discover the wide range of industries we serve with tailored technology solutions."
        />
        <meta
          name="keywords"
          content="Industries Served, Fintech, Healthcare IT, E-commerce Solutions, EdTech, Retail Technology, Enterprise Software"
        />
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden flex items-center justify-center pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-10 md:pb-16">
             {/* Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
             </div>
    
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-5xl mx-auto px-4 text-center"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
                  Industry
                </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight h-auto md:h-[160px] flex flex-col justify-center">
                <span>We Design and Build Digital Solutions <br className="hidden md:block"/>Across Industries That Demand</span>
                <span className="block mt-2">
                   <Typewriter 
                     words={['Performance', 'Security', 'Scalability']} 
                     className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 break-words"
                     wait={2000}
                   />
                </span>
              </h1>
        <div className="mt-10 text-slate-400 text-sm sm:text-base font-medium tracking-wide flex flex-wrap justify-center gap-2">
          {industries.map((ind, i) => (
            <div key={i} className="flex items-center">
              <span>{ind.title}</span>
              {i < industries.length - 1 && <span className="mx-2 text-slate-600">|</span>}
            </div>
          ))}
        </div>
            </motion.div>
          </section>

      {/* 3. TIMELINE SECTION */}
      <section className="py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative px-4 md:px-0">
          
          {/* Central Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent md:-translate-x-1/2 hidden md:block"></div>

          <div className="flex flex-col gap-24 md:gap-32">
            {industries.map((industry, index) => (
              <IndustryBlock key={index} data={industry} index={index} />
            ))}
          </div>

        </div>
      </section>


      {/* 12. CROSS-INDUSTRY VALUE SECTION */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(79,70,229,0.05),transparent)] pointer-events-none" />
         
         <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">What Stays <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400'>Consistent ?</span></h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                   Regardless of the industry, our core engineering principles remain unshakeable.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SpotlightCard>
                   <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl text-indigo-400 mb-6">
                      <FaRocket />
                   </div>
                   <h3 className="text-xl font-bold text-slate-100 mb-3">Performance-first development</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      We optimize every line of code for speed, ensuring instant load times and smooth interactions even under heavy load.
                   </p>
                </SpotlightCard>

                <SpotlightCard>
                   <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-2xl text-fuchsia-400 mb-6">
                      <FaShieldAlt />
                   </div>
                   <h3 className="text-xl font-bold text-slate-100 mb-3">Security & compliance awareness</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      Built-in protection against threats with strict adherence to industry regulations like GDPR, HIPAA, and PCI-DSS.
                   </p>
                </SpotlightCard>

                <SpotlightCard>
                   <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl text-cyan-400 mb-6">
                      <FaLayerGroup />
                   </div>
                   <h3 className="text-xl font-bold text-slate-100 mb-3">Scalable architecture</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      Future-proof systems designed to grow with your business, handling increased traffic and data without compromise.
                   </p>
                </SpotlightCard>

                <SpotlightCard>
                   <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-2xl text-pink-400 mb-6">
                      <FaHandshake />
                   </div>
                   <h3 className="text-xl font-bold text-slate-100 mb-3">Business-aligned digital solutions</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      We don't just write code; we solve business problems. Every feature is built with your ROI and growth goals in mind.
                   </p>
                </SpotlightCard>
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
         <div className={`w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] z-20 relative`}>
             <div className="text-indigo-400 text-lg">{data.icon}</div>
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
        
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{data.title}</h2>
        <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${data.gradient} mb-6`}></div>
        <ul className={`space-y-3 flex flex-col items-center ${align === 'right' ? 'md:items-end' : 'md:items-start'}`}>
            {data.points.map((point, i) => (
            <li key={i} className={`flex items-center gap-3 text-lg text-slate-300 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                {point}
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
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 p-8 hover:border-slate-700 transition-colors cursor-default ${className}`}
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
