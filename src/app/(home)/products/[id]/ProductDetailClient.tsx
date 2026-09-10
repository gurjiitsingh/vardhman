"use client";

import Image from "next/image";
import { ProductType } from "@/lib/types/productType";
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import { UseSiteContext } from "@/SiteContext/SiteContext";

export default function ProductDetailClient({
  product,
}: {
  product: ProductType;
}) {
  const { settings } = UseSiteContext();

  const priceRegular = formatCurrencyNumber(
    product.price ?? 0,
    settings.currency as string,
    settings.locale as string
  );

  const priceDiscounted =
    product.discountPrice && product.discountPrice > 0
      ? formatCurrencyNumber(
          product.discountPrice,
          settings.currency as string,
          settings.locale as string
        )
      : null;

  return (
    <main className="min-h-screen bg-white mt-25">
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* PRODUCT IMAGE */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={product.image || "/placeholder.jpg"}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div className="py-4">

            {/* CATEGORY */}
            {product.productCat && (
              <p className="text-xs uppercase tracking-[2px] text-neutral-400 mb-3">
                {product.productCat}
              </p>
            )}

            {/* NAME */}
            <h1 className="text-3xl font-semibold text-neutral-900">
              {product.name}
            </h1>

            {/* PRICE */}
            <div className="mt-5 flex items-center gap-3">

              {priceDiscounted ? (
                <>
                  <span className="text-2xl font-semibold">
                    {priceDiscounted}
                  </span>

                  <span className="text-neutral-400 line-through">
                    {priceRegular}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-semibold">
                  {priceRegular}
                </span>
              )}

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">

              <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                Description
              </h2>

              <p className="text-neutral-600 leading-7 whitespace-pre-line">
                {product.productDesc || "No description available."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}