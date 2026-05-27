"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Chicle } from "next/font/google";

const chicle = Chicle({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSectionFashion() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100 min-h-screen">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(156, 205, 58, 0.59),transparent_35%)]" />

      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-black/90 to-black/70" />

      <div className="absolute top-10 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-white/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-neutral-500/10 blur-3xl rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 lg:py-0 min-h-screen grid lg:grid-cols-2 items-center gap-14">

        {/* LEFT CONTENT */}
        <div className="text-white order-2 lg:order-1 text-center lg:text-left">

          {/* Tag */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-5 text-neutral-300 text-xs sm:text-sm tracking-[3px] uppercase">
            <FaStar className="text-white text-[10px] sm:text-xs" />
            New Fashion Collection
          </div>

          {/* Heading */}
          <h1
            className={`${chicle.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-5`}
          >
            Wear Your
            <br />
            Own Style
          </h1>

          {/* Description */}
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Discover timeless fashion pieces crafted for modern lifestyles.
            Premium quality, elegant designs, and everyday confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

            <Link
              href="/shop"
              className="w-full sm:w-auto text-center bg-white text-black hover:bg-neutral-200 px-8 py-3 rounded-full text-sm font-semibold transition duration-300 shadow-2xl"
            >
              Shop Now
            </Link>

            <Link
              href="/collection"
              className="w-full sm:w-auto text-center border border-white/30 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-sm font-semibold transition duration-300"
            >
              Explore Collection
            </Link>

          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-10 mt-10 sm:mt-12">

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">15k+</h3>
              <p className="text-white/60 text-xs sm:text-sm">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">250+</h3>
              <p className="text-white/60 text-xs sm:text-sm">
                Premium Products
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[380px] sm:h-[500px] lg:h-[650px] order-1 lg:order-2 flex items-center justify-center">

          {/* Back Image */}
          <div className="absolute left-6 sm:left-14 lg:right-24 lg:left-auto top-8 sm:top-12 lg:top-20 rotate-[-10deg] hover:rotate-[-6deg] transition duration-500">

            <div className="relative w-[180px] sm:w-[250px] lg:w-[300px] h-[260px] sm:h-[350px] lg:h-[420px] rounded-[24px] lg:rounded-[30px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10">

              <Image
                src="/1.jpg"
                alt="Fashion Model"
                fill
                className="object-cover"
                priority
              />

            </div>

          </div>

          {/* Front Image */}
          <div className="absolute right-4 sm:right-10 lg:right-0 bottom-0 sm:bottom-6 lg:bottom-10 rotate-[8deg] hover:rotate-[4deg] transition duration-500 z-10">

            <div className="relative w-[200px] sm:w-[270px] lg:w-[320px] h-[290px] sm:h-[390px] lg:h-[450px] rounded-[24px] lg:rounded-[30px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] border border-white/10">

              <Image
                src="/2.jpg"
                alt="Fashion Collection"
                fill
                className="object-cover"
                priority
              />

            </div>

          </div>

          {/* Floating Badge */}
          <div className="absolute left-2 sm:left-10 bottom-6 sm:bottom-16 lg:bottom-24 bg-white/10 backdrop-blur-xl border border-white/10 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-2xl">

            <p className="text-white text-xs sm:text-sm font-semibold">
              Summer 2026 Drop
            </p>

            <p className="text-white/60 text-[10px] sm:text-xs mt-1">
              Limited Edition Collection
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}