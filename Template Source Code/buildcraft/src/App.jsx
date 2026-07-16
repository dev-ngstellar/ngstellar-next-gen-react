import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import CctvHub from './components/CctvHub';
import LandmarkConstructor from './components/LandmarkConstructor';
import AboutVision from './components/AboutVision';
import Services from './components/Services';
import Consultation from './components/Consultation';
import VipModal from './components/VipModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Premium Sticky Navigation */}
      <Header />

      {/* Cinematic Hero Section */}
      <Hero />

      {/* Animated Numerical Stats Ribbon */}
      <Stats />

      {/* Construction Projects Progress Showcase */}
      <Projects />

      {/* Live CCTV & Telemetry Feed Hub */}
      <CctvHub />

      {/* Landmark Simulator / Blueprint Builder */}
      <LandmarkConstructor onBookMeeting={handleOpenModal} />

      {/* Dubai-Inspired Construction manifesto */}
      <AboutVision />

      {/* Enterprise Divisions Grid */}
      <Services />

      {/* VIP Executive Consultation Form */}
      <Consultation onSubmitSuccess={handleOpenModal} />

      {/* Global Premium Footer */}
      <Footer />

      {/* Board Briefing / Blueprint submission success Overlay */}
      <VipModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        data={modalData} 
      />
    </div>
  );
}
