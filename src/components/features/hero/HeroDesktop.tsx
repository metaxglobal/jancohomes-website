/**
 * Desktop Hero Component
 * 
 * This component will display the hero section for desktop screens >= 1024px (lg breakpoint)
 * Will be implemented based on Figma desktop design
 */

import Image from "next/image";
import Link from "next/link";

export function HeroDesktop() {
  return (
    <section className="hidden lg:block relative w-full min-h-screen bg-secondary overflow-hidden">
      {/* Background effects will be added based on Figma design */}
      
      <div className="container mx-auto px-12 xl:px-16 py-24">
        <div className="grid grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div
              className="inline-flex items-center justify-start gap-2 px-6 py-3 rounded-xl w-fit"
              style={{
                background: "rgba(255, 255, 255, 0.10)",
                outline: "1px rgba(255, 255, 255, 0.20) solid",
                outlineOffset: "-1px",
              }}
            >
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Premium Construction Services
              </span>
            </div>

            {/* Heading - Will be styled based on Figma */}
            <h1 className="text-6xl xl:text-7xl font-bold text-white leading-tight">
              Building the Future of{" "}
              <span className="text-primary">Construction</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              We bring your vision to life with premium construction services,
              innovative designs, and unparalleled craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-6">
              <Link
                href="#contact"
                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            {/* Placeholder - will add actual design from Figma */}
            <div className="w-full aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
              <span className="text-white/50 text-lg">
                Hero Image - From Figma Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
