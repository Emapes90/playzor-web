import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Locations from "@/components/Locations";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function GameServerHostingIndia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://playzor.me/game-server-hosting-india/#webpage",
        url: "https://playzor.me/game-server-hosting-india",
        name: "Game Server Hosting India | 50+ Games | Low Ping | Playzor",
        description:
          "India's #1 game server hosting. Host 50+ games with Mumbai & Singapore servers. 5-30ms ping. AMD Ryzen 9, NVMe SSD, DDoS protection.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        about: { "@id": "https://playzor.me/#organization" },
        breadcrumb: {
          "@id": "https://playzor.me/game-server-hosting-india/#breadcrumb",
        },
        inLanguage: "en-IN",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/game-server-hosting-india/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://playzor.me",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Game Server Hosting",
            item: "https://playzor.me/game-server-hosting",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Game Hosting India",
            item: "https://playzor.me/game-server-hosting-india",
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Game Server Hosting India",
        name: "Playzor Game Server Hosting India",
        description:
          "Premium game server hosting in India with servers in Mumbai and Singapore. 50+ games supported. AMD Ryzen 9 7950X, NVMe SSD, DDoS protection.",
        provider: { "@id": "https://playzor.me/#organization" },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "Singapore" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "Bangalore" },
          { "@type": "City", name: "Hyderabad" },
          { "@type": "City", name: "Chennai" },
          { "@type": "City", name: "Kolkata" },
          { "@type": "City", name: "Pune" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "199",
          highPrice: "1199",
          offerCount: "4",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the best game server hosting in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor is India's #1 rated game server hosting provider with 4.9/5 from 500+ customers. Mumbai and Singapore servers deliver 5-30ms ping across India. Support for 50+ games including Minecraft, ARK, Rust, Terraria, Palworld, Valheim. Plans from ₹199/month.",
            },
          },
          {
            "@type": "Question",
            name: "How much does game server hosting cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor offers game server hosting from ₹199/month (Iron Plan, 2GB RAM). Gold Plan: ₹399/mo (4GB RAM), Diamond Plan: ₹599/mo (8GB RAM), Netherite Plan: ₹1199/mo (16GB RAM). All plans include DDoS protection, unlimited slots, and 24/7 support.",
            },
          },
          {
            "@type": "Question",
            name: "Which city in India has the best game servers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Playzor hosts in Mumbai — the best location for Indian gaming due to submarine cable connectivity. Players in Mumbai get 5-10ms, Delhi/Bangalore get 15-25ms, and pan-India stays under 30ms. We also have Singapore servers for Southeast Asian players.",
            },
          },
          {
            "@type": "Question",
            name: "Can I pay in INR for game server hosting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Playzor is an Indian company with INR pricing. We accept UPI, Paytm, credit/debit cards, net banking, and more. No USD conversion fees. Plans start at ₹199/month with instant activation.",
            },
          },
        ],
      },
    ],
  };

  const indianCities = [
    { city: "Mumbai", ping: "5-10ms" },
    { city: "Delhi", ping: "15-25ms" },
    { city: "Bangalore", ping: "15-25ms" },
    { city: "Hyderabad", ping: "15-20ms" },
    { city: "Chennai", ping: "15-25ms" },
    { city: "Kolkata", ping: "20-30ms" },
    { city: "Pune", ping: "5-15ms" },
    { city: "Ahmedabad", ping: "10-20ms" },
  ];

  return (
    <main
      role="main"
      aria-label="Game Server Hosting India - Playzor"
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            🇮🇳 Made for Indian Gamers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Game Server Hosting <span className="text-emerald-500">India</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            India&apos;s #1 game server hosting — purpose-built for Indian
            gamers. 50+ games, Mumbai &amp; Singapore servers, 5-30ms ping, AMD
            Ryzen 9 7950X, NVMe SSD, DDoS protection. INR pricing from
            ₹199/month.
          </p>
        </div>
      </section>

      {/* Ping Map Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 text-center">
            Low Ping Across{" "}
            <span className="text-emerald-500">All of India</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {indianCities.map((item) => (
              <div
                key={item.city}
                className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 text-center hover:border-emerald-500/20 transition-colors"
              >
                <h3 className="text-white font-bold text-base mb-1">
                  {item.city}
                </h3>
                <p className="text-emerald-400 text-lg font-bold">
                  {item.ping}
                </p>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm text-center mt-4">
            Ping measured from our Mumbai data center using ICMP. Actual in-game
            latency may vary.
          </p>
        </div>
      </section>

      <Features />
      <Locations />
      <Pricing />
      <Reviews />

      {/* SEO Content */}
      <section className="py-16 px-4 sm:px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
            Why Indian Gamers Choose Playzor
          </h2>
          <div className="text-zinc-400 space-y-4 text-base leading-relaxed">
            <p>
              India is one of the world&apos;s fastest-growing gaming markets
              with over 500 million gamers. Yet most game server hosting
              providers are based in the US or Europe, giving Indian players
              100-200ms ping — making competitive gaming and real-time
              multiplayer nearly impossible.
            </p>
            <p>
              Playzor solves this with enterprise-grade servers in Mumbai and
              Singapore. Our Mumbai data center connects directly to
              India&apos;s major ISPs including Jio, Airtel, BSNL, ACT, and
              Hathway — delivering single-digit ping in Maharashtra and sub-30ms
              across the country.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Indian Pricing, Indian Support
            </h3>
            <p>
              No more converting USD to INR and paying international transaction
              fees. Playzor prices everything in Indian Rupees with support for
              UPI, Paytm, PhonePe, credit cards, debit cards, and net banking.
              Our support team speaks English and Hindi and is available 24/7
              via Discord and email.
            </p>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              Enterprise Hardware, Budget Pricing
            </h3>
            <p>
              From ₹199/month get AMD Ryzen 9 7950X, NVMe SSD storage, DDoS
              protection, unlimited player slots, and the Pterodactyl game
              panel. Playzor brings enterprise-level hosting to Indian gamers at
              prices lower than international competitors — because we operate
              locally and pass the savings to you.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
