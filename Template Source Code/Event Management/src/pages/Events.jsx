import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaLocationDot, FaFilter, FaArrowRight } from 'react-icons/fa6';
import EventCard from '../components/ui/EventCard';
import { upcomingEvents, pastEvents, eventCategories } from '../data/events';
import { pageTransition, staggerContainer, staggerItem } from '../utils/animations';

export default function Events() {
  const [tab, setTab] = useState('upcoming');
  const [category, setCategory] = useState('all');

  const filterEvents = (list) =>
    category === 'all' ? list : list.filter(e => e.category === category);

  const currentList = tab === 'upcoming' ? filterEvents(upcomingEvents) : filterEvents(pastEvents);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      {/* Page Header */}
      <div
        className="relative py-32 pt-40 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, var(--color-secondary) 100%)' }}
      >
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mx-auto">Events</div>
            <h1 className="heading-display text-white mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              All <span style={{ color: 'var(--color-primary)' }}>Events</span>
            </h1>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              Discover upcoming events and explore our successful past productions across all event categories.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom section-padding">
        {/* Tabs */}
        <motion.div
          className="flex gap-2 mb-8 p-1 rounded-xl w-fit"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { id: 'upcoming', label: `Upcoming Events (${upcomingEvents.length})` },
            { id: 'past', label: `Past Events (${pastEvents.length})` },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: tab === t.id ? 'var(--color-primary)' : 'transparent',
                color: tab === t.id ? 'var(--color-secondary)' : 'rgba(255,255,255,0.5)',
              }}
            >
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-2 items-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <FaFilter className="text-white/30 shrink-0 mr-1" />
          {eventCategories.slice(0, 8).map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all capitalize"
              style={{
                background: category === cat.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                color: category === cat.id ? 'var(--color-secondary)' : 'rgba(255,255,255,0.55)',
                border: `1px solid ${category === cat.id ? 'var(--color-primary)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        {tab === 'upcoming' ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={category}
          >
            {currentList.length === 0 ? (
              <motion.div
                className="col-span-3 text-center py-16"
                variants={staggerItem}
              >
                <p className="text-white/30 text-lg">No events found for this category.</p>
              </motion.div>
            ) : (
              currentList.map(event => (
                <motion.div key={event.id} variants={staggerItem}>
                  <EventCard event={event} />
                </motion.div>
              ))
            )}
          </motion.div>
        ) : (
          /* Past Events Grid */
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={`past-${category}`}
          >
            {currentList.length === 0 ? (
              <motion.div className="col-span-3 text-center py-16" variants={staggerItem}>
                <p className="text-white/30 text-lg">No events found for this category.</p>
              </motion.div>
            ) : (
              currentList.map(event => (
                <motion.div
                  key={event.id}
                  variants={staggerItem}
                  className="group relative overflow-hidden cursor-pointer flex flex-col h-full"
                  style={{ borderRadius: 'var(--border-radius)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold capitalize"
                      style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                    >
                      {event.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/45 text-xs mb-3">
                        <span className="flex items-center gap-1.5">
                          <FaCalendar style={{ color: 'var(--color-primary)' }} />
                          {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaLocationDot style={{ color: 'var(--color-primary)' }} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/05">
                      <span className="text-white/40 text-xs">{event.attendees?.toLocaleString()} attendees</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < Math.floor(event.rating || 5) ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
