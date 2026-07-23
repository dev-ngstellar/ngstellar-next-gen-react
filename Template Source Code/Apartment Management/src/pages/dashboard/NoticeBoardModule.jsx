import React, { useState } from 'react';
import { NOTICES_DATA } from '../../data/mockData';
import { Bell, Plus, Pin, FileText, Calendar } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const NoticeBoardModule = () => {
  const [notices, setNotices] = useState(NOTICES_DATA);
  const [newNoticeModal, setNewNoticeModal] = useState(false);

  const handleCreateNotice = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newN = {
      id: `NTC-${Math.floor(200 + Math.random() * 800)}`,
      title: formData.get('title'),
      category: formData.get('category'),
      date: 'Jul 23, 2026',
      author: 'Management Committee',
      content: formData.get('content'),
      priority: formData.get('priority'),
      pinned: false
    };
    setNotices([newN, ...notices]);
    setNewNoticeModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Society Official Notice Board</h1>
          <p className="text-xs text-slate-500">Official announcements, AGM meetings, maintenance shutdowns, and emergency notices.</p>
        </div>

        <button
          onClick={() => setNewNoticeModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          Publish Notice
        </button>
      </div>

      <div className="space-y-4">
        {notices.map((ntc) => (
          <div key={ntc.id} className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {ntc.pinned && <Pin className="w-4 h-4 text-amber-500 fill-amber-500" />}
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold theme-accent-light-bg theme-accent-text uppercase">
                  {ntc.category}
                </span>
                <span className="text-xs text-slate-400">• {ntc.date}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">{ntc.id}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{ntc.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{ntc.content}</p>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Published by: <strong>{ntc.author}</strong></span>
              <button onClick={() => alert("Downloading notice PDF attachment.")} className="theme-accent-text font-bold flex items-center gap-1 hover:underline">
                <FileText className="w-3.5 h-3.5" /> Download PDF Attachment
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={newNoticeModal} onClose={() => setNewNoticeModal(false)} title="Publish Official Society Notice">
        <form onSubmit={handleCreateNotice} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Notice Title</label>
            <input required name="title" placeholder="Monsoon Roof Inspection & Maintenance" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Category</label>
              <select name="category" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <option>Announcement</option>
                <option>Maintenance</option>
                <option>Security Alert</option>
                <option>Celebration</option>
              </select>
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
            <label className="block font-semibold mb-1">Notice Content</label>
            <textarea required name="content" rows={4} placeholder="Full notice announcement text..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded-xl theme-accent-bg text-white font-bold">
            Broadcast Notice To All Residents
          </button>
        </form>
      </Modal>
    </div>
  );
};
