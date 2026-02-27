"use client";

import { plans } from "@/lib/data";
import { motion } from "motion/react";
import { Check, Cpu, HardDrive, MemoryStick, Database } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Select Your Power
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Transparent pricing. No hidden fees. Instant setup.
          </p>
        </div>

        {/* Mobile: vertical stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative flex flex-col p-5 rounded-2xl border ${
                plan.recommended
                  ? "bg-zinc-900 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.08)] order-first sm:order-none"
                  : "bg-zinc-950 border-white/10"
              } transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Plan header with price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-display font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-500 text-xs">/mo</span>
                  </div>
                </div>
                <a
                  href="https://checkout.playzor.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all text-center block active:scale-[0.97] shrink-0 ${
                    plan.recommended
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  Deploy
                </a>
              </div>

              {/* Specs in compact grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <MemoryStick className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span className="font-mono">{plan.ram} RAM</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Cpu className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span className="font-mono">{plan.cpu}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <HardDrive className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span className="font-mono">{plan.storage}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Database className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span className="font-mono">{plan.backups}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>DDoS Protection</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 text-xs">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Unlimited Slots</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                plan.recommended
                  ? "bg-zinc-900 border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  : "bg-black border-white/10 hover:border-white/30"
              } transition-all duration-300 group`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-500">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center gap-3 text-zinc-300">
                  <MemoryStick className="w-5 h-5 text-zinc-500" />
                  <span className="font-mono">{plan.ram} RAM</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Cpu className="w-5 h-5 text-zinc-500" />
                  <span className="font-mono">{plan.cpu}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <HardDrive className="w-5 h-5 text-zinc-500" />
                  <span className="font-mono">{plan.storage}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Database className="w-5 h-5 text-zinc-500" />
                  <span className="font-mono">{plan.backups}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>DDoS Protection</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Unlimited Slots</span>
                </div>
              </div>

              <a
                href="https://checkout.playzor.me"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all text-center block ${
                  plan.recommended
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-white/10 text-white hover:bg-white hover:text-black"
                }`}
              >
                Deploy Server
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
