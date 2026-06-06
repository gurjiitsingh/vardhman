"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full"
      >
        <SwiperSlide>
          <img
            src="/2.webp"
            alt="Slide 1"
            className="w-full h-auto"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/4.webp"
            alt="Slide 2"
            className="w-full h-auto"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/3.webp"
            alt="Slide 3"
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}