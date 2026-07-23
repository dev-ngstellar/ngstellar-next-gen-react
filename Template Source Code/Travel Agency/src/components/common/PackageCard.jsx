import React from 'react';
import { Star, Clock, CheckCircle2, Award, ArrowRight } from 'lucide-react';

export default function PackageCard({ pkg, onBookNow }) {
  const { title, category, image, duration, price, discountPrice, rating, hotelRating, includedServices, description } = pkg;

  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-border/80 hover:border-primary/60 transition-all duration-500">
      
      {/* Top Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
        
        {/* Category Tag & Rating Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            {category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/60 text-amber-300 text-xs font-bold backdrop-blur-md flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {rating}
          </span>
        </div>

        {/* Duration Chip */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
          <Clock className="w-3.5 h-3.5 text-primary" /> {duration}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-text-muted font-medium">
            <Award className="w-3.5 h-3.5 text-gold" /> {hotelRating}
          </div>
          <h3 className="font-heading text-xl font-bold text-text-bright group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-text-muted text-xs line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Included Services Bullet Tags */}
        <div className="space-y-1.5 pt-2 border-t border-border/60">
          <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block">Key Inclusions:</span>
          <div className="grid grid-cols-2 gap-1.5">
            {includedServices.slice(0, 4).map((service, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-text-main font-medium">
                <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                <span className="truncate">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Price & Booking CTA */}
        <div className="pt-4 border-t border-border/60 flex items-center justify-between">
          <div>
            {discountPrice ? (
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-2xl font-black text-text-bright">${discountPrice.toLocaleString()}</span>
                <span className="text-xs text-text-muted line-through">${price.toLocaleString()}</span>
              </div>
            ) : (
              <span className="font-heading text-2xl font-black text-text-bright">${price.toLocaleString()}</span>
            )}
            <span className="text-[10px] text-text-muted uppercase tracking-widest block">Per Person</span>
          </div>

          <button
            onClick={() => onBookNow(pkg)}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 group/btn"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
