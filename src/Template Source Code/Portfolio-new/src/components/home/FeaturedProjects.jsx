import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Nova Financial",
      category: "Fintech Web App",
      description: "A comprehensive dashboard for managing crypto assets with real-time market data, advanced charting, and predictive ML models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Framer Motion", "Recharts"],
      link: "#"
    },
    {
      title: "Lumiere Aesthetics",
      category: "E-Commerce",
      description: "A headless Shopify storefront for a premium skincare brand. Features ultra-smooth page transitions and a custom 3D product viewer.",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2164&auto=format&fit=crop",
      tags: ["Next.js", "Shopify API", "Three.js", "GSAP"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container">
        <SectionHeader title="Selected Work" subtitle="Portfolio" />
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reversed={index % 2 !== 0} />
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="text-lg font-medium text-accent hover:text-primary transition-colors flex items-center gap-2 group">
            View All Projects
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, reversed }) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
      {/* Visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-3/5 group relative"
      >
        <div className="relative rounded-3xl overflow-hidden glass p-4 aspect-[4/3]">
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating Live Button */}
          <a href={project.link} className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
              <span className="font-medium">View</span>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-2/5 space-y-6"
      >
        <div>
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">{project.category}</p>
          <h3 className="text-4xl lg:text-5xl font-heading">{project.title}</h3>
        </div>
        
        <p className="text-lg text-muted leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-6 flex gap-4">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
            <Code2 size={18} />
            View Source
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
            <ArrowUpRight size={18} />
            Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
}
