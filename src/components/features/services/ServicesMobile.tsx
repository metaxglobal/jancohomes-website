import Image from "next/image";

interface ServiceCardProps {
  imagePath: string;
  title: string;
}

function ServiceCard({ imagePath, title }: ServiceCardProps) {
  return (
    <div
      className="flex-1 relative overflow-hidden rounded-[22px]"
      style={{
        height: "210px",
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
        sizes="171px"
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
        className="absolute left-0 bottom-0 w-full pt-8 inline-flex flex-col items-start justify-start gap-8"
        style={{
          height: "110px",
        }}
      >
        <div className="self-stretch inline-flex items-center justify-center gap-2.5">
          <div className="w-[150px] text-center text-white text-[16px] font-medium leading-6 tracking-tight">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesMobile() {
  return (
    <div className="w-full py-[72px] px-4">
      <div className="w-full max-w-[361px] sm:max-w-[500px] md:max-w-[600px] mx-auto flex flex-col items-center justify-start gap-8">
      {/* Text Section */}
      <div className="w-full flex flex-col items-center justify-start gap-2">
        {/* Label */}
        <div className="self-stretch text-center text-primary text-base font-normal leading-5">
          COMPREHENSIVE SERVICES
        </div>

        {/* Heading and Description */}
        <div className="self-stretch flex flex-col items-center justify-start gap-3">
          {/* Title */}
          <div className="self-stretch text-center">
            <span className="text-secondary text-[40px] font-medium leading-9 tracking-[-2px]">
              What We{" "}
            </span>
            <span className="text-primary text-[40px] font-medium leading-9 tracking-[-2px]">
              Do
            </span>
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
            Janco Home & Construction offers end-to-end building solutions that eliminate the stress of coordinating multiple contractors.
            From initial concept to final key handover, we manage every aspect of your construction project.
          </div>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        {/* Row 1 */}
        <div className="self-stretch inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/house constructions-min.jpg"
            title="Residential House Construction"
          />
          <ServiceCard
            imagePath="/services/commercial construction.jpg"
            title="Commercial Building Construction"
          />
        </div>

        {/* Row 2 */}
        <div className="self-stretch inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/architec design.jpg"
            title="Architectural Design"
          />
          <ServiceCard
            imagePath="/services/interior design.jpg"
            title="Interior Design"
          />
        </div>

        {/* Row 3 */}
        <div className="self-stretch inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/renovation.jpg"
            title="Renovation & Extension"
          />
          <ServiceCard
            imagePath="/services/commercial renovation.jpg"
            title="Commercial Renovations"
          />
        </div>

        {/* Row 4 */}
        <div className="self-stretch h-[210px] inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/pm.jpg"
            title="Project Management"
          />
          <ServiceCard 
            imagePath="/services/approvals.jpg" 
            title="Approvals & Documentation" 
          />
        </div>
      </div>
    </div>
    </div>
  );
}
