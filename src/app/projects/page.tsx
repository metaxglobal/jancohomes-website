"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/MobileNav";
import FeaturedProjectCard from "@/components/features/FeaturedProjectCard";
import Footer from "@/components/features/Footer";
import ConsultationModal from "@/components/features/ConsultationModal";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

// Projects data structure with unique IDs
const projects = [
  {
    id: "project-luxury-residence-colombo",
    title: "Luxury Residence Colombo",
    location: "Colombo 7, Sri Lanka",
    area: "3,500 sq ft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/luxury-residence-colombo.jpg",
      "/projects/project 1.jpg",
      "/projects/project 2.jpg",
      "https://placehold.co/361x250",
    ],
  },
  {
    id: "project-modern-villa-kandy",
    title: "Modern Villa Kandy",
    location: "Kandy, Sri Lanka",
    area: "2,800 SQFT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/modern-villa-kandy.jpg",
      "/projects/project 1.jpg",
      "/projects/project 2.jpg",
      "https://placehold.co/361x250",
    ],
  },
  {
    id: "project-contemporary-house-mirigama",
    title: "Contemporary House Mirigama",
    location: "Mirigama, Sri Lanka",
    area: "2,534 SQFT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/contemporary-house-mirigama.jpg",
      "/projects/project 1.jpg",
      "/projects/project 2.jpg",
      "https://placehold.co/361x250",
    ],
  },
  {
    id: "project-luxury-estate-negombo",
    title: "Luxury Estate Negombo",
    location: "Negombo, Sri Lanka",
    area: "4,100 SQFT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/luxury-estate-negombo.jpg",
      "/projects/project 1.jpg",
      "/projects/project 2.jpg",
      "https://placehold.co/361x250",
    ],
  },
  {
    id: "project-modern-apartment-complex",
    title: "Modern Apartment Complex",
    location: "Galle, Sri Lanka",
    area: "12,500 SQFT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/modern-apartment-complex.jpg",
      "/projects/modern-apartment-complex-2.jpg",
      "/projects/modern-apartment-complex-3.jpg",
      "/projects/project 1.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            className="pointer-events-none absolute left-[259px] top-[233px] h-[134px] w-[134px] rounded-full bg-primary opacity-30 shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />
          <div
            className="pointer-events-none absolute left-[-18px] top-[80px] h-[128px] w-[128px] rounded-full bg-primary opacity-25 shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />
          <div
            className="pointer-events-none absolute left-[326px] top-[70px] h-[67px] w-[67px] rounded-full bg-primary opacity-10 shadow-[128px_128px_128px]"
            style={{ filter: "blur(64px)" }}
          />

          {/* Hero Content */}
          <div className="relative z-10 flex w-[361px] flex-col gap-4 px-4 pt-8">
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
                Projects
              </span>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-3 pt-4">
              <h1 className="w-[361px] text-[40px] font-medium leading-9 tracking-[-2px] text-white">
                <span className="">Featured </span>
                <span className="text-primary">Projects</span>
              </h1>
              <p className="w-[361px] text-[14px] font-medium leading-[14px] text-ash">
                Explore our collection of premium residential and commercial
                projects across Sri Lanka. Each project showcases our commitment
                to excellence and innovation in construction.
              </p>
            </div>
          </div>
        </section>

        {/* Background Blur Effects for bottom section */}
        <div
          className="pointer-events-none absolute bottom-[100px] right-0 h-[200.09px] w-[200.09px] rounded-full bg-primary opacity-[0.07] shadow-[128px_128px_128px]"
          style={{ filter: "blur(64px)" }}
        />
        <div
          className="pointer-events-none absolute bottom-[663px] left-0 h-[200.09px] w-[200.09px] rounded-full bg-primary opacity-[0.07] shadow-[128px_128px_128px]"
          style={{ filter: "blur(64px)" }}
        />

        {/* Projects Grid Section */}
        <section className="relative z-10 flex flex-col items-start gap-5 px-4 pb-12 pt-12 md:hidden">
          <div className="flex flex-col items-center gap-5">
            {projects.map((project) => (
              <FeaturedProjectCard key={project.id} {...project} />
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
      </main>

      {/* Footer */}
      <footer className="md:hidden">
        <Footer />
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
