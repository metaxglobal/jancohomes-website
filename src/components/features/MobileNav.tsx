"use client";

import { useState } from "react";
import { Menu, Phone, Mail, ArrowDownRight, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-secondary border-b border-white-stroke">
        <div className="px-4 py-2.5 flex items-center justify-end gap-6">
          {/* Phone */}
          <a
            href="tel:+94777599299"
            className="flex items-center gap-2 text-ash text-xs hover:text-white transition-colors"
          >
            <Phone size={12} strokeWidth={2} />
            <span>+94 777 599 299</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@janco.lk"
            className="flex items-center gap-2 text-ash text-xs hover:text-white transition-colors"
          >
            <Mail size={12} strokeWidth={2} />
            <span>info@janco.lk</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full bg-secondary">
        <div className="px-4 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-[49px] h-[47px]">
            <Image
              src="/janco-logo.svg"
              alt="Janco Home & Construction"
              width={49}
              height={47}
              priority
            />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-lg transition-all",
              "hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} color="#FFFFFF" strokeWidth={2} />
            ) : (
              <Menu size={24} color="#FFFFFF" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Expanded Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[112px] bg-secondary z-50 transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="px-4 pt-8 pb-8 flex flex-col items-center gap-6">
          {/* Contact Info in Menu */}
          <div className="flex flex-col items-center gap-3">
            <a
              href="tel:+94777599299"
              className="flex items-center gap-2 text-ash text-xs hover:text-white transition-colors"
            >
              <Phone size={12} strokeWidth={2} />
              <span>+94 777 599 299</span>
            </a>
            <a
              href="mailto:info@janco.lk"
              className="flex items-center gap-2 text-ash text-xs hover:text-white transition-colors"
            >
              <Mail size={12} strokeWidth={2} />
              <span>info@janco.lk</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 flex flex-col items-center gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "py-2.5 px-4 text-white/90 text-sm font-normal uppercase",
                  "hover:text-white hover:bg-white/5 rounded-lg transition-all"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            variant="primary"
            className="px-5 py-2.5 rounded-xl flex items-center gap-2"
          >
            <span className="text-base font-medium">
              Book a free consultation
            </span>
            <ArrowDownRight size={20} color="#FFFFFF" strokeWidth={1.5} />
          </Button>
        </div>
      </div>
    </>
  );
}
