import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms of Service | Playzor - Premium Minecraft and Game Server Hosting India",
  description:
    "Read Playzor's Terms of Service for Minecraft and game server hosting. Fair usage policy, 99.9% uptime service level agreement, service guarantees, and customer agreements for India's most trusted premium game hosting provider. Transparent terms with no hidden fees or surprise charges.",
  keywords: [
    "Playzor terms of service",
    "Playzor TOS",
    "Playzor terms",
    "Playzor terms and conditions",
    "Playzor user agreement",
    "Playzor service agreement",
    "Playzor legal",
    "game hosting terms of service",
    "Minecraft hosting terms",
    "Playzor SLA",
    "Playzor uptime guarantee",
    "Playzor fair usage",
    "game server hosting terms India",
    "Minecraft server terms India",
    "Playzor hosting agreement",
    "Playzor customer agreement",
    "game hosting legal India",
    "Playzor policies",
  ],
  alternates: {
    canonical: "https://playzor.me/terms",
  },
  openGraph: {
    title: "Terms of Service | Playzor - India's #1 Game Server Hosting",
    description:
      "Playzor Terms of Service - Fair usage, 99.9% uptime SLA, service guarantees for India's #1 game server hosting.",
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
