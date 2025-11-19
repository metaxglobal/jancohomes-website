import { MobileNav, DesktopNav } from "@/components/features/navigation";
import { HeroMobile, HeroDesktop } from "@/components/features/hero";
import { About } from "@/components/features/About";
import { Services } from "@/components/features/Services";
import { Projects } from "@/components/features/Projects";
import { Testimonials } from "@/components/features/Testimonials";
import { Blogs } from "@/components/features/Blogs";
import { RealEstate } from "@/components/features/RealEstate";
import InquiryForm from "@/components/features/InquiryForm";
import Footer from "@/components/features/Footer";

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
        {/* Will use responsive classes - same component for all screens */}
        <section className="w-full">
          <About />
        </section>

        {/* ===== SERVICES SECTION ===== */}
        {/* Will use responsive classes - same component for all screens */}
        <section className="bg-white w-full">
          <Services />
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        {/* Will use responsive classes - same component for all screens */}
        <section className="bg-background-3 w-full">
          <Projects />
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        {/* Will use responsive classes - same component for all screens */}
        <section className="bg-secondary w-full">
          <Testimonials />
        </section>

        {/* ===== BLOGS SECTION ===== */}
        {/* Will use responsive classes - same component for all screens */}
        <section className="bg-background-1 w-full">
          <Blogs />
        </section>

        {/* ===== REAL ESTATE SECTION ===== */}
        {/* Will use responsive classes - same component for all screens */}
        <section className="bg-white w-full">
          <RealEstate />
        </section>

        {/* ===== INQUIRY FORM SECTION ===== */}
        {/* Will use responsive classes - same component for all screens */}
        <section className="bg-secondary w-full">
          <InquiryForm />
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      {/* Will use responsive classes - same component for all screens */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
