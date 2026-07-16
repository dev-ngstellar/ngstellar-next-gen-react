import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getIcon } from '../../utils/icons';
import { MdArrowForward } from 'react-icons/md';

const ServiceCard = ({ id, title, icon, shortDesc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between bg-white border border-border rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Bottom sliding accent border */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" />
      
      <div>
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {getIcon(icon, 'text-2xl')}
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {shortDesc}
        </p>
      </div>

      <Link
        to={`/services#${id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
      >
        <span>Learn More</span>
        <MdArrowForward className="group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
