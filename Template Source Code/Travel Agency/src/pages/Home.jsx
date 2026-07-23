import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ChevronDown, Award, Users, ShieldCheck, HeartHandshake, MapPin, Globe, Headphones, Star, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, Play, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LuxurySearchCard from '../components/common/LuxurySearchCard';
import DestinationCard from '../components/common/DestinationCard';
import PackageCard from '../components/common/PackageCard';
import InteractiveMap from '../components/common/InteractiveMap';
import { DESTINATIONS, TOUR_PACKAGES, SPECIAL_OFFERS, TESTIMONIALS, GALLERY_ITEMS, BLOG_ARTICLES, STATS } from '../data/travelData';

export default function Home({ onOpenBooking, onOpenLightbox }) {
  const navigate = useNavigate();
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter package categories for Section 3
  const categories = ['All', 'Luxury', 'Adventure', 'Honeymoon', 'Family'];
  const filteredPackages = selectedCategory === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((p) => p.category === selectedCategory);

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-x-hidden">
      
      {/* SECTION 1: LUXURY HERO */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
        
        {/* Background Cinematic Media with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90"
            alt="Luxury Cinematic Travel"
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950" />
          
          {/* Animated Particles & Clouds Glow */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
          <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        </div>

        {/* Hero Content Header */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-gold font-bold text-xs uppercase tracking-widest border border-amber-400/30 backdrop-blur-xl"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> Ultra Luxury Bespoke Expeditions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Discover The World <br />
            <span className="gradient-text">One Journey</span> At A Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Create unforgettable memories with handcrafted tours, luxury overwater stays, and personalized adventures across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/packages"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-hover text-white font-heading font-bold text-sm tracking-wide shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              <span>Explore Tours</span>
            </Link>
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-full glass-panel text-white font-heading font-bold text-sm tracking-wide border border-white/20 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Plan My Trip</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Bottom Search Card & Floating Statistics */}
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12 mt-16">
          <LuxurySearchCard />

          {/* Floating Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="glass-card p-5 rounded-2xl border border-white/10 text-center space-y-1 bg-slate-900/60 backdrop-blur-md">
                <span className="font-heading text-3xl sm:text-4xl font-extrabold gradient-text block">{stat.value}</span>
                <span className="text-white text-xs font-bold block">{stat.label}</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block">{stat.suffix}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="relative z-10 text-center mt-10">
          <a href="#destinations" className="inline-flex flex-col items-center text-xs text-slate-400 hover:text-primary transition-colors gap-1 group">
            <span className="tracking-widest uppercase font-medium">Scroll To Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
          </a>
        </div>
      </section>

      {/* SECTION 2: FEATURED DESTINATIONS */}
      <section id="destinations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
              <Globe className="w-4 h-4" /> Extraordinary Places
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-text-bright">
              Featured Destinations
            </h2>
            <p className="text-text-muted text-sm sm:text-base max-w-xl">
              Hand-selected global sanctuaries, private islands, and iconic wonders curated for discerning travelers.
            </p>
          </div>

          <Link
            to="/destinations"
            className="px-6 py-3 rounded-full glass-panel text-text-main font-bold text-xs uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.slice(0, 6).map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* SECTION 3: POPULAR TOUR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5">
            <Award className="w-4 h-4 text-gold" /> Signature Journeys
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-text-bright">
            Popular Tour Packages
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            Choose from custom luxury honeymoons, wild African safaris, and private mountain retreats.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'glass-panel text-text-muted hover:text-text-bright'
                }`}
              >
                {cat} Tours
              </button>
            ))}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBookNow={onOpenBooking} />
          ))}
        </div>
      </section>

      {/* INTERACTIVE EXTRA: WORLD MAP UI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveMap />
      </section>

      {/* SECTION 4: WHY TRAVEL WITH US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-panel p-8 sm:p-12 rounded-3xl border border-border">
          
          {/* Left Media Column */}
          <div className="relative rounded-2xl overflow-hidden h-[450px] sm:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury Travel Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/20 text-white backdrop-blur-md">
              <span className="text-gold font-bold text-xs uppercase tracking-widest block">The VOYAGE Promise</span>
              <p className="text-sm font-heading font-semibold mt-1">"We don't just book trips — we architect lifelong memories."</p>
            </div>
          </div>

          {/* Right Features Column */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Unmatched Distinction
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright">
                Why Discerning Travelers Choose VOYAGE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 p-4 rounded-2xl bg-surface/50 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-text-bright">100% Customized Trips</h4>
                <p className="text-text-muted text-xs leading-relaxed">Tailored private itineraries created around your personal pace and desires.</p>
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-surface/50 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-text-bright">24/7 VIP Concierge</h4>
                <p className="text-text-muted text-xs leading-relaxed">Direct WhatsApp access to your dedicated personal travel manager globally.</p>
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-surface/50 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-text-bright">Best Price Guarantee</h4>
                <p className="text-text-muted text-xs leading-relaxed">Direct wholesale contracts with 5-star luxury resorts and private air charters.</p>
              </div>

              <div className="space-y-2 p-4 rounded-2xl bg-surface/50 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-text-bright">Expert Local Historians</h4>
                <p className="text-text-muted text-xs leading-relaxed">Private guides offering exclusive access to restricted cultural sites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRAVEL EXPERIENCE TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Seamless Process</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright">
            Your Seamless Journey Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            { step: '01', title: 'Choose Destination', desc: 'Select from 50+ curated global sanctuaries.' },
            { step: '02', title: 'Customize Trip', desc: 'Personalize luxury villas, flights, & fine dining.' },
            { step: '03', title: 'Book Online', desc: 'Secure 100% refundable deposit instantly.' },
            { step: '04', title: 'Travel in Luxury', desc: 'Enjoy 24/7 VIP concierge & door-to-door escort.' },
            { step: '05', title: 'Create Memories', desc: 'Relish unforgettable lifelong travel moments.' },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-border text-center space-y-3 relative group hover:border-primary transition-all">
              <span className="w-12 h-12 rounded-full bg-primary/10 text-primary font-heading font-extrabold text-lg flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                {item.step}
              </span>
              <h4 className="font-heading font-bold text-base text-text-bright">{item.title}</h4>
              <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: SPECIAL OFFERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-gold uppercase tracking-widest">Limited Availability</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright mt-1">Exclusive Special Offers</h2>
          </div>
          <Link to="/packages" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
            Explore All Deals &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div key={offer.id} className="group relative rounded-3xl overflow-hidden glass-card p-6 border border-border/80 space-y-4 flex flex-col justify-between hover:border-amber-400/50">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-lg">
                  {offer.discount}
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-gold uppercase tracking-wider block">{offer.badge}</span>
                <h3 className="font-heading text-xl font-bold text-text-bright">{offer.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{offer.subtitle}</p>
              </div>
              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-text-muted block text-[10px]">Promo Code:</span>
                  <code className="text-primary font-bold">{offer.code}</code>
                </div>
                <button onClick={() => onOpenBooking()} className="px-4 py-2 rounded-xl bg-primary text-white font-bold text-xs shadow-md hover:bg-primary-hover">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: TRAVELER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Global Praise</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright">Traveler Testimonials</h2>
        </div>

        <div className="relative glass-panel p-8 sm:p-12 rounded-3xl border border-border max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={TESTIMONIALS[activeTestimonialIdx].photo}
              alt={TESTIMONIALS[activeTestimonialIdx].name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-primary/40 shrink-0 shadow-2xl"
            />
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-heading text-base sm:text-xl text-text-bright italic font-light leading-relaxed">
                "{TESTIMONIALS[activeTestimonialIdx].quote}"
              </p>
              <div>
                <h4 className="font-heading font-bold text-lg text-text-bright">{TESTIMONIALS[activeTestimonialIdx].name}</h4>
                <p className="text-xs text-text-muted">{TESTIMONIALS[activeTestimonialIdx].country} • {TESTIMONIALS[activeTestimonialIdx].trip}</p>
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center md:justify-end gap-3 mt-6">
            <button onClick={handlePrevTestimonial} className="p-2.5 rounded-full glass-panel hover:bg-primary/20 text-text-main">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNextTestimonial} className="p-2.5 rounded-full glass-panel hover:bg-primary/20 text-text-main">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: TRAVEL GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Visual Portfolio</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright mt-1">Cinematic Travel Gallery</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-3xl overflow-hidden glass-card h-72 cursor-pointer border border-border"
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-xs text-primary font-bold uppercase tracking-wider">{item.category}</span>
                <h4 className="font-heading font-bold text-white text-lg flex items-center justify-between">
                  <span>{item.title}</span>
                  {item.type === 'video' && <Play className="w-5 h-5 text-gold fill-gold" />}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: TRAVEL BLOG PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Editorial Journal</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright">Latest Travel Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <div key={article.id} className="glass-card rounded-3xl overflow-hidden border border-border group flex flex-col justify-between">
              <div className="relative h-52 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-bold backdrop-blur-md">
                  {article.category}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] text-text-muted flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> {article.date} • {article.readTime}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-text-bright group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-text-muted text-xs line-clamp-2 leading-relaxed">{article.excerpt}</p>
                </div>
                <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline pt-2">
                  Read Article &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: NEWSLETTER CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel p-10 sm:p-16 border border-white/20 text-center space-y-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white relative z-10">
            Ready For Your Next Adventure?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto relative z-10">
            Start planning today with our bespoke travel architects and receive an instant $500 voucher towards your first luxury package.
          </p>
          <div className="pt-4 relative z-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-hover text-white font-heading font-bold text-sm shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
            >
              Start Planning Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
