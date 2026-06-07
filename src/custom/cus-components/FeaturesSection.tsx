"use client";

import Image from "next/image";
import {
  FaTshirt,
  FaShippingFast,
  FaTags,
  FaGift,
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaTshirt />,
      title: "Daily New Arrivals",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
    },
    {
      icon: <FaTags />,
      title: "Affordable Prices",
    },
    {
      icon: <FaGift />,
      title: "Free Shipping Above ₹2500",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">

      {/* Decorative Flower */}
      <Image
        src="/flower.png"
        alt=""
        width={180}
        height={180}
        className="absolute right-0 bottom-0 opacity-15 hidden lg:block"
      />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-100/60 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/80
                backdrop-blur-xl
                rounded-[30px]
                border border-white
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                p-8
                flex
                flex-col
                items-center
                text-center
              "
            >
              {/* Icon */}
              <div className="
                w-16
                h-16
                rounded-full
                bg-pink-50
                text-pink-600
                flex
                items-center
                justify-center
                text-2xl
                mb-5
                group-hover:scale-110
                transition
              ">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-neutral-800 font-medium leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}