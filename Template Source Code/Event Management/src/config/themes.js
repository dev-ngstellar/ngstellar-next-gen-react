// ============================================================
// GLOBAL THEME CONFIGURATIONS
// 6 Preset Themes for Event Management Template Ecosystem
// ============================================================

export const themes = {
  luxuryGold: {
    id: 'luxuryGold',
    name: 'Luxury Gold',
    primary: '#D4AF37',
    secondary: '#111827',
    accent: '#F5D76E',
    fontHeading: "'Playfair Display', serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: '0.75rem',
    btnStyle: 'rounded',
    cardStyle: 'elevated',
    description: 'Premium gold luxury theme for weddings and high-end events',
    preview: 'from-yellow-600 to-yellow-400',
  },
  corporateBlue: {
    id: 'corporateBlue',
    name: 'Corporate Blue',
    primary: '#2563EB',
    secondary: '#0F172A',
    accent: '#38BDF8',
    fontHeading: "'Montserrat', sans-serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: '0.5rem',
    btnStyle: 'sharp',
    cardStyle: 'bordered',
    description: 'Professional blue theme for corporate events and conferences',
    preview: 'from-blue-600 to-sky-400',
  },
  festivalNeon: {
    id: 'festivalNeon',
    name: 'Festival Neon',
    primary: '#8B5CF6',
    secondary: '#0F172A',
    accent: '#EC4899',
    fontHeading: "'Raleway', sans-serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: '1rem',
    btnStyle: 'pill',
    cardStyle: 'glow',
    description: 'Energetic neon theme for concerts, music festivals and DJ events',
    preview: 'from-violet-600 to-pink-500',
  },
  elegantRose: {
    id: 'elegantRose',
    name: 'Elegant Rose',
    primary: '#D946EF',
    secondary: '#FDF2F8',
    accent: '#FB7185',
    fontHeading: "'Playfair Display', serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: '0.875rem',
    btnStyle: 'rounded',
    cardStyle: 'soft',
    description: 'Elegant rose theme for birthday parties and private celebrations',
    preview: 'from-fuchsia-500 to-rose-400',
  },
  modernGreen: {
    id: 'modernGreen',
    name: 'Modern Green',
    primary: '#15803D',
    secondary: '#1E293B',
    accent: '#84CC16',
    fontHeading: "'Montserrat', sans-serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: '0.625rem',
    btnStyle: 'rounded',
    cardStyle: 'elevated',
    description: 'Fresh modern green for sports events and community gatherings',
    preview: 'from-green-700 to-lime-500',
  },
  luxuryBlack: {
    id: 'luxuryBlack',
    name: 'Luxury Black',
    primary: '#D4AF37',
    secondary: '#000000',
    accent: '#D4AF37',
    fontHeading: "'Cinzel', serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: '0.25rem',
    btnStyle: 'sharp',
    cardStyle: 'dark',
    description: 'Ultra-luxury black and gold for award functions and galas',
    preview: 'from-gray-900 to-yellow-600',
  },
};

export const defaultTheme = themes.luxuryGold;

export const fontOptions = [
  { id: 'playfair', name: 'Playfair Display', value: "'Playfair Display', serif" },
  { id: 'montserrat', name: 'Montserrat', value: "'Montserrat', sans-serif" },
  { id: 'inter', name: 'Inter', value: "'Inter', sans-serif" },
  { id: 'raleway', name: 'Raleway', value: "'Raleway', sans-serif" },
  { id: 'cinzel', name: 'Cinzel', value: "'Cinzel', serif" },
];

export const borderRadiusOptions = [
  { id: 'sharp', name: 'Sharp', value: '0.25rem' },
  { id: 'subtle', name: 'Subtle', value: '0.5rem' },
  { id: 'rounded', name: 'Rounded', value: '0.75rem' },
  { id: 'soft', name: 'Soft', value: '1rem' },
  { id: 'pill', name: 'Pill', value: '2rem' },
];
