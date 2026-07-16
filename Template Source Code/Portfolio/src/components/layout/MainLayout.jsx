import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { pageTransition } from '../../animations/variants';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ flex: 1 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
