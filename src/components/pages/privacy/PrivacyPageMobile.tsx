"use client";

import React from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/navigation";
import { FooterMobile } from "@/components/features/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ReloadIcon,
  CallingIcon,
  Mail01Icon,
  InternetIcon,
} from "@hugeicons/core-free-icons";

export default function PrivacyPageMobile() {
  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <MobileNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[0px]">
        {/* Hero Section */}
        <section className="relative h-[340px] w-full overflow-hidden bg-secondary">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[259px] top-[233px] h-[134px] w-[134px] rounded-full bg-primary opacity-30"
            style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
          />
          <div
            className="absolute -left-[18px] top-20 h-32 w-32 rounded-full bg-primary opacity-25"
            style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
          />
          <div
            className="absolute left-[326px] top-[70px] h-[67px] w-[67px] rounded-full bg-primary opacity-10"
            style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
          />

          {/* Hero Content */}
          <div className="absolute left-4 top-36 flex w-[361px] flex-col items-start gap-8">
            {/* Breadcrumb */}
            <div className="inline-flex h-5 items-center gap-2">
              <Link href="/" className="flex items-center gap-1">
                <HugeiconsIcon icon={Home01Icon} size={16} color="#C2C2C2" strokeWidth={1} />
                <span className="text-sm leading-[14px] text-ash">Home</span>
              </Link>
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" strokeWidth={1.5} />
              <span className="text-sm leading-[14px] text-white">Privacy Policy</span>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[40px] font-medium leading-9 tracking-[-0.1rem]">
                <span className="text-white">Privacy </span>
                <span className="text-primary">Policy</span>
              </h1>
              <p className="w-[361px] text-sm font-medium leading-[14px] tracking-tight text-ash">
                Your privacy is important to us. This policy explains how Janco Home & Construction collects, uses, and protects your personal information.
              </p>
              <div className="flex w-[270px] items-center gap-2">
                <HugeiconsIcon icon={ReloadIcon} size={20} color="#7CB342" strokeWidth={1.5} />
                <span className="text-sm leading-[14px] text-ash">Last Updated: November 10, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="flex justify-center px-4 py-12">
          <div className="flex w-[361px] flex-col gap-10">
            {/* Introduction */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Introduction</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Welcome to Janco Home & Construction ("we," "our," or "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when you visit our website or contact us through online forms, WhatsApp, or other communication channels.
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  By using our website or submitting your information, you agree to the terms of this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Information We Collect</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We may collect the following types of information:</p>
                <div className="text-sm leading-[14px] text-secondary">
                  <p className="mb-3 text-base font-medium leading-5">Personal Information</p>
                  <p className="text-secondary">
                    Name<br />
                    Phone number<br />
                    Email address<br />
                    Any additional information you provide through contact or inquiry forms
                  </p>
                </div>
                <div className="text-sm leading-[14px] text-secondary">
                  <p className="mb-3 text-base font-medium leading-5">Non-Personal Information</p>
                  <p className="text-secondary">
                    Browser type, device information, and operating system<br />
                    IP address and general location<br />
                    Website usage data collected through cookies and analytics tools (such as Google Analytics 4)
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">How We Use Your Information</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We use the information collected to:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Respond to your inquiries and provide requested services<br />
                  Schedule consultations or follow up on project requests<br />
                  Improve our website, services, and customer experience<br />
                  Analyze web traffic and marketing performance<br />
                  Send updates, promotions, or news (only if you opt-in)
                </p>
              </div>
            </div>

            {/* Cookies & Tracking */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Cookies & Tracking</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Our website may use cookies and similar technologies to enhance user experience and analyze site performance. You can control cookie preferences through your browser settings.
              </p>
            </div>

            {/* Data Sharing & Disclosure */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Data Sharing & Disclosure</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  We do not sell or rent your personal data. We may share information only with:
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Service providers who help operate our website (e.g., hosting, analytics, marketing platforms)<br />
                  Legal authorities if required by law or to protect our legal rights
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  All third-party partners comply with applicable data protection laws.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Data Security</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure. However, no internet transmission is 100% secure, so we cannot guarantee absolute protection.
              </p>
            </div>

            {/* Your Rights */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Your Rights</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">You have the right to:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Request access, correction, or deletion of your personal data<br />
                  Withdraw consent for marketing communications<br />
                  Ask questions about how your data is handled
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Data Retention</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We retain your information only as long as necessary for the purposes outlined above or as required by law.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Links to Other Websites</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Our website may contain links to external sites. We are not responsible for the privacy practices or content of those third-party websites.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Updates to This Policy</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Contact Us</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <div className="flex flex-col gap-6 rounded-[22px] border border-ash bg-gradient-to-b from-primary to-[#689F38] p-5">
                  <h3 className="text-2xl font-medium leading-6 text-white">Janco Home & Construction</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <HugeiconsIcon icon={CallingIcon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">+94 11 234 5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HugeiconsIcon icon={Mail01Icon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">info@jancohomeconstruction.lk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HugeiconsIcon icon={InternetIcon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">www.jancohomeconstruction.lk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterMobile />
    </>
  );
}
