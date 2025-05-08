"use client";

import Image from "next/image";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, EffectFade, Autoplay } from "swiper/modules";

interface SwiperProps {
  images: string[];
}

const Swiper = ({ images }: SwiperProps) => {
  // Common Swiper configuration
  const paginationConfig = {
    clickable: true,
    dynamicBullets: true,
  };

  const autoplayConfig = {
    delay: 5000,
    disableOnInteraction: false,
  };

  // Style objects using Tailwind's variables
  const mainSwiperStyle = {
    "--swiper-pagination-color": "#3b82f6",
    "--swiper-pagination-bullet-inactive-color": "#cbd5e1",
    "--swiper-pagination-bullet-inactive-opacity": "0.5",
  } as React.CSSProperties;

  const imageSwiperStyle = {
    "--swiper-pagination-color": "#1f2937",
    "--swiper-pagination-bullet-inactive-color": "#9ca3af",
    "--swiper-pagination-bullet-inactive-opacity": "0.5",
  } as React.CSSProperties;

  return (
    <div className="w-full flex flex-col gap-8">
      <SwiperComponent
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={paginationConfig}
        autoplay={autoplayConfig}
        style={mainSwiperStyle}
        grabCursor={true}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row gap-8 items-start py-8">
              <div className="w-full rounded-sm overflow-hidden">
                <SwiperComponent
                  modules={[Pagination, EffectFade, Autoplay]}
                  effect="fade"
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  pagination={paginationConfig}
                  autoplay={{
                    ...autoplayConfig,
                    delay: 3000,
                  }}
                  style={imageSwiperStyle}
                  grabCursor={true}
                >
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center">
                      <div className="relative w-full h-72 md:h-128">
                        <Image
                          src={image}
                          alt={`gallery ${index + 1}`}
                          fill
                          className="rounded-sm object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </SwiperComponent>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default Swiper;