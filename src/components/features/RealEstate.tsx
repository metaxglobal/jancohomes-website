import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  images: string[];
}

export function RealEstate() {
  const properties: Property[] = [
    {
      id: "property-1",
      title: "Modern Luxury Villa",
      location: "Colombo 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "LKR 85M",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "3,500 sq ft",
      images: [
        "https://placehold.co/361x296",
        "https://placehold.co/361x296",
        "https://placehold.co/361x296",
      ],
    },
    {
      id: "property-2",
      title: "Sky Heights Residences",
      location: "Kollupitiya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "LKR 85M",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,100 sq ft",
      images: [
        "https://placehold.co/361x296",
        "https://placehold.co/361x296",
        "https://placehold.co/361x296",
      ],
    },
  ];

  return (
    <div className="w-full pt-[72px] pb-[64px] px-4">
      <div className="w-full max-w-[393px] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Header Section */}
        <div className="self-stretch flex flex-col items-center justify-start gap-3">
          <div className="self-stretch inline-flex items-center justify-center gap-2.5">
            <div className="text-center">
              <span className="text-secondary text-[40px] font-medium leading-9">
                Janco{" "}
              </span>
              <span className="text-primary text-[40px] font-medium leading-9">
                Real Estate
              </span>
            </div>
          </div>
          <div className="self-stretch px-2.5 inline-flex items-center justify-center gap-2.5">
            <div className="w-[361px] text-center text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
              Discover exclusive premium properties developed and curated by Janco
              Home & Construction. Each residence represents our commitment to
              quality and excellence.
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div className="w-[361px] flex flex-col items-center justify-start gap-5">
          <div className="self-stretch flex flex-col items-center justify-start gap-5">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="self-stretch py-4 border-t border-b border-ash flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="inline-flex items-center justify-center gap-2.5">
              <div className="text-secondary text-[22px] font-medium leading-6">
                Explore Our Complete Portfolio
              </div>
            </div>
            <div className="self-stretch inline-flex items-center justify-start gap-2.5">
              <div className="w-[361px] text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
                Browse through our extensive collection of premium properties.
                From luxury villas to modern apartments, find your dream home with
                Janco Real Estate.
              </div>
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/properties"
            className="px-5 py-[10px] bg-secondary rounded-xl inline-flex items-center justify-center gap-2"
          >
            <div className="flex items-center justify-start gap-2">
              <div className="text-white text-base font-medium leading-5">
                View All Properties
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowDownRight01Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
