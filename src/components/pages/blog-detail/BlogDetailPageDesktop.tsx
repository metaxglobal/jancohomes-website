/**
 * Blog Detail Page - Desktop View
 * Full page component for individual blog article on desktop devices
 */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "@/components/features/navigation";
import { FooterDesktop } from "@/components/features/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  Calendar03Icon,
  Facebook02Icon,
  InstagramIcon,
  Linkedin02Icon,
  Mail01Icon,
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
  content: string | {
    intro?: string;
    sections?: Array<{
      title: string;
      content: string;
      subsections?: Array<{
        title: string;
        content: string;
      }>;
    }>;
    conclusion?: string;
  };
}

interface BlogDetailPageDesktopProps {
  article: BlogArticle;
}

export function BlogDetailPageDesktop({
  article,
}: BlogDetailPageDesktopProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <DesktopNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[0px]">
        {/* Hero Section with Breadcrumb */}
        <section className="relative h-[278px] w-full overflow-hidden bg-[#1A1A1A]">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[738.75px] top-[80px] h-[384px] w-[384px] rounded-full bg-[#7CB342] opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[-14px] top-[202px] h-[217px] w-[217px] rounded-full bg-[#7CB342] opacity-25"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />

          {/* Breadcrumb Navigation */}
          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start justify-start gap-12 px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-[120px] pt-[202px]">
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
                  color="#C2C2C2"
                  strokeWidth={1.5}
                />
              </div>
              <Link
                href="/blogs"
                className="flex items-center justify-start gap-1 transition-opacity hover:opacity-80"
              >
                <div className="text-[14px] font-normal leading-[14px] text-ash">
                  Blog
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
                  {article.title}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content Section */}
        <section className="w-full flex justify-center">
          <div className="max-w-[1440px] w-full px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-[120px] pt-8 pb-24 flex flex-col items-start gap-8">
            {/* Hero Image with Overlay */}
            <div className="relative h-[450px] self-stretch overflow-hidden rounded-[22px] outline outline-1 outline-ash outline-offset-[-1px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 flex flex-col items-start justify-end gap-6 px-8 pb-8 pt-[72px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.70) 70%, black 100%)",
              }}
            >
              {/* Title */}
              <div className="inline-flex items-center justify-start gap-2.5 max-w-full">
                <h1 className="text-[36px] lg:text-[48px] xl:text-[56px] font-medium leading-[40px] lg:leading-[52px] xl:leading-[64px] tracking-[-0.1rem] lg:tracking-[-0.15rem] xl:tracking-[-0.2rem] text-white">
                  {article.title}
                </h1>
              </div>

              {/* Author and Date */}
              <div className="inline-flex items-center justify-start gap-6 self-stretch">
                {/* Author Info */}
                <div className="flex items-center gap-1">
                  <span className="text-[14px] font-normal leading-[14px] text-white">
                    {article.author.name}
                  </span>
                  <span className="text-[12px] font-normal leading-4 text-ash">
                    , {article.author.role}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center justify-start gap-1">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                  <div className="text-[14px] font-normal leading-[14px] text-white">
                    {article.date}
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Article Content and Social Share */}
            <div className="flex flex-col items-end justify-start gap-14 self-stretch">
              <div className="flex items-start justify-start gap-8 self-stretch">
              {/* Article Body */}
              <div className="inline-flex flex-1 flex-col items-start justify-start gap-[46px]">
                {/* Render Introduction Quote if structured content */}
                {typeof article.content === 'object' && article.content.intro && (
                  <div className="inline-flex w-full items-center justify-start gap-2.5 border-l-[3px] border-[#7CB342] bg-[#F7F7F7] p-5">
                    <div className="flex-1 text-[14px] lg:text-[16px] font-medium leading-5 text-secondary/75 whitespace-pre-line">
                      {article.content.intro}
                    </div>
                  </div>
                )}

                {/* Content Sections */}
                <div className="flex w-full flex-col items-start justify-start gap-8">
                  {typeof article.content === 'object' && article.content.sections ? (
                    <>
                      {article.content.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="flex flex-col items-start justify-start gap-6 self-stretch">
                          {/* Section Title */}
                          <h2 className="text-[28px] lg:text-[36px] font-medium leading-9 lg:leading-10 tracking-tight text-secondary">
                            {section.title}
                          </h2>
                          
                          {/* Section Content */}
                          <div className="self-stretch text-[14px] font-normal leading-5 text-secondary whitespace-pre-line">
                            {section.content}
                          </div>

                          {/* Subsections */}
                          {section.subsections && section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="flex flex-col items-start justify-start gap-4 self-stretch pl-4 lg:pl-6">
                              <h3 className="text-[20px] lg:text-[24px] font-medium leading-6 lg:leading-7 tracking-tight text-secondary">
                                {subsection.title}
                              </h3>
                              <div className="self-stretch text-[14px] font-normal leading-5 text-secondary whitespace-pre-line">
                                {subsection.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}

                      {/* Conclusion */}
                      {article.content.conclusion && (
                        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                          <div className="self-stretch text-[14px] font-normal leading-5 text-secondary whitespace-pre-line">
                            {article.content.conclusion}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* Fallback for simple string content */
                    <>
                      <div className="inline-flex w-full items-center justify-start gap-2.5 border-l-[3px] border-[#7CB342] bg-[#F7F7F7] p-5">
                        <div className="flex-1 text-[14px] lg:text-[16px] font-medium leading-5 text-secondary/75">
                          {typeof article.content === 'string' ? article.content : ''}
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                        <h2 className="text-[28px] lg:text-[36px] font-medium leading-9 lg:leading-10 tracking-tight text-secondary">
                          Lorem ipsum dolor sit amet
                        </h2>
                        <div className="self-stretch text-[14px] font-normal leading-5 text-secondary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                      </div>
                    </>
                  )}

                  {/* Spacer */}
                  <div className="h-[60px] self-stretch" />
                </div>
              </div>
            </div>

            {/* Social Share Buttons - Bottom of article (same style as mobile) */}
            <div className="flex items-center justify-center gap-4 py-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/191WuVH49X/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] transition-opacity hover:opacity-80"
                aria-label="Share on Facebook"
              >
                <HugeiconsIcon
                  icon={Facebook02Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.67}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jancohome/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2] transition-opacity hover:opacity-80"
                aria-label="Share on Instagram"
              >
                <HugeiconsIcon
                  icon={InstagramIcon}
                  size={20}
                  color="white"
                  strokeWidth={1.67}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/janco-home-and-construction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] transition-opacity hover:opacity-80"
                aria-label="Share on LinkedIn"
              >
                <HugeiconsIcon
                  icon={Linkedin02Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.67}
                />
              </a>

              {/* Email */}
              <a
                href="mailto:info@janco.lk"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A5565] transition-opacity hover:opacity-80"
                aria-label="Share via Email"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.67}
                />
              </a>
            </div>
          </div>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <FooterDesktop />
      </footer>
    </>
  );
}
