import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExpand } from 'react-icons/fa6';
import Lightbox from '../components/ui/Lightbox';
import { galleryItems, galleryCategories } from '../data/gallery';
import { pageTransition, staggerContainer, staggerItem } from '../utils/animations';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-32 pt-40 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, var(--color-secondary) 100%)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="section-label mx-auto">Our Portfolio</div>
          <h1 className="heading-display text-white mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Event <span style={{ color: 'var(--color-primary)' }}>Gallery</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            A visual showcase of the extraordinary events we've had the privilege of creating.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeCategory === cat.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                color: activeCategory === cat.id ? 'var(--color-secondary)' : 'rgba(255,255,255,0.55)',
                border: `1px solid ${activeCategory === cat.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="columns-2 sm:columns-3 lg:columns-4 gap-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="break-inside-avoid mb-3 group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={item.thumb}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{
                  aspectRatio: item.size === 'tall' ? '3/4' : item.size === 'wide' ? '16/9' : '1/1',
                }}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2"
                style={{ background: 'rgba(0,0,0,0.65)' }}>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <FaExpand className="text-lg" />
                </div>
                <p className="text-white text-sm font-semibold px-3 text-center">{item.title}</p>
                <span
                  className="px-3 py-0.5 rounded-full text-xs font-bold capitalize"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/30 py-16 text-lg">No images found for this category.</p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </motion.div>
  );
}
