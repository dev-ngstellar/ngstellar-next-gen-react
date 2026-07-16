import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMaximize, FiEye } from 'react-icons/fi';
import { FaBed, FaBath } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../config/themes';

export const PropertyCard = ({ property }) => {
  const { currentTheme } = useTheme();

  const formatPrice = (price, status) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
    return status === 'For Lease' || status === 'For Rent' ? `${formatted}/mo` : formatted;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Property Image & Status Badges */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Status overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded-full text-white bg-slate-900/80 backdrop-blur-md">
            {property.type}
          </span>
          {property.isFeatured && (
            <span
              className="text-[10px] tracking-wider uppercase font-bold px-3 py-1.5 rounded-full text-white"
              style={{ backgroundColor: currentTheme.primary }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Price tag */}
        <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-white font-semibold text-lg px-4 py-1.5 rounded-2xl border border-white/10">
          {formatPrice(property.price, property.status)}
        </div>

        {/* ROI badge (For investment) */}
        {property.isInvestment && property.roi && (
          <div className="absolute bottom-4 left-4 bg-emerald-500/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1.5 rounded-full">
            ROI: {property.roi}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-1.5 text-xs text-slate-400 mb-2">
          <FiMapPin className="text-sm" style={{ color: currentTheme.primary }} />
          <span>{property.location}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-theme-primary transition-colors line-clamp-1">
          {property.title}
        </h3>

        <p className="text-xs text-slate-500 line-clamp-2 mb-6 leading-relaxed">
          {property.description}
        </p>

        {/* Specs footer */}
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 text-xs text-slate-500 mt-auto">
          {property.bedrooms > 0 && (
            <div className="flex items-center space-x-1.5 justify-center">
              <FaBed className="text-slate-400 text-sm" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center space-x-1.5 justify-center">
              <FaBath className="text-slate-400 text-sm" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center space-x-1.5 justify-center col-span-1">
            <FiMaximize className="text-slate-400 text-sm" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* CTA link */}
        <Link
          to={`/property/${property.id}`}
          className="mt-4 flex items-center justify-center space-x-2 w-full py-3 bg-slate-50 hover:bg-theme-primary text-slate-700 hover:text-black rounded-2xl text-xs font-semibold tracking-wider uppercase transition-all duration-300"
        >
          <FiEye />
          <span>View Details</span>
        </Link>
      </div>
    </motion.div>
  );
};
