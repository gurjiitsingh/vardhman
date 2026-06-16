"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/lib/types/productType";
import { categoryType } from "@/lib/types/categoryType";
import { MasterCategoryType } from "@/lib/types/masterCategoryType";

type Props = {
  products: ProductType[];
  category: categoryType;      // ✅ FIXED
  masterCategory: any;
  categories: categoryType[];           // ✅ FIXED
  allMasterCategories: MasterCategoryType[];
};

export default function ProductGrid({
  products,
  category,
  masterCategory,
  categories,
  allMasterCategories,
}: Props) {
  return (
    <main className="pt-[80px] bg-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[500px] overflow-hidden">
        <img
          src={
            category.image ||
            masterCategory?.image ||
            "/placeholder.jpg"
          }
          alt={category.name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/45" />

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
              {masterCategory?.name}
            </p>

            <h1
              className="
                text-4xl
                md:text-7xl
                font-light
                mb-6
              "
            >
              {category.name}
            </h1>

            <p
              className="
                text-lg
                md:text-xl
                text-white/90
                leading-relaxed
              "
            >
              {category.desc ||
                "Explore our latest collection carefully curated for modern style and everyday elegance."}
            </p>
          </div>
        </div>
      </section>

      {/* MASTER CATEGORY NAV */}
      <section className="border-b bg-white sticky top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {allMasterCategories.map(
              (item) => (
                <Link
                  key={item.id}
                  href={`/category/${item.id}`}
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition ${
                    item.id ===
                    masterCategory?.id
                      ? "bg-black text-white"
                      : "bg-neutral-100 hover:bg-neutral-200"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto">
        <div className="mt-3 mx-7 text-sm text-slate-600 bg-zinc-100 rounded-lg p-3">
          <Link href="/">Home</Link>

          <span className="mx-2">/</span>

          <Link
            href={`/category/${masterCategory?.id}`}
          >
            {masterCategory?.name}
          </Link>

          <span className="mx-2">/</span>

          <span>{category.name}</span>
        </div>
      </div>

{/* CATEGORY PILLS */}
<section className="max-w-7xl mx-auto px-6 py-5">
  <div className="flex gap-2 overflow-x-auto scrollbar-hide">
    {categories.map((cat) => (
      <Link
        key={cat.id}
        href={`/products/category/${cat.id}`}
        className={`
          px-3
          py-1.5
          rounded-full
          whitespace-nowrap
          text-sm
          font-medium
          transition-all
          duration-200
          flex-shrink-0
          ${
            cat.id === category.id
              ? "bg-[#00897b] text-white shadow-sm"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
          }
        `}
      >
        {cat.name}
      </Link>
    ))}
  </div>
</section>

      {/* PRODUCT COUNT */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div
          className="
            bg-neutral-50
            rounded-[32px]
            p-8
            md:p-10
          "
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h2 className="text-3xl font-light mb-3">
                {category.name}
              </h2>

              <p className="text-neutral-600">
                Browse our premium selection
                designed for comfort,
                quality and timeless style.
              </p>
            </div>

            <div className="md:ml-auto">
              <div className="text-5xl font-light">
                {products.length}
              </div>

              <div className="text-neutral-500">
                Products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium">
              No Products Found
            </h3>

            <p className="text-neutral-500 mt-3">
              Products will appear here once
              added.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-6
            "
          >
            {products.map((product) => {
              const discount =
                product.discountPrice &&
                product.discountPrice > 0;

              return (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="
                    group
                    bg-white
                    rounded-[28px]
                    overflow-hidden
                    border
                    border-neutral-100
                    hover:shadow-xl
                    transition
                  "
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <Image
                      src={
                        product.image ||
                        "/placeholder.jpg"
                      }
                      alt={product.name}
                      fill
                      className="
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {discount && (
                      <div
                        className="
                          absolute
                          top-3
                          left-3
                          bg-black
                          text-white
                          text-xs
                          px-3
                          py-1
                          rounded-full
                        "
                      >
                        SALE
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[2px] text-neutral-400 mb-2">
                      {product.productCat}
                    </p>

                    <h3
                      className="
                        text-base
                        font-medium
                        text-neutral-900
                        line-clamp-2
                        min-h-[48px]
                      "
                    >
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      {discount ? (
                        <>
                          <span className="font-semibold text-lg">
                            ₹
                            {
                              product.discountPrice
                            }
                          </span>

                          <span className="text-neutral-400 line-through text-sm">
                            ₹{product.price}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold text-lg">
                          ₹{product.price}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          product.stockStatus ===
                          "in_stock"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stockStatus ===
                        "in_stock"
                          ? "In Stock"
                          : "Out of Stock"}
                      </span>

                      {product.hasVariants && (
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          Variants
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}