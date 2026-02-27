import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Playzor - India's #1 Game Server Hosting",
  description:
    "Learn about Playzor — India's leading game server hosting provider. Our mission, team, and commitment to delivering premium Minecraft and game hosting infrastructure.",
  keywords: [
    "Playzor about", "about Playzor", "Playzor team",
    "game hosting India", "Minecraft hosting company",
    "Playzor Technologies",
  ],
  alternates: {
    canonical: "https://playzor.me/about",
  },
  openGraph: {
    title: "About Us | Playzor - India's #1 Game Server Hosting",
    description: "Learn about Playzor — India's leading game server hosting provider.",
    url: "https://playzor.me/about",
    type: "website",
    siteName: "Playzor",
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
