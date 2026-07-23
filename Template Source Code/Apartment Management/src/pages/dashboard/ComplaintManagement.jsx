import React, { useState } from 'react';
import { COMPLAINTS_DATA } from '../../data/mockData';
import { AlertTriangle, Plus, CheckCircle2, Clock, User, Image as ImageIcon } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const ComplaintManagement = () => {
  const [tickets, setTickets] = useState(COMPLAINTS_DATA);
  const [newTicketModal, setNewTicketModal] = useState(false);

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newT = {
      id: `TKT-${Math.floor(400 + Math.random() * 900)}`,
      category: formData.get('category'),
      title: formData.get('title'),
      apartment: formData.get('apartment'),
      priority: formData.get('priority'),
      assignedTo: 'Carlos Mendez (Lead Electrician)',
      status: 'Open',
      date: 'Jul 23, 2026',
      description: formData.get('description'),
      image: null
    };
    setTickets([newT, ...tickets]);
    setNewTicketModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Resident Complaint & Helpdesk Portal</h1>
          <p className="text-xs text-slate-500">Track maintenance tickets, assign technicians, attach photo evidence, and resolve issues.</p>
        </div>

        <button
          onClick={() => setNewTicketModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          File New Complaint
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((tkt) => (
          <div key={tkt.id} className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-slate-400">{tkt.id}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                tkt.priority === 'High' ? 'bg-rose-500/10 text-rose-600' : 'bg-amber-500/10 text-amber-600'
              }`}>
                {tkt.priority} Priority
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{tkt.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{tkt.description}</p>
            </div>

            {tkt.image && (
              <div className="h-40 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <img src={tkt.image} alt={tkt.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <div className="flex justify-between">
                <span>Unit:</span>
                <strong className="text-slate-900 dark:text-white">{tkt.apartment}</strong>
              </div>
              <div className="flex justify-between">
                <span>Assigned Staff:</span>
                <strong className="theme-accent-text">{tkt.assignedTo}</strong>
              </div>
              <div className="flex justify-between">
                <span>Filed Date:</span>
                <span>{tkt.date}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                tkt.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
              }`}>
                {tkt.status}
              </span>
              {tkt.status !== 'Resolved' && (
                <button
                  onClick={() => setTickets(prev => prev.map(t => t.id === tkt.id ? { ...t, status: 'Resolved' } : t))}
                  className="px-3 py-1.5 rounded-xl theme-accent-bg text-white font-bold text-xs"
                >
                  Mark Resolved
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={newTicketModal} onClose={() => setNewTicketModal(false)} title="File Support Complaint Ticket">
        <form onSubmit={handleCreateTicket} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Issue Category</label>
            <select name="category" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <option>Plumbing & Water Pressure</option>
              <option>Electrical & Lighting</option>
              <option>Elevator Service</option>
              <option>Noise Disturbance</option>
              <option>Housekeeping / Cleaning</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Ticket Title</label>
            <input required name="title" placeholder="Low Water Pressure in Master Suite" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Apartment Unit</label>
              <input required name="apartment" placeholder="C-1201" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Priority</label>
              <select name="priority" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High Urgent</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Detailed Problem Description</label>
            <textarea required name="description" rows={3} placeholder="Describe the issue for assigned technicians..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
            Submit Support Ticket
          </button>
        </form>
      </Modal>
    </div>
  );
};
