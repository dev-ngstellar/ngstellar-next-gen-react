import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSettings, FiLayout, FiDroplet, FiUser, FiType } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';
import { useTheme } from '../../context/ThemeContext';

export default function LiveCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    selectedLayout, switchLayout, 
    activeProfileData, updateProfile 
  } = usePortfolio();
  
  const { themes, activeThemeId, switchTheme } = useTheme();

  const layouts = [
    { id: 'developer', label: 'Developer' },
    { id: 'creative', label: 'Creative' },
    { id: 'academic', label: 'Academic' },
    { id: 'business', label: 'Business' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'healthcare', label: 'Healthcare' }
  ];

  return (
    <>
      <button 
        id="live-customizer-toggle"
        onClick={() => setIsOpen(true)}
        style={{ display: 'none' }} // Hidden trigger, clicked from Navbar
      />

      {/* Floating Toggle Button (fallback) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 90,
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'var(--color-primary)', color: 'white',
            border: 'none', boxShadow: 'var(--shadow-lg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <FiSettings size={22} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
                zIndex: 99
              }}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '100%', maxWidth: '400px',
                background: 'var(--color-surface)',
                borderLeft: '1px solid var(--color-border)',
                zIndex: 100, display: 'flex', flexDirection: 'column',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiSettings color="var(--color-primary)" /> Live Customizer
                </h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}
                >
                  <FiX size={24} />
                </button>
              </div>

              <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* 1. Theme Selection */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiDroplet /> 1. Global Theme
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {themes.map(t => (
                      <button
                        key={t.id}
                        onClick={() => switchTheme(t.id)}
                        style={{
                          padding: '0.75rem', borderRadius: '0.75rem',
                          border: `1px solid ${activeThemeId === t.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
                          background: activeThemeId === t.id ? 'rgba(37,99,235,0.05)' : 'var(--color-bg)',
                          color: 'var(--color-text)', textAlign: 'left',
                          cursor: 'pointer', transition: 'all 0.2s',
                          display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}
                      >
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.colors.primary }} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Layout Selection */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiLayout /> 2. Master Layout
                  </h4>
                  <select
                    value={selectedLayout}
                    onChange={(e) => switchLayout(e.target.value)}
                    style={{
                      width: '100%', padding: '0.875rem 1rem',
                      borderRadius: '0.75rem', border: '1px solid var(--color-border)',
                      background: 'var(--color-bg)', color: 'var(--color-text)',
                      fontSize: '0.9rem', outline: 'none', cursor: 'pointer'
                    }}
                  >
                    {layouts.map(l => (
                      <option key={l.id} value={l.id}>{l.label} Layout</option>
                    ))}
                  </select>
                </div>

                {/* 3. Personal Info */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiUser /> 3. Personal Details
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginBottom: '0.25rem' }}>Full Name</label>
                      <input 
                        type="text" 
                        value={activeProfileData.name || ''}
                        onChange={(e) => updateProfile({ name: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginBottom: '0.25rem' }}>Profession Title</label>
                      <input 
                        type="text" 
                        value={activeProfileData.title || ''}
                        onChange={(e) => updateProfile({ title: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginBottom: '0.25rem' }}>Profile Image URL</label>
                      <input 
                        type="text" 
                        value={activeProfileData.avatar || ''}
                        onChange={(e) => updateProfile({ avatar: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text)', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ padding: '1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)', textAlign: 'center' }}>
                  Changes are applied instantly and saved to your local storage.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
