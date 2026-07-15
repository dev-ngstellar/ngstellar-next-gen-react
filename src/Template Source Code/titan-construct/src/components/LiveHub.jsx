import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Radio, Wind, Thermometer, User, ArrowUp, RefreshCw } from 'lucide-react';

const feeds = [
  {
    id: 'aurelia',
    name: 'Aurelia Spire - Cam 01',
    location: 'Dubai, UAE',
    height: '642m / 828m',
    workers: '1,480 Active',
    completion: 87.2,
    wind: '18 km/h',
    temp: '38°C',
    streamUrl: '/dubai_skyscraper_hero.png'
  },
  {
    id: 'neom',
    name: 'NEOM Future Hub - Cam 04',
    location: 'Tabuk, KSA',
    height: '142m / 350m',
    workers: '3,840 Active',
    completion: 35.8,
    wind: '24 km/h',
    temp: '32°C',
    streamUrl: '/engineers_construction_site.png'
  },
  {
    id: 'creek',
    name: 'Creek Waterfront - Cam 02',
    location: 'Dubai Harbour',
    height: '280m / 450m',
    workers: '1,120 Active',
    completion: 62.4,
    wind: '12 km/h',
    temp: '39°C',
    streamUrl: '/creek_tower_construction.png'
  }
];

export default function LiveHub() {
  const [selectedFeedIdx, setSelectedFeedIdx] = useState(0);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const activeFeed = feeds[selectedFeedIdx];

  return (
    <section id="live-hub" className="py-24 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] block mb-3 font-sans">
              Site Control Center
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-syne">
              Live Project Telemetry
            </h2>
          </div>
          <p className="text-[#64748B] font-light max-w-xl">
            Real-time IoT sensors and structural telemetry from our active gigaprojects. Select a feed to view live stats.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Live Video Feed (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeed.id}
                  src={activeFeed.streamUrl}
                  alt={activeFeed.name}
                  className="w-full h-full object-cover opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Feed Overlays */}
              <div className="absolute top-6 left-6 flex items-center gap-3 bg-red-600/90 text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full select-none shadow-sm animate-pulse">
                <Radio size={14} />
                Live Feed
              </div>

              <div className="absolute top-6 right-6 bg-[#0F172A]/80 backdrop-blur-md text-white font-mono text-xs px-3.5 py-1.5 rounded-lg border border-white/10 select-none">
                {timestamp}
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-2xl">
                <h3 className="text-white font-extrabold text-lg md:text-xl font-syne mb-1">
                  {activeFeed.name}
                </h3>
                <p className="text-gray-300 text-xs tracking-wider uppercase font-semibold">
                  {activeFeed.location}
                </p>
              </div>
            </div>

            {/* Switch Feed Controls */}
            <div className="flex flex-wrap gap-4 mt-6">
              {feeds.map((feed, idx) => (
                <button
                  key={feed.id}
                  onClick={() => setSelectedFeedIdx(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedFeedIdx === idx
                      ? 'bg-[#F59E0B] border-[#F59E0B] text-[#0F172A]'
                      : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#F59E0B] hover:text-[#F59E0B]'
                  }`}
                >
                  <Camera size={14} />
                  {feed.id}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Live Stats Widgets (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Widget 1: Completion Progress */}
            <div className="bg-slate-50 border border-[#E2E8F0] rounded-3xl p-6 relative overflow-hidden">
              <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                Overall Progress
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold text-[#0F172A] font-syne">
                  {activeFeed.completion}%
                </span>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-0.5">
                  <ArrowUp size={12} /> Live
                </span>
              </div>
              <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#F59E0B]"
                  initial={{ width: 0 }}
                  animate={{ width: `${activeFeed.completion}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            {/* Widget 2: Height & Workers */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-[#E2E8F0] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                    Structure Height
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#F59E0B] mb-4">
                    <ArrowUp size={16} />
                  </div>
                </div>
                <span className="text-base font-extrabold text-[#0F172A] font-syne">
                  {activeFeed.height}
                </span>
              </div>

              <div className="bg-slate-50 border border-[#E2E8F0] rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase font-bold text-[#64748B] tracking-wider block mb-2">
                    Personnel On Site
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#F59E0B] mb-4">
                    <User size={16} />
                  </div>
                </div>
                <span className="text-base font-extrabold text-[#0F172A] font-syne">
                  {activeFeed.workers}
                </span>
              </div>
            </div>

            {/* Widget 3: Weather Telemetry */}
            <div className="bg-slate-50 border border-[#E2E8F0] rounded-3xl p-6">
              <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-4">
                Climate Diagnostics
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Wind className="text-[#F59E0B]" size={20} />
                  <div>
                    <span className="text-[9px] uppercase font-semibold text-[#64748B] block">Wind Velocity</span>
                    <span className="text-sm font-bold text-[#0F172A]">{activeFeed.wind}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Thermometer className="text-[#F59E0B]" size={20} />
                  <div>
                    <span className="text-[9px] uppercase font-semibold text-[#64748B] block">Temperature</span>
                    <span className="text-sm font-bold text-[#0F172A]">{activeFeed.temp}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
