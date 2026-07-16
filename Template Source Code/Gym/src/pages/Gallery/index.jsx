import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play } from 'lucide-react';
import { galleryImages } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const categories = ['All', 'Equipment', 'Training', 'Strength', 'Classes', 'Trainers', 'Wellness', 'Community'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const filtered = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden pt-32" style={{ background: 'var(--secondary)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="Gallery" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--secondary), transparent 60%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-label">Gallery</span>
            <h1 className="font-display text-white mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              INSIDE<br /><span className="text-gradient">GYMFORGE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300"
                style={{
                  background: filter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                  color: filter === cat ? 'white' : 'var(--text-muted)',
                  border: filter === cat ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: filter === cat ? '0 0 20px var(--glow)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="masonry-grid"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="relative group rounded-xl overflow-hidden cursor-pointer mb-4"
                  onClick={() => setLightbox(img)}
                >
                  <img src={img.src} alt={img.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.65)' }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <ZoomIn className="w-8 h-8 text-white" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">{img.category}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest px-2 py-1 rounded glass-dark" style={{ color: 'var(--primary)' }}>
                    {img.category}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.4)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-center mb-12">
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              VIDEO <span className="text-gradient">HIGHLIGHTS</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Gym Tour 2024', thumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80' },
              { title: 'Training Sessions', thumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
              { title: 'Member Transformations', thumb: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80' },
            ].map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ height: '220px' }}
              >
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ background: 'var(--primary)' }}>
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                  <span className="text-white font-bold text-sm">{video.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white z-10" onClick={() => setLightbox(null)}>
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              {lightbox.category} · {lightbox.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
