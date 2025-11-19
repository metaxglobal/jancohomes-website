/**
 * Desktop Navigation Component
 * 
 * Two-tier navigation with contact info bar and main navigation
 * Displays for screens >= 1024px (lg breakpoint)
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CallingIcon,
  Mail01Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";
import ConsultationModal from "../ConsultationModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Properties", href: "/properties" },
];

export function DesktopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="hidden lg:flex flex-col w-full bg-secondary shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
        {/* Top Bar - Contact Info */}
        <div className="w-full max-w-[1440px] mx-auto h-12 px-[120px] bg-secondary border-b border-white/20">
          <div className="h-full flex items-center justify-end gap-6">
            {/* Phone */}
            <div className="flex items-center gap-[9px]">
              <div className="w-3 h-3 relative">
                <HugeiconsIcon
                  icon={CallingIcon}
                  className="w-3 h-3 text-ash"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-ash text-xs font-normal leading-4">
                +94 777 599 299
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-[9px]">
              <div className="w-3 h-3 relative">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  className="w-3 h-3 text-ash"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-ash text-xs font-normal leading-4">
                info@janco.lk
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="w-full max-w-[1440px] mx-auto h-[97px] px-[120px] bg-secondary flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="janco-logo.svg"
              alt="Janco"
              width={49}
              height={47}
              className="w-[49px] h-[47px]"
            />
          </Link>

          {/* Navigation Links & CTA */}
          <div className="flex items-center gap-12">
            {/* Navigation Links */}
            <div className="flex items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-[107px] h-11 px-2.5 py-2.5 flex items-center justify-center text-white text-sm font-normal uppercase leading-4 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-primary rounded-xl flex items-center gap-2 hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
              >
                <span className="text-white text-base font-medium leading-5">
                  Book a free consultation
                </span>
                <div className="w-5 h-5 relative">
                  <HugeiconsIcon
                    icon={ArrowDownRight01Icon}
                    className="w-5 h-5 text-white"
                    strokeWidth={2}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
