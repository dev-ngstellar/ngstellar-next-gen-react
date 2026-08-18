export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'pinterest' | 'whatsapp';
}

export const siteConfig = {
  brand: {
    name: "Melissa Harper",
    tagline: "Luxury Wedding Planner",
    logo: "/assets/logo.svg",
    favicon: "/assets/logo.svg",
    footerImage: "/assets/services/wedding-decor.jpg",
    description: "Crafting unforgettable, luxury wedding experiences with extraordinary attention to detail, breathtaking design, and effortless coordination.",
  },

  colors: {
    primary: "#8B5E5E",
    secondary: "#F5EDE8",
    accent: "#C8A96B",
    background: "#FFFDF9",
    surface: "#FFFFFF",
    text: "#2E2927",
    mutedText: "#756C68",
  },

  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },

  contact: {
    phone: "+91 9876543210",
    whatsappNumber: "919876543210",
    email: "hello@yourweddingplanner.com",
    address: "Coimbatore, Tamil Nadu",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  },

  socialLinks: [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "instagram",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "facebook",
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com",
      icon: "pinterest",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/919876543210",
      icon: "whatsapp",
    },
  ] as SocialLink[],
};

/**
 * Utility to inject configured colors and fonts into CSS custom variables.
 * Updating siteConfig instantly rebrands the entire application.
 */
export const injectThemeVariables = () => {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', siteConfig.colors.primary);
  root.style.setProperty('--color-secondary', siteConfig.colors.secondary);
  root.style.setProperty('--color-accent', siteConfig.colors.accent);
  root.style.setProperty('--color-background', siteConfig.colors.background);
  root.style.setProperty('--color-surface', siteConfig.colors.surface);
  root.style.setProperty('--color-text', siteConfig.colors.text);
  root.style.setProperty('--color-muted', siteConfig.colors.mutedText);
  root.style.setProperty('--font-family', siteConfig.typography.fontFamily);
};
