"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://playzor.me/privacy/#webpage",
        url: "https://playzor.me/privacy",
        name: "Privacy Policy | Playzor",
        description:
          "Playzor Privacy Policy — how we protect and handle your data.",
        isPartOf: { "@id": "https://playzor.me/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://playzor.me/privacy/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://playzor.me",
          },
          { "@type": "ListItem", position: 2, name: "Privacy Policy" },
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
            Privacy Policy
          </h1>
          <p className="text-zinc-500 mb-4">Privacy Policy — Playzor</p>
          <p className="text-zinc-500 mb-8 sm:mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6 sm:mb-8">
            This Privacy Policy explains how Playzor collects, uses, protects,
            and manages information when you use any service under the Playzor
            brand, including Playzor Game Hosting, Playzor Minecraft Hosting,
            and services operated under Playzor Technologies. By using our
            services, registering an account, or purchasing hosting, you agree
            to this Privacy Policy.
          </p>

          <div className="space-y-8 sm:space-y-12 prose prose-invert prose-zinc max-w-none">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                1. Information We Collect
              </h2>
              <p>
                To provide hosting services properly, Playzor may collect the
                following information:
              </p>

              <p className="mt-4">
                <strong className="text-white">Account Information</strong>
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>
                  Account login credentials (stored securely and encrypted)
                </li>
              </ul>

              <p className="mt-4">
                <strong className="text-white">
                  Technical &amp; Security Information
                </strong>
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-2">
                <li>IP address</li>
                <li>Device/browser metadata (for security verification)</li>
                <li>
                  Server usage data necessary for infrastructure stability
                </li>
              </ul>

              <p className="mt-4">
                We collect only the information required for service delivery,
                billing, security, and support.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                2. How We Use Your Information
              </h2>
              <p>Your data may be used for:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Account registration and authentication</li>
                <li>Service provisioning and hosting management</li>
                <li>Customer support communication</li>
                <li>Billing, payment verification, and fraud prevention</li>
                <li>
                  Service announcements, maintenance notices, or operational
                  updates
                </li>
                <li>
                  Promotional communication related to Playzor services (you may
                  opt out where applicable)
                </li>
              </ul>
              <p className="mt-4">
                We do not sell personal data to third parties.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                3. Server Monitoring &amp; Infrastructure Protection
              </h2>
              <p>To maintain infrastructure security and reliability:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>
                  Automated systems may monitor server health, resource usage,
                  and potential security risks.
                </li>
                <li>
                  Monitoring is strictly operational and security-focused.
                </li>
                <li>
                  We do not intentionally download, distribute, or commercially
                  use customer server content.
                </li>
              </ul>
              <p className="mt-4">
                Monitoring helps detect abuse, piracy, malware, or
                infrastructure threats.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                4. Third-Party Infrastructure &amp; Services
              </h2>
              <p>
                Playzor relies on trusted third-party providers to deliver
                services, including but not limited to:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Cloudflare (network security, DNS, performance)</li>
                <li>Contabo and other data center providers</li>
                <li>Payment gateways and infrastructure partners</li>
              </ul>
              <p className="mt-4">
                These providers may process limited necessary data to deliver
                services. Their own privacy policies also apply.
              </p>
              <p className="mt-2">
                Playzor is not responsible for data handling practices outside
                our direct control.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                5. Data Security Measures
              </h2>
              <p>
                We implement reasonable technical and administrative safeguards,
                including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Encrypted password storage</li>
                <li>Secure infrastructure practices</li>
                <li>Access control and monitoring systems</li>
              </ul>
              <p className="mt-4">However:</p>
              <p className="mt-2">
                <strong className="text-white">
                  No online system can guarantee absolute security.
                </strong>
              </p>
              <p className="mt-2">
                Users should also maintain good security practices.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                6. Data Retention
              </h2>
              <p>We retain data only as long as necessary for:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Active service operation</li>
                <li>Legal or compliance requirements</li>
                <li>Security and fraud prevention</li>
              </ul>
              <p className="mt-4">
                Data may remain in backups or logs for operational purposes even
                after service cancellation.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                7. Data Responsibility Disclaimer
              </h2>
              <p>Customers remain responsible for:</p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
                <li>Backups of hosted server data</li>
                <li>Content stored on their game servers</li>
                <li>Compliance with software licensing and laws</li>
              </ul>
              <p className="mt-4">
                Playzor does not guarantee data preservation or recovery.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                8. Age Requirement
              </h2>
              <p>
                Playzor services are intended for individuals{" "}
                <strong className="text-white">18 years or older</strong>{" "}
                capable of independent payment.
              </p>
              <p className="mt-4">
                Minors should use services only with parental or guardian
                consent.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                9. Legal Compliance (India)
              </h2>
              <p>
                This Privacy Policy is governed by applicable laws of India.
              </p>
              <p className="mt-2">
                Nothing in this policy overrides mandatory consumer or data
                protection laws.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                10. Policy Updates
              </h2>
              <p>
                Playzor may update this Privacy Policy periodically. Updated
                versions will be published on official Playzor platforms.
                Continued service use indicates acceptance of updates.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                11. Contact &amp; Privacy Requests
              </h2>
              <p>
                For privacy-related questions, concerns, or legal inquiries:
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
              <p className="mt-2">
                <strong className="text-white">Website:</strong>{" "}
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
                Playzor aims to handle user data responsibly while providing
                secure and reliable hosting services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
