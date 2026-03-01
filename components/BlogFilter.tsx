"use client";

import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { Blog } from "@/lib/blog-types";

const FILTER_TABS = ["All", "Guides", "Security", "Updates"] as const;

export default function BlogFilter({ blogs }: { blogs: Blog[] }) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filtered =
    activeTab === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeTab);

  return (
    <>
      <div className="flex items-center gap-1 bg-zinc-900 rounded-full p-1 w-fit mb-10 sm:mb-12 border border-white/5">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-zinc-500 text-lg">
            No posts found in this category yet.
          </p>
        </div>
      )}
    </>
  );
}
