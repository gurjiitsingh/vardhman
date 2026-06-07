"use client";

import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ContactInfo({ outlet, schedule }: any) {
  if (!outlet) return null;

  const infoCardClass =
    "group bg-white/80 backdrop-blur-xl border border-white rounded-[30px] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500";

  const iconClass =
    "w-16 h-16 rounded-full bg-gradient-to-br from-pink-50 to-rose-100 text-pink-600 flex items-center justify-center text-2xl mb-5 mx-auto shadow-sm group-hover:scale-110 transition-all duration-300";

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#faf9f7,#f5f5f4,#ffffff)]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-100/50 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-rose-100/50 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className={infoCardClass}>
            <div className={iconClass}>
              <FaMapMarkedAlt />
            </div>

            <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4 text-neutral-800">
              Address
            </h3>

            <div className="space-y-1 text-sm text-neutral-600 leading-relaxed">
              <p>{outlet.outletName}</p>
              <p>{outlet.addressLine1}</p>

              {outlet.addressLine2 && <p>{outlet.addressLine2}</p>}

              <p>{outlet.city}</p>
            </div>
          </div>

          {/* Phone */}
          <div className={infoCardClass}>
            <div className={iconClass}>
              <FaPhoneAlt />
            </div>

            <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4 text-neutral-800">
              Phone
            </h3>

            <div className="space-y-1 text-sm text-neutral-600">
              <p>{outlet.phone || "-"}</p>

              {outlet.phone2 && <p>{outlet.phone2}</p>}
            </div>
          </div>

          {/* Email */}
          <div className={infoCardClass}>
            <div className={iconClass}>
              <FaEnvelope />
            </div>

            <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4 text-neutral-800">
              Email
            </h3>

            {outlet.email ? (
              <a
                href={`mailto:${outlet.email}`}
                className="text-sm text-neutral-600 hover:text-pink-600 transition-colors"
              >
                {outlet.email}
              </a>
            ) : (
              <p className="text-sm text-neutral-600">-</p>
            )}
          </div>

          {/* Timing */}
          <div className={infoCardClass}>
            <div className={iconClass}>
              <FaCalendarAlt />
            </div>

            <h3 className="uppercase text-xs tracking-[3px] font-semibold mb-4 text-neutral-800">
              Timing
            </h3>

            <div className="text-sm text-neutral-600 space-y-1">
              {schedule?.map((line: string, i: number) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}