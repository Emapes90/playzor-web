import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Copyright and DMCA Policy | Playzor - Premium Minecraft and Game Server Hosting India",
  description:
    "Playzor Copyright and DMCA Policy. How Playzor handles copyright infringement claims, intellectual property complaints, and content removal requests for our Minecraft and game hosting services. Committed to protecting intellectual property rights.",
  keywords: [
    "Playzor DMCA",
    "Playzor copyright policy",
    "Playzor copyright",
    "game hosting DMCA",
    "Minecraft hosting copyright",
    "Playzor content removal",
    "Playzor intellectual property",
    "Playzor DMCA takedown",
    "Playzor copyright complaint",
    "game server DMCA India",
    "Playzor content policy",
    "Playzor IP policy",
    "Minecraft server copyright India",
    "game hosting copyright India",
    "Playzor legal",
  ],
  alternates: {
    canonical: "https://playzor.me/dmca",
  },
  openGraph: {
    title: "Copyright & DMCA Policy | Playzor - India's #1 Game Server Hosting",
    description:
      "Playzor Copyright & DMCA Policy — Copyright infringement claims and intellectual property handling.",
    url: "https://playzor.me/dmca",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function DMCALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
