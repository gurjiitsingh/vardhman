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
        const res = await fetch(
          "/api/products/featured",
          {
            cache: "no-store",
          }
        );

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
    <section id="month_new" className="relative py-16 md:py-24 overflow-hidden bg-white">

      {/* Background */}
  <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-rose-100/70 blur-[120px] rounded-full" />

<div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-100/60 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-100/60 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">

          <div>

            <div className="flex items-center gap-3 text-neutral-500 uppercase tracking-[4px] text-xs sm:text-sm mb-4">

              <FaStar className="text-lime-600 text-xs" />

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

          {/* Arrows */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll("left")}
              className="group w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white transition duration-300 shadow-sm"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="group w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white transition duration-300 shadow-sm"
            >
              <FaChevronRight className="group-hover:translate-x-0.5 transition" />
            </button>

          </div>

        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            scrollbar-hide
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
                  min-w-[85%]
                  sm:min-w-[48%]
                  lg:min-w-[32%]
                  xl:min-w-[26%]
                  flex-shrink-0
                "
              >

                {/* Fashion Card */}
                <Link
                  href={`/product/${product.slug}`}
                  className="group relative block h-[500px] sm:h-[550px] rounded-[32px] overflow-hidden bg-neutral-100"
                >

                  {/* Product Image */}
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
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-black/10" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-7 text-white z-10">

                    {/* Category */}
                    <p className="text-xs uppercase tracking-[3px] text-white/70 mb-3">
                      Premium Fashion
                    </p>

                    {/* Product Name */}
                    <h3
                      className={`${chicle.className} text-3xl sm:text-4xl leading-tight`}
                    >
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-center justify-between mt-5">

                      <div>

                        <p className="text-white/60 text-xs mb-1">
                          Starting From
                        </p>

                        <p className="text-xl font-semibold">
                          ₹{product.price}
                        </p>

                      </div>

                      {/* Button */}
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-xl">
                        →
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
                  min-w-[85%]
                  sm:min-w-[48%]
                  lg:min-w-[32%]
                  xl:min-w-[26%]
                  flex-shrink-0
                "
              >

                {/* Skeleton */}
                <div className="h-[500px] sm:h-[550px] rounded-[32px] bg-neutral-100 animate-pulse" />

              </div>
            ))
          )}

        </div>

      </div>

    </section>
  );
}