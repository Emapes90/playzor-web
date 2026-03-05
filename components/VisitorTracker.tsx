"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    // Small delay to not block page load
    const timer = setTimeout(() => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          page: window.location.pathname,
          referrer: document.referrer || null,
        }),
      }).catch(() => {
        // Silently fail - tracking should never break the site
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
