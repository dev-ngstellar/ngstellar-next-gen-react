import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../../utils/data';
import { viewportOnce } from '../../utils/animations';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const goTo = (index, dir = 1) => {
    setDirection(dir);
    setCurrent((index + testimonials.length) % testimonials.length);
  };

  const next = () => goTo(current + 1, 1);
  const prev = () => goTo(current - 1, -1);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.4 } }),
  };

  return (
    <section className="section-padding overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Success Stories</span>
          <h2>
            WHAT OUR MEMBERS
            <br />
            <span className="text-gradient">ARE SAYING</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div
                  className="glass rounded-3xl p-10 md:p-14 text-center relative"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {/* Quote Icon */}
                  <Quote
                    className="w-12 h-12 mx-auto mb-6 opacity-20"
                    style={{ color: 'var(--primary)' }}
                    fill="currentColor"
                  />

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="currentColor" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-10 font-light italic">
                    "{testimonials[current].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2"
                      style={{ borderColor: 'var(--primary)' }}
                    />
                    <div className="text-left">
                      <div className="text-white font-bold">{testimonials[current].name}</div>
                      <div className="text-sm" style={{ color: 'var(--primary)' }}>{testimonials[current].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:border-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
