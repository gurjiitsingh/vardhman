"use client";

import Link from "next/link";

export default function FashionCategories() {
  const categories = [
    {
      title: "Men",
      subtitle: "Modern Essentials",
      image: "/men.jpg",
      href: "/category/men",
    },
    {
      title: "Women",
      subtitle: "New Season Styles",
      image: "/lady2.jpg",
      href: "/category/women",
    },
    {
      title: "Children",
      subtitle: "Comfort & Play",
      image: "/children.jpg",
      href: "/category/children",
    },
  ];

  return (
    <section className="relative py-13 bg-white overflow-hidden">
      {/* Soft pink glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-100/70 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-100/60 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-sm text-neutral-500 mb-4">
            Shop by Category
          </p>

          <h2 className="text-4xl md:text-6xl font-light text-neutral-900">
            Explore Collections
          </h2>
        </div>

        {/* Categories */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
  {categories.map((category) => (
    <Link
      key={category.title}
      href={category.href}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        h-[220px]
        md:h-[500px]
      "
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.title}
        className="
          absolute inset-0
          w-full h-full
          object-cover
          transition duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Mobile Title */}
      <div
        className="
          absolute bottom-3 left-3 right-3
          md:hidden
          bg-white/90
          backdrop-blur-xl
          rounded-2xl
          py-3
          text-center
        "
      >
        <h3 className="font-medium text-neutral-900">
          {category.title}
        </h3>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block absolute bottom-10 left-8 text-white">
        <p className="uppercase tracking-[4px] text-sm text-white/70 mb-3">
          {category.subtitle}
        </p>

        <h3 className="text-4xl md:text-5xl font-light mb-6">
          {category.title}
        </h3>

        <div
          className="
            inline-flex
            px-6 py-3
            bg-white
            text-black
            rounded-full
            text-sm
            uppercase
            tracking-[2px]
            font-medium
            group-hover:bg-pink-600
            group-hover:text-white
            transition
          "
        >
          Shop Now
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}

