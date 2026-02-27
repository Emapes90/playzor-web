"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DMCA() {
  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <Navbar />

      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Copyright &amp; DMCA Policy
          </h1>
          <p className="text-zinc-500 mb-4">
            Copyright &amp; DMCA Policy — Playzor
          </p>
          <p className="text-zinc-500 mb-8 sm:mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-4">
            This Copyright and DMCA Policy explains how Playzor handles
            copyright infringement claims and intellectual property complaints
            for all services provided under the Playzor brand, including
            Playzor Game Hosting, Playzor Minecraft Hosting, and Playzor
            Technologies.
          </p>
          <p className="mb-6 sm:mb-8">
            Playzor respects intellectual property rights and expects all
            customers to do the same.
          </p>

          <div className="space-y-8 sm:space-y-12 prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                1. Independent Hosting Provider Disclaimer
              </h2>
              <p>
                Playzor provides hosting infrastructure only. We do not own,
                create, distribute, or control customer-uploaded content,
                including game servers, plugins, mods, files, or
                configurations.
              </p>
              <p className="mt-4">
                Customers are solely responsible for ensuring they have proper
                legal rights or licenses for all content hosted on Playzor
                infrastructure.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                2. Reporting Copyright Infringement
              </h2>
              <p>
                If you believe content hosted on Playzor infrastructure
                infringes your copyright, you may submit a written complaint
                including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Your full name and contact information</li>
                <li>
                  Description of copyrighted work claimed to be infringed
                </li>
                <li>
                  Exact server, URL, or location of alleged infringing content
                </li>
                <li>Proof of ownership or authorization</li>
                <li>
                  Statement that the complaint is made in good faith
                </li>
                <li>
                  Statement under penalty of applicable law that information
                  provided is accurate
                </li>
              </ul>
              <p className="mt-4">Submit complaints to:</p>
              <p className="mt-2">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
              </p>
              <p className="mt-2">
                <strong className="text-white">Subject Line Suggested:</strong>{" "}
                Copyright Complaint / DMCA Notice
              </p>
              <p className="mt-4">
                Incomplete reports may delay processing.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                3. Investigation Process
              </h2>
              <p>Upon receiving a valid complaint:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Playzor may review the report and request additional
                  information if needed.
                </li>
                <li>
                  We may contact the server owner for clarification or proof
                  of license.
                </li>
                <li>
                  Temporary suspension of allegedly infringing content or
                  services may occur during investigation.
                </li>
              </ul>
              <p className="mt-4">
                Playzor does not act as a legal authority but cooperates in
                good faith with legitimate claims.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                4. Repeat Infringement Policy
              </h2>
              <p>
                Customers repeatedly involved in copyright violations may
                face:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Content removal</li>
                <li>Account suspension</li>
                <li>Permanent service termination</li>
              </ul>
              <p className="mt-4">
                Refunds generally do not apply if termination occurs due to
                copyright violations.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                5. Counter Notification
              </h2>
              <p>
                If you believe your content was removed incorrectly:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Contact{" "}
                  <a
                    href="mailto:info@playzor.me"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    info@playzor.me
                  </a>{" "}
                  with supporting documentation or licensing proof.
                </li>
                <li>
                  Playzor will review the counter-notice reasonably but cannot
                  guarantee restoration if legal concerns remain.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                6. No Legal Advice Disclaimer
              </h2>
              <p>
                This policy does not constitute legal advice. Copyright owners
                and users should seek professional legal guidance where
                necessary.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                7. Jurisdiction &amp; Legal Compliance
              </h2>
              <p>
                Playzor operates primarily under Indian jurisdiction but
                respects applicable international copyright laws where
                reasonably enforceable.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                8. Policy Updates
              </h2>
              <p>
                Playzor reserves the right to update this policy at any time.
                Continued use of services indicates acceptance of updated
                terms.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                9. Contact
              </h2>
              <p>
                Copyright, Legal &amp; Abuse Contact:{" "}
                <strong className="text-white">
                  <a
                    href="mailto:info@playzor.me"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    info@playzor.me
                  </a>
                </strong>
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
                Playzor aims to maintain a fair hosting environment while
                respecting intellectual property rights and applicable legal
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
