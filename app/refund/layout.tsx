import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Refund Policy | Playzor - Premium Minecraft and Game Server Hosting India",
  description:
    "Playzor Refund Policy. Transparent and fair refund process for Minecraft and game server hosting. Money-back guarantee for India's most trusted premium game hosting provider. Hassle-free cancellation and refund within the eligibility period.",
  keywords: [
    "Playzor refund",
    "Playzor refund policy",
    "Playzor money back",
    "Playzor money back guarantee",
    "Playzor cancellation",
    "Playzor cancel subscription",
    "Playzor cancel plan",
    "game hosting refund India",
    "Minecraft hosting refund policy",
    "game server refund",
    "Minecraft hosting money back",
    "Playzor billing",
    "Playzor payment",
    "how to cancel Playzor",
    "Playzor refund process",
    "Playzor guarantee",
    "game hosting cancellation India",
    "Minecraft server refund India",
  ],
  alternates: {
    canonical: "https://playzor.me/refund",
  },
  openGraph: {
    title: "Refund Policy | Playzor - India's #1 Game Server Hosting",
    description:
      "Playzor Refund Policy - Fair, transparent refund process with money-back guarantee for game server hosting.",
    url: "https://playzor.me/refund",
    type: "website",
    siteName: "Playzor",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy | Playzor",
    description: "Playzor Refund Policy — transparent, fair refund process.",
  },
  robots: { index: true, follow: true },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
