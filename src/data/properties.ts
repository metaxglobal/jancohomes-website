import type { Property } from "@/components/features/PropertyCard";

/**
 * Centralized properties data
 * Update properties here and they will sync across:
 * - Home page (RealEstate section)
 * - Dedicated properties page
 * - Any other component using PropertyCard
 */
export const PROPERTIES: Property[] = [
  {
    id: "property-luxury-villa-colombo-7",
    title: "Modern Luxury Villa",
    location: "Colombo 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "LKR 85M",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "3,500",
    images: [
      "/real states/1.jpg",
      "/real states/2.jpg",
      "/real states/3.jpg",
    ],
    whatsappNumber: "94777599299",
    whatsappMessage:
      "Hi, I'm interested in the Modern Luxury Villa in Colombo 7. Could you please provide more details?",
  },
  {
    id: "property-sky-heights-kollupitiya",
    title: "Sky Heights Residences",
    location: "Kollupitiya",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "LKR 85M",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "2,100",
    images: [
      "/real states/1.jpg",
      "/real states/2.jpg",
      "/real states/3.jpg",
    ],
    whatsappNumber: "94777599299",
    whatsappMessage:
      "Hi, I'm interested in the Sky Heights Residences in Kollupitiya. Could you please provide more details?",
  },
];

/**
 * Get a property by ID
 */
export function getPropertyById(id: string): Property | undefined {
  return PROPERTIES.find((property) => property.id === id);
}

/**
 * Get all properties
 */
export function getAllProperties(): Property[] {
  return PROPERTIES;
}
