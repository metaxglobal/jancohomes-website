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
      <div className="absolute inset-0 px-10 flex items-end justify-center pb-12 px-4">
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
      <div className="w-full max-w-[1440px] mx-auto px-[120px]">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center gap-2.5 mb-12">
          {/* Label */}
          <div className="self-stretch text-center text-[#7CB342] text-xl font-normal leading-5 tracking-[-0.05rem]">
            OUR SERVICES
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
            With our proven track record of excellence, we are committed to
            creating strategic and innovative designing and construction
            solutions for our clients that match their unique lifestyles. As Sri
            Lanka&apos;s number 1 choice for the construction service provider,
            our services are executed to exceed the expectations of the clients.
          </p>
        </div>

        {/* Masonry Layout - 4 Columns with exact heights */}
        <div className="flex items-start justify-start gap-6">
          {/* Column 1 - Width 285px */}
          <div className="w-[285px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/Architectural Designing.png"
              title="Architectural Designing"
              height={320}
            />
            <ServiceCard
              imagePath="/services/Structural Designing.png"
              title="Structural Designing"
              height={360}
            />
          </div>

          {/* Column 2 - Width 285px */}
          <div className="w-[285px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/Quantity Surveying.png"
              title="Quantity Surveying"
              height={380}
            />
            <ServiceCard
              imagePath="/services/Interior Designing.png"
              title="Interior Designing"
              height={380}
            />
          </div>

          {/* Column 3 - Width 285px */}
          <div className="w-[285px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/Renovation.png"
              title="Renovation"
              height={370}
            />
            <ServiceCard
              imagePath="/services/Construction.png"
              title="Construction"
              height={340}
            />
          </div>

          {/* Column 4 - Width 282px */}
          <div className="w-[282px] flex flex-col gap-6">
            <ServiceCard
              imagePath="/services/Land Development.png"
              title="Land Development"
              height={390}
            />
            <ServiceCard
              imagePath="/services/Surveying.png"
              title="Surveying"
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
