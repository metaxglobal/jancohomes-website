//Desktop Hero Component - Figma Spec

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, CallingIcon } from "@hugeicons/core-free-icons";

export function HeroDesktop() {
  return (
    <section className="relative w-full min-h-screen bg-[#1A1A1A] overflow-hidden flex flex-col">
      {/* Background Blur Effects - Full Width, positioned relative to viewport */}
      <div 
        className="absolute w-[384px] h-[384px] opacity-[0.22] bg-[#7CB342] rounded-full pointer-events-none"
        style={{ 
          left: '51%', 
          top: '15%',
          boxShadow: '128px 128px 128px',
          filter: 'blur(64px)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute w-[320px] h-[320px] opacity-[0.38] bg-[#7CB342] rounded-full pointer-events-none"
        style={{ 
          left: '26%', 
          top: '60%',
          boxShadow: '128px 128px 128px',
          filter: 'blur(64px)'
        }}
        aria-hidden="true"
      />

      {/* Main Content Container - Centered at 1440px with responsive padding */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-[120px] flex-1 flex flex-col pt-[160px] pb-[100px]">
        
        {/* Spacer to push content down and center it */}
        <div className="flex-1 min-h-0"></div>
        
        {/* Content Grid - Left and Right */}
        <div className="relative w-full flex items-center justify-between">
          
          {/* Left Content Section */}
          <div className="w-[580px] xl:w-[620px] 2xl:w-[680px] flex flex-col gap-8">
            <div className="self-stretch flex flex-col gap-6">
              {/* Badge */}
              <div 
                className="px-5 py-2.5 bg-white/10 rounded-xl inline-flex items-center gap-2 w-fit"
                style={{ outline: '1px rgba(255, 255, 255, 0.20) solid', outlineOffset: '-1px' }}
              >
                <div className="w-2 h-2 bg-[#7CB342] rounded-full" />
                <span className="text-[#7CB342] text-sm font-normal uppercase leading-4">
                  Premium Construction Services
                </span>
              </div>

              {/* Heading & Description */}
              <div className="self-stretch flex flex-col gap-5">
                <div>
                  <div className="text-white text-[56px] xl:text-[58px] 2xl:text-[58px] font-medium leading-[52px] xl:leading-[58px] 2xl:leading-[64px] tracking-[-0.2rem]">
                    Leading House
                  </div>
                  <div className="text-[#7CB342] text-[56px] xl:text-[58px] 2xl:text-[58px] font-medium leading-[52px] xl:leading-[58px] 2xl:leading-[64px] tracking-[-0.2rem]">
                    Construction Company <br/>in Sri Lanka
                  </div>
                </div>
                <p className="w-[523px] xl:w-[580px] 2xl:w-[640px] text-[#C2C2C2] text-xl font-normal leading-6 tracking-[-0.03rem]">
                  Build your dream home with Janco Homes – 20+ years of trusted expertise in residential construction and turn-key solutions across Sri Lanka.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/projects"
              className="h-12 px-5 py-2.5 bg-[#7CB342] rounded-xl flex items-center gap-2 hover:bg-[#7CB342]/90 transition-colors w-fit"
            >
              <span className="text-white text-base font-medium leading-5 ">
                View Our Projects
              </span>
              <div className="w-5 h-5 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          </div>

          {/* Right Content Section - Image with Overlays */}
          <div className="relative flex items-center justify-end">

            {/* Hero Image - Responsive sizing for different screens */}
            <div className="relative">
              <Image
                src="/hero img.png"
                alt="Construction Project"
                width={700}
                height={516}
                className="w-[500px] lg:w-[550px] xl:w-[650px] 2xl:w-[700px] rounded-xl"
                style={{ height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Bottom spacer to center content */}
        <div className="flex-1 min-h-0"></div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <div className="relative w-full pb-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-[74px] flex flex-col items-center gap-0.5">
            <div className="self-stretch p-2.5 flex items-center justify-center">
              <span className="text-[#7CB342] text-sm font-normal uppercase leading-4">
                Scroll
              </span>
            </div>
            <div 
              className="w-6 h-10 pt-[18.09px] rounded-[16777200px] flex items-center justify-center"
              style={{ outline: '2px rgba(124, 179, 66, 0.50) solid', outlineOffset: '-2px' }}
            >
              <div className="w-1 h-1.5 bg-[#7CB342] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
