import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Playzor Blog - Minecraft Server Hosting Guides & Tips",
    default:
      "Playzor Blog - Minecraft Server Hosting Guides, Tutorials & Security Tips",
  },
  description:
    "Read the latest Minecraft server hosting guides, tutorials, security tips, plugin recommendations, and game server management articles on the Playzor Blog. Expert tips for Minecraft Java, Bedrock, Forge, Fabric, Paper, and Spigot servers. Learn how to optimize your game server performance, protect against DDoS attacks, and set up modpacks like Pixelmon and RLCraft.",
  keywords: [
    "Playzor blog",
    "Minecraft server hosting blog",
    "Minecraft hosting guides",
    "Minecraft server tutorials",
    "game server hosting tips",
    "Minecraft plugin guide",
    "Minecraft server setup guide",
    "DDoS protection guide",
    "Minecraft modpack hosting",
    "Minecraft server optimization",
    "Paper server guide",
    "Spigot server tutorial",
    "Forge server hosting",
    "Fabric server hosting",
    "Minecraft Java hosting guide",
    "Minecraft Bedrock hosting guide",
    "game server security",
    "Minecraft server management",
    "best Minecraft plugins 2026",
    "Minecraft server tips India",
    "Playzor hosting guides",
    "Minecraft SMP setup",
    "Minecraft server performance",
    "NVMe SSD game hosting",
    "Ryzen 9 Minecraft server",
  ],
  alternates: {
    canonical: "https://playzor.me/blog",
  },
  openGraph: {
    title: "Playzor Blog - Minecraft Server Hosting Guides & Tutorials",
    description:
      "Expert guides, tutorials, and tips for Minecraft server hosting. Learn server setup, plugin configuration, DDoS protection, and performance optimization from Playzor.",
    url: "https://playzor.me/blog",
    siteName: "Playzor",
    type: "website",
    images: [
      {
        url: "https://playzor.me/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Playzor Blog - Minecraft Server Hosting Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playzor Blog - Minecraft Server Hosting Guides & Tutorials",
    description:
      "Expert guides, tutorials, and tips for Minecraft server hosting from Playzor - India's #1 game server hosting provider.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
