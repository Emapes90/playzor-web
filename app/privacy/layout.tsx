import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Playzor - India's #1 Game Server Hosting",
  description:
    "Playzor Privacy Policy. Learn how we protect your personal data and privacy while providing India's best Minecraft and game server hosting services. GDPR-friendly, transparent data handling, no data selling.",
  keywords: [
    "Playzor privacy policy", "Playzor data protection", "Playzor privacy",
    "game hosting privacy policy", "Minecraft hosting privacy",
    "Playzor data handling", "Playzor GDPR",
  ],
  alternates: {
    canonical: "https://playzor.me/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Playzor - India's #1 Game Server Hosting",
    description: "Playzor Privacy Policy - How we handle and protect your data at India's #1 game hosting provider. Transparent and secure.",
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
