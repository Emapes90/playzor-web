"use client";

import { reviews } from "@/lib/data";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useCallback } from "react";

/* Trustpilot green star SVG icon */
function TrustpilotStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect width="24" height="24" rx="2" fill="#00B67A" />
      <path
        d="M12 4L14.09 9.26L20 9.27L15.45 13.14L17.18 18.77L12 15.27L6.82 18.77L8.55 13.14L4 9.27L9.91 9.26L12 4Z"
        fill="white"
      />
    </svg>
  );
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextReview = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextReview();
      else prevReview();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="reviews"
      aria-label="Playzor Customer Reviews and Testimonials"
      className="py-16 sm:py-24 md:py-32 bg-[#050505] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-3 sm:mb-6">
            Trusted by 500+ Gamers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            See what our community has to say about their Playzor hosting experience.
          </p>

          {/* Trustpilot Professional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <a
              href="https://www.trustpilot.com/review/playzor.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Mobile: compact stacked, Desktop: horizontal */}
              <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm hover:border-[#00B67A]/40 hover:bg-zinc-900 transition-all duration-300">
                {/* Trustpilot Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <TrustpilotStar key={i} className="w-5 h-5 sm:w-6 sm:h-6" />
                  ))}
                </div>

                {/* Divider - desktop only */}
                <div className="hidden sm:block w-px h-8 bg-white/10" />

                {/* CTA Text */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-center sm:text-left">
                    <p className="text-white font-semibold text-xs sm:text-sm leading-tight">
                      Review us on{" "}
                      <span className="text-[#00B67A]">Trustpilot</span>
                    </p>
                    <p className="text-zinc-500 text-[10px] sm:text-xs mt-0.5 hidden sm:block">
                      Share your experience with Playzor
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00B67A]/10 group-hover:bg-[#00B67A]/20 transition-colors duration-300">
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00B67A] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#00B67A]/0 group-hover:bg-[#00B67A]/[0.03] transition-colors duration-300 pointer-events-none" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* ===== MOBILE: Premium card swipeable view ===== */}
        <div
          className="md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/[0.08] rounded-2xl p-6 shadow-2xl shadow-black/40 backdrop-blur-sm overflow-hidden"
            >
              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.03] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              {/* Stars + Counter row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-600 font-mono tabular-nums">
                  {activeIndex + 1} / {reviews.length}
                </span>
              </div>

              {/* Review content */}
              <p className="text-zinc-200 text-[15px] leading-[1.7] mb-6 font-medium">
                &ldquo;{reviews[activeIndex].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-gradient-to-br from-white/10 to-white/5 text-white ring-1 ring-white/10">
                  {reviews[activeIndex].name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm text-white tracking-tight">
                    {reviews[activeIndex].name}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">
                    {reviews[activeIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Swipe hint */}
          <p className="text-center text-[10px] text-zinc-600 mt-4 font-medium tracking-wide">
            Swipe to read more
          </p>
        </div>

        {/* ===== DESKTOP: 3D Carousel ===== */}
        <div className="hidden md:block">
          <div className="relative h-[400px] flex items-center justify-center perspective-1000">
            <AnimatePresence mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const index =
                  (activeIndex + offset + reviews.length) % reviews.length;
                const review = reviews[index];
                const isCenter = offset === 0;

                return (
                  <motion.div
                    key={`${index}-${offset}`}
                    layout
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                      x: offset * 100,
                      rotateY: offset * -15,
                      z: -100,
                    }}
                    animate={{
                      scale: isCenter ? 1.1 : 0.9,
                      opacity: isCenter ? 1 : 0.4,
                      x: offset * (isCenter ? 0 : 350),
                      rotateY: offset * -15,
                      z: isCenter ? 0 : -100,
                      zIndex: isCenter ? 10 : 0,
                    }}
                    exit={{
                      scale: 0.8,
                      opacity: 0,
                      z: -100,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    onClick={() => {
                      if (offset === -1) prevReview();
                      if (offset === 1) nextReview();
                    }}
                    className={`absolute w-full max-w-md p-8 rounded-3xl border backdrop-blur-sm cursor-pointer transition-colors duration-300 ${
                      isCenter
                        ? "bg-zinc-900 border-white/10 shadow-2xl shadow-black/50"
                        : "bg-zinc-900/50 border-white/5 hover:bg-zinc-900/80"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${isCenter ? "fill-white text-white" : "fill-zinc-600 text-zinc-600"}`}
                        />
                      ))}
                    </div>
                    <p
                      className={`mb-8 leading-relaxed text-base line-clamp-4 ${isCenter ? "text-zinc-200" : "text-zinc-500"}`}
                    >
                      &quot;{review.content}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${isCenter ? "bg-zinc-800 text-white" : "bg-zinc-800/50 text-zinc-600"}`}
                      >
                        {review.name[0]}
                      </div>
                      <div>
                        <div
                          className={`font-bold text-sm ${isCenter ? "text-white" : "text-zinc-400"}`}
                        >
                          {review.name}
                        </div>
                        <div
                          className={`text-xs uppercase tracking-wider ${isCenter ? "text-zinc-500" : "text-zinc-700"}`}
                        >
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 lg:left-20 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 lg:right-20 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
