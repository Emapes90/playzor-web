import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { supabase } from "@/lib/supabase";
import type { Blog } from "@/lib/blog-types";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) return null;
    return data;
  } catch {
    return null;
  }
}

async function getRelatedBlogs(
  category: string,
  currentSlug: string
): Promise<Blog[]> {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .eq("category", category)
      .neq("slug", currentSlug)
      .order("created_at", { ascending: false })
      .limit(3);

    if (error || !data) return [];
    return data;
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for could not be found.",
    };
  }

  return {
    title: `${blog.title} | Playzor Blog`,
    description: blog.description,
    keywords: [
      blog.category,
      "Playzor",
      "Minecraft server hosting",
      "game server hosting",
      blog.title,
      "Playzor blog",
      "Minecraft guides",
      "Minecraft tutorials",
      "game server tips",
    ],
    authors: [{ name: blog.author }],
    alternates: {
      canonical: `https://playzor.me/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | Playzor Blog`,
      description: blog.description,
      url: `https://playzor.me/blog/${blog.slug}`,
      siteName: "Playzor",
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
      authors: [blog.author],
      section: blog.category,
      images: blog.image_url
        ? [
            {
              url: blog.image_url,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [
            {
              url: "https://playzor.me/logo.png",
              width: 512,
              height: 512,
              alt: "Playzor Logo",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Playzor Blog`,
      description: blog.description,
      images: blog.image_url ? [blog.image_url] : ["https://playzor.me/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.category, blog.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://playzor.me/blog/${blog.slug}/#article`,
        headline: blog.title,
        description: blog.description,
        url: `https://playzor.me/blog/${blog.slug}`,
        datePublished: blog.created_at,
        dateModified: blog.updated_at,
        author: {
          "@type": "Person",
          name: blog.author,
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://playzor.me/#organization",
          name: "Playzor",
          logo: {
            "@type": "ImageObject",
            url: "https://playzor.me/logo.png",
          },
        },
        image: blog.image_url || "https://playzor.me/logo.png",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://playzor.me/blog/${blog.slug}`,
        },
        articleSection: blog.category,
        articleBody: blog.content.replace(/<[^>]*>/g, "").replace(/[#*`>\[\]!_~\-|]/g, "").replace(/\n+/g, " ").trim().slice(0, 500),
        wordCount: blog.content.replace(/<[^>]*>/g, "").replace(/[#*`>\[\]!_~\-|]/g, "").split(/\s+/).length,
        inLanguage: "en-US",
        isPartOf: {
          "@id": "https://playzor.me/blog/#blog",
        },
        keywords: `${blog.category}, Minecraft server hosting, game server hosting, Playzor, ${blog.title}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://playzor.me/blog/${blog.slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://playzor.me",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://playzor.me/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `https://playzor.me/blog/${blog.slug}`,
          },
        ],
      },
    ],
  };

  const categoryColors: Record<string, string> = {
    Guides: "bg-emerald-500",
    Security: "bg-red-500",
    Updates: "bg-blue-500",
    Tutorials: "bg-purple-500",
    News: "bg-amber-500",
  };

  const badgeColor = categoryColors[blog.category] || "bg-zinc-500";

  return (
    <main
      role="main"
      aria-label={`${blog.title} - Playzor Blog`}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 sm:mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badgeColor}`}
              >
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-5 sm:mb-6 leading-tight">
              {blog.title}
            </h1>

            <p className="text-zinc-400 text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
              {blog.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-zinc-500 text-sm border-b border-white/10 pb-6 sm:pb-8">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {blog.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={blog.created_at}>
                  {formatDate(blog.created_at)}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {blog.read_time}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {blog.category}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {blog.image_url && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 sm:mb-12 border border-white/5">
              <Image
                src={blog.image_url}
                alt={`${blog.title} - Playzor Blog`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {/* Blog Content */}
          <MarkdownRenderer content={blog.content} />

          {/* Tags / SEO Footer */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
            <p className="text-zinc-500 text-sm">
              Published by <strong className="text-zinc-300">{blog.author}</strong> on{" "}
              <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>{" "}
              in <strong className="text-zinc-300">{blog.category}</strong> on the
              Playzor Blog. Playzor is India&apos;s #1 Minecraft server hosting
              provider offering premium game servers with Ryzen 9, NVMe SSD, and
              DDoS protection.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section
          aria-label="Related Blog Posts"
          className="pb-20 sm:pb-32"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 sm:mb-10">
              Related{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                Posts.
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedBlogs.map((related) => {
                const relBadgeColor =
                  categoryColors[related.category] || "bg-zinc-500";
                return (
                  <article
                    key={related.id}
                    className="bg-zinc-900 rounded-2xl overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <Link href={`/blog/${related.slug}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        {related.image_url ? (
                          <Image
                            src={related.image_url}
                            alt={related.title}
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
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${relBadgeColor}`}
                        >
                          {related.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-white font-semibold text-base mb-2 line-clamp-2 group-hover:text-zinc-200 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-zinc-400 text-sm line-clamp-2">
                          {related.description}
                        </p>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
