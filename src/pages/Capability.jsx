import { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { FaPaintBrush, FaSearch, FaLayerGroup, FaDesktop, FaCode, FaChartLine } from 'react-icons/fa';
import StarBorder from '../components/StarBorder';

function CapabilityCard({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-pink-500/30 transition-all group overflow-hidden relative cursor-default flex flex-col"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
        <div className="text-8xl">{item.icon}</div>
      </div>

      <div className="text-3xl mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
        {item.icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
      <p className={`text-slate-400 leading-relaxed text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>
        {item.description}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-pink-400 text-xs font-bold hover:underline self-start uppercase tracking-wider"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </motion.div>
  );
}

export default function Capability() {
  const capabilities = [
    {
      title: "Branding",
      description: "We help businesses define and express their brand clearly across digital platforms. Our branding services go beyond logos and colours to include brand positioning, visual identity systems, messaging, and consistency across websites, social media, and marketing assets—ensuring your brand looks credible, professional, and memorable.",
      icon: <FaPaintBrush className="text-pink-400" />
    },
    {
      title: "Research & Strategy",
      description: "We start with understanding your business, industry, customers, and competitors. Through market research, user analysis, and goal mapping, we create digital strategies that align technology, design, and marketing with real business outcomes—whether it’s growth, visibility, or conversion.",
      icon: <FaSearch className="text-indigo-400" />
    },
    {
      title: "UI / UX Design",
      description: "We design user experiences that are intuitive, accessible, and conversion-focused. By combining user research, wireframing, prototyping, and usability testing, we ensure your product or website is easy to navigate, visually engaging, and optimised for real user behaviour.",
      icon: <FaLayerGroup className="text-fuchsia-400" />
    },
    {
      title: "Website Design",
      description: "We design modern, responsive websites that reflect your brand and support your business goals. Our websites are optimised for performance, accessibility, SEO, and mobile devices—ensuring a seamless experience across all screens and platforms.",
      icon: <FaDesktop className="text-violet-400" />
    },
    {
      title: "Development",
      description: "We build reliable, secure, and scalable web and application solutions using modern technologies. From business websites to custom portals and SaaS platforms, our development approach focuses on performance, maintainability, and long-term scalability.",
      icon: <FaCode className="text-cyan-400" />
    },
    {
      title: "Digital Marketing",
      description: "We help businesses grow their online presence and generate leads through SEO, content marketing, paid campaigns, and conversion optimisation. Our digital marketing strategies are data-driven and focused on measurable outcomes rather than vanity metrics.",
      icon: <FaChartLine className="text-emerald-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-16">
      <Helmet>
        <title>Our Capabilities - NG Stellar</title>
        <meta
          name="description"
          content="Explore our diverse capabilities in technology, consulting, and digital transformation."
        />
        <meta
          name="keywords"
          content="Our Capabilities, Software Development, Cloud Solutions, Mobile Apps, IT Services, Tech Expertise"
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative px-4 mb-12 sm:mb-16 text-center">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
         >
           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 text-violet-200 text-xs font-medium uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              Our Expertise
            </span> 
           <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
             Comprehensive Digital Solutions <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400">
               for Modern Businesses.
             </span>
           </h1>
           <div className="mt-6 flex justify-center">
           <p className="max-w-xl text-center text-base sm:text-lg text-slate-200 leading-relaxed drop-shadow-md">
             From strategy to execution, we provide the tools and expertise you need to succeed in the digital landscape.
           </p>
           </div>
         </motion.div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
             <CapabilityCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

    </div>
  );
}
