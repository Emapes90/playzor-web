import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Service Level Agreement (SLA) | Playzor - Premium Minecraft and Game Server Hosting India",
  description:
    "Playzor Service Level Agreement. 99.9% uptime guarantee, support response objectives, scheduled maintenance policies, and infrastructure performance goals for India's leading premium Minecraft and game server hosting provider.",
  keywords: [
    "Playzor SLA",
    "Playzor uptime",
    "Playzor service level agreement",
    "Playzor uptime guarantee",
    "Playzor 99.9 uptime",
    "game hosting SLA",
    "Minecraft hosting uptime",
    "Playzor reliability",
    "Playzor infrastructure",
    "Playzor server uptime",
    "Playzor downtime policy",
    "game server SLA India",
    "Playzor performance guarantee",
    "Minecraft server uptime India",
    "Playzor support SLA",
    "game hosting uptime India",
    "Playzor availability",
  ],
  alternates: {
    canonical: "https://playzor.me/sla",
  },
  openGraph: {
    title:
      "Service Level Agreement (SLA) | Playzor - India's #1 Game Server Hosting",
    description:
      "Playzor SLA — uptime targets, support response objectives, and infrastructure performance goals.",
    url: "https://playzor.me/sla",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function SLALayout({ children }: { children: React.ReactNode }) {
  return children;
}
