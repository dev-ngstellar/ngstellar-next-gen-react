import React, { useState, useEffect } from 'react';
import { Sparkles, UtensilsCrossed, Wine, Candy, Coffee } from 'lucide-react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('starters');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const menuData = {
    starters: {
      label: "Starters",
      icon: <UtensilsCrossed className="w-4 h-4" />,
      items: [
        {
          name: "Truffled Foie Gras Terrine",
          desc: "Rich duck liver terrine seasoned with Armagnac, black winter truffles, house-baked brioche, and sweet fig compote.",
          price: "$45",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with Sweet Sauternes Bordeaux Wine"
        },
        {
          name: "Wild Mushroom Cappuccino",
          desc: "Creamy velouté of forest chanterelles and porcini, capped with truffle-scented milk foam and hazelnut dust.",
          price: "$35",
          image: "https://images.unsplash.com/photo-1532636875304-0c8fe119aba9?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best enjoyed with Dry Chablis Chardonnay"
        },
        {
          name: "Hand-Cut Beef Tartare",
          desc: "Prime Angus beef tenderloin diced fine with capers, shallots, cornichons, served with cured quail egg yolk and sourdough crisps.",
          price: "$48",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with Pinot Noir Reserves"
        }
      ]
    },
    mains: {
      label: "Main Course",
      icon: <Wine className="w-4 h-4" />,
      items: [
        {
          name: "Classic Lobster Thermidor",
          desc: "Maine lobster meat sautéed with cognac cream, dijon mustard, egg yolks, baked in its shell under a gruyère cheese crust.",
          price: "$95",
          image: "https://images.unsplash.com/photo-1559742811-82410b510405?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with Dom Pérignon Vintage Champagne"
        },
        {
          name: "Pan-Seared Duck Breast",
          desc: "Dry-aged heritage duck breast cooked medium-rare, served with sweet potato purée, braised endive, and wild berry reduction.",
          price: "$75",
          image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with Pinot Noir Reserves"
        },
        {
          name: "Winter Black Truffle Tagliolini",
          desc: "House-made fresh egg pasta tossed in a luxurious butter sauce with aged Parmigiano-Reggiano and freshly shaved Umbrian truffles.",
          price: "$65",
          image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best enjoyed with Italian Chianti Classico"
        }
      ]
    },
    desserts: {
      label: "Desserts",
      icon: <Candy className="w-4 h-4" />,
      items: [
        {
          name: "Gold Leaf Panna Cotta",
          desc: "Creamy Madagascar vanilla bean custard topped with saffron gelée, fresh seasonal berries, and edible 24k gold leaf details.",
          price: "$28",
          image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best enjoyed with Royal Tokaji Dessert Wine"
        },
        {
          name: "Matcha Tarte Deconstructed",
          desc: "Premium Uji matcha white chocolate ganache, crisp sweet pastry shards, black sesame soil, and yuzu sherbet.",
          price: "$24",
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with Sweet Jasmine Pearl Green Tea"
        },
        {
          name: "Grand Cru Chocolate Soufflé",
          desc: "Rich 70% Valrhona dark chocolate warm soufflé served with a scoop of house-churned Tahitian vanilla ice cream.",
          price: "$32",
          image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with Sweet Port wine"
        }
      ]
    },
    beverages: {
      label: "Beverages & Cellar",
      icon: <Coffee className="w-4 h-4" />,
      items: [
        {
          name: "Château Margaux 2015",
          desc: "A stunning premier grand cru classé Bordeaux red wine, offering complex blackberry notes, cedar accents, and fine tannins.",
          price: "$120 / Glass",
          image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with dry roasted duck breast"
        },
        {
          name: "The Macallan Sherry Oak 25yr",
          desc: "Rare single malt Scotch whisky matured in hand-picked sherry seasoned oak casks from Jerez, Spain. Intense, rich flavor profile.",
          price: "$90 / Peg",
          image: "https://images.unsplash.com/photo-1527281400828-ac347a59d4fe?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best enjoyed neat with luxury dark chocolate truffles"
        },
        {
          name: "Handpicked Jasmine Pearls Tea",
          desc: "Premium loose jasmine green tea pearls hand-rolled and infused with fresh jasmine flowers, served in custom fine bone china.",
          price: "$18 / Pot",
          image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
          recommendation: "Best paired with matcha desserts"
        }
      ]
    }
  };

  const activeCategory = menuData[activeTab];

  return (
    <div className="bg-white text-[#111827] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-20 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">Gastronomic Selection</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight">
            Our Seasonal Menu
          </h1>
          <div className="w-20 h-[2.5px] bg-[#EAB308] mt-1" />
          <p className="text-[#6B7280] text-xs md:text-sm font-light leading-relaxed mt-2">
            Explore our curated culinary options. Every dish is handcrafted to order and paired with fine vintage reserves from our underground cellar.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-4 border-b border-gray-150 pb-6 mb-12">
          {Object.keys(menuData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === key 
                  ? 'bg-[#EAB308] text-white shadow-[0_4px_12px_rgba(234,179,8,0.2)]' 
                  : 'bg-gray-50 text-[#6B7280] border border-gray-100 hover:bg-gray-100 hover:text-[#111827]'
              }`}
            >
              {menuData[key].icon}
              {menuData[key].label}
            </button>
          ))}
        </div>

        {/* Showcase Panels (Avoiding Traditional Cards) */}
        <div className="flex flex-col gap-12">
          {activeCategory.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-stretch border border-gray-150 rounded-2xl overflow-hidden hover-lift bg-white ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="zoom-container lg:w-1/2 min-h-80">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="zoom-image w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-between gap-8 bg-white">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] tracking-widest text-[#EAB308] uppercase font-bold">Recommended Pairing</span>
                    <span className="font-serif text-2xl font-bold text-[#EAB308]">{item.price}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#111827]">{item.name}</h3>
                  <div className="w-10 h-[1.5px] bg-[#EAB308]" />
                  
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-[8px] uppercase tracking-wider text-[#6B7280] font-bold block">The Culinary Story</span>
                    <p className="text-[#6B7280] text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#EAB308] shrink-0" />
                  <div className="text-[10px] text-[#6B7280]">
                    <span className="font-bold text-[#111827] block">Chef Recommends</span>
                    <span className="mt-0.5 block">{item.recommendation}</span>
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

export default Menu;
