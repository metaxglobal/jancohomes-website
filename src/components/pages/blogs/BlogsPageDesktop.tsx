/**
 * Blogs Page - Desktop View
 * Full page component for blogs listing on desktop devices
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DesktopNav } from "@/components/features/navigation";
import { BlogCardDesktop } from "@/components/features/BlogCardDesktop";
import { FooterDesktop } from "@/components/features/footer";
import ConsultationModalDesktop from "@/components/features/ConsultationModalDesktop";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
}

interface BlogsPageDesktopProps {
  articles: BlogArticle[];
}

export function BlogsPageDesktop({
  articles,
}: BlogsPageDesktopProps) {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <DesktopNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[146px]">
        {/* Hero Section */}
        <section className="relative h-[454px] w-full overflow-hidden bg-[#1A1A1A]">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[738.75px] top-[80px] h-[384px] w-[384px] rounded-full bg-[#7CB342] opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[78px] top-[304px] h-[320px] w-[320px] rounded-full bg-[#7CB342] opacity-25"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start justify-start gap-12 px-[120px] pt-[202px]">
            {/* Breadcrumb */}
            <div className="flex h-5 items-center justify-start gap-2 self-stretch">
              <Link
                href="/"
                className="flex items-center justify-start gap-1 transition-opacity hover:opacity-80"
              >
                <div className="relative h-4 w-4">
                  <HugeiconsIcon
                    icon={Home01Icon}
                    size={16}
                    color="#C2C2C2"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-[14px] font-normal leading-[14px] text-ash">
                  Home
                </div>
              </Link>
              <div className="relative h-4 w-4 overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex items-center justify-start gap-1">
                <div className="text-[14px] font-normal leading-[14px] text-white">
                  Blog
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="flex items-center justify-center gap-2.5">
                <div className="text-center">
                  <span className="text-[72px] font-medium leading-[64px] text-white">
                    Construction & Design{" "}
                  </span>
                  <span className="text-[72px] font-medium leading-[64px] text-[#7CB342]">
                    Blog
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="w-[760px] text-[16px] font-medium leading-5 text-ash">
                    Expert insights, industry trends, and practical advice from
                    20 years of building excellence in Sri Lanka.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="w-full flex justify-center">
          <div className="max-w-[1440px] w-full px-[120px] pt-16 pb-24 flex flex-col items-start gap-5">
            {/* Row 1 - 3 cards */}
            <div className="inline-flex items-center justify-start gap-5 self-stretch">
              {articles.slice(0, 3).map((article) => (
                <BlogCardDesktop key={article.id} {...article} />
              ))}
            </div>

            {/* Row 2 - 3 cards */}
            {articles.length > 3 && (
              <div className="inline-flex items-center justify-start gap-5 self-stretch">
                {articles.slice(3, 6).map((article) => (
                  <BlogCardDesktop key={article.id} {...article} />
                ))}
              </div>
            )}

            {/* Row 3 - remaining cards */}
            {articles.length > 6 && (
              <div className="flex items-center justify-start gap-5">
                {articles.slice(6).map((article) => (
                  <BlogCardDesktop key={article.id} {...article} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full bg-[#1A1A1A] overflow-hidden">
          {/* Background Blur Effects */}
          <div
            className="absolute bottom-0 left-0 h-[319.13px] w-[319.13px] rounded-full bg-[#7CB342] opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 h-[319.13px] w-[319.13px] rounded-full bg-[#7CB342] opacity-[0.09]"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />

          <div className="relative z-10 flex h-[376px] flex-col items-center justify-center gap-12 self-stretch px-[120px]">
            <div className="flex flex-col items-center justify-start gap-3 self-stretch">
              <div className="self-stretch text-center">
                <span className="text-[56px] font-medium leading-10 text-white">
                  Ready to Start{" "}
                </span>
                <span className="text-[56px] font-medium leading-10 text-[#7CB342]">
                  Your
                </span>
                <span className="text-[56px] font-medium leading-10 text-white">
                  {" "}
                  Project?
                </span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <div className="text-center text-[16px] font-medium leading-5 text-ash">
                  Let&apos;s bring your vision to life with our expert
                  construction and design services.
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#7CB342] px-5 py-2.5 transition-opacity hover:opacity-90"
            >
              <div className="flex items-center justify-start gap-2">
                <div className="text-[16px] font-medium leading-5 text-white">
                  Talk to our Expert
                </div>
                <div className="relative h-5 w-5 overflow-hidden">
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
        </section>
      </main>

      {/* Footer */}
      <footer>
        <FooterDesktop />
      </footer>

      {/* Consultation Modal */}
      <ConsultationModalDesktop
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
}
