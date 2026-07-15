import { useContext } from 'react';
import { SpecialtyContext } from '../context/SpecialtyContext';

export const useSpecialty = () => {
  const context = useContext(SpecialtyContext);
  if (!context) {
    throw new Error('useSpecialty must be used within a SpecialtyProvider');
  }
  return context;
};
