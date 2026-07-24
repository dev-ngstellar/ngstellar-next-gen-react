import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Command, MessageSquare, BookOpen, Send, Sparkles } from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';

export default function SupportWidget() {
  const [open, setOpen] = useState(false);
  const [ticketMsg, setTicketMsg] = useState('');
  const { addToast } = useInventory();

  const handleSendTicket = (e) => {
    e.preventDefault();
    if (!ticketMsg.trim()) return;
    addToast('Support Ticket Sent', 'Our team will respond via email within 2 hours.', 'success');
    setTicketMsg('');
    setOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center space-x-2 px-3.5 py-2 rounded-2xl bg-bg-card border border-border-main text-xs font-bold text-txt-heading shadow-float hover:border-accent-primary/40 glass-panel hover:scale-105 transition-all"
      >
        <HelpCircle className="w-4 h-4 text-accent-primary" />
        <span className="hidden sm:inline">Help & Shortcuts</span>
      </button>

      {/* Support Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative w-full max-w-lg bg-bg-card border border-border-main rounded-2xl shadow-float glass-panel overflow-hidden p-6 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-border-main pb-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-accent-primary" />
                  <h3 className="text-base font-extrabold text-txt-heading">Stellar Assistance & Shortcuts</h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-lg hover:bg-bg-hover text-txt-muted hover:text-txt-heading"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Keyboard Shortcuts List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-txt-heading uppercase tracking-wider">Keyboard Shortcuts</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between">
                    <span>Command Search</span>
                    <kbd className="px-1.5 py-0.5 bg-bg-card border border-border-main rounded font-mono font-bold text-[10px]">Ctrl + K</kbd>
                  </div>
                  <div className="p-2 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between">
                    <span>Quick Add Product</span>
                    <kbd className="px-1.5 py-0.5 bg-bg-card border border-border-main rounded font-mono font-bold text-[10px]">Alt + N</kbd>
                  </div>
                  <div className="p-2 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between">
                    <span>Toggle Theme</span>
                    <kbd className="px-1.5 py-0.5 bg-bg-card border border-border-main rounded font-mono font-bold text-[10px]">Alt + T</kbd>
                  </div>
                  <div className="p-2 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between">
                    <span>Close Drawer</span>
                    <kbd className="px-1.5 py-0.5 bg-bg-card border border-border-main rounded font-mono font-bold text-[10px]">ESC</kbd>
                  </div>
                </div>
              </div>

              {/* Direct Ticket Form */}
              <form onSubmit={handleSendTicket} className="space-y-3 pt-2 border-t border-border-subtle">
                <h4 className="text-xs font-bold text-txt-heading uppercase tracking-wider flex items-center space-x-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Send Direct Support Query</span>
                </h4>
                <textarea
                  rows={3}
                  value={ticketMsg}
                  onChange={(e) => setTicketMsg(e.target.value)}
                  placeholder="Describe your issue or custom integration request..."
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main text-xs text-txt-heading focus:outline-none focus:border-accent-primary font-medium"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Ticket</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
