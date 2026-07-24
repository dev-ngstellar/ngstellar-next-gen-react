import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingEmergencyWidget } from './components/FloatingEmergencyWidget';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-primary)] text-[var(--text-body)]">
          <Header onOpenQuoteModal={setIsQuoteModalOpen} />
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenQuoteModal={setIsQuoteModalOpen} />} />
              <Route path="/services" element={<Services onOpenQuoteModal={setIsQuoteModalOpen} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact onOpenQuoteModal={setIsQuoteModalOpen} />} />
            </Routes>
          </div>

          <Footer />
          <FloatingEmergencyWidget onOpenQuoteModal={setIsQuoteModalOpen} />
          <QuoteCalculatorModal isOpen={isQuoteModalOpen} onClose={setIsQuoteModalOpen} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
