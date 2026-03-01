import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogFilter from "@/components/BlogFilter";
import { supabase } from "@/lib/supabase";
import type { Blog } from "@/lib/blog-types";

export const revalidate = 60;

export default async function BlogPage() {
  let blogs: Blog[] = [];

  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      blogs = data;
    }
  } catch {
    // Supabase not configured or table doesn't exist
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://playzor.me/blog/#blog",
        name: "Playzor Blog - Minecraft Server Hosting Guides & Tutorials",
        description:
          "Expert guides, tutorials, security tips, and updates about Minecraft server hosting and game server management by Playzor.",
        url: "https://playzor.me/blog",
        publisher: {
          "@id": "https://playzor.me/#organization",
        },
        inLanguage: "en-US",
        isPartOf: {
          "@id": "https://playzor.me/#website",
        },
      },
      {
        "@type": "CollectionPage",
        "@id": "https://playzor.me/blog/#webpage",
        url: "https://playzor.me/blog",
        name: "Playzor Blog - Minecraft Server Hosting Guides & Tutorials",
        description:
          "Read the latest Minecraft server hosting guides, tutorials, security tips, and game server management articles on the Playzor Blog.",
        isPartOf: {
          "@id": "https://playzor.me/#website",
        },
        about: {
          "@id": "https://playzor.me/blog/#blog",
        },
        breadcrumb: {
          "@id": "https://playzor.me/blog/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/blog/#breadcrumb",
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
        ],
      },
      ...blogs.map((blog) => ({
        "@type": "BlogPosting",
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
          "@id": "https://playzor.me/#organization",
        },
        image: blog.image_url || "https://playzor.me/logo.png",
        mainEntityOfPage: `https://playzor.me/blog/${blog.slug}`,
        articleSection: blog.category,
        inLanguage: "en-US",
      })),
    ],
  };

  return (
    <main
      role="main"
      aria-label="Playzor Blog - Minecraft Server Hosting Guides and Tutorials"
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
              Playzor{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                Blog.
              </span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
              Guides, tutorials, security tips, and updates about Minecraft
              server hosting and game server management from Playzor.
            </p>
          </div>

          <BlogFilter blogs={blogs} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
