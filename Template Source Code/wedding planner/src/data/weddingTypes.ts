import { assets } from '../config/assets';

export interface WeddingTypeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export const weddingTypesData: WeddingTypeItem[] = [
  {
    id: "luxury",
    title: "Luxury Weddings",
    subtitle: "Opulent & High-Fashion Celebrations",
    description: "Extravagant grand ballroom and palace weddings featuring bespoke floral installations, Michelin-grade dining, and high-fashion aesthetics.",
    image: assets.services.decor,
    tag: "Royal & Grand"
  },
  {
    id: "destination",
    title: "Destination Weddings",
    subtitle: "Exotic Escapes & Scenic Vows",
    description: "Exchange vows overlooking sun-kissed beaches, serene Kerala backwaters, or historic Rajasthani forts with curated guest hospitality.",
    image: assets.services.destination,
    tag: "Travel & Romance"
  },
  {
    id: "intimate",
    title: "Intimate Weddings",
    subtitle: "Warm, Soulful & Private Soirées",
    description: "Thoughtfully crafted micro-weddings focused on deep connection, personalized detail, cozy candlelit tables, and heartfelt moments.",
    image: assets.services.venue,
    tag: "Charming & Personal"
  },
  {
    id: "traditional",
    title: "Traditional Weddings",
    subtitle: "Cultural Heritage & Sacred Rituals",
    description: "Honoring age-old customs with grand temple mandaps, traditional brass elements, vibrant marigolds, and sacred Vedic ceremonies.",
    image: assets.services.planning,
    tag: "Heritage & Custom"
  }
];
