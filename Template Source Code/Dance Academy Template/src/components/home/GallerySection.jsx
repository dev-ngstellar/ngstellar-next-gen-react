import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { academyData } from '../../data/academy';

export default function GallerySection() {
  const { eyebrow, heading, images } = academyData.gallery;

  return (
    <section className="py-10 md:py-14 bg-[#101214] relative overflow-hidden">
      <Container>
        <SectionTitle
          label="PERFORMANCE & GALLERY"
          title={heading}
          subtitle="Explore the energy, discipline, and artistic emotion captured within our studio walls."
          align="center"
          className="mb-16"
        />

        {/* Editorial Asymmetric Photo Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Column 1 - Large Tall Feature */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-3xl border border-[#282523] bg-[#1B1B1D] h-[380px] sm:h-[480px]">
            <img
              src={images[0]?.src}
              alt={images[0]?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C99683]">Studio Reflection</span>
              <h4 className="font-serif text-lg font-bold text-[#F7F4F0] mt-1">Barre Warm-Up</h4>
            </div>
          </div>

          {/* Column 2 - Stacked Two Photos */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div className="relative group overflow-hidden rounded-3xl border border-[#282523] bg-[#1B1B1D] h-[230px] sm:h-[230px]">
              <img
                src={images[1]?.src}
                alt={images[1]?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold text-[#F7F4F0]">Sunset Silhouette</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl border border-[#282523] bg-[#1B1B1D] h-[230px] sm:h-[230px]">
              <img
                src={images[2]?.src}
                alt={images[2]?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold text-[#F7F4F0]">En Pointe Precision</span>
              </div>
            </div>

            {/* Wide Span Image */}
            <div className="sm:col-span-2 relative group overflow-hidden rounded-3xl border border-[#282523] bg-[#1B1B1D] h-[230px] sm:h-[230px]">
              <img
                src={images[3]?.src}
                alt={images[3]?.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C99683]">Live Stage</span>
                <h4 className="font-serif text-base font-bold text-[#F7F4F0]">Annual Showcase Performance</h4>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 equal wide cards */}
          <div className="md:col-span-6 relative group overflow-hidden rounded-3xl border border-[#282523] bg-[#1B1B1D] h-[260px]">
            <img
              src={images[4]?.src}
              alt={images[4]?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-semibold text-[#F7F4F0]">Hip Hop Studio Rehearsals</span>
            </div>
          </div>

          <div className="md:col-span-6 relative group overflow-hidden rounded-3xl border border-[#282523] bg-[#1B1B1D] h-[260px]">
            <img
              src={images[5]?.src}
              alt={images[5]?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101214]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-semibold text-[#F7F4F0]">Backstage Preparation</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
