import { motion } from 'framer-motion';
import { viewportOnce } from '../../utils/animations';

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7 }}
      className="rounded-2xl overflow-hidden relative"
      style={{
        border: '1px solid var(--border)',
        boxShadow: '0 0 40px var(--glow-soft)',
        height: '320px',
      }}
    >
      {/* Dark overlay with primary glow tint */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'rgba(var(--primary-rgb), 0.04)' }}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69766374863765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1718000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.85)',
          display: 'block',
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="EliteFit Studio Location"
      />
    </motion.div>
  );
}
