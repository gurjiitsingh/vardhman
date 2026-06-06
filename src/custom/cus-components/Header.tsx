"use client";

import { useEffect, useState } from "react";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import dynamic from "next/dynamic";
import Navbar from "@/components/level-2/Navbar";
import Login from "../../components/buttons/Login";
import { LanguageSwitcher } from "../../languages/LanguageSwitcher";
import Image from "next/image";

export const headerFlags = {
  SHOW_LANGUAGE_SWITCHER: process.env.NEXT_PUBLIC_SHOW_LANGUAGE_SWITCHER === "1",
  SHOW_LOGIN_BUTTON: process.env.NEXT_PUBLIC_SHOW_LOGIN_BUTTON === "1",
};

const FaBars = dynamic(
  () => import("react-icons/fa6").then((mod) => mod.FaBars),
  { ssr: false }
);

const Header = () => {
  const { bargerMenuToggle } = UseSiteContext();
  const [hasMounted, setHasMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 👈 when scroll > 50px -> header appears
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

  return (
   <header className="fixed top-0 left-0 w-full z-50">
  {/* Pink Top Bar */}
  <div
    className={`bg-pink-400 transition-all duration-300 overflow-hidden ${
      scrolled ? "h-0" : "h-14"
    }`}
  >
    <div className="h-14 flex items-center justify-center">
      Top Info Bar
    </div>
  </div>

  {/* Main Header */}
  <div className="bg-white shadow-sm h-20 relative">
    <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">

      <div>
        <button
          onClick={() => bargerMenuToggle(false)}
          className="lg:hidden p-2"
        >
          <FaBars size={28} />
        </button>

        <Navbar />
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={120}
          height={120}
          className="rounded-full border-4 border-white shadow-xl object-cover"
          priority
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Right side */}
      </div>

    </div>
  </div>
</header>
  );
};

export default Header;
