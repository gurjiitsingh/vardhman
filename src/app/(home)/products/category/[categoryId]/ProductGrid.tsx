"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/lib/types/productType";
import { categoryType } from "@/lib/types/categoryType";
import { MasterCategoryType } from "@/lib/types/masterCategoryType";
import VProductCard_1 from "@/components/vertical-product-card/VProductCard-1";

import { addOnType } from "@/lib/types/addOnType";

type Props = {
  products: ProductType[];
  variants: ProductType[];
  allAddOns: addOnType[];
  modifierGroups: any[];
  productModifiers: any[];

  category: categoryType;
  masterCategory: any;
  categories: categoryType[];
  allMasterCategories: MasterCategoryType[];
};

export default function ProductGrid({
  products,
  variants,
  allAddOns,
  modifierGroups,
  productModifiers,

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
                  className={`px-5 py-2 rounded-full whitespace-nowrap transition ${item.id ===
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
          ${cat.id === category.id
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
           {products.map((product) => (
  <VProductCard_1
    key={product.id}
    product={product}
    variants={variants}
    allAddOns={allAddOns}
    modifierGroups={modifierGroups}
    productModifiers={productModifiers}
  />
))}
          </div>
        )}
      </section>
    </main>
  );
}