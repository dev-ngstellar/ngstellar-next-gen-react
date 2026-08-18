import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, ZoomIn } from 'lucide-react';
import type { GalleryItem, GalleryCategory } from '../../data/gallery';
import { galleryData } from '../../data/gallery';
import { routesConfig } from '../../config/routesConfig';
import { Container } from '../common/Container';
import { GalleryFilter } from './GalleryFilter';
import { ScrollReveal } from '../common/ScrollReveal';

export const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All Weddings');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All Weddings'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-background border-b border-accent/20">
      <Container>
        <ScrollReveal animation="fade-up">
          <GalleryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </ScrollReveal>

        {/* Gallery Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={(idx % 4) * 120}>
              <div
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[3/4] overflow-hidden bg-text border border-accent/20 shadow-card cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover editorial-img-zoom opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-text/95 via-text/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end text-surface">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-extrabold text-xl leading-tight text-surface">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-surface/80 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{item.location}</span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-surface/20 flex items-center gap-2 text-[11px] uppercase tracking-wider text-accent font-semibold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Story Photo</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-text/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-surface border border-accent/40 overflow-hidden shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-text/80 text-surface flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
                <div className="md:col-span-8 bg-black flex items-center justify-center min-h-[350px]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-h-[75vh] w-auto object-contain"
                  />
                </div>

                <div className="md:col-span-4 p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold block mb-2">
                      {selectedImage.category} Wedding
                    </span>

                    <h2 className="font-extrabold text-2xl text-text mb-2">
                      {selectedImage.title}
                    </h2>

                    <div className="flex items-center gap-1.5 text-xs text-mutedText mb-4">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{selectedImage.location}</span>
                    </div>

                    <p className="text-sm font-light text-mutedText leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-secondary">
                    <Link
                      to={routesConfig.planWedding}
                      onClick={() => setSelectedImage(null)}
                      className="inline-block w-full text-center bg-primary text-surface py-3 text-xs uppercase tracking-[0.18em] font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Plan Similar Wedding
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

