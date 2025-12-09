"use client";

import React from "react";
import Link from "next/link";
import { DesktopNav } from "@/components/features/navigation";
import { FooterDesktop } from "@/components/features/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  ArrowRight01Icon,
  ReloadIcon,
  CallingIcon,
  Mail01Icon,
  InternetIcon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

export default function TermsPageDesktop() {
  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <DesktopNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[0px]">
        {/* Hero Section */}
        <section className="relative h-[454px] w-full overflow-hidden bg-secondary">
          {/* Background Blur Effects */}
          <div
            className="absolute left-[738.75px] top-20 h-96 w-96 rounded-full bg-primary opacity-10"
            style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
          />
          <div
            className="absolute left-[78px] top-[304px] h-80 w-80 rounded-full bg-primary opacity-25"
            style={{ boxShadow: "128px 128px 128px", filter: "blur(64px)" }}
          />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-12 px-6 md:px-12 lg:px-20 xl:px-[120px] pt-[202px]">
            {/* Breadcrumb */}
            <div className="inline-flex h-5 items-center gap-2">
              <Link href="/" className="flex items-center gap-1">
                <HugeiconsIcon icon={Home01Icon} size={16} color="#C2C2C2" strokeWidth={1} />
                <span className="text-sm leading-[14px] text-ash">Home</span>
              </Link>
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="white" strokeWidth={1.5} />
              <span className="text-sm leading-[14px] text-white">Terms & Conditions</span>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-6">
              <h1 className="text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
                <span className="text-white">Terms & </span>
                <span className="text-primary">Conditions</span>
              </h1>
              <div className="flex flex-col gap-[13px]">
                <p className="w-[760px] text-base font-medium leading-5 tracking-tight text-ash">
                  Please read these terms and conditions carefully before using our website and services.
                </p>
                <div className="flex w-[270px] items-center gap-2">
                  <HugeiconsIcon icon={ReloadIcon} size={20} color="#7CB342" strokeWidth={1.5} />
                  <span className="text-sm leading-[14px] text-ash">Last Updated: December 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="flex justify-center px-6 md:px-12 lg:px-20 xl:px-[120px] py-24">
          <div className="flex w-full max-w-[1200px] flex-col gap-10">
            {/* Introduction */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">About This Website</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  This website is owned and operated by Janco Home & Construction. By using this website, you agree to comply with these Terms and Conditions. If you disagree with any part of these terms, please refrain from using our website.
                </p>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Acceptance of Terms</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. We may update these terms at any time without prior notice.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Privacy Policy</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
                </p>
              </div>
            </div>

            {/* Construction and Related Services */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Construction and Related Services</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Janco Home & Construction offers a variety of construction-related services. Any service agreements, quotations, or contracts are subject to separate terms and conditions specific to the service being provided.
              </p>
            </div>

            {/* Use of Website Content */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Use of Website Content</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Janco Home & Construction or its content suppliers and is protected by international copyright laws. Unauthorized use may violate copyright, trademark, and other laws.
                </p>
              </div>
            </div>

            {/* Copyright and Intellectual Property */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Copyright and Intellectual Property</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Unless otherwise stated, Janco Home & Construction and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Disclaimers</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  The information on this website is provided on an "as-is" basis. Janco Home & Construction makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the information, products, services, or related graphics contained on the website for any purpose.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Limitation of Liability</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  In no event will Janco Home & Construction be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Indemnification</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                You agree to indemnify and hold harmless Janco Home & Construction and its affiliates, officers, directors, employees, and agents from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the website, your violation of these Terms and Conditions, or your violation of any rights of another.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Dispute Resolution</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Any disputes arising out of or relating to these Terms and Conditions or the use of the website shall be resolved through good faith negotiations. If a resolution cannot be reached, the dispute shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Governing Law</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                These Terms and Conditions are governed by and construed in accordance with the laws of Sri Lanka. You irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Termination */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Termination</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We may terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions.
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-medium leading-10 tracking-tight text-secondary">Contact Us</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="flex h-[216px] flex-col gap-6 rounded-[22px] border border-ash bg-primary p-8">
                  <h3 className="text-2xl font-medium leading-6 text-white">Janco Home & Construction</h3>
                  <div className="flex h-[104px] flex-col gap-4">
                    <div className="flex h-6 items-center gap-3">
                      <HugeiconsIcon icon={CallingIcon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">0112 090 090</span>
                    </div>
                    <div className="flex h-6 items-center gap-3">
                      <HugeiconsIcon icon={Mail01Icon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">jancohomearch@gmail.com</span>
                    </div>
                    <div className="flex h-6 items-center gap-3">
                      <HugeiconsIcon icon={InternetIcon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">www.jancohomes.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="flex flex-col gap-6">
              <p className="text-center text-sm leading-[14px] text-[#4A5565]">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterDesktop />
    </>
  );
}
