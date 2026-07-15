import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaCalendar, FaLocationDot, FaClock, FaUsers, FaArrowLeft, FaTicket } from 'react-icons/fa6';
import { upcomingEvents, eventDetails } from '../data/events';
import CountdownTimer from '../components/ui/CountdownTimer';
import { pageTransition } from '../utils/animations';

export default function EventDetail() {
  const { id } = useParams();
  const event = upcomingEvents.find(e => e.id === Number(id)) || upcomingEvents[0];
  const details = eventDetails[event.id];

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />

        <div className="absolute bottom-0 left-0 right-0 container-custom pb-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors">
            <FaArrowLeft className="text-xs" />
            Back to Events
          </Link>
          <span
            className="block mb-3 text-xs font-bold uppercase tracking-wider w-fit px-3 py-1 rounded-full capitalize"
            style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            {event.category}
          </span>
          <h1 className="heading-display text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {event.title}
          </h1>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Meta */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: FaCalendar, text: new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
                { icon: FaClock, text: event.time || '7:00 PM' },
                { icon: FaLocationDot, text: event.location },
                { icon: FaUsers, text: `${event.registered || 0} / ${event.capacity || '∞'} registered` },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon style={{ color: 'var(--color-primary)' }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <h2 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>About This Event</h2>
              <p className="text-white/60 leading-relaxed">
                {details?.longDescription || event.description}
              </p>
            </div>

            {/* Schedule */}
            {details?.schedule && (
              <div>
                <h2 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Event Schedule
                </h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
                  <div className="space-y-5 pl-12">
                    {details.schedule.map((item, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        {/* Dot */}
                        <div
                          className="absolute -left-12 top-1 w-3 h-3 rounded-full border-2"
                          style={{ background: 'var(--color-primary)', borderColor: 'var(--color-secondary)' }}
                        />
                        <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-bold" style={{ color: 'var(--color-primary)' }}>{item.time}</span>
                            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                          </div>
                          <p className="text-white/45 text-xs">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Venue */}
            {details?.venue && (
              <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h2 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Venue Information</h2>
                <h3 className="text-white font-semibold mb-2">{details.venue.name}</h3>
                <p className="text-white/50 text-sm mb-4 flex items-start gap-2">
                  <FaLocationDot className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                  {details.venue.address}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {details.venue.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-white/50 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-primary)' }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Countdown */}
            <div className="p-6 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Event Countdown</p>
              <div className="flex justify-center">
                <CountdownTimer date={event.date} />
              </div>
            </div>

            {/* Registration */}
            <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, var(--color-primary)18, var(--color-accent)10)', border: '1px solid var(--color-primary)44' }}>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Register for This Event</h3>
              <p className="text-white/50 text-sm mb-4">Secure your spot before it fills up.</p>
              <p className="text-2xl font-black mb-4" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                {event.price}
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center">
                <FaTicket />
                <span>Register Now</span>
              </Link>
              {event.capacity && (
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-white/40 mb-1">
                    <span>{event.registered} registered</span>
                    <span>{event.capacity - event.registered} spots left</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden bg-white/10">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(event.registered / event.capacity) * 100}%`, background: 'var(--color-primary)' }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            {event.tags && (
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Event Tags</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sponsors */}
            {details?.sponsors && (
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Sponsors & Partners</p>
                <div className="flex flex-wrap gap-2">
                  {details.sponsors.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white/60"
                      style={{ background: 'rgba(255,255,255,0.05)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
