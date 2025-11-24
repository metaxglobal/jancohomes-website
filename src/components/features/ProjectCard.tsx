// Project Card Component - Used in dedicated projects page
// Scaled-up version of mobile design (387px width)

"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location04Icon, SchemeIcon } from "@hugeicons/core-free-icons";

interface ProjectCardProps {
  title: string;
  location: string;
  sqft: string;
  description: string;
  images: string[];
}

export default function ProjectCard({
  title,
  location,
  sqft,
  description,
  images,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="w-full max-w-[361px] sm:max-w-[387px] rounded-[22px] flex flex-col items-end justify-start"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Project Image */}
      <div className="self-stretch h-[250px] relative overflow-hidden rounded-t-[22px]">
        <Image
          src={images[currentImageIndex] || images[0]}
          alt={title}
          width={387}
          height={250}
          className="w-full h-[250px] object-cover absolute left-0 top-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
          }}
        />

        {/* Image Pagination Dots */}
        <div className="h-[30px] absolute left-1/2 -translate-x-1/2 top-[220px] flex items-center justify-start gap-2">
          {images.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`${
                index === currentImageIndex
                  ? "w-4 h-4 p-[3px] bg-white"
                  : "w-3 h-3 p-[3px] bg-ash"
              } rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110`}
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
      </div>

      {/* Project Details */}
      <div className="self-stretch p-5 bg-white rounded-b-[22px] flex flex-col items-center justify-start gap-[18px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-10">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              {/* Title */}
              <div className="self-stretch flex items-center justify-start gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6 tracking-[-0.04rem]">
                  {title}
                </div>
              </div>

              {/* Location & Size */}
              <div className="self-stretch flex items-start justify-start gap-6">
                {/* Location */}
                <div className="flex items-center justify-start gap-1">
                  <div className="w-4 h-4 relative">
                    <HugeiconsIcon
                      icon={Location04Icon}
                      size={16}
                      color="#7CB342"
                      strokeWidth={1.2}
                    />
                  </div>
                  <div className="text-secondary text-sm font-medium leading-[14px]">
                    {location}
                  </div>
                </div>

                {/* Square Feet */}
                <div className="flex items-center justify-start gap-1">
                  <div className="w-4 h-4 relative">
                    <HugeiconsIcon
                      icon={SchemeIcon}
                      size={16}
                      color="#7CB342"
                      strokeWidth={1.2}
                    />
                  </div>
                  <div className="text-secondary text-sm font-medium leading-[14px]">
                    {sqft}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch flex items-center justify-center gap-2.5">
              <div className="flex-1 text-secondary/75 text-sm font-normal leading-[14px] tracking-tight">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
