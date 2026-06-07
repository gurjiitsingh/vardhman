"use client";

export default function LuxuryDivider() {
  return (
    <section className="relative h-[60px] overflow-hidden">
      {/* Pink Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-rose-100 to-pink-50" />

      {/* Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
        <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      </div>

      {/* Center Text */}
      <div className="relative h-full flex items-center justify-center">
        <span
          className="
            px-6
            bg-white/80
            backdrop-blur-sm
            text-pink-600
            text-xs
            uppercase
            tracking-[6px]
            font-medium
          "
        >
          Curated With Love
        </span>
      </div>
    </section>
  );
}