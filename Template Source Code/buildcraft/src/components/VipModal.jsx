import React from 'react';
import { Award, X, Sparkles, Building, Landmark, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VipModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const isBlueprint = data && data.floors !== undefined;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            onClick={onClose} 
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-light-muted)',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-light-muted)'}
          >
            <X size={24} />
          </button>

          <div className="modal-icon-box">
            <Award size={36} />
          </div>

          <h3 className="modal-title">
            {isBlueprint ? "Blueprint Registered" : "Request Received"}
          </h3>

          <div className="modal-desc">
            {isBlueprint ? (
              <>
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-light)' }}>
                  Your custom landmark architecture blueprint has been securely logged on our developer board.
                </p>
                
                {/* Blueprint details table */}
                <div style={{ background: '#070A12', border: '1px solid var(--border-dark)', borderRadius: '4px', padding: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Storeys</span>
                    <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>{data.floors} floors</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Apex Height</span>
                    <strong style={{ color: 'white' }}>{data.heightMeters} meters</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Cladding System</span>
                    <strong style={{ color: 'white', textTransform: 'capitalize' }}>{data.cladding} glass</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Est. Asset Value</span>
                    <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>${data.estimatedCost}M USD</strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)' }}>
                  A Senior Development Director from our Dubai office will contact you within 2 hours to conduct an architectural viability call.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: '1.5rem', fontSize: '1rem', color: 'var(--text-light)' }}>
                  Thank you, representative. Your credentials have been verified for board review.
                </p>

                <div style={{ background: '#070A12', border: '1px solid var(--border-dark)', borderRadius: '4px', padding: '1.25rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Representative</span>
                    <strong style={{ color: 'white' }}>{data.name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Target Investment</span>
                    <strong style={{ color: 'var(--primary)' }}>
                      {data.bracket === '5-20' && '$5M - $20M USD'}
                      {data.bracket === '20-100' && '$20M - $100M USD'}
                      {data.bracket === '100+' && '$100M+ USD'}
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)' }}>Meeting Type</span>
                    <strong style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <CalendarCheck size={14} style={{ color: '#10B981' }} />
                      Executive Lounge
                    </strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)' }}>
                  A private meeting code has been dispatched to <strong>{data.email}</strong>. Our relations officer will call shortly.
                </p>
              </>
            )}
          </div>

          <button onClick={onClose} className="btn btn-primary btn-shimmer" style={{ width: '100%' }}>
            Acknowledge & Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
