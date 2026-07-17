import { motion } from 'framer-motion';
import { viewportOnce } from '../../utils/animations';

export default function ContactHero() {
  return (
    <section
      className="pt-36 pb-16 relative overflow-hidden"
      style={{ background: 'var(--secondary)' }}
    >
      {/* Aurora */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-50"
        style={{ background: 'var(--aurora-1)', filter: 'blur(100px)' }}
      />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">✦ Get In Touch</span>
          <h1
            className="font-display font-extrabold tracking-tight leading-tight mt-4 mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', color: 'var(--text)' }}
          >
            Let's Start Your<br />
            <span className="text-gradient">Fitness Journey</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Ready to transform your body? Let's connect. The first consultation is completely free — no commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
