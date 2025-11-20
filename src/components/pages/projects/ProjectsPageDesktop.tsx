/**
 * Projects Page - Desktop View
 * Full page component for projects listing on desktop devices
 */

"use client";

import React from "react";
import Link from "next/link";
import { DesktopNav } from "@/components/features/navigation";
import ProjectCard from "@/components/features/ProjectCard";
import { FooterDesktop } from "@/components/features/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  description: string;
  images: string[];
}

interface ProjectsPageDesktopProps {
  projects: Project[];
  onOpenModal: () => void;
}

export function ProjectsPageDesktop({
  projects,
  onOpenModal,
}: ProjectsPageDesktopProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <DesktopNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[146px]">
        {/* Hero Section */}
        <section className="relative h-[454px] w-full overflow-hidden bg-secondary">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[738.75px] top-[80px] h-[384px] w-[384px] rounded-full bg-primary opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[78px] top-[304px] h-[320px] w-[320px] rounded-full bg-primary opacity-25"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />

          {/* Hero Content */}
          <div className="absolute left-[120px] top-[202px] flex w-[1200px] flex-col items-start justify-start gap-12">
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
                <div className="text-sm font-normal leading-[14px] text-ash">
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
                <div className="text-sm font-normal leading-[14px] text-white">
                  Projects
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="flex items-center justify-center gap-2.5">
                <div className="text-center">
                  <span className="text-[72px] font-medium leading-[64px] text-white">
                    Featured{" "}
                  </span>
                  <span className="text-[72px] font-medium leading-[64px] text-primary">
                    Projects
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="w-[760px] text-base font-medium leading-5 text-ash">
                    Explore our collection of premium residential and commercial
                    projects across Sri Lanka. Each project showcases our
                    commitment to excellence and innovation in construction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background Blur Effects */}
        <div
          className="pointer-events-none absolute bottom-[800px] right-[100px] h-[268px] w-[268px] rounded-full bg-primary opacity-[0.05] shadow-[128px_128px_128px]"
          style={{ filter: "blur(64px)" }}
        />
        <div
          className="pointer-events-none absolute bottom-[300px] left-[100px] h-[268px] w-[268px] rounded-full bg-primary opacity-[0.05] shadow-[128px_128px_128px]"
          style={{ filter: "blur(64px)" }}
        />

        {/* Projects Grid */}
        <section className="flex w-full flex-col items-start justify-start gap-5 px-[120px] py-16">
          {/* Row 1 - 3 cards */}
          <div className="flex items-center justify-start gap-5 self-stretch">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                sqft={project.area}
                description={project.description}
                images={project.images}
              />
            ))}
          </div>

          {/* Row 2 - 3 cards */}
          <div className="flex items-center justify-start gap-5 self-stretch">
            {projects.slice(3, 6).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                sqft={project.area}
                description={project.description}
                images={project.images}
              />
            ))}
          </div>

          {/* Row 3 - remaining cards */}
          {projects.length > 6 && (
            <div className="flex items-center justify-start gap-5">
              {projects.slice(6).map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  location={project.location}
                  sqft={project.area}
                  description={project.description}
                  images={project.images}
                />
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="relative w-full bg-secondary">
          {/* Background Blur Effects */}
          <div
            className="absolute h-[319.13px] w-[319.13px] rounded-full bg-primary opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute h-[319.13px] w-[319.13px] rounded-full bg-primary opacity-[0.09]"
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
                <span className="text-[56px] font-medium leading-10 text-primary">
                  Your
                </span>
                <span className="text-[56px] font-medium leading-10 text-white">
                  {" "}
                  Project?
                </span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <div className="text-center text-base font-medium leading-5 text-ash">
                  Let&apos;s bring your vision to life with our expert
                  construction and design services.
                </div>
              </div>
            </div>
            <button
              onClick={onOpenModal}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 transition-opacity hover:opacity-90"
            >
              <div className="flex items-center justify-start gap-2">
                <div className="text-base font-medium leading-5 text-white">
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
    </>
  );
}
