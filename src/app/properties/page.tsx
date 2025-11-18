"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/MobileNav";
import PropertyCard from "@/components/features/PropertyCard";
import ConsultationModal from "@/components/features/ConsultationModal";
import Footer from "@/components/features/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";
import { getAllProperties } from "@/data/properties";

export default function PropertiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get properties from centralized data
  const properties = getAllProperties();

  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 md:hidden">
        <MobileNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[112px]">
        {/* Hero Section with Dark Background */}
        <section className="relative h-[340px] w-full overflow-hidden bg-secondary md:hidden">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[259px] top-[233px] h-[134px] w-[134px] rounded-full bg-primary opacity-30"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[-18px] top-[80px] h-[128px] w-[128px] rounded-full bg-primary opacity-25"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[326px] top-[70px] h-[67px] w-[67px] rounded-full bg-primary opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />

          {/* Hero Content */}
          <div className="absolute left-4 top-[144px] w-[361px] inline-flex flex-col items-start justify-start gap-8">
            {/* Breadcrumb */}
            <div className="self-stretch h-5 inline-flex items-center justify-start gap-2">
              <Link href="/" className="flex items-center justify-start gap-1">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Home01Icon}
                    size={16}
                    color="#C2C2C2"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-ash text-sm font-normal leading-[14px]">
                  Home
                </div>
              </Link>
              <div className="w-4 h-4 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex items-center justify-start gap-1">
                <div className="text-white text-sm font-normal leading-[14px]">
                  Real Estate
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px]">
                  <span className="text-white text-[40px] font-medium leading-9">
                    Janco{" "}
                  </span>
                  <span className="text-primary text-[40px] font-medium leading-9">
                    Real Estate
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px] text-ash text-sm font-medium leading-[14px]">
                  Discover exclusive premium properties developed and curated by
                  Janco Home & Construction. Each residence represents our
                  commitment to quality and excellence.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section className="w-full px-4 pt-12 pb-12 flex flex-col items-start justify-start gap-5">
          <div className="self-stretch flex flex-col items-center justify-start gap-5">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* CTA Section - Talk to our Expert */}
        <section className="w-full bg-secondary flex flex-col items-start justify-center gap-2.5">
          <div className="self-stretch px-4 flex flex-col items-center justify-center gap-12 py-[84px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-3">
              <div className="self-stretch text-center">
                <span className="text-white text-4xl font-medium leading-10">
                  Ready to Start{" "}
                </span>
                <span className="text-primary text-4xl font-medium leading-10">
                  Your
                </span>
                <span className="text-white text-4xl font-medium leading-10">
                  {" "}
                  Project?
                </span>
              </div>
              <div className="self-stretch inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px] text-center text-ash text-base font-medium leading-5">
                  Let&apos;s bring your vision to life with our expert
                  construction and design services.
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="h-10 px-5 py-[10px] bg-primary rounded-xl inline-flex items-center justify-center gap-2"
            >
              <div className="flex items-center justify-start gap-2">
                <div className="text-white text-base font-medium leading-5">
                  Talk to our Expert
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

          {/* Background Blur Effects */}
          <div
            className="w-[156.89px] h-[156.89px] rounded-full bg-primary opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="w-[156.89px] h-[156.89px] rounded-full bg-primary opacity-[0.09]"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
