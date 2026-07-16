import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaLocationDot, FaArrowRight, FaUsers } from 'react-icons/fa6';
import CountdownTimer from './CountdownTimer';

export default function EventCard({ event, compact = false }) {
  const isUpcoming = new Date(event.date) > new Date();

  return (
    <motion.div
      className="card group relative overflow-hidden flex flex-col h-full"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden shrink-0" style={{ height: compact ? '200px' : '240px' }}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold capitalize"
            style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            {event.category}
          </span>
        </div>

        {/* Price Badge */}
        {event.price && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 text-white backdrop-blur-sm">
              {event.price}
            </span>
          </div>
        )}

        {/* Featured badge */}
        {event.featured && (
          <div className="absolute bottom-3 right-3">
            <span
              className="px-2 py-0.5 rounded text-xs font-bold"
              style={{ background: 'rgba(212,175,55,0.2)', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}
            >
              ★ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
          <span style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='var(--color-primary)'} onMouseLeave={e => e.target.style.color=''}>
            {event.title}
          </span>
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <FaCalendar style={{ color: 'var(--color-primary)' }} className="shrink-0" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            {event.time && <span>• {event.time}</span>}
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <FaLocationDot style={{ color: 'var(--color-primary)' }} className="shrink-0" />
            <span>{event.city || event.location}</span>
          </div>
          {event.capacity && (
            <div className="flex items-center gap-2 text-sm">
              <FaUsers className="text-white/30 shrink-0" />
              <div className="flex items-center gap-2 flex-1">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(event.registered / event.capacity) * 100}%`,
                      background: 'var(--color-primary)',
                    }}
                  />
                </div>
                <span className="text-white/40 text-xs whitespace-nowrap">
                  {event.registered}/{event.capacity}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Countdown */}
        {isUpcoming && !compact && (
          <div className="mb-4">
            <CountdownTimer date={event.date} compact />
          </div>
        )}

        {/* Description */}
        {!compact && event.description && (
          <p className="text-white/45 text-sm mb-4 line-clamp-2">{event.description}</p>
        )}

        <Link
          to={`/events/${event.id}`}
          className="btn-outline text-xs py-2.5 px-4 w-full justify-center mt-auto"
        >
          <span>View Details</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </motion.div>
  );
}
