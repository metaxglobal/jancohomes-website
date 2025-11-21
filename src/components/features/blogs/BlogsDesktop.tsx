// Desktop Blogs Component - Refined

"use client";

import { useState } from "react";
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
      className="w-[320px] rounded-[22px] overflow-hidden inline-flex flex-col items-start justify-start"
      style={{ 
        boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
        outline: '1px #C2C2C2 solid'
      }}
    >
      {/* Image */}
      <div className="relative w-[320px] h-[204px]">
        <Image
          src={image}
          alt={title}
          width={320}
          height={204}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Date Badge */}
      <div 
        className="w-14 h-[72px] px-4 bg-[#7CB342] rounded-br-[22px] flex flex-col justify-center items-center gap-0.5"
        style={{ boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.10)' }}
      >
        <div className="text-center">
          <span className="text-white text-[22px] font-normal leading-6">{day}</span>
          <br />
          <span className="text-white text-[20px] font-normal leading-5">{month}</span>
        </div>
      </div>

      {/* Content */}
      <div className="w-[320px] p-5 bg-white flex flex-col justify-center items-center gap-3">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch flex justify-center items-center gap-2.5">
              <h3 className="w-[280px] text-[#1A1A1A] text-[24px] font-medium leading-6">
                {title}
              </h3>
            </div>
            <div className="self-stretch flex justify-center items-center gap-2.5">
              <p className="w-[279px] text-[14px] font-normal leading-[14px]" style={{ color: 'rgba(26, 26, 26, 0.75)' }}>
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get first 4 blog posts
  const featuredBlogs = blogArticles.slice(0, 4);

  return (
    <section className="w-full bg-[#E8E5DC] pt-24 pb-16 flex flex-col justify-center items-center gap-6" id="blogs">
      <div className="w-full max-w-[1440px] mx-auto px-[120px]">
        {/* Header */}
        <div className="self-stretch flex justify-between items-center mb-6">
          <div>
            <span className="text-[#1A1A1A] text-[72px] font-medium leading-[64px]">
              Latest{" "}
            </span>
            <span className="text-[#7CB342] text-[72px] font-medium leading-[64px]">
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

        {/* Blog Cards Container */}
        <div className="w-[1200px] h-[483px] overflow-hidden flex items-center gap-6">
          {featuredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              image={blog.image}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="w-[1201px] h-12 flex justify-center items-center gap-4 mt-6">
          <div className="w-20 h-2 flex items-start gap-2">
            <div className="flex-1 h-2 bg-[#7CB342] rounded-full" />
            <div className="w-2 h-2 bg-[#C2C2C2] rounded-full" />
            <div className="w-2 h-2 bg-[#C2C2C2] rounded-full" />
            <div className="w-2 h-2 bg-[#C2C2C2] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
