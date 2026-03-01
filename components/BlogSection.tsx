import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
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

export default async function BlogSection() {
  let blogs: Blog[] = [];

  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(4);

    if (!error && data) {
      blogs = data;
    }
  } catch {
    // Supabase not configured yet or table doesn't exist - silently skip
  }

  if (blogs.length === 0) return null;

  return (
    <section
      id="blog"
      aria-label="Playzor Blog - Latest Minecraft Hosting Guides and Tutorials"
      className="py-14 sm:py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Latest from Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                Blog.
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Guides, tutorials, and tips for Minecraft server hosting.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 flex-shrink-0"
          >
            View More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {blogs.map((blog) => {
            const badgeColor = categoryColors[blog.category] || "bg-zinc-500";
            return (
              <article
                key={blog.id}
                className="bg-zinc-900 rounded-xl overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    {blog.image_url ? (
                      <Image
                        src={blog.image_url}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                        <span className="text-zinc-600 text-3xl font-display font-bold">
                          P
                        </span>
                      </div>
                    )}
                    <span
                      className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white ${badgeColor}`}
                    >
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-zinc-500 text-[11px] mb-1.5">
                      {formatDate(blog.created_at)} &middot; {blog.read_time}
                    </p>

                    <h3 className="text-white font-semibold text-sm mb-1.5 line-clamp-2 leading-snug group-hover:text-zinc-200 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-zinc-400 text-xs line-clamp-2 mb-3">
                      {blog.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-xs">
                        By {blog.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-white border border-white/20 rounded-full px-3 py-1 group-hover:bg-white group-hover:text-black transition-all duration-300">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            View More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
