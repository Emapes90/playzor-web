import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Playzor - India's #1 Game Server Hosting",
  description:
    "Read Playzor's Terms of Service for Minecraft and game server hosting. Fair usage policy, 99.9% uptime SLA, service guarantees, and customer agreements for India's best game hosting provider. Transparent terms, no hidden fees.",
  keywords: [
    "Playzor terms of service", "Playzor TOS", "Playzor terms",
    "game hosting terms of service", "Minecraft hosting terms",
    "Playzor SLA", "Playzor uptime guarantee", "Playzor fair usage",
  ],
  alternates: {
    canonical: "https://playzor.me/terms",
  },
  openGraph: {
    title: "Terms of Service | Playzor - India's #1 Game Server Hosting",
    description: "Playzor Terms of Service - Fair usage, 99.9% uptime SLA, service guarantees for India's #1 game server hosting.",
    url: "https://playzor.me/terms",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
