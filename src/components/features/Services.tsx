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
          <div className="w-[155px] text-center text-white text-[22px] font-medium leading-6">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <div className="w-full py-[72px] px-4">
      <div className="w-full max-w-[393px] mx-auto flex flex-col items-center justify-start gap-8">
      {/* Text Section */}
      <div className="self-stretch flex flex-col items-center justify-start gap-2">
        {/* Label */}
        <div className="self-stretch text-center text-primary text-base font-normal leading-5">
          OUR SERVICES
        </div>

        {/* Heading and Description */}
        <div className="self-stretch flex flex-col items-center justify-start gap-3">
          {/* Title */}
          <div className="self-stretch text-center">
            <span className="text-secondary text-[40px] font-medium leading-9">
              What We{" "}
            </span>
            <span className="text-primary text-[40px] font-medium leading-9">
              Do
            </span>
          </div>

          {/* Description */}
          <div className="self-stretch text-center text-secondary/75 text-sm font-normal leading-[14px]">
            With our proven track record of excellence, we are committed to
            creating strategic and innovative designing and construction
            solutions for our clients that match their unique lifestyles.
            <br />
            As Sri Lanka&apos;s number 1 choice for the construction service
            provider, our services are executed to exceed the expectations of
            the clients.
          </div>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        {/* Row 1 */}
        <div className="self-stretch inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/Architectural Designing.png"
            title="Architectural Designing"
          />
          <ServiceCard
            imagePath="/services/Quantity Surveying.png"
            title="Quantity Surveying"
          />
        </div>

        {/* Row 2 */}
        <div className="self-stretch inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/Renovation.png"
            title="Renovation"
          />
          <ServiceCard
            imagePath="/services/Land Development.png"
            title="Land Development"
          />
        </div>

        {/* Row 3 */}
        <div className="self-stretch inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/Structural Designing.png"
            title="Structural Designing"
          />
          <ServiceCard
            imagePath="/services/Interior Designing.png"
            title="Interior Designing"
          />
        </div>

        {/* Row 4 */}
        <div className="self-stretch h-[210px] inline-flex items-start justify-between gap-5">
          <ServiceCard
            imagePath="/services/Construction.png"
            title="Construction"
          />
          <ServiceCard imagePath="/services/Surveying.png" title="Surveying" />
        </div>
      </div>
    </div>
    </div>
  );
}
