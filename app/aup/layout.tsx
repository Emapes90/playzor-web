import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Acceptable Use Policy | Playzor - Premium Minecraft and Game Server Hosting India",
  description:
    "Playzor Acceptable Use Policy. Permitted and prohibited use of Playzor Minecraft and game hosting services. Infrastructure abuse, network security, content restrictions, and fair usage guidelines for all server hosting customers.",
  keywords: [
    "Playzor AUP",
    "Playzor acceptable use policy",
    "Playzor rules",
    "game hosting acceptable use",
    "Minecraft hosting rules",
    "Playzor prohibited activities",
    "Playzor usage policy",
    "Playzor terms of use",
    "game server acceptable use India",
    "Playzor server rules",
    "Playzor fair use",
    "Minecraft server rules India",
    "Playzor hosting rules",
    "game hosting policy India",
    "Playzor network policy",
  ],
  alternates: {
    canonical: "https://playzor.me/aup",
  },
  openGraph: {
    title: "Acceptable Use Policy | Playzor - India's #1 Game Server Hosting",
    description:
      "Playzor AUP — Permitted and prohibited use of Playzor hosting services.",
    url: "https://playzor.me/aup",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function AUPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
