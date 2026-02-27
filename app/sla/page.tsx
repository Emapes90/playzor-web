"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SLA() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />

      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Service Level Agreement
          </h1>
          <p className="text-zinc-500 mb-4">
            Service Level Agreement (SLA) — Playzor
          </p>
          <p className="text-zinc-500 mb-8 sm:mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-4">
            This Service Level Agreement (&quot;SLA&quot;) outlines the service
            performance targets Playzor aims to achieve for its hosting
            services. This SLA applies to all services provided under the
            Playzor brand, including Playzor Game Hosting, Playzor Minecraft
            Hosting, and Playzor Technologies.
          </p>
          <p className="mb-6 sm:mb-8">
            This SLA describes operational goals only and{" "}
            <strong className="text-white">
              does not constitute a guarantee of uptime, performance, or
              availability
            </strong>
            .
          </p>

          <div className="space-y-8 sm:space-y-12 prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                1. Uptime Target (Non-Guaranteed)
              </h2>
              <p>
                Playzor historically maintains approximately{" "}
                <strong className="text-white">99.99% uptime</strong> across its
                infrastructure.
              </p>
              <p className="mt-4">This figure represents:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>A performance target</li>
                <li>Historical operational average</li>
                <li>A best-effort service objective</li>
              </ul>
              <p className="mt-4">
                It is{" "}
                <strong className="text-white">
                  not a contractual guarantee
                </strong>{" "}
                and does not create entitlement to compensation, refunds, or
                service credits.
              </p>
              <p className="mt-4">
                Service interruptions may occur due to maintenance, hardware
                faults, network issues, third-party outages, security incidents,
                or unforeseen technical factors.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                2. Planned Maintenance
              </h2>
              <p>To maintain stability and security:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Maintenance is generally announced{" "}
                  <strong className="text-white">
                    2–24 hours in advance
                  </strong>{" "}
                  when possible.
                </li>
                <li>
                  Notifications may appear via email, status pages, or official
                  Playzor platforms.
                </li>
                <li>
                  Maintenance downtime is considered normal operational activity
                  and is not included in uptime calculations.
                </li>
              </ul>
              <p className="mt-4">
                Emergency maintenance may occur without prior notice when
                required for infrastructure safety.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                3. Third-Party Infrastructure Dependency
              </h2>
              <p>
                Playzor may rely on third-party infrastructure providers
                including but not limited to:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Data center partners</li>
                <li>Network transit providers</li>
                <li>Cloud infrastructure providers</li>
                <li>
                  Security and DNS providers such as Cloudflare
                </li>
              </ul>
              <p className="mt-4">
                Downtime caused by third-party infrastructure is outside direct
                Playzor control.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                4. Support Response Objectives
              </h2>
              <p>
                Playzor aims to respond to support inquiries within:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  <strong className="text-white">
                    1–24 hours for general support issues
                  </strong>
                </li>
                <li>Faster response where operationally feasible</li>
              </ul>
              <p className="mt-4">
                Response time is a service objective, not a guaranteed response
                commitment.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                5. Performance Factors
              </h2>
              <p>Server performance may vary due to:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Player load or plugin/mod configuration</li>
                <li>Network conditions</li>
                <li>Infrastructure demand levels</li>
                <li>Software updates or optimization requirements</li>
              </ul>
              <p className="mt-4">
                Playzor strives to maintain stable infrastructure but cannot
                guarantee specific performance levels.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                6. No Service Credits or Penalties
              </h2>
              <p>
                Because this SLA reflects operational targets rather than
                guarantees:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  No automatic compensation, credits, or refunds are provided
                  based solely on uptime variations.
                </li>
                <li>
                  Refund eligibility remains governed exclusively by the official
                  Refund Policy.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                7. Continuous Improvement Commitment
              </h2>
              <p>Playzor continuously works to improve:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Infrastructure reliability</li>
                <li>Hardware quality</li>
                <li>Network performance</li>
                <li>Monitoring and security practices</li>
              </ul>
              <p className="mt-4">
                This SLA reflects those ongoing operational goals.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                8. Policy Updates
              </h2>
              <p>
                Playzor reserves the right to update this SLA at any time.
                Continued use of Playzor services indicates acceptance of
                updated terms.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                9. Contact
              </h2>
              <p>
                Support &amp; Service Inquiries:{" "}
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
              </p>
              <p className="mt-2">
                Official Website:{" "}
                <a
                  href="https://playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://playzor.me
                </a>
              </p>
            </section>

            <div className="border-t border-zinc-800 pt-8 mt-8">
              <p className="text-zinc-500 italic">
                Playzor strives to maintain high reliability, transparent
                communication, and consistent infrastructure performance while
                operating on a best-effort service model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
