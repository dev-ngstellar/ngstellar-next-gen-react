import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import EventCard from '../ui/EventCard';
import { upcomingEvents } from '../../data/events';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function UpcomingEventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const featured = upcomingEvents.slice(0, 3);

  return (
    <section className="section-padding relative" style={{ background: 'rgba(0,0,0,0.2)' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-label">What's Coming</div>
            <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Upcoming <span style={{ color: 'var(--color-primary)' }}>Events</span>
            </h2>
          </div>
          <Link to="/events" className="btn-outline text-sm shrink-0">
            <span>View All Events</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {featured.map(event => (
            <motion.div key={event.id} variants={staggerItem}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
