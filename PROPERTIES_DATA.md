# Properties Data Management

## Overview
All property data is now centralized in `src/data/properties.ts`. This ensures that updating a property in one place automatically syncs across all pages.

## How It Works

### Single Source of Truth
- **Location**: `src/data/properties.ts`
- **Used By**:
  - Home page (`RealEstate` section)
  - Dedicated properties page (`/properties`)
  - Any future component using `PropertyCard`

### Property Structure
Each property has:
- `id`: Unique identifier (e.g., "property-luxury-villa-colombo-7")
- `title`: Property name
- `location`: Area/city
- `description`: Property description
- `price`: Price display (e.g., "LKR 85M")
- `bedrooms`: Number of bedrooms
- `bathrooms`: Number of bathrooms
- `sqft`: Square footage with unit
- `images`: Array of 3 image paths
- `whatsappNumber`: WhatsApp contact number
- `whatsappMessage`: Pre-filled WhatsApp message

## Usage Examples

### Updating a Property
Edit `src/data/properties.ts`:

```typescript
{
  id: "property-luxury-villa-colombo-7",
  title: "Modern Luxury Villa",
  images: [
    "/real states/new-image-1.jpg",  // Change images here
    "/real states/new-image-2.jpg",
    "/real states/new-image-3.jpg",
  ],
  // ... other fields
}
```

Changes automatically appear on:
- Home page RealEstate section
- `/properties` page
- Anywhere PropertyCard is used

### Adding a New Property
Add to the `PROPERTIES` array in `src/data/properties.ts`:

```typescript
{
  id: "property-ocean-view-mount-lavinia",
  title: "Ocean View Apartment",
  location: "Mount Lavinia",
  description: "Stunning ocean views...",
  price: "LKR 65M",
  bedrooms: 2,
  bathrooms: 2,
  sqft: "1,800",
  images: [
    "/real states/ocean-1.jpg",
    "/real states/ocean-2.jpg",
    "/real states/ocean-3.jpg",
  ],
  whatsappNumber: "94777599299",
  whatsappMessage: "Hi, I'm interested in the Ocean View Apartment...",
}
```

### Getting Properties in Components
```typescript
import { getAllProperties, getPropertyById } from "@/data/properties";

// Get all properties
const properties = getAllProperties();

// Get specific property
const property = getPropertyById("property-luxury-villa-colombo-7");
```

## Benefits

✅ **Single Update Point**: Change property data once, updates everywhere
✅ **Consistent Data**: No mismatches between home and properties pages
✅ **WhatsApp Integration**: All properties have WhatsApp contact functionality
✅ **Easy Maintenance**: Add/remove properties in one file
✅ **Type Safety**: Full TypeScript support with Property interface

## Important Notes

1. **Unique IDs**: Each property must have a unique `id`
2. **Image Paths**: Use relative paths from `public/` folder (e.g., `/real states/1.jpg`)
3. **3 Images Required**: PropertyCard swiper expects exactly 3 images
4. **WhatsApp Format**: Phone number without `+` (e.g., "94777599299")
