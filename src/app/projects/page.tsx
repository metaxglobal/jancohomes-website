"use client";

import React, { useState } from "react";
import { ProjectsPageMobile, ProjectsPageDesktop } from "@/components/pages/projects";
import ConsultationModal from "@/components/features/ConsultationModal";

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
  {
    id: "project-executive-residence",
    title: "Executive Residence",
    location: "Colombo 3, Sri Lanka",
    area: "3,650 sq ft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/project 1.jpg",
      "/projects/project 2.jpg",
      "https://placehold.co/387x250",
    ],
  },
  {
    id: "project-hillside-retreat",
    title: "Hillside Retreat",
    location: "Nuwara Eliya, Sri Lanka",
    area: "2,900 sq ft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/project 2.jpg",
      "/projects/project 1.jpg",
      "https://placehold.co/387x250",
    ],
  },
  {
    id: "project-tropical-villa",
    title: "Tropical Villa",
    location: "Bentota, Sri Lanka",
    area: "2,900 sq ft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/projects/project 1.jpg",
      "/projects/project 2.jpg",
      "https://placehold.co/387x250",
    ],
  },
];

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile View */}
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
