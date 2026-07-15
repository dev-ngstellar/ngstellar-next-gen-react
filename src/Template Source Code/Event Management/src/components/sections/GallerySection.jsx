import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExpand } from 'react-icons/fa6';
import Lightbox from '../ui/Lightbox';
import { galleryItems } from '../../data/gallery';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const preview = galleryItems.slice(0, 8);

  return (
    <section className="section-padding relative" ref={ref} style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container-custom">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Event <span style={{ color: 'var(--color-primary)' }}>Gallery</span>
            </h2>
          </div>
          <Link to="/gallery" className="btn-outline text-sm shrink-0">
            <span>View Full Gallery</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="columns-2 sm:columns-3 lg:columns-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {preview.map((item, i) => (
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
                style={{ aspectRatio: item.size === 'tall' ? '3/4' : item.size === 'wide' ? '4/3' : '1/1' }}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(0,0,0,0.6)' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <FaExpand />
                  </div>
                  <span className="text-white text-xs font-semibold">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={preview}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
