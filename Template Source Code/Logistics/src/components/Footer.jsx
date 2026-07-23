import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Send, MapPin, Phone, Mail, Globe, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer className="bg-surface-bg border-t border-surface-border relative overflow-hidden text-slate-300 pt-16 pb-12">
      {/* Background Aurora Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-brand-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-surface-border">
          {/* Col 1: Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-400 p-[1px] shadow-glow">
                <div className="w-full h-full bg-surface-bg rounded-[11px] flex items-center justify-center text-brand-500">
                  <Box className="w-5 h-5 text-brand-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold font-heading tracking-tight text-white">
                  Cargo<span className="text-brand-500">Flow</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold -mt-1">
                  Global Logistics Technology
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              CargoFlow is an intelligent global logistics platform connecting multi-modal freight transport networks, automated warehousing, and real-time IoT cargo telematics.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Subscribe to Supply Chain Insights
              </h4>
              {subscribed ? (
                <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! You will receive our monthly freight market report.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 bg-surface-card border border-surface-border rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl transition-all shadow-glow flex items-center gap-1.5 shrink-0"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/services#air-freight" className="hover:text-brand-500 transition-colors">Air Freight Forwarding</Link></li>
              <li><Link to="/services#ocean-freight" className="hover:text-brand-500 transition-colors">Ocean Container Lines</Link></li>
              <li><Link to="/services#road-transport" className="hover:text-brand-500 transition-colors">Overland Trucking</Link></li>
              <li><Link to="/services#cold-chain" className="hover:text-brand-500 transition-colors">Cold Chain Pharma</Link></li>
              <li><Link to="/services#warehousing" className="hover:text-brand-500 transition-colors">Smart Warehousing</Link></li>
              <li><Link to="/services#customs-clearance" className="hover:text-brand-500 transition-colors">Customs Brokerage</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home Platform</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">About CargoFlow</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">All Logistics Services</Link></li>
              <li><Link to="/tracking" className="hover:text-brand-500 transition-colors">Live Tracking Portal</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Col 4: Global Hubs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Global Gateway Hubs
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500 mt-0.5 shrink-0" />
                <span>Rotterdam Port Harbor Hub, Netherlands</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500 mt-0.5 shrink-0" />
                <span>Shanghai Free Trade Zone, China</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500 mt-0.5 shrink-0" />
                <span>Singapore Airport Logistics Park</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-500 mt-0.5 shrink-0" />
                <span>Chicago Air Cargo Terminal, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>© 2026 CargoFlow Systems. All Rights Reserved. ISO 9001 & GDP Certified.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Ledger</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
