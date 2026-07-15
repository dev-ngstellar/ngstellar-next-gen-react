import React, { createContext, useContext, useEffect, useState } from 'react';
import { getProfessionById, professions } from '../data/professions';
import { industryThemes } from '../data/industryThemes';

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  // Active industry theme slug
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState(() => {
    return localStorage.getItem('portfolio-industry-slug') || 'technology';
  });

  // Active role ID within the industry
  const [selectedProfessionId, setSelectedProfessionId] = useState(() => {
    return localStorage.getItem('portfolio-profession') || 'software-developer';
  });

  // Custom overrides
  const [profileOverrides, setProfileOverrides] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('portfolio-overrides')) || {};
    } catch {
      return {};
    }
  });

  const selectedIndustry = industryThemes.find(t => t.slug === selectedIndustrySlug) || industryThemes[0];
  const selectedProfession = getProfessionById(selectedProfessionId) || professions.find(p => p.id === 'software-developer') || professions[0];
  
  // Layout is determined by the industry theme
  const selectedLayout = selectedIndustry.layout;

  useEffect(() => {
    localStorage.setItem('portfolio-industry-slug', selectedIndustrySlug);
    localStorage.setItem('portfolio-profession', selectedProfessionId);
    localStorage.setItem('portfolio-overrides', JSON.stringify(profileOverrides));
  }, [selectedIndustrySlug, selectedProfessionId, profileOverrides]);

  const switchIndustry = (slug) => {
    const industry = industryThemes.find(t => t.slug === slug);
    if (industry) {
      setSelectedIndustrySlug(slug);
      // Automatically select the first supported role of this industry
      const firstRoleName = industry.supportedRoles[0];
      const normRoleName = firstRoleName.toLowerCase().replace(/\s+/g, '-');
      const resolvedRole = getProfessionById(normRoleName) || getProfessionById(firstRoleName) || professions.find(p => p.category === slug) || professions[0];
      
      setSelectedProfessionId(resolvedRole.id);
      setProfileOverrides({}); // reset overrides
    }
  };

  const switchProfession = (id) => {
    if (getProfessionById(id)) {
      setSelectedProfessionId(id);
      setProfileOverrides({}); // reset overrides on profession change
    }
  };

  const updateProfile = (updates) => {
    setProfileOverrides(prev => ({ ...prev, ...updates }));
  };

  const activeProfileData = {
    ...selectedProfession.data,
    ...profileOverrides
  };

  return (
    <PortfolioContext.Provider value={{
      selectedIndustry,
      selectedIndustrySlug,
      selectedProfession,
      selectedProfessionId,
      selectedLayout,
      switchIndustry,
      switchProfession,
      activeProfileData,
      updateProfile,
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error('usePortfolio must be used within PortfolioProvider');
  return ctx;
};
