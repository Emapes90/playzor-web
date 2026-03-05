import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Server Hosting India | Low Ping Mumbai & Singapore | Playzor",
  description:
    "Best game server hosting in India. Host Minecraft, ARK, Rust, Terraria, Palworld, Valheim, FiveM & 50+ games. Mumbai & Singapore servers, 5-30ms ping. AMD Ryzen 9, NVMe SSD. From ₹199/month.",
  alternates: {
    canonical: "https://playzor.me/game-server-hosting-india",
  },
  keywords: [
    "game server hosting india",
    "game hosting india",
    "game server india",
    "best game hosting india",
    "cheap game server hosting india",
    "multiplayer game hosting india",
    "game server hosting mumbai",
    "game server hosting asia",
    "indian game server hosting",
    "low ping game server india",
    "dedicated game server india",
    "ark server hosting india",
    "rust server hosting india",
    "terraria server hosting india",
    "palworld server hosting india",
    "valheim server hosting india",
    "fivem server hosting india",
    "7 days to die server hosting india",
    "project zomboid server hosting india",
    "cs2 server hosting india",
    "desi game server hosting",
    "game server hosting inr",
    "buy game server india",
    "rent game server india",
    "affordable game hosting india",
  ],
  openGraph: {
    title: "Game Server Hosting India | Low Ping Servers | Playzor",
    description:
      "India's best game server hosting. 50+ games. Mumbai & Singapore. 5-30ms ping. From ₹199/month.",
    url: "https://playzor.me/game-server-hosting-india",
    siteName: "Playzor",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Playzor Game Server Hosting India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Server Hosting India | Playzor",
    description: "50+ games. Mumbai & Singapore. Low ping. From ₹199/month.",
    images: ["https://playzor.me/logo.png"],
  },
};

export default function GameServerHostingIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
