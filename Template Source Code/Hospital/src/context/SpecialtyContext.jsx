import React, { createContext, useState, useEffect } from 'react';
import { specialtiesConfig } from '../data/specialtiesConfig';

export const SpecialtyContext = createContext();

export const SpecialtyProvider = ({ children }) => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState('multispeciality');

  const [customColors, setCustomColors] = useState({
    primary: '',
    secondary: '',
    accent: ''
  });

  const activeConfig = specialtiesConfig[activeSpecialtyId] || specialtiesConfig.multispeciality;

  useEffect(() => {
    // Dynamic brand color injection via custom CSS variables on document.documentElement
    const root = document.documentElement;
    
    // Fall back to active config colors if no custom colors are selected
    const pColor = customColors.primary || activeConfig.colors.primary;
    const sColor = customColors.secondary || activeConfig.colors.secondary;
    const aColor = customColors.accent || activeConfig.colors.accent;

    root.style.setProperty('--color-primary', pColor);
    root.style.setProperty('--color-primary-light', pColor + 'cc'); // Adding slight opacity for light version
    root.style.setProperty('--color-primary-dark', pColor + 'e6'); // Adding slight opacity for dark version
    
    root.style.setProperty('--color-secondary', sColor);
    root.style.setProperty('--color-secondary-light', sColor + 'cc');
    root.style.setProperty('--color-secondary-dark', sColor + 'e6');
    
    root.style.setProperty('--color-accent', aColor);
    root.style.setProperty('--color-accent-light', aColor + 'cc');
    root.style.setProperty('--color-accent-dark', aColor + 'e6');

    root.style.setProperty('--color-light', activeConfig.colors.light);
    root.style.setProperty('--color-dark', activeConfig.colors.dark);
  }, [activeSpecialtyId, activeConfig, customColors]);

  return (
    <SpecialtyContext.Provider value={{ 
      activeSpecialtyId, 
      setActiveSpecialtyId, 
      activeConfig, 
      specialtiesConfig,
      customColors,
      setCustomColors
    }}>
      {children}
    </SpecialtyContext.Provider>
  );
};
