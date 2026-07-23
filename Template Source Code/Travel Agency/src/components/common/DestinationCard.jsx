import React from 'react';
import { Star, MapPin, Sun, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DestinationCard({ destination }) {
  const { id, name, country, image, description, rating, reviewsCount, startingPrice, weather, category } = destination;

  return (
    <div className="group relative rounded-3xl overflow-hidden glass-card h-[460px] flex flex-col justify-end p-6 border border-border/60">
      {/* Background Image with Hover Zoom */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Top Badges */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
        <span className="px-3.5 py-1.5 rounded-full glass-panel text-[11px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
          {category}
        </span>
        {weather && (
          <span className="px-3 py-1 rounded-full bg-black/40 text-amber-300 text-xs font-semibold backdrop-blur-md flex items-center gap-1">
            <Sun className="w-3.5 h-3.5 text-amber-400" /> {weather}
          </span>
        )}
      </div>

      {/* Card Body Content */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-primary text-xs font-bold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" /> {country}
          </div>
          <div className="flex items-center gap-1 text-gold text-xs font-bold bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {rating} ({reviewsCount})
          </div>
        </div>

        <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
          {name}
        </h3>

        <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed font-light">
          {description}
        </p>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Starting From</span>
            <span className="font-heading text-xl font-extrabold text-white">${startingPrice?.toLocaleString()}</span>
          </div>

          <Link
            to={`/packages?dest=${encodeURIComponent(country)}`}
            className="w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-all"
            aria-label={`Explore ${name}`}
          >
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
