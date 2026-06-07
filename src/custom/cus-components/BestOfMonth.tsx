
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Chicle } from "next/font/google";
import Link from "next/link";

const chicle = Chicle({
  subsets: ["latin"],
  weight: "400",
});

export default function TrendingCollection() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products/featured", {
          cache: "no-store",
        });

        if (!res.ok)
          throw new Error(
            "Failed to fetch featured products"
          );

        const products = await res.json();

        setFeaturedProducts(products);
      } catch (err) {
        console.error(
          "Error fetching featured products:",
          err
        );
      }
    };

    fetchData();
  }, []);

  const scroll = (
    direction: "left" | "right"
  ) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } =
        scrollRef.current;

      const scrollAmount =
        direction === "left"
          ? -clientWidth / 1.2
          : clientWidth / 1.2;

      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="month_new"
      className="relative py-16 md:py-24 overflow-hidden bg-white"
    >
      {/* Pink Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-rose-100/70 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-100/60 blur-[140px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.08),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-neutral-500 uppercase tracking-[4px] text-xs sm:text-sm mb-4">
            <FaStar className="text-rose-500 text-xs" />
            Trending Collection
          </div>

          <h2
            className={`${chicle.className} text-neutral-900 text-4xl sm:text-5xl md:text-6xl leading-tight`}
          >
            Fashion
            <br />
            Spotlight
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base mt-5 max-w-xl leading-relaxed">
            Discover the latest premium styles curated
            for modern streetwear and luxury fashion
            lovers.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          {/* Left Arrow */} <button onClick={() => scroll("left")} className=" flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-xl items-center justify-center text-neutral-700 hover:bg-black hover:text-white transition-all duration-300 " > <FaChevronLeft className="text-sm md:text-base" /> </button> {/* Right Arrow */} <button onClick={() => scroll("right")} className=" flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-xl border border-neutral-200 shadow-xl items-center justify-center text-neutral-700 hover:bg-black hover:text-white transition-all duration-300 " > <FaChevronRight className="text-sm md:text-base" /> </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              scrollbar-hide
              lg:px-16
            "
          >
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product, i) => (
                <div
                  key={
                    product.id ??
                    `${product.name}-${i}`
                  }

                  className="
  snap-start
  min-w-[88%]
  sm:min-w-[58%]
  lg:min-w-[36%]
  xl:min-w-[28%]
  flex-shrink-0
"

                >
                  <Link
                    href={`/product/${product.slug}`}
                    className="
                      group
                      relative
                      block
                      h-[600px]
                      sm:h-[700px]
                      overflow-hidden
                      bg-neutral-100
                    "
                  >
                    {/* Image */}
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          transition-all
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Hover Layer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-black/10" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                      <p className="text-xs uppercase tracking-[4px] text-white/70 mb-3">
                        Premium Fashion
                      </p>

                      <h3
                        className={`${chicle.className} text-4xl leading-tight`}
                      >
                        {product.name}
                      </h3>

                      <div className="flex items-end justify-between mt-8">
                        <div>
                          <p className="text-xs uppercase tracking-[2px] text-white/60 mb-2">
                            Starting From
                          </p>

                          <p className="text-2xl font-semibold">
                            ₹{product.price}
                          </p>
                        </div>

                        <div
                          className="
                            px-6 py-3
                            rounded-full
                            bg-white
                            text-black
                            text-sm
                            uppercase
                            tracking-[2px]
                            font-medium
                            transition-all
                            duration-300
                            group-hover:bg-black
                            group-hover:text-white
                          "
                        >
                          Shop
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              [...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="
                    min-w-[82%]
                    sm:min-w-[48%]
                    lg:min-w-[30%]
                    xl:min-w-[23%]
                    flex-shrink-0
                  "
                >
                  <div className="h-[600px] sm:h-[700px] bg-neutral-100 animate-pulse" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

