import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { eventsData } from '../../data/mockData';
import { Search, CalendarDays, Trash2, X } from 'lucide-react';

const AdminEvents = () => {
  const [eventsList, setEventsList] = useState([]);
  const [search, setSearch] = useState('');
  
  // Modal states
  const [openAdd, setOpenAdd] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newSpeaker, setNewSpeaker] = useState('');
  const [newVenue, setNewVenue] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setEventsList(eventsData);
  }, []);

  const handleDelete = (id) => {
    setEventsList(eventsList.filter(e => e.id !== id));
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
    setNewTitle('');
    setNewDate('');
    setNewTime('');
    setNewSpeaker('');
    setNewVenue('');
    setNewDesc('');
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();
    setLoading(true);

    const newId = `event-${Math.floor(100 + Math.random() * 900)}`;
    const newRecord = {
      id: newId,
      title: newTitle,
      date: newDate,
      time: newTime,
      speaker: newSpeaker,
      venue: newVenue,
      description: newDesc,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
    };

    setTimeout(() => {
      setEventsList([...eventsList, newRecord]);
      setLoading(false);
      setOpenAdd(false);
    }, 1000);
  };

  const filteredEvents = eventsList.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.speaker.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        {/* Header Title & Actions */}
        <div className="border-b border-slate-200/80 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Admin Console</span>
            <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
              Events & Summits Registry
            </h1>
          </div>
          
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-violet-600 hover:bg-violet-750 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-violet-600/10 focus:outline-none"
          >
            <CalendarDays className="w-4 h-4" />
            Schedule Event
          </button>
        </div>

        {/* Search controls */}
        <div className="mb-6 max-w-sm relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scheduled summits..."
            className="w-full border border-slate-200 focus:border-violet-500 bg-white py-2.5 pl-10 pr-4 focus:outline-none text-xs font-light rounded transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Events Table */}
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                  <th className="py-3 px-4">Event Details</th>
                  <th className="py-3 px-4">Panel Speaker</th>
                  <th className="py-3 px-4">Venue location</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-550 font-light">
                {filteredEvents.map((e) => (
                  <tr key={e.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-800 block">{e.title}</span>
                      <span className="text-[10px] text-slate-450 block">{e.date} &middot; {e.time}</span>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-700">{e.speaker}</td>
                    <td className="py-4 px-4">{e.venue.split(' & ')[0]}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleDelete(e.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Cancel Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Add Event modal */}
      {openAdd && (
        <div 
          onClick={handleCloseAdd}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-800 max-w-md w-full p-8 relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            <button 
              onClick={handleCloseAdd}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleSaveEvent} className="flex flex-col gap-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight">
                  Schedule Academic Event
                </h3>
                <p className="text-slate-400 text-xs font-light">Input event coordinates to display on public calendars.</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Event / Summit Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Advanced REST API Scalability"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Date</label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Time Window</label>
                  <input
                    type="text"
                    required
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    placeholder="14:00 - 16:30"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Panel Speaker</label>
                <input
                  type="text"
                  required
                  value={newSpeaker}
                  onChange={(e) => setNewSpeaker(e.target.value)}
                  placeholder="Dr. Marcus Vance"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Venue Location</label>
                <input
                  type="text"
                  required
                  value={newVenue}
                  onChange={(e) => setNewVenue(e.target.value)}
                  placeholder="Lecture Auditorium A"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Event Description</label>
                <textarea
                  rows={3}
                  required
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Summarize panel points..."
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-550/50 text-white py-3.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1 mt-2"
              >
                {loading ? 'Creating Event...' : 'Schedule Event'}
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminEvents;
