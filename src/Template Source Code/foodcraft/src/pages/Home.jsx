import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Leaf, GlassWater, Heart, Star, Quote, ArrowRight, Award, ShieldCheck, MapPin } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const valueProps = [
    {
      icon: <Leaf className="w-6 h-6 text-[#EAB308]" />,
      title: "Fresh Ingredients",
      desc: "We work directly with certified bio-farms and marine cooperatives to source pure, seasonal vegetables and wild-caught seafood."
    },
    {
      icon: <ChefHat className="w-6 h-6 text-[#EAB308]" />,
      title: "Award Winning Chefs",
      desc: "Our kitchens are guided by master chefs who have honed their skills in the most celebrated kitchens in Paris, Tokyo, and Rome."
    },
    {
      icon: <GlassWater className="w-6 h-6 text-[#EAB308]" />,
      title: "Premium Dining Experience",
      desc: "Perched on the 45th floor, enjoy curated ambient jazz music, velvet dining recliners, and views of the city skyline."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#EAB308]" />,
      title: "Private Events",
      desc: "Separate acoustic lounges with personal sommeliers, custom lighting, and tailor-made menus for intimate business summits."
    }
  ];

  const featuredSpecials = [
    {
      title: "Slow-Braised Wagyu Short Rib",
      desc: "A5 Grade Wagyu beef cooked for 72 hours, dressed in organic maple glaze, black truffle emulsion, and toasted gold leaf.",
      price: "$145",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      recommendation: "Best paired with Cabernet Sauvignon Reserve"
    },
    {
      title: "Seared Sea Scallops",
      desc: "Pan-seared Atlantic scallops served over velvet parsnip purée, crispy pancetta lardons, and finger lime caviar drop.",
      price: "$85",
      image: "https://images.unsplash.com/photo-1532636875304-0c8fe119aba9?auto=format&fit=crop&w=600&q=80",
      recommendation: "Best enjoyed with Dry Chablis Chardonnay"
    }
  ];

  const clientReviews = [
    {
      author: "Eleanor Vance",
      source: "Google Local Guide",
      stars: 5,
      comment: "Absolutely unmatched visual layout and taste coordinates. The Wagyu short rib practically dissolved on the tongue. Stupendous service."
    },
    {
      author: "Dr. Marcus Sterling",
      source: "Verified Customer Review",
      stars: 5,
      comment: "A magnificent setting on the 45th floor sky deck. Every plate is constructed with extreme design detail. Worth every rupee."
    }
  ];

  return (
    <div className="bg-white text-[#111827]">
      
      {/* 1. Light Modern Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Soft Warm overlay */}
        <div className="absolute inset-0 bg-white/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10 z-10" />
        
        {/* Background Food Prep Image */}
        <img 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Table Setup" 
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
        />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 mt-16 animate-[slide-up_1.2s_ease-out_forwards]">
          <span className="text-[11px] tracking-[0.45em] uppercase text-[#EAB308] font-bold bg-[#FEF3C7]/90 px-5 py-2 rounded-full border border-[#EAB308]/20">
            Gastronomy reimagined
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#111827] tracking-wide leading-tight mt-2">
            A Dining Experience <br/>
            <span className="text-yellow-gradient block sm:inline">Worth Remembering</span>
          </h1>

          <p className="text-[#6B7280] text-xs md:text-sm font-light tracking-wide max-w-xl leading-relaxed">
            Discover handcrafted dishes, premium ingredients, and unforgettable moments inside our 45th floor dining salons.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              to="/menu"
              className="px-8 py-3.5 bg-[#EAB308] hover:bg-[#CA8A04] text-white font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_8px_20px_rgba(234,179,8,0.35)] flex items-center justify-center gap-2 rounded-sm"
            >
              Explore Menu
            </Link>
            <Link
              to="/reservations"
              className="px-8 py-3.5 border border-gray-300 hover:bg-gray-50 text-[#111827] font-bold text-xs tracking-[0.25em] uppercase transition-colors flex items-center justify-center gap-2 rounded-sm"
            >
              Reserve Table
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
          <span className="text-[8px] tracking-[0.3em] uppercase text-[#EAB308] font-bold animate-pulse">Scroll to discover</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#EAB308] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Why Choose Us Section (Value Props with rounded cards) */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col gap-5 max-w-3xl mb-20">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#111827] leading-snug">
              Modern Gastronomy Elevated
            </h2>
            <div className="w-16 h-[2.5px] bg-[#EAB308]" />
            <p className="text-[#6B7280] text-xs md:text-sm font-light leading-relaxed">
              Every creation at FoodCraft is a deliberate synthesis of culinary technique, pure ingredients, and beautiful modern presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((p, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-white border border-gray-150 rounded-2xl flex flex-col gap-4 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center border border-[#EAB308]/20">
                  {p.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-[#111827]">{p.title}</h3>
                <p className="text-[#6B7280] text-[11px] leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Featured Dishes (Showcase panels) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-b border-gray-150">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-20">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">Featured Dishes</span>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#111827] mt-1">
                Creations Worth Remembering
              </h2>
            </div>
            <Link 
              to="/menu" 
              className="text-[#EAB308] hover:text-[#CA8A04] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              View All Creations <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredSpecials.map((s, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-gray-150 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:shadow-lg hover:border-[#EAB308]/20"
              >
                <div className="zoom-container sm:w-1/2 min-h-60">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="zoom-image w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8 sm:w-1/2 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-[8px] uppercase tracking-wider text-slate-450 font-bold block">Chef Recommendation</span>
                    <h3 className="font-serif text-lg font-bold text-[#111827] group-hover:text-[#EAB308] transition-colors">{s.title}</h3>
                    <p className="text-[#6B7280] text-[11px] font-light leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2 border-t border-gray-100 pt-4">
                    <span className="text-sm font-semibold text-slate-500 font-serif">Pairing: {s.recommendation.split('paired with ').pop()}</span>
                    <span className="text-lg font-bold font-serif text-[#EAB308]">{s.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Google Reviews Style Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#111827]">
              Google Review Registry
            </h2>
            <div className="w-16 h-[2px] bg-[#EAB308]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {clientReviews.map((r, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-150 rounded-2xl relative flex flex-col gap-6 shadow-sm">
                <Quote className="w-8 h-8 text-[#EAB308] opacity-15 absolute top-6 right-6" />
                <div className="flex gap-1">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                  ))}
                </div>
                <p className="text-[#111827] text-xs md:text-sm font-light italic leading-relaxed">
                  "{r.comment}"
                </p>
                <div className="flex justify-between items-center mt-2 border-t border-gray-100 pt-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#111827]">{r.author}</span>
                    <span className="text-[9px] text-[#6B7280] font-light">{r.source}</span>
                  </div>
                  <span className="text-[9px] bg-emerald-50 text-emerald-700 px-3 py-1 rounded font-bold uppercase tracking-wider">Verified Booking</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
