import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Minecraft Server Hosting India 2026 | #1 Rated | Playzor ₹199/mo",
  description:
    "Looking for the best Minecraft server hosting? Playzor is India's #1 rated Minecraft server hosting provider. AMD Ryzen 9 7950X, NVMe SSD, enterprise DDoS protection, 99.9% uptime, instant setup. Plans from ₹199/month. Java, Bedrock, Forge, Fabric, Paper, Spigot, Purpur, 100+ modpacks. Trusted by 500+ gamers. Server locations in India (Mumbai) & Singapore for ultra-low ping.",
  keywords: [
    "Minecraft server hosting",
    "Minecraft server hosting India",
    "best Minecraft hosting",
    "best Minecraft hosting India",
    "cheap Minecraft hosting",
    "Minecraft hosting India",
    "premium Minecraft hosting",
    "affordable Minecraft hosting India",
    "Minecraft host India",
    "buy Minecraft server India",
    "rent Minecraft server India",
    "Minecraft server provider India",
    "Minecraft hosting company India",
    "top Minecraft hosting India 2026",
    "best Minecraft hosting 2026",
    "cheapest Minecraft hosting India",
    "Minecraft server hosting low ping India",
    "Minecraft Java hosting India",
    "Minecraft Bedrock hosting India",
    "Minecraft modded hosting India",
    "Minecraft Forge hosting India",
    "Minecraft Fabric hosting India",
    "Minecraft Paper hosting India",
    "Minecraft SMP hosting India",
    "Minecraft server ₹199",
    "lag free Minecraft hosting India",
    "DDoS protected Minecraft hosting",
    "NVMe Minecraft hosting India",
    "Ryzen 9 Minecraft hosting",
    "Playzor Minecraft hosting",
  ],
  alternates: {
    canonical: "https://playzor.me/minecraft-server-hosting",
  },
  openGraph: {
    title: "Best Minecraft Server Hosting India 2026 | Playzor #1 Rated",
    description:
      "India's #1 Minecraft server hosting. Ryzen 9, NVMe SSD, DDoS protection, 99.9% uptime. ₹199/mo. Java, Bedrock, modpacks. 500+ gamers trust Playzor.",
    url: "https://playzor.me/minecraft-server-hosting",
    type: "website",
    siteName: "Playzor",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Playzor - Best Minecraft Server Hosting India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Minecraft Server Hosting India 2026 | Playzor ₹199/mo",
    description:
      "India's #1 Minecraft hosting. Ryzen 9, NVMe, DDoS protection, 99.9% uptime. From ₹199/mo.",
    images: ["https://playzor.me/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function MinecraftHostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
