// High-quality, premium Unsplash images tailored for Construction & Infrastructure template
export const images = {
  hero: {
    construction01: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80', // Heavy excavators and cranes
    construction02: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80'  // Under construction steel framework
  },
  projects: {
    commercial01: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', // Modern glass office tower
    commercial02: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80', // Concrete commercial structure
    industrial01: 'https://images.unsplash.com/photo-1530606905103-66a2b6fdee3b?auto=format&fit=crop&w=800&q=80', // Distribution warehouse interior
    industrial02: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Manufacturing robotic line
    residential01: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80', // Modern apartment blocks
    infrastructure01: 'https://images.unsplash.com/photo-1513828722001-c22dbf882794?auto=format&fit=crop&w=800&q=80', // Huge transit bridge
    infrastructure02: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80'  // Public road/civil works
  },
  team: {
    member1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80', // CEO, Male
    member2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80', // COO, Female
    member3: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80', // VP Eng, Male
    member4: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80', // Eng, Male
    member5: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80', // Env Compliance, Female
    member6: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80', // PM, Male
    member7: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80'  // Safety, Female
  },
  blogs: {
    blog01: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80', // Smart city grid sensors
    blog02: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80', // Concrete pouring
    blog03: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'  // Architects examining blueprint
  },
  general: {
    aboutOverview: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80', // Modern engineering office
    careersCulture: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', // Diverse team collaborating
    safetyQualitySection: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80', // Construction worker with safety vest
    contactMap: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80' // Generic architectural blueprint map representation
  }
};

// Helper function to resolve image urls dynamically
export const getImg = (pathString) => {
  const parts = pathString.split('.');
  if (parts.length === 1) {
    // Check direct properties or return original string
    return images[parts[0]] || pathString;
  }
  let current = images;
  for (const part of parts) {
    if (current && current[part]) {
      current = current[part];
    } else {
      // Return a fallback Unsplash search query or the string itself
      return `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80`;
    }
  }
  return current;
};
