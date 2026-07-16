import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';
import { testimonials } from '../../data/testimonials';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-sm" style={{ color: i < rating ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)' }} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at bottom, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mx-auto">Testimonials</div>
          <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            What Our <span style={{ color: 'var(--color-primary)' }}>Clients Say</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Real stories from real clients who trusted us with their most important moments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <div
                  className="p-7 rounded-2xl h-full flex flex-col"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Quote icon */}
                  <FaQuoteLeft className="text-3xl mb-4 opacity-30" style={{ color: 'var(--color-primary)' }} />

                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>

                  <div>
                    <StarRating rating={t.rating} />
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/08">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover ring-2"
                        style={{ ringColor: 'var(--color-primary)' }}
                      />
                      <div>
                        <p className="text-white font-bold text-sm">{t.name}</p>
                        <p className="text-white/40 text-xs">{t.role}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-primary)' }}>{t.event} • {t.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
