"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import {
  Check,
  Mail,
  Percent,
  DollarSign,
  Users,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function Partners() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-medium mb-4 sm:mb-6"
          >
            Join the Playzor Family
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Become a <span className="text-emerald-500">Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0"
          >
            Earn money, get exclusive discounts, and grow your community with
            Playzor. No strict requirements - just passion for Minecraft.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
            <Card
              icon={<Percent className="w-6 h-6 text-emerald-400" />}
              title="30% Discount"
              description="Get up to 30% off on all your personal servers, including renewals."
              delay={0.3}
            />
            <Card
              icon={<DollarSign className="w-6 h-6 text-emerald-400" />}
              title="25% Commission"
              description="Create your own coupon code and earn up to 25% commission on every sale."
              delay={0.4}
            />
            <Card
              icon={<Users className="w-6 h-6 text-emerald-400" />}
              title="Grow Together"
              description="We help promote your community and servers to our customer base."
              delay={0.5}
            />
            <Card
              icon={<Headphones className="w-6 h-6 text-emerald-400" />}
              title="Priority Support"
              description="Skip the queue with direct access to our senior support team."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 sm:mb-8">
            How it Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <Step
              number="01"
              title="Apply"
              description="Send us an email expressing your interest."
            />
            <Step
              number="02"
              title="Promote"
              description="Share your unique coupon code with your audience."
            />
            <Step
              number="03"
              title="Earn"
              description="Get paid for every user who signs up using your code."
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">
            Ready to join?
          </h2>
          <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
            There are no strict requirements. We look for partners who can
            actively promote Playzor and bring value to the community.
          </p>
          <Link
            href="mailto:info@playzor.me"
            className="inline-flex items-center gap-2 bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Apply Now
          </Link>
          <p className="mt-4 text-sm text-zinc-500">
            Email us at <span className="text-zinc-300">info@playzor.me</span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Card({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-zinc-900/50 border border-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-zinc-900 hover:border-emerald-500/30 transition-all group"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">{title}</h3>
      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-display font-bold text-zinc-800 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  );
}
