import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownRight01Icon,
  Location05Icon,
} from "@hugeicons/core-free-icons";

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

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div
      className="w-full max-w-[361px] rounded-[22px] inline-flex flex-col items-start justify-start"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Property Image */}
      <div className="self-stretch h-[296px] relative overflow-hidden rounded-t-[22px]">
        <div className="w-[361px] h-[296px] absolute left-0 top-0">
          <Image
            src={property.images[0]}
            alt={property.title}
            width={361}
            height={296}
            className="w-[361px] h-[296px] absolute left-0 top-0 object-cover"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
            }}
          />

          {/* Image Pagination Dots */}
          <div className="h-[30px] absolute left-[153px] top-[266px] inline-flex items-center justify-start gap-2">
            <div className="w-4 h-4 p-[3px] bg-white rounded-lg flex items-center justify-start gap-2.5">
              <div
                className="w-2.5 h-2.5 bg-white rounded-full border border-ash"
                style={{
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.50)",
                }}
              />
            </div>
            <div className="w-3 h-3 p-[3px] bg-ash rounded-lg" />
            <div className="w-3 h-3 p-[3px] bg-ash rounded-lg" />
          </div>

          {/* Price Badge */}
          <div
            className="w-[101px] h-[68px] absolute left-[244px] top-4 bg-white rounded-[11px] inline-flex flex-col items-center justify-center"
            style={{
              boxShadow: "0px 0px 3.5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="text-secondary text-sm font-normal leading-[14px]">
              from
            </div>
            <div className="text-secondary text-base font-medium leading-5">
              {property.price}
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="self-stretch p-5 bg-white rounded-b-[22px] flex flex-col items-center justify-center gap-[18px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              {/* Title */}
              <div className="self-stretch inline-flex items-center justify-start gap-2.5">
                <div className="text-secondary text-[22px] font-medium leading-6">
                  {property.title}
                </div>
              </div>

              {/* Location */}
              <div className="inline-flex items-center justify-start gap-1">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Location05Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="text-secondary text-sm font-medium leading-[14px]">
                  {property.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch inline-flex items-center justify-start gap-2.5">
              <div className="w-[321px] text-secondary/75 text-sm font-normal leading-[14px]">
                {property.description}
              </div>
            </div>
          </div>

          {/* Features (Bedrooms, Bathrooms, Sqft) */}
          <div className="self-stretch h-8 border-b border-ash inline-flex items-center justify-start gap-4">
            {/* Bedrooms */}
            <div className="w-[29.05px] h-5 flex items-center justify-start gap-1">
              <div className="w-[29px] flex items-center justify-between">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Location05Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-secondary text-sm font-normal leading-[14px]">
                  {property.bedrooms}
                </div>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="w-[29.05px] h-5 flex items-center justify-start gap-1">
              <div className="w-[29px] flex items-center justify-between">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Location05Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-secondary text-sm font-normal leading-[14px]">
                  {property.bathrooms}
                </div>
              </div>
            </div>

            {/* Square Feet */}
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4 relative">
                <HugeiconsIcon
                  icon={Location05Icon}
                  size={16}
                  color="#7CB342"
                  strokeWidth={1}
                />
              </div>
              <div className="text-secondary text-sm font-normal leading-[14px]">
                {property.sqft} sq ft
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <Link
          href={`/properties/${property.id}`}
          className="self-stretch px-5 py-[10px] bg-primary rounded-xl inline-flex items-center justify-center gap-2"
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-white text-base font-medium leading-5">
              Contact for more details
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
  );
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
      sqft: "3,500",
      images: ["https://placehold.co/361x296"],
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
      sqft: "2,100",
      images: ["https://placehold.co/361x296"],
    },
  ];

  return (
    <div className="w-full py-[72px] px-4">
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
          <div className="self-stretch text-center text-secondary/75 text-sm font-normal leading-[14px]">
            Discover exclusive premium properties developed and curated by Janco
            Home & Construction. Each residence represents our commitment to
            quality and excellence.
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="self-stretch flex flex-col items-center justify-start gap-5">
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
            <div className="w-[361px] text-secondary/75 text-sm font-normal leading-[14px]">
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
