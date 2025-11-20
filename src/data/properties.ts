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
    price: "LKR 55M",
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
  {
    id: "property-coastal-paradise-mount-lavinia",
    title: "Coastal Paradise Villa",
    location: "Mount Lavinia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "LKR 120M",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "4,200",
    images: [
      "/real states/1.jpg",
      "/real states/2.jpg",
      "/real states/3.jpg",
    ],
    whatsappNumber: "94777599299",
    whatsappMessage:
      "Hi, I'm interested in the Coastal Paradise Villa in Mount Lavinia. Could you please provide more details?",
  },
  {
    id: "property-modern-luxury-colombo-3",
    title: "Modern Luxury Villa",
    location: "Colombo 3",
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
      "Hi, I'm interested in the Modern Luxury Villa in Colombo 3. Could you please provide more details?",
  },
  {
    id: "property-urban-townhouse-colombo-7",
    title: "Urban Townhouse",
    location: "Colombo 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "LKR 55M",
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
      "Hi, I'm interested in the Urban Townhouse in Colombo 7. Could you please provide more details?",
  },
  {
    id: "property-garden-estate-nugegoda",
    title: "Garden Estate Residence",
    location: "Nugegoda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "LKR 120M",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "4,200",
    images: [
      "/real states/1.jpg",
      "/real states/2.jpg",
      "/real states/3.jpg",
    ],
    whatsappNumber: "94777599299",
    whatsappMessage:
      "Hi, I'm interested in the Garden Estate Residence in Nugegoda. Could you please provide more details?",
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
