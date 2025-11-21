"use client";

import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

export function ProjectsDesktop() {
  const projects = [
    {
      id: "modern-villa-kandy",
      title: "Modern Villa - Kandy",
      location: "Kandy",
      area: "SQFT - 2800",
      description: "A stunning modern villa featuring contemporary architecture and premium finishes in the heart of Kandy.",
      images: [
        "/projects/modern-villa-kandy.jpg",
        "/projects/modern-villa-kandy-2.jpg",
        "/projects/modern-villa-kandy-3.jpg",
      ],
    },
    {
      id: "house-mirigama",
      title: "House Project - Mirigama",
      location: "Mirigama",
      area: "SQFT - 2534",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        "/projects/contemporary-house-mirigama.jpg",
        "/projects/house-mirigama-2.jpg",
        "/projects/house-mirigama-3.jpg",
      ],
    },
    {
      id: "luxury-colombo",
      title: "Luxury Residence - Colombo",
      location: "Colombo 7",
      area: "SQFT - 3200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: [
        "/projects/luxury-residence-colombo.jpg",
        "/projects/luxury-colombo-2.jpg",
        "/projects/luxury-colombo-3.jpg",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-24" id="projects">
      <div className="w-full max-w-[1440px] mx-auto px-[120px]">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          {/* Title */}
          <div className="flex items-center justify-center">
            <div className="w-[252px]">
              <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
                Latest<br/>
              </span>
              <span className="text-[#7CB342] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
                Projects
              </span>
            </div>
          </div>
          
          {/* Description & CTA */}
          <div className="w-[576px] flex flex-col items-end gap-6">
            <p className="w-[565px] text-[rgba(26,26,26,0.75)] text-base font-medium leading-5 tracking-[-0.04rem]">
              Our signature projects reflect our commitment to realize your dreams. We have delivered successfully completed residential projects to thousands of happy customers throughout our more than 8 years of journey.
            </p>
            
            <Link
              href="/projects"
              className="h-12 px-5 py-2.5 bg-[#1A1A1A] rounded-xl flex items-center gap-2 hover:bg-[#1A1A1A]/90 transition-colors"
            >
              <span className="text-white text-base font-medium leading-5">
                Explore Projects
              </span>
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="white"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        {/* Projects Custom Layout - Desktop Homepage */}
        <div className="flex flex-col gap-5">
          {/* Top Row: First Card + Second Card */}
          <div className="flex gap-5">
            {/* First Card - Vertical (387px) */}
            <div className="w-[387px] inline-flex flex-col justify-start items-start">
              <Image
                src={projects[0].images[0]}
                alt={projects[0].title}
                width={387}
                height={250}
                className="self-stretch h-[250px] rounded-t-[22px] object-cover"
              />
              <div className="self-stretch h-[188px] p-[30px] bg-[#1A1A1A] rounded-b-[22px] flex flex-col justify-between items-start">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                    <h3 className="self-stretch text-white text-[36px] font-medium leading-10 tracking-[-0.15rem]">
                      {projects[0].title}
                    </h3>
                    <p className="self-stretch text-[#C2C2C2] text-[16px] font-medium leading-5">
                      {projects[0].location} | {projects[0].area}
                    </p>
                  </div>
                </div>
                <Link
                  href="/projects"
                  className="h-12 px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
                  style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[#7CB342] text-[16px] font-medium leading-5">
                      View More Projects
                    </span>
                    <HugeiconsIcon
                      icon={ArrowDownRight01Icon}
                      size={20}
                      color="#7CB342"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Second Card - Horizontal (406+387px) */}
            <div className="flex-1 rounded-[22px] flex justify-between items-center">
              <Image
                src={projects[1].images[0]}
                alt={projects[1].title}
                width={406}
                height={438}
                className="w-[406px] h-[438px] rounded-l-[22px] object-cover"
              />
              <div className="w-[387px] h-[438px] px-[30px] bg-[#1A1A1A] rounded-r-[22px] inline-flex flex-col justify-center items-start gap-12">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                    <h3 className="self-stretch text-white text-[36px] font-medium leading-10 tracking-[-0.15rem]">
                      {projects[1].title}
                    </h3>
                    <p className="self-stretch text-[#C2C2C2] text-[16px] font-medium leading-5">
                      {projects[1].location} | {projects[1].area}
                    </p>
                  </div>
                  <p className="self-stretch text-[#C2C2C2] text-[16px] font-medium leading-5">
                    {projects[1].description}
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="h-12 px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
                  style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[#7CB342] text-[16px] font-medium leading-5">
                      View More Projects
                    </span>
                    <HugeiconsIcon
                      icon={ArrowDownRight01Icon}
                      size={20}
                      color="#7CB342"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Third Card - Wide Horizontal (812+388px) */}
          <div className="flex justify-between items-center">
            <Image
              src={projects[2].images[0]}
              alt={projects[2].title}
              width={812}
              height={400}
              className="w-[812px] h-[400px] rounded-l-[22px] object-cover"
            />
            <div className="w-[388px] h-[400px] px-[30px] bg-[#1A1A1A] rounded-r-[22px] inline-flex flex-col justify-center items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <h3 className="self-stretch text-white text-[36px] font-medium leading-10 tracking-[-0.15rem]">
                    {projects[2].title}
                  </h3>
                  <p className="self-stretch text-[#C2C2C2] text-[16px] font-medium leading-5">
                    {projects[2].location} | {projects[2].area}
                  </p>
                </div>
                <p className="self-stretch text-[#C2C2C2] text-[16px] font-medium leading-5">
                  {projects[2].description}
                </p>
              </div>
              <Link
                href="/projects"
                className="h-12 px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
                style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
              >
                <div className="flex justify-start items-center gap-2">
                  <span className="text-[#7CB342] text-[16px] font-medium leading-5">
                    View More Projects
                  </span>
                  <HugeiconsIcon
                    icon={ArrowDownRight01Icon}
                    size={20}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
