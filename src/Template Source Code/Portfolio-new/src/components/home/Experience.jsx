import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Stripe",
      period: "2023 - Present",
      description: "Led the development of the new dashboard interface. Improved rendering performance by 40% and mentored a team of 5 junior developers."
    },
    {
      role: "UI/UX Designer & Developer",
      company: "Vercel",
      period: "2020 - 2023",
      description: "Designed and implemented marketing pages, significantly increasing conversion rates. Worked closely with the core team on Next.js template integrations."
    },
    {
      role: "Frontend Web Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Built award-winning Awwwards websites for high-profile clients using WebGL, Three.js, and GSAP."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container max-w-4xl">
        <SectionHeader title="Career Path" subtitle="Experience" align="left" />
        
        <div className="mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-background group-hover:scale-150 transition-transform"></div>
              </div>
              
              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="font-heading text-2xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="text-muted font-medium mb-4">{exp.company}</div>
                <p className="text-muted leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
