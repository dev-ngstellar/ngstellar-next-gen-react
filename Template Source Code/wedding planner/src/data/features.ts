export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: "personalized-planning",
    title: "Personalized Planning",
    description: "Every wedding is designed around your story and style.",
    iconName: "HeartHandshake",
  },
  {
    id: "creative-decor",
    title: "Creative Décor",
    description: "Beautiful themes, florals, lighting, and details crafted to impress.",
    iconName: "Palette",
  },
  {
    id: "trusted-vendors",
    title: "Trusted Vendors",
    description: "A carefully selected network of reliable wedding professionals.",
    iconName: "ShieldCheck",
  },
  {
    id: "seamless-execution",
    title: "Seamless Execution",
    description: "From the first idea to the final celebration, we manage every detail.",
    iconName: "Clock",
  },
];
