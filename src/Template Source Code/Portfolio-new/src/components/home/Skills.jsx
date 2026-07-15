import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "AWS", "Vercel"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Git", "Webpack", "Vite", "Jest"]
    }
  ];

  return (
    <section className="py-20 md:py-32 relative bg-surface/10 border-y border-border/50">
      <div className="container">
        <SectionHeader title="Technical Arsenal" subtitle="Skills" align="center" />
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-8"
            >
              <h3 className="text-2xl font-heading mb-8 pb-4 border-b border-white/10">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full glass border-white/20 text-sm font-medium cursor-default hover:bg-accent/10 hover:border-accent/30 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
