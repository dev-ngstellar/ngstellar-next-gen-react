import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShieldCheck, Sparkles, MapPin, Calendar, ArrowRight, 
  Search, Award, Users, CheckCircle2, Play, Eye, PhoneCall, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIETY_INFO, APARTMENT_UNITS, AMENITIES_LIST, EVENTS_DATA } from '../../data/mockData';
import { Modal } from '../../components/ui/Modal';

export const Home = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [visitSubmitted, setVisitSubmitted] = useState(false);

  return (
    <div className="space-y-24 pb-20">
      
      {/* LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-8 overflow-hidden">
        {/* Background Image with Mesh Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=80"
            alt="SkyNest Luxury Towers"
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 aurora-bg opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>NG Stellar Growth Flagship CMS Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Luxury Living Starts Here. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-400">
              Smart Society Management.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-normal leading-relaxed"
          >
            Experience metropolis living engineered for peace, security, and elegance. Over 1,200 families trust SkyNest for 5-star community living.
          </motion.p>

          {/* Quick Search & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto p-3 glass-card rounded-3xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-3 backdrop-blur-xl"
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 w-full bg-white/10 rounded-2xl border border-white/10 text-white">
              <Search className="w-5 h-5 text-teal-300" />
              <input
                type="text"
                placeholder="Search towers, 3 BHK, Penthouse, floor plans..."
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setSiteVisitOpen(true)}
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl theme-accent-bg text-white font-bold text-sm shadow-xl hover:opacity-95 transition flex items-center justify-center gap-2"
              >
                Book A Site Visit
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/dashboard"
                className="flex items-center justify-center p-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md transition"
                title="Launch Portal"
              >
                <Eye className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Live Community Counter Widgets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-5xl mx-auto">
            {[
              { label: 'Towers', value: SOCIETY_INFO.towers, icon: Building2 },
              { label: 'Residents', value: SOCIETY_INFO.totalFlats + '+', icon: Users },
              { label: '5-Star Amenities', value: SOCIETY_INFO.amenitiesCount, icon: Sparkles },
              { label: 'Occupancy Rate', value: SOCIETY_INFO.occupancyRate, icon: CheckCircle2 },
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-4 border border-white/10 text-left text-white backdrop-blur-md">
                  <IconComp className="w-5 h-5 text-teal-300 mb-1" />
                  <span className="block text-2xl font-black">{stat.value}</span>
                  <span className="text-xs text-slate-300 font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMENITIES HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest theme-accent-text block mb-2">
              Resort-Grade Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              World-Class Lifestyle Amenities
            </h2>
          </div>
          <Link
            to="/amenities"
            className="flex items-center gap-2 font-bold text-sm theme-accent-text hover:underline"
          >
            Explore All 25 Amenities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMENITIES_LIST.slice(0, 3).map((amenity) => (
            <motion.div
              key={amenity.id}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xl group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white backdrop-blur-md">
                  {amenity.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{amenity.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{amenity.description}</p>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>{amenity.hours}</span>
                  <span className="font-bold theme-accent-text">{amenity.capacity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED APARTMENT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest theme-accent-text block mb-2">
            Available Residences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Discover Your Dream Home
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APARTMENT_UNITS.slice(0, 4).map((apt) => (
            <div
              key={apt.id}
              className="glass-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4 hover:border-teal-500/50 transition"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold theme-accent-light-bg theme-accent-text">
                  {apt.tower}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  apt.status === 'Occupied' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                }`}>
                  {apt.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{apt.id} - {apt.bhk}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{apt.area} • {apt.floor}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedApartment(apt)}
                  className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  View Floor Plan & Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SITE VISIT MODAL */}
      <Modal isOpen={siteVisitOpen} onClose={() => { setSiteVisitOpen(false); setVisitSubmitted(false); }} title="Schedule A Private Site Visit">
        {visitSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full theme-accent-bg text-white flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Site Visit Confirmed!</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Our Relationship Manager will reach out to you within 2 hours to confirm your private chauffeur-driven tour of SkyNest.
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setVisitSubmitted(true); }} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input required type="text" placeholder="Johnathan Vance" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Phone Number</label>
                <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Preferred Date</label>
                <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
              </div>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold text-sm shadow-xl">
              Confirm Appointment
            </button>
          </form>
        )}
      </Modal>

      {/* APARTMENT FLOOR PLAN MODAL */}
      <Modal isOpen={!!selectedApartment} onClose={() => setSelectedApartment(null)} title={`Floor Plan Layout - ${selectedApartment?.id}`}>
        {selectedApartment && (
          <div className="space-y-4 text-xs">
            <div className="h-64 bg-slate-900 rounded-2xl p-4 flex items-center justify-center text-slate-400 border border-slate-800 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80"
                alt="Floor plan preview"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl bg-black/80 text-white font-mono font-bold backdrop-blur-md">
                  {selectedApartment.bhk} Architectural Layout ({selectedApartment.area})
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
              <div><strong>Tower:</strong> {selectedApartment.tower}</div>
              <div><strong>Floor Level:</strong> {selectedApartment.floor}</div>
              <div><strong>Parking Slot:</strong> {selectedApartment.parking}</div>
              <div><strong>Status:</strong> {selectedApartment.status}</div>
            </div>
            <button
              onClick={() => { setSelectedApartment(null); setSiteVisitOpen(true); }}
              className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold text-xs"
            >
              Book Visit For This Apartment
            </button>
          </div>
        )}
      </Modal>

    </div>
  );
};
