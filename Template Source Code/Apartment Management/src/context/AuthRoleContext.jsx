import React, { createContext, useContext, useState } from 'react';

const AuthRoleContext = createContext();

export const ROLES = {
  SUPER_ADMIN: {
    id: 'super_admin',
    name: 'Super Admin',
    badge: 'Owner / Management Board',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    description: 'Full access to all society features, financials, settings, and permissions matrix.'
  },
  MANAGER: {
    id: 'manager',
    name: 'Property Manager',
    badge: 'Society Operations',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    description: 'Full operational control except global society system settings and role modifications.'
  },
  RESIDENT: {
    id: 'resident',
    name: 'Resident Portal',
    badge: 'Tower B - Flat 402',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    description: 'Personal maintenance bills, gate approvals, complaint filing, parcel tracking, and amenity bookings.'
  },
  SECURITY: {
    id: 'security',
    name: 'Security Gate Guard',
    badge: 'Main Gate Console',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    description: 'Streamlined interface for visitor check-in, QR scanning, delivery logging, and emergency SOS.'
  }
};

export const AuthRoleProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState(ROLES.SUPER_ADMIN);

  const switchRole = (roleKey) => {
    if (ROLES[roleKey]) {
      setCurrentRole(ROLES[roleKey]);
    } else {
      const found = Object.values(ROLES).find(r => r.id === roleKey);
      if (found) setCurrentRole(found);
    }
  };

  return (
    <AuthRoleContext.Provider value={{ currentRole, switchRole, ROLES }}>
      {children}
    </AuthRoleContext.Provider>
  );
};

export const useAuthRole = () => useContext(AuthRoleContext);
