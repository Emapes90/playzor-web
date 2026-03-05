"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import {
  Shield,
  Zap,
  Users,
  Globe,
  Heart,
  Target,
  Award,
  Headphones,
} from "lucide-react";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://playzor.me/about/#webpage",
        url: "https://playzor.me/about",
        name: "About Playzor - India's Leading Game Server Hosting Company",
        description: "Learn about Playzor, India's leading premium game server hosting provider.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        publisher: { "@id": "https://playzor.me/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/about/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://playzor.me" },
          { "@type": "ListItem", position: 2, name: "About Us" },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://playzor.me/#organization",
        name: "Playzor",
        url: "https://playzor.me",
        logo: "https://playzor.me/logo.png",
        description: "India's #1 Premium Minecraft and Game Server Hosting Provider",
        foundingDate: "2024",
        areaServed: "Worldwide",
        sameAs: [
          "https://discord.gg/WZukZ9VFhX",
          "https://www.youtube.com/channel/UCL9-fxglFZ8_sG4CO9Vqt3Q",
        ],
      },
    ],
  };

  return (
    <main role="main" aria-label="About Playzor - India's Leading Game Server Hosting Company" className="bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-medium mb-4 sm:mb-6"
          >
            About Playzor
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Built for <span className="text-emerald-500">Gamers</span>,
            <br />
            by Gamers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0"
          >
            Playzor is India&#39;s leading game server hosting provider,
            dedicated to delivering premium Minecraft hosting infrastructure
            with unmatched performance, reliability, and support.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-5 sm:mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-zinc-400 text-sm sm:text-lg leading-relaxed">
              <p>
                Playzor was born out of frustration. As passionate Minecraft
                players ourselves, we experienced firsthand the challenges of
                finding reliable, affordable, and high-performance game server
                hosting in India. Lag, downtime, poor support — we dealt with it
                all.
              </p>
              <p>
                So we decided to build something better. Playzor Technologies
                was founded with a single mission: to provide the best game
                server hosting experience possible, starting with Minecraft and
                expanding to serve all gaming communities.
              </p>
              <p>
                Today, Playzor powers servers for communities of all sizes —
                from small friend groups to large public networks. Our
                infrastructure is built on enterprise-grade hardware, optimized
                specifically for gaming workloads, and backed by a team that
                truly understands what gamers need.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-5 sm:p-8"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                To empower gaming communities worldwide with affordable,
                reliable, and high-performance server hosting infrastructure. We
                believe every community — big or small — deserves
                enterprise-grade hosting without the enterprise price tag.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-5 sm:p-8"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
                Our Vision
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                To become the most trusted game hosting brand in India and
                beyond. We envision a future where server hosting is seamless,
                instant, and accessible to every gamer — no matter their
                technical expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 sm:mb-4"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base"
          >
            We don&#39;t just host servers — we build experiences.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                icon: Zap,
                title: "Blazing Fast",
                description:
                  "NVMe SSDs and latest-gen processors ensure zero lag gameplay.",
              },
              {
                icon: Shield,
                title: "DDoS Protected",
                description:
                  "Enterprise-grade protection keeps your server safe 24/7.",
              },
              {
                icon: Globe,
                title: "Indian Infrastructure",
                description:
                  "Data centers optimized for low-latency connections across India.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description:
                  "Real humans, real help — available around the clock.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left hover:border-emerald-500/20 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-zinc-500 text-xs sm:text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-8 sm:mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description:
                  "We never compromise on hardware quality or service standards. Every server runs on premium infrastructure.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description:
                  "Our customers shape our roadmap. We listen, adapt, and build features that communities actually need.",
              },
              {
                icon: Shield,
                title: "Trust & Transparency",
                description:
                  "No hidden fees, no overselling, no false promises. What we say is what you get — always.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mb-8 max-w-xl mx-auto"
          >
            Join thousands of gamers who trust Playzor for their server hosting
            needs. Start your server in seconds.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-3 rounded-full transition-colors"
          >
            Get Started Now
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
