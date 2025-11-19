"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDownRight01Icon,
  Mail01Icon,
  CallingIcon,
  MultiplicationSignIcon,
  Menu03Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ConsultationModal from "../ConsultationModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Properties", href: "/properties" },
];

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      {/* Fixed Top Section (Always Visible) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* Top Contact Bar */}
        <div className="w-full h-11 px-4 pb-px bg-secondary border-b border-white-stroke flex flex-col items-end justify-start">
          <div className="w-full h-11 flex items-center justify-end gap-6">
            {/* Phone */}
            <a
              href="tel:+94777599299"
              className="flex items-center gap-[9px] h-4"
            >
              <HugeiconsIcon
                icon={CallingIcon}
                size={12}
                color="#C2C2C2"
                strokeWidth={1}
              />
              <span className="text-ash text-xs font-normal leading-4">
                +94 777 599 299
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@janco.lk"
              className="flex items-center gap-[9px] h-4"
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                size={12}
                color="#C2C2C2"
                strokeWidth={1}
              />
              <span className="text-ash text-xs font-normal leading-4">
                info@janco.lk
              </span>
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="w-full h-[68px] px-4 bg-secondary flex items-center justify-between" style={{ boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          {/* Logo */}
          <Link href="/" aria-label="Home" className="inline-block">
            <Image
              src="/janco-logo.svg"
              alt="Janco Home & Construction"
              width={49}
              height={47}
              priority
              className="w-[49px] h-[47px]"
            />
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 min-w-10 min-h-10 flex items-center justify-center rounded-[7px]"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HugeiconsIcon
                icon={MultiplicationSignIcon}
                size={24}
                color="#ffffffff"
                strokeWidth={3}
              />
            ) : (
              <HugeiconsIcon
                icon={Menu03Icon}
                size={24}
                color="#ffffffff"
                strokeWidth={3}
              />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Menu Dropdown (Expands to full screen height) */}
      <div
        className={cn(
          "fixed top-[112px] left-0 right-0 bottom-0 bg-secondary transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%] pointer-events-none"
        )}
      >
        <div className="pt-8 pb-8 px-4 flex flex-col items-center gap-4">
          {/* Contact Info in Menu */}
          <div className="w-full max-w-[361px] flex flex-col items-center gap-3">
            <a
              href="tel:+94777599299"
              className="flex items-center gap-[9px] h-4"
            >
              <HugeiconsIcon
                icon={CallingIcon}
                size={12}
                color="#C2C2C2"
                strokeWidth={1}
              />
              <span className="text-ash text-xs font-normal leading-4">
                +94 777 599 299
              </span>
            </a>
            <a
              href="mailto:info@janco.lk"
              className="flex items-center gap-[9px] h-4"
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                size={12}
                color="#C2C2C2"
                strokeWidth={1}
              />
              <span className="text-ash text-xs font-normal leading-4">
                info@janco.lk
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="w-full py-6 flex flex-col items-center gap-8">
            <nav className="flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-[107px] h-11 py-[10px] flex items-center justify-center text-white/90 text-sm font-normal uppercase leading-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button - Exact Figma Specs */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-[10px] bg-primary rounded-xl"
            >
              <span className="text-white text-base font-medium leading-5">
                Book a free consultation
              </span>
              <div className="w-5 h-5 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowDownRight01Icon}
                  size={20}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
