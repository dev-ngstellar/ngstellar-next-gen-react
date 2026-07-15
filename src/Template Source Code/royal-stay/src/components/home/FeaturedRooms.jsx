import React from 'react';
import { Link } from 'react-router-dom';
import { roomsData } from '../../data/mockData';
import { Star, ArrowRight, Bed, Eye, Maximize } from 'lucide-react';

const FeaturedRooms = () => {
  // Display Deluxe Garden Room (1), Premium Ocean Suite (2), Executive Skyline Room (3), Royal Family Suite (4)
  const featuredRooms = roomsData.slice(0, 4);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Accommodations</span>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mt-2 mb-4">
          Featured Suites & Rooms
        </h2>
        <div className="w-16 h-[1px] bg-[#c5a880] mx-auto mb-6" />
        <p className="text-white/60 text-[#1a1a1a]/60 text-sm font-light leading-relaxed">
          Each suite is designed as a sanctuary of refined elegance, featuring custom wood furniture, premium textiles, and panoramic vistas of ocean, garden, or skyline.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {featuredRooms.map((room) => (
          <div 
            key={room.id}
            className="group bg-white border border-[#c5a880]/15 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Image Wrap */}
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945";
                }}
              />
              {/* Gold overlay */}
              <div className="absolute inset-0 bg-[#1a1a1a]/20 group-hover:bg-[#1a1a1a]/40 transition-colors duration-500" />
              
              {/* Room type tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#c5a880]/30 text-[#1a1a1a] text-[10px] tracking-[0.2em] uppercase py-1 px-3">
                {room.type}
              </div>

              {/* Quick info bar overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs">
                <span className="flex items-center gap-1 bg-[#1a1a1a]/60 backdrop-blur-sm px-2 py-1">
                  <Bed className="w-3.5 h-3.5 text-[#c5a880]" />
                  {room.bedType}
                </span>
                <span className="flex items-center gap-1 bg-[#1a1a1a]/60 backdrop-blur-sm px-2 py-1">
                  <Maximize className="w-3.5 h-3.5 text-[#c5a880]" />
                  {room.size}
                </span>
              </div>
            </div>

            {/* Room Details */}
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl font-light text-[#1a1a1a] group-hover:text-[#c5a880] transition-colors duration-300">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[#c5a880] shrink-0 pt-1">
                    <Star className="w-3.5 h-3.5 fill-[#c5a880]" />
                    <span className="font-medium">{room.rating}</span>
                  </div>
                </div>
                
                <p className="text-[#1a1a1a]/60 text-xs font-light leading-relaxed mb-6">
                  {room.description}
                </p>

                {/* Amenity tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] tracking-wider uppercase text-black/50 border border-black/10 py-0.5 px-2 font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="text-[9px] tracking-wider uppercase text-[#c5a880] border border-[#c5a880]/30 py-0.5 px-2 font-semibold bg-[#c5a880]/5">
                      +{room.amenities.length - 3} More
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-[#c5a880]/15 pt-6 flex justify-between items-center mt-auto">
                <div>
                  <span className="text-[10px] tracking-wider text-black/40 uppercase block">Starting From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-serif text-[#1a1a1a] font-semibold">${room.price}</span>
                    <span className="text-xs text-black/40 font-light">/ Night</span>
                  </div>
                </div>

                <Link
                  to={`/room/${room.id}`}
                  className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#c5a880] hover:text-[#1a1a1a] transition-colors duration-300"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View Details
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-16">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 group text-sm font-semibold tracking-[0.2em] uppercase text-[#1a1a1a] hover:text-[#c5a880] transition-colors duration-300"
        >
          View All Suites & Villas
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRooms;
