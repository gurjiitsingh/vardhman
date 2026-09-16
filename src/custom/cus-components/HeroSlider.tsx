"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { fetchCarousels } from "@/app/(universal)/action/carousel/carousel";

import "swiper/css";

type CarouselImage = {
  id: string;
  image: string;
  sortOrder: number;
  active: boolean;
};

export default function HeroSlider() {
  const [images, setImages] = useState<
    CarouselImage[]
  >([]);

  useEffect(() => {
    let cancelled = false;

    async function loadCarousels() {
      try {
        const carousels =
          await fetchCarousels();

        if (cancelled) {
          return;
        }

        const activeImages = carousels
          .filter(
            (carousel) =>
              carousel.active &&
              carousel.image
          )
          .sort(
            (a, b) =>
              (a.sortOrder ?? 0) -
              (b.sortOrder ?? 0)
          )
          .map((carousel) => ({
            id: carousel.id,
            image: carousel.image,
            sortOrder: carousel.sortOrder,
            active: carousel.active,
          }));

        setImages(activeImages);
      } catch (error) {
        console.error(
          "❌ Failed to load carousel images:",
          error
        );
      }
    }

    void loadCarousels();

    return () => {
      cancelled = true;
    };
  }, []);

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
        {images.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <img
              src={carousel.image}
              alt=""
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
 
