import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home as HomeIcon, Sofa, Layers } from 'lucide-react';

const services = [
  { icon: <Building size={32}/>, title: "Architecture Design", desc: "Full-scale architectural planning and structural design for residential and commercial buildings." },
  { icon: <HomeIcon size={32}/>, title: "Interior Design", desc: "Transforming empty spaces into luxurious, functional, and aesthetically pleasing environments." },
  { icon: <Sofa size={32}/>, title: "Furniture Curation", desc: "Sourcing and customizing premium furniture pieces that complement the overall design." },
  { icon: <Layers size={32}/>, title: "Renovation", desc: "Modernizing existing structures while preserving their core architectural integrity." },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-[var(--background-color)] min-h-screen">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-[var(--text-muted)] text-lg">Comprehensive design solutions tailored to meet the highest standards of luxury and functionality.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[var(--surface-color)] p-12 border border-[var(--border-color)] text-left hover:border-[var(--primary-color)] transition-colors group"
            >
              <div className="text-[var(--primary-color)] mb-6">{service.icon}</div>
              <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-[var(--text-muted)]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
