import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHeart, FaBriefcase, FaMusic, FaCakeCandles, FaFootball, FaBuilding, FaTrophy, FaRocket, FaMasksTheater, FaUsers, FaGraduationCap } from 'react-icons/fa6';

import { staggerContainer, staggerItem } from '../../utils/animations';

const categories = [
  { icon: FaHeart, label: 'Wedding', count: '320+ Events', color: '#D946EF', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=70' },
  { icon: FaBriefcase, label: 'Corporate', count: '280+ Events', color: '#2563EB', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=70' },
  { icon: FaMusic, label: 'Festival', count: '140+ Events', color: '#8B5CF6', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=70' },
  { icon: FaCakeCandles, label: 'Birthday', count: '190+ Events', color: '#F59E0B', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=70' },

  { icon: FaFootball, label: 'Sports', count: '85+ Events', color: '#10B981', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=70' },
  { icon: FaBuilding, label: 'Exhibition', count: '110+ Events', color: '#6366F1', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=70' },
  { icon: FaTrophy, label: 'Award Functions', count: '75+ Events', color: '#D4AF37', image: 'https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&q=70' },
  { icon: FaRocket, label: 'Product Launch', count: '95+ Events', color: '#EF4444', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=70' },
  { icon: FaMasksTheater, label: 'Cultural', count: '65+ Events', color: '#EC4899', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=70' },

  { icon: FaUsers, label: 'Community', count: '100+ Events', color: '#14B8A6', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=70' },
  { icon: FaGraduationCap, label: 'School & College', count: '80+ Events', color: '#F97316', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=70' },
  { icon: FaHeart, label: 'Private Celebrations', count: '160+ Events', color: '#FB7185', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=70' },
];

export default function EventCategoriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mx-auto">Event Categories</div>
          <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            12 Event Categories,{' '}
            <span style={{ color: 'var(--color-primary)' }}>One Expert Team</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg max-w-xl mx-auto">
            Whatever your event vision, we have the expertise, experience, and creativity to bring it to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {categories.map(({ icon: Icon, label, count, color, image }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
              whileHover={{ scale: 1.03 }}
            >
              {/* BG Image */}
              <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)' }} />

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `${color}33` }} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}33`, border: `1px solid ${color}66` }}
                >
                  <Icon className="text-xl" style={{ color }} />
                </div>
                <p className="text-white text-xs font-bold leading-tight">{label}</p>
                <p className="text-xs mt-1 opacity-60" style={{ color }}>{count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
