import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Blog } from "@/lib/blog-types";

const categoryColors: Record<string, string> = {
  Guides: "bg-emerald-500",
  Security: "bg-red-500",
  Updates: "bg-blue-500",
  Tutorials: "bg-purple-500",
  News: "bg-amber-500",
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ blog }: { blog: Blog }) {
  const badgeColor = categoryColors[blog.category] || "bg-zinc-500";

  return (
    <article className="bg-zinc-900 rounded-2xl overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-300">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative h-48 sm:h-52 overflow-hidden">
          {blog.image_url ? (
            <Image
              src={blog.image_url}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <span className="text-zinc-600 text-4xl font-display font-bold">
                P
              </span>
            </div>
          )}
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${badgeColor}`}
          >
            {blog.category}
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-zinc-500 text-xs sm:text-sm mb-2">
            {formatDate(blog.created_at)} &middot; {blog.read_time}
          </p>

          <h3 className="text-white font-semibold text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-zinc-200 transition-colors">
            {blog.title}
          </h3>

          <p className="text-zinc-400 text-sm line-clamp-2 mb-5">
            {blog.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-zinc-500 text-sm">By {blog.author}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/20 rounded-full px-4 py-1.5 group-hover:bg-white group-hover:text-black transition-all duration-300">
              Read More
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
