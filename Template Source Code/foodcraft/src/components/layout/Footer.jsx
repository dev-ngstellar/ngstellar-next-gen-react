import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Award, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#111827] border-t border-gray-150 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand / Accolades */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50">
              <UtensilsCrossed className="w-4.5 h-4.5 text-[#EAB308]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-extrabold text-[#111827] leading-none">
                FOOD<span className="text-[#EAB308]">CRAFT</span>
              </span>
              <span className="text-[8px] tracking-[0.45em] text-[#6B7280] uppercase font-bold mt-1">
                Modern Luxury
              </span>
            </div>
          </Link>
          <p className="text-[#6B7280] text-xs font-light leading-relaxed">
            Perched on the 45th floor, FoodCraft delivers Michelin-standard dining, bespoke menus, and modern hospitality.
          </p>
          <div className="flex gap-2.5 items-center">
            <Award className="w-4 h-4 text-[#EAB308]" />
            <span className="text-[9px] tracking-wider uppercase text-[#EAB308] font-bold">3 Michelin Stars Since 2021</span>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-sm font-bold tracking-wider text-[#111827] uppercase">Operating Hours</h4>
          <div className="flex flex-col gap-4 text-xs font-light text-[#6B7280]">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span>Monday — Thursday</span>
              <span className="text-[#111827] font-medium">6:00 PM - 11:00 PM</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span>Friday — Saturday</span>
              <span className="text-[#111827] font-medium">5:30 PM - Midnight</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span>Sunday Brunch</span>
              <span className="text-[#111827] font-medium">11:30 AM - 3:30 PM</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-sm font-bold tracking-wider text-[#111827] uppercase">Direct Concierge</h4>
          <div className="flex flex-col gap-4 text-xs font-light text-[#6B7280]">
            <div className="flex items-start gap-3">
              <MapPin className="w-4.5 h-4.5 text-[#EAB308] shrink-0" />
              <span>45th Floor Sky Deck, Horizon Heights Tower, Luxury District</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4.5 h-4.5 text-[#EAB308] shrink-0" />
              <span>+91 98888 77777 / +91 97777 66666</span>
            </div>
          </div>
        </div>

        {/* Newsletter subscribe */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-sm font-bold tracking-wider text-[#EAB308] uppercase">Private Salon</h4>
          <p className="text-[#6B7280] text-xs font-light leading-relaxed">
            Subscribe to receive invitations to private wine dinners, chef table releases, and seasonal menus.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-gray-50 border border-gray-100 px-4 py-2.5 text-xs text-[#111827] placeholder-[#6B7280] focus:outline-none focus:border-[#EAB308] w-full"
            />
            <button 
              type="submit" 
              className="bg-[#EAB308] hover:bg-[#CA8A04] text-white px-4 py-2.5 text-xs font-bold uppercase transition-colors"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-gray-150 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-light uppercase tracking-wider">
        <span>&copy; {new Date().getFullYear()} FoodCraft. All Rights Reserved.</span>
        <div className="flex gap-6">
          <Link to="/menu" className="hover:text-black transition-colors">Wine Menu</Link>
          <span className="text-gray-300">|</span>
          <Link to="/reservations" className="hover:text-black transition-colors">Booking Policies</Link>
          <span className="text-gray-300">|</span>
          <Link to="/contact" className="hover:text-black transition-colors">Press Inquiries</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
