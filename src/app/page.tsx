import { MobileNav } from "@/components/features/MobileNav";
import { Hero } from "@/components/features/Hero";
import { About } from "@/components/features/About";
import { Services } from "@/components/features/Services";
import { Projects } from "@/components/features/Projects";
import { Testimonials } from "@/components/features/Testimonials";
import { Blogs } from "@/components/features/Blogs";
import { RealEstate } from "@/components/features/RealEstate";
import InquiryForm from "@/components/features/InquiryForm";

export default function Home() {
  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <MobileNav />
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {/* Hero Section - Mobile */}
        <section className="md:hidden pt-[112px]">
          <Hero />
        </section>

        {/* About Section - Mobile */}
        <section className="md:hidden">
          <About />
        </section>

        {/* Services Section - Mobile */}
        <section className="md:hidden">
          <Services />
        </section>

        {/* Projects Section - Mobile */}
        <section className="md:hidden">
          <Projects />
        </section>

        {/* Testimonials Section - Mobile */}
        <section className="md:hidden">
          <Testimonials />
        </section>

        {/* Blogs Section - Mobile */}
        <section className="md:hidden">
          <Blogs />
        </section>

        {/* Real Estate Section - Mobile */}
        <section className="md:hidden">
          <RealEstate />
        </section>

        {/* Inquiry Form Section - Mobile */}
        <section className="md:hidden">
          <InquiryForm />
        </section>

        {/* Desktop placeholder - will be built later */}
        <section className="hidden md:block">
          <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-secondary">
              Desktop version coming soon...
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
