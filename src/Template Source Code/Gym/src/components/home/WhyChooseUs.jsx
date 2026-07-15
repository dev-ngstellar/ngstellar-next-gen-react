import { motion } from 'framer-motion';
import { Award, Dumbbell, Salad, Users, Clock, Heart } from 'lucide-react';
import { features } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const iconMap = { Award, Dumbbell, Salad, Users, Clock, Heart };

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Why Choose Us</span>
          <h2>
            EVERYTHING YOU NEED TO
            <br />
            <span className="text-gradient">REACH YOUR PEAK</span>
          </h2>
          <p>
            We combine elite training methodology, world-class facilities, and an unstoppable community to deliver results that last.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group relative glass rounded-2xl p-8 card-hover glow-hover cursor-default"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Background Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top left, var(--glow-soft), transparent 70%)' }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'var(--glow-soft)',
                    border: '1px solid var(--primary)',
                  }}
                >
                  {Icon && <Icon className="w-7 h-7" style={{ color: 'var(--primary)' }} />}
                </div>

                {/* Content */}
                <h3 className="font-display text-white text-xl mb-3 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to right, var(--primary), transparent)' }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
