// Desktop Blogs Component - Refined

"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import { blogArticles } from "@/app/blogs/page";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

function BlogCard({ id, title, excerpt, date, image }: BlogCardProps) {
  // Parse date to get day and month
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' });

  return (
    <div 
      className="w-[320px] flex-shrink-0 rounded-[22px] overflow-hidden inline-flex flex-col items-start justify-start"
      style={{ 
        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
        outline: '1px #C2C2C2 solid'
      }}
    >
      {/* Image with Date Badge Overlay */}
      <div className="relative w-[320px] h-[204px] flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={320}
          height={204}
          className="w-full h-full object-cover"
        />
        
        {/* Date Badge - Positioned absolutely over image */}
        <div 
          className="absolute top-0 left-0 w-14 h-[72px] px-4 bg-[#7CB342] rounded-br-[22px] flex flex-col justify-center items-center gap-0.5"
          style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10)' }}
        >
          <div className="text-center leading-none">
            <span className="text-white text-[24px] font-normal leading-6">{day}</span>
            <br />
            <span className="text-white text-[20px] font-normal leading-5">{month}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-[320px] p-5 bg-white flex flex-col justify-center items-center gap-3">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex justify-center items-center gap-2.5">
              <h3 className="w-[280px] text-[#1A1A1A] text-[24px] font-medium leading-6 line-clamp-2 min-h-[48px]">
                {title}
              </h3>
            </div>
            <div className="self-stretch flex justify-center items-center gap-2.5">
              <p className="w-[279px] text-[14px] font-normal leading-[14px] line-clamp-3 min-h-[42px]" style={{ color: 'rgba(26, 26, 26, 0.75)' }}>
                {excerpt}
              </p>
            </div>
          </div>
          <Link
            href={`/blogs/${id}`}
            className="h-12 px-5 py-2.5 rounded-xl flex justify-center items-center gap-2 transition-opacity hover:opacity-80"
            style={{ outline: '1px #C2C2C2 solid', outlineOffset: '-1px' }}
          >
            <div className="flex justify-start items-center gap-2">
              <span className="text-[#7CB342] text-[16px] font-medium leading-5">
                Read More
              </span>
              <div className="w-5 h-5 relative overflow-hidden">
                <HugeiconsIcon
                  icon={ArrowDownRight01Icon}
                  size={20}
                  color="#7CB342"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function BlogsDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get first 4 blog posts
  const featuredBlogs = blogArticles.slice(0, 4);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const scrollAmount = index * (320 + 24); // card width + gap
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 320 + 24; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full bg-[#E8E5DC] pt-24 pb-16 flex flex-col justify-center items-center gap-6" id="blogs">
      <div className="w-full max-w-[1440px] mx-auto px-[120px]">
        {/* Header */}
        <div className="self-stretch flex justify-between items-center mb-6">
          <div>
            <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
              Latest{" "}
            </span>
            <span className="text-[#7CB342] text-[72px] font-medium leading-[64px] tracking-[-0.3rem]">
              Blogs
            </span>
          </div>
          <Link
            href="/blogs"
            className="h-12 px-5 py-2.5 bg-[#1A1A1A] rounded-xl flex justify-center items-center gap-2"
          >
            <span className="text-white text-base font-medium leading-5">
              Explore Blogs
            </span>
            <div className="w-5 h-5 relative overflow-hidden">
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="white"
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>

        {/* Blog Cards Container with Scroll */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-[1200px] h-[483px] overflow-x-auto overflow-y-hidden flex justify-start items-center gap-6 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {featuredBlogs.map((blog) => (
            <div key={blog.id} className="snap-start">
              <BlogCard
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                image={blog.image}
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="w-[1200px] h-12 flex justify-center items-center gap-4 mt-6">
          <div className="w-20 h-2 flex items-start gap-2">
            {featuredBlogs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "flex-1 bg-[#7CB342]" : "w-2 bg-[#C2C2C2]"
                }`}
                aria-label={`Go to blog ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
