import React, { useState } from 'react';
import { Search, Download, CheckCircle2, QrCode, FileText, Filter } from 'lucide-react';
import { RECENT_BOOKINGS, ATTENDEES_LIST, VENUES_LIST, MEDIA_ASSETS, BLOG_POSTS } from '../../data/adminData';

export const AdminGenericView = ({ title, subtitle, type }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkInMap, setCheckInMap] = useState({ 'ATT-101': true, 'ATT-102': true, 'ATT-103': false });

  const toggleCheckIn = (id) => {
    setCheckInMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--text-heading)]">{title}</h1>
          <p className="text-xs text-[var(--text-muted)]">{subtitle}</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-semibold text-[var(--text-heading)] flex items-center space-x-2 hover:border-[var(--color-primary)]">
          <Download className="w-3.5 h-3.5" />
          <span>Export CSV / PDF</span>
        </button>
      </div>

      {/* Bookings & Invoices Table */}
      {type === 'bookings' && (
        <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[var(--text-body)]">
              <thead className="bg-[var(--bg-primary)] font-mono uppercase text-[var(--text-heading)]">
                <tr>
                  <th className="p-3">Invoice Ref</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Event</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {RECENT_BOOKINGS.map((b) => (
                  <tr key={b.id} className="hover:bg-[var(--bg-surface)]">
                    <td className="p-3 font-mono font-bold text-[var(--color-primary)]">{b.id}</td>
                    <td className="p-3 font-semibold text-[var(--text-heading)]">{b.customer}</td>
                    <td className="p-3">{b.event}</td>
                    <td className="p-3 font-mono font-bold text-[var(--text-heading)]">{b.amount}</td>
                    <td className="p-3 font-mono text-[var(--text-muted)]">{b.date}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        b.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Attendee QR Check-in List */}
      {type === 'attendees' && (
        <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
          <h3 className="text-base font-bold text-[var(--text-heading)]">Live On-Site QR Check-in Scanner</h3>
          <div className="space-y-3">
            {ATTENDEES_LIST.map((att) => {
              const isCheckedIn = checkInMap[att.id] ?? att.checkIn;
              return (
                <div key={att.id} className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-heading)]">{att.name}</h4>
                    <p className="text-xs text-[var(--text-muted)] font-mono">{att.email} • Seat {att.seat}</p>
                  </div>
                  <button
                    onClick={() => toggleCheckIn(att.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                      isCheckedIn
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)]'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>{isCheckedIn ? 'Checked In' : 'Scan QR Check-In'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Venues Grid */}
      {type === 'venues' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VENUES_LIST.map((v) => (
            <div key={v.id} className="glass-card p-6 rounded-3xl space-y-3 border border-[var(--border-color)]">
              <h3 className="text-lg font-bold text-[var(--text-heading)]">{v.name}</h3>
              <p className="text-xs text-[var(--text-muted)] font-mono">{v.city} • Capacity: {v.capacity}</p>
              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="font-mono text-[var(--color-primary)] font-bold">{v.rate}</span>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-semibold">{v.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Media Library */}
      {type === 'media' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MEDIA_ASSETS.map((m) => (
            <div key={m.id} className="glass-card p-3 rounded-2xl space-y-2 border border-[var(--border-color)]">
              <img src={m.url} alt={m.name} className="w-full h-28 object-cover rounded-xl" />
              <div className="text-[10px] font-mono text-[var(--text-heading)] truncate">{m.name}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{m.size}</div>
            </div>
          ))}
        </div>
      )}

      {/* Blog CMS */}
      {type === 'blog' && (
        <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-heading)]">{post.title}</h4>
                <p className="text-xs text-[var(--text-muted)]">{post.category} • {post.views} views • {post.date}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-semibold">
                {post.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Default fallback for settings, analytics, notifications */}
      {['settings', 'analytics', 'notifications', 'speakers', 'sponsors', 'tickets'].includes(type) && (
        <div className="glass-card p-8 rounded-3xl space-y-4 border border-[var(--border-color)]">
          <h3 className="text-lg font-bold text-[var(--text-heading)]">Enterprise Configuration</h3>
          <p className="text-xs text-[var(--text-body)]">
            Active module: <strong className="text-[var(--color-primary)] font-mono">{type.toUpperCase()}</strong>. All permissions, webhook APIs, and Stripe keys are synced and operational.
          </p>
        </div>
      )}

    </div>
  );
};
