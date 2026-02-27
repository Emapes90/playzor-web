import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Playzor - India's #1 Game Server Hosting",
  description:
    "Playzor Refund Policy. Transparent and fair refund process for Minecraft and game server hosting. Money-back guarantee for India's most trusted game hosting provider. No questions asked within eligibility period.",
  keywords: [
    "Playzor refund",
    "Playzor refund policy",
    "Playzor money back",
    "Playzor money back guarantee",
    "Playzor cancellation",
    "game hosting refund India",
    "Minecraft hosting refund policy",
    "Playzor cancel subscription",
    "game server refund",
    "Minecraft hosting money back",
    "Playzor billing",
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
  robots: { index: true, follow: true },
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
