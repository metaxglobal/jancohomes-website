// Desktop Footer Component - Using Hugeicons

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

export function FooterDesktop() {
  return (
    <footer className="w-full bg-[#0B0B0A] px-[120px] pt-[60px] pb-[60px] relative overflow-hidden">
      {/* Background Effects */}
      <div 
        className="w-[1201px] h-[473px] opacity-[0.03] absolute top-0 left-0"
        style={{ background: 'linear-gradient(90deg, #7CB342 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(180deg, #7CB342 0%, rgba(0, 0, 0, 0) 0%)' }}
      />
      <div 
        className="w-[358.91px] h-[358.91px] opacity-[0.13] bg-[#7CB342] rounded-full absolute"
        style={{ boxShadow: "240px 240px 240px", filter: "blur(120px)" }}
      />
      <div 
        className="w-[311.05px] h-[311.05px] opacity-[0.13] bg-[#7CB342] rounded-full absolute"
        style={{ boxShadow: "240px 240px 240px", filter: "blur(120px)" }}
      />
      <div 
        className="w-[1440px] h-[1.80px] absolute"
        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #7CB342 50%, rgba(0, 0, 0, 0) 100%)' }}
      />

      <div className="w-full flex flex-col gap-[68px] relative z-10">
          {/* Main Footer Content */}
          <div className="w-[1200px] flex items-start justify-between">
            {/* Company Info */}
            <div className="w-[307px] flex flex-col gap-6">
              <Image
                src="/logo.png"
                alt="Janco Logo"
                width={56}
                height={55}
                className="w-14 h-[55px]"
              />
              <p className="w-[260px] text-ash text-base font-medium leading-5">
                Building dreams and delivering quality construction solutions across Sri Lanka for over 20 years.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-primary text-xs font-normal leading-4">
                  Certified & Trusted
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-[192px] flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-sm font-normal uppercase leading-4">
                  Quick Links
                </h3>
                <div className="w-12 h-0.5 bg-primary" />
              </div>
              <div className="flex flex-col gap-4">
                <Link href="#about" className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="#services" className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="#projects" className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#blogs" className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors">
                  Blogs
                </Link>
                <Link href="#properties" className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors">
                  Properties
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="w-[264px] flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-sm font-normal uppercase leading-4">
                  Contact Us
                </h3>
                <div className="w-12 h-0.5 bg-primary" />
              </div>
              <div className="flex flex-col gap-4">
                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 p-2.5 bg-white/10 border border-white/20 rounded-[11px] flex items-center justify-center">
                    <HugeiconsIcon
                      icon={Location04Icon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="w-[177px] text-ash text-sm font-normal leading-[14px]">
                    No: 458 1/1, High Level Rd, Pannipitiya, Sri Lanka
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 p-2.5 bg-white/10 border border-white/20 rounded-[11px] flex items-center justify-center">
                    <HugeiconsIcon
                      icon={CallingIcon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-ash text-sm font-normal leading-[14px]">
                    0771 287 374
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 p-2.5 bg-white/10 border border-white/20 rounded-[11px] flex items-center justify-center">
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-ash text-sm font-normal leading-[14px]">
                    info@janco.lk
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="w-[264px] flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-sm font-normal uppercase leading-4">
                  Follow Us
                </h3>
                <div className="w-12 h-0.5 bg-primary" />
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/191WuVH49X/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 p-2.5 bg-white/10 border border-white/20 rounded-[11px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <HugeiconsIcon
                      icon={Facebook02Icon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={2}
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/jancohome/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 p-2.5 bg-white/10 border border-white/20 rounded-[11px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <HugeiconsIcon
                      icon={InstagramIcon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={2}
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/janco-home-and-construction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 p-2.5 bg-white/10 border border-white/20 rounded-[11px] flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <HugeiconsIcon
                      icon={Linkedin02Icon}
                      size={20}
                      color="#C2C2C2"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="w-[1201px] flex flex-col items-center gap-6">
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Footer Bottom Content */}
            <div className="w-full flex items-center justify-between">
              <p className="w-[320px] text-ash text-xs font-normal leading-4">
                © 2025 Janco Home & Construction. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <Link href="/terms" className="text-ash text-xs font-normal leading-4 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-ash text-xs font-normal leading-4 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-white text-xs font-normal leading-4">
                  Design & Develop by
                </span>
                <Image
                  src="/metax-logo.png"
                  alt="MetaX Global"
                  width={86}
                  height={12}
                  className="w-[86px] h-3"
                />
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
