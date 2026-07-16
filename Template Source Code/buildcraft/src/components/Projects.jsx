import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Calendar, ArrowUpRight, Shield } from 'lucide-react';

export default function Projects() {
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: "The Aurelia Spire",
      location: "Dubai Creek District",
      status: "Core Framework Phase",
      progress: 64,
      timeline: "Q4 2028",
      height: "780 m",
      units: "1,120 Residences",
      image: "/creek_tower_construction.png"
    },
    {
      id: 2,
      title: "Marina Nexus Towers",
      location: "Dubai Marina Harbour",
      status: "Diagrid Steel Assembly",
      progress: 42,
      timeline: "Q2 2029",
      height: "620 m",
      units: "840 Penthouses",
      image: "/dubai_skyscraper_hero.png"
    },
    {
      id: 3,
      title: "Elysium Infrastructure Hub",
      location: "Downtown Boulevard",
      status: "Foundation & Substructure",
      progress: 28,
      timeline: "Q1 2030",
      height: "340 m",
      units: "450 Luxury Suites",
      image: "/engineers_construction_site.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section section-dark" ref={sectionRef}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-pretitle">Active Portfolio</span>
          <h2 className="section-title">Landmarks in the Making</h2>
          <p className="section-desc">
            Explore our massive architectural developments currently reshaping global skylines. Every project represents concrete innovation, engineering precision, and architectural mastery.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <span className="project-badge">
                  <Shield size={12} style={{ marginRight: '0.4rem', verticalAlign: 'middle', display: 'inline' }} />
                  {project.status}
                </span>
                <img 
                  src={project.image} 
                  alt={`${project.title} construction progress`} 
                  className="project-image"
                />
                <div className="project-overlay-gradient"></div>
              </div>

              <div className="project-info">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-location">
                    <MapPin size={14} style={{ color: 'var(--primary)' }} />
                    {project.location}
                  </div>
                </div>

                <div>
                  <div className="project-specs">
                    <div className="spec-item">
                      <span className="spec-label">Height Limit</span>
                      <span className="spec-val">{project.height}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Total Units</span>
                      <span className="spec-val">{project.units}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Timeline</span>
                      <span className="spec-val">{project.timeline}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Safety Rating</span>
                      <span className="spec-val" style={{ color: '#10B981' }}>Class A</span>
                    </div>
                  </div>

                  <div className="project-progress-container">
                    <div className="progress-header">
                      <span className="progress-label">CONSTRUCTION PROGRESS</span>
                      <span className="progress-pct">{project.progress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: animateProgress ? `${project.progress}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
