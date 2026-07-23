import React, { useState } from 'react';
import { AMENITIES_LIST } from '../../data/mockData';
import { Clock, Users, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const Amenities = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookingModalAmenity, setBookingModalAmenity] = useState(null);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const categories = ['All', 'Recreation & Wellness', 'Fitness', 'Events', 'Sports', 'Entertainment'];

  const filteredAmenities = AMENITIES_LIST.filter(a => 
    selectedCategory === 'All' || a.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest theme-accent-text block">
          5-Star Living Standards
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Exclusive Society Amenities
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Every amenity is maintained to international luxury standards with smart digital slot bookings.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'theme-accent-bg text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Large Luxury Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAmenities.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white backdrop-blur-md">
                  {item.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 theme-accent-text" />
                    <span>Operating Hours: <strong>{item.hours}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 theme-accent-text" />
                    <span>Capacity: <strong>{item.capacity}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => { setBookingModalAmenity(item); setBookedSuccess(false); }}
                className="w-full py-3 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md hover:opacity-95 transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Time Slot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Amenity Booking Modal */}
      <Modal isOpen={!!bookingModalAmenity} onClose={() => setBookingModalAmenity(null)} title={`Book ${bookingModalAmenity?.name}`}>
        {bookedSuccess ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full theme-accent-bg text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold">Slot Reservation Confirmed!</h4>
            <p className="text-xs text-slate-500">Your pass is sent to your registered resident profile and security gate console.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setBookedSuccess(true); }} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold mb-1">Select Date</label>
              <input required type="date" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Select Time Slot</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>Morning (07:00 AM - 09:00 AM)</option>
                <option>Afternoon (02:00 PM - 04:00 PM)</option>
                <option>Evening (06:00 PM - 08:00 PM)</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
              Confirm Reservation
            </button>
          </form>
        )}
      </Modal>

    </div>
  );
};
