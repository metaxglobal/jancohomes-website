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

export default function Home() {
  return (
    <>
      {/* ========== NAVIGATION ========== */}
      {/* Mobile Navigation (< 768px) */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <MobileNav />
      </header>

      {/* Desktop Navigation (>= 1024px) */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50">
        <DesktopNav />
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="min-h-screen bg-white w-full">
        
        {/* ===== HERO SECTION ===== */}
        {/* Mobile Hero (< 1024px) */}
        <section className="lg:hidden bg-secondary w-full">
          <HeroMobile />
        </section>

        {/* Desktop Hero (>= 1024px) */}
        <section className="hidden lg:block bg-secondary w-full">
          <HeroDesktop />
        </section>

        {/* ===== ABOUT SECTION ===== */}
        {/* Mobile About (< 1024px) */}
        <section className="lg:hidden w-full">
          <AboutMobile />
        </section>

        {/* Desktop About (>= 1024px) */}
        <section className="hidden lg:block w-full">
          <AboutDesktop />
        </section>

        {/* ===== SERVICES SECTION ===== */}
        {/* Mobile Services (< 1024px) */}
        <section className="lg:hidden bg-white w-full">
          <ServicesMobile />
        </section>

        {/* Desktop Services (>= 1024px) */}
        <section className="hidden lg:block bg-white w-full">
          <ServicesDesktop />
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        {/* Mobile Projects (< 1024px) */}
        <section className="lg:hidden w-full">
          <ProjectsMobile />
        </section>

        {/* Desktop Projects (>= 1024px) */}
        <section className="hidden lg:block w-full">
          <ProjectsDesktop />
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        {/* Mobile Testimonials (< 1024px) */}
        <section className="lg:hidden bg-secondary w-full">
          <TestimonialsMobile />
        </section>

        {/* Desktop Testimonials (>= 1024px) */}
        <section className="hidden lg:block bg-secondary w-full">
          <TestimonialsDesktop />
        </section>

        {/* ===== BLOGS SECTION ===== */}
        {/* Mobile Blogs (< 1024px) */}
        <section className="lg:hidden w-full">
          <BlogsMobile />
        </section>

        {/* Desktop Blogs (>= 1024px) */}
        <section className="hidden lg:block w-full">
          <BlogsDesktop />
        </section>

        {/* ===== REAL ESTATE SECTION ===== */}
        {/* Mobile Real Estate (< 1024px) */}
        <section className="lg:hidden w-full">
          <RealEstateMobile />
        </section>

        {/* Desktop Real Estate (>= 1024px) */}
        <section className="hidden lg:block w-full">
          <RealEstateDesktop />
        </section>

        {/* ===== INQUIRY FORM SECTION ===== */}
        {/* Mobile Inquiry Form (< 1024px) */}
        <section className="lg:hidden bg-secondary w-full">
          <InquiryFormMobile />
        </section>

        {/* Desktop Inquiry Form (>= 1024px) */}
        <section className="hidden lg:block bg-secondary w-full">
          <InquiryFormDesktop />
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      {/* Mobile Footer (< 1024px) */}
      <footer className="lg:hidden">
        <FooterMobile />
      </footer>

      {/* Desktop Footer (>= 1024px) */}
      <footer className="hidden lg:block">
        <FooterDesktop />
      </footer>
    </>
  );
}
