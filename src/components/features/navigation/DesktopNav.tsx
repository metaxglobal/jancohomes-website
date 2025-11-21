// Desktop Navigation Component - Figma Spec

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon, CallingIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import ConsultationModalDesktop from "@/components/features/ConsultationModalDesktop";

export function DesktopNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a hash link (section link)
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2); // Remove "/#"
      
      // If we're on the homepage
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      // If we're on another page, let the Link component handle navigation
      // and the browser will scroll to the hash
    }
  };

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Properties", href: "/properties" },
  ];

  return (
    <nav className="w-full" style={{ boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10)' }}>
      {/* Top Bar - Contact Info - Full width background */}
      <div className="w-full bg-[#1A1A1A] border-b border-white/20">
        <div className="w-full max-w-[1440px] mx-auto h-[49px] pb-px px-[120px]">
          <div className="h-12 flex items-center justify-end gap-6">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 relative">
                <HugeiconsIcon
                  icon={CallingIcon}
                  size={12}
                  color="#C2C2C2"
                  strokeWidth={1}
                />
              </div>
              <span className="text-[#C2C2C2] text-xs font-normal leading-4">+94 777 599 299</span>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 relative">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={12}
                  color="#C2C2C2"
                  strokeWidth={1}
                />
              </div>
              <span className="text-[#C2C2C2] text-xs font-normal leading-4">info@janco.lk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Full width background */}
      <div className="w-full bg-[#1A1A1A]">
        <div className="w-full max-w-[1440px] mx-auto h-[97px] px-[120px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/janco-logo.svg"
              alt="Janco Home & Construction"
              width={49}
              height={47}
              className="w-[49px] h-[47px]"
            />
          </Link>

          {/* Navigation Links & CTA */}
          <div className="flex items-center gap-12">
            {/* Nav Links */}
            <div className="flex items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group w-[107px] h-11 py-2.5 flex items-center justify-center transition-colors"
                >
                  <span className="text-white text-sm font-normal uppercase leading-4 group-hover:text-[#7CB342] transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="h-10 px-5 py-2.5 bg-[#7CB342] rounded-xl flex items-center gap-2 hover:bg-[#7CB342]/90 transition-colors"
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
      <ConsultationModalDesktop
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
}

