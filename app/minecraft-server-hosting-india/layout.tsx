import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Minecraft Server Hosting India | Low Ping Mumbai & Singapore | Playzor",
  description:
    "Best Minecraft server hosting in India. Mumbai & Singapore servers with 5-30ms ping. Java & Bedrock, mods, plugins, unlimited slots. AMD Ryzen 9 7950X, NVMe SSD, DDoS protection. From ₹199/month.",
  alternates: {
    canonical: "https://playzor.me/minecraft-server-hosting-india",
  },
  keywords: [
    "minecraft server hosting india",
    "minecraft hosting india",
    "minecraft server india",
    "best minecraft hosting india",
    "cheap minecraft server hosting india",
    "minecraft india server",
    "minecraft hosting mumbai",
    "minecraft server hosting mumbai",
    "minecraft server hosting singapore",
    "low ping minecraft server india",
    "minecraft java server hosting india",
    "minecraft bedrock server hosting india",
    "minecraft smp hosting india",
    "minecraft server hosting asia",
    "minecraft hosting inr",
    "minecraft server hosting cheap india",
    "buy minecraft server india",
    "minecraft multiplayer server india",
    "rent minecraft server india",
    "modded minecraft server hosting india",
    "minecraft forge server india",
    "minecraft paper server india",
    "minecraft spigot server india",
    "indian minecraft server hosting",
    "minecraft hosting with low ping india",
  ],
  openGraph: {
    title: "Minecraft Server Hosting India | Low Ping Servers | Playzor",
    description:
      "India's best Minecraft server hosting. Mumbai & Singapore servers. 5-30ms ping. Java & Bedrock. From ₹199/month.",
    url: "https://playzor.me/minecraft-server-hosting-india",
    siteName: "Playzor",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Playzor Minecraft Server Hosting India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft Server Hosting India | Playzor",
    description:
      "Best Minecraft hosting in India. Mumbai & Singapore. 5-30ms ping. From ₹199/month.",
    images: ["https://playzor.me/logo.png"],
  },
};

export default function MinecraftServerHostingIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
