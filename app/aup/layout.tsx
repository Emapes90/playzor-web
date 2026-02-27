import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Playzor - India's #1 Game Server Hosting",
  description:
    "Playzor Acceptable Use Policy — Permitted and prohibited use of Playzor game hosting services. Infrastructure abuse, network security, and content restrictions.",
  keywords: [
    "Playzor AUP", "Playzor acceptable use policy",
    "game hosting acceptable use", "Minecraft hosting rules",
    "Playzor prohibited activities",
  ],
  alternates: {
    canonical: "https://playzor.me/aup",
  },
  openGraph: {
    title: "Acceptable Use Policy | Playzor - India's #1 Game Server Hosting",
    description: "Playzor AUP — Permitted and prohibited use of Playzor hosting services.",
    url: "https://playzor.me/aup",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function AUPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
