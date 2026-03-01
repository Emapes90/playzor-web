"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const copyCode = () => {
    navigator.clipboard.writeText("SAVE10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: -140 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-4 pointer-events-none"
      >
        {/* Main Navbar */}
        <div className="relative z-20 pointer-events-auto w-full max-w-5xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-black/50 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Playzor - India's #1 Minecraft and Game Server Hosting"
              width={36}
              height={36}
              className="rounded-full group-hover:scale-110 transition-transform duration-300 w-7 h-7 sm:w-9 sm:h-9"
            />
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white hidden sm:block">
              Playzor
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Locations", "Pricing", "Reviews"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/partners"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              Partners
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#footer"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://checkout.playzor.me/"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Login
            </a>
            <Link
              href="#pricing"
              className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Promo Banner - Only on landing page, hidden when mobile menu open */}
        {isHome && !isOpen && (
          <div className="relative z-10 -mt-4 sm:-mt-5 pt-5 sm:pt-6 pb-1.5 sm:pb-2 px-3 sm:px-6 pointer-events-auto bg-gradient-to-r from-emerald-950/90 to-teal-950/90 backdrop-blur-md border-x border-b border-emerald-500/20 rounded-b-xl sm:rounded-b-2xl shadow-lg flex items-center gap-2 sm:gap-3 transition-transform hover:translate-y-1">
            <span className="text-[10px] sm:text-[11px] font-medium text-emerald-100/90">
              <span className="hidden sm:inline">Launch Offer: </span>
              Get <span className="font-bold text-white">10% OFF</span> your
              first month
            </span>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-md transition-all active:scale-95"
            >
              <span className="tracking-wider">SAVE10</span>
              {copied ? <Check size={10} /> : <Copy size={10} />}
            </button>
          </div>
        )}
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            {/* Close button area */}
            <div className="flex justify-end p-5 pt-7">
              <button
                className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu content */}
            <div className="flex flex-col flex-1 px-8 pb-10">
              <nav className="flex flex-col gap-1 mb-auto">
                {["Features", "Locations", "Pricing", "Reviews"].map(
                  (item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={`/#${item.toLowerCase()}`}
                        className="block py-3 text-2xl font-display font-bold text-white hover:text-zinc-300 active:text-zinc-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ),
                )}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/partners"
                    className="block py-3 text-2xl font-display font-bold text-white hover:text-zinc-300 active:text-zinc-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Partners
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="#footer"
                    className="block py-3 text-2xl font-display font-bold text-zinc-400 hover:text-white active:text-zinc-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    More
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 pt-6 border-t border-white/10"
              >
                <Link
                  href="#pricing"
                  className="bg-white text-black py-4 rounded-2xl font-bold text-base w-full text-center block active:scale-[0.98] transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
                <a
                  href="https://checkout.playzor.me/"
                  className="block py-4 rounded-2xl font-bold text-base w-full text-center bg-white/5 text-white border border-white/10 active:scale-[0.98] transition-transform"
                >
                  Login
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
