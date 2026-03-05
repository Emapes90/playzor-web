import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Game Server Hosting India 2026 | #1 Rated | Playzor ₹199/mo | 50+ Games",
  description:
    "Playzor is India's #1 game server hosting provider. Host Minecraft, ARK, Rust, Terraria, Palworld, Valheim, FiveM, and 50+ games. AMD Ryzen 9 7950X, NVMe SSD, enterprise DDoS protection, 99.9% uptime. ₹199/month. Instant setup, unlimited slots, 24/7 support. India (Mumbai) & Singapore servers for lowest ping.",
  keywords: [
    "game server hosting India",
    "game hosting India",
    "best game hosting India",
    "cheap game server hosting India",
    "game server hosting",
    "best game server hosting",
    "game hosting",
    "affordable game hosting India",
    "multiplayer game hosting India",
    "dedicated game server India",
    "game server provider India",
    "game hosting company India",
    "Indian game hosting",
    "gaming server India",
    "game server India low ping",
    "best game server India 2026",
    "cloud game server hosting India",
    "managed game hosting India",
    "game server rental India",
    "Minecraft hosting India",
    "ARK hosting India",
    "Rust hosting India",
    "Terraria hosting India",
    "Palworld hosting India",
    "Valheim hosting India",
    "FiveM hosting India",
    "game hosting Mumbai",
    "game hosting Delhi",
    "game hosting Bangalore",
    "game hosting Chennai",
    "Playzor game hosting",
  ],
  alternates: {
    canonical: "https://playzor.me/game-server-hosting",
  },
  openGraph: {
    title: "Best Game Server Hosting India 2026 | Playzor #1 Rated | 50+ Games",
    description:
      "India's #1 game hosting. Minecraft, ARK, Rust, Palworld, Valheim, FiveM & 50+ games. Ryzen 9, NVMe, DDoS protection. ₹199/mo.",
    url: "https://playzor.me/game-server-hosting",
    type: "website",
    siteName: "Playzor",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Playzor - Best Game Server Hosting India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Game Server Hosting India 2026 | Playzor ₹199/mo",
    description:
      "India's #1 game server hosting. 50+ games. Ryzen 9, NVMe, DDoS protection. From ₹199/mo.",
    images: ["https://playzor.me/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function GameServerHostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
