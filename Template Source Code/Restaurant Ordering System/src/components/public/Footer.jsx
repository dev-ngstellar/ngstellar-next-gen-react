import React from 'react';
import { UtensilsCrossed, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer = () => {
  const { setCurrentView } = useApp();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-white">GOURMETIUM</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Flagship luxury restaurant commerce & operational platform. Redefining fine dining through passion and precision.
            </p>
          </div>

          {/* Public Pages */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Public Website</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => setCurrentView('home')} className="hover:text-amber-400">Home</button></li>
              <li><button onClick={() => setCurrentView('menu')} className="hover:text-amber-400">Artisanal Menu</button></li>
              <li><button onClick={() => setCurrentView('offers')} className="hover:text-amber-400">Offers & Combos</button></li>
              <li><button onClick={() => setCurrentView('about')} className="hover:text-amber-400">Our Story & Chefs</button></li>
              <li><button onClick={() => setCurrentView('contact')} className="hover:text-amber-400">Reservations & Contact</button></li>
            </ul>
          </div>

          {/* Operational Dashboards */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Operations Portals</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => setCurrentView('customer-dashboard')} className="hover:text-amber-400">Customer Dashboard</button></li>
              <li><button onClick={() => setCurrentView('admin-dashboard')} className="hover:text-amber-400">Restaurant SaaS Admin</button></li>
              <li><button onClick={() => setCurrentView('kitchen-dashboard')} className="hover:text-amber-400">Kitchen KDS Screen</button></li>
              <li><button onClick={() => setCurrentView('delivery-dashboard')} className="hover:text-amber-400">Courier Delivery App</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs text-stone-400">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Concierge</h4>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400" /> 742 Fifth Ave, New York, NY</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-400" /> +1 (212) 555-0199</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-400" /> concierge@gourmetium.com</p>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Gourmetium Commerce Platform. Built for NG Stellar Marketplace.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
