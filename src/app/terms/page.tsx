import React from "react";
import Link from "next/link";
import { MobileNav } from "@/components/features/navigation";
import Footer from "@/components/features/Footer";
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

export default function TermsPage() {
  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <MobileNav />
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pt-[112px]">
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
              <span className="text-sm leading-[14px] text-white">Terms & Conditions</span>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[40px] font-medium leading-9">
                <span className="text-white">Terms & </span>
                <span className="text-primary">Conditions</span>
              </h1>
              <p className="w-[361px] text-sm font-medium leading-[14px] text-ash">
                Please read these terms and conditions carefully before using our website and services.
              </p>
              <div className="flex w-[270px] items-center gap-2">
                <HugeiconsIcon icon={ReloadIcon} size={20} color="#7CB342" strokeWidth={1.5} />
                <span className="text-sm leading-[14px] text-ash">Effective Date: November 11, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="flex justify-center px-4 py-12">
          <div className="flex w-[361px] flex-col gap-10">
            {/* Introduction */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Introduction</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Welcome to Janco Home & Construction ("we," "our," or "us"). By accessing or using our website (www.jancohomeconstruction.lk) and related services, you agree to comply with and be bound by these Terms and Conditions.
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  If you do not agree, please do not use our website or services.
                </p>
              </div>
            </div>

            {/* Scope of Service */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Scope of Service</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Janco Home & Construction provides information about our construction, renovation, and real estate services through this website. All details, images, and descriptions are for general informational purposes only and are subject to change without prior notice.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">User Responsibilities</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">By using our website, you agree to:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Provide accurate and truthful information when submitting an inquiry form or contacting us.<br />
                  Use the website only for lawful purposes and in accordance with applicable laws of Sri Lanka.<br />
                  Not attempt to disrupt, damage, or gain unauthorized access to our website or data.
                </p>
              </div>
            </div>

            {/* Intellectual Property Rights */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Intellectual Property Rights</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                All content on this website—including text, images, designs, logos, and graphics—is the exclusive property of Janco Home & Construction or its respective licensors. You may not copy, modify, distribute, or reproduce any part of the site without prior written permission.
              </p>
            </div>

            {/* Project Information & Estimates */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Project Information & Estimates</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Any cost estimates, project details, or proposals shared through this website or via email are indicative and subject to revision after site evaluation and discussion. Final project costs, timelines, and specifications will be confirmed through a formal contract or written agreement.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Third-Party Links</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Our website may include links to external websites for your convenience (e.g., social media, partner pages). We are not responsible for the content, accuracy, or privacy practices of third-party websites.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Limitation of Liability</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  While we strive to keep all information accurate and up to date, Janco Home & Construction is not liable for:
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Any direct, indirect, or incidental damages arising from the use of our website.<br />
                  Technical issues, interruptions, or temporary unavailability of the website.<br />
                  Any reliance placed on information or materials on this site.
                </p>
              </div>
            </div>

            {/* Privacy & Data Protection */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Privacy & Data Protection</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal data. By using our website, you consent to the collection and use of information as described in that policy.
                </p>
                <Link href="/privacy" className="inline-flex items-center gap-2 rounded-xl pr-5">
                  <span className="text-base font-medium leading-5 text-primary">View our Privacy Policy</span>
                  <HugeiconsIcon icon={ArrowDownRight01Icon} size={20} color="#7CB342" strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Communication */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Communication</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Our website may contain links to external sites. We are not responsible for the privacy practices or content of those third-party websites.
              </p>
            </div>

            {/* Governing Law & Jurisdiction */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Governing Law & Jurisdiction</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Changes to These Terms</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We may update these Terms and Conditions from time to time. The updated version will be posted on this page with a revised "Effective Date." Continued use of our website after any updates constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 text-secondary">Contact Us</h2>
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

            {/* Acknowledgement */}
            <div className="flex flex-col gap-6">
              <p className="text-center text-sm leading-[14px] text-secondary/75">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
