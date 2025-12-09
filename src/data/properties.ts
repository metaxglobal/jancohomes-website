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
    id: "Janco Emeral Estates",
    title: "Janco Emeral Estates",
    location: "Polwatta, Pannipitiya",
    description:
      "Exclusive residential land plots for sale in the sought-after Polawatta area, Pannipitiya. Fully developed with electricity, water, and wide road access. Close to town, schools, hospitals, and major transport routes—perfect for your dream home in a growing community.",
    price: "2.3M PP",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "3,500 sqft",
    images: [
      "/real states/property1.png",
      "/real states/property1.png",
      "/real states/property1.png",
    ],
    whatsappNumber: "94777599299",
    whatsappMessage:
      "Hi, I'm interested in the Janco Emeral Estates, Polwatta, Pannipitiya. Could you please provide more details?",
  },
  {
    id: "Janco Serenity Acres",
    title: "Janco Serenity Acres",
    location: "Malabe, Sri Lanka",
    description:
      "Exclusive residential land plots in the sought-after Polawatta area, Pannipitiya. Fully developed with electricity, water, and wide road access. Close to town, schools, hospitals, and major transport routes—ideal for building your dream home in a growing community.",
    price: "Per Perch",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "2,100 sqft",
    images: [
      "/real states/property2.png",
      "/real states/property2.png",
      "/real states/property2.png",
    ],
    whatsappNumber: "94777599299",
    whatsappMessage:
      "Hi, I'm interested in the Serenity Acres, Malabe, Sri Lanka. Could you please provide more details?",
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
