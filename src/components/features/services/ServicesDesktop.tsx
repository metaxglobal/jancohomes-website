// Desktop Services Component

import Image from "next/image";

interface ServiceCardDesktopProps {
  imagePath: string;
  title: string;
  height: number;
}

function ServiceCardDesktop({ imagePath, title, height }: ServiceCardDesktopProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[22px]"
      style={{
        width: "285px",
        height: `${height}px`,
        background: "rgba(255, 255, 255, 0)",
        boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
      }}
    >
      {/* Background Image */}
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover"
        sizes="285px"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.7,
          background:
            "linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0.75) 27%, rgba(0, 0, 0, 0.50) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Text Content */}
      <div
        className="absolute left-0 w-[285px] pt-8 flex flex-col items-start justify-start gap-8"
        style={{
          height: "110px",
          bottom: 0,
        }}
      >
        <div className="w-[285px] flex items-center justify-center gap-2.5">
          <div className="w-[155px] text-center text-white text-2xl font-medium leading-6">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesDesktop() {
  return (
    <div className="hidden lg:flex w-full pt-24 pb-16 flex-col items-center justify-start gap-12" id="services">
      {/* Header Section */}
      <div className="self-stretch px-[120px] flex flex-col items-center justify-start gap-2.5">
        {/* Label */}
        <div className="self-stretch text-center text-primary text-xl font-normal leading-5">
          OUR SERVICES
        </div>

        {/* Title */}
        <div className="self-stretch text-center">
          <span className="text-secondary text-[72px] font-medium leading-[64px]">
            What We{" "}
          </span>
          <span className="text-primary text-[72px] font-medium leading-[64px]">
            Do
          </span>
        </div>

        {/* Description */}
        <div className="self-stretch text-center text-secondary/75 text-base font-medium leading-5">
          With our proven track record of excellence, we are committed to
          creating strategic and innovative designing and construction
          solutions for our clients that match their unique lifestyles. As Sri
          Lanka&apos;s number 1 choice for the construction service provider,
          our services are executed to exceed the expectations of the clients.
        </div>
      </div>

      {/* Masonry Layout - 4 Columns */}
      <div className="flex items-start justify-center gap-6">
        {/* Column 1 */}
        <div className="w-[285px] flex flex-col items-start justify-start gap-6">
          <ServiceCardDesktop
            imagePath="/services/Architectural Designing.png"
            title="Architectural Designing"
            height={320}
          />
          <ServiceCardDesktop
            imagePath="/services/Structural Designing.png"
            title="Structural Designing"
            height={360}
          />
        </div>

        {/* Column 2 */}
        <div className="w-[285px] flex flex-col items-start justify-start gap-6">
          <ServiceCardDesktop
            imagePath="/services/Quantity Surveying.png"
            title="Quantity Surveying"
            height={380}
          />
          <ServiceCardDesktop
            imagePath="/services/Interior Designing.png"
            title="Interior Designing"
            height={400}
          />
        </div>

        {/* Column 3 */}
        <div className="w-[285px] flex flex-col items-start justify-start gap-6">
          <ServiceCardDesktop
            imagePath="/services/Renovation.png"
            title="Renovation"
            height={370}
          />
          <ServiceCardDesktop
            imagePath="/services/Construction.png"
            title="Construction"
            height={340}
          />
        </div>

        {/* Column 4 */}
        <div className="w-[282px] flex flex-col items-start justify-start gap-6">
          <ServiceCardDesktop
            imagePath="/services/Land Development.png"
            title="Land Development"
            height={390}
          />
          <ServiceCardDesktop
            imagePath="/services/Surveying.png"
            title="Surveying"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
