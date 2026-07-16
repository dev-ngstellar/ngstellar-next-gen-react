import React, { useState } from 'react';
import { useSpecialty } from '../../hooks/useSpecialty';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSlidersH, FaTimes, FaCheck } from 'react-icons/fa';

const SpecialtySwitcher = () => {
  const { 
    activeSpecialtyId, 
    setActiveSpecialtyId, 
    specialtiesConfig,
    activeConfig,
    customColors,
    setCustomColors
  } = useSpecialty();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const items = Object.values(specialtiesConfig);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={toggleOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-light active:scale-95 cursor-pointer"
        style={{ boxShadow: '0 10px 25px -5px var(--color-primary)' }}
        title="Switch Clinic Demo"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes size={20} /> : <FaSlidersH size={20} />}
        </motion.div>
      </motion.button>

      {/* Slide-out Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 350, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 350, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-40 w-[320px] max-w-full bg-white shadow-2xl border-l border-gray-100 flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="font-bold text-lg text-dark">Live Demo Customizer</h3>
                <p className="text-xs text-gray-400">Switch clinic layouts & styles instantly</p>
              </div>
              <button 
                onClick={toggleOpen} 
                className="text-gray-400 hover:text-dark transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {items.map((item) => {
                const isActive = item.id === activeSpecialtyId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSpecialtyId(item.id);
                      // Auto-close on mobile view
                      if (window.innerWidth < 768) {
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer group ${
                      isActive 
                        ? 'border-primary bg-primary/5 shadow-md shadow-primary/5' 
                        : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-primary' : 'text-gray-700'}`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-gray-400 line-clamp-1">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Brand Color Dot */}
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: item.colors.primary }}
                      />
                      {isActive && <FaCheck className="text-primary text-xs" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Global Color Customizer Theme Pickers */}
            <div className="pt-6 border-t border-gray-100 mt-6 bg-gray-50/50 p-4 rounded-xl">
              <span className="font-bold text-xs text-dark uppercase tracking-wider block mb-3">Global Color Customizer</span>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Primary</span>
                  <input 
                    type="color" 
                    value={customColors.primary || activeConfig.colors.primary}
                    onChange={(e) => setCustomColors({ ...customColors, primary: e.target.value })}
                    className="w-10 h-10 rounded-lg cursor-pointer border border-gray-200 p-0 overflow-hidden bg-transparent"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Secondary</span>
                  <input 
                    type="color" 
                    value={customColors.secondary || activeConfig.colors.secondary}
                    onChange={(e) => setCustomColors({ ...customColors, secondary: e.target.value })}
                    className="w-10 h-10 rounded-lg cursor-pointer border border-gray-200 p-0 overflow-hidden bg-transparent"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Accent</span>
                  <input 
                    type="color" 
                    value={customColors.accent || activeConfig.colors.accent}
                    onChange={(e) => setCustomColors({ ...customColors, accent: e.target.value })}
                    className="w-10 h-10 rounded-lg cursor-pointer border border-gray-200 p-0 overflow-hidden bg-transparent"
                  />
                </div>
              </div>
              
              {(customColors.primary || customColors.secondary || customColors.accent) && (
                <button
                  onClick={() => setCustomColors({ primary: '', secondary: '', accent: '' })}
                  className="mt-4 w-full text-center text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors uppercase tracking-wider cursor-pointer"
                >
                  Reset to Theme Default
                </button>
              )}
            </div>

            <div className="pt-6 border-t border-gray-100 mt-6 bg-gray-50 p-4 rounded-xl">
              <span className="font-bold text-xs text-dark uppercase tracking-wider block mb-2">Commercial Template Features</span>
              <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4">
                <li>Changes entire site layout structure</li>
                <li>Updates clinical content, services, doctors</li>
                <li>Dynamic CSS brand colors & accents</li>
                <li>Ready-to-use booking triggers</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpecialtySwitcher;
