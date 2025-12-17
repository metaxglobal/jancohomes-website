// Desktop Real Estate Component - Using PropertyCardDesktop

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import PropertyCardDesktop from "../PropertyCardDesktop";
import { getAllProperties } from "@/data/properties";

export function RealEstateDesktop() {
  const properties = getAllProperties();
  // Show only first 3 properties on homepage
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="w-full bg-white pt-24 pb-16" id="properties">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-[120px]">
        {/* Header */}
        <div className="self-stretch flex flex-col items-center gap-2.5 mb-12">
          <div className="p-2.5 flex items-center justify-center gap-2.5">
            <div className="text-center">
              <span className="text-[#1A1A1A] text-[48px] 2xl:text-[72px] font-medium leading-[48px] 2xl:leading-[64px] tracking-[-0.2rem] 2xl:tracking-[-0.3rem]">
                Janco{" "}
              </span>
              <span className="text-[#7CB342] text-[48px] 2xl:text-[72px] font-medium leading-[48px] 2xl:leading-[64px] tracking-[-0.2rem] 2xl:tracking-[-0.3rem]">
                Real Estate
              </span>
            </div>
          </div>
          <div className="self-stretch p-2.5 flex items-center justify-center gap-2.5">
            <p className="max-w-[800px] text-center text-[rgba(26,26,26,0.75)] text-sm lg:text-base font-medium leading-5 tracking-[-0.04rem]">
              Discover exclusive premium properties developed and curated by Janco Home & Construction. Each residence represents our commitment to quality and excellence.
            </p>
          </div>
        </div>

        {/* Property Cards - Single Row */}
        <div className="self-stretch flex flex-wrap justify-center items-center gap-5 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCardDesktop key={property.id} property={property} />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="self-stretch min-h-[115px] py-4 border-t border-b border-[#C2C2C2] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1 max-w-[576px] flex flex-col gap-3">
            <div className="flex items-start justify-start gap-2.5">
              <h3 className="text-[#1A1A1A] text-xl lg:text-2xl font-medium leading-6 tracking-[-0.04rem] text-left">
          Explore Our Complete Portfolio
              </h3>
            </div>
            <div className="flex items-start justify-start gap-2.5">
              <p className="text-[rgba(26,26,26,0.75)] text-sm lg:text-base font-medium leading-5 tracking-[-0.04rem] text-left">
          Browse through our extensive collection of premium properties. From luxury villas to modern apartments, find your dream home with Janco Real Estate.
              </p>
            </div>
          </div>
          <Link
            href="/properties"
            className="h-12 px-5 py-2.5 bg-[#1A1A1A] rounded-xl flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-white text-base font-medium leading-5">
          View All Properties
              </span>
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
    </section>
  );
}
