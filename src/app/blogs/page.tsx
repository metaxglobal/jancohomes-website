"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/navigation";
import BlogArticleCard from "@/components/features/BlogArticleCard";
import ConsultationModal from "@/components/features/ConsultationModal";
import Footer from "@/components/features/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

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
          <div className="relative z-10 flex w-[361px] flex-col gap-8 px-4 pt-8">
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
                Blog
              </span>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-3">
              <h1 className="w-[361px] text-[40px] font-medium leading-9 tracking-[-2px] text-white">
                Construction & Design <span className="text-primary">Blog</span>
              </h1>
              <p className="w-[361px] text-[14px] font-medium leading-[14px] text-ash">
                Expert insights, industry trends, and practical advice from 20
                years of building excellence in Sri Lanka.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Articles Grid Section */}
        <section className="relative z-10 flex flex-col items-center gap-5 px-4 pb-12 pt-12 md:hidden">
          <div className="flex flex-col items-center gap-5">
            {blogArticles.map((article) => (
              <BlogArticleCard key={article.id} {...article} />
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
