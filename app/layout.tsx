import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import LoadingBar from "@/components/LoadingBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Playzor™ - India's #1 Best Minecraft Server Hosting | Cheap Game Server Hosting ₹199/mo | Premium Game Hosting",
    template: "%s | Playzor™ - India's Best Premium Game Server Hosting",
  },
  description:
    "Playzor™ is India's #1 premium Minecraft server hosting & game server hosting provider. ⚡ High-performance Ryzen 9 processors, NVMe SSD, enterprise DDoS protection, 99.9% uptime guarantee. Starting at just ₹199/mo. ✅ Instant server setup, unlimited player slots, 24/7 expert support, free subdomain. Servers in India (Mumbai) & Singapore for lowest ping. Best alternative to GBNodes, BisectHosting, Apex Minecraft Hosting, Shockbyte, Sparked Host. Supports Minecraft Java, Bedrock, Forge, Fabric, Paper, Spigot, Purpur, Pixelmon, RLCraft, FTB + ARK, Rust, Terraria, Palworld, FiveM, Valheim & 50+ games. India's most trusted & affordable game hosting since 2024.",
  keywords: [
    // === BRAND KEYWORDS (Google Knowledge Panel + Sitelinks) ===
    "Playzor",
    "Playzor hosting",
    "Playzor.me",
    "Playzor game hosting",
    "Playzor Minecraft hosting",
    "Playzor server hosting",
    "Playzor India",
    "Playzor game server",
    "Playzor review",
    "Playzor reviews",
    "Playzor pricing",
    "Playzor plans",
    "Playzor coupon",
    "Playzor discount",
    "Playzor login",
    "Playzor panel",
    "Playzor support",
    "Playzor servers",
    "Playzor Minecraft server",
    "Playzor game panel",
    "Playzor checkout",
    "Playzor partner program",
    "Playzor affiliate",
    "Playzor hosting review",
    "Playzor vs GBNodes",
    "Playzor vs Apex",
    "Playzor vs BisectHosting",
    "Playzor vs Shockbyte",
    "is Playzor good",
    "Playzor hosting India",
    "Playzor game hosting India",
    "Playzor cheap hosting",
    "Playzor premium hosting",
    "Playzor uptime",
    "Playzor DDoS protection",
    "Playzor NVMe",
    "Playzor Ryzen 9",

    // === MINECRAFT HOSTING - HIGH INTENT BUYER KEYWORDS ===
    "Minecraft server hosting",
    "Minecraft hosting",
    "Minecraft hosting India",
    "best Minecraft hosting",
    "cheap Minecraft hosting",
    "Minecraft server hosting India",
    "premium Minecraft hosting",
    "affordable Minecraft hosting",
    "low cost Minecraft hosting",
    "Minecraft host",
    "Minecraft server host",
    "MC hosting",
    "MC server hosting",
    "buy Minecraft server",
    "buy Minecraft hosting",
    "purchase Minecraft server",
    "order Minecraft hosting",
    "get Minecraft server",
    "rent Minecraft server",
    "Minecraft server rental",
    "Minecraft server provider",
    "Minecraft hosting provider",
    "Minecraft server company",
    "Minecraft hosting company",
    "Minecraft hosting service",
    "top Minecraft hosting",
    "top 10 Minecraft hosting",
    "top 5 Minecraft hosting India",
    "best Minecraft hosting 2025",
    "best Minecraft hosting 2026",
    "Minecraft hosting comparison",
    "Minecraft hosting list",
    "Minecraft hosting ranking",

    // === MINECRAFT GAME MODES & SERVER TYPES ===
    "Minecraft multiplayer hosting",
    "Minecraft SMP hosting",
    "Minecraft survival hosting",
    "Minecraft creative hosting",
    "Minecraft PvP server hosting",
    "Minecraft faction server hosting",
    "Minecraft skyblock hosting",
    "Minecraft bedwars hosting",
    "Minecraft prison server hosting",
    "Minecraft KitPvP hosting",
    "Minecraft practice server hosting",
    "Minecraft lifesteal server hosting",
    "Minecraft lifesteal SMP hosting",
    "Minecraft towny hosting",
    "Minecraft economy server hosting",
    "Minecraft RPG server hosting",
    "Minecraft mini games server",
    "Minecraft hunger games hosting",
    "Minecraft UHC hosting",
    "Minecraft anarchy server hosting",
    "Minecraft vanilla server hosting",
    "Minecraft hardcore server hosting",
    "Minecraft adventure server hosting",
    "Minecraft roleplay server hosting",
    "Minecraft pixelmon server",
    "Minecraft oneblock hosting",
    "Minecraft earth SMP hosting",
    "Minecraft PvP practice hosting",
    "Minecraft box PvP hosting",
    "Minecraft network server hosting",
    "Minecraft hub server hosting",
    "Minecraft lobby server hosting",
    "Minecraft proxy server hosting",
    "Minecraft minigame network hosting",
    "Minecraft event server hosting",

    // === MINECRAFT EDITIONS & CROSSPLAY ===
    "Minecraft Java hosting",
    "Minecraft Java Edition hosting",
    "Minecraft Java server",
    "Minecraft Bedrock hosting",
    "Minecraft Bedrock Edition hosting",
    "Minecraft Bedrock server",
    "Minecraft crossplay hosting",
    "Minecraft Java and Bedrock hosting",
    "Geyser Minecraft hosting",
    "Minecraft PE hosting",
    "Minecraft Pocket Edition hosting",
    "Minecraft Windows 10 hosting",
    "Minecraft console server",
    "Minecraft cross platform hosting",
    "Geyser Floodgate hosting",
    "Minecraft crossplay server India",

    // === MINECRAFT SERVER SOFTWARE ===
    "Minecraft modded server hosting",
    "Minecraft mod hosting",
    "Minecraft plugin hosting",
    "Minecraft modpack hosting",
    "Minecraft Forge hosting",
    "Minecraft Fabric hosting",
    "Minecraft Paper hosting",
    "Minecraft Spigot hosting",
    "Minecraft Bukkit hosting",
    "Minecraft Purpur hosting",
    "Minecraft Velocity hosting",
    "Minecraft BungeeCord hosting",
    "Minecraft Waterfall hosting",
    "Minecraft proxy hosting",
    "Minecraft Pufferfish hosting",
    "Minecraft Folia hosting",
    "Minecraft Sponge hosting",
    "Minecraft Mohist hosting",
    "Minecraft Arclight hosting",
    "Minecraft CatServer hosting",
    "Minecraft NeoForge hosting",
    "Minecraft Quilt hosting",

    // === MINECRAFT MODPACKS (HIGH SEARCH VOLUME) ===
    "Minecraft Feed The Beast hosting",
    "FTB server hosting",
    "Minecraft Pixelmon hosting",
    "Pixelmon server hosting",
    "Minecraft RLCraft hosting",
    "RLCraft server hosting",
    "Minecraft All The Mods hosting",
    "ATM server hosting",
    "ATM 9 hosting",
    "Minecraft Tekkit hosting",
    "Minecraft SkyFactory hosting",
    "Minecraft Create mod hosting",
    "Minecraft Better Minecraft hosting",
    "Minecraft Vault Hunters hosting",
    "Minecraft Cobblemon hosting",
    "Cobblemon server hosting",
    "All The Mods 9 hosting",
    "All The Mods 10 hosting",
    "Minecraft Prominence hosting",
    "Prominence II hosting",
    "Minecraft Medieval Minecraft hosting",
    "Minecraft Stoneblock hosting",
    "Minecraft Enigmatica hosting",
    "Minecraft FTB Revelation hosting",
    "Minecraft FTB Infinity hosting",
    "Minecraft Crazy Craft hosting",
    "Minecraft Attack of the B-Team hosting",
    "Minecraft Agrarian Skies hosting",
    "Minecraft Sky Adventures hosting",
    "Minecraft Direwolf20 hosting",
    "Minecraft Hexxit hosting",
    "Minecraft Life in the Village hosting",
    "Minecraft Roguelike Adventures hosting",
    "Minecraft Origins SMP hosting",

    // === MINECRAFT PLUGINS (HIGH INTEREST) ===
    "Minecraft EssentialsX hosting",
    "Minecraft WorldEdit hosting",
    "Minecraft Vault hosting",
    "Minecraft LuckPerms hosting",
    "Minecraft Citizens hosting",
    "Minecraft MythicMobs hosting",
    "Minecraft PlaceholderAPI hosting",
    "Minecraft ProtocolLib hosting",
    "Minecraft server with plugins pre-installed",
    "Minecraft hosting with mod support",
    "Minecraft hosting with plugin installer",

    // === GAME SERVER HOSTING GENERAL ===
    "game server hosting",
    "game server hosting India",
    "game hosting India",
    "game hosting",
    "cheap game server hosting",
    "best game hosting India",
    "affordable game hosting",
    "multiplayer game hosting",
    "online game server",
    "dedicated game server",
    "game panel hosting",
    "Pterodactyl hosting",
    "Pterodactyl panel hosting",
    "game server provider India",
    "game hosting provider",
    "game hosting company India",
    "Indian game hosting",
    "desi game hosting",
    "gaming server India",
    "game server India low ping",
    "best game server India",
    "cloud game server hosting",
    "managed game hosting",
    "game server rental India",

    // === OTHER GAMES (EXPANDING REACH) ===
    "Ark server hosting",
    "ARK Survival Evolved hosting",
    "ARK hosting India",
    "ARK Survival Ascended hosting",
    "ASA server hosting India",
    "Rust server hosting",
    "Rust hosting India",
    "Rust game server India",
    "Terraria server hosting",
    "Terraria hosting India",
    "Valheim server hosting",
    "Valheim hosting India",
    "Palworld server hosting",
    "Palworld hosting India",
    "Palworld dedicated server India",
    "7 Days to Die hosting",
    "7 Days to Die hosting India",
    "Project Zomboid hosting",
    "Project Zomboid hosting India",
    "Garry's Mod hosting",
    "GMod server hosting",
    "GMod hosting India",
    "CS2 server hosting",
    "Counter Strike 2 server hosting",
    "CS2 hosting India",
    "FiveM hosting",
    "FiveM server hosting India",
    "GTA V server hosting",
    "GTA RP hosting India",
    "Satisfactory server hosting",
    "Satisfactory hosting India",
    "Enshrouded server hosting",
    "Enshrouded hosting India",
    "V Rising server hosting",
    "V Rising hosting India",
    "Conan Exiles hosting",
    "DayZ server hosting",
    "Unturned server hosting",
    "Space Engineers hosting",
    "Factorio server hosting",
    "Left 4 Dead 2 hosting",
    "Team Fortress 2 hosting",
    "Stardew Valley server hosting",
    "Core Keeper hosting",
    "The Forest hosting",
    "Sons of the Forest hosting",
    "Soulmask server hosting",
    "Once Human server hosting",

    // === INDIA GEO-TARGETING (CITY-LEVEL SEO) ===
    "game hosting Mumbai",
    "game hosting Delhi",
    "game hosting Bangalore",
    "game hosting Chennai",
    "game hosting Hyderabad",
    "game hosting Kolkata",
    "game hosting Pune",
    "game hosting Ahmedabad",
    "game hosting Jaipur",
    "game hosting Lucknow",
    "game hosting Chandigarh",
    "game hosting Kochi",
    "game hosting Indore",
    "game hosting Surat",
    "game hosting Nagpur",
    "Minecraft server India",
    "Indian Minecraft hosting",
    "Indian game hosting",
    "low ping Minecraft India",
    "low latency gaming India",
    "India game server",
    "Minecraft server Mumbai",
    "Minecraft server Delhi",
    "Minecraft server Bangalore",
    "Minecraft hosting near me",
    "game server near me India",
    "Asia game server hosting",
    "Singapore game hosting",
    "Asia Minecraft hosting",
    "South Asia game hosting",
    "SEA game server",
    "APAC game hosting",
    "Indian gaming community hosting",
    "Indian esports hosting",

    // === PRICING & VALUE KEYWORDS (BUYER INTENT) ===
    "cheap Minecraft server",
    "cheapest Minecraft hosting India",
    "budget Minecraft hosting",
    "free Minecraft server hosting",
    "Minecraft hosting under 200",
    "Minecraft hosting under 500",
    "Minecraft hosting under 1000",
    "Minecraft hosting ₹199",
    "Minecraft hosting ₹399",
    "affordable game server India",
    "low price Minecraft hosting",
    "best value Minecraft hosting",
    "Minecraft hosting deals",
    "Minecraft hosting discount",
    "Minecraft hosting coupon",
    "Minecraft hosting offer",
    "Minecraft hosting sale",
    "cheap game server India",
    "budget game hosting India",
    "best cheap Minecraft hosting",
    "Minecraft hosting free trial",
    "Minecraft hosting money back guarantee",
    "Minecraft hosting no hidden fees",
    "transparent Minecraft hosting pricing",
    "pay monthly Minecraft hosting",
    "no contract Minecraft hosting",

    // === PERFORMANCE & TECHNICAL KEYWORDS ===
    "high performance Minecraft hosting",
    "lag free Minecraft hosting",
    "NVMe Minecraft hosting",
    "NVMe SSD game server",
    "Ryzen Minecraft hosting",
    "Ryzen 9 game server",
    "AMD Ryzen game hosting",
    "DDR5 Minecraft hosting",
    "DDR5 game server",
    "high TPS Minecraft server",
    "20 TPS Minecraft hosting",
    "fast Minecraft server",
    "no lag Minecraft server",
    "zero lag Minecraft hosting",
    "DDoS protected Minecraft hosting",
    "DDoS protection game server",
    "anti DDoS Minecraft hosting",
    "DDoS mitigation game server",
    "Minecraft hosting NVMe SSD",
    "Minecraft hosting Ryzen 9",
    "unlimited slots Minecraft hosting",
    "unlimited player Minecraft server",
    "99.9% uptime Minecraft hosting",
    "reliable Minecraft hosting",
    "high uptime game hosting",
    "enterprise grade Minecraft hosting",
    "low ping Minecraft server",
    "5ms ping Minecraft India",
    "dedicated resources Minecraft hosting",
    "guaranteed resources game server",
    "isolated Minecraft hosting",
    "dedicated CPU Minecraft hosting",

    // === FEATURES & BENEFITS KEYWORDS ===
    "instant setup Minecraft server",
    "one click Minecraft server",
    "auto mod installer Minecraft",
    "Minecraft server with mods",
    "Minecraft server with plugins",
    "custom Minecraft server",
    "Minecraft server control panel",
    "Minecraft server manager",
    "Minecraft server backup",
    "automatic backup Minecraft",
    "Minecraft server support",
    "24/7 Minecraft support",
    "free subdomain Minecraft",
    "dedicated IP Minecraft",
    "MySQL Minecraft hosting",
    "FTP Minecraft hosting",
    "SFTP game server",
    "Minecraft server migration",
    "free Minecraft server transfer",
    "Minecraft hosting with scheduler",
    "Minecraft cron jobs",
    "Minecraft server console",
    "web console Minecraft",
    "Minecraft hosting unlimited bandwidth",
    "unmetered Minecraft hosting",
    "Minecraft hosting with custom JAR",
    "Minecraft hosting with version selector",

    // === COMPETITOR KEYWORDS (MAXIMUM REACH) ===
    "GBNodes alternative",
    "GBNodes vs Playzor",
    "better than GBNodes",
    "GBNodes review",
    "GBNodes India",
    "GBNodes pricing",
    "GBNodes down",
    "GBNodes issues",
    "Sparked Host alternative",
    "Sparked Host India",
    "Sparked Host vs Playzor",
    "Apex Hosting alternative",
    "Apex Hosting India",
    "Apex Hosting vs Playzor",
    "Apex Minecraft Hosting alternative",
    "apex hosting review",
    "Shockbyte alternative",
    "Shockbyte India",
    "Shockbyte vs Playzor",
    "Shockbyte review",
    "BisectHosting alternative",
    "BisectHosting India",
    "BisectHosting vs Playzor",
    "bisect hosting review",
    "bisecthosting pricing",
    "Aternos alternative",
    "Aternos paid alternative",
    "better than Aternos",
    "Aternos vs Playzor",
    "Aternos lag fix",
    "Minehut alternative",
    "Minehut paid alternative",
    "better than Minehut",
    "MCProHosting alternative",
    "MCProHosting vs Playzor",
    "Hostinger game hosting alternative",
    "Hostinger Minecraft hosting",
    "ScalaCube alternative",
    "Nodecraft alternative",
    "ExtraVM alternative",
    "PebbleHost alternative",
    "PebbleHost India",
    "PebbleHost vs Playzor",
    "Bloom Host alternative",
    "Bloom.host India",
    "DedicatedMC alternative",
    "Hyperia alternative",
    "Hyperia hosting India",
    "WitherHosting alternative",
    "EnviroMC alternative",
    "Fluctis Hosting alternative",
    "Aquatis alternative",
    "best GBNodes alternative India",
    "best Apex Hosting alternative India",
    "best BisectHosting alternative India",
    "best Shockbyte alternative India",

    // === LONG-TAIL & QUESTION KEYWORDS (VOICE SEARCH + AI) ===
    "how to host a Minecraft server in India",
    "best Minecraft hosting for Indian players",
    "Minecraft server hosting with low ping in India",
    "where to host Minecraft server India",
    "start a Minecraft server India",
    "create Minecraft server India",
    "buy Minecraft server hosting India",
    "rent Minecraft server India",
    "Minecraft server rental India",
    "managed Minecraft hosting India",
    "Minecraft hosting with free trial",
    "Minecraft hosting with money back guarantee",
    "Minecraft hosting with DDoS protection India",
    "best Minecraft Java hosting India",
    "best Minecraft Bedrock hosting India",
    "Minecraft server hosting with panel",
    "easy Minecraft hosting",
    "beginner Minecraft hosting",
    "Minecraft hosting for beginners",
    "professional Minecraft hosting",
    "enterprise Minecraft hosting",
    "Minecraft network hosting",
    "Minecraft BungeeCord network hosting",
    "large Minecraft server hosting",
    "Minecraft server for 100 players",
    "Minecraft server for 50 players",
    "Minecraft server for 200 players",
    "Minecraft server for 500 players",
    "Minecraft server for 1000 players",
    "how to make a Minecraft server",
    "how to create Minecraft SMP",
    "how to host Minecraft server cheap",
    "how to host Minecraft with friends India",
    "which is the best Minecraft hosting",
    "what is the cheapest Minecraft hosting India",
    "how much does Minecraft hosting cost India",
    "is Minecraft hosting worth it",
    "Minecraft server hosting guide India",
    "Minecraft hosting tutorial",
    "how to choose Minecraft hosting",
    "Minecraft hosting tips India",
    "how to reduce lag on Minecraft server",
    "best Minecraft server settings",
    "how to install mods on Minecraft server",
    "how to install plugins Minecraft server",
    "how to setup BungeeCord Minecraft",
    "how to make Minecraft network",

    // === SMP & COMMUNITY KEYWORDS ===
    "Minecraft SMP server hosting India",
    "start SMP server India",
    "Minecraft community server hosting",
    "Minecraft server for friends",
    "private Minecraft server hosting",
    "Minecraft server for YouTube",
    "Minecraft server for streamers",
    "Minecraft content creator hosting",
    "Minecraft server for Discord community",
    "Minecraft clan server hosting",
    "Minecraft guild server hosting",
    "Minecraft team server hosting",
    "Minecraft esports server hosting",
    "Minecraft tournament hosting",
    "Minecraft event server India",
    "Minecraft server for school",
    "Minecraft server for education",
    "Minecraft server for college",
    "Indian SMP server hosting",
    "Indian Minecraft community hosting",

    // === TECHNICAL SPECIFICATION KEYWORDS ===
    "Minecraft server RAM",
    "4GB Minecraft server",
    "8GB Minecraft server",
    "16GB Minecraft server",
    "32GB Minecraft server",
    "64GB Minecraft server",
    "Minecraft server CPU",
    "Minecraft server vCore",
    "Minecraft server NVMe storage",
    "Minecraft server dedicated resources",
    "Minecraft server root access",
    "Minecraft server SSH access",
    "Minecraft server Docker",
    "Minecraft server containerized",
    "Minecraft server scalable",
    "auto scaling Minecraft hosting",
    "Minecraft server upgrade",
    "upgrade Minecraft hosting plan",

    // === SEASONAL & TRENDING KEYWORDS ===
    "Minecraft hosting 2025",
    "Minecraft hosting 2026",
    "best game hosting 2026",
    "new Minecraft hosting India",
    "latest Minecraft hosting",
    "trending Minecraft server types",
    "popular Minecraft servers India",
    "Minecraft 1.20 hosting",
    "Minecraft 1.21 hosting",
    "Minecraft latest version hosting",
    "Minecraft snapshot hosting",
    "Minecraft beta hosting",

    // === HINDI TRANSLITERATION KEYWORDS (INDIA-SPECIFIC) ===
    "Minecraft server hosting kaise kare",
    "Minecraft hosting kaha se le",
    "sabse sasta Minecraft hosting",
    "best Minecraft hosting India Hindi",
    "game server hosting India Hindi",
    "Minecraft server India me kaise banaye",
    "cheap Minecraft server India",
    "Minecraft server kaise host kare",

    // === NICHE & MICRO KEYWORDS ===
    "Minecraft whitelist server hosting",
    "Minecraft greylist hosting",
    "Minecraft 24/7 server hosting",
    "always online Minecraft server",
    "Minecraft server with anti cheat",
    "Minecraft server with world guard",
    "Minecraft server with economy plugin",
    "Minecraft server with shop plugin",
    "Minecraft server with custom enchants",
    "Minecraft server with ranks",
    "Minecraft server with vote rewards",
    "Minecraft server with crates",
    "Minecraft hosting with Discord bot",
    "Minecraft server with Dynmap",
    "Minecraft server with Bluemap",
    "Minecraft live map hosting",
  ],
  authors: [{ name: "Playzor", url: "https://playzor.me" }],
  creator: "Playzor",
  publisher: "Playzor",
  metadataBase: new URL("https://playzor.me"),
  alternates: {
    canonical: "https://playzor.me",
    languages: {
      "en-IN": "https://playzor.me",
      "en-US": "https://playzor.me",
      en: "https://playzor.me",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://playzor.me",
    siteName: "Playzor™ - India's #1 Game Server Hosting",
    title:
      "Playzor™ - India's #1 Best Minecraft Server Hosting | Game Hosting ₹199/mo | DDoS Protected | NVMe SSD | Ryzen 9",
    description:
      "🎮 India's BEST Minecraft & game server hosting. ⚡ Ryzen 9 + NVMe SSD + DDoS Protection + 99.9% Uptime. Starting ₹199/mo. Instant setup, unlimited slots, 24/7 support. #1 GBNodes, BisectHosting, Apex alternative. Java + Bedrock + Modded. Servers in India & Singapore. 500+ happy gamers trust Playzor!",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Playzor - India's #1 Premium Minecraft & Game Server Hosting Provider",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@playzor",
    creator: "@playzor",
    title: "Playzor™ - India's #1 Best Minecraft Server Hosting | ₹199/mo",
    description:
      "🎮 India's BEST game hosting. Ryzen 9 + NVMe + DDoS Protection + 99.9% Uptime. From ₹199/mo. Better than GBNodes, Apex, BisectHosting. Instant Setup!",
    images: [
      {
        url: "/logo.png",
        alt: "Playzor - Premium Game Server Hosting India",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Game Server Hosting",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add your actual verification codes when ready
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    // Geo targeting
    "geo.region": "IN",
    "geo.country": "IN",
    "geo.placename": "India",
    ICBM: "20.5937, 78.9629",
    "geo.position": "20.5937;78.9629",

    // Content info
    distribution: "global",
    rating: "general",
    "revisit-after": "1 days",
    language: "English",
    target: "all",
    audience: "all",
    coverage: "Worldwide",
    "doc-type": "Web Page",

    // Social & brand
    "og:locale:alternate": "en_US",
    "article:publisher": "https://playzor.me",
    "profile:username": "playzor",

    // Mobile & app
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Playzor",
    "application-name": "Playzor",

    // AI & bot friendly content
    subject:
      "Minecraft Server Hosting, Game Server Hosting, Game Hosting India, Playzor, Best Minecraft Hosting India, Cheap Game Hosting, Premium Game Server, DDoS Protected Minecraft, NVMe Game Hosting, Ryzen 9 Minecraft Server",
    abstract:
      "Playzor is India's leading premium Minecraft and game server hosting provider offering Ryzen 9 processors, NVMe SSD storage, DDoS protection, 99.9% uptime guarantee, and instant setup starting at ₹199/month with servers in India and Singapore.",
    topic:
      "Game Server Hosting, Minecraft Hosting, Cloud Gaming Infrastructure",
    summary:
      "Playzor provides premium Minecraft server hosting and game server hosting in India starting at ₹199/month. Features include Ryzen 9 CPUs, NVMe SSD, DDoS protection, unlimited slots, 99.9% uptime, instant setup, and 24/7 support. Available in India and Singapore. Best alternative to GBNodes, BisectHosting, Apex Hosting, and Shockbyte for Indian gamers.",

    // Search engine hints
    "msvalidate.01": "",
    "p:domain_verify": "",
    "norton-safeweb-site-verification": "",

    // Pricing info for AI
    "pricing:currency": "INR",
    "pricing:lowest": "199",
    "pricing:highest": "1199",
    "pricing:model": "monthly subscription",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        {/* Canonical & Identity */}
        <link rel="canonical" href="https://playzor.me" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme & Appearance */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="color-scheme" content="dark" />

        {/* Language & Region */}
        <meta name="google" content="notranslate" />
        <meta httpEquiv="content-language" content="en-IN" />
        <link rel="alternate" hrefLang="en-IN" href="https://playzor.me" />
        <link rel="alternate" hrefLang="en" href="https://playzor.me" />
        <link rel="alternate" hrefLang="x-default" href="https://playzor.me" />

        {/* Preconnect for performance & SEO signals */}
        <link rel="preconnect" href="https://checkout.playzor.me" />
        <link rel="dns-prefetch" href="https://checkout.playzor.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Sitemap & Feed discovery */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* AI & Search Engine Optimization Meta */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="bingbot" content="index, follow" />

        {/* Structured Data Hints for AI Crawlers */}
        <meta
          name="ai-content-declaration"
          content="This website provides factual information about Playzor game server hosting services, pricing, and features."
        />
      </head>
      <body className="bg-black text-white selection:bg-white selection:text-black">
        <LoadingBar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
