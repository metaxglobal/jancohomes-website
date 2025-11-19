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
        <section className="relative h-[240px] w-full overflow-hidden bg-secondary md:hidden">
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
          <div className="relative z-10 flex w-[361px] flex-col gap-4 px-4 pt-12">
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
            <div className="flex flex-col gap-3 pt-4">
              <h1 className="w-[361px] text-[40px] font-medium leading-9 tracking-[-2px]">
                <span className="text-white">Janco </span>
                <span className="text-primary">Real Estate</span>
              </h1>
              <p className="w-[361px] text-[14px] font-medium leading-[14px] text-ash">
                Janco Home & Construction. Each residence represents our
                commitment to quality and excellence.
              </p>
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

        {/* CTA Section */}
                <section className="relative w-full bg-secondary md:hidden">
                  {/* Background Blur Effects */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 h-[156.89px] w-[156.89px] rounded-full bg-primary opacity-10 shadow-[128px_128px_128px]"
                    style={{ filter: "blur(64px)" }}
                  />
                  <div
                    className="pointer-events-none absolute bottom-[-156.89px] left-0 h-[156.89px] w-[156.89px] rounded-full bg-primary opacity-[0.09] shadow-[128px_128px_128px]"
                    style={{ filter: "blur(64px)" }}
                  />
        
                  <div className="relative z-10 flex h-[333px] flex-col items-center justify-center gap-12 px-4">
                    <div className="flex flex-col items-center gap-3">
                      <h2 className="text-center text-[36px] font-medium leading-10 tracking-[-2px] text-white">
                        Ready to Start <span className="text-primary">Your</span>{" "}
                        Project?
                      </h2>
                      <p className="w-[361px] text-center text-[16px] font-medium leading-5 tracking-tight text-ash">
                        Let&apos;s bring your vision to life with our expert
                        construction and design services.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex h-10 items-center gap-2 rounded-[12px] bg-primary px-5 py-[10px] transition-opacity hover:opacity-90"
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
