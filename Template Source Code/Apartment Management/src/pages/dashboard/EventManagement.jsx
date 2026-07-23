import React, { useState } from 'react';
import { EVENTS_DATA } from '../../data/mockData';
import { PartyPopper, Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';

export const EventManagement = () => {
  const [events, setEvents] = useState(EVENTS_DATA);

  const handleRSVP = (evtId) => {
    setEvents(prev => prev.map(e => e.id === evtId ? { ...e, rsvpCount: e.rsvpCount + 1, rsvped: true } : e));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Community Events & Celebrations</h1>
          <p className="text-xs text-slate-500">Festival celebrations, sports tournaments, stargazing nights, and RSVP tracking.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((evt) => (
          <div key={evt.id} className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
            <div className="relative h-48">
              <img src={evt.image} alt={evt.title} className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-white backdrop-blur-md">
                {evt.status}
              </span>
            </div>

            <div className="p-6 pt-0 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{evt.title}</h3>
              
              <div className="space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 theme-accent-text" />
                  <span>{evt.date} at {evt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 theme-accent-text" />
                  <span>{evt.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 theme-accent-text" />
                  <span>{evt.rsvpCount} Residents Attending</span>
                </div>
              </div>

              <button
                onClick={() => handleRSVP(evt.id)}
                disabled={evt.rsvped}
                className="w-full py-2.5 rounded-xl theme-accent-bg text-white font-bold text-xs disabled:opacity-60 shadow-md transition flex items-center justify-center gap-2"
              >
                {evt.rsvped ? <CheckCircle2 className="w-4 h-4" /> : <PartyPopper className="w-4 h-4" />}
                {evt.rsvped ? 'RSVP Confirmed' : 'RSVP Attendance'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
