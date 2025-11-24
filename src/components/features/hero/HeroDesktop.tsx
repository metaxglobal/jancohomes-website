//Desktop Hero Component - Figma Spec

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, CallingIcon } from "@hugeicons/core-free-icons";

export function HeroDesktop() {
  return (
    <section className="relative w-full bg-[#1A1A1A] overflow-hidden">
      {/* Background Blur Effects - Full Width */}
      <div 
        className="absolute w-[384px] h-[384px] opacity-[0.22] bg-[#7CB342] rounded-full pointer-events-none"
        style={{ 
          left: '51%', 
          top: '80px',
          boxShadow: '128px 128px 128px',
          filter: 'blur(64px)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute w-[320px] h-[320px] opacity-[0.38] bg-[#7CB342] rounded-full pointer-events-none"
        style={{ 
          left: '26%', 
          top: '504px',
          boxShadow: '128px 128px 128px',
          filter: 'blur(64px)'
        }}
        aria-hidden="true"
      />

      {/* Main Content Container - Centered at 1440px with responsive padding */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-[120px] min-h-[860px]">
        
        {/* Content Grid - Left and Right */}
        <div className="relative flex items-center justify-between pt-[154px] pb-[190px]">
          
          {/* Left Content Section */}
          <div className="w-[512px] flex flex-col gap-8">
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
                  <div className="text-white text-[72px] font-medium leading-[64px] tracking-[-0.2rem]">
                    Building the
                  </div>
                  <div className="text-[#7CB342] text-[72px] font-medium leading-[64px] tracking-[-0.2rem]">
                    Future of <br/>Construction
                  </div>
                </div>
                <p className="w-[523px] text-[#C2C2C2] text-xl font-normal leading-5 tracking-[-0.05rem]">
                  With 20 years of excellence, we transform architectural visions into reality through precision engineering and innovative design solutions.
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

            {/* Hero Image (nudged down slightly) */}
            <div className="relative mt-12 left-8">
              <Image
                src="/hero img.png"
                alt="Construction Project"
                width={700}
                height={516}
                className="w-[700px] rounded-xl"
                style={{ height: "auto" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Centered */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
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
