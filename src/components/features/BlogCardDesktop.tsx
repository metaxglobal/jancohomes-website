/**
 * Blog Card - Desktop Version
 * 387px width card for blogs page with 245px image
 */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

interface BlogCardDesktopProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export function BlogCardDesktop({
  id,
  title,
  excerpt,
  date,
  image,
  author,
}: BlogCardDesktopProps) {
  return (
    <div className="inline-flex w-full max-w-[387px] flex-col items-start justify-start rounded-[22px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)] outline outline-1 outline-ash">
      {/* Image */}
      <div className="relative h-[245px] w-full overflow-hidden rounded-t-[22px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 387px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-start gap-[18px] self-stretch rounded-b-[22px] bg-white p-5">
        <div className="flex flex-col items-start justify-start gap-6 self-stretch">
          {/* Header Section */}
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            {/* Date and Title */}
            <div className="flex flex-col items-start justify-start gap-3 self-stretch">
              {/* Date */}
              <div className="inline-flex items-start justify-start gap-6 self-stretch">
                <div className="flex items-center justify-start gap-1">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={1.5}
                  />
                  <div className="text-[14px] font-normal leading-[14px] text-secondary/75">
                    {date}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="inline-flex items-center justify-start gap-2.5 self-stretch">
                <div className="w-[321px] text-[24px] font-medium leading-6 tracking-[-0.04rem] text-secondary">
                  {title}
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="inline-flex items-center justify-start gap-2.5 self-stretch">
              <div className="w-[321px] text-[14px] font-normal leading-[14px] tracking-tight text-secondary/75">
                {excerpt}
              </div>
            </div>
          </div>

          {/* Author and CTA */}
          <div className="inline-flex items-center justify-between self-stretch">
            {/* Author Info */}
            <div className="flex flex-col gap-1">
              <span className="text-[14px] font-normal leading-[14px] text-secondary">
                {author.name}
              </span>
              <span className="text-[12px] font-normal leading-4 text-secondary/75">
                {author.role}
              </span>
            </div>

            {/* Read More Button */}
            <Link
              href={`/blogs/${id}`}
              className="flex items-center justify-center gap-2 rounded-[12px] px-5 py-2.5 outline outline-1 outline-ash transition-opacity hover:opacity-80"
            >
              <span className="text-[16px] font-medium leading-5 text-[#7CB342] whitespace-nowrap">
                Read More
              </span>
              <HugeiconsIcon
                icon={ArrowDownRight01Icon}
                size={20}
                color="#7CB342"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
