import React from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/MobileNav";
import Footer from "@/components/features/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon, ArrowRight01Icon, Calendar03Icon, CallingIcon, InternetIcon, Mail01Icon, ReloadIcon } from "@hugeicons/core-free-icons";

export default function PrivacyPage() {
  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 md:hidden">
        <MobileNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[112px]">
        {/* Hero Section with Dark Background */}
        <section className="relative h-[340px] w-full overflow-hidden bg-secondary md:hidden">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[259px] top-[233px] h-[134px] w-[134px] rounded-full bg-primary opacity-30"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[-18px] top-[80px] h-[128px] w-[128px] rounded-full bg-primary opacity-25"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute left-[326px] top-[70px] h-[67px] w-[67px] rounded-full bg-primary opacity-10"
            style={{
              boxShadow: "128px 128px 128px",
              filter: "blur(64px)",
            }}
          />

          {/* Hero Content */}
          <div className="absolute left-4 top-[144px] w-[361px] inline-flex flex-col items-start justify-start gap-8">
            {/* Breadcrumb */}
            <div className="self-stretch h-5 inline-flex items-center justify-start gap-2">
              <Link
                href="/"
                className="flex items-center justify-start gap-1"
              >
                <div className="w-4 h-4 relative">
                  <HugeiconsIcon
                    icon={Home01Icon}
                    size={16}
                    color="#C2C2C2"
                    strokeWidth={1}
                  />
                </div>
                <div className="text-ash text-sm font-normal leading-[14px]">
                  Home
                </div>
              </Link>
              <div className="w-4 h-4 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  color="white"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex items-center justify-start gap-1">
                <div className="text-white text-sm font-normal leading-[14px]">
                  Privacy Policy
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px]">
                  <span className="text-white text-[40px] font-medium leading-9">
                    Privacy{" "}
                  </span>
                  <span className="text-primary text-[40px] font-medium leading-9">
                    Policy
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px] text-ash text-sm font-medium leading-[14px]">
                  Your privacy is important to us. This policy explains how
                  Janco Home & Construction collects, uses, and protects your
                  personal information.
                </div>
              </div>
              <div className="w-[270px] inline-flex items-center justify-start gap-2">
                <div className="w-5 h-5 relative overflow-hidden">
                  <HugeiconsIcon
                    icon={ReloadIcon}
                    size={20}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="inline-flex items-center justify-center gap-2.5">
                  <div className="text-ash text-sm font-normal leading-[14px]">
                    Last Updated: November 10, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content Section */}
        <section className="w-full px-4 pt-12 pb-12 inline-flex items-center justify-center gap-2.5">
          <div className="w-[361px] inline-flex flex-col items-start justify-start gap-10">
            {/* Introduction */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Introduction
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Welcome to Janco Home & Construction (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;). We value your privacy and are committed to protecting
                  your personal information. This Privacy Policy explains how we
                  collect, use, and safeguard the information you provide when
                  you visit our website or contact us through online forms,
                  WhatsApp, or other communication channels.
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  By using our website or submitting your information, you agree
                  to the terms of this Privacy Policy.
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Information We Collect
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We may collect the following types of information:
                </div>
                <div className="self-stretch">
                  <span className="text-secondary text-base font-medium leading-5">
                    Personal Information
                    <br />
                  </span>
                  <span className="text-secondary text-sm font-normal leading-[14px]">
                    <br />
                  </span>
                  <span className="text-secondary text-sm font-normal leading-[14px]">
                    Name
                    <br />
                    Phone number
                    <br />
                    Email address
                    <br />
                    Any additional information you provide through contact or
                    inquiry forms
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-secondary text-base font-medium leading-5">
                    Non-Personal Information
                    <br />
                  </span>
                  <span className="text-secondary text-sm font-normal leading-[14px]">
                    <br />
                  </span>
                  <span className="text-secondary text-sm font-normal leading-[14px]">
                    Browser type, device information, and operating system
                    <br />
                    IP address and general location
                    <br />
                    Website usage data collected through cookies and analytics
                    tools (such as Google Analytics 4)
                  </span>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="self-stretch inline-flex items-center justify-center gap-2.5">
                <div className="w-[360px] text-secondary text-2xl font-medium leading-6">
                  How We Use Your Information
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We use the information collected to:
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Respond to your inquiries and provide requested services
                  <br />
                  Schedule consultations or follow up on project requests
                  <br />
                  Improve our website, services, and customer experience
                  <br />
                  Analyze web traffic and marketing performance
                  <br />
                  Send updates, promotions, or news (only if you opt-in)
                </div>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Cookies & Tracking
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Our website may use cookies and similar technologies to
                  enhance user experience and analyze site performance. You can
                  control cookie preferences through your browser settings.
                </div>
              </div>
            </div>

            {/* Data Sharing & Disclosure */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px] text-secondary text-2xl font-medium leading-6">
                  Data Sharing & Disclosure
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We do not sell or rent your personal data. We may share
                  information only with:
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Service providers who help operate our website (e.g., hosting,
                  analytics, marketing platforms)
                  <br />
                  Legal authorities if required by law or to protect our legal
                  rights
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  All third-party partners comply with applicable data
                  protection laws.
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Data Security
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We implement reasonable technical and organizational measures
                  to protect your information from unauthorized access, misuse,
                  or disclosure. However, no internet transmission is 100%
                  secure, so we cannot guarantee absolute protection.
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Your Rights
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  You have the right to:
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Request access, correction, or deletion of your personal data
                  <br />
                  Withdraw consent for marketing communications
                  <br />
                  Ask questions about how your data is handled
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Data Retention
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We retain your information only as long as necessary for the
                  purposes outlined above or as required by law.
                </div>
              </div>
            </div>

            {/* Links to Other Websites */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Links to Other Websites
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Our website may contain links to external sites. We are not
                  responsible for the privacy practices or content of those
                  third-party websites.
                </div>
              </div>
            </div>

            {/* Updates to This Policy */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Updates to This Policy
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated &quot;Last
                  Updated&quot; date.
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Contact Us
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch flex flex-col items-start justify-start gap-3">
                  <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at:
                  </div>
                </div>
                <div
                  className="self-stretch p-5 rounded-[22px] outline outline-1 outline-ash flex flex-col items-start justify-center gap-6"
                  style={{
                    background:
                      "linear-gradient(180deg, #7CB342 0%, #689F38 100%)",
                  }}
                >
                  <div className="text-white text-2xl font-medium leading-6">
                    Janco Home & Construction
                  </div>
                  <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-4">
                    <div className="self-stretch h-6 inline-flex items-center justify-start gap-3">
                      <div className="w-6 h-6 relative">
                        <HugeiconsIcon
                          icon={CallingIcon}
                          size={24}
                          color="white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="text-white text-base font-medium leading-5">
                        +94 11 234 5678
                      </div>
                    </div>
                    <div className="self-stretch h-6 inline-flex items-center justify-start gap-3">
                      <div className="w-6 h-6 relative">
                        <HugeiconsIcon
                          icon={Mail01Icon}
                          size={24}
                          color="white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="text-white text-base font-medium leading-5">
                        info@jancohomeconstruction.lk
                      </div>
                    </div>
                    <div className="self-stretch h-6 inline-flex items-center justify-start gap-3">
                      <div className="w-6 h-6 relative">
                        <HugeiconsIcon
                          icon={InternetIcon}
                          size={24}
                          color="white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="text-white text-base font-medium leading-5">
                        www.jancohomeconstruction.lk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
