import { MobileNav } from "@/components/features/MobileNav";

export default function Home() {
  return (
    <>
      {/* Mobile Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <MobileNav />
      </header>

      {/* Main Content - Add top padding to account for fixed header */}
      <main className="min-h-screen bg-background-3 pt-[112px] md:pt-0">
        {/* Design System Test - Remove this later */}
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-secondary mb-8">
            Janco Home & Construction
          </h1>

          {/* Color Palette Test */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Color System
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-24 bg-primary rounded-lg border-2 border-secondary shadow-md" />
                <p className="text-sm font-semibold text-secondary">Primary</p>
                <p className="text-xs text-ash">#7CB342</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-secondary rounded-lg border-2 border-primary shadow-md" />
                <p className="text-sm font-semibold text-secondary">
                  Secondary
                </p>
                <p className="text-xs text-ash">#1A1A1A</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-background-1 rounded-lg border-2 border-secondary shadow-md" />
                <p className="text-sm font-semibold text-secondary">BG 1</p>
                <p className="text-xs text-ash">#E8E5DC</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-background-2 rounded-lg border-2 border-secondary shadow-md" />
                <p className="text-sm font-semibold text-secondary">BG 2</p>
                <p className="text-xs text-ash">#D9D9D9</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-background-footer rounded-lg border-2 border-primary shadow-md" />
                <p className="text-sm font-semibold text-secondary">Footer</p>
                <p className="text-xs text-ash">#0B0B0A</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-ash rounded-lg border-2 border-secondary shadow-md" />
                <p className="text-sm font-semibold text-secondary">Ash</p>
                <p className="text-xs text-ash">#C2C2C2</p>
              </div>
            </div>
          </div>

          {/* Typography Test */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Typography Scale (Inter)
            </h2>
            <div className="space-y-3 text-secondary">
              <p className="text-xs">Text XS - 12px</p>
              <p className="text-sm">Text SM - 14px</p>
              <p className="text-base">Text Base - 16px</p>
              <p className="text-lg">Text LG - 18px</p>
              <p className="text-xl">Text XL - 20px</p>
              <p className="text-2xl">Text 2XL - 24px</p>
              <p className="text-3xl">Text 3XL - 30px</p>
              <p className="text-4xl">Text 4XL - 36px</p>
            </div>
          </div>

          {/* Responsive Breakpoints Test */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Responsive Breakpoints
            </h2>
            <div className="bg-primary text-white p-6 rounded-lg font-semibold text-center">
              <span className="xs:hidden">XS: &lt; 375px</span>
              <span className="hidden xs:inline sm:hidden">XS: 375px+</span>
              <span className="hidden sm:inline md:hidden">
                SM: 640px+ (Tablet)
              </span>
              <span className="hidden md:inline lg:hidden">
                MD: 768px+ (Tablet)
              </span>
              <span className="hidden lg:inline xl:hidden">
                LG: 1024px+ (Laptop)
              </span>
              <span className="hidden xl:inline 2xl:hidden">
                XL: 1280px+ (Desktop)
              </span>
              <span className="hidden 2xl:inline 3xl:hidden">
                2XL: 1536px+ (2K)
              </span>
              <span className="hidden 3xl:inline 4xl:hidden">
                3XL: 1920px+ (Full HD)
              </span>
              <span className="hidden 4xl:inline">4XL: 2560px+ (4K)</span>
            </div>
          </div>

          <p className="text-sm text-ash">
            ✅ Phase 3: Mobile Navigation Complete
          </p>
        </div>
      </main>
    </>
  );
}
