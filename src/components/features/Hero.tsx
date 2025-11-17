import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-secondary overflow-hidden">
      {/* Background Blur Effects */}
      <div
        className="absolute w-[222px] h-[222px] left-[161px] top-[332px] opacity-22 bg-primary rounded-full blur-[64px]"
        style={{
          boxShadow: "128px 128px 128px",
        }}
      />
      <div
        className="absolute w-[320px] h-[320px] left-[-72px] top-[-102px] opacity-[0.13] bg-primary rounded-full blur-[64px]"
        style={{
          boxShadow: "128px 128px 128px",
        }}
      />

      {/* Main Content */}
      <div className="relative w-full max-w-[393px] mx-auto pt-[144px] pb-[64px] flex flex-col items-start justify-start gap-8">
        {/* Top Section */}
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          {/* Badge */}
          <div
            className="inline-flex items-center justify-start gap-2 px-5 py-[10px] rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.10)",
              outline: "1px rgba(255, 255, 255, 0.20) solid",
              outlineOffset: "-1px",
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="flex flex-col justify-center text-primary text-sm font-normal uppercase leading-4">
              Premium Construction Services
            </div>
          </div>

          {/* Hero Image and Text */}
          <div className="self-stretch inline-flex flex-col items-start justify-start gap-3">
            {/* Hero Image */}
            <Image
              src="/mobile hero img.png"
              alt="Janco Construction Project"
              width={299}
              height={212}
              className="w-[299px] h-[212px]"
              priority
            />

            {/* Main Heading */}
            <div className="self-stretch">
              <span className="text-white text-[40px] font-medium leading-9">
                Building the{" "}
              </span>
              <span className="text-primary text-[40px] font-medium leading-9">
                Future of
                <br />
                Construction
              </span>
            </div>

            {/* Description */}
            <div className="self-stretch text-ash text-sm font-medium leading-[14px]">
              With 20 years of excellence, we transform architectural visions
              into reality through precision engineering and innovative design
              solutions.
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 px-5 py-[10px] bg-primary rounded-xl">
          <div className="flex items-center justify-start gap-2">
            <div className="text-white text-base font-medium leading-5">
              View Our Projects
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
        </button>
      </div>
    </div>
  );
}
