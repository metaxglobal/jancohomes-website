/**
 * Blog Article Detail Page
 * Dynamic page for individual blog articles
 * Route: /blogs/[id]
 */

"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import {
  BlogDetailPageMobile,
  BlogDetailPageDesktop,
} from "@/components/pages/blog-detail";
import { blogArticles } from "../page";

export default function BlogArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params using React.use()
  const { id } = use(params);

  // Find the article by ID
  const article = blogArticles.find((a) => a.id === id);

  // If article not found, show 404
  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden">
        <BlogDetailPageMobile article={article} />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <BlogDetailPageDesktop article={article} />
      </div>
    </>
  );
}
