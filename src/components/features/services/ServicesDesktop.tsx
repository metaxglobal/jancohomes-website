// Desktop Services Component - Refined

import Image from "next/image";

interface ServiceCardProps {
  imagePath: string;
  title: string;
  height: number;
}

function ServiceCard({ imagePath, title, height }: ServiceCardProps) {
  return (
    <div 
      className="relative w-full overflow-hidden rounded-[22px] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] group" 
      style={{ height: `${height}px` }}
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
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-[120px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 mb-12">
          {/* Label */}
          <div className="self-stretch text-center text-[#7CB342] text-xl font-normal leading-5 tracking-[-0.05rem]">
            COMPREHENSIVE SERVICES
          </div>

          {/* Title */}
          <div className="self-stretch text-center">
            <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
              What We{" "}
            </span>
            <span className="text-[#7CB342] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
              Do
            </span>
          </div>

          {/* Description */}
          <p className="self-stretch text-center text-[rgba(26,26,26,0.75)] text-base font-medium leading-5 tracking-[-0.04rem]">
            Janco Home & Construction offers end-to-end building solutions that eliminate the stress of coordinating multiple contractors.
            From initial concept to final key handover, we manage every aspect of your construction project with seamless integration and professional oversight.
          </p>
        </div>

        {/* Masonry Layout - 4 Columns with exact heights */}
        <div className="flex items-start justify-start gap-6">
          {/* Column 1 - Width 285px */}
          <div className="w-[285px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/house constructions-min.jpg"
              title="Residential House Construction"
              height={320}
            />
            <ServiceCard
                imagePath="/services/commercial construction.jpg"
                title="Commercial Building Construction"
              height={360}
            />
          </div>
          {/* Column 2 - Width 285px */}
          <div className="w-[285px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/architec design.jpg"
              title="Architectural Design "
              height={380}
            />
            <ServiceCard
              imagePath="/services/interior design.jpg"
              title="Interior Design "
              height={380}
            />
          </div>

          {/* Column 3 - Width 285px */}
          <div className="w-[285px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/renovation.jpg"
              title="Renovation & Extension "
              height={370}
            />
            <ServiceCard
              imagePath="/services/commercial renovation.jpg"
              title="Commercial Renovations"
              height={340}
            />
          </div>

          {/* Column 4 - Width 282px */}
          <div className="w-[282px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/pm.jpg"
              title="Project management"
              height={390}
            />
            <ServiceCard
              imagePath="/services/approvals.jpg"
              title="Approvals & Documentation"
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
