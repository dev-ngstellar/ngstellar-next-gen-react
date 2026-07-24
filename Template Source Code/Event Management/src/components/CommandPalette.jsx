import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Calendar, Ticket, User, Layers, Moon, Sun, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const COMMANDS = [
    { title: 'Explore Upcoming Events', icon: Calendar, action: () => navigate('/events'), category: 'Navigation' },
    { title: 'Go to SaaS Admin Dashboard', icon: Layers, action: () => navigate('/admin'), category: 'Admin' },
    { title: 'Browse Event Services', icon: Sparkles, action: () => navigate('/services'), category: 'Navigation' },
    { title: 'View Event Gallery', icon: Ticket, action: () => navigate('/gallery'), category: 'Navigation' },
    { title: 'Company Story & Vision', icon: User, action: () => navigate('/about'), category: 'Navigation' },
    { title: 'Contact Executive Support', icon: ShieldCheck, action: () => navigate('/contact'), category: 'Support' },
    { title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`, icon: theme === 'dark' ? Sun : Moon, action: () => toggleTheme(), category: 'Preferences' }
  ];

  const filteredCommands = COMMANDS.filter(cmd => 
    cmd.title.toLowerCase().includes(query.toLowerCase()) || 
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden glass-panel">
        <div className="flex items-center px-4 py-3 border-b border-[var(--border-color)]">
          <Search className="w-5 h-5 text-[var(--color-primary)] mr-3" />
          <input
            type="text"
            placeholder="Type a command or search (e.g. 'Admin', 'Events', 'Theme')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[var(--text-heading)] focus:outline-none text-base placeholder:text-[var(--text-muted)]"
            autoFocus
          />
          <kbd className="px-2 py-1 text-xs font-mono bg-[var(--bg-surface)] text-[var(--text-muted)] rounded border border-[var(--border-color)]">
            ESC
          </kbd>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-[var(--text-muted)] text-sm">
              No command matching "<span className="text-[var(--text-heading)]">{query}</span>"
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    cmd.action();
                    onClose(false);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-surface)] text-left transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-[var(--bg-primary)] text-[var(--color-primary)] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[var(--text-heading)] group-hover:text-[var(--color-primary)] transition-colors">
                        {cmd.title}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">{cmd.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] flex justify-between items-center">
          <span>Stellar Command Palette (Ctrl + K)</span>
          <span className="flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-success)]" />
            <span>Ready</span>
          </span>
        </div>
      </div>
    </div>
  );
};
