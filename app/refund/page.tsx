"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Refund() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />

      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Refund Policy
          </h1>
          <p className="text-zinc-500 mb-4">Refund Policy — Playzor</p>
          <p className="text-zinc-500 mb-8 sm:mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6 sm:mb-8">
            This Refund Policy applies to all services provided under the Playzor brand, including Playzor Game Hosting, Playzor Minecraft Hosting, and Playzor Technologies. By purchasing any Playzor service, you acknowledge and agree to this Refund Policy.
          </p>

          <div className="space-y-8 sm:space-y-12 prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                1. 72-Hour Refund Window
              </h2>
              <p>
                Playzor provides a <strong className="text-white">limited 72-hour refund window</strong> from the time of initial service activation.
              </p>
              <p className="mt-4">Refunds may be considered in the following situations:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>First-time customer dissatisfaction with service quality</li>
                <li>Service delivery failure or provisioning issue</li>
                <li>Technical problem confirmed by our support team that cannot be reasonably resolved</li>
              </ul>
              <p className="mt-4">Refund eligibility is determined after review by the Playzor support team.</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                2. How to Request a Refund
              </h2>
              <p>To request a refund:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Contact{" "}
                  <a href="mailto:info@playzor.me" className="text-emerald-400 hover:text-emerald-300">info@playzor.me</a>, or
                </li>
                <li>Create a support ticket through the billing or checkout panel.</li>
              </ul>
              <p className="mt-4">
                Typical response time is <strong className="text-white">1–24 hours</strong>.
              </p>
              <p className="mt-2">Providing clear details about the issue helps faster resolution.</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                3. Refund Processing Time
              </h2>
              <p>If approved:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Refunds are issued through the original payment method whenever possible.</li>
                <li>
                  Processing usually takes <strong className="text-white">2–7 business days</strong>, depending on the payment gateway or banking provider.
                </li>
                <li>This processing timeline is controlled by the payment provider, not Playzor.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                4. Situations Where Refunds May Not Apply
              </h2>
              <p>Refunds may be declined in cases including, but not limited to:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Requests made after the 72-hour window</li>
                <li>Repeated refund requests without valid technical or service reason</li>
                <li>Policy violations, abuse, piracy, or prohibited activities</li>
                <li>Service suspension due to Terms of Service violations</li>
              </ul>
              <p className="mt-4">Each case is reviewed individually.</p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                5. Service Issue Resolution First
              </h2>
              <p>
                Before requesting a refund, customers are encouraged to contact support so we can attempt to resolve the issue.
              </p>
              <p className="mt-4">
                Playzor aims to fix problems whenever possible before processing refunds.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                6. Payment Disputes / Chargebacks
              </h2>
              <p>Before initiating any bank dispute or chargeback:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Please contact{" "}
                  <a href="mailto:info@playzor.me" className="text-emerald-400 hover:text-emerald-300">info@playzor.me</a>{" "}
                  first.
                </li>
                <li>Most billing or service issues can be resolved quickly through support or refund review.</li>
              </ul>
              <p className="mt-4">
                Direct chargebacks without prior communication may delay resolution and service support.
              </p>
              <p className="mt-2">
                Playzor does not charge penalties for chargebacks but strongly prefers direct communication for faster and fair resolution.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                7. No Service Guarantees
              </h2>
              <p>Playzor services are provided on a best-effort basis.</p>
              <p className="mt-4">Refund eligibility does not imply guarantees regarding:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Uptime</li>
                <li>Performance</li>
                <li>Hardware continuity</li>
                <li>Data preservation</li>
              </ul>
              <p className="mt-4">Customers are responsible for backups and proper service usage.</p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                8. Policy Updates
              </h2>
              <p>
                Playzor reserves the right to modify this Refund Policy at any time. Updated versions will be published on official Playzor platforms. Continued use of services indicates acceptance of the updated policy.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                9. Contact Information
              </h2>
              <p>
                Refund Support Contact:{" "}
                <a href="mailto:info@playzor.me" className="text-emerald-400 hover:text-emerald-300">info@playzor.me</a>
              </p>
              <p className="mt-2">
                Official Website:{" "}
                <a href="https://playzor.me" className="text-emerald-400 hover:text-emerald-300" target="_blank" rel="noopener noreferrer">https://playzor.me</a>
              </p>
            </section>

            <div className="border-t border-zinc-800 pt-8 mt-8">
              <p className="text-zinc-500 italic">
                Playzor strives to provide reliable hosting services and fair refund handling while maintaining transparent operational policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
