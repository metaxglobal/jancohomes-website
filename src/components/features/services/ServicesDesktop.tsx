// Desktop Services Component - Refined

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceCardProps {
  imagePath: string;
  title: string;
  desktopHeight: number; // Height for 1440px+ masonry layout
}

function ServiceCard({ imagePath, title, desktopHeight }: ServiceCardProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-[22px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] group" 
      style={{ height: isLargeScreen ? `${desktopHeight}px` : '280px' }}
    >
      {/* Background Image */}
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          opacity: 0.7,
          background: "linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.75) 27%, rgba(0, 0, 0, 0.50) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Title - Bottom Aligned */}
      <div className="absolute inset-0 px-6 flex items-end justify-center pb-12 px-4">
        <span className="text-white text-2xl font-medium leading-6 text-center">
          {title}
        </span>
      </div>
    </div>
  );
}

export function ServicesDesktop() {
  return (
    <section className="w-full bg-white pt-24 pb-16">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-[120px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 mb-12">
          {/* Label */}
          <div className="self-stretch text-center text-[#7CB342] text-xl font-normal leading-5 tracking-[-0.05rem]">
            COMPREHENSIVE SERVICES
          </div>

          {/* Title */}
          <div className="self-stretch text-center">
            <span className="text-[#1A1A1A] text-[48px] 2xl:text-[72px] font-medium leading-[48px] 2xl:leading-[64px] tracking-[-0.2rem] 2xl:tracking-[-0.3rem]">
              What We{" "}
            </span>
            <span className="text-[#7CB342] text-[48px] 2xl:text-[72px] font-medium leading-[48px] 2xl:leading-[64px] tracking-[-0.2rem] 2xl:tracking-[-0.3rem]">
              Do
            </span>
          </div>

          {/* Description */}
          <p className="self-stretch text-center text-[rgba(26,26,26,0.75)] text-base font-medium leading-5 tracking-[-0.04rem]">
            Janco Home & Construction offers end-to-end building solutions that eliminate the stress of coordinating multiple contractors.
            From initial concept to final key handover, we manage every aspect of your construction project with seamless integration and professional oversight.
          </p>
        </div>

        {/* Grid Layout - 2 Columns with equal heights until 1440px, then 4 Column Masonry */}
        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-6 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/house constructions-min.jpg"
              title="Residential House Construction"
              desktopHeight={320}
            />
            <ServiceCard
                imagePath="/services/commercial construction.jpg"
                title="Commercial Building Construction"
              desktopHeight={360}
            />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/architec design.jpg"
              title="Architectural Design "
              desktopHeight={380}
            />
            <ServiceCard
              imagePath="/services/interior design.jpg"
              title="Interior Design "
              desktopHeight={380}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/renovation.jpg"
              title="Renovation & Extension "
              desktopHeight={370}
            />
            <ServiceCard
              imagePath="/services/commercial renovation.jpg"
              title="Commercial Renovations"
              desktopHeight={340}
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/pm.jpg"
              title="Project management"
              desktopHeight={390}
            />
            <ServiceCard
              imagePath="/services/approvals.jpg"
              title="Approvals & Documentation"
              desktopHeight={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
