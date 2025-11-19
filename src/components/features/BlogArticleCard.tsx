import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  ArrowDownRight01Icon,
} from "@hugeicons/core-free-icons";

interface BlogArticleCardProps {
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

export default function BlogArticleCard({
  id,
  title,
  excerpt,
  date,
  image,
  author,
}: BlogArticleCardProps) {
  return (
    <article className="w-[361px] flex-col rounded-[22px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10)] outline outline-1 outline-ash outline-offset-[-1px]">
      {/* Image */}
      <div className="relative h-[245px] w-[361px] overflow-hidden rounded-t-[22px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-[18px] rounded-b-[22px] bg-white p-5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {/* Date and Title */}
            <div className="flex flex-col gap-3">
              {/* Date */}
              <div className="flex items-start gap-6">
                <div className="flex items-center gap-1">
                  <HugeiconsIcon
                    icon={Calendar03Icon}
                    size={16}
                    color="#7CB342"
                    strokeWidth={2}
                  />
                  <span className="text-[14px] font-normal leading-[14px] text-secondary/75">
                    {date}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="flex items-center justify-start">
                <h3 className="w-[321px] text-[22px] font-medium leading-6 tracking-[-1px] text-secondary">
                  {title}
                </h3>
              </div>
            </div>

            {/* Excerpt */}
            <div className="flex items-center justify-start">
              <p className="w-[321px] text-[14px] font-normal leading-[14px] text-secondary/75">
                {excerpt}
              </p>
            </div>
          </div>

          {/* Author and Read More */}
          <div className="flex items-end justify-between">
            {/* Author Info */}
            <div className="flex h-10 w-[146px] items-center gap-2">
              <div className="h-[34px] w-[34px] overflow-hidden rounded-full">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={34}
                  height={40}
                  className="h-10 object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-[14px] font-normal leading-[14px] text-secondary">
                  {author.name}
                </span>
                <span className="text-[12px] font-normal leading-4 text-secondary/75">
                  {author.role}
                </span>
              </div>
            </div>

            {/* Read More Button */}
            <Link
              href={`/blogs/${id}`}
              className="flex items-center gap-2 rounded-[12px] py-[10px] pl-5 transition-opacity hover:opacity-80"
            >
              <span className="text-[16px] font-medium leading-5 text-primary">
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
    </article>
  );
}
