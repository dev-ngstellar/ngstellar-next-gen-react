import React, { useState } from 'react';
import { Calendar, Plus, Edit2, Trash2, Copy, Archive, CheckCircle2, Clock, MapPin, Layers, Sparkles } from 'lucide-react';
import { UPCOMING_EVENTS } from '../../data/eventsData';

export const AdminEventsView = () => {
  const [eventsList, setEventsList] = useState(UPCOMING_EVENTS);
  const [showBuilder, setShowBuilder] = useState(false);
  const [agendaItems, setAgendaItems] = useState([
    { time: '09:00 AM', title: 'Opening Keynote', speaker: 'Dr. Elena Rostova' },
    { time: '11:00 AM', title: 'Architecture Masterclass', speaker: 'Sarah Chen' }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Technology');
  const [newPrice, setNewPrice] = useState('499');

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEvt = {
      id: `evt-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      status: 'Upcoming',
      dateFormatted: 'Oct 20, 2026',
      location: 'New York, USA',
      price: Number(newPrice),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
    };

    setEventsList([newEvt, ...eventsList]);
    setNewTitle('');
    setShowBuilder(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--text-heading)]">Event Management & Builder</h1>
          <p className="text-xs text-[var(--text-muted)]">Manage live events, draft schedules, speakers, and venue maps.</p>
        </div>
        <button
          onClick={() => setShowBuilder(!showBuilder)}
          className="px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold flex items-center space-x-2 shadow-md hover:bg-[var(--color-primary-hover)] transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{showBuilder ? 'Close Builder' : 'Create & Build Event'}</span>
        </button>
      </div>

      {/* Interactive Drag & Drop Agenda Builder Drawer */}
      {showBuilder && (
        <form onSubmit={handleCreateEvent} className="glass-card p-6 rounded-3xl space-y-6 border border-[var(--color-primary)]/40 animate-fade-in">
          <h3 className="text-lg font-bold text-[var(--text-heading)] flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
            <span>Interactive Event & Agenda Builder</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Event Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Next-Gen Cloud Architecture Summit"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] p-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] p-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
              >
                <option>Technology</option>
                <option>Fashion & Design</option>
                <option>Finance</option>
                <option>Music & Festival</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[var(--text-muted)]">Ticket Price ($)</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] p-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Agenda Builder Drag Simulation */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider block">Agenda Timeline Modules</label>
            {agendaItems.map((ag, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="font-mono font-bold text-[var(--text-heading)]">{ag.time}</span>
                  <span>{ag.title}</span>
                </div>
                <span className="text-[var(--text-muted)]">Speaker: {ag.speaker}</span>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
          >
            Publish Live Summit Page
          </button>
        </form>
      )}

      {/* Events Table / Card Grid */}
      <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
        <h3 className="text-base font-bold text-[var(--text-heading)]">All Published Events ({eventsList.length})</h3>
        
        <div className="space-y-3">
          {eventsList.map((evt) => (
            <div key={evt.id} className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img src={evt.image} alt={evt.title} className="w-16 h-12 object-cover rounded-xl" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-heading)]">{evt.title}</h4>
                  <div className="flex items-center space-x-2 text-[10px] text-[var(--text-muted)] font-mono">
                    <span>{evt.category}</span>
                    <span>•</span>
                    <span>{evt.dateFormatted}</span>
                    <span>•</span>
                    <span>${evt.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] hover:text-[var(--color-primary)]" title="Edit Event">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] hover:text-[var(--color-primary)]" title="Duplicate">
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setEventsList(eventsList.filter(e => e.id !== evt.id))}
                  className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-rose-400 hover:bg-rose-500/10"
                  title="Delete Event"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
