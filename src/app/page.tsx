import { MobileNav, DesktopNav } from "@/components/features/navigation";
import { HeroMobile, HeroDesktop } from "@/components/features/hero";
import { AboutMobile, AboutDesktop } from "@/components/features/about";
import { ServicesMobile, ServicesDesktop } from "@/components/features/services";
import { ProjectsMobile, ProjectsDesktop } from "@/components/features/projects";
import { TestimonialsMobile, TestimonialsDesktop } from "@/components/features/testimonials";
import { BlogsMobile, BlogsDesktop } from "@/components/features/blogs";
import { RealEstateMobile, RealEstateDesktop } from "@/components/features/real-estate";
import { InquiryFormMobile, InquiryFormDesktop } from "@/components/features/inquiry-form";
import { FooterMobile, FooterDesktop } from "@/components/features/footer";
import ScrollToHandler from "@/components/ScrollToHandler";

export default function Home() {
  return (
    <>
      {/* ========== NAVIGATION ========== */}
      {/* Mobile Navigation (< 768px) */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <MobileNav />
      </header>

      {/* Desktop Navigation (>= 768px) */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <DesktopNav />
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="min-h-screen bg-white w-full">
        <ScrollToHandler />
        
        {/* ===== HERO SECTION ===== */}
        <div className="md:hidden">
          <HeroMobile />
        </div>
        <div className="hidden md:block">
          <HeroDesktop />
        </div>

        {/* ===== ABOUT SECTION ===== */}
        <div className="md:hidden" id="about">
          <AboutMobile />
        </div>
        <div className="hidden md:block" id="about">
          <AboutDesktop />
        </div>

        {/* ===== SERVICES SECTION ===== */}
        <div className="md:hidden" id="services">
          <ServicesMobile />
        </div>
        <div className="hidden md:block" id="services">
          <ServicesDesktop />
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <div className="md:hidden">
          <ProjectsMobile />
        </div>
        <div className="hidden md:block">
          <ProjectsDesktop />
        </div>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <div className="md:hidden">
          <TestimonialsMobile />
        </div>
        <div className="hidden md:block">
          <TestimonialsDesktop />
        </div>

        {/* ===== BLOGS SECTION ===== */}
        <div className="md:hidden">
          <BlogsMobile />
        </div>
        <div className="hidden md:block">
          <BlogsDesktop />
        </div>

        {/* ===== REAL ESTATE SECTION ===== */}
        <div className="md:hidden">
          <RealEstateMobile />
        </div>
        <div className="hidden md:block">
          <RealEstateDesktop />
        </div>

        {/* ===== INQUIRY FORM SECTION ===== */}
        <div className="md:hidden">
          <InquiryFormMobile />
        </div>
        <div className="hidden md:block">
          <InquiryFormDesktop />
        </div>
      </main>

      {/* ========== FOOTER ========== */}
      <div className="md:hidden">
        <FooterMobile />
      </div>
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
    </>
  );
}
