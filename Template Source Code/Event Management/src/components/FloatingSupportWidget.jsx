import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';

export const FloatingSupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome to Stellar Events Concierge! How can we assist your event planning today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: `Thank you! An event specialist has received your note: "${userMsg}". We will reach out shortly or you can call +1 (800) 555-STELLAR.` }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium shadow-2xl hover:scale-105 transition-all group glow-primary"
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          <span>VIP Concierge</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl glass-panel overflow-hidden flex flex-col h-[460px] animate-fade-in">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Stellar Live Concierge</h4>
                <p className="text-[10px] text-white/80 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Average response: &lt; 2 mins</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[var(--bg-primary)]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[var(--color-primary)] text-white rounded-br-none'
                      : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-heading)] rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask Concierge anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[var(--bg-primary)] text-xs text-[var(--text-heading)] px-3 py-2.5 rounded-xl border border-[var(--border-color)] focus:outline-none focus:border-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-[var(--color-primary)] text-white hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
