"use client";

import Link from "next/link";

type Props = {
  outlet?: any;
};

export default function PrivacyPolicy_en({ outlet }: Props) {
  const name = outlet?.outletName || "Brand";
  const website = outlet?.web || "#";
  const email = outlet?.email || "info@example.com";

  const formattedDate = outlet?.updatedAt
    ? new Date(outlet.updatedAt).toLocaleDateString("en-GB")
    : "";

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#f8fafc,#f3f4f6,#ffffff)]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-100/60 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-rose-100/50 blur-[130px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-xs text-pink-600 font-medium">
            Legal Information
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mt-4">
            Privacy Policy
          </h1>

          <p className="text-neutral-500 mt-4 text-sm md:text-base">
            How {name} collects, uses, and protects your information
          </p>

        </div>

        {/* Content Card */}
        <div className="bg-white border border-neutral-200 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 md:p-10 space-y-10">

          {/* Intro */}
          <div className="text-neutral-600 leading-relaxed">
            At <strong className="text-neutral-900">{name}</strong>, we respect your privacy.
            This policy explains how we collect and use your personal data when you visit our website
            or place an order through{" "}
            <a href={website} className="text-pink-600 hover:underline">
              {website}
            </a>.
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-neutral-600 mb-3">
              We collect only essential details required to process your order:
            </p>
            <ul className="list-disc pl-5 text-neutral-600 space-y-1">
              <li>Email address</li>
              <li>Order details</li>
              <li>Delivery or pickup address</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 text-neutral-600 space-y-1">
              <li>Processing and confirming orders</li>
              <li>Customer support communication</li>
              <li>Optional promotional offers (if subscribed)</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              3. Data Protection
            </h2>
            <p className="text-neutral-600">
              We do not sell or share your personal data with third parties.
              Your information is stored securely and used only for order-related purposes.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              4. Your Rights
            </h2>
            <p className="text-neutral-600 mb-3">
              You can request access, correction, or deletion of your data at any time.
            </p>

            <a
              href={`mailto:${email}`}
              className="inline-block text-pink-600 font-medium hover:underline"
            >
              {email}
            </a>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">
              5. Contact
            </h2>
            <p className="text-neutral-600 mb-2">
              For any privacy-related questions, contact us:
            </p>

            <a
              href={`mailto:${email}`}
              className="text-pink-600 font-medium hover:underline"
            >
              📧 {email}
            </a>
          </div>

        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-neutral-400 mt-10">
          Last updated: {formattedDate || "N/A"}
        </p>

      </div>
    </section>
  );
}