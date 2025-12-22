"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import { ProjectsPageMobile, ProjectsPageDesktop } from "@/components/pages/projects";
import ConsultationModal from "@/components/features/ConsultationModal";

// Note: Metadata must be exported from a Server Component
// For now, this will be handled by layout.tsx template
// TODO: Convert to Server Component for full metadata support

// Projects data structure with unique IDs
const projects = [
  {
    id: "Modern NGO Office Building ",
    title: "Modern NGO Office Building ",
    location: "Beruwala - 4772.94sq.ft",
    price: "RS.49.2M",
    description:
    "A professionally designed 4,772 sq.ft commercial facility showcasing our expertise in institutional construction.This Rs. 49.2 million project features modern architectural design, functional workspace solutions, and sustainable building practices",
    images: [
      "/projects/ngo1.jpg",
      "/projects/ngo2.jpg",
      "/projects/ngo3.jpg",
    ],
  },
  {
    id: "Luxury Home in Dehiwala",
    title: "Luxury Home in Dehiwala",
    location: "Dehiwala - 3009.48Sq.ft",
    price: "RS.27.7M",
    description:
    "An exquisite 3,009 sq.ft luxury residence combining contemporary elegance with functional living. This Rs. 27.7 million custom-built home reflects our commitment to high-end residential construction excellence.",
    images: [
      "/projects/lhd1.jpg",
      "/projects/lhd2.jpg",
      "/projects/lhd3.jpg",
    ],
  },
  {
    id: "Quality Family Residence ",
    title: " Quality Family Residence",
    location: "Homagama - 2612.00 Sq.ft",
    price: "RS.23M",
    description:
    "A beautifully crafted 2,612 sq.ft family home in Homagama delivering exceptional value and quality. This Rs. 23 million project showcases thoughtful design, durable construction, and modern living amenities",
    images: [
      "/projects/frh.jpg",
      "/projects/frh2.jpg",
      "/projects/frh3.jpg",
    ],
  },
  {
    id: "Two-Storey Residence",
    title: "Two-Storey Residence",
    location: "Beruwala - 2376 sq.ft",
    price: "RS.20.8M",
    description:
    "A striking 2,376 sq.ft modern home in Beruwala featuring a two-storey design with expansive glass facades, wooden louvre accents, and an open carport. This residence blends contemporary architecture with functional outdoor spaces and natural landscaping.",
    images: [
      "/projects/2rb1.jpg",
      "/projects/2rb2.jpg",
      "/projects/2rb3.jpg",
    ],
  },
  {
    id: "Three-Storey Luxury Villa ",
    title: "Three-Storey Luxury Villa ",
    location: "Kirulapana - 3,310 sq.ft",
    price: "RS.30M",
    description:
      "An impressive 3,310 sq.ft three-storey residence in Kirulapana, valued at Rs. 30 million. Featuring vertical timber cladding, spacious balconies, ground-floor parking, and contemporary minimalist design, this home showcases premium urban living",
    images: [
      "/projects/3lvk1.jpg",
      "/projects/3lvk2.jpg",
      "/projects/3lvk3.jpg",
    ],
  },
  {
    id: "Contemporary Villa",
    title: "Contemporary Villa",
    location: "Athurugiriya - 3,134 sq.ft",
    price: "RS.26.9M",
    description:
      "A stunning modern residence in Athurugiriya, completed at Rs. 26.9 million. This architectural masterpiece features a vertical green wall, brick accent panels, spacious carport, and multi-level design combining natural materials with elegance.",
    images: [
      "/projects/cva1.jpg",
      "/projects/cva2.jpg",
      "/projects/cva3.jpg",
    ],
  },
  {
    id: "Three-Storey Luxury Villa",
    title: "Three-Storey Luxury Villa",
    location: "Wijerama - 4,788 sq.ft ",
    price: "RS.41.1M",
    description:
    "An expansive 4,788 sq.ft luxury residence in Wijerama, valued at Rs. 41.1 million. Featuring exposed brick detailing, multiple balconies, ground-level parking with external staircase, and premium finishes throughout, perfect for sophisticated family living.",
    images: [
      "/projects/3lvw1.png",
      "/projects/3lvw2.png",
      "/projects/3lvw3.png",
    ],
  },
  {
    id: "Two-Storey House ",
    title: "Two-Storey House ",
    location: "Dehiwala - 1,750 sq.ft ",
    price: "RS.16M",
    description:
    "A beautifully designed 1,750 sq.ft residence in Dehiwala, completed at Rs. 16 million. Featuring distinctive decorative screening, clean white facades, integrated carport, and contemporary minimalist design, within an efficient footprint.",
    images: [
      "/projects/2hd1.jpg",
      "/projects/2hd2.jpg",
      "/projects/2hd3.jpg",
    ],
  },
];

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        <ProjectsPageMobile
          projects={projects}
          onOpenModal={() => setIsModalOpen(true)}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <ProjectsPageDesktop projects={projects} />
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
