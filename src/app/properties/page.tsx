"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/features/MobileNav";
import ConsultationModal from "@/components/features/ConsultationModal";
import Footer from "@/components/features/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
  Location05Icon,
  BedIcon,
  Toilet01Icon,
  GridViewIcon,
} from "@hugeicons/core-free-icons";

interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  images: string[];
  whatsappNumber: string;
  whatsappMessage: string;
}

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      property.whatsappMessage ||
        `Hi, I'm interested in ${property.title} located in ${property.location}. Could you please provide more details?`
    );
    const whatsappUrl = `https://wa.me/${property.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="w-[361px] rounded-[22px] inline-flex flex-col items-start justify-start"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Property Image */}
      <div className="self-stretch h-[296px] relative overflow-hidden rounded-t-[22px]">
        <div className="w-[361px] h-[296px] absolute left-0 top-0">
          <Image
            src={property.images[0]}
            alt={property.title}
            width={361}
            height={296}
            className="w-[361px] h-[296px] absolute left-0 top-0 object-cover"
          />
          {/* Gradient Overlay */}
          <div
            className="w-[361px] h-[296px] absolute left-0 top-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.35) 100%)",
            }}
          />

          {/* Image Pagination Dots */}
          <div className="h-[30px] absolute left-[153px] top-[266px] inline-flex items-center justify-start gap-2">
            <div className="w-4 h-4 p-[3px] bg-white rounded-lg flex items-center justify-start gap-2.5">
              <div
                className="w-2.5 h-2.5 bg-white rounded-full border border-ash"
                style={{
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.50)",
                }}
              />
            </div>
            <div className="w-3 h-3 p-[3px] bg-ash rounded-lg" />
            <div className="w-3 h-3 p-[3px] bg-ash rounded-lg" />
          </div>

          {/* Price Badge */}
          <div
            className="w-[101px] h-[68px] absolute left-[244px] top-4 bg-white rounded-[11px] inline-flex flex-col items-center justify-center"
            style={{
              boxShadow: "0px 0px 3.5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="text-secondary text-sm font-normal leading-[14px]">
              from
            </div>
            <div className="text-secondary text-base font-medium leading-5">
              {property.price}
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="self-stretch p-5 bg-white rounded-b-[22px] flex flex-col items-center justify-center gap-[18px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              {/* Title */}
              <div className="self-stretch inline-flex items-center justify-start gap-2.5">
                <div className="text-secondary text-[22px] font-medium leading-6">
                  {property.title}
                </div>
              </div>

              {/* Location */}
              <div className="inline-flex items-center justify-start gap-1">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Location05Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="text-secondary text-sm font-medium leading-[14px]">
                  {property.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="self-stretch inline-flex items-center justify-start gap-2.5">
              <div className="w-[321px] text-secondary/75 text-sm font-normal leading-[14px]">
                {property.description}
              </div>
            </div>
          </div>

          {/* Features (Bedrooms, Bathrooms, Sqft) */}
          <div className="self-stretch h-8 border-b border-ash inline-flex items-center justify-start gap-4">
            {/* Bedrooms */}
            <div className="w-[29.05px] h-5 flex items-center justify-start gap-1">
              <div className="w-[29px] flex items-center justify-between">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={BedIcon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-secondary text-sm font-normal leading-[14px]">
                  {property.bedrooms}
                </div>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="w-[29.05px] h-5 flex items-center justify-start gap-1">
              <div className="w-[29px] flex items-center justify-between">
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Toilet01Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-secondary text-sm font-normal leading-[14px]">
                  {property.bathrooms}
                </div>
              </div>
            </div>

            {/* Square Feet */}
            <div className="flex items-center justify-start gap-1">
              <div className="w-4 h-4 relative">
                <HugeiconsIcon
                  icon={GridViewIcon}
                  size={16}
                  color="#7CB342"
                  strokeWidth={1}
                />
              </div>
              <div className="text-secondary text-sm font-normal leading-[14px]">
                {property.sqft} sq ft
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button - Opens WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="self-stretch px-5 py-[10px] bg-primary rounded-xl inline-flex items-center justify-center gap-2"
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-white text-base font-medium leading-5">
              Contact for more details
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

export default function PropertiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Properties data with unique IDs
  const properties: Property[] = [
    {
      id: "property-luxury-villa-colombo-7",
      title: "Modern Luxury Villa",
      location: "Colombo 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "LKR 85M",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "3,500",
      images: ["https://placehold.co/361x296"],
      whatsappNumber: "94777599299",
      whatsappMessage:
        "Hi, I'm interested in the Modern Luxury Villa in Colombo 7. Could you please provide more details?",
    },
    {
      id: "property-sky-heights-kollupitiya",
      title: "Sky Heights Residences",
      location: "Kollupitiya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "LKR 85M",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,100",
      images: ["https://placehold.co/361x296"],
      whatsappNumber: "94777599299",
      whatsappMessage:
        "Hi, I'm interested in the Sky Heights Residences in Kollupitiya. Could you please provide more details?",
    },
    {
      id: "property-ocean-view-mount-lavinia",
      title: "Ocean View Apartments",
      location: "Mount Lavinia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "LKR 65M",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,800",
      images: ["https://placehold.co/361x296"],
      whatsappNumber: "94777599299",
      whatsappMessage:
        "Hi, I'm interested in the Ocean View Apartments in Mount Lavinia. Could you please provide more details?",
    },
  ];

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
