"use client";

import Link from "next/link";
import React from "react";
import { useLanguage } from "@/store/LanguageContext";
import {
  Cinzel,
  Lato,
  Roboto,
  Abel,
} from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

const fonts = {
  Cinzel: cinzel,
  Abel: abel,
  Lato: lato,
  Roboto: roboto,
};

const fontTitle =
  fonts[
    process.env
      .NEXT_PUBLIC_FONT_TITLE as keyof typeof fonts
  ] || cinzel;

const fontDescription =
  fonts[
    process.env
      .NEXT_PUBLIC_FONT_DESCRIPTION as keyof typeof fonts
  ] || lato;

const fontPrice =
  fonts[
    process.env
      .NEXT_PUBLIC_FONT_PRICE as keyof typeof fonts
  ] || roboto;

type FooterLink = {
  href: string;
  name: string;
};

type Props = {
  outlet?: any;
};

export default function Footer({
  outlet,
}: Props) {
  const { TEXT, BRANDING } = useLanguage();

  const fallbackBrand = {
    brand_name:
      outlet?.outletName ||
      BRANDING?.brand_name ||
      "",

    poweredBy:
      BRANDING?.poweredBy ||
      "Powered by",

    poweredByUrl:
      BRANDING?.poweredByUrl ||
      "https://www.gstadeveloper.com",

    copyright: {
      prefix:
        BRANDING?.copyright?.prefix ||
        "Copyright ©",

      suffix:
        BRANDING?.copyright?.suffix ||
        "All Rights Reserved by",

      company:
        outlet?.outletName ||
        BRANDING?.copyright?.company ||
        "",
    },
  };

  const fallbackText = {
    logo_alt:
      TEXT?.logo_alt || "Logo",

    sections: {
      links: {
        title:
          BRANDING?.sections?.links
            ?.title || "Shop",

        items:
          BRANDING?.sections?.links
            ?.items || [
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Shop",
              href: "/shop",
            },
            {
              name: "Collections",
              href: "/collection",
            },
            {
              name: "About",
              href: "/about",
            },
            {
              name: "Contact",
              href: "/contact",
            },
          ],
      },

      company: {
        title:
          BRANDING?.sections?.company
            ?.title || "Company",

        items:
          BRANDING?.sections?.company
            ?.items || [
            {
              name: "Privacy Policy",
              href: "/privacy",
            },
            {
              name: "Terms of Service",
              href: "/terms",
            },
          ],
      },

      social: {
        title:
          BRANDING?.sections?.social
            ?.title || "Follow Us",
      },
    },
  };

  const companyName = outlet?.web
    ? new URL(
        outlet.web.startsWith("http")
          ? outlet.web
          : `https://${outlet.web}`
      ).hostname
    : outlet?.outletName ||
      fallbackBrand.brand_name;

  return (
    <footer className="relative overflow-hidden bg-white pt-30 pb-25">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#faf9f7,#f5f5f4,#ffffff)]" />

      {/* Luxury Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-amber-100/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-stone-100/60 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">

            <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">

              <Link href="/">
                <img
                  className="h-24 object-contain"
                  src={
                    outlet?.logo ||
                    "/logo.png"
                  }
                  alt={
                    fallbackText.logo_alt
                  }
                />
              </Link>

              <h3
                className={`${fontPrice.className} text-lg font-medium text-neutral-900 mt-4`}
              >
                {
                  fallbackBrand.brand_name
                }
              </h3>

              <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                Premium fashion for
                modern lifestyles.
              </p>

            </div>

          </div>

          {/* Shop Links */}
          <div>

            <h3
              className={`${fontTitle.className} text-sm font-semibold uppercase tracking-[4px] text-neutral-900 mb-5`}
            >
              {
                fallbackText.sections
                  .links.title
              }
            </h3>

            <ul className="space-y-3">

              {fallbackText.sections.links.items.map(
                (
                  item: FooterLink,
                  idx: number
                ) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className={`${fontDescription.className} text-neutral-600 hover:text-black transition duration-300`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3
              className={`${fontTitle.className} text-sm font-semibold uppercase tracking-[4px] text-neutral-900 mb-5`}
            >
              {
                fallbackText.sections
                  .company.title
              }
            </h3>

            <ul className="space-y-3">

              {fallbackText.sections.company.items.map(
                (
                  item: FooterLink,
                  idx: number
                ) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      className={`${fontDescription.className} text-neutral-600 hover:text-black transition duration-300`}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}

            </ul>

          </div>

          {/* Social */}
          <div>

            <h3
              className={`${fontTitle.className} text-sm font-semibold uppercase tracking-[4px] text-neutral-900 mb-5`}
            >
              {
                fallbackText.sections
                  .social.title
              }
            </h3>

            <p className="text-neutral-600 text-sm leading-relaxed">
              Follow us on social media
              for new arrivals, exclusive
              drops and seasonal
              collections.
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-200 mt-16 pt-8">

          <div className="flex flex-col items-center gap-3 text-center">

            <p className="text-sm text-neutral-500">

              {fallbackBrand.poweredBy}{" "}

              <a
                href={
                  fallbackBrand.poweredByUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-700 hover:text-black transition"
              >
                {
                  new URL(
                    fallbackBrand.poweredByUrl
                  ).hostname
                }
              </a>

            </p>

            <p className="text-sm text-neutral-500">

              {
                fallbackBrand
                  .copyright.prefix
              }{" "}
              {new Date().getFullYear()}{" "}
              {
                fallbackBrand
                  .copyright.suffix
              }{" "}

              <span className="font-semibold text-neutral-800">
                {companyName}
              </span>

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}