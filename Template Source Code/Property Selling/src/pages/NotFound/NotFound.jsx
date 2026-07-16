import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md space-y-6"
      >
        <h1 className="text-8xl font-black text-theme-primary">404</h1>
        <h2 className="text-3xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-slate-500">
          The property, agent dossier, or project you are looking for has been relocated or does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-theme-primary hover:opacity-90 transition-opacity font-semibold"
        >
          <FiHome />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
