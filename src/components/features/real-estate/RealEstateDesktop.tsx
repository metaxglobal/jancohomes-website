// Desktop Real Estate Component - Using PropertyCard

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import PropertyCard from "../PropertyCard";
import { getAllProperties } from "@/data/properties";

export function RealEstateDesktop() {
  const properties = getAllProperties();
  // Show only first 3 properties on homepage
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="w-full bg-white pt-24 pb-16" id="properties">
      <div className="w-full max-w-[1440px] mx-auto px-[120px]">
        {/* Header */}
        <div className="self-stretch flex flex-col items-center gap-2.5 mb-12">
          <div className="p-2.5 flex items-center justify-center gap-2.5">
            <div className="text-center">
              <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px]">
                Janco{" "}
              </span>
              <span className="text-[#7CB342] text-[72px] font-medium leading-[64px]">
                Real Estate
              </span>
            </div>
          </div>
          <div className="self-stretch p-2.5 flex items-center justify-center gap-2.5">
            <p className="w-[800px] text-center text-[rgba(26,26,26,0.75)] text-base font-medium leading-5">
              Discover exclusive premium properties developed and curated by Janco Home & Construction. Each residence represents our commitment to quality and excellence.
            </p>
          </div>
        </div>

        {/* Property Cards - Single Row */}
        <div className="self-stretch flex items-center gap-5 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="self-stretch h-[115px] border-t border-b border-[#C2C2C2] flex items-center justify-between">
          <div className="w-[576px] h-[84px] flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2.5">
              <h3 className="text-[#1A1A1A] text-2xl font-medium leading-6">
                Explore Our Complete Portfolio
              </h3>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <p className="w-[576px] text-[rgba(26,26,26,0.75)] text-base font-medium leading-5">
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
