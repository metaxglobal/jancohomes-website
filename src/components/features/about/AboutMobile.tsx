import { HugeiconsIcon } from "@hugeicons/react";
import {
  Clock01Icon,
  CheckmarkCircle03Icon,
  UserMultiple02Icon,
  SecurityCheckIcon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

export function AboutMobile() {
  return (
    <div className="w-full flex flex-col" id="about">
      {/* Images Section - Background #F7F7F7 */}
      <div className="self-stretch px-4 py-6 bg-background-3 flex items-center justify-center gap-5">
        <Image
          src="/janco homes about img1.jpg"
          alt="Janco Construction Project"
          width={171}
          height={141}
          className="w-[171px] h-[141px] rounded-[22px]"
        />
        <Image
          src="/jancon homes about img2.jpg"
          alt="Janco Construction Interior"
          width={170}
          height={101}
          className="w-[170px] h-[101px] rounded-[22px]"
        />
      </div>

      {/* Text Section - Background #E8E5DC */}
      <div className="self-stretch px-4 py-8 bg-background-1 flex flex-col items-start justify-center gap-6">
        <div className="self-stretch flex flex-col items-start justify-center gap-6">
          {/* Heading */}
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="w-[361px] flex flex-col items-start justify-start gap-2">
              {/* Label */}
              <div className="self-stretch flex items-center justify-center gap-2.5">
                <div className="flex-1 text-primary text-base font-normal leading-5 tracking-tight">
                  ABOUT
                </div>
              </div>

              {/* Title */}
              <div className="w-[361px] flex items-center justify-center gap-2.5">
                <div className="flex-1">
                  <span className="text-secondary text-[40px] font-medium leading-9 tracking-[-3px]">
                    Why Choose
                    <br />
                  </span>
                  <span className="text-primary text-[40px] font-medium leading-9 tracking-[-3px]">
                    Janco?
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="w-[361px] flex items-center justify-start gap-2.5">
              <div className="w-[361px] text-secondary/75 text-sm font-medium leading-[14px]">
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
          <a className="inline-flex items-center justify-center gap-2 px-5 py-[10px] bg-secondary rounded-xl" href="#services" role="button">
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

      {/* Cards Section - White background with 16px padding */}
      <div className="self-stretch p-4 flex flex-col items-start justify-start gap-5">
        <div className="flex flex-col items-start justify-start gap-5">
          {/* First Row */}
          <div className="flex items-start justify-start gap-5">
            {/* Card 1 - 20 Years */}
            <div
              className="w-[170.5px] min-h-[138px] p-3 bg-white rounded-[22px] flex flex-col items-center justify-start gap-1"
              style={{
                outline: "1px #C2C2C2 solid",
                outlineOffset: "-1px",
              }}
            >
              <div className="w-8 h-8 relative">
                <HugeiconsIcon
                  icon={Clock01Icon}
                  size={32}
                  color="#7CB342"
                  strokeWidth={2}
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="text-center text-secondary/75 text-xs font-normal leading-4">
                    20 Years of
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2.5">
                  <div className="text-center text-secondary text-sm font-medium leading-[14px] tracking-tight">
                    Industry Experience
                  </div>
                </div>
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="w-[146px] text-center text-secondary/75 text-xs font-normal leading-4">
                    Two decades of construction excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - 100+ Projects */}
            <div
              className="w-[170.5px] min-h-[138px] p-3 bg-white rounded-[22px] flex flex-col items-center justify-start gap-1"
              style={{
                outline: "1px #C2C2C2 solid",
                outlineOffset: "-1px",
              }}
            >
              <div className="w-8 h-8 relative">
                <HugeiconsIcon
                  icon={CheckmarkCircle03Icon}
                  size={32}
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
                  <div className="text-center text-secondary text-sm font-medium leading-[14px] tracking-tight">
                    100+ Projects
                  </div>
                </div>
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="w-[147px] text-center text-secondary/75 text-xs font-normal leading-4">
                    Successfully delivered projects
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-start justify-start gap-5">
            {/* Card 3 - Qualified Professionals */}
            <div
              className="w-[170px] min-h-[138px] p-3 bg-white rounded-[22px] flex flex-col items-center justify-start gap-1"
              style={{
                outline: "1px #C2C2C2 solid",
                outlineOffset: "-1px",
              }}
            >
              <div className="w-8 h-8 relative">
                <HugeiconsIcon
                  icon={UserMultiple02Icon}
                  size={32}
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
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="w-[152px] text-center text-secondary text-sm font-medium leading-[14px] tracking-tight">
                    Qualified Professionals
                  </div>
                </div>
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="w-[146px] text-center text-secondary/75 text-xs font-normal leading-4">
                    Expert team members
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Trusted Service */}
            <div
              className="w-[171px] min-h-[138px] p-3 bg-white rounded-[22px] flex flex-col items-center justify-start gap-1"
              style={{
                outline: "1px #C2C2C2 solid",
                outlineOffset: "-1px",
              }}
            >
              <div className="w-8 h-8 relative">
                <HugeiconsIcon
                  icon={SecurityCheckIcon}
                  size={32}
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
                  <div className="text-center text-secondary text-sm font-medium leading-[14px] tracking-tight">
                    Service
                  </div>
                </div>
                <div className="self-stretch flex items-center justify-center gap-2.5">
                  <div className="w-[145px] text-center text-secondary/75 text-xs font-normal leading-4">
                    Reliable and dependable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
