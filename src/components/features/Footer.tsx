import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Location04Icon,
  CallingIcon,
  Mail01Icon,
  Facebook02Icon,
  InstagramIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Properties", href: "/properties" },
  ];

  const socialLinks = [
    { icon: Facebook02Icon, href: "https://www.facebook.com/share/191WuVH49X/?mibextid=wwXIfr", label: "Facebook" },
    { icon: InstagramIcon, href: "https://www.instagram.com/jancohome/#", label: "Instagram" },
    { icon: Linkedin02Icon, href: "https://www.linkedin.com/company/janco-home-and-construction", label: "LinkedIn" },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#0B0B0A]">
      <div className="w-full max-w-[393px] mx-auto px-4 pt-[48px] pb-[48px]">
        {/* Background Blur Effects */}
        <div
          className="pointer-events-none absolute left-4 top-12 h-[287.62px] w-[287.62px] rounded-full bg-primary opacity-[0.13] shadow-[240px_240px_240px]"
          style={{ filter: "blur(120px)" }}
        />
        <div
          className="pointer-events-none absolute left-4 top-[331.62px] h-[249.27px] w-[249.27px] rounded-full bg-primary opacity-[0.13] shadow-[240px_240px_240px]"
          style={{ filter: "blur(120px)" }}
        />

        {/* Horizontal Gradient Line */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[5.56px] w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #7CB342 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex w-full max-w-[362px] flex-col gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <Image
              src="/janco-logo.svg"
              alt="Janco Home & Construction"
              width={56}
              height={55}
              className="h-[55px] w-14"
            />
            <p className="text-[14px] font-medium leading-[14px] text-ash">
              Building dreams and delivering quality construction solutions
              across Sri Lanka for over 20 years.
            </p>
            <div className="flex h-4 items-center gap-2">
              <div className="h-2 w-2 bg-primary" />
              <span className="text-[12px] font-normal leading-4 text-primary">
                Certified & Trusted
              </span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[14px] font-normal uppercase leading-4 text-white">
                Quick Links
              </h3>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-normal leading-[14px] text-ash transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[14px] font-normal uppercase leading-4 text-white">
                Contact Us
              </h3>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center gap-[10px] rounded-[11px] bg-white/10 p-[10px] outline outline-1 outline-white/20 outline-offset-[-1px]">
                  <HugeiconsIcon
                    icon={Location04Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <a href="https://maps.app.goo.gl/X9zNe9UcxMWEhTsx9" target="_blank" rel="noopener noreferrer" className="flex h-8 w-[318px] flex-col justify-center text-[14px] font-normal leading-[14px] text-ash">
                  No: 458 1/1, High Level Rd, Pannipitiya, Sri Lanka
                </a>
              </div>

              {/* Phone */}
              <div className="flex h-8 items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center gap-[10px] rounded-[11px] bg-white/10 p-[10px] outline outline-1 outline-white/20 outline-offset-[-1px]">
                  <HugeiconsIcon
                    icon={CallingIcon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <a
                  href="tel:0771287374"
                  className="text-[14px] font-normal leading-[14px] text-ash transition-colors hover:text-primary"
                >
                  0771 287 374
                </a>
              </div>

              {/* Email */}
              <div className="flex h-8 items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center gap-[10px] rounded-[11px] bg-white/10 p-[10px] outline outline-1 outline-white/20 outline-offset-[-1px]">
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
                <a
                  href="mailto:info@janco.lk"
                  className="text-[14px] font-normal leading-[14px] text-ash transition-colors hover:text-primary"
                >
                  info@janco.lk
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[14px] font-normal uppercase leading-4 text-white">
                Follow Us
              </h3>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center gap-[10px] rounded-[11px] bg-white/10 p-[10px] outline outline-1 outline-white/20 outline-offset-[-1px] transition-colors hover:bg-white/20"
                    aria-label={social.label}
                  >
                    <HugeiconsIcon
                      icon={social.icon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={1.5}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 mt-8 flex flex-col items-center gap-6">
          {/* Horizontal Divider */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 254.99, 254.98, 0.10) 50%, rgba(0, 0, 0, 0) 100%)",
            }}
          />

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6">
              {/* Copyright */}
              <p className="w-80 text-center text-[12px] font-normal leading-4 text-ash">
                © 2025 Janco Home & Construction. All rights reserved.
              </p>

              {/* Terms & Privacy Links */}
              <div className="flex items-center gap-6">
                <Link
                  href="/terms"
                  className="text-[12px] font-normal leading-4 text-ash transition-colors hover:text-primary"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="text-[12px] font-normal leading-4 text-ash transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Design & Develop Credit */}
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] font-normal leading-4 text-white">
                Design & Develop by
              </span>
              <a
                href="https://www.nexgenlab.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/nexgen logo.png"
                  alt="NexGen Lab"
                  width={86}
                  height={12}
                  className="h-3 w-[86px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
