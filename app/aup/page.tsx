"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AUP() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://playzor.me/aup/#webpage",
        url: "https://playzor.me/aup",
        name: "Acceptable Use Policy | Playzor",
        description:
          "Playzor AUP — permitted and prohibited use of hosting services.",
        isPartOf: { "@id": "https://playzor.me/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/aup/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://playzor.me",
          },
          { "@type": "ListItem", position: 2, name: "Acceptable Use Policy" },
        ],
      },
    ],
  };

  return (
    <main className="bg-black min-h-screen text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="pt-28 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Acceptable Use Policy
          </h1>
          <p className="text-zinc-500 mb-4">
            Acceptable Use Policy (AUP) — Playzor
          </p>
          <p className="text-zinc-500 mb-8 sm:mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6 sm:mb-8">
            This Acceptable Use Policy (&quot;AUP&quot;) defines the permitted
            and prohibited use of all services provided under the Playzor brand,
            including Playzor Game Hosting, Playzor Minecraft Hosting, and
            Playzor Technologies. By using Playzor services, you agree to comply
            with this policy.
          </p>

          <div className="space-y-8 sm:space-y-12 prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                1. Purpose of This Policy
              </h2>
              <p>This policy exists to:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Maintain infrastructure stability and security</li>
                <li>Protect customers and network integrity</li>
                <li>Ensure legal compliance</li>
                <li>Prevent abuse, illegal activity, and service disruption</li>
              </ul>
              <p className="mt-4">
                Failure to follow this policy may result in suspension or
                termination of services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                2. Prohibited Activities
              </h2>
              <p>
                The following activities are strictly prohibited on Playzor
                infrastructure:
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Illegal Activities
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                <li>Hosting or distributing illegal content</li>
                <li>Copyright infringement or pirated software/plugins/mods</li>
                <li>Fraudulent activity or impersonation</li>
                <li>
                  Any activity violating Indian law or applicable international
                  regulations
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Network Abuse &amp; Security Violations
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                <li>DDoS attacks or traffic flooding</li>
                <li>Port scanning, hacking attempts, or exploitation</li>
                <li>Malware distribution or botnet activity</li>
                <li>Circumventing security systems</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Infrastructure Abuse
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                <li>Excessive resource usage impacting other customers</li>
                <li>
                  Running unrelated heavy workloads not intended for game
                  hosting
                </li>
                <li>
                  Cryptocurrency mining or similar intensive workloads without
                  approval
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">
                Content Restrictions
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                <li>
                  Pirated, cracked, nulled, or unlicensed plugins/mods/software
                </li>
                <li>Harmful, abusive, or unlawful content</li>
                <li>Content violating intellectual property rights</li>
              </ul>
              <p className="mt-4">
                License proof may be requested at any time.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                3. Server Monitoring
              </h2>
              <p>To maintain service integrity:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Automated systems may monitor server health and security
                  risks.
                </li>
                <li>
                  Monitoring is strictly operational and security-related.
                </li>
                <li>
                  Playzor does not intentionally misuse customer server data.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                4. Third-Party Infrastructure
              </h2>
              <p>
                Playzor services may rely on third-party infrastructure
                providers such as data centers, network providers, and security
                services.
              </p>
              <p className="mt-4">
                Violations affecting these providers may lead to immediate
                suspension.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                5. Enforcement Actions
              </h2>
              <p>If violations occur, Playzor may:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Issue warnings</li>
                <li>Suspend services temporarily</li>
                <li>Permanently terminate services</li>
                <li>Remove prohibited content</li>
              </ul>
              <p className="mt-4">
                Severe violations may result in immediate termination without
                prior notice.
              </p>
              <p className="mt-2">
                Refunds may not apply if termination occurs due to policy
                violations.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                6. Reporting Abuse
              </h2>
              <p>
                If you notice abuse, illegal activity, or security concerns:
              </p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:info@playzor.me"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  info@playzor.me
                </a>
              </p>
              <p className="mt-2">Reports will be reviewed promptly.</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                7. Policy Updates
              </h2>
              <p>
                Playzor reserves the right to update this Acceptable Use Policy
                at any time. Continued service use indicates acceptance of
                updated policies.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                8. Contact
              </h2>
              <p>
                Abuse, Legal, or Support Contact:{" "}
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
                Playzor aims to maintain a secure, fair, and stable hosting
                environment for all customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
