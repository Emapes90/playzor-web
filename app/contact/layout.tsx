import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us - Playzor | 24/7 Game Server Hosting Support India | Get Help Now",
  description:
    "Contact Playzor for Minecraft server hosting, game server hosting support, billing help, technical support, server setup assistance, partnerships & more. 24/7 live support with 1-4 hour average response time. Email info@playzor.me or use our instant contact form. India's #1 trusted game hosting provider.",
  keywords: [
    "contact Playzor",
    "Playzor support",
    "Playzor contact page",
    "Playzor customer support",
    "Playzor email",
    "Playzor help center",
    "Playzor contact form",
    "Playzor Technologies contact",
    "Playzor 24/7 support",
    "game server hosting support India",
    "Minecraft hosting support India",
    "Minecraft server help India",
    "game hosting customer service",
    "game server technical support",
    "game hosting billing support",
    "contact game hosting India",
    "contact game server provider",
    "reach Playzor team",
    "Playzor inquiry",
    "Playzor support email",
    "Playzor live support",
    "game hosting help desk",
    "Minecraft server hosting help",
    "server hosting customer care India",
    "Playzor partnership inquiry",
    "game server hosting contact form",
    "cheap game server hosting support",
    "best game hosting support India",
    "low latency server hosting support",
    "India game server support",
    "Playzor contact number",
    "Playzor reach out",
    "game server hosting query",
    "Minecraft hosting query India",
    "Playzor response time",
    "Playzor quick support",
    "game hosting provider contact",
    "server hosting assistance India",
    "Playzor technical help",
    "Playzor server setup help",
  ],
  alternates: {
    canonical: "https://playzor.me/contact",
  },
  openGraph: {
    title: "Contact Playzor - 24/7 Game Server Hosting Support | India's #1",
    description:
      "Need help with your game server? Contact Playzor's 24/7 support team. Average response time: 1-4 hours. Email: info@playzor.me. Minecraft hosting, billing, technical support & partnerships.",
    url: "https://playzor.me/contact",
    type: "website",
    siteName: "Playzor",
    locale: "en_IN",
    images: [
      {
        url: "https://playzor.me/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Playzor - India's #1 Game Server Hosting Support",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Playzor | 24/7 Game Server Hosting Support India",
    description:
      "Get in touch with Playzor's 24/7 support. 1-4 hour avg response. Minecraft hosting, billing, technical help & more. Email: info@playzor.me",
    images: ["https://playzor.me/logo.png"],
    site: "@playzor",
    creator: "@playzor",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "global",
    "language": "English",
    "author": "Playzor Technologies",
    "copyright": "Playzor Technologies",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
