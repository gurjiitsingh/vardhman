"use client";

import Link from "next/link";


export default function MasterCategoryView({
  masterCategory,
  categories,
  allMasterCategories,
}: {
  masterCategory: any;
  categories: any[];
  allMasterCategories: any[];
}) {
  return (
    <main className="pt-[80px] bg-white min-h-screen">
      {/* HERO */}


      <section className="relative h-[400px] md:h-[550px] overflow-hidden">
        <img
          src={masterCategory.image}
          alt={masterCategory.name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/45
          "
        />

        <div
          className="
            relative
            h-full
            max-w-7xl
            mx-auto
            px-6
            flex
            items-center
          "
        >
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[6px] text-sm mb-4">
              Collection
            </p>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-light
                mb-6
              "
            >
              {masterCategory.name}
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-white/90
                leading-relaxed
              "
            >
              {masterCategory.description}
            </p>
          </div>
        </div>
      </section>
    


      <section className="border-b bg-white sticky top-[80px] z-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {allMasterCategories.map((item) => (
              <Link
                key={item.id}
                href={`/category/${item.id}`}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition ${item.id === masterCategory.id
                  ? "bg-black text-white"
                  : "bg-neutral-100 hover:bg-neutral-200"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
  <div className="max-w-7xl mx-auto">
    <div className=" mt-3 mx-7 text-sm text-slate-600 bg-zinc-100 rounded-lg p-3">
        <Link href="/">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>
          {masterCategory.name}
        </span>
      </div>
      </div>
      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div
          className="
            bg-neutral-50
            rounded-[32px]
            p-8
            md:p-12
          "
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h2 className="text-3xl font-light mb-3">
                Explore Categories
              </h2>

              <p className="text-neutral-600">
                Discover premium fashion pieces
                carefully curated for every style,
                occasion, and season.
              </p>
            </div>

            <div className="md:ml-auto">
              <div className="text-5xl font-light">
                {categories.length}
              </div>

              <div className="text-neutral-500">
                Categories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.id}`}
              className="
                group
                bg-white
                border
                border-neutral-100
                rounded-[28px]
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={
                    category.image ||
                    "/placeholder.jpg"
                  }
                  alt={category.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-5">
                <h3
                  className="
                    text-lg
                    font-medium
                    mb-2
                  "
                >
                  {category.name}
                </h3>

                <p
                  className="
                    text-sm
                    text-neutral-500
                    line-clamp-2
                  "
                >
                  {category.desc}
                </p>

                <div
                  className="
                    mt-4
                    text-sm
                    uppercase
                    tracking-[2px]
                    text-pink-600
                    font-medium
                  "
                >
                  View Collection →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.id}`}
              className="
          px-5
          py-2
          rounded-full
          bg-neutral-100
          hover:bg-black
          hover:text-white
          whitespace-nowrap
          transition
        "
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}