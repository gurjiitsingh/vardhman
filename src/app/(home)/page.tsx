// app/page.tsx

import { Suspense } from "react";
//import AOSInit from "@/components/AOSInit";

import HeroSectionCustom from "@/custom/cus-components/HeroSectionCustom";
import CategorySliderLight from "@/components/level-1/CategorySliderLight";
import Products from "@/components/level-1/Products";
import BestOfMonth from "@/custom/cus-components/BestOfMonth";
import ContactInfoWrapper from "@/components/ContactInfoWrapper";
import ProductsWrapper from "@/components/ProductsWrapper";
import HeroSlider from "@/custom/cus-components/HeroSlider";
import CategorySliderLightRound from "@/components/level-1/CategorySliderLightRound";

export default function Page() {
  return (
    <main className="pt-[100px] text-gray-900 font-sans">

      {/* ✅ Client-only animation init */}
      {/* <AOSInit /> */}

      {/* Sections */}
         <CategorySliderLightRound  />
      <HeroSlider />
      <HeroSectionCustom />
      <BestOfMonth />
   
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsWrapper />
      </Suspense>

      {/* ✅ Server async component with streaming */}
      <Suspense fallback={<div className="h-40" />}>
        <ContactInfoWrapper />
      </Suspense>

    </main>
  );
}