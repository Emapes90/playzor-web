import Link from "next/link";
import Image from "next/image";
import { Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black border-t border-white/10 pt-10 sm:pt-16 pb-6 sm:pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <Image
                src="/logo.png"
                alt="Playzor Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Playzor
              </span>
            </Link>
            <p className="text-zinc-500 max-w-sm mb-4 sm:mb-6 text-sm sm:text-base">
              Premium Minecraft hosting solutions designed for performance,
              reliability, and scale. Built for communities that demand the
              best.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/channel/UCL9-fxglFZ8_sG4CO9Vqt3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/WZukZ9VFhX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <a
                  href="https://checkout.playzor.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Minecraft Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-6">Company</h4>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm sm:text-base mb-3 sm:mb-6">Policies</h4>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/aup"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/dmca"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  DMCA Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sla"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  SLA
                </Link>
              </li>
            </ul>
          </div>
        </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[11px] sm:text-sm text-center md:text-left leading-relaxed w-full md:w-auto">
            © {new Date().getFullYear()} Playzor Technologies. All rights
            reserved. Not affiliated with Mojang Studios.
          </p>
          <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <a
              href="https://status.playzor.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 text-xs sm:text-sm hover:text-emerald-400 transition-colors underline underline-offset-2"
            >
              All Systems Operational
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
