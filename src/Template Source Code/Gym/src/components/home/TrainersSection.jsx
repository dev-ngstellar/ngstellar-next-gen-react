import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AtSign, Share2, Globe } from 'lucide-react';
import { trainers } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const socialIcons = { instagram: AtSign, twitter: Share2, linkedin: Globe };

export default function TrainersSection() {
  return (
    <section className="section-padding" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Meet The Team</span>
          <h2>
            ELITE TRAINERS,
            <br />
            <span className="text-gradient">WORLD-CLASS COACHING</span>
          </h2>
        </motion.div>

        {/* Trainer Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trainers.slice(0, 4).map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: '420px' }}
            >
              {/* Photo */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default Overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                }}
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.7) 100%)' }}
              />

              {/* Default Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: 'var(--primary)' }}
                >
                  {trainer.role}
                </div>
                <h3 className="font-display text-white text-xl">{trainer.name}</h3>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  {trainer.experience} Experience
                </p>
              </div>

              {/* Hover Detail Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div style={{ color: 'var(--primary)' }} className="text-xs font-bold uppercase tracking-widest mb-1">
                  {trainer.role}
                </div>
                <h3 className="font-display text-white text-xl mb-2">{trainer.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  {trainer.bio}
                </p>
                {/* Certs */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {trainer.certifications.slice(0, 2).map((cert) => (
                    <span key={cert} className="text-xs px-2 py-1 rounded-full" style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                      {cert}
                    </span>
                  ))}
                </div>
                {/* Social */}
                <div className="flex gap-2">
                  {Object.entries(trainer.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return Icon ? (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 glass rounded-lg flex items-center justify-center transition-all duration-200 hover:border-primary"
                        onClick={e => e.stopPropagation()}
                      >
                        <Icon className="w-3.5 h-3.5 text-gray-300 hover:text-white" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/trainers">
            <button className="btn-outline">
              View All Trainers
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
