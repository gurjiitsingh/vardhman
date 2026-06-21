"use client";

import { useEffect, useState, useMemo } from "react";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import dynamic from "next/dynamic";
import { ProductType } from "@/lib/types/productType";
import { addOnType } from "@/lib/types/addOnType";
import Link from "next/link";
//import ProdcutCardHorizontical19 from "../custom/cus-componets/ProductCard-h19"

// export type ProductType = {
//   id: string;
//   name: string;
//   price: number;
//   image?: string;
//   categoryId: string;
//   sortOrder?: number; 
//   [key: string]: any;
// };
export default function Products({ initialProducts }: { initialProducts: ProductType[] }) {
  const { productCategoryIdG, settings, setAllProduct, productToSearchQuery } =
    UseSiteContext();


  const [products, setProducts] = useState<ProductType[]>([]);
const [variant, setVariant] = useState<ProductType[]>([]);
const [allProducts, setAllProductsLocal] = useState<ProductType[]>(initialProducts || []);
  const [addOns, setAddOns] = useState<addOnType[]>([]);
  const [categoryId, setCategoryId] = useState("");

  const [modifierGroups, setModifierGroups] = useState<any[]>([]);
const [productModifiers, setProductModifiers] = useState<any[]>([]);



  const cardType = process.env.NEXT_PUBLIC_PRODUCT_CARD_TYPE;

  //  DYNAMIC IMPORT — SAFE, NO RERENDER LOOP

  const Card = useMemo(() => {
    switch (cardType) {
      case "1":
        return dynamic(() => import("../level-2/ProductCard-h1"));
      case "11":
        return dynamic(() => import("../level-2/ProductCard-h1_1"));
      case "111":
        return dynamic(() => import("../level-2/ProductCard-h1_1_1"));
      case "16":
        return dynamic(() => import("../level-2/ProductCardPOS-h1_6"));
      case "13":
        return dynamic(() => import("../level-2/ProductCard-h1_3"));

      case "14":
        return dynamic(() => import("../level-2/ProductMenuCard-h1_4"));
      case "15":
        return dynamic(() => import("../level-2/ProductMenuCard-h1_5"));
      case "12":
        return dynamic(
          () => import("@/custom/cus-components/ProductCard-custom")
        );
      case "19":
        return dynamic(() => import("../level-2/ProductCard-h12"));
      case "2":
        return dynamic(() => import("../level-2/ProductCard-v2"));
      case "3":
        return dynamic(() => import("../level-2/ProductCard-v3"));
      case "4":
        return dynamic(() => import("../level-2/ProductCard-v4"));
      case "5":
        return dynamic(() => import("../level-2/ProductCard-v5"));
      case "6":
        return dynamic(() => import("../level-2/ProductCard-h6"));
      case "7":
        return dynamic(() => import("../level-2/ProductCard-v7"));
      default:
        return dynamic(() => import("../level-2/ProductCard-h1"));
    }
  }, [cardType]);

  //  Set initial category (runs only when settings OR global id changes)

  useEffect(() => {
    if (!settings?.display_category && !productCategoryIdG) return;

    const fallback = settings.display_category ?? "";

    setCategoryId(String(productCategoryIdG || fallback));
  }, [settings, productCategoryIdG]);

  //  Fetch ONCE (no remount loop now)
useEffect(() => {
  if (!initialProducts?.length) return;

  const published = initialProducts.filter(
    (p) => p.publishStatus === "published"
  );

  const sorted = [...published].sort(
    (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
  );

  const parents = sorted.filter((p) => p.type === "parent");
  const variants = sorted.filter((p) => p.type === "variant");

  setAllProductsLocal(parents);
  setAllProduct(parents);
  setVariant(variants);

  // ✅ IMPORTANT: set default products immediately
setProducts(
  categoryId
    ? parents.filter((p) => p.categoryId === categoryId)
    : parents
);

}, [initialProducts]);



  //  Category filter
  useEffect(() => {
    if (!categoryId) {
      setProducts(allProducts);
      return;
    }
    setProducts(allProducts.filter((p) => p.categoryId === categoryId));
  }, [categoryId, allProducts]);

  //  Search filter
  useEffect(() => {
    if (!productToSearchQuery) {
      setProducts(allProducts);
      return;
    }

    setProducts(
      allProducts.filter((p) =>
        p.name.toLowerCase().includes(productToSearchQuery.toLowerCase())
      )
    );
  }, [productToSearchQuery]);


useEffect(() => {
  const timer = setTimeout(async () => {
    try {
      console.log("🚀 Fetching modifiers...");

      const [groupsRes, mappingRes] = await Promise.all([
        fetch("/api/modifier-groups"),
        fetch("/api/product-modifiers"),
      ]);

   if (!groupsRes.ok || !mappingRes.ok) {
  throw new Error("API error");
}

const groupsData = await groupsRes.json();
const mappingData = await mappingRes.json();

      setModifierGroups(groupsData);
      setProductModifiers(mappingData);

      // ✅ JUST LOG (important step)
      // console.log("✅ modifierGroups:", groupsData);
      // console.log("✅ productModifiers:", mappingData);

    } catch (err) {
      console.error("❌ Error fetching modifiers", err);
    }
  }, 1200);

  return () => clearTimeout(timer);
}, []);
  //  Layout logic (unchanged)
  let containerClass = "";
  switch (cardType) {
    case "1":
      containerClass =
        "flex flex-col justify-between md:flex-row md:flex-wrap gap-3 md:gap-5 ";
      break;
    case "11":
      containerClass =
        "flex flex-col justify-between md:flex-row md:flex-wrap gap-2 md:gap-2";
      break;
    case "12":
      containerClass =
        "flex flex-col justify-between md:flex-row md:flex-wrap gap-3 md:gap-5";
      break;
    case "2":
    case "3":
      containerClass =
        "flex flex-col md:flex-row justify-between md:flex-wrap gap-3 md:gap-5 justify-center";
      break;
    case "4":
      containerClass =
        "grid grid-cols-2 justify-between sm:grid-cols-4 lg:grid-cols-6 gap-3";
      break;
    case "5":
      containerClass =
        "grid grid-cols-2 justify-between sm:grid-cols-3 lg:grid-cols-4 gap-3";
      break;
    case "6":
      containerClass =
        "flex flex-col justify-between md:flex-row md:flex-wrap gap-3 md:gap-5";
      break;
    case "7":
      containerClass =
        "grid grid-cols-2 justify-between sm:grid-cols-4 lg:grid-cols-6 gap-3";
      break;
    case "16":
      containerClass =
        "flex flex-col justify-between md:flex-row md:flex-wrap gap-1 md:gap-1";
      break;
    default:
      containerClass =
        "flex flex-col justify-between md:flex-row md:flex-wrap gap-3 md:gap-5";
  }

 return (
  <section className="relative py-16 md:py-24 bg-white overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-100/70 blur-[140px] rounded-full" />

    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-100/60 blur-[140px] rounded-full" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p 
         data-aos="fade-left"
         data-aos-duration="2000"
        className="uppercase tracking-[5px] text-sm text-neutral-500 mb-4">
          Latest Collection
        </p>

        <h2 
            data-aos="fade-right"
        
        className="text-4xl md:text-6xl font-light text-neutral-900">
          New Arrivals
        </h2>

        <p
           data-aos="zoom-in-left"
        className="mt-6 text-neutral-500 leading-8 text-base md:text-lg">
          Refresh your wardrobe with our latest arrivals. Carefully curated
          pieces crafted with premium fabrics, timeless silhouettes, and modern
          details for effortless everyday style.
        </p>

        {/* Highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light text-neutral-900">
              {products.length}+
            </p>

            <p 
            data-aos="fade-left"
            className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
              New Arrivals
            </p>
          </div>

          <div className="hidden md:block h-12 w-px bg-neutral-200" />

          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light text-neutral-900">
              Premium
            </p>

            <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
              Quality
            </p>
          </div>

          <div className="hidden md:block h-12 w-px bg-neutral-200" />

          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light text-neutral-900">
              Trend
            </p>

            <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
              Inspired
            </p>
          </div>

          <div className="hidden md:block h-12 w-px bg-neutral-200" />

          <div className="text-center">
            <p className="text-3xl md:text-4xl font-light text-neutral-900">
              Everyday
            </p>

            <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
              Comfort
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className={containerClass}>
        {products.map((product, i) => (
          <Card
            key={product.id ?? `${product.name}-${i}`}
            product={product}
            variants={variant}
            allAddOns={addOns}
            modifierGroups={modifierGroups}
            productModifiers={productModifiers}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p 
        data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
        className="uppercase tracking-[4px] text-sm text-neutral-500 mb-5">
          Discover More Styles
        </p>

       <Link
  href="/category"
  data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
  className="
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    border-neutral-900
    px-8
    py-3
    uppercase
    tracking-[2px]
    text-sm
    font-medium
    text-neutral-900
    transition-all
    duration-300
    hover:bg-neutral-900
    hover:text-white
  "
>
  View All Collection
</Link>
      </div>
    </div>
  </section>
);
}
