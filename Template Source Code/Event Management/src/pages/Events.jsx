import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Grid, List, Star, Ticket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UPCOMING_EVENTS } from '../data/eventsData';

export const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' or 'list'

  const categories = ['All', 'Technology', 'Fashion & Design', 'Finance', 'Music & Festival', 'Healthcare'];
  const statuses = ['All', 'Upcoming', 'Completed'];

  const filteredEvents = UPCOMING_EVENTS.filter(evt => {
    const matchesSearch = evt.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          evt.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || evt.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || evt.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Curated Global Calendar
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)]">
          Explore Premier Events & Summits
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Discover high-stakes summits, luxury galas, product reveals, and music festivals worldwide.
        </p>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by event title, location, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] pl-10 pr-4 py-3 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-2 text-xs font-medium rounded-xl transition-colors ${
                  categoryFilter === cat
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--bg-primary)] text-[var(--text-body)] border border-[var(--border-color)] hover:border-[var(--color-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid/List Layout Toggle */}
          <div className="flex items-center space-x-2 border-l border-[var(--border-color)] pl-4">
            <button
              onClick={() => setLayoutMode('grid')}
              className={`p-2 rounded-lg ${layoutMode === 'grid' ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--bg-primary)] text-[var(--text-muted)]'}`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayoutMode('list')}
              className={`p-2 rounded-lg ${layoutMode === 'list' ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--bg-primary)] text-[var(--text-muted)]'}`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Events Listing */}
      {filteredEvents.length === 0 ? (
        <div className="glass-card p-12 rounded-3xl text-center space-y-4">
          <Ticket className="w-12 h-12 text-[var(--text-muted)] mx-auto opacity-50" />
          <h3 className="text-lg font-bold text-[var(--text-heading)]">No events match your criteria</h3>
          <p className="text-xs text-[var(--text-muted)]">Try adjusting your search terms or category filters.</p>
        </div>
      ) : layoutMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="glass-card rounded-3xl overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-[var(--color-primary)] rounded-full shadow-md">
                    {evt.category}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${evt.status === 'Upcoming' ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-white'}`}>
                    {evt.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)] font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{evt.dateFormatted}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{evt.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-heading)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[var(--text-body)] line-clamp-2">{evt.description}</p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Ticket Price</span>
                    <span className="text-lg font-extrabold text-[var(--text-heading)]">${evt.price}</span>
                  </div>
                  <Link
                    to={`/events/${evt.id}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List Mode View */
        <div className="space-y-4">
          {filteredEvents.map((evt) => (
            <div key={evt.id} className="glass-card p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 group">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
                <img src={evt.image} alt={evt.title} className="w-full md:w-36 h-28 object-cover rounded-2xl" />
                <div className="space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-xs text-[var(--text-muted)] font-mono">
                    <span className="px-2 py-0.5 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded font-semibold">{evt.category}</span>
                    <span>•</span>
                    <span>{evt.dateFormatted}</span>
                    <span>•</span>
                    <span>{evt.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-heading)] group-hover:text-[var(--color-primary)] transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[var(--text-body)] line-clamp-1">{evt.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[var(--border-color)] pt-4 md:pt-0">
                <div className="text-right">
                  <span className="text-xs text-[var(--text-muted)] block">From</span>
                  <span className="text-xl font-extrabold text-[var(--text-heading)]">${evt.price}</span>
                </div>
                <Link
                  to={`/events/${evt.id}`}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors"
                >
                  View Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
