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
          <div className="absolute top-36 left-0 right-0 flex justify-center px-4">
            <div className="flex w-full max-w-[361px] sm:max-w-[640px] md:max-w-[720px] flex-col items-start gap-8">
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
              <p className="w-full max-w-[361px] sm:max-w-[640px] md:max-w-[720px] text-sm font-medium leading-[14px] tracking-tight text-ash">
                Your privacy is important to us. This policy explains how Janco Home & Construction collects, uses, and protects your personal information.
              </p>
              <div className="flex w-[270px] items-center gap-2">
                <HugeiconsIcon icon={ReloadIcon} size={20} color="#7CB342" strokeWidth={1.5} />
                <span className="text-sm leading-[14px] text-ash">Last Updated: December 2025</span>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="flex justify-center px-4 py-12">
          <div className="flex w-full max-w-[361px] sm:max-w-[640px] md:max-w-[720px] mx-auto flex-col gap-10">
            {/* Introduction */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Introduction</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Janco Homes and Construction Pvt Ltd ("Janco Homes," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website (www.jancohome.lk) or use our construction and real estate services.
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  This Privacy Policy complies with the Personal Data Protection Act No. 9 of 2022 (PDPA) of Sri Lanka.
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  By using our website or services, you consent to the collection and use of your information as described in this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Information We Collect</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] font-medium text-secondary">Personal Information You Provide:</p>
                <p className="text-sm leading-[14px] text-secondary/75">When you use our services, we may collect:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Contact Information: Name, email address, phone numbers, WhatsApp number, residential address<br />
                  • Identification Information: National Identity Card (NIC) number, passport number (when required)<br />
                  • Financial Information: Bank account details for payments, income information for loan facilitation<br />
                  • Property Information: Land ownership details, construction requirements, project preferences, budget range<br />
                  • Documentation: Copies of NIC, land deeds, bank statements (when required for land purchases or financing)
                </p>
                <p className="text-sm leading-[14px] font-medium text-secondary">Information Automatically Collected:</p>
                <p className="text-sm leading-[14px] text-secondary/75">When you visit our website, we automatically collect:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • IP address, browser type, device type, operating system<br />
                  • Pages visited, time spent on pages, navigation patterns<br />
                  • General geographic location based on IP address<br />
                  • Information collected through cookies
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">How We Use Your Information</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We use your personal information to:</p>
                <p className="text-sm leading-[14px] font-medium text-secondary">For Construction Services:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Provide construction quotations and consultations<br />
                  • Execute construction contracts and deliver building services<br />
                  • Design architectural plans tailored to your requirements<br />
                  • Communicate project updates and timelines<br />
                  • Process payments and maintain financial records<br />
                  • Obtain necessary building approvals and clearances<br />
                  • Provide after-sales support and warranty services
                </p>
                <p className="text-sm leading-[14px] font-medium text-secondary">For Real Estate Services:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Process land plot purchase inquiries and reservations<br />
                  • Prepare and execute land sale agreements<br />
                  • Facilitate legal documentation and deed transfers<br />
                  • Arrange payment plans and bank loan facilitation
                </p>
                <p className="text-sm leading-[14px] font-medium text-secondary">For Customer Service:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Respond to your inquiries and requests<br />
                  • Schedule site visits and consultations<br />
                  • Address complaints and resolve disputes
                </p>
                <p className="text-sm leading-[14px] font-medium text-secondary">For Marketing (with your consent):</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Send newsletters and updates about new projects<br />
                  • Inform you about promotional offers<br />
                  • Request feedback and testimonials
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Information Sharing</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We may share your personal information with:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Service Providers: Architects, engineers, construction subcontractors, surveyors, legal advisors, and notary services (only information necessary for their work)<br />
                  • Government Authorities: Urban Development Authority (UDA), local municipal councils, Department of Registration, Survey Department, and other authorities as required by law for building approvals and legal compliance<br />
                  • Financial Institutions: Banks and financial companies when facilitating construction or land loans (with your consent)<br />
                  • Legal Requirements: Law enforcement agencies if required by court order or regulatory investigations
                </p>
                <p className="text-sm leading-[14px] font-medium text-secondary">What We DON'T Do:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  We will NEVER:<br />
                  • Sell your personal information to third parties<br />
                  • Share your information with unrelated marketing companies<br />
                  • Disclose your information to competitors<br />
                  • Use your information for purposes not disclosed in this policy
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Data Security</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We implement appropriate security measures to protect your personal information:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Secure office premises with access controls<br />
                  • Password-protected computer systems<br />
                  • Encrypted data transmission (SSL certificates on website)<br />
                  • Secure backup systems for data recovery<br />
                  • Staff training on data protection and confidentiality<br />
                  • Limited access to personal information on need-to-know basis
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  In the event of a data breach, affected individuals will be notified without undue delay.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Data Retention</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We retain your personal information as required by law:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Construction project records: Minimum 7 years after project completion<br />
                  • Land sale agreements: Permanently for legal records<br />
                  • Financial records: As required by tax and accounting regulations<br />
                  • Marketing communications: Until you unsubscribe
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  After retention periods expire, personal data is securely deleted or anonymized.
                </p>
              </div>
            </div>

            {/* Your Privacy Rights */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Your Privacy Rights</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  Under Sri Lanka's Personal Data Protection Act (PDPA), you have the right to:
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Access: Request a copy of your personal information<br />
                  • Correction: Request correction of inaccurate information<br />
                  • Deletion: Request deletion of your personal information (subject to legal requirements)<br />
                  • Objection: Object to processing of your information for marketing purposes<br />
                  • Portability: Request your data in a structured format<br />
                  • Withdraw Consent: Withdraw consent at any time (does not affect previous processing)
                </p>
                <p className="text-sm leading-[14px] font-medium text-secondary">How to Exercise Your Rights:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Contact us at:<br />
                  • Email: jancohomearch@gmail.com<br />
                  • Phone: 0112 090 090<br />
                  • Address: 458/1/1, High Level Road, Pannipitiya, Sri Lanka
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Cookies</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">We use cookies to improve your website experience:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Essential Cookies: Required for website functionality<br />
                  • Analytics Cookies: Help us understand visitor behavior (Google Analytics)<br />
                  • Functional Cookies: Remember your preferences
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  You can control cookies through your browser settings. Disabling essential cookies may affect website functionality.
                </p>
              </div>
            </div>

            {/* Marketing Communications */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Marketing Communications</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  We will only send you marketing communications if you have opted in to receive them. You can unsubscribe at any time by:
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • Clicking "Unsubscribe" in our emails<br />
                  • Replying "STOP" to SMS messages<br />
                  • Contacting us directly
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Note: Even if you opt out of marketing, we will still send essential service communications related to your projects.
                </p>
              </div>
            </div>

            {/* Photography and Project Showcase */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Photography and Project Showcase</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  • We photograph completed projects for marketing and promotional purposes<br />
                  • Project images may be used on our website, social media, and advertising materials<br />
                  • We will not disclose your name, address, or personal details without explicit consent<br />
                  • You may opt out of having your project photographed or showcased publicly
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Children's Privacy</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors without parental consent.
              </p>
            </div>

            {/* Third-Party Websites */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Third-Party Websites</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing personal information.
              </p>
            </div>

            {/* Updates to This Privacy Policy */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Updates to This Privacy Policy</h2>
              <p className="text-sm leading-[14px] text-secondary/75">
                We may update this Privacy Policy from time to time. Updated policies will be posted on our website with the "Last Updated" date. Continued use of our services after updates constitutes acceptance of the new policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Contact Information</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  For questions about this Privacy Policy or to exercise your privacy rights, please contact:
                </p>
                <div className="flex flex-col gap-6 rounded-[22px] border border-ash bg-gradient-to-b from-primary to-[#689F38] p-5">
                  <h3 className="text-2xl font-medium leading-6 text-white">Janco Homes and Construction Pvt Ltd</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <HugeiconsIcon icon={CallingIcon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">0112 090 090</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HugeiconsIcon icon={Mail01Icon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">jancohomearch@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HugeiconsIcon icon={InternetIcon} size={24} color="white" strokeWidth={1.5} />
                      <span className="text-base font-medium leading-5 text-white">www.jancohomes.com</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Privacy-Specific Matters:<br />
                  Email: jancohomearch@gmail.com<br />
                  Data Protection Officer: Viraj Perera<br />
                  Office Address: 458/1/1, High Level Road, Pannipitiya, Sri Lanka
                </p>
              </div>
            </div>

            {/* Data Protection Authority */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Data Protection Authority</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">
                  If you believe your privacy rights have been violated, you can file a complaint with:
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Data Protection Authority of Sri Lanka<br />
                  Website: www.dpa.gov.lk
                </p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium leading-6 tracking-tight text-secondary">Acknowledgment</h2>
              <div className="flex flex-col gap-3">
                <p className="text-sm leading-[14px] text-secondary/75">By using our website or engaging our services, you acknowledge that:</p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  • You have read and understood this Privacy Policy<br />
                  • You understand how we collect, use, and protect your personal information<br />
                  • You consent to the processing of your data as described<br />
                  • You understand your rights and how to exercise them
                </p>
                <p className="text-sm leading-[14px] text-secondary/75">
                  Thank you for trusting Janco Homes and Construction with your personal information and your dream home project.
                </p>
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
