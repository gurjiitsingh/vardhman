"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

type Props = {
  outlet?: any;
};

export default function ContactUs({
  outlet,
}: Props) {
  const name =
    outlet?.outletName || "Fashion Store";

  const addressParts = [
    outlet?.addressLine1,
    outlet?.addressLine2,
    outlet?.city,
  ].filter(Boolean);

  const address =
    addressParts.length > 0
      ? addressParts.join(", ")
      : "Address not available";

  const phone = outlet?.phone || "-";
  const phone2 = outlet?.phone2 || "";
  const email = outlet?.email || "-";

  const mapQuery =
    encodeURIComponent(address);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#faf9f7,#f5f5f4,#ffffff)]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-amber-100/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-stone-100/60 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-xs text-neutral-500 mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-light text-neutral-900">
            Visit Our Store
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-neutral-600">
            We'd love to hear from you. Visit our
            store, call us, or send us an email.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Contact Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-[32px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

            <h3 className="text-3xl font-semibold text-neutral-900 mb-8">
              {name}
            </h3>

            <div className="space-y-8">

              {/* Address */}
              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-neutral-700" />
                </div>

                <div>
                  <p className="uppercase text-xs tracking-[3px] text-neutral-500 mb-2">
                    Address
                  </p>

                  <a
                    href={`https://maps.google.com/?q=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-700 hover:text-black transition"
                  >
                    {address}
                  </a>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-neutral-700" />
                </div>

                <div>
                  <p className="uppercase text-xs tracking-[3px] text-neutral-500 mb-2">
                    Phone
                  </p>

                  <a
                    href={`tel:${phone}`}
                    className="block text-neutral-700 hover:text-black transition"
                  >
                    {phone}
                  </a>

                  {phone2 && (
                    <a
                      href={`tel:${phone2}`}
                      className="block text-neutral-700 hover:text-black transition"
                    >
                      {phone2}
                    </a>
                  )}
                </div>

              </div>

              {/* Email */}
              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-neutral-700" />
                </div>

                <div>
                  <p className="uppercase text-xs tracking-[3px] text-neutral-500 mb-2">
                    Email
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="text-neutral-700 hover:text-black transition"
                  >
                    {email}
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Map Card */}
          <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

          

 <iframe
        title="Vardhman Traders Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.044073651938!2d75.57723000000001!3d31.330155899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b0036cd2741%3A0x440e6c494730f25d!2sVardhman%20traders!5e0!3m2!1sen!2sin!4v1780377689663!5m2!1sen!2sin"
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ border: 0 }}
      />



          </div>

        </div>

      </div>

    </section>
  );
}