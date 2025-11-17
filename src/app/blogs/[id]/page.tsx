"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/features/MobileNav";
import ConsultationModal from "@/components/features/ConsultationModal";
import Footer from "@/components/features/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons";
import { blogArticles } from "../page";

export default function BlogArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Unwrap params using React.use()
  const { id } = use(params);

  // Find the article by ID
  const article = blogArticles.find((a) => a.id === id);

  // If article not found, show 404
  if (!article) {
    notFound();
  }

  // Truncate title for breadcrumb
  const truncatedTitle =
    article.title.length > 25
      ? `${article.title.substring(0, 25)}...`
      : article.title;

  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 md:hidden">
        <MobileNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[112px]">
        {/* Hero Section with Dark Background */}
        <section className="relative h-[228px] w-full overflow-hidden bg-secondary md:hidden">
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

          {/* Breadcrumb Navigation */}
          <div className="relative z-10 flex w-[361px] flex-col gap-8 px-4 pt-8">
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
                color="#C2C2C2"
                strokeWidth={1.5}
              />
              <Link
                href="/blogs"
                className="flex items-center gap-1 transition-opacity hover:opacity-80"
              >
                <span className="text-[14px] font-normal leading-[14px] text-ash">
                  Blog
                </span>
              </Link>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                color="white"
                strokeWidth={1.5}
              />
              <span className="text-[14px] font-normal leading-[14px] text-white">
                {truncatedTitle}
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex flex-col gap-8 px-4 pb-12 pt-12 md:hidden">
          {/* Hero Image with Overlay */}
          <div className="relative h-[396px] overflow-hidden rounded-[22px] outline outline-1 outline-ash outline-offset-[-1px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 flex flex-col items-start justify-end gap-6 px-5 pb-5 pt-[72px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.70) 70%, black 100%)",
              }}
            >
              {/* Title */}
              <h1 className="w-[321px] text-[40px] font-medium leading-9 text-white">
                {article.title}
              </h1>

              {/* Author and Date */}
              <div className="flex items-end justify-between self-stretch">
                {/* Author Info */}
                <div className="flex w-[145.90px] items-center gap-2">
                  <div className="h-[34px] w-[34px] overflow-hidden rounded-full bg-[#E5E7EB]">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={34}
                      height={40}
                      className="h-10 object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-[14px] font-normal leading-[14px] text-white">
                      {article.author.name}
                    </span>
                    <span className="text-[12px] font-normal leading-4 text-ash">
                      {article.author.role}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                  <span className="text-[14px] font-normal leading-[14px] text-white">
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="flex flex-col items-start justify-center gap-14">
            <div className="flex items-start justify-start gap-[73px]">
              <div className="flex w-[361px] flex-col gap-10">
                {/* Quote Block */}
                <div className="flex items-center justify-start gap-[10px] border-l-[3px] border-primary bg-[#F7F7F7] p-5">
                  <p className="w-[321px] text-[14px] font-medium leading-[14px] text-secondary/75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-[24px] font-medium leading-6 text-secondary">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text-[14px] font-normal leading-[14px] text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Facebook */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] transition-opacity hover:opacity-80"
              aria-label="Share on Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.67H11.67C10.34 1.67 9.17 2.84 9.17 4.17V7.5H5.83V11.67H9.17V18.33H13.33V11.67H16.67L15 7.5H13.33V4.17C13.33 3.71 13.71 3.33 14.17 3.33H15V1.67Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Twitter */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2] transition-opacity hover:opacity-80"
              aria-label="Share on Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.33 3.33C17.5 4.17 16.67 4.58 15.83 4.58C15 3.75 13.75 3.33 12.5 3.33C10 3.33 8.33 5 8.33 7.5V8.33C5.83 8.33 3.75 7.08 1.67 4.17C1.67 4.17 -0.83 10.83 6.67 13.33C5 14.58 3.33 15 1.67 15C9.17 18.33 18.33 15 18.33 7.5C18.33 7.08 18.33 6.67 17.92 5.83C18.33 5 18.33 4.17 18.33 3.33Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* LinkedIn */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] transition-opacity hover:opacity-80"
              aria-label="Share on LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5H1.67V18.33H5V7.5Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33 5C4.25 5 5 4.25 5 3.33C5 2.42 4.25 1.67 3.33 1.67C2.42 1.67 1.67 2.42 1.67 3.33C1.67 4.25 2.42 5 3.33 5Z"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.33 18.33V12.5C18.33 10.83 16.67 9.17 15 9.17C13.33 9.17 11.67 10.83 11.67 12.5V18.33"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33 7.5V18.33"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Copy Link */}
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A5565] transition-opacity hover:opacity-80"
              aria-label="Copy link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83 11.67L3.33 14.17C2.5 15 2.5 16.25 3.33 17.08C4.17 17.92 5.42 17.92 6.25 17.08L8.75 14.58"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.17 8.33L16.67 5.83C17.5 5 17.5 3.75 16.67 2.92C15.83 2.08 14.58 2.08 13.75 2.92L11.25 5.42"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 7.5L7.5 12.5"
                  stroke="white"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
