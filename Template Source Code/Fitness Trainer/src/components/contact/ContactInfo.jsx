import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../utils/data';
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/animations';

const infoItems = [
  {
    icon: Phone,
    title: 'Phone',
    primary: siteConfig.phone,
    secondary: 'Available Mon–Sat',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: siteConfig.email,
    secondary: 'Reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Studio',
    primary: siteConfig.address,
    secondary: 'By appointment only',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: `Mon–Fri: ${siteConfig.hours.weekdays}`,
    secondary: `Sat: ${siteConfig.hours.saturday} · Sun: ${siteConfig.hours.sunday}`,
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {infoItems.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="glass rounded-2xl p-5 flex items-start gap-4 group card-hover"
            style={{ border: '1px solid var(--border)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ background: 'var(--glow-soft)', border: '1px solid rgba(var(--primary-rgb), 0.3)' }}
            >
              <Icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
                {item.title}
              </p>
              <p className="text-sm font-medium mb-0.5" style={{ color: 'var(--text)' }}>
                {item.primary}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                {item.secondary}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
