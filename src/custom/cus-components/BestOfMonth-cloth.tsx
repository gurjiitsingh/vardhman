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
    <section className="relative py-14 md:py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#050505,#111111,#191919,#050505)]" />

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-fuchsia-500/20 blur-[130px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-blue-500/20 blur-[130px] rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">

          <div>

            <div className="flex items-center gap-3 text-white/70 uppercase tracking-[4px] text-xs sm:text-sm mb-4">
              <FaStar className="text-white text-xs" />
              Trending Collection
            </div>

            <h2
              className={`${chicle.className} text-white text-4xl sm:text-5xl md:text-6xl leading-tight`}
            >
              New Season
              <br />
              Essentials
            </h2>

            <p className="text-white/60 text-sm sm:text-base mt-5 max-w-xl leading-relaxed">
              Explore our premium fashion picks curated
              for modern everyday luxury and timeless
              streetwear aesthetics.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => scroll("left")}
              className="group w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300"
            >
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="group w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300"
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

                {/* Card Wrapper */}
                <div className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[28px] overflow-hidden hover:border-white/20 transition duration-500 hover:-translate-y-1">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

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
                <div className="bg-white/[0.04] border border-white/10 rounded-[28px] p-5 animate-pulse backdrop-blur-xl">

                  <div className="h-[260px] rounded-2xl bg-white/10 mb-5" />

                  <div className="h-4 bg-white/10 rounded-full w-3/4 mb-3" />

                  <div className="h-3 bg-white/10 rounded-full w-1/2 mb-5" />

                  <div className="flex items-center justify-between">

                    <div className="h-4 bg-white/10 rounded-full w-20" />

                    <div className="h-10 w-10 rounded-full bg-white/10" />

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