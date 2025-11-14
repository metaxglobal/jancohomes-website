import { MobileNav } from "@/components/features/MobileNav";
import { Hero } from "@/components/features/Hero";

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
