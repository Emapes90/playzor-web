import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) | Playzor - India's #1 Game Server Hosting",
  description:
    "Playzor Service Level Agreement — uptime targets, support response objectives, maintenance policies, and infrastructure performance goals for India's best game hosting provider.",
  keywords: [
    "Playzor SLA", "Playzor uptime", "Playzor service level agreement",
    "game hosting SLA", "Minecraft hosting uptime",
    "Playzor reliability", "Playzor infrastructure",
  ],
  alternates: {
    canonical: "https://playzor.me/sla",
  },
  openGraph: {
    title: "Service Level Agreement (SLA) | Playzor - India's #1 Game Server Hosting",
    description: "Playzor SLA — uptime targets, support response objectives, and infrastructure performance goals.",
    url: "https://playzor.me/sla",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function SLALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
