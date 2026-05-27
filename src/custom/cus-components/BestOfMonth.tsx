"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Chicle } from "next/font/google";
import ProductCardPrductOfMonth from "../../components/level-2/ProductCardPOM";

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
          throw new Error("Failed to fetch featured products");

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
          ? -clientWidth / 1.3
          : clientWidth / 1.3;

      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">

      {/* Soft Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#f8fafc,#f3f4f6,#ffffff)]" />

      {/* Section Separation Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-lime-100/70 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-emerald-100/60 blur-[120px] rounded-full" />

      {/* Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">

          <div>

            {/* Tag */}
            <div className="flex items-center gap-3 text-neutral-500 uppercase tracking-[4px] text-xs sm:text-sm mb-4">

              <FaStar className="text-lime-600 text-xs" />

              Trending Collection

            </div>

            {/* Heading */}
            <h2
              className={`${chicle.className} text-neutral-900 text-4xl sm:text-5xl md:text-6xl leading-tight`}
            >
              New Season
              <br />
              Essentials
            </h2>

            {/* Description */}
            <p className="text-neutral-600 text-sm sm:text-base mt-5 max-w-xl leading-relaxed">
              Explore our premium fashion picks curated
              for modern everyday luxury and timeless
              streetwear aesthetics.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll("left")}
              className="group w-12 h-12 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-xl flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white transition duration-300 shadow-sm"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="group w-12 h-12 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-xl flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white transition duration-300 shadow-sm"
            >
              <FaChevronRight className="group-hover:translate-x-0.5 transition" />
            </button>

          </div>

        </div>

        {/* Product Slider */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            sm:gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            scrollbar-hide
            pb-2
          "
        >

          {featuredProducts.length > 0 ? (
            featuredProducts.map((product, i) => (
              <div
                key={product.id ?? `${product.name}-${i}`}
                className="
                  snap-start
                  min-w-[78%]
                  sm:min-w-[48%]
                  lg:min-w-[31%]
                  xl:min-w-[24%]
                  flex-shrink-0
                "
              >

                {/* Card */}
                <div className="group relative bg-white/80 border border-neutral-200 rounded-[28px] overflow-hidden hover:border-neutral-300 transition duration-500 hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.08),transparent_55%)]" />

                  <div className="relative z-10">
                    <ProductCardPrductOfMonth
                      product={product}
                    />
                  </div>

                </div>

              </div>
            ))
          ) : (
            [...Array(4)].map((_, i) => (
              <div
                key={i}
                className="
                  min-w-[78%]
                  sm:min-w-[48%]
                  lg:min-w-[31%]
                  xl:min-w-[24%]
                  flex-shrink-0
                "
              >

                {/* Skeleton */}
                <div className="bg-white/80 border border-neutral-200 rounded-[28px] p-5 animate-pulse shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

                  <div className="h-[260px] rounded-2xl bg-neutral-100 mb-5" />

                  <div className="h-4 bg-neutral-200 rounded-full w-3/4 mb-3" />

                  <div className="h-3 bg-neutral-200 rounded-full w-1/2 mb-5" />

                  <div className="flex items-center justify-between">

                    <div className="h-4 bg-neutral-200 rounded-full w-20" />

                    <div className="h-10 w-10 rounded-full bg-neutral-200" />

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </section>
  );
}