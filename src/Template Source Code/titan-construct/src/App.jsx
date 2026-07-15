import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MegaProjects from './components/MegaProjects';
import Timeline from './components/Timeline';
import LiveHub from './components/LiveHub';
import Technology from './components/Technology';
import InvestorSection from './components/InvestorSection';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        <MegaProjects />
        <Timeline />
        <LiveHub />
        <Technology />
        <InvestorSection />
        <Consultation />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
