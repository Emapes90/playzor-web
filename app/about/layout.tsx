import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Playzor - India's Leading Minecraft and Game Server Hosting Company",
  description:
    "Learn about Playzor, India's leading premium game server hosting provider. Our mission is to deliver the best Minecraft and game hosting infrastructure with unmatched performance, reliability, and support. Founded by gamers for gamers, Playzor powers servers for communities across India with AMD Ryzen 9 hardware, NVMe SSD, and enterprise DDoS protection.",
  keywords: [
    "Playzor about",
    "about Playzor",
    "Playzor team",
    "Playzor company",
    "Playzor Technologies",
    "Playzor story",
    "Playzor mission",
    "game hosting India company",
    "Minecraft hosting company India",
    "Playzor founder",
    "Playzor history",
    "who is Playzor",
    "Playzor game server company",
    "India game hosting provider",
    "best game hosting company India",
    "trusted Minecraft hosting India",
    "premium game server provider",
    "Playzor about us",
    "Indian game hosting startup",
    "Playzor gaming",
    "Playzor infrastructure",
    "Playzor data center",
    "game hosting company founded India",
    "Minecraft hosting startup India",
  ],
  alternates: {
    canonical: "https://playzor.me/about",
  },
  openGraph: {
    title: "About Us | Playzor - India's #1 Game Server Hosting",
    description:
      "Learn about Playzor — India's leading game server hosting provider.",
    url: "https://playzor.me/about",
    type: "website",
    siteName: "Playzor",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "About Playzor - India's Leading Game Server Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Playzor | India's #1 Game Server Hosting Company",
    description:
      "Learn about Playzor — India's leading game server hosting provider. Founded by gamers for gamers.",
    images: ["https://playzor.me/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
