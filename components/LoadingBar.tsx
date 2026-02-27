"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startLoading = useCallback(() => {
    setLoading(true);
    setVisible(true);
    setProgress(0);

    // Simulate progress
    let current = 0;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 90) {
        current = 90;
        if (timerRef.current) clearInterval(timerRef.current);
      }
      setProgress(current);
    }, 200);
  }, []);

  const stopLoading = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(100);
    setTimeout(() => {
      setLoading(false);
      // Fade out
      fadeTimerRef.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }, 200);
  }, []);

  useEffect(() => {
    // Intercept all link clicks for navigation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Skip hash links, external links, and same-page anchors
      if (
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.target === "_blank"
      ) {
        return;
      }

      // Skip if current path is same as link
      if (href === window.location.pathname) return;

      startLoading();
    };

    // Listen for route change completion via popstate
    const handlePopState = () => {
      startLoading();
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
      if (timerRef.current) clearInterval(timerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, [startLoading]);

  // Stop loading when the page finishes loading (DOM changes)
  useEffect(() => {
    if (!loading) return;

    const observer = new MutationObserver(() => {
      // Small delay to let the page render
      setTimeout(() => {
        stopLoading();
      }, 100);
    });

    // Observe the main content area for changes
    const target = document.querySelector("body");
    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }

    // Fallback: stop after 5 seconds
    const fallback = setTimeout(() => {
      stopLoading();
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [loading, stopLoading]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div
        className="h-[3px] bg-gradient-to-r from-emerald-400 via-emerald-300 to-white shadow-[0_0_10px_rgba(52,211,153,0.7)] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition:
            progress === 100
              ? "width 200ms ease-out, opacity 300ms ease-out 200ms"
              : "width 300ms ease-out",
        }}
      />
    </div>
  );
}
