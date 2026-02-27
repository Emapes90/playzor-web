import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright & DMCA Policy | Playzor - India's #1 Game Server Hosting",
  description:
    "Playzor Copyright and DMCA Policy — How Playzor handles copyright infringement claims, intellectual property complaints, and content removal for game hosting services.",
  keywords: [
    "Playzor DMCA", "Playzor copyright policy",
    "game hosting DMCA", "Minecraft hosting copyright",
    "Playzor content removal", "Playzor intellectual property",
  ],
  alternates: {
    canonical: "https://playzor.me/dmca",
  },
  openGraph: {
    title: "Copyright & DMCA Policy | Playzor - India's #1 Game Server Hosting",
    description: "Playzor Copyright & DMCA Policy — Copyright infringement claims and intellectual property handling.",
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
