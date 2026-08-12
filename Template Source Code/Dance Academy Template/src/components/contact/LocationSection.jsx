import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { MapPin, Navigation, Clock, Building } from 'lucide-react';
import { academyData } from '../../data/academy';

export default function LocationSection() {
  const { address, hours, locationImage } = academyData.contact;

  return (
    <section className="py-12 md:py-16 bg-[#151719] relative overflow-hidden">
      <Container>
        <SectionTitle
          label="STUDIO LOCATION"
          title="Come Dance With Us"
          subtitle="Located in the heart of Downtown, our state-of-the-art facilities offer spring-loaded sprung wooden floors and high-performance audio systems."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Studio Image & Location Details */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-[#1B1B1D] border border-[#282523] shadow-2xl group">
            <img
              src={locationImage}
              alt="Rhythm Dance Academy Studio Exterior"
              className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-[#101214]/40 to-transparent" />
            
            {/* Interactive Location Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#101214]/90 backdrop-blur-md border border-[#282523] space-y-3">
              <div className="flex items-center gap-2 text-[#C99683] font-semibold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Downtown Studio Headquarters</span>
              </div>
              <p className="text-[#F7F4F0] font-serif text-xl font-bold">
                {address.line1}, {address.line2}
              </p>
            </div>
          </div>

          {/* Styled Interactive Location Map Placeholder */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#1B1B1D] border border-[#282523] space-y-6 flex flex-col justify-between h-full shadow-lg">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C99683]/10 text-[#C99683] text-[11px] font-bold uppercase tracking-wider border border-[#C99683]/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>Map & Parking Access</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#F7F4F0]">
                Studio Directions & Hours
              </h3>

              <div className="space-y-4 text-sm text-[#A39E98] pt-2 border-t border-[#282523] font-light">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C99683] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F4F0] block font-medium">Operating Schedule:</strong>
                    <span>{hours.days}: {hours.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#C99683] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F7F4F0] block font-medium">Transit & Parking:</strong>
                    <span>Convenient street parking & underground garage available adjacent to building entrance.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Styled Map Graphic Box */}
            <div className="relative rounded-2xl bg-[#101214] border border-[#282523] p-6 text-center space-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#C99683_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
              <MapPin className="w-8 h-8 text-[#C99683] mx-auto animate-bounce" />
              <div className="relative z-10">
                <p className="text-[#F7F4F0] font-semibold text-sm">Downtown Harmony Quarter</p>
                <p className="text-xs text-[#A39E98]">Coordinates: 40.7128° N, 74.0060° W</p>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${address.line1}, ${address.line2}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C99683] text-[#101214] hover:bg-[#B88572] transition-all duration-200 mt-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
