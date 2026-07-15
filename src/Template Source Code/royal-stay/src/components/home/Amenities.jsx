import React from 'react';
import { Waves, Sparkles, UtensilsCrossed, Dumbbell, Wifi, Car } from 'lucide-react';

const Amenities = () => {
  const list = [
    {
      id: 1,
      name: "Infinity Swimming Pool",
      description: "A temperature-controlled lagoon pool blending into the horizon with private poolside cabanas and dedicated butler service.",
      icon: Waves
    },
    {
      id: 2,
      name: "Soma Royal Spa",
      description: "Indulge in ancient therapeutic massages, organic wraps, and facial treatments administered by certified wellness experts.",
      icon: Sparkles
    },
    {
      id: 3,
      name: "L'Or Restaurant",
      description: "A Michelin-starred dining experience showcasing local culinary artistry, signature dishes, and a world-class wine cellar.",
      icon: UtensilsCrossed
    },
    {
      id: 4,
      name: "Elite Wellness Gym",
      description: "State-of-the-art cardiovascular and strength training equipment with personalized fitness plans and on-call instructors.",
      icon: Dumbbell
    },
    {
      id: 5,
      name: "VIP Airport Pickups",
      description: "Luxury transfer service using our prestige fleet of Jaguars, equipped with cold champagne and refreshing towels.",
      icon: Car
    },
    {
      id: 6,
      name: "High-Speed Wi-Fi 6",
      description: "Seamless, high-capacity, fiber-optic wireless connection covering the entire palace grounds, rooms, and beachfront.",
      icon: Wifi
    }
  ];

  return (
    <section id="amenities" className="bg-white py-24 border-y border-[#c5a880]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Exquisite Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mt-2 mb-4">
            Palace Amenities & Services
          </h2>
          <div className="w-16 h-[1px] bg-[#c5a880] mx-auto mb-6" />
          <p className="text-white/60 text-[#1a1a1a]/60 text-sm font-light leading-relaxed">
            At Royal Stay, every amenity is crafted to elevate your comfort, soothe your senses, and satisfy your finest desires.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="p-8 border border-[#c5a880]/15 hover:border-[#c5a880] bg-[#faf9f6]/30 hover:bg-white transition-all duration-500 flex flex-col gap-4 text-center items-center shadow-sm hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-full border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] mb-2 group-hover:bg-[#c5a880] group-hover:text-white transition-colors duration-500">
                  <Icon className="w-6 h-6 stroke-[1.25]" />
                </div>
                <h3 className="font-serif text-xl tracking-wide text-[#1a1a1a]">
                  {item.name}
                </h3>
                <p className="text-xs text-[#1a1a1a]/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
