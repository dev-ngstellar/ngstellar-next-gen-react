import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ChefSpecials from './pages/ChefSpecials';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FFFDF8] text-[#0F172A]">
        {/* Navigation Header */}
        <Header />
        
        {/* Main Content Viewports */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chef-specials" element={<ChefSpecials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
