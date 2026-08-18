import { assets } from '../config/assets';

export interface WeddingExperienceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
}

export const weddingExperiencesData: WeddingExperienceItem[] = [
  {
    id: "luxury",
    title: "Luxury Weddings",
    tag: "Elegant & Sophisticated",
    description: "Elegant celebrations with sophisticated styling and unforgettable details.",
    image: assets.services.decor,
  },
  {
    id: "destination",
    title: "Destination Weddings",
    tag: "Scenic & Seamless",
    description: "Beautiful celebrations planned in remarkable locations with seamless coordination.",
    image: assets.services.destination,
  },
  {
    id: "intimate",
    title: "Intimate Weddings",
    tag: "Warm & Personal",
    description: "Warm, personal celebrations designed for the people who matter most.",
    image: assets.services.venue,
  },
  {
    id: "traditional",
    title: "Traditional Weddings",
    tag: "Timeless & Custom",
    description: "Timeless ceremonies that beautifully honor traditions while reflecting your unique style.",
    image: assets.services.planning,
  },
];
