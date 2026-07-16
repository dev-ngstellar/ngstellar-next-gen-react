import React from 'react';
import { ShieldAlert, Compass, Eye, ShieldCheck, ChevronRight } from 'lucide-react';

export default function AboutVision() {
  return (
    <section id="vision" className="section" style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>
      <div className="container">
        
        <div className="vision-grid">
          
          {/* Vision Description Text */}
          <div>
            <span className="section-pretitle" style={{ color: 'var(--accent)' }}>OUR MANIFESTO</span>
            <h2 className="section-title" style={{ color: '#111827' }}>Changing Global Horizons</h2>
            <p className="section-desc" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              At BuildCraft, we do not build typical residential projects. We engineer vertical cities and design tomorrow's monuments. Inspired by the vertical scale of the Burj Khalifa and the luxury benchmarks of Dubai developers like Emaar and Damac, we push concrete, steel, and architectural creativity past standard limits.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#111827' }}>
                    Diagrid & Frame Redundancy
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Engineered to withstand high-velocity upper-atmosphere shear winds and high seismic thresholds.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#111827' }}>
                    Ultra-High Strength Concrete Cores
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Utilizing up to 120 MPa self-consolidating concrete formulas for columns and shear walls supporting heights over 500 meters.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', marginTop: '0.25rem' }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#111827' }}>
                    Double-Glazed Curtain Walls
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Low-E high-performance thermal insulation glass systems that repel hot desert climates while providing panoramic views.
                  </p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-accent btn-shimmer" style={{ marginTop: '3rem' }}>
              Our Credentials Brochure
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Vision Image Panel */}
          <div className="vision-image-container">
            <img 
              src="/engineers_construction_site.png" 
              alt="BuildCraft engineers reviewing plans on a high elevation steel structure" 
              className="vision-image"
            />
            
            <div className="glass-panel vision-card">
              <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Compass size={18} style={{ color: 'var(--primary)' }} />
                Premium Dubai Quality standards
              </h4>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>
                Every build conforms to Dubai Municipality high-rise code and international ASTM engineering guidelines. Underwritten by global insurance institutions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
