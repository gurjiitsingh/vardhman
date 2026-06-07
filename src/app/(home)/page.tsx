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
import FeaturesSection from "@/custom/cus-components/FeaturesSection";
import FashionCategories from "@/custom/cus-components/FashionCategories";
import LuxuryDivider from "@/custom/cus-components/LuxuryDivider";

export default function Page() {
  return (
    <main className="pt-[80px] text-gray-900 font-sans">

      {/* ✅ Client-only animation init */}
      {/* <AOSInit /> */}

      {/* Sections */}
      <CategorySliderLightRound />
      <HeroSlider />
        <FashionCategories />
      <FeaturesSection />

    
      <LuxuryDivider />
      <CategorySliderLight />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsWrapper />
      </Suspense>

      <HeroSectionCustom />
      <BestOfMonth />



      {/* ✅ Server async component with streaming */}
      <Suspense fallback={<div className="h-40" />}>
        <ContactInfoWrapper />
      </Suspense>

    </main>
  );
}