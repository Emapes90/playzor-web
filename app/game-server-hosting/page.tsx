import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function GameServerHosting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://playzor.me/game-server-hosting/#webpage",
        url: "https://playzor.me/game-server-hosting",
        name: "Best Game Server Hosting India 2026 | Playzor #1 Rated",
        description:
          "India's #1 game server hosting provider. Host Minecraft, ARK, Rust, Terraria, Palworld, Valheim, FiveM, and 50+ games with Ryzen 9, NVMe SSD, DDoS protection.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        about: { "@id": "https://playzor.me/#organization" },
        breadcrumb: {
          "@id": "https://playzor.me/game-server-hosting/#breadcrumb",
        },
        inLanguage: "en-IN",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/game-server-hosting/#breadcrumb",
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
            name: "Game Server Hosting",
            item: "https://playzor.me/game-server-hosting",
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Game Server Hosting",
        name: "Playzor Game Server Hosting",
        description:
          "India's premium game server hosting for 50+ multiplayer games. Minecraft, ARK, Rust, Terraria, Palworld, Valheim, FiveM, and more. AMD Ryzen 9 7950X, NVMe SSD, DDoS protection, 99.9% uptime.",
        provider: { "@id": "https://playzor.me/#organization" },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Continent", name: "Asia" },
          { "@type": "Place", name: "Worldwide" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Game Server Hosting Plans",
          itemListElement: [
            { "@type": "OfferCatalog", name: "Minecraft Server Hosting" },
            { "@type": "OfferCatalog", name: "ARK: Survival Evolved Hosting" },
            { "@type": "OfferCatalog", name: "ARK: Survival Ascended Hosting" },
            { "@type": "OfferCatalog", name: "Rust Server Hosting" },
            { "@type": "OfferCatalog", name: "Terraria Server Hosting" },
            { "@type": "OfferCatalog", name: "Palworld Server Hosting" },
            { "@type": "OfferCatalog", name: "Valheim Server Hosting" },
            { "@type": "OfferCatalog", name: "FiveM (GTA V) Server Hosting" },
            { "@type": "OfferCatalog", name: "Project Zomboid Server Hosting" },
            { "@type": "OfferCatalog", name: "Satisfactory Server Hosting" },
          ],
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "199",
          highPrice: "1199",
          offerCount: "4",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best game server hosting in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor is India's #1 rated game server hosting provider with 4.9/5 from 500+ customers. We host 50+ games including Minecraft, ARK, Rust, Terraria, Palworld, Valheim, FiveM, and more. Ryzen 9 7950X, NVMe SSD, DDoS protection, 99.9% uptime. Plans from ₹199/mo.",
            },
          },
          {
            "@type": "Question",
            name: "Which games does Playzor support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor supports 50+ games: Minecraft (Java & Bedrock), ARK: Survival Evolved, ARK: Survival Ascended, Rust, Terraria, Valheim, Palworld, 7 Days to Die, Project Zomboid, FiveM (GTA V), Garry's Mod, CS2, Satisfactory, V Rising, Enshrouded, Core Keeper, Conan Exiles, DayZ, Unturned, Space Engineers, Factorio, Stardew Valley, and many more.",
            },
          },
          {
            "@type": "Question",
            name: "How much does game server hosting cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor offers premium game server hosting from ₹199/month. Iron Plan: ₹199/mo (2GB RAM), Gold Plan: ₹399/mo (4GB RAM), Diamond Plan: ₹599/mo (8GB RAM), Netherite Plan: ₹1199/mo (16GB RAM). All plans include DDoS protection, unlimited slots, and 24/7 support.",
            },
          },
          {
            "@type": "Question",
            name: "Where are Playzor game servers located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor operates servers in India (Mumbai) and Singapore. Indian players get 5-30ms ping. Enterprise-grade Tier-3+ data centers with AMD Ryzen 9 7950X processors and NVMe SSD storage.",
            },
          },
        ],
      },
    ],
  };

  const games = [
    {
      name: "Minecraft Java & Bedrock",
      desc: "The world's most popular sandbox game. Full mod & plugin support.",
    },
    {
      name: "ARK: Survival Evolved",
      desc: "Tame dinosaurs and survive. High-performance dedicated servers.",
    },
    {
      name: "ARK: Survival Ascended",
      desc: "Next-gen ARK experience on Unreal Engine 5.",
    },
    {
      name: "Rust",
      desc: "Survive and dominate. High-performance Rust servers.",
    },
    {
      name: "Terraria",
      desc: "2D adventure & exploration. Smooth multiplayer hosting.",
    },
    { name: "Valheim", desc: "Viking survival. Dedicated server hosting." },
    {
      name: "Palworld",
      desc: "Catch creatures & build. Dedicated Palworld servers.",
    },
    {
      name: "FiveM (GTA V)",
      desc: "GTA V roleplay servers. Custom scripts supported.",
    },
    { name: "7 Days to Die", desc: "Zombie survival with voxel building." },
    { name: "Project Zomboid", desc: "Hardcore zombie survival simulator." },
    {
      name: "Satisfactory",
      desc: "Factory building & automation multiplayer.",
    },
    { name: "CS2", desc: "Competitive FPS. Custom server hosting." },
    { name: "Garry's Mod", desc: "Sandbox creation game. All game modes." },
    { name: "V Rising", desc: "Vampire survival action. Dedicated servers." },
    { name: "Enshrouded", desc: "Survival action RPG in a voxel world." },
    { name: "Core Keeper", desc: "Underground cave exploration & building." },
  ];

  return (
    <main
      role="main"
      aria-label="Best Game Server Hosting India - Playzor"
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            50+ Games Supported
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Best <span className="text-emerald-500">Game Server Hosting</span>{" "}
            in India
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Playzor is India&apos;s leading game server hosting provider. Host
            Minecraft, ARK, Rust, Terraria, Palworld, Valheim, FiveM, and 50+
            multiplayer games on enterprise-grade hardware with AMD Ryzen 9
            7950X, NVMe SSD, and DDoS protection — starting ₹199/month.
          </p>
        </div>
      </section>

      {/* Supported Games Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 text-center">
            50+ Games. One Platform.{" "}
            <span className="text-emerald-500">Zero Lag.</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <div
                key={game.name}
                className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 hover:border-emerald-500/20 transition-colors"
              >
                <h3 className="text-white font-bold text-sm mb-1">
                  {game.name}
                </h3>
                <p className="text-zinc-500 text-xs">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Locations />
      <Pricing />
      <Reviews />

      {/* SEO Content Block */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
            Why Playzor is India&apos;s Best Game Server Hosting Provider
          </h2>
          <div className="text-zinc-400 space-y-4 text-base leading-relaxed">
            <p>
              Playzor provides premium game server hosting for 50+ multiplayer
              games with servers in India (Mumbai) and Singapore. Unlike
              international hosts, our Indian infrastructure delivers 5-30ms
              ping for gamers across India — compared to 100-200ms with overseas
              providers.
            </p>
            <p>
              Every server runs on AMD Ryzen 9 7950X — the fastest gaming-grade
              processor — with NVMe SSD storage for instant world loading and
              resource-intensive game server performance. Our enterprise DDoS
              protection keeps your server safe 24/7, and our 99.9% uptime SLA
              guarantees reliability.
            </p>
            <p>
              Whether you&apos;re hosting a Minecraft SMP, an ARK tribe server,
              a Rust wipe, or a FiveM roleplay community — Playzor has the
              hardware, support, and pricing to match. Plans start at just
              ₹199/month with instant setup, unlimited player slots, and 24/7
              expert support in English and Hindi.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Game Server Hosting for Every Budget
            </h3>
            <p>
              Our Iron Plan (₹199/mo) is perfect for small groups. Gold Plan
              (₹399/mo) handles medium communities. Diamond Plan (₹599/mo)
              powers large servers. Netherite Plan (₹1199/mo) runs networks and
              enterprise servers. All plans include DDoS protection, automatic
              backups, and the Pterodactyl game panel for easy management.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
