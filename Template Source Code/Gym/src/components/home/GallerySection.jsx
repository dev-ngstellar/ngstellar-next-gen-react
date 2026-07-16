import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { galleryImages } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';
import { Link } from 'react-router-dom';

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">Gallery</span>
            <h2>
              INSIDE
              <br />
              <span className="text-gradient">GYMFORGE</span>
            </h2>
          </div>
          <Link to="/gallery">
            <button className="btn-outline flex-shrink-0 mb-2">View Full Gallery</button>
          </Link>
        </motion.div>

        {/* Masonry */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="masonry-grid"
        >
          {preview.map((img) => (
            <motion.div
              key={img.id}
              variants={fadeUp}
              className="relative group rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.6)' }}>
                <div className="flex flex-col items-center gap-2">
                  <ZoomIn className="w-8 h-8 text-white" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">{img.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={() => setLightbox(null)}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center text-white z-10"
                onClick={() => setLightbox(null)}
              >
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
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                {lightbox.category} · {lightbox.alt}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
