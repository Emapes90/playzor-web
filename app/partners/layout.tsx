import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Become a Playzor Partner | Earn Money Promoting India's #1 Game Hosting",
  description:
    "Join the Playzor Partner Program and earn commissions promoting India's #1 Minecraft and game server hosting. Exclusive discounts up to 50%, dedicated partner support, professional marketing materials, and a growing community of 500+ gamers. The best game hosting affiliate and referral program in India. Apply now and start earning today.",
  keywords: [
    "Playzor partner",
    "Playzor affiliate",
    "Playzor partner program",
    "Playzor affiliate program",
    "Playzor referral program",
    "game hosting partner program",
    "game hosting affiliate program",
    "Minecraft hosting affiliate",
    "Minecraft hosting partner",
    "earn money gaming India",
    "earn money Minecraft India",
    "game hosting affiliate India",
    "gaming affiliate India",
    "game server hosting affiliate",
    "Playzor referral",
    "Playzor partner discount",
    "Playzor commission",
    "game hosting influencer program",
    "Minecraft YouTuber partner",
    "game hosting content creator program",
    "Playzor ambassador",
    "best gaming affiliate program India",
    "Minecraft hosting referral India",
  ],
  alternates: {
    canonical: "https://playzor.me/partners",
  },
  openGraph: {
    title:
      "Become a Playzor Partner | Earn Commissions | Game Hosting Affiliate India",
    description:
      "Join Playzor's partner program. Earn commissions, get exclusive discounts up to 50%, and grow your community with India's #1 game hosting provider. 500+ happy partners.",
    url: "https://playzor.me/partners",
    type: "website",
    siteName: "Playzor",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Playzor Partner Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Playzor Partner | Earn Money with Game Hosting",
    description:
      "Join India's #1 game hosting affiliate program. Earn commissions promoting Playzor.",
    images: ["https://playzor.me/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
