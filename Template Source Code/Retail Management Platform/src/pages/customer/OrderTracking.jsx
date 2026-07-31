import React from 'react';
import { useStore } from '../../context/StoreContext';
import { CheckCircle2, Clock, Truck, Package, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function OrderTracking() {
  const { selectedBranch } = useStore();

  const steps = [
    { title: 'Order Confirmed', time: '10:45 AM', completed: true, desc: 'Received & sent to micro-fulfillment' },
    { title: 'Packed at Hub', time: '10:52 AM', completed: true, desc: 'Cold-chain insulated packing' },
    { title: 'Out For Delivery', time: '10:58 AM', completed: true, desc: 'Driver Alex Rivera dispatched' },
    { title: 'Delivered', time: 'Est. 11:15 AM', completed: false, desc: 'Knock or doorstep dropoff' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header Info */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-1 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold">Live Order Tracking</span>
          <h1 className="text-3xl font-extrabold">Order #ORD-9823</h1>
          <p className="text-xs text-slate-400">Hub: {selectedBranch.name} • EV Van #04</p>
        </div>

        <div className="px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-center">
          <p className="text-[10px] uppercase font-bold text-slate-400">Est. Arrival</p>
          <p className="text-2xl font-extrabold text-amber-400">12 Mins</p>
        </div>
      </div>

      {/* Animated Delivery Timeline */}
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Live Delivery Progress</h2>
        
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 space-y-8 pl-6">
          {steps.map((s, idx) => (
            <div key={idx} className="relative">
              <div className={`absolute -left-[33px] top-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${s.completed ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 dark:ring-emerald-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                {s.completed ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className={`text-base font-bold ${s.completed ? 'text-slate-900 dark:text-slate-100' : 'text-slate-400'}`}>{s.title}</h3>
                  <span className="text-xs font-mono text-slate-400">{s.time}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Live GPS Map Simulation */}
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Driver: Alex Rivera</p>
              <p className="text-xs text-slate-500">EV Cargo Van • Rating: 4.9 ★</p>
            </div>
          </div>

          <button className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-slate-800">
            <Phone className="w-4 h-4 text-emerald-400" /> Call Driver
          </button>
        </div>
      </div>
    </div>
  );
}
