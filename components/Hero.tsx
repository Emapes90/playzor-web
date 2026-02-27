"use client";

import { motion } from "motion/react";
import { ArrowRight, Server, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-20 pb-8 sm:pb-0 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Now available in Singapore & India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]"
        >
          Forge Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            Minecraft Legacy.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
        >
          Premium high-performance hosting with top-tier hardware.
          Unmatched reliability, DDoS protection, and 24/7 expert support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0"
        >
          <Link
            href="#pricing"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-xl font-bold text-base sm:text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            View Plans
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#features"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Server className="w-5 h-5" />
            Our Hardware
          </Link>
        </motion.div>

        {/* Trust Badges - Mobile Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex sm:hidden items-center justify-center gap-4 mt-6 text-zinc-500 text-[10px] font-medium"
        >
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>DDoS Protected</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-700" />
          <div className="flex items-center gap-1">
            <Server className="w-3.5 h-3.5 text-emerald-500" />
            <span>99.9% Uptime</span>
          </div>
        </motion.div>

        {/* Partners Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 sm:mt-24 border-t border-white/5 pt-8 sm:pt-12 w-full overflow-hidden"
        >
          <p className="text-[10px] sm:text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6 sm:mb-10">
            Trusted Infrastructure Providers
          </p>

          <div className="flex items-center justify-center gap-6 sm:gap-12 md:gap-16 flex-wrap">
            <Image
              src="/companys/aws.svg"
              alt="AWS"
              width={100}
              height={40}
              className="h-5 sm:h-7 md:h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
            />
            <Image
              src="/companys/cloudflare.svg"
              alt="Cloudflare"
              width={100}
              height={40}
              className="h-5 sm:h-7 md:h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
            />
            <Image
              src="/companys/contabo.png"
              alt="Contabo"
              width={100}
              height={40}
              className="h-5 sm:h-7 md:h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
