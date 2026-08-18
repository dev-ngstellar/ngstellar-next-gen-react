/**
 * Centralized Service to Form Field Mapping.
 * Maps website service titles to one or more form checkboxes in "Services Required".
 */
export const serviceToFormMap: Record<string, string | string[]> = {
  "Full Wedding Planning": "Full Wedding Package",
  "Wedding Décor & Styling": "Wedding Décor",
  "Destination Weddings": "Destination Wedding",
  "Venue & Vendor Management": "Venue Management",
  "Wedding Day Coordination": "Wedding Planning",
  "Photography & Entertainment": ["Photography", "Entertainment"],
};

/**
 * Returns array of form checkbox options corresponding to a website service title.
 */
export const getFormServicesFromUrlParam = (serviceParam: string | null): string[] => {
  if (!serviceParam) return [];
  const decoded = decodeURIComponent(serviceParam).trim();
  const mapped = serviceToFormMap[decoded];
  if (!mapped) return [];
  return Array.isArray(mapped) ? mapped : [mapped];
};
