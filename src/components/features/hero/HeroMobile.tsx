import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";

export function HeroMobile() {
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
        className="absolute w-[320px] h-[320px] left-[-72px] top-[-60px] opacity-[0.13] bg-primary rounded-full blur-[64px]"
        style={{
          boxShadow: "128px 128px 128px",
        }}
      />

      {/* Main Content */}
      <div className="absolute inset-x-0 left-0 right-0 top-[144px] px-4 flex flex-col items-start justify-start gap-8">
        <div className="w-full max-w-[361px] mx-auto flex flex-col items-center justify-start gap-6">
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
          <div className="w-full flex flex-col items-center justify-start gap-3">
            {/* Hero Image */}
            <div className="flex w-full items-center justify-center">
              <Image
                src="/mobile hero img.png"
                alt="Janco Construction Project"
                width={299}
                height={212}
                className="w-[299px] h-[212px]"
                priority
              />
            </div>

            {/* Main Heading */}
            <div className="self-stretch">
              <span className="text-white text-[40px] font-medium leading-9 tracking-[-3px]">
                Building the{" "}
              </span>
              <span className="text-primary text-[40px] font-medium leading-9 tracking-[-3px]">
                Future of
              </span>
              <br />
              <span className="text-primary text-[40px] font-medium leading-9 tracking-[-3px]">
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
        <Link href="/projects" className="inline-flex items-center justify-center gap-2 px-5 py-[10px] bg-primary rounded-xl">
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
        </Link>
      </div>
    </div>
  );
}
