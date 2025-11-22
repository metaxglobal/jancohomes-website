// Desktop About Component - Figma Spec

"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownRight01Icon,
  Clock01Icon,
  CheckmarkCircle03Icon,
  UserMultiple02Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";

export function AboutDesktop() {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full pb-5 flex flex-col items-center gap-8">
      {/* Split Background Section - Full Width Backgrounds */}
      <div className="w-full min-h-[600px] flex">
        {/* Left Side - Images with #F7F7F7 Background - Full Width */}
        <div className="w-1/2 min-h-[600px] bg-[#F7F7F7] flex items-center justify-end pr-5">
          {/* Content Container - Constrained to 1440px layout */}
          <div className="flex items-center gap-5 pl-[120px]">
            <Image
              src="/about img1.jpg"
              alt="Janco homes and Constructions"
              width={284}
              height={496}
              className="w-[284px] h-[496px] rounded-[22px] object-cover"
            />
            <Image
              src="/about img2.jpg"
              alt="janco homes and Constructions"
              width={270}
              height={361}
              className="w-[270px] h-[361px] rounded-[22px] object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content with #E8E5DC Background - Full Width */}
        <div className="w-1/2 min-h-[600px] bg-[#E8E5DC] flex items-center justify-start pl-5">
          {/* Content Container - Constrained to 1440px layout */}
          <div className="py-8 pl-[83px] pr-8 flex flex-col items-start justify-center gap-6 max-w-[605px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="w-[398px] flex flex-col gap-3">
                  {/* Label */}
                  <div className="self-stretch flex items-center justify-start">
                    <span className="flex-1 text-[#7CB342] text-xl font-normal leading-5 tracking-[-0.05rem]">ABOUT</span>
                  </div>
                  
                  {/* Heading */}
                  <div className="self-stretch flex items-center justify-start">
                    <div className="flex-1">
                      <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
                        Why Choose<br/>
                      </span>
                      <span className="text-[#7CB342] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
                        Janco?
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center justify-start">
                  <p className="w-[497px] text-[rgba(26,26,26,0.75)] text-base font-medium leading-5 tracking-[-0.04rem]">
                    With 20 years of industry experience, Janco Home & Construction has established itself as a premier construction and real estate company in Sri Lanka. We blend design innovation, engineering excellence, and craftsmanship to create structures that stand the test of time.
                    <br /><br />
                    Our commitment to quality and attention to detail, combined with our team of qualified professionals, has made us one of Sri Lanka&apos;s most trusted construction partners.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="#services"
                onClick={handleExploreClick}
                className="h-12 px-5 py-2.5 bg-[#1A1A1A] rounded-xl flex items-center gap-2 hover:bg-[#1A1A1A]/90 transition-colors w-fit"
              >
                <span className="text-white text-base font-medium leading-5">
                  Explore More
                </span>
                <div className="w-5 h-5 relative overflow-hidden">
                  <HugeiconsIcon
                    icon={ArrowDownRight01Icon}
                    size={20}
                    color="white"
                    strokeWidth={2}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Centered in 1200px */}
      <div className="w-full max-w-[1200px] px-4 flex items-center justify-between">
        {/* Card 1 - 20 Years */}
        <div 
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={Clock01Icon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="w-[202px] flex flex-col items-center gap-2">
            <span className="text-center text-[rgba(26,26,26,0.75)] text-xs font-normal leading-4">
              20 Years of
            </span>
            <span className="text-center text-[#1A1A1A] text-base font-medium leading-5">
              Industry Experience
            </span>
            <span className="w-[202px] text-center text-[rgba(26,26,26,0.75)] text-sm font-normal leading-[14px]">
              Two decades of construction excellence
            </span>
          </div>
        </div>

        {/* Card 2 - 100+ Projects */}
        <div 
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={CheckmarkCircle03Icon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="self-stretch flex flex-col items-center gap-2">
            <span className="text-center text-[rgba(26,26,26,0.75)] text-xs font-normal leading-4">
              Completion of
            </span>
            <span className="text-center text-[#1A1A1A] text-base font-medium leading-5">
              100+ Projects
            </span>
            <span className="w-[203px] text-center text-[rgba(26,26,26,0.75)] text-sm font-normal leading-[14px]">
              Successfully delivered projects
            </span>
          </div>
        </div>

        {/* Card 3 - Qualified Professionals */}
        <div 
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={UserMultiple02Icon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="self-stretch flex flex-col items-center gap-2">
            <span className="text-center text-[rgba(26,26,26,0.75)] text-xs font-normal leading-4">
              Using Only
            </span>
            <span className="text-center text-[#1A1A1A] text-base font-medium leading-5">
              Qualified Professionals
            </span>
            <span className="w-[188px] text-center text-[rgba(26,26,26,0.75)] text-sm font-normal leading-[14px]">
              Expert team members
            </span>
          </div>
        </div>

        {/* Card 4 - Trusted Service */}
        <div 
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={SecurityCheckIcon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="self-stretch flex flex-col items-center gap-2">
            <span className="text-center text-[rgba(26,26,26,0.75)] text-xs font-normal leading-4">
              Trusted
            </span>
            <span className="text-center text-[#1A1A1A] text-base font-medium leading-5">
              Service
            </span>
            <span className="w-[188px] text-center text-[rgba(26,26,26,0.75)] text-sm font-normal leading-[14px]">
              Reliable and dependable
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
