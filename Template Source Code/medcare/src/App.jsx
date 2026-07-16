import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-slate-800">
        
        {/* Header Navigation with Emergency bar */}
        <Navbar />

        {/* Main Content Body */}
        <main className="flex-grow pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer info panels */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
