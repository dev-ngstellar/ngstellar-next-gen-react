import { motion } from 'framer-motion';
import { Trophy, Award, Building, Globe, Users } from 'lucide-react';
import { aboutTimeline } from '../../utils/data';
import { viewportOnce } from '../../utils/animations';

const iconMap = { Play: '▶', Trophy, Award, Building, Globe, Users };

export default function TimelineSection() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--secondary-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">✦ My Journey</span>
          <h2>
            A Decade of<br />
            <span className="text-gradient">Growth & Excellence</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--primary), transparent)', opacity: 0.3 }}
          />

          <div className="flex flex-col gap-10">
            {aboutTimeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className={`flex gap-6 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className="glass rounded-2xl p-6 card-hover glow-hover"
                      style={{ border: '1px solid var(--border)' }}
                    >
                      <div
                        className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                        style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid rgba(var(--primary-rgb), 0.3)' }}
                      >
                        {item.year}
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="flex-shrink-0 hidden md:flex">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow"
                      style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                        boxShadow: '0 0 24px var(--glow)',
                        zIndex: 10,
                      }}
                    >
                      <span className="text-white text-sm font-bold">{i + 1}</span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
