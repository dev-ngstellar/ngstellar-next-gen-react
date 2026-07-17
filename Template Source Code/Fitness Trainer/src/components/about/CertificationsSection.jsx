import { motion } from 'framer-motion';
import { Award, ShieldCheck, Salad, Zap, Activity, Heart } from 'lucide-react';
import { certifications } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const iconMap = { Award, ShieldCheck, Salad, Zap, Activity, Heart };

export default function CertificationsSection() {
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
          <span className="section-label">✦ Credentials</span>
          <h2>
            Certifications &<br />
            <span className="text-gradient">Expertise</span>
          </h2>
          <p>Every certification is a commitment to delivering the highest standard of coaching.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5"
        >
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                className="gradient-border group glass rounded-2xl p-6 flex items-start gap-4 card-hover"
                style={{ border: '1px solid var(--border)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                    boxShadow: '0 0 20px var(--glow-soft)',
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-base mb-1" style={{ color: 'var(--text)' }}>
                    {cert.title}
                  </div>
                  <div className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                    {cert.body}
                  </div>
                  <div
                    className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid rgba(var(--primary-rgb), 0.3)' }}
                  >
                    {cert.year}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
