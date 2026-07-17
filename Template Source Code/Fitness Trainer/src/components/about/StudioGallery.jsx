import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Expand } from 'lucide-react';
import { studioGallery } from '../../utils/data';
import { viewportOnce, scaleIn, staggerContainer } from '../../utils/animations';

export default function StudioGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">✦ Studio</span>
          <h2>
            The Elite<br />
            <span className="text-gradient">Training Environment</span>
          </h2>
          <p>A premium, purpose-built environment designed for serious results.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="masonry-grid"
        >
          {studioGallery.map((img, i) => (
            <motion.div
              key={img.id}
              variants={scaleIn}
              onClick={() => setLightbox(img)}
              className="img-zoom-container rounded-2xl overflow-hidden cursor-pointer group relative"
              style={{ border: '1px solid var(--border)', marginBottom: '16px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                style={{ height: i % 3 === 1 ? '280px' : '200px' }}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--primary)' }}
                >
                  <Expand className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl"
              style={{ border: '1px solid var(--border)' }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-full object-contain"
                style={{ maxHeight: '85vh' }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
