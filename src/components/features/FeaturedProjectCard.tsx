"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location04Icon, GridViewIcon } from "@hugeicons/core-free-icons";

interface FeaturedProjectCardProps {
  id: string;
  title: string;
  location: string;
  area: string;
  description: string;
  images: string[];
}

export default function FeaturedProjectCard({
  title,
  location,
  area,
  description,
  images,
}: FeaturedProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-[361px] flex-col rounded-[22px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)] outline outline-1 outline-ash outline-offset-[-1px]">
      {/* Image Section with Pagination */}
      <div className="relative h-[250px] overflow-hidden rounded-t-[22px]">
        {/* Image with gradient overlay */}
        <div className="relative h-full w-full">
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
            }}
          />
        </div>

        {/* Image Pagination Dots */}
        <div className="absolute bottom-[20px] left-1/2 flex h-[30px] -translate-x-1/2 items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`flex items-center justify-center rounded-lg transition-all ${
                index === currentImageIndex
                  ? "h-4 w-4 bg-white p-[3px]"
                  : "h-3 w-3 bg-ash p-[3px]"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              {index === currentImageIndex && (
                <div className="h-[10px] w-[10px] rounded-full border border-ash bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.50)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-[18px] rounded-b-[22px] bg-white p-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {/* Title and Meta Info */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-medium leading-6 text-secondary">
                {title}
              </h3>
              <div className="flex items-start gap-6">
                {/* Location */}
                <div className="flex items-center gap-1">
                  <HugeiconsIcon
                    icon={Location04Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.2}
                  />
                  <span className="text-[14px] font-medium leading-[14px] text-secondary">
                    {location}
                  </span>
                </div>

                {/* Area */}
                <div className="flex items-center gap-1">
                  <HugeiconsIcon
                    icon={GridViewIcon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.2}
                  />
                  <span className="text-[14px] font-medium leading-[14px] text-secondary">
                    {area}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-center justify-center">
              <p className="w-[319px] text-[14px] font-normal leading-[14px] text-secondary/75">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
