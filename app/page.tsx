import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Playzor™ - India's #1 Best Minecraft Server Hosting | Game Hosting ₹199/mo | DDoS Protected | NVMe SSD",
  description:
    "🎮 Playzor™ is India's #1 Minecraft & game server hosting. ⚡ Ryzen 9 + NVMe SSD + DDoS Protection + 99.9% Uptime. Starting ₹199/mo. Instant setup, unlimited slots, 24/7 expert support, free subdomain. Java + Bedrock + Forge + Fabric + Paper + Modpacks. Servers in India (Mumbai) & Singapore. Best alternative to GBNodes, BisectHosting, Apex, Shockbyte. 500+ happy gamers. Cheapest premium Minecraft hosting in India 2025.",
  alternates: {
    canonical: "https://playzor.me",
  },
  other: {
    "article:modified_time": new Date().toISOString(),
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // ===== ORGANIZATION (Google Knowledge Panel) =====
      {
        "@type": "Organization",
        "@id": "https://playzor.me/#organization",
        name: "Playzor",
        legalName: "Playzor",
        url: "https://playzor.me",
        logo: {
          "@type": "ImageObject",
          "@id": "https://playzor.me/#logo",
          url: "https://playzor.me/logo.png",
          contentUrl: "https://playzor.me/logo.png",
          width: 512,
          height: 512,
          caption: "Playzor - India's #1 Game Server Hosting",
        },
        image: "https://playzor.me/logo.png",
        description:
          "Playzor is India's #1 premium Minecraft and game server hosting provider offering Ryzen 9 processors, NVMe SSD, enterprise DDoS protection, 99.9% uptime, and instant setup starting at ₹199/month.",
        foundingDate: "2024",
        slogan: "India's #1 Premium Game Server Hosting",
        areaServed: [
          {
            "@type": "Country",
            name: "India",
            "@id": "https://www.wikidata.org/wiki/Q668",
          },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Continent", name: "Asia" },
          { "@type": "Place", name: "Worldwide" },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 20.5937,
            longitude: 78.9629,
          },
          geoRadius: "5000",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "info@playzor.me",
            contactType: "customer support",
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          },
          {
            "@type": "ContactPoint",
            email: "info@playzor.me",
            contactType: "sales",
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
          },
        ],
        knowsAbout: [
          "Minecraft Server Hosting",
          "Game Server Hosting",
          "Cloud Hosting",
          "DDoS Protection",
          "Server Management",
          "Multiplayer Gaming",
          "Pterodactyl Panel",
          "Linux Server Administration",
        ],
        offers: { "@id": "https://playzor.me/#offers" },
        sameAs: [],
      },

      // ===== WEBSITE (Sitelinks Search Box) =====
      {
        "@type": "WebSite",
        "@id": "https://playzor.me/#website",
        url: "https://playzor.me",
        name: "Playzor",
        alternateName: [
          "Playzor Hosting",
          "Playzor Game Hosting",
          "Playzor.me",
        ],
        description:
          "India's #1 premium Minecraft and game server hosting. Ryzen 9, NVMe SSD, DDoS protection, 99.9% uptime. Starting ₹199/mo.",
        publisher: { "@id": "https://playzor.me/#organization" },
        inLanguage: ["en-IN", "en"],
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://playzor.me/?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        copyrightHolder: { "@id": "https://playzor.me/#organization" },
        copyrightYear: 2024,
      },

      // ===== WEBPAGE =====
      {
        "@type": ["WebPage", "CollectionPage"],
        "@id": "https://playzor.me/#webpage",
        url: "https://playzor.me",
        name: "Playzor™ - India's #1 Best Minecraft Server Hosting | Game Hosting ₹199/mo",
        description:
          "India's best & cheapest Minecraft server hosting. Ryzen 9 NVMe servers, DDoS protection, 99.9% uptime. Starting ₹199/mo. Better than GBNodes, BisectHosting, Apex, Shockbyte.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        about: { "@id": "https://playzor.me/#organization" },
        inLanguage: "en-IN",
        breadcrumb: { "@id": "https://playzor.me/#breadcrumb" },
        primaryImageOfPage: { "@id": "https://playzor.me/#logo" },
        datePublished: "2024-01-01T00:00:00+05:30",
        dateModified: new Date().toISOString(),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".hero-description"],
        },
        significantLink: [
          "https://checkout.playzor.me",
          "https://playzor.me/partners",
          "https://playzor.me/terms",
          "https://playzor.me/privacy",
        ],
      },

      // ===== BREADCRUMB (Enhanced for all pages) =====
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/#breadcrumb",
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
            name: "Pricing",
            item: "https://playzor.me/#pricing",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Features",
            item: "https://playzor.me/#features",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Reviews",
            item: "https://playzor.me/#reviews",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "FAQ",
            item: "https://playzor.me/#faq",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Partners",
            item: "https://playzor.me/partners",
          },
        ],
      },

      // ===== SITENAVIGATIONELEMENT (Triggers Google Sitelinks) =====
      {
        "@type": "SiteNavigationElement",
        "@id": "https://playzor.me/#navigation",
        name: "Main Navigation",
        url: "https://playzor.me",
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Home",
            description: "Playzor Homepage - India's #1 Game Server Hosting",
            url: "https://playzor.me",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Pricing",
            description: "Minecraft Server Hosting Plans Starting ₹199/mo",
            url: "https://playzor.me/#pricing",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Features",
            description: "Ryzen 9, NVMe SSD, DDoS Protection, 99.9% Uptime",
            url: "https://playzor.me/#features",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Reviews",
            description: "500+ 5-Star Reviews from Happy Gamers",
            url: "https://playzor.me/#reviews",
          },
          {
            "@type": "SiteNavigationElement",
            name: "FAQ",
            description: "Frequently Asked Questions about Playzor Hosting",
            url: "https://playzor.me/#faq",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Partners",
            description: "Playzor Partner & Affiliate Program",
            url: "https://playzor.me/partners",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Order Now",
            description: "Buy Minecraft Server Hosting - Instant Setup",
            url: "https://checkout.playzor.me",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Terms of Service",
            description: "Playzor Terms and Conditions",
            url: "https://playzor.me/terms",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Privacy Policy",
            description: "Playzor Privacy Policy",
            url: "https://playzor.me/privacy",
          },
          {
            "@type": "SiteNavigationElement",
            name: "Refund Policy",
            description: "Playzor Refund and Cancellation Policy",
            url: "https://playzor.me/refund",
          },
        ],
      },

      // ===== PRODUCT (Rich Results with Pricing) =====
      {
        "@type": "Product",
        "@id": "https://playzor.me/#product",
        name: "Playzor Minecraft Server Hosting",
        description:
          "India's #1 premium Minecraft server hosting with Ryzen 9 processors, NVMe SSD storage, enterprise DDoS protection, unlimited player slots, and 99.9% uptime guarantee. Support for Java, Bedrock, Forge, Fabric, Paper, Spigot, Purpur, and 50+ modpacks including Pixelmon, RLCraft, FTB, All The Mods. Best alternative to GBNodes, BisectHosting, Apex Hosting, and Shockbyte for Indian gamers.",
        brand: {
          "@type": "Brand",
          name: "Playzor",
          logo: "https://playzor.me/logo.png",
          slogan: "India's #1 Premium Game Server Hosting",
        },
        category: "Game Server Hosting",
        url: "https://playzor.me",
        image: "https://playzor.me/logo.png",
        sku: "PLAYZOR-MC-HOSTING",
        mpn: "PLAYZOR-2024",
        audience: {
          "@type": "Audience",
          audienceType: "Gamers",
          geographicArea: { "@type": "Country", name: "India" },
        },
        offers: {
          "@type": "AggregateOffer",
          "@id": "https://playzor.me/#offers",
          priceCurrency: "INR",
          lowPrice: "199",
          highPrice: "1199",
          offerCount: "4",
          availability: "https://schema.org/InStock",
          seller: { "@id": "https://playzor.me/#organization" },
          offers: [
            {
              "@type": "Offer",
              name: "Iron Plan - 4GB Minecraft Server",
              description:
                "4GB RAM, 2 vCore Ryzen 9 7950X, 50GB NVMe SSD, Enterprise DDoS Protection, Unlimited Player Slots, Free Subdomain, 24/7 Support, Instant Setup",
              price: "199",
              priceCurrency: "INR",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://checkout.playzor.me",
              itemCondition: "https://schema.org/NewCondition",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "199",
                priceCurrency: "INR",
                billingDuration: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitCode: "MON",
                },
                unitText: "month",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitText: "server",
                },
              },
              eligibleRegion: { "@type": "Country", name: "India" },
              seller: { "@id": "https://playzor.me/#organization" },
            },
            {
              "@type": "Offer",
              name: "Gold Plan - 8GB Minecraft Server",
              description:
                "8GB RAM, 3 vCore Ryzen 9 7950X, 100GB NVMe SSD, Enterprise DDoS Protection, Unlimited Player Slots, Free Subdomain, 24/7 Support, Instant Setup",
              price: "399",
              priceCurrency: "INR",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://checkout.playzor.me",
              itemCondition: "https://schema.org/NewCondition",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "399",
                priceCurrency: "INR",
                billingDuration: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitCode: "MON",
                },
                unitText: "month",
              },
              seller: { "@id": "https://playzor.me/#organization" },
            },
            {
              "@type": "Offer",
              name: "Diamond Plan - 16GB Minecraft Server",
              description:
                "16GB RAM, 4 vCore Ryzen 9 7950X, Unlimited NVMe SSD, Enterprise DDoS Protection, Unlimited Player Slots, Free Subdomain, Priority 24/7 Support, Instant Setup",
              price: "599",
              priceCurrency: "INR",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://checkout.playzor.me",
              itemCondition: "https://schema.org/NewCondition",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "599",
                priceCurrency: "INR",
                billingDuration: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitCode: "MON",
                },
                unitText: "month",
              },
              seller: { "@id": "https://playzor.me/#organization" },
            },
            {
              "@type": "Offer",
              name: "Netherite Plan - 32GB Minecraft Server",
              description:
                "32GB RAM, 6 vCore Ryzen 9 7950X, Unlimited NVMe SSD, Enterprise DDoS Protection, Unlimited Player Slots, Dedicated IP, Priority 24/7 Support, Instant Setup",
              price: "1199",
              priceCurrency: "INR",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              url: "https://checkout.playzor.me",
              itemCondition: "https://schema.org/NewCondition",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "1199",
                priceCurrency: "INR",
                billingDuration: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitCode: "MON",
                },
                unitText: "month",
              },
              seller: { "@id": "https://playzor.me/#organization" },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "500",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Arjun K." },
            datePublished: "2025-02-15",
            reviewBody:
              "The performance is unmatched. Switching from GBNodes to Playzor was the best decision for my SMP. Zero lag even with 50+ players and heavy modpacks. Best Minecraft hosting in India!",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Priya S." },
            datePublished: "2025-03-10",
            reviewBody:
              "Best Minecraft hosting in India hands down. Low ping from Mumbai, amazing customer support, and the price is unbeatable at ₹199/mo. Way better than Apex and Shockbyte.",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Rohan M." },
            datePublished: "2025-01-20",
            reviewBody:
              "I tried BisectHosting, Shockbyte, and GBNodes before finding Playzor. Nothing comes close. The Ryzen 9 performance is insane and the NVMe storage makes world loading instant.",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Vikram P." },
            datePublished: "2025-04-05",
            reviewBody:
              "Started my Pixelmon server on Playzor's Gold plan. Runs perfectly with 30+ players online. DDoS protection saved us multiple times. Highly recommend for Indian gamers!",
          },
          {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: { "@type": "Person", name: "Sneha R." },
            datePublished: "2025-03-28",
            reviewBody:
              "Our RLCraft server has been running flawlessly on Playzor for 3 months. Support team responds within minutes. Best cheap Minecraft hosting in India with premium quality.",
          },
        ],
        additionalProperty: [
          { "@type": "PropertyValue", name: "CPU", value: "AMD Ryzen 9 7950X" },
          { "@type": "PropertyValue", name: "Storage Type", value: "NVMe SSD" },
          {
            "@type": "PropertyValue",
            name: "DDoS Protection",
            value: "Enterprise Grade",
          },
          {
            "@type": "PropertyValue",
            name: "Uptime Guarantee",
            value: "99.9%",
          },
          {
            "@type": "PropertyValue",
            name: "Player Slots",
            value: "Unlimited",
          },
          { "@type": "PropertyValue", name: "Setup Time", value: "Instant" },
          {
            "@type": "PropertyValue",
            name: "Support",
            value: "24/7 Expert Support",
          },
          {
            "@type": "PropertyValue",
            name: "Server Locations",
            value: "India, Singapore",
          },
          {
            "@type": "PropertyValue",
            name: "Control Panel",
            value: "Pterodactyl",
          },
          {
            "@type": "PropertyValue",
            name: "Supported Games",
            value:
              "Minecraft, ARK, Rust, Terraria, Valheim, Palworld, FiveM, 50+",
          },
        ],
      },

      // ===== FAQPAGE (25+ Questions for Maximum SERP Real Estate) =====
      {
        "@type": "FAQPage",
        "@id": "https://playzor.me/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best Minecraft server hosting in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor is India's #1 rated Minecraft server hosting provider with a 4.9/5 rating from 500+ customers. We offer Ryzen 9 7950X processors, NVMe SSD storage, enterprise DDoS protection, 99.9% uptime guarantee, and instant server setup starting at just ₹199/month. Our servers are located in India (Mumbai) and Singapore for the lowest possible ping for Indian gamers.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Minecraft server hosting cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor offers premium Minecraft server hosting starting at ₹199/month for the Iron Plan (4GB RAM, 2 vCore Ryzen 9, 50GB NVMe). Our Gold Plan is ₹399/month (8GB RAM), Diamond Plan is ₹599/month (16GB RAM), and Netherite Plan is ₹1199/month (32GB RAM) with unlimited NVMe storage. All plans include DDoS protection, unlimited player slots, and 24/7 support.",
            },
          },
          {
            "@type": "Question",
            name: "Is Playzor better than GBNodes for Minecraft hosting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Many gamers have switched from GBNodes to Playzor and reported better performance. Playzor offers premium Ryzen 9 7950X hardware (vs older CPUs), NVMe SSD storage, enterprise DDoS protection, servers in India & Singapore, and competitive pricing starting at ₹199/mo. With 500+ positive reviews and a 4.9/5 rating, Playzor is considered the best GBNodes alternative for Indian gamers.",
            },
          },
          {
            "@type": "Question",
            name: "Is Playzor better than BisectHosting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For Indian gamers, Playzor offers several advantages over BisectHosting: servers located in India and Singapore (lower ping), pricing in INR starting at ₹199/mo, Ryzen 9 7950X processors, NVMe SSD storage, and local customer support in English and Hindi. BisectHosting's servers are primarily in the US and Europe, resulting in higher latency for Indian players.",
            },
          },
          {
            "@type": "Question",
            name: "Is Playzor better than Apex Minecraft Hosting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor is the top-rated Apex Hosting alternative for Indian gamers. While Apex Hosting is a great provider, Playzor specifically caters to the Indian market with local servers in India and Singapore, INR pricing (starting ₹199/mo vs Apex's USD pricing), Ryzen 9 hardware, and bilingual support. Indian gamers get 5-10ms ping compared to 100-200ms with Apex's international servers.",
            },
          },
          {
            "@type": "Question",
            name: "Is Playzor better than Shockbyte?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For Indian players, Playzor offers superior value compared to Shockbyte. Playzor provides India-located servers (low ping), Ryzen 9 processors, NVMe SSD, enterprise DDoS protection, unlimited slots, and INR pricing starting at ₹199/month. Shockbyte's closest servers are in Singapore, and their pricing is in USD which can be expensive after conversion for Indian customers.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor support Minecraft Java and Bedrock Edition?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor supports both Minecraft Java Edition and Bedrock Edition hosting, including crossplay via Geyser + Floodgate. We support all popular server software: Paper, Spigot, Purpur, Forge, Fabric, NeoForge, Quilt, Velocity, BungeeCord, Waterfall, and more. Java and Bedrock players can play together on the same server.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor offer DDoS protection for Minecraft servers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! All Playzor game servers include enterprise-grade DDoS protection at no additional cost. Our multi-layered DDoS mitigation system protects against volumetric attacks, protocol attacks, and application-layer attacks, ensuring your Minecraft server stays online 24/7. This is included in all plans starting from ₹199/month.",
            },
          },
          {
            "@type": "Question",
            name: "Can I host modded Minecraft servers on Playzor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! Playzor supports all Minecraft server types and modloaders including Forge, Fabric, NeoForge, Quilt, Paper, Spigot, and Purpur. We support popular modpacks like Pixelmon, Cobblemon, RLCraft, Feed The Beast (FTB), All The Mods (ATM 9, ATM 10), SkyFactory, Create, Better Minecraft, Vault Hunters, Prominence II, and 100+ more. One-click modpack installation available.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cheapest Minecraft hosting in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor offers the cheapest premium Minecraft hosting in India starting at just ₹199/month. This Iron Plan includes 4GB RAM, 2 vCore Ryzen 9 7950X CPU, 50GB NVMe SSD storage, enterprise DDoS protection, unlimited player slots, free subdomain, automatic backups, and 24/7 support. No hidden fees, no setup charges.",
            },
          },
          {
            "@type": "Question",
            name: "Where are Playzor servers located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor operates server infrastructure in India (Mumbai) and Singapore. Indian players typically experience 5-30ms ping to our Mumbai servers. We use enterprise-grade hardware including AMD Ryzen 9 7950X processors and NVMe SSD storage in Tier-3+ data centers with redundant power and networking.",
            },
          },
          {
            "@type": "Question",
            name: "How do I create a Minecraft server on Playzor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Setting up a Minecraft server on Playzor takes less than 2 minutes: 1) Visit checkout.playzor.me and select your plan (starting ₹199/mo). 2) Complete payment. 3) Your server is instantly provisioned with our easy-to-use control panel. 4) Choose your Minecraft version and server software. 5) Share your server IP with friends and start playing! Our 24/7 support team is always available to help.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor support Pixelmon and Pokemon mods?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor is one of the best hosts for Pixelmon and Cobblemon servers in India. We recommend our Gold Plan (8GB RAM, ₹399/mo) or higher for Pixelmon/Cobblemon servers for the best performance. One-click installation is available. Our Ryzen 9 processors handle the CPU-intensive nature of Pixelmon perfectly.",
            },
          },
          {
            "@type": "Question",
            name: "Can I host other games besides Minecraft on Playzor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor supports 50+ games including ARK: Survival Evolved, ARK: Survival Ascended, Rust, Terraria, Valheim, Palworld, 7 Days to Die, Project Zomboid, FiveM (GTA V), Garry's Mod, Satisfactory, V Rising, Enshrouded, Core Keeper, and many more. All games benefit from our Ryzen 9 hardware and NVMe SSD storage.",
            },
          },
          {
            "@type": "Question",
            name: "What control panel does Playzor use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor uses the Pterodactyl game panel - the industry-leading open-source game server management panel. Features include: file manager, console access, SFTP, scheduled tasks, sub-users, automatic backups, one-click mod/plugin installation, server version management, resource monitoring, and more. It's accessible from any web browser.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor offer instant server setup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! All Playzor servers are provisioned instantly after payment. Your Minecraft server will be ready to use within 1-2 minutes of completing your order. No waiting, no manual setup required. You'll receive your server credentials via email immediately.",
            },
          },
          {
            "@type": "Question",
            name: "What is Playzor's uptime guarantee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor guarantees 99.9% uptime for all game servers. We use enterprise-grade infrastructure with redundant power, networking, and cooling systems. Our Tier-3+ data centers ensure maximum reliability. In the rare event of downtime exceeding our SLA, eligible customers may receive service credits.",
            },
          },
          {
            "@type": "Question",
            name: "How many players can join my Playzor Minecraft server?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All Playzor plans come with unlimited player slots at no extra cost! The practical player count depends on your plan: Iron (4GB) supports ~20-30 players vanilla, Gold (8GB) supports ~50-80 players, Diamond (16GB) supports ~100-150 players, and Netherite (32GB) supports ~200+ players. Modded servers may need more RAM per player.",
            },
          },
          {
            "@type": "Question",
            name: "Can I upgrade my Playzor hosting plan later?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! You can upgrade your Playzor hosting plan at any time through our control panel. Upgrades are applied instantly with zero downtime. You only pay the difference for the remaining billing period. Downgrading is also available during your next billing cycle.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor offer a money-back guarantee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor offers a money-back guarantee for eligible services. Please review our refund policy at playzor.me/refund for complete details on our refund terms and conditions.",
            },
          },
          {
            "@type": "Question",
            name: "How to host a Minecraft SMP server in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To host a Minecraft SMP in India: 1) Choose Playzor (India's #1 host, from ₹199/mo). 2) Select a plan based on expected players (Gold ₹399/mo recommended for SMPs). 3) Setup takes 2 minutes. 4) Install plugins like EssentialsX, LuckPerms, WorldGuard via one-click installer. 5) Configure whitelist and share IP with your SMP community. Playzor's Indian servers ensure low ping for all Indian SMP members.",
            },
          },
          {
            "@type": "Question",
            name: "Is Aternos or Minehut better than Playzor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Aternos and Minehut are free Minecraft hosting services but come with severe limitations: server hibernation, queue times, poor performance, limited RAM, no custom plugins/mods, and no DDoS protection. Playzor starts at just ₹199/mo and provides dedicated Ryzen 9 resources, NVMe SSD, DDoS protection, 24/7 uptime, unlimited slots, and full control. Playzor is the best upgrade from free hosting.",
            },
          },
          {
            "@type": "Question",
            name: "What makes Playzor different from other hosting providers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor stands out with: 1) India-based servers for lowest ping (5-30ms). 2) AMD Ryzen 9 7950X processors (fastest in the market). 3) NVMe SSD storage (10x faster than SATA). 4) Enterprise DDoS protection included free. 5) INR pricing starting ₹199/mo (no USD conversion). 6) 24/7 expert support in English & Hindi. 7) 99.9% uptime SLA. 8) Instant setup. 9) Unlimited player slots. 10) 500+ happy gamers with 4.9/5 rating.",
            },
          },
          {
            "@type": "Question",
            name: "Can I host a Minecraft network (BungeeCord/Velocity) on Playzor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor supports Minecraft network hosting with BungeeCord, Waterfall, and Velocity proxy servers. You can create multi-server networks with separate lobby, survival, minigames, and other game modes. Our Netherite plan (32GB, ₹1199/mo) is recommended for network hosting, or you can have multiple servers across different plans.",
            },
          },
          {
            "@type": "Question",
            name: "Does Playzor provide automatic backups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! All Playzor plans include automatic server backups to keep your world data safe. You can also create manual backups anytime through the control panel, schedule automated backups at custom intervals, and restore from any backup point with one click.",
            },
          },
        ],
      },

      // ===== SERVICE =====
      {
        "@type": "Service",
        "@id": "https://playzor.me/#service",
        serviceType: "Game Server Hosting",
        name: "Playzor Premium Game Server Hosting",
        description:
          "India's #1 premium Minecraft and game server hosting service. Features include AMD Ryzen 9 7950X processors, NVMe SSD storage, enterprise DDoS protection, instant provisioning, unlimited player slots, 24/7 expert support, and a 99.9% uptime guarantee. Supports 50+ games. Starting at ₹199/month.",
        provider: { "@id": "https://playzor.me/#organization" },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "Continent", name: "Asia" },
        ],
        serviceOutput: "Game Server Instance",
        termsOfService: "https://playzor.me/terms",
        award: "India's #1 Rated Game Server Host",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Game Server Hosting Plans",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Minecraft Server Hosting",
              description:
                "Java & Bedrock Minecraft server hosting with mod support",
            },
            {
              "@type": "OfferCatalog",
              name: "ARK Server Hosting",
              description:
                "ARK: Survival Evolved & ARK: Survival Ascended hosting",
            },
            {
              "@type": "OfferCatalog",
              name: "Rust Server Hosting",
              description: "High-performance Rust game server hosting",
            },
            {
              "@type": "OfferCatalog",
              name: "Terraria Server Hosting",
              description: "Terraria multiplayer server hosting",
            },
            {
              "@type": "OfferCatalog",
              name: "Palworld Server Hosting",
              description: "Dedicated Palworld server hosting",
            },
            {
              "@type": "OfferCatalog",
              name: "FiveM Server Hosting",
              description: "GTA V FiveM roleplay server hosting",
            },
            {
              "@type": "OfferCatalog",
              name: "Valheim Server Hosting",
              description: "Valheim dedicated server hosting",
            },
          ],
        },
      },

      // ===== SOFTWAREAPPLICATION =====
      {
        "@type": "SoftwareApplication",
        "@id": "https://playzor.me/#panel",
        name: "Playzor Game Panel",
        applicationCategory: "GameApplication",
        applicationSubCategory: "Game Server Management",
        operatingSystem: "Web-based (Any Browser)",
        description:
          "Playzor's industry-leading game server management panel powered by Pterodactyl. Features include one-click mod/plugin installation, automatic backups, file manager, console access, SFTP, scheduled tasks, sub-user management, resource monitoring, and server version management.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          description: "Included free with all hosting plans",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "350",
          bestRating: "5",
          worstRating: "1",
        },
        featureList:
          "File Manager, Console, SFTP, Scheduled Tasks, Sub-Users, Auto Backups, One-Click Mod Install, Version Manager, Resource Monitoring",
      },

      // ===== ITEMLIST (For Google Sitelinks / Rich Results) =====
      {
        "@type": "ItemList",
        "@id": "https://playzor.me/#plans-list",
        name: "Playzor Minecraft Server Hosting Plans",
        description:
          "Compare all Playzor game server hosting plans starting from ₹199/month",
        numberOfItems: 4,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Iron Plan - ₹199/month",
            description:
              "4GB RAM, 2 vCore Ryzen 9, 50GB NVMe SSD - Best for small SMPs and vanilla servers",
            url: "https://checkout.playzor.me",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Gold Plan - ₹399/month",
            description:
              "8GB RAM, 3 vCore Ryzen 9, 100GB NVMe SSD - Best for modded servers and medium communities",
            url: "https://checkout.playzor.me",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Diamond Plan - ₹599/month",
            description:
              "16GB RAM, 4 vCore Ryzen 9, Unlimited NVMe - Best for large servers and heavy modpacks",
            url: "https://checkout.playzor.me",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Netherite Plan - ₹1199/month",
            description:
              "32GB RAM, 6 vCore Ryzen 9, Unlimited NVMe - Best for networks and enterprise servers",
            url: "https://checkout.playzor.me",
          },
        ],
      },

      // ===== HOWTO (For Rich Snippet) =====
      {
        "@type": "HowTo",
        name: "How to Create a Minecraft Server in India with Playzor",
        description:
          "Step-by-step guide to setting up your own Minecraft server in India using Playzor hosting, the #1 rated game hosting provider.",
        totalTime: "PT2M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "INR",
          value: "199",
        },
        supply: [
          {
            "@type": "HowToSupply",
            name: "A Playzor hosting plan (from ₹199/mo)",
          },
          { "@type": "HowToSupply", name: "Minecraft Java or Bedrock Edition" },
        ],
        tool: [
          { "@type": "HowToTool", name: "Web browser" },
          { "@type": "HowToTool", name: "Minecraft game client" },
        ],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Choose Your Plan",
            text: "Visit checkout.playzor.me and select the hosting plan that suits your needs. The Iron Plan (₹199/mo, 4GB RAM) is perfect for beginners and small groups.",
            url: "https://checkout.playzor.me",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Complete Payment",
            text: "Complete the payment process using your preferred payment method. Indian payment methods including UPI and net banking are supported.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Access Your Server Panel",
            text: "Your server is instantly provisioned. Check your email for login credentials and access the Playzor game panel.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Configure Your Server",
            text: "Select your Minecraft version, server software (Paper, Forge, Fabric, etc.), and install any mods or plugins using the one-click installer.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Start Playing!",
            text: "Copy your server IP address, share it with friends, and start playing Minecraft together with ultra-low ping from India!",
          },
        ],
      },

      // ===== OFFERS PAGE (For pricing rich results) =====
      {
        "@type": "OfferForPurchase",
        name: "Playzor Game Hosting Plans",
        description:
          "Premium game server hosting starting at ₹199/month with Ryzen 9 and NVMe SSD",
        url: "https://checkout.playzor.me",
        seller: { "@id": "https://playzor.me/#organization" },
        category: "Game Server Hosting",
      },

      // ===== SPECIAL ANNOUNCEMENT =====
      {
        "@type": "SpecialAnnouncement",
        name: "Playzor - India's Most Affordable Game Hosting",
        text: "Get premium Minecraft server hosting starting at just ₹199/month! Ryzen 9 + NVMe SSD + DDoS Protection + 99.9% Uptime. India's #1 game hosting provider. Instant setup, unlimited slots.",
        datePosted: "2024-01-01T00:00:00+05:30",
        url: "https://playzor.me",
        category: "https://www.wikidata.org/wiki/Q1066139",
        announcementLocation: {
          "@type": "Country",
          name: "India",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <Locations />
      <Pricing />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}
