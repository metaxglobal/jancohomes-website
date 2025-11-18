import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import PropertyCard from "./PropertyCard";
import { getAllProperties } from "@/data/properties";

export function RealEstate() {
  const properties = getAllProperties();

  return (
    <div className="w-full pt-[72px] pb-[64px] px-4">
      <div className="w-full max-w-[393px] mx-auto flex flex-col items-start justify-start gap-8">
        {/* Header Section */}
        <div className="self-stretch flex flex-col items-center justify-start gap-3">
          <div className="self-stretch inline-flex items-center justify-center gap-2.5">
            <div className="text-center">
              <span className="text-secondary text-[40px] font-medium leading-9 tracking-[-2px]">
                Janco{" "}
              </span>
              <span className="text-primary text-[40px] font-medium leading-9 tracking-[-2px]">
                Real Estate
              </span>
            </div>
          </div>
          <div className="self-stretch px-2.5 inline-flex items-center justify-center gap-2.5">
            <div className="w-[361px] text-center text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
              Discover exclusive premium properties developed and curated by Janco
              Home & Construction. Each residence represents our commitment to
              quality and excellence.
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div className="w-[361px] flex flex-col items-center justify-start gap-5">
          <div className="self-stretch flex flex-col items-center justify-start gap-5">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="self-stretch py-4 border-t border-b border-ash flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="inline-flex items-center justify-center gap-2.5">
              <div className="text-secondary text-[22px] font-medium leading-6">
                Explore Our Complete Portfolio
              </div>
            </div>
            <div className="self-stretch inline-flex items-center justify-start gap-2.5">
              <div className="w-[361px] text-secondary/75 text-sm leading-[14px]" style={{ fontWeight: 400 }}>
                Browse through our extensive collection of premium properties.
                From luxury villas to modern apartments, find your dream home with
                Janco Real Estate.
              </div>
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/properties"
            className="px-5 py-[10px] bg-secondary rounded-xl inline-flex items-center justify-center gap-2"
          >
            <div className="flex items-center justify-start gap-2">
              <div className="text-white text-base font-medium leading-5">
                View All Properties
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowDownRight01Icon}
                  size={20}
                  color="white"
                  strokeWidth={2}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
