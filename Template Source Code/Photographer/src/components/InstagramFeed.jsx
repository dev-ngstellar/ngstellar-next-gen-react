import React from 'react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size = 24, className = "", strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const feedImages = [
  "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504280066-11f8e12b1842?q=80&w=2069&auto=format&fit=crop",
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-2"
          >
            Follow the Journey
          </motion.h2>
          <p className="text-[var(--muted)] font-light">@ngstellar_photography</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-full transition-all duration-300 group"
        >
          <InstagramIcon size={20} className="group-hover:scale-110 transition-transform" />
          <span className="uppercase tracking-widest text-xs leading-none pt-[2px]">Follow on Instagram</span>
        </a>
      </div>


    </section>
  );
};

export default InstagramFeed;
