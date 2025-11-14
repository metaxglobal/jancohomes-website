"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Properties", href: "/properties" },
];

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              className="flex items-center gap-2.25 h-4"
            >
              <Phone size={12} color="#C2C2C2" strokeWidth={1} />
              <span className="text-ash text-xs font-normal leading-4">
                +94 777 599 299
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@janco.lk"
              className="flex items-center gap-2.25 h-4"
            >
              <Mail size={12} color="#C2C2C2" strokeWidth={1} />
              <span className="text-ash text-xs font-normal leading-4">
                info@janco.lk
              </span>
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="w-full h-[68px] px-4 bg-secondary flex items-center justify-between overflow-hidden">
          {/* Logo */}
          <Image
            src="/janco-logo.svg"
            alt="Janco Home & Construction"
            width={49}
            height={47}
            priority
            className="w-[49px] h-[47px]"
          />

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 min-w-10 min-h-10 flex items-center justify-center rounded-[7px]"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} color="#FFFFFF" strokeWidth={2.5} />
            ) : (
              <Menu size={24} color="#FFFFFF" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Menu Dropdown (Slides down from nav bar) */}
      <div
        className={cn(
          "fixed top-[112px] left-0 right-0 bg-secondary transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-8 pb-8 px-4 flex flex-col items-center gap-4">
          {/* Contact Info in Menu */}
          <div className="w-full max-w-[361px] flex flex-col items-center gap-3">
            <a
              href="tel:+94777599299"
              className="flex items-center gap-2.25 h-4"
            >
              <Phone size={12} color="#C2C2C2" strokeWidth={1} />
              <span className="text-ash text-xs font-normal leading-4">
                +94 777 599 299
              </span>
            </a>
            <a
              href="mailto:info@janco.lk"
              className="flex items-center gap-2.25 h-4"
            >
              <Mail size={12} color="#C2C2C2" strokeWidth={1} />
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
                  className="w-[107px] h-11 py-2.5 flex items-center justify-center text-white/90 text-sm font-normal uppercase leading-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <button className="px-5 py-2.5 bg-primary rounded-xl flex items-center justify-center gap-2">
              <span className="text-white text-base font-medium leading-5">
                Book a free consultation
              </span>
              <ArrowDownRight size={20} color="#FFFFFF" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
