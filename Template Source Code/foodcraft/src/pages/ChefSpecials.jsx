import React, { useEffect } from 'react';
import { ChefHat, Award, Star, Flame, Sparkles } from 'lucide-react';

const ChefSpecials = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const chefDetails = {
    name: "Chef Kenji Tanaka",
    title: "Executive Culinary Director",
    credentials: "18+ Years Michelin Star Experience",
    bio: "Honed under legendary masters in Kyoto and Paris, Chef Kenji Tanaka blends classical French reduction methods with Japanese sensory styling. His menus are designed as journeys of seasonal reflection, celebrating micro-season farm products.",
    quote: "Cuisine is a canvas of memories. Every flavor coordinate must tell a story, invoking nostalgia and awe.",
    portrait: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    awards: [
      "Voted Top 20 Global Chefs — Gastronome Council",
      "3 Michelin Stars Accreditation — 2021-2026",
      "Grand Officier de l'Ordre du Mérite Agricole"
    ]
  };

  const signaturePlates = [
    {
      title: "Charcoal Obsidian Black Cod",
      pairing: "Krug Clos d'Ambonnay Champagne",
      price: "$115",
      desc: "Black cod caught in deep sub-zero waters, marinated in black sesame miso, seared on Binchotan oak wood, finished with pure gold leaf shards.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32d7a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Umbrian Winter Truffle Risotto",
      pairing: "Barolo Monfortino Riserva 2013",
      price: "$85",
      desc: "Acquerello rice aged for 3 years, slowly emulsified with chicken stock, saffron stamens, finished with freshly shaved Umbrian winter truffles.",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-white text-[#111827] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Full-width Chef Spotlight Panel */}
        <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch mb-24 shadow-sm">
          
          {/* Chef Image */}
          <div className="w-full lg:w-5/12 min-h-96 lg:min-h-auto relative zoom-container border-r border-gray-100">
            <img 
              src={chefDetails.portrait} 
              alt={chefDetails.name} 
              className="zoom-image w-full h-full object-cover" 
            />
          </div>

          {/* Chef Details */}
          <div className="w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#EAB308] font-bold block">{chefDetails.credentials}</span>
              <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight">
                {chefDetails.name}
              </h1>
              <div className="w-16 h-[2.5px] bg-[#EAB308] mt-1" />
              <p className="text-[#6B7280] text-xs md:text-sm font-light leading-relaxed mt-2">
                {chefDetails.bio}
              </p>
            </div>

            {/* Signature Quote */}
            <div className="border-l-2 border-[#EAB308] pl-6 py-2 italic text-[#6B7280] text-xs md:text-sm font-light max-w-xl">
              "{chefDetails.quote}"
            </div>

            {/* Awards list */}
            <div className="flex flex-col gap-4">
              <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block">Accreditations & Awards</span>
              <div className="flex flex-wrap gap-4">
                {chefDetails.awards.map((award, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded text-[10px] text-[#6B7280] font-medium">
                    <Award className="w-4 h-4 text-[#EAB308]" />
                    {award}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Signature plates header */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">Signature plates</span>
          <h2 className="font-serif text-3xl font-bold text-[#111827]">
            Chef Specials Masterpieces
          </h2>
          <div className="w-16 h-[2.5px] bg-[#EAB308]" />
        </div>

        {/* Grid of signature plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {signaturePlates.map((plate, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover-lift"
            >
              <div className="zoom-container h-64 border-b border-gray-100">
                <img 
                  src={plate.image} 
                  alt={plate.title} 
                  className="zoom-image w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-serif text-xl font-bold text-[#111827] group-hover:text-[#EAB308] transition-colors">{plate.title}</h3>
                    <span className="font-serif text-xl font-bold text-[#EAB308]">{plate.price}</span>
                  </div>
                  <p className="text-[#6B7280] text-xs font-light leading-relaxed">{plate.desc}</p>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5 text-[10px] text-[#6B7280]">
                  <Sparkles className="w-4 h-4 text-[#EAB308]" />
                  <div>
                    <span className="font-bold text-[#111827] block">Sommelier Recommendation</span>
                    <span className="block mt-0.5">{plate.pairing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ChefSpecials;
