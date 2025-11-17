"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import { blogArticles } from "@/app/blogs/page";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: {
    day: string;
    month: string;
  };
}

interface BlogCardProps {
  blog: BlogPost;
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <div
      className="w-[320px] overflow-hidden rounded-[22px] inline-flex flex-col items-start justify-start flex-shrink-0"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        outline: "1px #C2C2C2 solid",
      }}
    >
      {/* Blog Image */}
      <div className="relative w-[320px] h-[204px]">
        <Image
          src={blog.image}
          alt={blog.title}
          width={320}
          height={204}
          className="w-[320px] h-[204px] relative object-cover"
        />

        {/* Date Badge */}
        <div
          className="absolute top-0 left-0 w-14 h-[72px] px-4 bg-primary flex flex-col items-center justify-center gap-0.5 rounded-br-[22px]"
          style={{
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
          }}
        >
          <div className="text-center">
            <span className="text-white text-[22px] font-normal leading-6">
              {blog.date.day}
              <br />
            </span>
            <span className="text-white text-base font-normal leading-5">
              {blog.date.month}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-[320px] p-5 bg-white flex flex-col items-center justify-center gap-3">
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-3">
            {/* Title */}
            <div className="self-stretch inline-flex items-center justify-center gap-2.5">
              <div className="w-[280px] text-secondary text-[22px] font-medium leading-6">
                {blog.title}
              </div>
            </div>

            {/* Excerpt */}
            <div className="self-stretch inline-flex items-center justify-center gap-2.5">
              <div className="w-[279px] text-secondary/75 text-sm font-normal leading-[14px]">
                {blog.excerpt}
              </div>
            </div>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blogs/${blog.id}`}
            className="pt-[10px] pr-5 rounded-xl inline-flex items-center justify-center gap-2"
          >
            <div className="flex items-center justify-start gap-2">
              <div className="text-primary text-base font-medium leading-5">
                Read More
              </div>
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

export function Blogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Transform blogArticles to match the local BlogPost interface
  const blogs: BlogPost[] = blogArticles.slice(0, 4).map((article) => {
    const dateObj = new Date(article.date);
    return {
      id: article.id,
      title: article.title,
      excerpt: article.excerpt,
      image: article.image,
      date: {
        day: dateObj.getDate().toString(),
        month: dateObj.toLocaleString("en-US", { month: "short" }),
      },
    };
  });

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const scrollAmount = index * (320 + 20); // card width + gap
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 320 + 20; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="w-full py-[72px] px-4">
      <div className="w-full max-w-[393px] mx-auto flex flex-col items-center justify-center gap-12">
      {/* Header Section */}
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <div className="self-stretch inline-flex items-center justify-between">
          <div className="flex-1">
            <span className="text-secondary text-[40px] font-medium leading-9">
              Latest{" "}
            </span>
            <span className="text-primary text-[40px] font-medium leading-9">
              Blogs
            </span>
          </div>
        </div>

        {/* Explore Blogs Button */}
        <Link
          href="/blogs"
          className="px-5 py-[10px] bg-secondary rounded-xl inline-flex items-center justify-center gap-2"
        >
          <div className="flex items-center justify-start gap-2">
            <div className="text-white text-base font-medium leading-5">
              Explore Blogs
            </div>
            <div className="w-5 h-5 relative overflow-hidden">
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="white"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Blog Cards Slider */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="w-[361px] h-[463px] overflow-x-auto overflow-y-hidden inline-flex items-center justify-start gap-5 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="snap-start">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="w-[361px] h-2 inline-flex items-center justify-center gap-4">
        <div className="w-20 h-2 flex items-start justify-start gap-2">
          {blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "flex-1 bg-primary" : "w-2 bg-ash"
              }`}
              aria-label={`Go to blog ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
    </div>
  );
}
