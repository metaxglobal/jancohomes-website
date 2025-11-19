"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownRight01Icon,
  Location04Icon,
  BedIcon,
  Bathtub01Icon,
  SchemeIcon,
} from "@hugeicons/core-free-icons";

export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  images: string[];
  whatsappNumber?: string;
  whatsappMessage?: string;
}

interface PropertyCardProps {
  property: Property;
  onContactClick?: () => void;
}

export default function PropertyCard({ property, onContactClick }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next image
      if (currentImageIndex < property.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right - previous image
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  };

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
      className="w-full max-w-[361px] rounded-[22px] inline-flex flex-col items-start justify-start"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Property Image with Swipe */}
      <div
        className="self-stretch h-[296px] relative overflow-hidden rounded-t-[22px] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-[361px] h-[296px] absolute left-0 top-0">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title}
            width={361}
            height={296}
            className="w-[361px] h-[296px] absolute left-0 top-0 object-cover"
          />
          {/* Gradient Overlay */}
          <div
            className="w-[361px] h-[296px] absolute left-0 top-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
            }}
          />

          {/* Image Pagination Dots */}
          <div className="h-[30px] absolute left-[153px] top-[266px] inline-flex items-center justify-start gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
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
                <div className="text-secondary text-[22px] font-medium leading-6 tracking-tight">
                  {property.title}
                </div>
              </div>

              {/* Location */}
              <div className="inline-flex items-center justify-start gap-1">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Location04Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-secondary text-sm font-medium leading-[14px]">
                  {property.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch inline-flex items-center justify-start gap-2.5">
              <div className="w-[321px] text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
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
                    icon={BedIcon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-secondary text-sm leading-[14px]" style={{ fontWeight: 400 }}>
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
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-secondary text-sm leading-[14px]" style={{ fontWeight: 400 }}>
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
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-secondary text-sm leading-[14px]" style={{ fontWeight: 400 }}>
                {property.sqft}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
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
                strokeWidth={2}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
