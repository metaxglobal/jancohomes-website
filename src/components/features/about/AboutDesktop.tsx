// Desktop About Component

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  CheckmarkCircle03Icon,
  UserMultiple02Icon,
  SecurityCheckIcon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

export function AboutDesktop() {
  return (
    <div className="hidden lg:flex w-full flex-col items-center gap-8 pb-5" id="about">
      {/* Main Content Section - Split Layout */}
      <div className="w-full max-w-[1440px] mx-auto h-[600px] flex items-center">
        {/* Left Side - Images with #F7F7F7 Background */}
        <div className="w-[720px] h-[600px] pl-[120px] bg-background-3 flex items-center justify-start gap-5">
          <Image
            src="/janco homes about img1.jpg"
            alt="Janco Construction Project"
            width={284}
            height={496}
            className="w-[284px] h-[496px] rounded-[22px] object-cover"
          />
          <Image
            src="/jancon homes about img2.jpg"
            alt="Janco Construction Interior"
            width={270}
            height={361}
            className="w-[270px] h-[361px] rounded-[22px] object-cover"
          />
        </div>

        {/* Right Side - Content with #E8E5DC Background */}
        <div className="w-[720px] h-[600px] py-8 pl-[83px] pr-8 bg-background-1 flex flex-col items-start justify-center gap-6">
          <div className="flex flex-col items-start justify-center gap-6">
            {/* Heading Section */}
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="w-[398px] flex flex-col items-start justify-start gap-3">
                {/* Label */}
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="flex-1 text-primary text-xl font-normal leading-5">
                    ABOUT
                  </div>
                </div>

                {/* Title */}
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="flex-1">
                    <span className="text-secondary text-[72px] font-medium leading-[64px]">
                      Why Choose
                      <br />
                    </span>
                    <span className="text-primary text-[72px] font-medium leading-[64px]">
                      Janco?
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex items-center justify-center gap-2.5">
                <div className="w-[497px] text-secondary/75 text-base font-medium leading-5">
                  With 20 years of industry experience, Janco Home & Construction
                  has established itself as a premier construction and real estate
                  company in Sri Lanka. We blend design innovation, engineering
                  excellence, and craftsmanship to create structures that stand
                  the test of time.
                  <br />
                  <br />
                  Our commitment to quality and attention to detail, combined with
                  our team of qualified professionals, has made us one of Sri
                  Lanka&apos;s most trusted construction partners.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="#services"
              className="h-12 px-5 py-2.5 bg-secondary rounded-xl inline-flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors"
              role="button"
            >
              <div className="flex items-center justify-start gap-2">
                <div className="text-white text-base font-medium leading-5">
                  Explore More
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
            </a>
          </div>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="w-[1200px] flex items-center justify-between">
        {/* Card 1 - 20 Years */}
        <div
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={Clock01Icon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="w-[202px] flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary/75 text-xs font-normal leading-4">
                20 Years of
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary text-base font-medium leading-5">
                Industry Experience
              </div>
            </div>
            <div className="self-stretch flex items-center justify-center gap-2.5">
              <div className="w-[202px] text-center text-secondary/75 text-sm font-normal leading-[14px]">
                Two decades of construction excellence
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - 100+ Projects */}
        <div
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={CheckmarkCircle03Icon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary/75 text-xs font-normal leading-4">
                Completion of
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary text-base font-medium leading-5">
                100+ Projects
              </div>
            </div>
            <div className="w-[203px] flex items-center justify-center gap-2.5">
              <div className="w-[203px] text-center text-secondary/75 text-sm font-normal leading-[14px]">
                Successfully delivered projects
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Qualified Professionals */}
        <div
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={UserMultiple02Icon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary/75 text-xs font-normal leading-4">
                Using Only
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary text-base font-medium leading-5">
                Qualified Professionals
              </div>
            </div>
            <div className="w-[188px] flex items-center justify-center gap-2.5">
              <div className="w-[188px] text-center text-secondary/75 text-sm font-normal leading-[14px]">
                Expert team members
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - Trusted Service */}
        <div
          className="w-[270px] h-[198px] py-8 bg-white rounded-[22px] flex flex-col items-center justify-center gap-1"
          style={{
            outline: "1px #C2C2C2 solid",
            outlineOffset: "-1px",
          }}
        >
          <div className="w-12 h-12 relative">
            <HugeiconsIcon
              icon={SecurityCheckIcon}
              size={48}
              color="#7CB342"
              strokeWidth={2}
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary/75 text-xs font-normal leading-4">
                Trusted
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="text-center text-secondary text-base font-medium leading-5">
                Service
              </div>
            </div>
            <div className="w-[188px] flex items-center justify-center gap-2.5">
              <div className="w-[188px] text-center text-secondary/75 text-sm font-normal leading-[14px]">
                Reliable and dependable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
