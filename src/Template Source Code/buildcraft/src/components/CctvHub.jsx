import React, { useState, useEffect } from 'react';
import { Radio, Eye, Wind, Thermometer, CloudRain, ShieldCheck } from 'lucide-react';

export default function CctvHub() {
  const [activeCam, setActiveCam] = useState(1);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());
  const [windSpeed, setWindSpeed] = useState(14.8);
  const [temp, setTemp] = useState(38);

  const cameras = [
    {
      id: 1,
      name: "CAM 01 - CORE TOWER",
      project: "The Aurelia Spire",
      image: "/creek_tower_construction.png",
      elev: "+540m Level",
      baseWind: 18.5,
      baseTemp: 32
    },
    {
      id: 2,
      name: "CAM 02 - CRANE JIB NORTH",
      project: "Marina Nexus Towers",
      image: "/dubai_skyscraper_hero.png",
      elev: "+610m Level",
      baseWind: 22.1,
      baseTemp: 31
    },
    {
      id: 3,
      name: "CAM 03 - STEEL ASSEMBLY",
      project: "Elysium Giga-Hub",
      image: "/engineers_construction_site.png",
      elev: "+120m Level",
      baseWind: 12.3,
      baseTemp: 34
    }
  ];

  // Update CCTV live timestamp
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate changing wind speeds and temperatures at height
  useEffect(() => {
    const telemetryTimer = setInterval(() => {
      const currentBaseWind = cameras[activeCam - 1].baseWind;
      const currentBaseTemp = cameras[activeCam - 1].baseTemp;
      // fluctuate wind speed slightly
      setWindSpeed((currentBaseWind + (Math.random() * 2 - 1)).toFixed(1));
      setTemp((currentBaseTemp + (Math.random() * 0.6 - 0.3)).toFixed(1));
    }, 1500);

    return () => clearInterval(telemetryTimer);
  }, [activeCam]);

  const currentCam = cameras.find(c => c.id === activeCam);

  return (
    <section id="live-hub" className="section" style={{ backgroundColor: '#0B0F19', color: 'white' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-pretitle">Command & Control</span>
          <h2 className="section-title">Active Construction Hub</h2>
          <p className="section-desc">
            Access our live-encrypted telemetry and site feeds. Real-time conditions are monitored 24/7 by our central engineering node to ensure perfect execution, safety compliance, and scheduling synchronization.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Feed Controls and Telemetry */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Radio className="logo-icon" size={20} />
              Telemetry Feed Select
            </h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Select an active camera node to view high-definition construction feeds, elevation metrics, and structural micro-climates.
            </p>

            <div className="cctv-controls">
              {cameras.map((cam) => (
                <button
                  key={cam.id}
                  className={`cctv-btn ${activeCam === cam.id ? 'active' : ''}`}
                  onClick={() => setActiveCam(cam.id)}
                >
                  <Eye size={16} />
                  CAM 0{cam.id}
                </button>
              ))}
            </div>

            {/* Live Telemetry Display */}
            <div className="weather-telemetry-grid">
              <div className="telemetry-card">
                <div className="telemetry-icon">
                  <Wind size={24} />
                </div>
                <div>
                  <div className="telemetry-val">{windSpeed} km/h</div>
                  <div className="telemetry-label">Wind Velocity</div>
                </div>
              </div>

              <div className="telemetry-card">
                <div className="telemetry-icon">
                  <Thermometer size={24} />
                </div>
                <div>
                  <div className="telemetry-val">{temp}°C</div>
                  <div className="telemetry-label">Ambient Air Temp</div>
                </div>
              </div>

              <div className="telemetry-card">
                <div className="telemetry-icon">
                  <CloudRain size={24} />
                </div>
                <div>
                  <div className="telemetry-val">Low Risk</div>
                  <div className="telemetry-label">Precipitation</div>
                </div>
              </div>

              <div className="telemetry-card">
                <div className="telemetry-icon" style={{ color: '#10B981' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="telemetry-val">Secured</div>
                  <div className="telemetry-label">Site Clear Status</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }} />
              <div style={{ fontSize: '0.8rem', color: '#A7F3D0', fontFamily: 'monospace' }}>
                LIVE FEED SECURE // ENCRYPTION AES-256 GCM
              </div>
            </div>
          </div>

          {/* CCTV Feed Screen Monitor */}
          <div className="cctv-monitor-wrapper">
            <div className="cctv-screen">
              {/* Scanline & static effects */}
              <div className="cctv-scanline" />
              <div className="cctv-static" />
              
              {/* CCTV Feed Image */}
              <img 
                src={currentCam.image} 
                alt={currentCam.name} 
                className="cctv-feed-image"
              />

              {/* CCTV UI Text Overlay */}
              <div className="cctv-ui-overlay">
                <div className="cctv-ui-top">
                  <div>
                    <div>{currentCam.name}</div>
                    <div>PROJECT: {currentCam.project.toUpperCase()}</div>
                    <div>ELEVATION: {currentCam.elev}</div>
                  </div>
                  <div className="cctv-rec">
                    <div className="cctv-dot" />
                    <span>REC</span>
                  </div>
                </div>

                <div className="cctv-ui-bottom">
                  <div>FPS: 29.97</div>
                  <div>{timestamp}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
