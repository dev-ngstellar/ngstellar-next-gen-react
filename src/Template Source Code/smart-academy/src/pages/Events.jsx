import React, { useState, useEffect } from 'react';
import { eventsData } from '../data/mockData';
import { Calendar, Clock, MapPin, User, CheckCircle2, Ticket } from 'lucide-react';

const Events = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Fetch previously registered events
    const saved = JSON.parse(localStorage.getItem('registered_events_queue')) || [];
    setRegisteredEvents(saved);
  }, []);

  const handleRegisterEvent = (eventTitle) => {
    if (registeredEvents.includes(eventTitle)) return;
    const updated = [...registeredEvents, eventTitle];
    setRegisteredEvents(updated);
    localStorage.setItem('registered_events_queue', JSON.stringify(updated));
  };

  return (
    <div className="animate-page-enter">
      
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-violet-400 font-semibold mb-2 block">Events Calendar</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Academic Panels & Tech Summits
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Secure entry slots for live software coding audits, user research roundtables, and system design panels.
          </p>
        </div>
      </div>

      {/* Events list */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          {eventsData.map((evt) => {
            const isRegistered = registeredEvents.includes(evt.title);
            return (
              <div 
                key={evt.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-305 flex flex-col md:flex-row gap-6 md:gap-8 p-6 items-center"
              >
                {/* Event Image */}
                <div className="w-full md:w-64 h-44 shrink-0 rounded-xl overflow-hidden">
                  <img 
                    src={evt.image} 
                    alt={evt.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="flex-grow flex flex-col gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-950 mb-1 group-hover:text-violet-600 transition-colors">
                      {evt.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-light text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-violet-500" />
                        {evt.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-violet-500" />
                        {evt.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-violet-500" />
                        Speaker: {evt.speaker}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3">
                    {evt.description}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                    <MapPin className="w-4 h-4 text-violet-500" />
                    <span>Venue: <span className="font-medium text-slate-700">{evt.venue}</span></span>
                  </div>
                </div>

                {/* Action button */}
                <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
                  {isRegistered ? (
                    <div className="px-5 py-3.5 bg-emerald-50 text-emerald-600 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4" />
                      Slot Booked
                    </div>
                  ) : (
                    <button
                      onClick={() => handleRegisterEvent(evt.title)}
                      className="w-full md:w-auto px-6 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-violet-600/10 flex items-center justify-center gap-1.5 focus:outline-none"
                    >
                      <Ticket className="w-4 h-4" />
                      Register Free
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Events;
