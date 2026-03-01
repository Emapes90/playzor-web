import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy | Playzor - Premium Minecraft and Game Server Hosting India",
  description:
    "Playzor Privacy Policy. Learn how we protect your personal data and privacy while providing India's leading Minecraft and game server hosting services. Transparent data handling, no data selling, and comprehensive security measures to keep your information safe.",
  keywords: [
    "Playzor privacy policy",
    "Playzor data protection",
    "Playzor privacy",
    "Playzor data policy",
    "Playzor cookies",
    "Playzor cookie policy",
    "game hosting privacy policy",
    "Minecraft hosting privacy",
    "Playzor data handling",
    "Playzor GDPR",
    "Playzor data security",
    "Playzor user data",
    "game server data protection India",
    "Playzor information security",
    "Playzor privacy India",
    "game hosting data policy India",
    "Minecraft server privacy India",
  ],
  alternates: {
    canonical: "https://playzor.me/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Playzor - India's #1 Game Server Hosting",
    description:
      "Playzor Privacy Policy - How we handle and protect your data at India's #1 game hosting provider. Transparent and secure.",
    url: "https://playzor.me/privacy",
    type: "website",
    siteName: "Playzor",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
