import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 bg-[var(--surface)] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1964&auto=format&fit=crop"
                alt="Photographer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 glass-card p-6 md:p-8 w-48 md:w-64 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-serif text-[var(--accent)] mb-2">12+</h3>
              <p className="text-sm text-[var(--muted)] uppercase tracking-widest">Years of Experience</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:pl-10"
          >
            <h4 className="text-[var(--accent)] uppercase tracking-[0.3em] text-sm mb-6">The Artist</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              A vision shaped by <span className="italic text-gray-400">light</span> and <span className="italic text-gray-400">shadow</span>.
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8 font-light leading-relaxed">
              Based in New York, traveling worldwide. I specialize in capturing raw, authentic moments with an editorial, cinematic approach. My work is heavily influenced by classical painting and modern luxury aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">30+</h4>
                <p className="text-[var(--muted)] text-sm uppercase tracking-wider">Countries Visited</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-white mb-2">15</h4>
                <p className="text-[var(--muted)] text-sm uppercase tracking-wider">International Awards</p>
              </div>
            </div>

            <a href="/gallery" className="inline-flex items-center gap-2 group pb-2 border-b border-[var(--border)] hover:border-[var(--accent)] transition-colors">
              <span className="uppercase tracking-widest text-sm group-hover:text-[var(--accent)] transition-colors">Read Full Story</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
