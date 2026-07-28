import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { ConsultationModal } from './components/ConsultationModal';

import { Home } from './pages/Home';
import { PracticeAreas } from './pages/PracticeAreas';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Insights } from './pages/Insights';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] origin-left z-[100] shadow-[0_0_10px_#D4A34B]"
    />
  );
};

export const AppContent: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-body)] font-sans antialiased selection:bg-[#D4A34B]/30 selection:text-[#D4A34B]">
      <ScrollProgress />
      <ScrollToTop />
      
      {/* Sticky Header Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/practice-areas" element={<PracticeAreas onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidget onOpenConsultation={handleOpenConsultation} />

      {/* Book Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={handleCloseConsultation} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
