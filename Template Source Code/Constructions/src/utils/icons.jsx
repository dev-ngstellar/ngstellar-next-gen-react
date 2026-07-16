import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

export const getIcon = (iconName, className = '') => {
  if (!iconName) return null;
  
  // Check MdIcons
  if (MdIcons[iconName]) {
    const IconComponent = MdIcons[iconName];
    return <IconComponent className={className} />;
  }
  
  // Check FaIcons
  if (FaIcons[iconName]) {
    const IconComponent = FaIcons[iconName];
    return <IconComponent className={className} />;
  }
  
  // Default fallback
  const Fallback = MdIcons.MdBuild;
  return <Fallback className={className} />;
};
