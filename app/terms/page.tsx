"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />

      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-zinc-500 mb-4">Terms of Service — Playzor</p>
          <p className="text-zinc-500 mb-8 sm:mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6 sm:mb-8">
            These Terms of Service (&quot;Terms&quot;) govern all services
            provided under the Playzor brand. &quot;Playzor&quot; refers
            collectively to Playzor, Playzor Game Hosting, Playzor Minecraft
            Hosting, and Playzor Technologies operating as one unified hosting
            service brand. By registering, purchasing, or using any Playzor
            service, you acknowledge that you have read, understood, and agreed
            to these Terms and all related policies.
          </p>

          <div className="space-y-8 sm:space-y-12 prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                1. Independent Service Disclaimer (Minecraft / Mojang)
              </h2>
              <p>Playzor is an independent game hosting provider.</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Playzor is{" "}
                  <strong className="text-white">
                    not affiliated with, endorsed by, sponsored by, or partnered
                    with Mojang Studios, Microsoft, or the official Minecraft
                    company
                  </strong>
                  .
                </li>
                <li>
                  We provide hosting infrastructure only; we do not sell
                  Minecraft itself.
                </li>
                <li>
                  Customers remain responsible for complying with
                  Mojang/Minecraft licensing and EULA requirements.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                2. Service Nature &amp; No-Guarantee Policy
              </h2>
              <p>Playzor provides hosting services on a best-effort basis.</p>
              <p className="mt-4">
                Playzor{" "}
                <strong className="text-white">does not guarantee</strong>:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Uptime or uninterrupted service</li>
                <li>Performance stability or latency consistency</li>
                <li>Specific hardware availability</li>
                <li>Continuous infrastructure availability</li>
                <li>Data preservation or recovery</li>
              </ul>
              <p className="mt-4">
                Downtime, lag, or interruptions may occur due to maintenance,
                network issues, hardware failures, cybersecurity incidents,
                demand spikes, or third-party dependencies. Historical uptime
                statistics are informational only and not contractual
                guarantees.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                3. Paid Services
              </h2>
              <p>
                All Playzor services are paid unless explicitly stated
                otherwise.
              </p>
              <p className="mt-4">
                Pricing, infrastructure, hardware allocation, features, or plans
                may change without obligation to maintain previous offers.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                4. Hardware &amp; Infrastructure Flexibility
              </h2>
              <p>Playzor uses performance-grade infrastructure; however:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Exact CPU model, node, or physical hardware cannot be
                  guaranteed.
                </li>
                <li>
                  Infrastructure may be upgraded, migrated, replaced, or
                  reallocated without prior notice.
                </li>
                <li>
                  Temporary hardware adjustments may occur during high-demand
                  periods.
                </li>
                <li>
                  Servers may be migrated automatically for stability or
                  maintenance reasons.
                </li>
              </ul>
              <p className="mt-4">
                These operational adjustments do not qualify for refunds or
                compensation.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                5. Third-Party Infrastructure &amp; Technology Providers
              </h2>
              <p>
                To deliver services, Playzor may rely on third-party
                infrastructure and technologies, including but not limited to:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Cloudflare (network, DNS, and security services)</li>
                <li>Contabo and other data center providers</li>
                <li>
                  Additional third-party cloud, network, or infrastructure
                  partners
                </li>
              </ul>
              <p className="mt-4">
                Service availability may be affected by these providers. Playzor
                is not responsible for outages, disruptions, or performance
                issues caused by third-party infrastructure beyond reasonable
                control.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                6. Maintenance &amp; Downtime
              </h2>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Planned maintenance is generally announced 2–24 hours in
                  advance when feasible.
                </li>
                <li>Emergency maintenance may occur without prior notice.</li>
                <li>
                  Maintenance downtime does not qualify for compensation, SLA
                  credits, or refunds.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                7. Refund Policy (72-Hour Window)
              </h2>
              <p>
                A limited 72-hour refund window is available under reasonable
                conditions:
              </p>
              <p className="mt-4">Eligible cases:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>First-time customer dissatisfaction</li>
                <li>Service delivery failure</li>
                <li>Technical issue confirmed and unresolved</li>
              </ul>
              <p className="mt-4">
                Requests must be submitted via billing ticket or{" "}
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
                .
              </p>
              <p className="mt-2">
                Processing time typically ranges from 2–7 business days
                depending on payment gateway/bank.
              </p>
              <p className="mt-2">
                Repeated or abusive refund behavior may result in denial.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                8. Payment Disputes / Chargeback Communication Policy
              </h2>
              <p>Playzor does not impose chargeback penalties. However:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Customers are strongly encouraged to contact{" "}
                  <a
                    href="mailto:info@playzor.me"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    info@playzor.me
                  </a>{" "}
                  before initiating any payment dispute or chargeback.
                </li>
                <li>
                  Most issues can be resolved quickly through support or refund
                  review.
                </li>
                <li>
                  Direct disputes through banks or gateways without prior
                  communication may delay resolution.
                </li>
              </ul>
              <p className="mt-4">
                This policy exists to ensure fair and efficient problem
                resolution.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                9. Suspension, Termination &amp; Refund Impact
              </h2>
              <p>
                Playzor reserves the right to suspend or terminate services
                immediately if:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Terms are violated</li>
                <li>Illegal or prohibited activity is detected</li>
                <li>Infrastructure security is threatened</li>
                <li>Payment abuse or fraud occurs</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">
                  Services terminated for policy violations may not be eligible
                  for refunds.
                </strong>
              </p>
              <p className="mt-2">Advance notice may not always be possible.</p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                10. Eligibility (18+ Requirement)
              </h2>
              <p>
                Services are intended for individuals 18 years or older capable
                of independent payment.
              </p>
              <p className="mt-4">
                Minors may only purchase with parental consent. Unauthorized
                purchases should be reported to{" "}
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
                .
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                11. Acceptable Use Policy
              </h2>
              <p>Strictly prohibited:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Pirated, cracked, nulled, or unlicensed plugins/mods/software
                </li>
                <li>Illegal or restricted content</li>
                <li>Network abuse, DDoS attacks, hacking, or exploitation</li>
                <li>Activities harming infrastructure stability</li>
                <li>Any unlawful use of services</li>
              </ul>
              <p className="mt-4">
                Violations may result in suspension or termination without prior
                notice.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                12. Monitoring &amp; Security
              </h2>
              <p>Operational monitoring may include:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Server health monitoring</li>
                <li>Security threat detection</li>
                <li>Usage pattern analysis</li>
              </ul>
              <p className="mt-4">
                Monitoring is limited to infrastructure protection. Playzor does
                not intentionally misuse customer data.
              </p>
              <p className="mt-2">
                License proof may be requested if pirated software is suspected.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                13. Data Responsibility &amp; Backup Disclaimer
              </h2>
              <p>Customers are solely responsible for maintaining backups.</p>
              <p className="mt-4">Playzor does not guarantee:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Data safety</li>
                <li>Backup availability</li>
                <li>Backup recovery</li>
                <li>Disaster recovery capability</li>
              </ul>
              <p className="mt-4">
                Loss of server data remains the customer&apos;s responsibility.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                14. Privacy Overview
              </h2>
              <p>Playzor may collect:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Name, email address, phone number</li>
                <li>Securely encrypted account credentials</li>
                <li>IP address for security purposes</li>
              </ul>
              <p className="mt-4">
                Data may be used for service delivery, support communication,
                operational updates, and relevant promotional communication.
              </p>
              <p className="mt-2">
                Data may be stored on secure third-party infrastructure.
                Absolute security cannot be guaranteed.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                15. Limitation of Liability
              </h2>
              <p>To the maximum extent permitted by Indian law:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Playzor shall not be liable for indirect or consequential
                  losses.
                </li>
                <li>
                  Maximum liability shall not exceed the amount paid for
                  services in the previous 30 days.
                </li>
              </ul>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                16. Indemnification
              </h2>
              <p>
                Users agree to indemnify and hold Playzor harmless from claims,
                damages, or liabilities arising from:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Server activity or hosted content</li>
                <li>Policy violations</li>
                <li>Illegal usage</li>
                <li>Third-party disputes caused by user actions</li>
              </ul>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                17. Force Majeure
              </h2>
              <p>
                Playzor shall not be liable for service disruption caused by
                events beyond reasonable control, including natural disasters,
                cyberattacks, power failures, government restrictions, or
                data-center outages.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                18. Governing Law (India)
              </h2>
              <p>These Terms are governed by the laws of India.</p>
              <p className="mt-2">
                Disputes shall fall under Indian jurisdiction unless applicable
                law requires otherwise.
              </p>
              <p className="mt-2">
                Nothing in these Terms overrides applicable Indian consumer
                protection laws.
              </p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                19. Brand Identity &amp; Trademark Status
              </h2>
              <p>
                &quot;Playzor&quot; represents the unified service identity
                including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Playzor Technologies</li>
                <li>Playzor Game Hosting</li>
                <li>Playzor Minecraft Hosting</li>
              </ul>
              <p className="mt-4">
                Trademark registration may currently be pending or in process.
                Use of the Playzor name, branding, or identity without
                authorization is not permitted.
              </p>
              <p className="mt-4">
                For legal, trademark, or policy matters, contact:{" "}
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
              </p>
              <p className="mt-4">Official domains include:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>playzor.me</li>
                <li>playzor.cloud</li>
                <li>playzor.tech</li>
                <li>Associated subdomains and billing portals</li>
              </ul>
              <p className="mt-4">
                Account registration indicates acceptance of all Playzor
                policies.
              </p>
            </section>

            {/* Section 20 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                20. Abuse Reporting
              </h2>
              <p>
                Abuse, security concerns, or policy violations can be reported
                at:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
              </p>
              <p className="mt-2">
                Reports will be reviewed and addressed appropriately.
              </p>
            </section>

            {/* Section 21 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                21. Policy Updates
              </h2>
              <p>
                Playzor may update these Terms at any time. Continued use of
                services indicates acceptance of revised Terms.
              </p>
            </section>

            {/* Section 22 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                22. Contact
              </h2>
              <p>
                Support, Billing, Legal &amp; Abuse Contact:{" "}
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
                Playzor aims to provide reliable, transparent, and
                professionally managed game hosting infrastructure while
                maintaining fair operational policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
