import { motion } from 'framer-motion';
import { Flame, Dumbbell, Zap, Monitor, Salad } from 'lucide-react';
import { programs } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const iconMap = { Flame, Dumbbell, Zap, Monitor, Salad };

export default function ProgramsSection() {
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
          <span className="section-label">✦ Programs</span>
          <h2>
            Training Programs<br />
            <span className="text-gradient">Built For Results</span>
          </h2>
          <p>
            Every program is scientifically structured for maximum impact — choose your goal and let's build the plan.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6"
        >
          {programs.map((prog, i) => {
            const Icon = iconMap[prog.icon] || Dumbbell;
            return (
              <motion.div
                key={prog.id}
                variants={fadeUp}
                className="gradient-border group relative rounded-2xl p-7 card-hover cursor-pointer"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.4s ease',
                }}
                whileHover={{
                  y: -8,
                  borderColor: 'transparent',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${prog.color}18`,
                    border: `1px solid ${prog.color}30`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: prog.color }} />
                </div>

                {/* Meta */}
                <div className="flex gap-2 mb-4">
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                  >
                    {prog.duration}
                  </span>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                  >
                    {prog.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-gradient transition-all duration-300" style={{ color: 'var(--text)' }}>
                  {prog.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {prog.description}
                </p>

                {/* Hover glow line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full group-hover:w-4/5 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${prog.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
