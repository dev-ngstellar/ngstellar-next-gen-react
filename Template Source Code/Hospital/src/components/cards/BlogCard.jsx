import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, img, date, author, cat }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card hover:bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-white/40 flex flex-col group transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-50">
        <img 
          src={img} 
          alt={title} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F1F5F9'/><rect x='25' y='20' width='50' height='60' rx='2' fill='%23CBD5E1'/><line x1='35' y1='35' x2='65' y2='35' stroke='%2394A3B8' stroke-width='4'/><line x1='35' y1='50' x2='65' y2='50' stroke='%2394A3B8' stroke-width='4'/><line x1='35' y1='65' x2='55' y2='65' stroke='%2394A3B8' stroke-width='4'/></svg>";
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Tag */}
        <span className="absolute left-4 top-4 text-[10px] font-bold text-white uppercase bg-primary px-3 py-1 rounded-full shadow-sm">
          {cat}
        </span>
      </div>

      <div className="p-6 text-left flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-semibold">
          <span>{date}</span>
          <span>•</span>
          <span>By {author}</span>
        </div>

        <h3 className="font-extrabold text-base md:text-lg text-dark mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>

        <Link 
          to="/blog" 
          className="mt-auto font-bold text-xs md:text-sm text-primary flex items-center gap-1 hover:text-primary-light transition-colors"
        >
          Read Article <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">▶</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
