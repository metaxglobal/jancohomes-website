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
        "/projects/house-mirigama.jpg",
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
        "/projects/luxury-colombo.jpg",
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
              <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px]">
                Latest<br/>
              </span>
              <span className="text-[#7CB342] text-[72px] font-medium leading-[64px]">
                Projects
              </span>
            </div>
          </div>
          
          {/* Description & CTA */}
          <div className="w-[576px] flex flex-col items-end gap-6">
            <p className="w-[565px] text-[rgba(26,26,26,0.75)] text-base font-medium leading-5">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Row 1: Vertical Card + Horizontal Card */}
          
          {/* Vertical Card - Col Span 1 */}
          <Link
            href={`/projects/${projects[0].id}`}
            className="relative w-full h-[468px] rounded-3xl overflow-hidden group col-span-1"
          >
            <Image
              src={projects[0].images[0]}
              alt={projects[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-medium mb-2">{projects[0].title}</h3>
              <p className="text-sm opacity-90">{projects[0].location} • {projects[0].area}</p>
            </div>
          </Link>

          {/* Horizontal Card - Col Span 2 */}
          <Link
            href={`/projects/${projects[1].id}`}
            className="relative w-full h-[468px] rounded-3xl overflow-hidden bg-secondary group col-span-1 lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                <Image
                  src={projects[1].images[0]}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-2xl font-medium mb-4">{projects[1].title}</h3>
                  <p className="text-white/75 text-base leading-relaxed line-clamp-4">{projects[1].description}</p>
                </div>
                <div className="text-white/90 text-sm">{projects[1].location} • {projects[1].area}</div>
              </div>
            </div>
          </Link>

          {/* Row 2: Wide Card - Col Span 3 */}
          <Link
            href={`/projects/${projects[2].id}`}
            className="relative w-full h-[468px] rounded-3xl overflow-hidden bg-secondary group col-span-1 lg:col-span-3"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-2/3 h-1/2 md:h-full">
                <Image
                  src={projects[2].images[0]}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full md:w-1/3 h-1/2 md:h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-2xl font-medium mb-4">{projects[2].title}</h3>
                  <p className="text-white/75 text-base leading-relaxed line-clamp-4">{projects[2].description}</p>
                </div>
                <div className="text-white/90 text-sm">{projects[2].location} • {projects[2].area}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
