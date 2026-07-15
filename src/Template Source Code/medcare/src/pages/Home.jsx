import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Activity, ShieldCheck, Star, Users, PhoneCall, Calendar, 
  ArrowRight, ShieldAlert, BadgeCheck, Stethoscope, ChevronLeft, ChevronRight, Sparkles
} from 'lucide-react';
import { servicesData, doctorsData, testimonialsData, statisticsData, insurancePartners } from '../data/mockData';

const Home = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  // Specialty icons selector
  const renderSpecialtyIcon = (name) => {
    switch (name) {
      case 'Cardiology': return <Heart className="w-6 h-6 text-sky-500" />;
      case 'Neurology': return <Brain className="w-6 h-6 text-sky-500" />;
      case 'Orthopedics': return <Activity className="w-6 h-6 text-sky-500" />;
      default: return <Stethoscope className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <div className="animate-page-enter">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] bg-slate-50 flex items-center pt-32 pb-20 overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-sky-500/10 rounded-l-[120px] hidden lg:block" />
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 text-[10px] tracking-widest text-sky-600 font-bold uppercase w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>Accredited Specialists & Tertiary Care</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Your Health, <span className="text-sky-500">Our Priority</span>
            </h1>

            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Providing world-class healthcare with expert resident specialist surgeons, 24/7 cardiac triages, and state-of-the-art robotic medical diagnostics.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/booking"
                className="px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wider uppercase rounded transition-all shadow-md shadow-sky-500/20"
              >
                Book Appointment
              </Link>
              <a
                href="tel:18005559999"
                className="px-6 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-600 font-semibold text-xs tracking-wider uppercase rounded transition-all flex items-center gap-1.5 border border-rose-100"
              >
                <PhoneCall className="w-4 h-4 text-rose-500" />
                Emergency Contact
              </a>
            </div>
          </div>

          {/* Hero Right Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-slate-200/50 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                alt="MedCare Specialist Consultation"
                className="rounded-xl w-full h-[400px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            
            {/* Overlay statistics badge */}
            <div className="absolute bottom-6 -left-6 p-4 bg-white rounded-xl shadow-lg border border-slate-100 flex gap-3 items-center max-w-[200px]">
              <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Accreditation</span>
                <span className="text-xs font-bold text-slate-800">Joint Commission Int.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Specialties Section */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-sky-500 font-semibold block mb-2">Our Expertise</span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900">
            Medical Specialties & Departments
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.slice(0, 4).map((specialty) => (
            <div 
              key={specialty.id}
              className="p-8 border border-slate-100 rounded-xl med-card-shadow med-card-shadow-hover transition-all duration-300 text-center flex flex-col items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center mb-2 group-hover:bg-sky-500 group-hover:text-white transition-all">
                {renderSpecialtyIcon(specialty.name)}
              </div>
              <h3 className="font-heading text-base font-bold text-slate-900">
                {specialty.name}
              </h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                {specialty.shortDescription}
              </p>
              <Link 
                to="/services" 
                className="text-[11px] font-bold text-sky-500 uppercase tracking-wider mt-2 group-hover:text-emerald-500 transition-colors flex items-center gap-0.5"
              >
                Explore Unit
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Emergency Care Alert Banner */}
      <section className="bg-rose-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-8 flex gap-4 items-start">
            <ShieldAlert className="w-12 h-12 text-white shrink-0 mt-1 animate-pulse" />
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">24 Hour Emergency Trauma & Ambulance Service</h3>
              <p className="text-rose-100 text-xs font-light max-w-xl leading-relaxed">
                Our emergency trauma team is equipped for immediate cardiac triages, acute stroke protocols, pediatric emergency resuscitations, and skeletal trauma operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a 
              href="tel:18005559999"
              className="px-6 py-3.5 bg-white text-rose-600 font-bold text-xs tracking-wider uppercase rounded text-center transition-colors hover:bg-slate-100"
            >
              Call 1-800-555-9999
            </a>
            <Link 
              to="/contact"
              className="px-6 py-3.5 bg-rose-700 hover:bg-rose-800 text-white border border-rose-500/40 font-semibold text-xs tracking-wider uppercase rounded text-center transition-colors"
            >
              Get Directions
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Doctors Teaser Grid */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <span className="text-xs tracking-[0.25em] uppercase text-sky-500 font-semibold block mb-2">Resident Doctors</span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                Specialists & Surgeons
              </h2>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-500 hover:text-emerald-500 uppercase tracking-widest transition-colors"
            >
              View All Doctors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctorsData.slice(0, 3).map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <img 
                    src={doctor.photo} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover border-b border-slate-100"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=350&q=80";
                    }}
                  />
                  <div className="p-6">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block mb-1">
                      {doctor.specialization}
                    </span>
                    <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                      {doctor.name}
                    </h3>
                    <span className="text-slate-400 text-xs font-light block mb-3">
                      Experience: {doctor.experience}
                    </span>
                    <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-2">
                      {doctor.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">{doctor.availability.split(' (')[0]}</span>
                  <Link 
                    to="/booking"
                    className="text-[11px] font-bold text-sky-500 hover:text-emerald-500 uppercase tracking-wider flex items-center gap-0.5"
                  >
                    Book Slot
                    <Calendar className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Statistics Section */}
      <section className="bg-sky-500 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
          {statisticsData.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-2">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-sky-100 tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Patient Testimonials Slider */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs tracking-[0.25em] uppercase text-sky-500 font-semibold">Patient Stories</span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 leading-tight">
              Testimonials from Recovered Outpatients
            </h2>
            <p className="text-slate-500 text-xs font-light leading-relaxed mb-4">
              Our patients share their treatment stories under cardiology, pediatrics, orthopedics, and dental clinics at MedCare.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handlePrevTestimonial}
                className="w-10 h-10 border border-slate-200 hover:border-sky-500 hover:text-sky-500 rounded-full flex items-center justify-center transition-colors text-slate-600 focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-10 h-10 border border-slate-200 hover:border-sky-500 hover:text-sky-500 rounded-full flex items-center justify-center transition-colors text-slate-600 focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="p-8 md:p-10 border border-slate-100 rounded-2xl med-card-shadow bg-slate-50/50 flex flex-col gap-5">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(testimonialsData[activeTestimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 italic text-sm md:text-base font-light leading-relaxed">
                "{testimonialsData[activeTestimonialIdx].text}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-200/60 pt-6 mt-4">
                <img 
                  src={testimonialsData[activeTestimonialIdx].avatar}
                  alt={testimonialsData[activeTestimonialIdx].name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80";
                  }}
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    {testimonialsData[activeTestimonialIdx].name}
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {testimonialsData[activeTestimonialIdx].role}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Insurance Partners */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-semibold shrink-0">
            Approved Health Insurances
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50">
            {insurancePartners.map((p, i) => (
              <span key={i} className="font-heading text-base md:text-lg font-bold text-slate-800 tracking-tight cursor-default">
                {p.logoText}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
