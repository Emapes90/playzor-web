"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, Shield, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("playzor_cookie_consent");
    if (!consent) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      enableTracking();
    }
  }, []);

  function enableTracking() {
    // Set SEO & analytics cookies
    const now = new Date();
    const expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year

    // First visit tracking
    if (!getCookie("playzor_first_visit")) {
      document.cookie = `playzor_first_visit=${now.toISOString()};expires=${expiry.toUTCString()};path=/;SameSite=Lax`;
    }

    // Session tracking for SEO bounce rate improvement
    const sessionId =
      getCookie("playzor_session") ||
      `s_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    document.cookie = `playzor_session=${sessionId};path=/;SameSite=Lax`;

    // Visit count for returning visitor signals
    const visits = parseInt(getCookie("playzor_visits") || "0") + 1;
    document.cookie = `playzor_visits=${visits};expires=${expiry.toUTCString()};path=/;SameSite=Lax`;

    // Referrer tracking for SEO attribution
    if (document.referrer && !getCookie("playzor_referrer")) {
      document.cookie = `playzor_referrer=${encodeURIComponent(document.referrer)};expires=${expiry.toUTCString()};path=/;SameSite=Lax`;
    }

    // UTM parameter tracking
    const params = new URLSearchParams(window.location.search);
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    utmKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        document.cookie = `playzor_${key}=${encodeURIComponent(val)};expires=${expiry.toUTCString()};path=/;SameSite=Lax`;
      }
    });

    // Landing page tracking
    if (!getCookie("playzor_landing_page")) {
      document.cookie = `playzor_landing_page=${encodeURIComponent(window.location.pathname)};expires=${expiry.toUTCString()};path=/;SameSite=Lax`;
    }

    // Page view tracking (current session)
    const pageViews = parseInt(getCookie("playzor_page_views") || "0") + 1;
    document.cookie = `playzor_page_views=${pageViews};path=/;SameSite=Lax`;
  }

  function getCookie(name: string): string | null {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)"),
    );
    return match ? decodeURIComponent(match[2]) : null;
  }

  function handleAccept() {
    localStorage.setItem("playzor_cookie_consent", "accepted");
    localStorage.setItem("playzor_consent_date", new Date().toISOString());
    enableTracking();
    setIsClosing(true);
    setTimeout(() => setVisible(false), 300);
  }

  function handleDecline() {
    localStorage.setItem("playzor_cookie_consent", "declined");
    localStorage.setItem("playzor_consent_date", new Date().toISOString());
    setIsClosing(true);
    setTimeout(() => setVisible(false), 300);
  }

  return (
    <AnimatePresence>
      {visible && !isClosing && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-[9999] w-full sm:max-w-sm"
        >
          <div className="relative bg-zinc-950 border-t sm:border border-white/10 rounded-t-2xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
            {/* Glow effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10 rounded-2xl -z-10 blur-sm" />

            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-400 transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Cookie Notice</h4>
                <div className="flex items-center gap-1 text-[10px] text-zinc-600">
                  <Shield className="w-3 h-3" />
                  <span>Your privacy matters</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              We use cookies to enhance your browsing experience, analyze site
              traffic, and improve our services. By clicking &quot;Accept&quot;,
              you consent to our use of cookies.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs py-2.5 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs py-2.5 px-4 rounded-xl border border-white/5 transition-all duration-200 active:scale-[0.98]"
              >
                Decline
              </button>
            </div>

            {/* Privacy link */}
            <div className="mt-3 text-center">
              <Link
                href="/privacy"
                className="text-[10px] text-zinc-600 hover:text-emerald-400 transition-colors underline underline-offset-2"
              >
                Read our Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
