"use client";

import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";

export function ProjectsDesktop() {
  const projects = [
    {
      id: "Luxury Home in Dehiwala",
      title: "Luxury Home",
      location: "Dehiwala",
      price: "RS.27.7M",
      description: "A stunning modern villa featuring contemporary architecture and premium finishes in the heart of Kandy.",
      images: [
        "/projects/lhd2.jpg",
      ]
    },
    {
      id: "Modern NGO Office Building ",
      title: "Modern NGO Office Building ",
      location: "Beruwala",
      price: "RS.49.2M",
      description: "A professionally designed 4,772 sq.ft commercial facility showcasing our expertise in institutional construction.",
      images: [
        "/projects/ngo1.jpg",
      ],
    },
    {
      id: "Quality Family Residence",
      title: "Quality Family Residence",
      location: "Homagama",
      price: "RS.23M",
      description: "A beautifully crafted 2,612 sq.ft family home delivering exceptional value and quality.",
      images: [
        "/projects/frh.jpg",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-24" id="projects">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-[120px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          {/* Title */}
          <div className="flex items-center justify-center">
            <div className="w-auto">
              <span className="text-[#1A1A1A] text-[48px] 2xl:text-[72px] font-medium leading-[48px] 2xl:leading-[64px] tracking-[-0.2rem] 2xl:tracking-[-0.3rem]">
                Latest<br/>
              </span>
              <span className="text-[#7CB342] text-[48px] 2xl:text-[72px] font-medium leading-[48px] 2xl:leading-[64px] tracking-[-0.2rem] 2xl:tracking-[-0.3rem]">
                Projects
              </span>
            </div>
          </div>
          
          {/* Description & CTA */}
          <div className="max-w-[576px] flex flex-col items-start lg:items-end gap-6">
            <p className="text-[rgba(26,26,26,0.75)] text-sm lg:text-base font-medium leading-5 tracking-[-0.04rem]">
              Our signature projects reflect our commitment to realize your dreams. We have delivered successfully completed residential projects to thousands of happy customers throughout our more than 20+ years of journey.
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
            {/* First Card - Vertical (flexible width) */}
            <div className="w-[32%] min-w-[280px] inline-flex flex-col justify-start items-start">
              <Image
                src={projects[0].images[0]}
                alt={projects[0].title}
                width={387}
                height={250}
                className="self-stretch h-[250px] rounded-t-[22px] object-cover"
              />
              <div className="self-stretch flex-1 min-h-[188px] p-[30px] bg-[#1A1A1A] rounded-b-[22px] flex flex-col justify-between items-start">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                    <h3 className="self-stretch text-white text-[28px] lg:text-[36px] font-medium leading-9 lg:leading-10 tracking-[-0.1rem] lg:tracking-[-0.15rem]">
                      {projects[0].title}
                    </h3>
                    <p className="self-stretch text-[#C2C2C2] text-[14px] lg:text-[16px] font-medium leading-5">
                      {projects[0].location} | {projects[0].price}
                    </p>
                  </div>
                </div>
                <Link
                  href="/projects"
                  className="h-12 px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
                  style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <span className="text-[#7CB342] text-[14px] lg:text-[16px] font-medium leading-5">
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

            {/* Second Card - Horizontal (flexible width) */}
            <div className="flex-1 rounded-[22px] flex justify-between items-stretch overflow-hidden">
              <div className="w-[50%] relative">
                <Image
                  src={projects[1].images[0]}
                  alt={projects[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-[50%] min-w-[280px] px-6 lg:px-[30px] bg-[#1A1A1A] inline-flex flex-col justify-center items-start gap-8 lg:gap-12">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                    <h3 className="self-stretch text-white text-[28px] lg:text-[36px] font-medium leading-9 lg:leading-10 tracking-[-0.1rem] lg:tracking-[-0.15rem]">
                      {projects[1].title}
                    </h3>
                    <p className="self-stretch text-[#C2C2C2] text-[14px] lg:text-[16px] font-medium leading-5">
                      {projects[1].location} | {projects[1].price}
                    </p>
                  </div>
                  <p className="self-stretch text-[#C2C2C2] text-[14px] lg:text-[16px] font-medium leading-5">
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

          {/* Bottom Row: Third Card - Wide Horizontal (flexible) */}
          <div className="flex justify-between items-stretch overflow-hidden rounded-[22px]">
            <div className="w-[65%] relative h-[400px]">
              <Image
                src={projects[2].images[0]}
                alt={projects[2].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-[35%] min-w-[280px] h-[400px] px-6 lg:px-[30px] bg-[#1A1A1A] inline-flex flex-col justify-center items-start gap-8 lg:gap-12">
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <h3 className="self-stretch text-white text-[28px] lg:text-[36px] font-medium leading-9 lg:leading-10 tracking-[-0.1rem] lg:tracking-[-0.15rem]">
                    {projects[2].title}
                  </h3>
                  <p className="self-stretch text-[#C2C2C2] text-[14px] lg:text-[16px] font-medium leading-5">
                    {projects[2].location} | {projects[2].price}
                  </p>
                </div>
                <p className="self-stretch text-[#C2C2C2] text-[14px] lg:text-[16px] font-medium leading-5 line-clamp-4">
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
