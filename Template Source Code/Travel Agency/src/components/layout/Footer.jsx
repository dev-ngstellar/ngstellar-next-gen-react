import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, Send, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const instagramPosts = [
    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80',
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary via-sky-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-primary/30">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-black tracking-widest text-white flex items-center gap-1">
                VOYAGE<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              VOYAGE is an ultra-luxury travel design atelier. We craft bespoke journeys, private island retreats, and once-in-a-lifetime expeditionary adventures worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Destinations */}
          <div className="space-y-4">
            <h4 className="font-heading text-white font-bold text-base tracking-wider uppercase">Destinations</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Maldives Atolls</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Santorini & Mykonos</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Swiss Alps & Zermatt</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Kyoto & Tokyo</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Serengeti Savanna</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Amalfi Coast</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-white font-bold text-base tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home Page</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About VOYAGE</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">VIP Contact Desk</Link></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Instagram Feed & Support */}
          <div className="space-y-4">
            <h4 className="font-heading text-white font-bold text-base tracking-wider uppercase">Instagram Feed</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden group aspect-square">
                  <img src={img} alt="Instagram feed" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" /> Hours: Mon - Sat 08:00 - 20:00 EST
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-10 border-b border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Subscribe to VIP Travel Dispatches
            </h3>
            <p className="text-slate-400 text-sm mt-1">Receive secret destination releases, early bird discounts, and private jet openings.</p>
          </div>
          <div>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Welcome to the VOYAGE Inner Circle. Check your inbox soon!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your private email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 transition-all"
                >
                  <span>Join</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VOYAGE Travel Agency Ltd. All rights reserved. Designed for NG Stellar Marketplace.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> IATA Licensed Partner</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-gold" /> World Travel Award 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
