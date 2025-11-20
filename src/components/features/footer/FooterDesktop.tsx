// Desktop Footer Component

import Link from "next/link";
import Image from "next/image";
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
    <div className="hidden lg:flex w-full px-[120px] py-[60px] bg-[#0B0B0A] flex-col items-start justify-start gap-[68px] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div
        className="w-[1201px] h-[473px] absolute opacity-[0.03]"
        style={{
          background: "linear-gradient(90deg, #7CB342 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(180deg, #7CB342 0%, rgba(0, 0, 0, 0) 0%)",
        }}
      />
      <div
        className="w-[358.91px] h-[358.91px] absolute opacity-[0.13] bg-primary rounded-full"
        style={{
          boxShadow: "240px 240px 240px",
          filter: "blur(120px)",
        }}
      />
      <div
        className="w-[311.05px] h-[311.05px] absolute opacity-[0.13] bg-primary rounded-full"
        style={{
          boxShadow: "240px 240px 240px",
          filter: "blur(120px)",
        }}
      />
      <div
        className="w-[1440px] h-[1.8px] absolute top-[0px] left-0"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #7CB342 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Main Footer Content */}
      <div className="w-[1200px] flex items-start justify-between relative z-10">
        {/* Brand Section */}
        <div className="w-[307px] h-[243px] flex flex-col items-start justify-start gap-6">
          <Image
            src="/janco-logo.svg"
            alt="Janco Home & Construction"
            width={56}
            height={55}
            className="w-14 h-[55px]"
          />
          <div className="w-[260px] text-ash text-base font-medium leading-5">
            Building dreams and delivering quality construction solutions across
            Sri Lanka for over 20 years.
          </div>
          <div className="self-stretch h-4 flex items-center justify-start gap-2">
            <div className="w-2 h-2 bg-primary" />
            <div className="text-primary text-xs font-normal leading-4">
              Certified & Trusted
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-[192px] h-[243px] flex flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-white text-sm font-normal uppercase leading-4">
              Quick Links
            </div>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="w-[264px] h-[243px] flex flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-white text-sm font-normal uppercase leading-4">
              Contact Us
            </div>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <div className="self-stretch h-[142px] flex flex-col items-start justify-start gap-4">
            {/* Address */}
            <div className="self-stretch flex items-center justify-start gap-3">
              <div
                className="w-8 h-8 p-2.5 bg-white/10 rounded-[11px] flex items-center justify-center gap-2.5"
                style={{
                  outline: "1px rgba(255, 255, 255, 0.20) solid",
                  outlineOffset: "-1px",
                }}
              >
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Location04Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/X9zNe9UcxMWEhTsx9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[177px] h-8 flex flex-col justify-center text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors"
              >
                No: 458 1/1, High Level Rd, Pannipitiya, Sri Lanka
              </a>
            </div>

            {/* Phone */}
            <div className="self-stretch h-8 flex items-center justify-start gap-3">
              <div
                className="w-8 h-8 p-2.5 bg-white/10 rounded-[11px] flex items-center justify-center gap-2.5"
                style={{
                  outline: "1px rgba(255, 255, 255, 0.20) solid",
                  outlineOffset: "-1px",
                }}
              >
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={CallingIcon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
              </div>
              <a
                href="tel:0771287374"
                className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors"
              >
                0771 287 374
              </a>
            </div>

            {/* Email */}
            <div className="self-stretch h-8 flex items-center justify-start gap-3">
              <div
                className="w-8 h-8 p-2.5 bg-white/10 rounded-[11px] flex items-center justify-center gap-2.5"
                style={{
                  outline: "1px rgba(255, 255, 255, 0.20) solid",
                  outlineOffset: "-1px",
                }}
              >
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Mail01Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1}
                  />
                </div>
              </div>
              <a
                href="mailto:info@janco.lk"
                className="text-ash text-sm font-normal leading-[14px] hover:text-primary transition-colors"
              >
                info@janco.lk
              </a>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="w-[264px] flex flex-col items-start justify-start gap-6">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-white text-sm font-normal uppercase leading-4">
              Follow Us
            </div>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-8">
            <div className="flex items-center justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 p-2.5 bg-white/10 rounded-[11px] flex items-center justify-center gap-2.5 hover:bg-white/20 transition-colors"
                  style={{
                    outline: "1px rgba(255, 255, 255, 0.20) solid",
                    outlineOffset: "-1px",
                  }}
                  aria-label={social.label}
                >
                  <HugeiconsIcon
                    icon={social.icon}
                    size={20}
                    color="#C2C2C2"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[1201px] flex flex-col items-center justify-center gap-6 relative z-10">
        <div
          className="self-stretch h-px"
          style={{
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 254.99, 254.98, 0.10) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div className="self-stretch flex items-center justify-between">
          <div className="w-[320px] text-ash text-xs font-normal leading-4">
            © 2025 Janco Home & Construction. All rights reserved.
          </div>
          <div className="flex items-center justify-start gap-6">
            <Link
              href="/terms"
              className="flex items-center justify-center gap-2.5"
            >
              <div className="text-ash text-xs font-normal leading-4 hover:text-primary transition-colors">
                Terms & Conditions
              </div>
            </Link>
            <Link
              href="/privacy"
              className="flex items-center justify-center gap-2.5"
            >
              <div className="text-ash text-xs font-normal leading-4 hover:text-primary transition-colors">
                Privacy Policy
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-start gap-2.5">
            <div className="text-white text-xs font-normal leading-4">
              Design & Develop by
            </div>
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
                className="w-[86px] h-3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
