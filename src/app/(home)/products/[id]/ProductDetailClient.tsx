"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";

import { ProductType } from "@/lib/types/productType";
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import CartButtonAddBold from "@/custom/cus-components/button/CartButtonAddBold";
 
 
export default function ProductDetailClient({
  product,
}: {
  product: ProductType;
}) {
  console.log("product.images---------------", product.images);

  const { settings } = UseSiteContext();

  // =========================================================
  // SORT GALLERY IMAGES
  // =========================================================

  const galleryImages = useMemo(() => {
    if (!product.images || product.images.length === 0) {
      return [];
    }

    return [...product.images].sort(
      (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
    );
  }, [product.images]);

  // =========================================================
  // MAIN IMAGE
  // =========================================================

  const allImages = useMemo(() => {
    const images = [];

    // Existing main product image
    if (product.image) {
      images.push({
        id: "main-product-image",
        url: product.image,
        name: product.name,
        sortOrder: -1,
      });
    }

    // Gallery images
    galleryImages.forEach((image) => {
      // Avoid duplicate main image
      if (image.url !== product.image) {
        images.push(image);
      }
    });

    return images;
  }, [product.image, product.name, galleryImages]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // =========================================================
  // SELECTED IMAGE
  // =========================================================

  const selectedImage =
    allImages[selectedImageIndex]?.url || "/placeholder.jpg";

  // =========================================================
  // PRICE
  // =========================================================

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

  // =========================================================
  // IMAGE NAVIGATION
  // =========================================================

  const goToPreviousImage = () => {
    if (allImages.length <= 1) return;

    setSelectedImageIndex((current) =>
      current === 0 ? allImages.length - 1 : current - 1
    );
  };

  const goToNextImage = () => {
    if (allImages.length <= 1) return;

    setSelectedImageIndex((current) =>
      current === allImages.length - 1 ? 0 : current + 1
    );
  };

  // =========================================================
  // OPEN LIGHTBOX
  // =========================================================

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // =========================================================
  // KEYBOARD NAVIGATION
  // =========================================================

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      goToPreviousImage();
    }

    if (event.key === "ArrowRight") {
      goToNextImage();
    }
  };

  return (
    <>
      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <main className="min-h-screen bg-white mt-25">
        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* =================================================
              MAIN PRODUCT SECTION
          ================================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* =================================================
                PRODUCT IMAGE AREA
            ================================================= */}

            <div className="flex flex-col gap-4">

              {/* ===============================================
                  LARGE MAIN IMAGE
              =============================================== */}

              <button
                type="button"
                onClick={openLightbox}
                className="
                  group
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  rounded-3xl
                  bg-neutral-100
                  cursor-zoom-in
                  focus:outline-none
                  focus:ring-2
                  focus:ring-neutral-900
                  focus:ring-offset-2
                "
                aria-label="Open product image"
              >
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  priority
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />

                {/* Zoom overlay */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-black/60
                    px-4
                    py-2
                    text-sm
                    text-white
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>View larger</span>
                </div>
              </button>

              {/* ===============================================
                  THUMBNAILS
              =============================================== */}

              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">

                  {allImages.map((image, index) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`
                        relative
                        h-20
                        w-20
                        shrink-0
                        overflow-hidden
                        rounded-xl
                        bg-neutral-100
                        border-2
                        transition-all
                        duration-200
                        ${selectedImageIndex === index
                          ? "border-neutral-900 ring-2 ring-neutral-900/10"
                          : "border-transparent hover:border-neutral-300"
                        }
                      `}
                      aria-label={`View image ${index + 1}`}
                    >
                      <Image
                        src={image.url}
                        alt={image.name || product.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* =================================================
                PRODUCT DETAILS
            ================================================= */}

            <div className="py-4">

              {/* CATEGORY */}

              {product.productCat && (
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-neutral-400
                    mb-3
                  "
                >
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

<div className="flex w-full  rounded-xl py-2 mt-4">

              <CartButtonAddBold
                cartProduct={{
                  id: product.id,
                  productMode: product.id,
                  price: product.price,
                 // basePrice: product.basePrice,
                  quantity: 1,
                  currentStock: product.currentStock ?  product.currentStock : null,
                  categoryId: product.id,
                  productCat: product.id,
                  name: product.id,
                  image: product.id,
                  taxRate: product.taxRate,
                  taxType: product.taxType,
                 // parentProductId: product.parren,
                  modifiers: [],
                 
                  note: "",
                  uniqueKey: product.id.toString(),
                }}
              />
</div>
              {/* DESCRIPTION */}

              <div className="mt-8">

                <h2 className="text-lg font-semibold text-neutral-900 mb-3">
                  Description
                </h2>

                <p
                  className="
                    text-neutral-600
                    leading-7
                    whitespace-pre-line
                  "
                >
                  {product.productDesc || "No description available."}
                </p>

              </div>

            </div>
          </div>

          {/* =================================================
              PRODUCT IMAGE GALLERY
          ================================================= */}

          {/* {galleryImages.length > 0 && (
            <section className="mt-12">

              <h2 className="text-lg font-semibold text-neutral-900 mb-5">
                More Images
              </h2>

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  md:grid-cols-4
                  gap-5
                "
              >
                {galleryImages.map((image) => {

                  const imageIndex = allImages.findIndex(
                    (item) => item.id === image.id
                  );

                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => {
                        setSelectedImageIndex(
                          imageIndex >= 0 ? imageIndex : 0
                        );

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="
                        group
                        relative
                        aspect-square
                        overflow-hidden
                        rounded-2xl
                        bg-neutral-100
                        text-left
                        focus:outline-none
                        focus:ring-2
                        focus:ring-neutral-900
                        focus:ring-offset-2
                      "
                    >
                      <Image
                        src={image.url}
                        alt={image.name || product.name}
                        fill
                        className="
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      />

                     

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          bg-black/0
                          transition-all
                          duration-300
                          group-hover:bg-black/20
                        "
                      >
                        <ZoomIn
                          className="
                            w-7
                            h-7
                            text-white
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

            </section>
          )} */}

        </div>
      </main>

      {/* =====================================================
          FULLSCREEN LIGHTBOX
      ===================================================== */}

      {isLightboxOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/95
            flex
            items-center
            justify-center
            p-4
          "
          role="dialog"
          aria-modal="true"
          aria-label="Product image viewer"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >

          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={closeLightbox}
            className="
              absolute
              top-5
              right-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur
              transition
              hover:bg-white/20
            "
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* =================================================
              IMAGE COUNTER
          ================================================= */}

          {allImages.length > 1 && (
            <div
              className="
                absolute
                top-6
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-white/10
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur
              "
            >
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          )}

          {/* =================================================
              PREVIOUS BUTTON
          ================================================= */}

          {allImages.length > 1 && (
            <button
              type="button"
              onClick={goToPreviousImage}
              className="
                absolute
                left-4
                sm:left-8
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur
                transition
                hover:bg-white/20
              "
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* =================================================
              LARGE LIGHTBOX IMAGE
          ================================================= */}

          <div
            className="
              relative
              w-full
              max-w-5xl
              h-[80vh]
            "
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* =================================================
              NEXT BUTTON
          ================================================= */}

          {allImages.length > 1 && (
            <button
              type="button"
              onClick={goToNextImage}
              className="
                absolute
                right-4
                sm:right-8
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur
                transition
                hover:bg-white/20
              "
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          {/* =================================================
              LIGHTBOX THUMBNAILS
          ================================================= */}

          {allImages.length > 1 && (
            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                flex
                max-w-[90vw]
                gap-2
                overflow-x-auto
                rounded-xl
                bg-black/40
                p-2
                backdrop-blur
              "
            >
              {allImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`
                    relative
                    h-14
                    w-14
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    border-2
                    transition
                    ${selectedImageIndex === index
                      ? "border-white"
                      : "border-transparent opacity-60 hover:opacity-100"
                    }
                  `}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={image.url}
                    alt={image.name || product.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

        </div>
      )}
    </>
  );
}
