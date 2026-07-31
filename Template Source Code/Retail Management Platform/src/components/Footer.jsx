import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, ShieldCheck, Truck, Headphones, RotateCcw, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { setActiveCustomerTab, setActiveMode } = useStore();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Value Proposition Badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Express 30-Min Delivery</h4>
              <p className="text-xs text-slate-400">Cold-chain logistics right to your doorstep.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Farm Organic Fresh</h4>
              <p className="text-xs text-slate-400">Quality checked daily at fulfillment hubs.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">No-Questions Guarantee</h4>
              <p className="text-xs text-slate-400">Instant credit refund if produce falls short.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">24/7 Dedicated CRM</h4>
              <p className="text-xs text-slate-400">Priority human support line for members.</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12 border-b border-slate-800">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-extrabold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-xl text-white">
                Stellar<span className="text-emerald-400">Retail</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Enterprise retail commerce platform powering next-generation hypermarkets, organic food chains, and multi-branch grocery delivery networks.
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold text-white mb-2">Subscribe to Weekly Fresh Offers</p>
              <div className="flex max-w-sm gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 outline-none focus:border-emerald-500"
                />
                <button className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition-colors">
                  Join <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Customer Store</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('shop'); }} className="hover:text-emerald-400 transition-colors">Organic Vegetables</button></li>
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('shop'); }} className="hover:text-emerald-400 transition-colors">Hydroponic Fruits</button></li>
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('shop'); }} className="hover:text-emerald-400 transition-colors">Grass-Fed Dairy</button></li>
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('offers'); }} className="hover:text-emerald-400 transition-colors">Flash Deals & Coupons</button></li>
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('recipes'); }} className="hover:text-emerald-400 transition-colors">Chef Curated Recipes</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Customer Care</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('contact'); }} className="hover:text-emerald-400 transition-colors">Store Locations</button></li>
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('tracking'); }} className="hover:text-emerald-400 transition-colors">Live Order Tracking</button></li>
              <li><button onClick={() => { setActiveMode('customer-dashboard'); }} className="hover:text-emerald-400 transition-colors">My Wallet & Points</button></li>
              <li><button onClick={() => { setActiveMode('customer-dashboard'); }} className="hover:text-emerald-400 transition-colors">Weekly Subscriptions</button></li>
              <li><button onClick={() => { setActiveMode('customer'); setActiveCustomerTab('about'); }} className="hover:text-emerald-400 transition-colors">Sustainability Guarantee</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Retail Enterprise</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => { setActiveMode('admin'); }} className="hover:text-emerald-400 transition-colors">Admin Dashboard</button></li>
              <li><button onClick={() => { setActiveMode('admin'); }} className="hover:text-emerald-400 transition-colors">Inventory Heatmap</button></li>
              <li><button onClick={() => { setActiveMode('admin'); }} className="hover:text-emerald-400 transition-colors">Warehouse Visualizer</button></li>
              <li><button onClick={() => { setActiveMode('admin'); }} className="hover:text-emerald-400 transition-colors">Supplier PO Management</button></li>
              <li><button onClick={() => { setActiveMode('admin'); }} className="hover:text-emerald-400 transition-colors">Route Planner & Drivers</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 StellarRetail Enterprise Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Security Standards</span>
            <span className="text-emerald-400 font-semibold">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
