/**
 * Desktop Navigation Component
 * 
 * This component will display the desktop navigation bar for screens >= 768px (md breakpoint)
 * Will be implemented based on Figma desktop design
 */

import Link from "next/link";
import Image from "next/image";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center justify-between w-full px-8 lg:px-12 xl:px-16 py-6 bg-secondary">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">J</span>
          </div>
          <span className="text-white font-semibold text-xl">Janco</span>
        </Link>

        {/* Navigation Links - To be implemented based on Figma */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-white hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/properties" className="text-white hover:text-primary transition-colors">
            Properties
          </Link>
          <Link href="/blogs" className="text-white hover:text-primary transition-colors">
            Blogs
          </Link>
        </div>

        {/* CTA Button - To be styled based on Figma */}
        <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
