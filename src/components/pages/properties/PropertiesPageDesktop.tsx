/**
 * Properties Page - Desktop View
 * Full page component for real estate properties on desktop devices
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DesktopNav } from "@/components/features/navigation";
import { FooterDesktop } from "@/components/features/footer";
import ConsultationModalDesktop from "@/components/features/ConsultationModalDesktop";
import PropertyCard from "@/components/features/PropertyCard";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";
import type { Property } from "@/components/features/PropertyCard";

interface PropertiesPageDesktopProps {
  properties: Property[];
}

export function PropertiesPageDesktop({
  properties,
}: PropertiesPageDesktopProps) {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <DesktopNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[0px]">
        {/* Hero Section */}
        <section className="relative h-[454px] w-full overflow-hidden bg-[#1A1A1A]">
          {/* Background Blur Effects */}
          <div
            className="pointer-events-none absolute left-[738.75px] top-[80px] h-[384px] w-[384px] rounded-full bg-[#7CB342] opacity-10 shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />
          <div
            className="pointer-events-none absolute left-[78px] top-[304px] h-[320px] w-[320px] rounded-full bg-[#7CB342] opacity-25 shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-[120px] pt-[202px]">
            {/* Breadcrumb */}
            <div className="flex h-5 items-center gap-2">
              <Link
                href="/"
                className="flex items-center gap-1 transition-opacity hover:opacity-80"
              >
                <HugeiconsIcon
                  icon={Home01Icon}
                  size={16}
                  color="#C2C2C2"
                  strokeWidth={1}
                />
                <span className="text-[14px] font-normal leading-[14px] text-ash">
                  Home
                </span>
              </Link>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                color="white"
                strokeWidth={1.5}
              />
              <span className="text-[14px] font-normal leading-[14px] text-white">
                Real Estate
              </span>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-6">
              <h1 className="text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
                <span className="text-white">Janco </span>
                <span className="text-[#7CB342]">Real Estate</span>
              </h1>
              <p className="w-[760px] text-[16px] font-medium leading-5 tracking-tight text-ash">
                Discover exclusive premium properties developed and curated by
                Janco Home & Construction. Each residence represents our
                commitment to quality and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Properties Grid Section */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-[120px] pb-24 pt-16">
          {/* First Row */}
          <div className="flex items-center justify-start gap-5">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Second Row */}
          {properties.length > 3 && (
            <div className="flex items-center justify-start gap-5">
              {properties.slice(3, 6).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          {/* Additional Rows if needed */}
          {properties.length > 6 && (
            <div className="flex items-center justify-start gap-5">
              {properties.slice(6, 9).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="relative w-full bg-[#1A1A1A] overflow-hidden">
          {/* Background Blur Effects */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[319.13px] w-[319.13px] rounded-full bg-[#7CB342] opacity-10 shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-[319.13px] w-[319.13px] rounded-full bg-[#7CB342] opacity-[0.09] shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />

          <div className="relative z-10 mx-auto flex h-[376px] w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-[120px]">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-center text-[56px] font-medium leading-10 tracking-[-0.2rem]">
                <span className="text-white">Ready to Start </span>
                <span className="text-[#7CB342]">Your</span>
                <span className="text-white"> Project?</span>
              </h2>
              <p className="text-center text-[16px] font-medium leading-5 tracking-tight text-ash">
                Let&apos;s bring your vision to life with our expert
                construction and design services.
              </p>
            </div>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="flex h-12 items-center gap-2 rounded-[12px] bg-[#7CB342] px-5 py-[10px] transition-opacity hover:opacity-90"
            >
              <span className="text-[16px] font-medium leading-5 text-white">
                Talk to our Expert
              </span>
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="white"
                strokeWidth={2}
              />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <FooterDesktop />
      </footer>

      {/* Consultation Modal */}
      <ConsultationModalDesktop
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
}
