import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Calendar } from 'lucide-react';

export default function ClassCard({ danceClass }) {
  const { title, level, age, description, image } = danceClass;

  return (
    <div className="group rounded-3xl overflow-hidden bg-[#1B1B1D] border border-[#282523] hover:border-[#C99683]/50 transition-all duration-500 flex flex-col justify-between shadow-xl hover:-translate-y-1.5">
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${title} class`}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1D] via-[#1B1B1D]/30 to-transparent" />
        
        {/* Age & Level Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="px-3.5 py-1 rounded-full bg-[#101214]/85 backdrop-blur-md text-xs font-semibold text-[#C99683] border border-[#C99683]/30">
            Age {age}
          </span>
          <span className="px-3.5 py-1 rounded-full bg-[#101214]/85 backdrop-blur-md text-xs font-semibold text-[#F7F4F0] border border-[#282523]">
            {level}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4F0] group-hover:text-[#C99683] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#A39E98] leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="pt-4 border-t border-[#282523] grid grid-cols-2 gap-2 text-xs text-[#A39E98]">
          <div className="flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-[#C99683] shrink-0" />
            <span>Expert Guidance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#C99683] shrink-0" />
            <span>Weekly Sessions</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            to={{
              pathname: '/contact',
              search: `?class=${danceClass.id}`,
              hash: '#enquiry-form',
              state: { classId: danceClass.id, className: title, scrollToForm: true }
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#151719] text-[#F7F4F0] border border-[#282523] hover:border-[#C99683] hover:bg-[#C99683] hover:text-[#101214] transition-all duration-300"
          >
            <span>Book Trial Class</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
