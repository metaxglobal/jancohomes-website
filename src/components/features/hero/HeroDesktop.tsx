//Desktop Hero Component


import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon, CallingIcon } from "@hugeicons/core-free-icons";

export function HeroDesktop() {
  return (
    <section className="hidden lg:block relative w-full bg-secondary overflow-hidden">
      {/* Container wrapper - max 1440px centered */}
      <div className="relative w-full max-w-[1440px] mx-auto h-[860px]">
            {/* Background Blur Effects */}
            <div
            className="absolute w-96 h-96 left-[738.75px] top-20 opacity-22 bg-primary rounded-full blur-[64px]"
            style={{
                boxShadow: "128px 128px 128px",
            }}
            />
            <div
            className="absolute w-80 h-80 left-[374.25px] top-[504px] opacity-38 bg-primary rounded-full blur-[64px]"
            style={{
                boxShadow: "128px 128px 128px",
            }}
            />

            {/* Scroll Indicator */}
            <div className="absolute left-[690px] top-[726px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-0.5">
                <div className="p-2.5 flex items-center justify-center">
                <span className="text-primary text-sm font-normal uppercase leading-4">
                    Scroll
                </span>
                </div>
                <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center pt-[4.5px]">
                <div className="w-1 h-1.5 bg-primary rounded-full" />
                </div>
            </div>
            </div>

            {/* Main Content Container */}
            <div className="absolute left-[120px] top-[254px] w-[512px] flex flex-col gap-8">
            {/* Content Section */}
            <div className="flex flex-col gap-6">
                {/* Badge */}
                <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl w-fit"
                style={{
                    background: "rgba(255, 255, 255, 0.10)",
                    outline: "1px rgba(255, 255, 255, 0.20) solid",
                    outlineOffset: "-1px",
                }}
                >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-primary text-sm font-normal uppercase leading-4">
                    Premium Construction Services
                </span>
                </div>

                {/* Heading & Description */}
                <div className="flex flex-col gap-5">
                <h1 className="text-[72px] font-medium leading-[64px]">
                    <span className="text-white">Building the</span>
                    <br />
                    <span className="text-primary">
                    Future of
                    <br />
                    Construction
                    </span>
                </h1>
                <p className="w-[523px] text-ash text-xl font-normal leading-5">
                    With 20 years of excellence, we transform architectural visions
                    into reality through precision engineering and innovative design
                    solutions.
                </p>
                </div>
            </div>

            {/* CTA Button */}
            <Link
                href="#projects"
                className="h-12 px-5 py-2.5 bg-primary rounded-xl inline-flex items-center gap-2 w-fit hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            >
                <span className="text-white text-base font-medium leading-5">
                View Our Projects
                </span>
                <div className="w-5 h-5 relative">
                <HugeiconsIcon
                    icon={ArrowDownRight01Icon}
                    className="w-5 h-5 text-white"
                    strokeWidth={1.5}
                />
                </div>
            </Link>
            </div>

            {/* Hero Image - Responsive without fixed container */}
            <div className="absolute left-[719px] top-[250px] right-[120px]">
            <Image
                src="/mobile hero img.png"
                alt="Janco Construction Project"
                width={601}
                height={416}
                className="w-full h-auto object-contain rounded-xl"
                priority
            />
            </div>

            
        
            
      </div>
    </section>
  );
}
