export interface TestimonialItem {
  id: string;
  quote: string;
  couple: string;
  location: string;
  weddingType: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote: "Melissa Harper transformed our dream palace wedding into reality! From the mandap flowers to guest coordination in Udaipur, everything was executed flawlessly.",
    couple: "Ananya & Rohan Sharma",
    location: "Udaipur Palace",
    weddingType: "Luxury Destination Wedding",
    rating: 5
  },
  {
    id: "2",
    quote: "Planning a Goa beach wedding from abroad seemed terrifying until we met this team. They handled every detail with extreme professional elegance and calmness.",
    couple: "Priya & Vikram Malhotra",
    location: "Goa Beach Resort",
    weddingType: "Beachfront Wedding",
    rating: 5
  },
  {
    id: "3",
    quote: "Our traditional South Indian Kalyanam was breathtaking. The jasmine mandap, the nadaswaram artists, and the guest hospitality exceeded all our expectations!",
    couple: "Kavitha & Ashwin Kumar",
    location: "Coimbatore",
    weddingType: "Heritage Kalyanam",
    rating: 5
  }
];
