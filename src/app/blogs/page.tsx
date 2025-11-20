"use client";

import React, { useState } from "react";
import { BlogsPageMobile, BlogsPageDesktop } from "@/components/pages/blogs";
import ConsultationModal from "@/components/features/ConsultationModal";

// Blog articles data structure with unique IDs
export const blogArticles = [
  {
    id: "home-design-trends-2025",
    title: "2025 Home Design Trends to Watch",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "October 15, 2024",
    image: "/blogs/blog1.jpg",
    author: {
      name: "Sarah Mitchell",
      role: "Design Director",
      avatar: "/client image.jpg",
    },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    id: "sustainable-building-materials-guide",
    title: "Sustainable Building Materials: A Guide",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "September 28, 2024",
    image: "/blogs/blog2.jpg",
    author: {
      name: "Sarah Mitchell",
      role: "Chief Architect",
      avatar: "/client image.jpg",
    },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: "modern-construction-techniques",
    title: "Modern Construction Techniques in Sri Lanka",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "September 10, 2024",
    image: "/blogs/blog3.jpg",
    author: {
      name: "John Silva",
      role: "Senior Engineer",
      avatar: "/client image.jpg",
    },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
  },
  {
    id: "interior-design-tips-2024",
    title: "Interior Design Tips for Small Spaces",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "August 22, 2024",
    image: "/blogs/blog1.jpg",
    author: {
      name: "Sarah Mitchell",
      role: "Design Director",
      avatar: "/client image.jpg",
    },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
  },
];

export default function BlogsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden">
        <BlogsPageMobile
          articles={blogArticles}
          onOpenModal={() => setIsModalOpen(true)}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <BlogsPageDesktop
          articles={blogArticles}
          onOpenModal={() => setIsModalOpen(true)}
        />
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
