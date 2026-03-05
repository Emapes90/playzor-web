import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function MinecraftServerHosting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://playzor.me/minecraft-server-hosting/#webpage",
        url: "https://playzor.me/minecraft-server-hosting",
        name: "Best Minecraft Server Hosting India 2026 | Playzor #1 Rated",
        description:
          "India's #1 rated Minecraft server hosting provider. AMD Ryzen 9 7950X, NVMe SSD, DDoS protection, 99.9% uptime. ₹199/month. Java, Bedrock, Forge, Fabric, Paper. 500+ gamers trust Playzor.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        about: { "@id": "https://playzor.me/#organization" },
        breadcrumb: {
          "@id": "https://playzor.me/minecraft-server-hosting/#breadcrumb",
        },
        inLanguage: "en-IN",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/minecraft-server-hosting/#breadcrumb",
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
            name: "Minecraft Server Hosting",
            item: "https://playzor.me/minecraft-server-hosting",
          },
        ],
      },
      {
        "@type": "Product",
        name: "Playzor Minecraft Server Hosting",
        description:
          "India's best Minecraft server hosting with AMD Ryzen 9 7950X processors, NVMe SSD storage, enterprise DDoS protection, unlimited player slots, and 99.9% uptime guarantee. Support for Java, Bedrock, Forge, Fabric, Paper, Spigot, Purpur, and 100+ modpacks.",
        brand: {
          "@type": "Brand",
          name: "Playzor",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "199",
          highPrice: "1199",
          offerCount: "4",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best Minecraft server hosting in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor is India's #1 rated Minecraft server hosting with 4.9/5 from 500+ customers. Ryzen 9 7950X, NVMe SSD, enterprise DDoS protection, 99.9% uptime, instant setup from ₹199/month. Servers in India (Mumbai) and Singapore.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Minecraft server hosting cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor offers Minecraft hosting from ₹199/month (Iron Plan: 2GB RAM, 1 vCPU, 20GB NVMe) to ₹1199/month (Netherite Plan: 16GB RAM, 6 vCPU, 120GB NVMe). All plans include DDoS protection, unlimited slots, and 24/7 support.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor support Minecraft Java and Bedrock?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor supports both Minecraft Java and Bedrock Edition, including crossplay via Geyser + Floodgate. All server software supported: Paper, Spigot, Purpur, Forge, Fabric, NeoForge, Velocity, BungeeCord.",
            },
          },
          {
            "@type": "Question",
            name: "Can I host modded Minecraft servers on Playzor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! Playzor supports all modloaders (Forge, Fabric, NeoForge, Quilt) and 100+ modpacks including Pixelmon, RLCraft, FTB, All The Mods, Create, Vault Hunters, and more. One-click installation available.",
            },
          },
          {
            "@type": "Question",
            name: "Where are Playzor Minecraft servers located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor has servers in India (Mumbai) and Singapore. Indian players get 5-30ms ping. Enterprise-grade Tier-3+ data centers with AMD Ryzen 9 7950X and NVMe SSD.",
            },
          },
          {
            "@type": "Question",
            name: "Is Playzor better than GBNodes, Apex Hosting, and Shockbyte?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For Indian gamers, Playzor offers major advantages: India-based servers (5-30ms ping vs 100-200ms), INR pricing from ₹199/mo, Ryzen 9 hardware, NVMe SSD, enterprise DDoS protection, and bilingual support. 500+ gamers rate us 4.9/5.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main
      role="main"
      aria-label="Best Minecraft Server Hosting India - Playzor"
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* SEO-optimized content section */}
      <section className="pt-32 sm:pt-40 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Best{" "}
            <span className="text-emerald-500">Minecraft Server Hosting</span>{" "}
            in India
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Playzor is India&apos;s #1 rated Minecraft server hosting provider.
            Get premium hosting powered by AMD Ryzen 9 7950X processors, NVMe
            SSD storage, and enterprise-grade DDoS protection with 99.9% uptime
            guarantee — starting at just ₹199/month.
          </p>
          <p className="text-zinc-500 text-base max-w-3xl mx-auto mb-8">
            Full support for Minecraft Java Edition, Bedrock Edition, crossplay
            via Geyser, Forge, Fabric, NeoForge, Paper, Spigot, Purpur,
            Velocity, BungeeCord, and 100+ modpacks including Pixelmon,
            Cobblemon, RLCraft, Feed The Beast, All The Mods, SkyFactory,
            Create, and Vault Hunters. Server locations in India (Mumbai) and
            Singapore for ultra-low ping. Trusted by 500+ gamers.
          </p>
        </div>
      </section>

      <Features />
      <Locations />
      <Pricing />
      <Reviews />

      {/* SEO Content Block */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto prose prose-invert prose-zinc">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
            Why Choose Playzor for Minecraft Server Hosting?
          </h2>
          <div className="text-zinc-400 space-y-4 text-base leading-relaxed">
            <p>
              Playzor delivers India&apos;s fastest and most reliable Minecraft
              server hosting experience. Unlike international hosts like Apex
              Hosting, BisectHosting, or Shockbyte, our servers are physically
              located in India (Mumbai) and Singapore — delivering 5-30ms ping
              for Indian gamers compared to 100-200ms with overseas providers.
            </p>
            <p>
              Every Playzor server runs on AMD Ryzen 9 7950X processors — the
              fastest consumer CPU available — paired with NVMe SSD storage
              that&apos;s 10x faster than traditional SATA drives. This means
              instant world loading, smooth chunk generation, and consistent 20
              TPS even with 50+ players and heavy modpacks like Pixelmon,
              RLCraft, or All The Mods.
            </p>
            <p>
              Our enterprise-grade DDoS protection shields your server from
              volumetric, protocol, and application-layer attacks — included
              free with every plan. Combined with our 99.9% uptime SLA, your
              Minecraft server stays online 24/7.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Minecraft Server Hosting Plans Starting ₹199/month
            </h3>
            <p>
              Playzor offers four hosting plans to fit every budget and server
              size. The Iron Plan (₹199/mo) is perfect for small friend groups
              with 2GB RAM and 20GB NVMe SSD. The Gold Plan (₹399/mo) with 4GB
              RAM handles medium communities and light modpacks. The Diamond
              Plan (₹599/mo) with 8GB RAM is ideal for large servers and heavy
              modpacks. The Netherite Plan (₹1199/mo) with 16GB RAM powers
              networks and enterprise servers. All plans include unlimited
              player slots, DDoS protection, 24/7 support, and instant setup.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Supported Minecraft Versions & Server Software
            </h3>
            <p>
              Playzor supports every Minecraft version and server software:
              Paper, Spigot, Purpur, Pufferfish, Folia (multi-threaded), Forge,
              Fabric, NeoForge, Quilt, Velocity, BungeeCord, and Waterfall. We
              support Minecraft Java Edition (1.7.x through latest), Bedrock
              Edition, and crossplay via Geyser + Floodgate. Install any modpack
              from CurseForge, Modrinth, or FTB with one click.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
