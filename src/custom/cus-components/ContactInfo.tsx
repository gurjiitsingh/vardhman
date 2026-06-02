"use client";

import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

export default function ContactInfo({ outlet, schedule }: any) {
  if (!outlet) return null;
const infoCardClass =
  "bg-white/70 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition duration-300";
  return (
  <section className="relative overflow-hidden py-20 md:py-28">

  <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#faf9f7,#f5f5f4,#ffffff)]" />

  <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-amber-100/50 blur-[120px] rounded-full" />

  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-stone-100/70 blur-[120px] rounded-full" />

  <div className="relative max-w-6xl mx-auto px-6">
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Address */}
  <div className={infoCardClass}>
    <FaMapMarkedAlt className="w-7 h-7 mx-auto mb-5 text-neutral-700" />
    <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4">
      Address
    </h3>

    <p className="text-sm text-neutral-600">
      {outlet.outletName}
    </p>
    <p className="text-sm text-neutral-600">
      {outlet.addressLine1}
    </p>
    {outlet.addressLine2 && (
      <p className="text-sm text-neutral-600">
        {outlet.addressLine2}
      </p>
    )}
    <p className="text-sm text-neutral-600">
      {outlet.city}
    </p>
  </div>

  {/* Phone */}
  <div className={infoCardClass}>
    <FaPhoneAlt className="w-7 h-7 mx-auto mb-5 text-neutral-700" />
    <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4">
      Phone
    </h3>

    <p className="text-sm text-neutral-600">
      {outlet.phone || "-"}
    </p>

    {outlet.phone2 && (
      <p className="text-sm text-neutral-600">
        {outlet.phone2}
      </p>
    )}
  </div>

  {/* Email */}
  <div className={infoCardClass}>
    <FaEnvelope className="w-7 h-7 mx-auto mb-5 text-neutral-700" />
    <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4">
      Email
    </h3>

    {outlet.email ? (
      <a
        href={`mailto:${outlet.email}`}
        className="text-sm text-neutral-600 hover:text-black transition"
      >
        {outlet.email}
      </a>
    ) : (
      <p className="text-sm text-neutral-600">-</p>
    )}
  </div>

  {/* Timing */}
  <div className={infoCardClass}>
    <FaCalendarAlt className="w-7 h-7 mx-auto mb-5 text-neutral-700" />
    <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4">
      Timing
    </h3>

    <div className="text-sm text-neutral-600 space-y-1">
      {schedule?.map(
        (line: string, i: number) => (
          <p key={i}>{line}</p>
        )
      )}
    </div>
  </div>

</div>
  </div>

</section>
  );
}

