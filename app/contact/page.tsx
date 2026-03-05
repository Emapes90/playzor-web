"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import {
  Mail,
  Clock,
  Headphones,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Phone,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you within 1-4 hours.",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://playzor.me/contact/#webpage",
        url: "https://playzor.me/contact",
        name: "Contact Playzor - Get in Touch with India's #1 Game Server Hosting",
        description:
          "Contact Playzor for Minecraft server hosting support, billing inquiries, partnerships, and more. 24/7 support with 1-4 hour average response time.",
        isPartOf: { "@id": "https://playzor.me/#website" },
        publisher: { "@id": "https://playzor.me/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://playzor.me/#organization",
        name: "Playzor",
        url: "https://playzor.me",
        email: "info@playzor.me",
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@playzor.me",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
      },
    ],
  };

  const faqs = [
    {
      q: "How fast will I get a response?",
      a: "Our average email response time is 1-4 hours. For urgent issues, our 24/7 support team typically replies within 20 minutes to 5 hours depending on the complexity of your query.",
    },
    {
      q: "What's the best way to reach you?",
      a: "For general inquiries, use the contact form above or email us at info@playzor.me. For real-time support, join our Discord server where our team and community are always active.",
    },
    {
      q: "Do you offer 24/7 support?",
      a: "Yes! We provide round-the-clock 24/7 support. Our team is always available to help you with any issues related to your game server, billing, or technical queries.",
    },
    {
      q: "Can I get help with server setup?",
      a: "Absolutely! Our support team can help you with server setup, configuration, plugin installation, modpack setup, and any other technical assistance you need.",
    },
  ];

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black text-white">
        {/* ========== HERO ========== */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px]" />
            <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[100px]" />
            <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-emerald-500/[0.02] rounded-full blur-[100px]" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                24/7 Support Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                Touch
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Have a question, need help, or want to partner with us? Our team is
              here for you and will get back to you as fast as possible.
            </motion.p>

            {/* Quick stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-10"
            >
              {[
                { icon: Zap, label: "1-4 Hr Avg Response", color: "emerald" },
                { icon: Headphones, label: "24/7 Support", color: "white" },
                { icon: Shield, label: "Data Protected", color: "emerald" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]"
                >
                  <item.icon className={`w-3.5 h-3.5 ${item.color === "emerald" ? "text-emerald-400" : "text-white"}`} />
                  <span className="text-zinc-400 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CONTACT INFO CARDS ========== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Mail,
                title: "Email Us",
                desc: "For all related queries",
                value: "info@playzor.me",
                href: "mailto:info@playzor.me",
                accent: "emerald",
              },
              {
                icon: Zap,
                title: "Avg Response",
                desc: "Fast & reliable replies",
                value: "1 – 4 Hours",
                accent: "emerald",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Always here to help",
                value: "20 min – 5 hr reply",
                accent: "white",
              },
              {
                icon: MessageSquare,
                title: "Discord",
                desc: "Join the community",
                value: "Join Server",
                href: "https://discord.gg/WZukZ9VFhX",
                external: true,
                accent: "white",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-zinc-950/80 border border-white/[0.06] rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-500"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    card.accent === "emerald"
                      ? "bg-emerald-500/10 border border-emerald-500/20"
                      : "bg-white/5 border border-white/10"
                  }`}>
                    <card.icon className={`w-5 h-5 ${card.accent === "emerald" ? "text-emerald-400" : "text-white"}`} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                  <p className="text-zinc-600 text-sm mb-3">{card.desc}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-semibold inline-flex items-center gap-1.5 group/link"
                    >
                      {card.value}
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-emerald-400 text-sm font-semibold">{card.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== FORM + SIDEBAR ========== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* ---- LEFT: Form ---- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="relative bg-zinc-950/80 border border-white/[0.06] rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-zinc-500 text-sm mb-8">
                    Fill out the form and we&apos;ll respond within 1-4 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2 font-semibold">
                          Full Name <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-700"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2 font-semibold">
                          Email Address <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-700"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2 font-semibold">
                        Phone Number <span className="text-zinc-700">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700" />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-700"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2 font-semibold">
                        Message <span className="text-emerald-400">*</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        rows={6}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none placeholder:text-zinc-700"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>

                    {/* Status */}
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium ${
                          status.type === "success"
                            ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                        }`}
                      >
                        {status.type === "success" ? (
                          <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        )}
                        {status.message}
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-white text-black font-bold rounded-xl py-4 text-sm hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 group active:scale-[0.98]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-zinc-600 text-xs text-center">
                      By submitting, you agree to our{" "}
                      <Link
                        href="/privacy"
                        className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* ---- RIGHT: Sidebar ---- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-5"
            >
              {/* Quick info card */}
              <div className="bg-zinc-950/80 border border-white/[0.06] rounded-3xl p-6 sm:p-8">
                <h3 className="text-white font-display font-bold text-lg mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@playzor.me",
                      href: "mailto:info@playzor.me",
                      sub: "For all related enquiries",
                    },
                    {
                      icon: Clock,
                      label: "Avg Response Time",
                      value: "1 – 4 Hours",
                      sub: "Fast & reliable",
                    },
                    {
                      icon: Headphones,
                      label: "Support Hours",
                      value: "24/7 Available",
                      sub: "Reply within 20 min – 5 hours",
                    },
                    {
                      icon: MapPin,
                      label: "Server Locations",
                      value: "India & Singapore",
                      sub: "Ultra-low latency",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/20 transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5 font-medium">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white font-semibold text-sm hover:text-emerald-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold text-sm">{item.value}</p>
                        )}
                        <p className="text-zinc-600 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discord CTA */}
              <div className="relative bg-zinc-950/80 border border-white/[0.06] rounded-3xl p-6 sm:p-8 overflow-hidden group hover:border-emerald-500/20 transition-all duration-500">
                <div className="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Need Instant Help?</h3>
                  <p className="text-zinc-500 text-sm mb-5 leading-relaxed">
                    Join our Discord community for real-time support from our team and community members.
                  </p>
                  <a
                    href="https://discord.gg/WZukZ9VFhX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-white text-black font-bold rounded-xl px-6 py-3 text-sm hover:bg-zinc-200 transition-all group/btn active:scale-[0.98]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Join Discord
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Data safety card */}
              <div className="bg-zinc-950/80 border border-white/[0.06] rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4.5 h-4.5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Your Data is Safe</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      All messages are encrypted and we never share your personal information with any third party.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-3">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                Questions
              </span>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`bg-zinc-950/80 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "border-emerald-500/20" : "border-white/[0.06] hover:border-white/[0.1]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <h3 className="text-white font-semibold text-sm sm:text-base pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-48 pb-5 sm:pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-zinc-400 text-sm leading-relaxed px-5 sm:px-6">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== BOTTOM CTA ========== */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-zinc-950/80 border border-white/[0.06] rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/[0.02] rounded-3xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/[0.04] rounded-full blur-[100px]" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you need game hosting support or want to explore our premium services, we&apos;re just a message away.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="mailto:info@playzor.me"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-xl text-sm hover:bg-zinc-200 transition-all inline-flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://discord.gg/WZukZ9VFhX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 font-bold rounded-xl text-sm hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Join Discord
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
