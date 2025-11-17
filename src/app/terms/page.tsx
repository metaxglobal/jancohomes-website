import React from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/MobileNav";
import Footer from "@/components/features/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,ArrowRight01Icon,ArrowDownRight01Icon,InternetIcon,Mail01Icon,CallingIcon,ReloadIcon } from "@hugeicons/core-free-icons";

export default function TermsPage() {
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
                  Terms & Conditions
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px]">
                  <span className="text-white text-[40px] font-medium leading-9">
                    Terms &{" "}
                  </span>
                  <span className="text-primary text-[40px] font-medium leading-9">
                    Conditions
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px] text-ash text-sm font-medium leading-[14px]">
                  Please read these terms and conditions carefully before using
                  our website and services.
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
                    Effective Date: November 11, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content Section */}
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
                  &quot;us&quot;). By accessing or using our website
                  (www.jancohomeconstruction.lk) and related services, you
                  agree to comply with and be bound by these Terms and
                  Conditions.
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  If you do not agree, please do not use our website or
                  services.
                </div>
              </div>
            </div>

            {/* Scope of Service */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Scope of Service
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Janco Home & Construction provides information about our
                  construction, renovation, and real estate services through
                  this website. All details, images, and descriptions are for
                  general informational purposes only and are subject to change
                  without prior notice.
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="self-stretch inline-flex items-center justify-center gap-2.5">
                <div className="w-[360px] text-secondary text-2xl font-medium leading-6">
                  User Responsibilities
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  By using our website, you agree to:
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Provide accurate and truthful information when submitting an
                  inquiry form or contacting us.
                  <br />
                  Use the website only for lawful purposes and in accordance
                  with applicable laws of Sri Lanka.
                  <br />
                  Not attempt to disrupt, damage, or gain unauthorized access to
                  our website or data.
                </div>
              </div>
            </div>

            {/* Intellectual Property Rights */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Intellectual Property Rights
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  All content on this website—including text, images, designs,
                  logos, and graphics—is the exclusive property of Janco Home &
                  Construction or its respective licensors. You may not copy,
                  modify, distribute, or reproduce any part of the site without
                  prior written permission.
                </div>
              </div>
            </div>

            {/* Project Information & Estimates */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="w-[361px] text-secondary text-2xl font-medium leading-6">
                  Project Information & Estimates
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Any cost estimates, project details, or proposals shared
                  through this website or via email are indicative and subject
                  to revision after site evaluation and discussion. Final
                  project costs, timelines, and specifications will be confirmed
                  through a formal contract or written agreement.
                </div>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Third-Party Links
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Our website may include links to external websites for your
                  convenience (e.g., social media, partner pages). We are not
                  responsible for the content, accuracy, or privacy practices of
                  third-party websites.
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Limitation of Liability
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  While we strive to keep all information accurate and up to
                  date, Janco Home & Construction is not liable for:
                </div>
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Any direct, indirect, or incidental damages arising from the
                  use of our website.
                  <br />
                  Technical issues, interruptions, or temporary unavailability
                  of the website.
                  <br />
                  Any reliance placed on information or materials on this site.
                </div>
              </div>
            </div>

            {/* Privacy & Data Protection */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Privacy & Data Protection
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your personal data. By using
                  our website, you consent to the collection and use of
                  information as described in that policy.
                </div>
                <Link
                  href="/privacy"
                  className="pr-5 rounded-xl inline-flex items-center justify-center gap-2"
                >
                  <div className="flex items-center justify-start gap-2">
                    <div className="text-primary text-base font-medium leading-5">
                      View our Privacy Policy
                    </div>
                    <div className="w-5 h-5 relative overflow-hidden">
                      <HugeiconsIcon
                        icon={ArrowDownRight01Icon}
                        size={20}
                        color="#7CB342"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Governing Law & Jurisdiction */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Governing Law & Jurisdiction
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  These Terms and Conditions are governed by the laws of Sri
                  Lanka. Any disputes will be subject to the exclusive
                  jurisdiction of the courts in Sri Lanka.
                </div>
              </div>
            </div>

            {/* Changes to These Terms */}
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="inline-flex items-center justify-center gap-2.5">
                <div className="text-secondary text-2xl font-medium leading-6">
                  Changes to These Terms
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  We may update these Terms and Conditions from time to time.
                  The updated version will be posted on this page with a revised
                  &quot;Effective Date.&quot; Continued use of our website after any
                  updates constitutes acceptance of the revised Terms.
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
                <div className="self-stretch text-secondary/75 text-sm font-normal leading-[14px]">
                  If you have any questions or concerns about these Terms and
                  Conditions, please contact us at:
                </div>
              </div>
              <div
                className="self-stretch p-5 rounded-[22px] outline outline-1 outline-ash flex flex-col items-start justify-center gap-6"
                style={{
                  background: "linear-gradient(180deg, #7CB342 0%, #689F38 100%)",
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

            {/* Final Statement */}
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="self-stretch text-center text-secondary/75 text-sm font-normal leading-[14px]">
                  By using our website and services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  and Conditions.
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
