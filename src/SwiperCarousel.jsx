// src/components/SwiperCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const photos = [
  "/images/image3.jpg",
  "/images/image2.jpg",
  "/images/image1.jpg",
];

export default function SwiperCarousel() {
  return (
    <div className="w-full max-w-screen overflow-hidden shadow-2xl border-4 border-white rounded-3xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="!h-[100px]"
      >
        {photos.map((src, idx) => (
          <SwiperSlide key={idx} className="!h-[100px]">
            <img
              src={src}
              alt={`slide-${idx}`}
              style={{ maxHeight: "400px", width: "auto", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
