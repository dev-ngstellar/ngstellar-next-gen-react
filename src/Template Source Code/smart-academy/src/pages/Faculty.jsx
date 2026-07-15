import React, { useEffect } from 'react';
import { facultyData } from '../data/mockData';
import { Mail, Shield, BookOpen } from 'lucide-react';

const Faculty = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="animate-page-enter">
      
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-violet-400 font-semibold mb-2 block">Our Staff</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Meet Our Teachers
          </h1>
          <p className="text-slate-450 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Our loving team of certified early childhood educators are dedicated to help toddlers, preschool, and kindergarten kids thrive.
          </p>
        </div>
      </div>

      {/* Faculty Profile Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyData.map((fac) => (
            <div 
              key={fac.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Profile Photo */}
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={fac.image} 
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=350&q=80";
                  }}
                />
              </div>

              {/* Bio Details */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900 mb-0.5">
                    {fac.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-violet-650 uppercase tracking-widest block">
                    {fac.role}
                  </span>
                </div>

                <p className="text-slate-550 text-xs font-light leading-relaxed flex-grow">
                  {fac.bio}
                </p>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-2 text-[10px] text-slate-450">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-violet-600" />
                    Focus: {fac.coursesTaught.split(' ')[0]}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Safe
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Faculty;
