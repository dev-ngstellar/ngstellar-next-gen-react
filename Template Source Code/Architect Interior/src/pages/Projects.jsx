import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Lumina Villa', category: 'Residential', location: 'Los Angeles', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80' },
  { id: 2, title: 'The Zenith Office', category: 'Commercial', location: 'London', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80' },
  { id: 3, title: 'Aura Boutique', category: 'Retail', location: 'Paris', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80' },
  { id: 4, title: 'Serenity Resort', category: 'Hospitality', location: 'Bali', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80' },
  { id: 5, title: 'Oasis Penthouse', category: 'Residential', location: 'Dubai', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
  { id: 6, title: 'Verdant Corporate', category: 'Commercial', location: 'Tokyo', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80' },
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Retail'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-[var(--background-color)] min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Projects</h1>
          <p className="text-[var(--text-muted)] text-lg">A curated selection of our most prestigious architecture and interior design works across the globe.</p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 border transition-all duration-300 uppercase tracking-widest text-sm ${
                activeCategory === cat 
                  ? 'border-[var(--primary-color)] bg-[var(--primary-color)] text-white' 
                  : 'border-[var(--border-color)] text-[var(--text-main)] hover:border-[var(--primary-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              key={project.id}
              className="group relative overflow-hidden h-[500px] cursor-pointer"
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-sm uppercase tracking-widest bg-[var(--primary-color)] px-3 py-1 mb-3 inline-block">{project.category}</span>
                <h3 className="text-3xl font-heading mb-1">{project.title}</h3>
                <p className="text-gray-300 font-light">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
