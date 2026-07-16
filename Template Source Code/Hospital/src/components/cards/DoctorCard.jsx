import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';

const DoctorCard = ({ name, spec, exp, img }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card hover:bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-white flex flex-col group"
    >
      {/* Doctor Photo */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img 
          src={img} 
          alt={name} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23E2E8F0'/><path d='M50 45c7.7 0 14-6.3 14-14s-6.3-14-14-14-14 6.3-14 14 6.3 14 14 14zm0 6c-11.6 0-21 9.4-21 21v3h42v-3c0-11.6-9.4-21-21-21z' fill='%2394A3B8'/><circle cx='50' cy='31' r='4' fill='%2364748B'/></svg>";
          }}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Floating Social Icons Overlay */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <a href="#" className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white shadow-md transition-colors"><FaFacebookF size={12} /></a>
          <a href="#" className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white shadow-md transition-colors"><FaTwitter size={12} /></a>
          <a href="#" className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white shadow-md transition-colors"><FaLinkedinIn size={12} /></a>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-6 flex flex-col flex-1 text-left">
        <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1.5">{spec}</span>
        <h3 className="text-lg md:text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs md:text-sm text-gray-400 mb-6 font-medium">Experience: {exp}</p>
        
        {/* Actions */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-3">
          <Link to="/contact" className="w-full">
            <Button variant="secondary" className="w-full !py-2.5 text-xs md:text-sm">
              Book Appointment
            </Button>
          </Link>
          <a 
            href="mailto:consult@stellarhospital.com" 
            className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 transition-all flex-shrink-0"
            title="Email Consultation"
          >
            <FaEnvelope size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
