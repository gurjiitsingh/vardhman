import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import CartBottomWrapper from "@/components/CartBottom/CartBottomWrapper";
import "@/css/style.css";
import UTMInitializer from "../UTMInitializer";
import { Providers } from "../Providers";
import SafeSideCart from "./SafeSideCart";

import { BargerMenu } from "@/components/Bargermenu/Menu";
import Modal from "@/components/level-1/Modal";
import Header from "@/custom/cus-components/Header";


import { SEO } from "@/config/languages";
import { getDynamicSEO } from "@/lib/seo/getSeo";




import FooterWrapper from "@/components/FooterWrapper";


export async function generateMetadata(): Promise<Metadata> {
  const dynamicSEO = await getDynamicSEO();

  const title = dynamicSEO?.title || SEO.title;
  const description =
    dynamicSEO?.description || SEO.description;

  const siteUrl =
    dynamicSEO?.url ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://yourdomain.com";

  const ogImage =
    dynamicSEO?.ogImage ||
    `${siteUrl}/og-image.jpg`;

  return {
    title,
    description,

    metadataBase: new URL(siteUrl),

    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: title,
      type: "website",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}