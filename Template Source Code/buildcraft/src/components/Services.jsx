import React from 'react';
import { Layers, HardHat, Compass, Briefcase, Landmark, ShieldCheck } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      id: 1,
      icon: <Layers size={28} />,
      title: "Mega-Tall Engineering",
      desc: "Architectural design, core framework engineering, and construction planning for luxury skyscrapers exceeding 500 meters in height."
    },
    {
      id: 2,
      icon: <HardHat size={28} />,
      title: "Structural Frameworks",
      desc: "Advanced diagrid steel lattices, reinforced concrete cores, and foundation assemblies designed for seismic load mitigation."
    },
    {
      id: 3,
      icon: <Compass size={28} />,
      title: "Infrastructure & Logistics",
      desc: "Massive scale transport junctions, high-capacity bridges, maritime harbor works, and smart-city structural foundations."
    },
    {
      id: 4,
      icon: <Briefcase size={28} />,
      title: "VIP JV Developments",
      desc: "Complete real estate joint-venture structures, land acquisition guidance, master plan zoning, and investment portfolio coordination."
    }
  ];

  return (
    <section id="services" className="section section-dark" style={{ borderTop: '1px solid var(--border-dark)', backgroundColor: '#0B0F19' }}>
      <div className="container">

        <div className="section-header" style={{ margin: '0 auto 5rem', textAlign: 'center' }}>
          <span className="section-pretitle">Enterprise Divisions</span>
          <h2 className="section-title">Industrial Capabilities</h2>
          <p className="section-desc" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Through our specialized global business units, we deliver comprehensive development, execution, and risk mitigation across multi-billion dollar real estate assets.
          </p>
        </div>

        <div className="services-grid">
          {serviceList.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
