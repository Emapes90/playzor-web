import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function MinecraftServerHostingIndia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://playzor.me/minecraft-server-hosting-india/#webpage",
        url: "https://playzor.me/minecraft-server-hosting-india",
        name: "Minecraft Server Hosting India | Low Ping Mumbai & Singapore | Playzor",
        description:
          "Best Minecraft server hosting in India. Mumbai & Singapore servers with 5-30ms ping. Java & Bedrock support.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        about: { "@id": "https://playzor.me/#organization" },
        breadcrumb: {
          "@id":
            "https://playzor.me/minecraft-server-hosting-india/#breadcrumb",
        },
        inLanguage: "en-IN",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/minecraft-server-hosting-india/#breadcrumb",
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
          {
            "@type": "ListItem",
            position: 3,
            name: "Minecraft Hosting India",
            item: "https://playzor.me/minecraft-server-hosting-india",
          },
        ],
      },
      {
        "@type": "Product",
        name: "Playzor Minecraft Server Hosting India",
        description:
          "Premium Minecraft server hosting from India's #1 provider. Mumbai & Singapore data centers, 5-30ms ping, Java & Bedrock, modded servers, unlimited slots.",
        brand: { "@type": "Brand", name: "Playzor" },
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
          bestRating: "5",
          ratingCount: "500",
          reviewCount: "500",
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
              text: "Playzor is India's #1 Minecraft server hosting provider with 4.9/5 from 500+ reviews. We offer Mumbai and Singapore data centers, delivering 5-30ms ping across India. Java & Bedrock editions, full mod/plugin support, Pterodactyl game panel. Plans from ₹199/month.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Minecraft hosting cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor Minecraft hosting starts at ₹199/month. Iron Plan (₹199/mo, 2GB RAM) for small SMPs, Gold Plan (₹399/mo, 4GB RAM) for medium servers, Diamond Plan (₹599/mo, 8GB RAM) for large servers, Netherite Plan (₹1199/mo, 16GB RAM) for networks. DDoS protection and 24/7 support included.",
            },
          },
          {
            "@type": "Question",
            name: "Where are Playzor's Minecraft servers located in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor has servers in Mumbai, India and Singapore. Mumbai servers give 5-15ms ping in Western India and 15-30ms across India. Singapore servers are ideal for Southeast Asian players. All run on AMD Ryzen 9 7950X with NVMe SSD.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor support modded Minecraft?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor supports all Minecraft server types: Vanilla, Paper, Spigot, Bukkit, Forge, Fabric, PurPur, and Bungeecord/Velocity. Install any modpack directly from our Pterodactyl panel. We support popular modpacks like RLCraft, All the Mods, Better Minecraft, Pixelmon, and more.",
            },
          },
          {
            "@type": "Question",
            name: "Can I host a Minecraft Bedrock server in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! Playzor supports both Java and Bedrock editions. Host a Bedrock Dedicated Server or use GeyserMC for cross-play between Java and Bedrock players. Perfect for mobile and console players in India.",
            },
          },
        ],
      },
    ],
  };

  const minecraftTypes = [
    {
      name: "Vanilla Minecraft",
      desc: "Pure Minecraft experience with no mods.",
    },
    { name: "Paper / Spigot", desc: "Optimized servers with plugin support." },
    { name: "Forge Modded", desc: "Full mod support with Forge loader." },
    { name: "Fabric Modded", desc: "Lightweight modding with Fabric loader." },
    { name: "Bedrock Edition", desc: "For mobile, console & Windows players." },
    {
      name: "GeyserMC Cross-Play",
      desc: "Java & Bedrock players on one server.",
    },
    {
      name: "BungeeCord / Velocity",
      desc: "Proxy networks for multiple servers.",
    },
    { name: "Pixelmon", desc: "Pokémon in Minecraft. Dedicated support." },
  ];

  return (
    <main
      role="main"
      aria-label="Minecraft Server Hosting India - Playzor"
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            🇮🇳 Mumbai & Singapore Servers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Minecraft Server Hosting{" "}
            <span className="text-emerald-500">India</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            India&apos;s lowest ping Minecraft hosting. Mumbai &amp; Singapore
            servers deliver 5-30ms across India. Java &amp; Bedrock, mods,
            plugins, unlimited slots — running on AMD Ryzen 9 7950X with NVMe
            SSD and DDoS protection. From ₹199/month.
          </p>
        </div>
      </section>

      {/* Minecraft Server Types */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 text-center">
            Every Minecraft Server Type.{" "}
            <span className="text-emerald-500">Instant Setup.</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {minecraftTypes.map((item) => (
              <div
                key={item.name}
                className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 hover:border-emerald-500/20 transition-colors"
              >
                <h3 className="text-white font-bold text-sm mb-1">
                  {item.name}
                </h3>
                <p className="text-zinc-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ping Comparison */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            Why Indian Players Choose{" "}
            <span className="text-emerald-500">Playzor</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/50 rounded-xl p-6 border border-white/5">
              <div className="text-3xl font-bold text-emerald-500 mb-2">
                5-30ms
              </div>
              <p className="text-zinc-400 text-sm">
                Ping from India (Mumbai Server)
              </p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-white/5">
              <div className="text-3xl font-bold text-red-400 mb-2">
                100-200ms
              </div>
              <p className="text-zinc-400 text-sm">
                Ping from India (US/EU Servers)
              </p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-white/5">
              <div className="text-3xl font-bold text-emerald-500 mb-2">
                99.9%
              </div>
              <p className="text-zinc-400 text-sm">Uptime SLA Guarantee</p>
            </div>
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Most Minecraft hosts have servers in the US or Europe, giving Indian
            players 100-200ms ping. Playzor&apos;s Mumbai servers deliver 5-30ms
            — making PvP, minigames, and redstone responsive and lag-free.
          </p>
        </div>
      </section>

      <Features />
      <Locations />
      <Pricing />
      <Reviews />

      {/* SEO Content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
            Minecraft Server Hosting India — Complete Guide
          </h2>
          <div className="text-zinc-400 space-y-4 text-base leading-relaxed">
            <p>
              Looking for the best Minecraft server hosting in India? Playzor
              operates premium servers in Mumbai and Singapore, delivering the
              lowest ping available for Indian Minecraft players. Whether
              you&apos;re running a small SMP with friends or a large public
              server with hundreds of players, Playzor has the right plan.
            </p>
            <p>
              Our infrastructure uses AMD Ryzen 9 7950X processors — the fastest
              single-thread CPU available — which is critical for Minecraft
              performance. Combined with NVMe SSD storage, your worlds load
              instantly and chunk generation is seamless even with heavy mod
              usage.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Indian Minecraft Community
            </h3>
            <p>
              India has one of the fastest-growing Minecraft communities in the
              world. With creators like TechnoGamerzOfficial, YesSmartyPie, and
              GamerFleet driving interest, more Indian players than ever need
              reliable server hosting. Playzor is built for the Indian market —
              INR pricing, UPI/Paytm payments, Hindi support, and local servers.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Modded Minecraft Hosting India
            </h3>
            <p>
              Run any modpack on Playzor: RLCraft, All the Mods, Better
              Minecraft, Create, Pixelmon, Tekkit, and more. Our Forge and
              Fabric support is fully automated — select your modpack from our
              panel and it installs in seconds. Diamond or Netherite plans
              recommended for modded servers.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
