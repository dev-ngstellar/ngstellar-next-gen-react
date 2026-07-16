import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BarChart2 } from 'lucide-react';
import { programs } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

export default function ProgramsSection() {
  return (
    <section className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
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
            <span className="section-label">Our Programs</span>
            <h2>
              TRAINING PROGRAMS
              <br />
              <span className="text-gradient">FOR EVERY GOAL</span>
            </h2>
          </div>
          <Link to="/programs">
            <button className="btn-outline flex-shrink-0 mb-2">
              View All Programs <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: '380px' }}
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 img-zoom-container">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Overlay (fades on hover) */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%)',
                }}
              />

              {/* Hover Color Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: program.color }}
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full leading-none"
                  style={{ background: 'rgba(0,0,0,0.6)', color: program.color, border: `1px solid ${program.color}` }}
                >
                  {program.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <Clock className="w-3 h-3" /> {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <BarChart2 className="w-3 h-3" /> {program.level}
                  </span>
                </div>

                <h3 className="font-display text-white text-2xl mb-2 group-hover:text-gradient transition-all duration-300">
                  {program.title}
                </h3>

                {/* Description - reveals on hover */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24">
                  <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {program.description}
                  </p>
                </div>

                {/* CTA */}
                <Link to="/programs">
                  <div
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                    style={{ color: program.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
