import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getImg } from '../../utils/images';
import { MdArrowForward, MdCalendarToday, MdAccessTime } from 'react-icons/md';

const BlogCard = ({ id, title, category, date, readTime, shortDesc, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-xl overflow-hidden border border-border bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left"
    >
      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img
          src={getImg(image)}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
          {category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
            <div className="flex items-center gap-1">
              <MdCalendarToday className="text-primary text-sm" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MdAccessTime className="text-primary text-sm" />
              <span>{readTime}</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
            {shortDesc}
          </p>
        </div>

        <Link
          to={`/careers`} // Redirects to careers/culture or similar, or just static details
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link mt-auto"
        >
          <span>Read Full Article</span>
          <MdArrowForward className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
