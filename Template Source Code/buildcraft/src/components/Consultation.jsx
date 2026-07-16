import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckSquare } from 'lucide-react';

export default function Consultation({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'aurelia',
    bracket: '20-100',
    message: '',
    agree: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in the required fields.");
      return;
    }
    onSubmitSuccess(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: 'aurelia',
      bracket: '20-100',
      message: '',
      agree: true
    });
  };

  return (
    <section id="contact" className="section section-dark" style={{ backgroundColor: '#070A12', borderTop: '1px solid var(--border-dark)' }}>
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Contact Information & HQ */}
          <div>
            <span className="section-pretitle">Briefings & Inquiries</span>
            <h2 className="section-title">Schedule Consultation</h2>
            <p className="section-desc" style={{ color: 'var(--text-light-muted)' }}>
              Explore co-investment opportunities, joint development alliances, or acquire private penthouse suites in our active projects. Reach out to our executive board directly.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Investor Hotline</h4>
                  <p>+971 4 458 9000</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Executive Board Office</h4>
                  <p>board@buildcraft.ae</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-info-text">
                  <h4>Global Headquarters</h4>
                  <p>BuildCraft Tower, Levels 80-84, Sheikh Zayed Road, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="simulator-control-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="investor-name">Full Name / Entity *</label>
                <input 
                  type="text" 
                  id="investor-name"
                  className="form-input" 
                  placeholder="e.g. Al-Maktoum Holdings / John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="investor-email">Corporate Email Address *</label>
                <input 
                  type="email" 
                  id="investor-email"
                  className="form-input" 
                  placeholder="investor@entity.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="target-asset">Target Development</label>
                  <select 
                    id="target-asset"
                    className="form-input"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  >
                    <option value="aurelia">The Aurelia Spire</option>
                    <option value="nexus">Marina Nexus Towers</option>
                    <option value="elysium">Elysium Giga-Hub</option>
                    <option value="custom">Custom Simulated Blueprint</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="capital-allocation">Capital Allocation (USD)</label>
                  <select 
                    id="capital-allocation"
                    className="form-input"
                    value={formData.bracket}
                    onChange={(e) => setFormData({ ...formData, bracket: e.target.value })}
                  >
                    <option value="5-20">$5M - $20 Million</option>
                    <option value="20-100">$20M - $100 Million</option>
                    <option value="100+">$100 Million +</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="investor-message">Outline Agenda / Inquiry Specifications</label>
                <textarea 
                  id="investor-message"
                  className="form-input" 
                  placeholder="Describe your asset acquisition requirements, joint-venture conditions, or custom build specifications..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="form-checkbox-group">
                <input 
                  type="checkbox" 
                  id="agree-compliance" 
                  className="form-checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  required
                />
                <label className="form-checkbox-label" htmlFor="agree-compliance">
                  I certify that these details represent a qualified request for information. I consent to NDA terms under Dubai DIAC guidelines. Read our <a href="#">Investment Charter</a>.
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-shimmer" 
                style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
              >
                <Calendar size={18} />
                Schedule Private Briefing
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
