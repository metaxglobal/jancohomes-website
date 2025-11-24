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
      {/* Mobile Navigation (< 1024px - includes tablets/iPads) */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <MobileNav />
      </header>

      {/* Desktop Navigation (>= 1024px - laptops and larger) */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50">
        <DesktopNav />
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="min-h-screen bg-white w-full">
        <ScrollToHandler />
        
        {/* ===== HERO SECTION ===== */}
        <div className="lg:hidden">
          <HeroMobile />
        </div>
        <div className="hidden lg:block">
          <HeroDesktop />
        </div>

        {/* ===== ABOUT SECTION ===== */}
        <div className="lg:hidden" id="about">
          <AboutMobile />
        </div>
        <div className="hidden lg:block" id="about">
          <AboutDesktop />
        </div>

        {/* ===== SERVICES SECTION ===== */}
        <div className="lg:hidden" id="services">
          <ServicesMobile />
        </div>
        <div className="hidden lg:block" id="services">
          <ServicesDesktop />
        </div>

        {/* ===== PROJECTS SECTION ===== */}
        <div className="lg:hidden">
          <ProjectsMobile />
        </div>
        <div className="hidden lg:block">
          <ProjectsDesktop />
        </div>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <div className="lg:hidden">
          <TestimonialsMobile />
        </div>
        <div className="hidden lg:block">
          <TestimonialsDesktop />
        </div>

        {/* ===== BLOGS SECTION ===== */}
        <div className="lg:hidden">
          <BlogsMobile />
        </div>
        <div className="hidden lg:block">
          <BlogsDesktop />
        </div>

        {/* ===== REAL ESTATE SECTION ===== */}
        <div className="lg:hidden">
          <RealEstateMobile />
        </div>
        <div className="hidden lg:block">
          <RealEstateDesktop />
        </div>

        {/* ===== INQUIRY FORM SECTION ===== */}
        <div className="lg:hidden">
          <InquiryFormMobile />
        </div>
        <div className="hidden lg:block">
          <InquiryFormDesktop />
        </div>
      </main>

      {/* ========== FOOTER ========== */}
      <div className="lg:hidden">
        <FooterMobile />
      </div>
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
    </>
  );
}
