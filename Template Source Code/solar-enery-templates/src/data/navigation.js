export const navigationData = {
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Projects", path: "/projects" },
    { label: "Contact Us", path: "/contact" },
  ],

  ctaButton: {
    label: "Get a Free Quote",
    path: "/contact",
  },

  footerLinks: {
    quickLinks: [
      { label: "About Us", path: "/about" },
      { label: "Our Services", path: "/services" },
      { label: "Case Studies & Projects", path: "/projects" },
      { label: "Contact Us", path: "/contact" },
    ],
    services: [
      { label: "Residential Solar", path: "/services#residential", id: "residential" },
      { label: "Commercial Solar", path: "/services#commercial", id: "commercial" },
      { label: "Industrial Energy", path: "/services#industrial", id: "industrial" },
      { label: "Battery Energy Storage", path: "/services#battery", id: "battery" },
      { label: "Maintenance & Repair", path: "/services#maintenance", id: "maintenance" },
      { label: "EV Charging Infrastructure", path: "/services#ev-charging", id: "ev-charging" },
    ]
  }
};
