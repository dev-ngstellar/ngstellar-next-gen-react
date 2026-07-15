import React, { useState } from 'react';
import { PenTool, DollarSign, Clock, Layers, Award } from 'lucide-react';

export default function LandmarkConstructor({ onBookMeeting }) {
  const [floors, setFloors] = useState(80);
  const [diagridDensity, setDiagridDensity] = useState(3); // 1 to 5 scale
  const [cladding, setCladding] = useState('gold'); // gold, obsidian, crystal
  const [hasSpire, setHasSpire] = useState(true);

  // Dynamic calculations based on state
  const heightMeters = Math.round(floors * 4.3 + (hasSpire ? 65 : 0));
  const baseCostPerFloor = 6.2; // in Million USD
  const claddingMultiplier = cladding === 'obsidian' ? 1.15 : cladding === 'gold' ? 1.3 : 1.0;
  const structureMultiplier = 1 + (diagridDensity - 3) * 0.05;
  const estimatedCost = (floors * baseCostPerFloor * claddingMultiplier * structureMultiplier + (hasSpire ? 45 : 0)).toFixed(1);
  
  const estimatedMonths = Math.round(floors * 0.35 + (hasSpire ? 6 : 0));
  const totalUnits = floors * 12;

  // Render cladding colors
  const getCladdingClass = () => {
    switch (cladding) {
      case 'gold':
        return 'linear-gradient(45deg, rgba(245, 158, 11, 0.2), rgba(234, 88, 12, 0.45))';
      case 'obsidian':
        return 'linear-gradient(45deg, rgba(17, 24, 39, 0.6), rgba(31, 41, 55, 0.85))';
      case 'crystal':
        return 'linear-gradient(45deg, rgba(96, 165, 250, 0.2), rgba(191, 219, 254, 0.5))';
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  };

  const getCladdingBorder = () => {
    switch (cladding) {
      case 'gold':
        return '1px solid rgba(245, 158, 11, 0.5)';
      case 'obsidian':
        return '1px solid rgba(255, 255, 255, 0.15)';
      case 'crystal':
        return '1px solid rgba(96, 165, 250, 0.5)';
      default:
        return '1px dashed white';
    }
  };

  const handleBlueprintSubmit = () => {
    const blueprintDetails = {
      floors,
      heightMeters,
      estimatedCost,
      cladding,
      hasSpire
    };
    onBookMeeting(blueprintDetails);
  };

  return (
    <section id="simulator" className="section section-dark" style={{ borderTop: '1px solid var(--border-dark)', backgroundColor: '#070A12' }}>
      <div className="container">

        <div className="section-header">
          <span className="section-pretitle">Blueprint Simulator</span>
          <h2 className="section-title">Configure Your Landmark</h2>
          <p className="section-desc">
            Use our interactive simulator to construct custom residential, hotel, or commercial towers. Set parameters to evaluate scale, estimated investments, and architectural requirements.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Interactive Blueprint Viewer */}
          <div className="blueprint-grid-wrapper">
            
            {/* Height marker line */}
            <div style={{
              position: 'absolute',
              left: '2rem',
              bottom: '2rem',
              height: `${Math.min(floors * 2.2, 360)}px`,
              borderLeft: '1px dashed rgba(255, 255, 255, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingLeft: '0.5rem',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              color: 'var(--text-light-muted)'
            }}>
              <div>{heightMeters}m</div>
              <div>{Math.round(heightMeters / 2)}m</div>
              <div>Ground</div>
            </div>

            {/* Tower Frame */}
            <div 
              className="blueprint-tower"
              style={{
                height: `${Math.min(floors * 2.2, 360)}px`,
              }}
            >
              {/* Glass Cladding Overlay */}
              <div 
                className="glass-panel-cladding"
                style={{
                  height: '100%',
                  background: getCladdingClass(),
                  border: getCladdingBorder()
                }}
              />

              {/* Steel Diagrid Framework lines */}
              <div 
                className="structural-diagrid"
                style={{
                  backgroundSize: `${60 - diagridDensity * 7}px ${60 - diagridDensity * 7}px`
                }}
              />

              {/* Spire / Crown crown */}
              {hasSpire && (
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '50px',
                  backgroundColor: cladding === 'gold' ? 'var(--primary)' : cladding === 'crystal' ? '#60A5FA' : 'white',
                  boxShadow: cladding === 'gold' ? 'var(--gold-glow)' : 'none'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 10px var(--accent)'
                  }} />
                </div>
              )}

              {/* Self-Erecting Tower Crane Sim */}
              <div className="tower-crane-sim">
                <div className="crane-vertical" />
                <div className="crane-jib">
                  <div className="crane-trolley">
                    <div className="crane-hook-line" />
                  </div>
                </div>
              </div>

              {/* Dynamic Floor Labeling */}
              <div className="tower-floor-lines">
                {Array.from({ length: Math.min(Math.floor(floors / 10), 18) }).map((_, idx) => (
                  <div key={idx} className="tower-floor">
                    FL {idx * 10 || 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Height Indicator Text Card */}
            <div className="height-indicator">
              <span className="height-indicator-val">{heightMeters} M</span>
              <span className="height-indicator-label">Design Height</span>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="simulator-control-panel">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <PenTool size={20} className="logo-icon" />
              Structural Parameters
            </h3>

            {/* Floor Count Slider */}
            <div className="sim-slider-group">
              <div className="sim-slider-header">
                <span className="sim-slider-label">Elevated Floors</span>
                <span className="sim-slider-val">{floors} Storeys</span>
              </div>
              <input 
                type="range" 
                min="40" 
                max="160" 
                value={floors} 
                onChange={(e) => setFloors(parseInt(e.target.value))} 
                className="sim-range" 
              />
            </div>

            {/* Diagrid Density Slider */}
            <div className="sim-slider-group">
              <div className="sim-slider-header">
                <span className="sim-slider-label">Diagrid Lattice Density</span>
                <span className="sim-slider-val">Density: {diagridDensity}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                value={diagridDensity} 
                onChange={(e) => setDiagridDensity(parseInt(e.target.value))} 
                className="sim-range" 
              />
            </div>

            {/* Glass Cladding Style */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="sim-slider-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Glass Cladding System</span>
              <div className="sim-toggle-grid">
                <button 
                  className={`sim-toggle-btn ${cladding === 'gold' ? 'active' : ''}`}
                  onClick={() => setCladding('gold')}
                >
                  Amber Gold
                </button>
                <button 
                  className={`sim-toggle-btn ${cladding === 'crystal' ? 'active' : ''}`}
                  onClick={() => setCladding('crystal')}
                >
                  Chamber Crystal
                </button>
                <button 
                  className={`sim-toggle-btn ${cladding === 'obsidian' ? 'active' : ''}`}
                  onClick={() => setCladding('obsidian')}
                  style={{ gridColumn: 'span 2' }}
                >
                  Obsidian Reflective
                </button>
              </div>
            </div>

            {/* Has Spire Crown Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', background: '#0B0F19', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-dark)' }}>
              <div>
                <span className="sim-slider-label" style={{ display: 'block', fontSize: '0.8rem' }}>Spire Crown Apex</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)' }}>Adds +65m height & architectural spire</span>
              </div>
              <input 
                type="checkbox" 
                checked={hasSpire} 
                onChange={(e) => setHasSpire(e.target.checked)}
                style={{ width: '20px', height: '20px', accentColor: 'var(--primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Cost & Timeline Estimates */}
            <div className="sim-result-card">
              <div className="sim-result-row">
                <span className="sim-result-label">Total Floor Area</span>
                <span className="sim-result-val">{(floors * 1850).toLocaleString()} sq.m</span>
              </div>
              <div className="sim-result-row">
                <span className="sim-result-label">Target Residences</span>
                <span className="sim-result-val">{totalUnits} Units</span>
              </div>
              <div className="sim-result-row">
                <span className="sim-result-label">Execution Timeline</span>
                <span className="sim-result-val" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} style={{ color: 'var(--primary)' }} />
                  {estimatedMonths} Months
                </span>
              </div>
              <div className="sim-result-row" style={{ borderTop: '2px solid rgba(255,255,255,0.1)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <span className="sim-slider-label">EST. INVESTMENT VALUE</span>
                <span className="sim-result-val highlight" style={{ fontSize: '1.4rem' }}>
                  ${estimatedCost} Million USD
                </span>
              </div>
            </div>

            {/* VIP Submit Button */}
            <button 
              onClick={handleBlueprintSubmit} 
              className="btn btn-primary btn-shimmer" 
              style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
            >
              <Award size={18} />
              Submit Design to VIP Board
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
