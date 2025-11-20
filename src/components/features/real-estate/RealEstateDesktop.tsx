// Desktop Real Estate Component

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownRight01Icon,
  Location04Icon,
  BedIcon,
  Bathtub01Icon,
  SchemeIcon,
} from "@hugeicons/core-free-icons";
import { getAllProperties } from "@/data/properties";
import type { Property } from "../PropertyCard";

interface PropertyCardDesktopProps {
  property: Property;
  onContactClick?: () => void;
}

function PropertyCardDesktop({ property, onContactClick }: PropertyCardDesktopProps) {
  const [currentImageIndex] = useState(0);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else if (property.whatsappNumber) {
      const message = encodeURIComponent(
        property.whatsappMessage ||
          `Hi, I'm interested in ${property.title} located in ${property.location}. Could you please provide more details?`
      );
      const whatsappUrl = `https://wa.me/${property.whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div
      className="w-[387px] rounded-[22px] flex flex-col items-start justify-start"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Property Image */}
      <div className="self-stretch h-[296px] relative overflow-hidden rounded-t-[22px]">
        <div className="w-[387px] h-[296px] relative">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title}
            width={387}
            height={296}
            className="w-[387px] h-[296px] object-cover"
          />
          
          {/* Gradient Overlay */}
          <div
            className="w-full h-[296px] absolute left-0 top-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
            }}
          />

          {/* Image Pagination Dots */}
          <div className="h-[30px] absolute left-[166px] top-[266px] flex items-center justify-start gap-2">
            {property.images.slice(0, 3).map((_, index) => (
              <button
                key={index}
                className={`${
                  index === currentImageIndex
                    ? "w-4 h-4 p-[3px] bg-white"
                    : "w-3 h-3 p-[3px] bg-ash"
                } rounded-lg flex items-center justify-center`}
                aria-label={`View image ${index + 1}`}
              >
                {index === currentImageIndex && (
                  <div
                    className="w-2.5 h-2.5 bg-white rounded-full border border-ash"
                    style={{
                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.50)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Price Badge */}
          <div
            className="w-[101px] h-[68px] absolute left-[270px] top-4 bg-white rounded-[11px] flex flex-col items-center justify-center"
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
            {/* Title & Location */}
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch flex items-center justify-start gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  {property.title}
                </div>
              </div>
              <div className="flex items-center justify-start gap-1">
                <div className="w-5 h-5 relative">
                  <HugeiconsIcon
                    icon={Location04Icon}
                    size={20}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-secondary text-base font-medium leading-5">
                  {property.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch flex items-center justify-start gap-2.5">
              <div className="w-[321px] text-secondary/75 text-sm font-normal leading-[14px]">
                {property.description}
              </div>
            </div>
          </div>

          {/* Property Stats */}
          <div className="self-stretch h-8 border-b border-ash flex items-center justify-start gap-4">
            {/* Bedrooms */}
            <div className="w-[29.05px] h-5 flex items-center justify-start gap-1">
              <div className="w-[29px] flex items-center justify-between">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={BedIcon}
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
                    icon={Bathtub01Icon}
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
                  icon={SchemeIcon}
                  size={16}
                  color="#7CB342"
                  strokeWidth={1}
                />
              </div>
              <div className="text-secondary text-sm font-normal leading-[14px]">
                {property.sqft}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className="self-stretch h-12 px-5 py-2.5 bg-primary rounded-xl flex items-center justify-center gap-2"
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
        </button>
      </div>
    </div>
  );
}

export function RealEstateDesktop() {
  const properties = getAllProperties().slice(0, 3);

  return (
    <div className="hidden lg:flex w-full pt-24 pb-16 px-[120px] bg-white flex-col items-start justify-start gap-12">
      {/* Header Section */}
      <div className="self-stretch flex flex-col items-center justify-start gap-2.5">
        <div className="p-2.5 flex items-center justify-center gap-2.5">
          <div className="text-center">
            <span className="text-secondary text-[72px] font-medium leading-[64px]">
              Janco{" "}
            </span>
            <span className="text-primary text-[72px] font-medium leading-[64px]">
              Real Estate
            </span>
          </div>
        </div>
        <div className="self-stretch p-2.5 flex items-center justify-center gap-2.5">
          <div className="w-[800px] text-center text-secondary/75 text-base font-medium leading-5">
            Discover exclusive premium properties developed and curated by Janco
            Home & Construction. Each residence represents our commitment to
            quality and excellence.
          </div>
        </div>
      </div>

      {/* Property Cards */}
      <div className="self-stretch flex items-center justify-start gap-5">
        {properties.map((property) => (
          <PropertyCardDesktop key={property.id} property={property} />
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="self-stretch h-[115px] border-t border-b border-ash flex items-center justify-between">
        <div className="w-[576px] h-[84px] flex flex-col items-start justify-start gap-3">
          <div className="flex items-center justify-center gap-2.5">
            <div className="text-secondary text-2xl font-medium leading-6">
              Explore Our Complete Portfolio
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-[576px] text-secondary/75 text-base font-medium leading-5">
              Browse through our extensive collection of premium properties. From
              luxury villas to modern apartments, find your dream home with Janco
              Real Estate.
            </div>
          </div>
        </div>
        
        <Link
          href="/properties"
          className="h-12 px-5 py-2.5 bg-secondary rounded-xl flex items-center justify-center gap-2"
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
                strokeWidth={2}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
