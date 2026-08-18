export type GalleryCategory = 'All Weddings' | 'Traditional' | 'Luxury' | 'Destination' | 'Intimate';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
}

export const galleryCategories: GalleryCategory[] = [
  'All Weddings',
  'Traditional',
  'Luxury',
  'Destination',
  'Intimate'
];

export const galleryData: GalleryItem[] = [
  {
    id: "wedding-01",
    title: "A Garden Celebration",
    category: "Intimate",
    image: "/assets/gallery/wedding-01.jpg",
    location: "Coimbatore",
    description: "An elegant outdoor wedding filled with flowers and warm evening lights."
  },
  {
    id: "wedding-02",
    title: "A Royal Affair",
    category: "Luxury",
    image: "/assets/gallery/wedding-02.jpg",
    location: "Udaipur Fort",
    description: "A grand celebration inspired by timeless elegance."
  },
  {
    id: "wedding-03",
    title: "An Intimate Beginning",
    category: "Intimate",
    image: "/assets/gallery/wedding-03.jpg",
    location: "Heritage Courtyard",
    description: "A beautifully curated celebration surrounded by family and loved ones."
  },
  {
    id: "wedding-04",
    title: "Traditional Temple Nuptials",
    category: "Traditional",
    image: "/assets/gallery/wedding-04.jpg",
    location: "Madurai",
    description: "Vibrant floral mandap and sacred Vedic wedding ceremonies."
  },
  {
    id: "wedding-05",
    title: "Grand Ballroom Reception",
    category: "Luxury",
    image: "/assets/gallery/wedding-05.jpg",
    location: "Bengaluru",
    description: "Opulent chandeliers, crystal table settings, and bespoke entertainment."
  },
  {
    id: "wedding-06",
    title: "Sunset Beach Vows",
    category: "Destination",
    image: "/assets/gallery/wedding-06.jpg",
    location: "Goa Beach",
    description: "Serene ocean breezes and pastel floral mandap overlooking the water."
  },
  {
    id: "wedding-07",
    title: "Candlelit Garden Feast",
    category: "Intimate",
    image: "/assets/gallery/wedding-07.jpg",
    location: "Ooty Hills",
    description: "Cozy mountain twilight with fairy-lit canopy and artisan dining."
  },
  {
    id: "wedding-08",
    title: "Royal South Indian Marriage",
    category: "Traditional",
    image: "/assets/gallery/wedding-08.jpg",
    location: "Chennai",
    description: "Vibrant silk sarees, nadaswaram melodies, and authentic traditional feast."
  },
];
