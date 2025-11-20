// Desktop Blogs Component

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

interface BlogCardDesktopProps {
  blog: BlogPost;
}

function BlogCardDesktop({ blog }: BlogCardDesktopProps) {
  return (
    <div
      className="w-[320px] overflow-hidden rounded-[22px] flex flex-col items-start justify-start flex-shrink-0"
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
          className="w-[320px] h-[204px] object-cover"
        />

        {/* Date Badge */}
        <div
          className="absolute top-0 left-0 w-14 h-[72px] px-4 bg-primary flex flex-col items-center justify-center gap-0.5 rounded-br-[22px]"
          style={{
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
          }}
        >
          <div className="text-center">
            <span className="text-white text-2xl font-normal leading-6">
              {blog.date.day}
              <br />
            </span>
            <span className="text-white text-xl font-normal leading-5">
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
            <div className="self-stretch flex items-center justify-center gap-2.5">
              <div className="w-[280px] text-secondary text-2xl font-medium leading-6">
                {blog.title}
              </div>
            </div>

            {/* Excerpt */}
            <div className="self-stretch flex items-center justify-center gap-2.5">
              <div className="w-[279px] text-secondary/75 text-sm font-normal leading-[14px]">
                {blog.excerpt}
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <Link
            href={`/blogs/${blog.id}`}
            className="h-12 px-5 py-2.5 rounded-xl inline-flex items-center justify-center gap-2"
            style={{
              outline: "1px #C2C2C2 solid",
              outlineOffset: "-1px",
            }}
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
                  strokeWidth={2}
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
        day: dateObj.getDate().toString().padStart(2, '0'),
        month: dateObj.toLocaleString("en-US", { month: "short" }),
      },
    };
  });

  return (
    <div className="hidden lg:flex w-full pt-24 pb-16 px-[120px] bg-background-1 flex-col items-center justify-center gap-6">
      {/* Header Section */}
      <div className="self-stretch flex items-center justify-between">
        {/* Title */}
        <div>
          <span className="text-secondary text-[72px] font-medium leading-[64px]">
            Latest{" "}
          </span>
          <span className="text-primary text-[72px] font-medium leading-[64px]">
            Blogs
          </span>
        </div>

        {/* Explore Blogs Button */}
        <Link
          href="/blogs"
          className="h-12 px-5 py-2.5 bg-secondary rounded-xl flex items-center justify-center gap-2"
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
                strokeWidth={2}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Blog Cards - Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="w-[1200px] h-[483px] overflow-x-auto overflow-y-hidden flex items-center justify-start gap-6 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {blogs.map((blog) => (
          <BlogCardDesktop key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="w-[1201px] h-12 flex items-center justify-center gap-4">
        <div className="w-20 h-2 flex items-start justify-start gap-2">
          <div className="flex-1 h-2 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-ash rounded-full" />
          <div className="w-2 h-2 bg-ash rounded-full" />
          <div className="w-2 h-2 bg-ash rounded-full" />
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
