"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const heroImages = [
  "https://images.pexels.com/photos/270588/pexels-photo-270588.jpeg?auto=compress&w=1920", // Keyboard
  "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&w=1920", // Drone
  "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&w=1920", // Watch
  "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&w=1920", // Chair
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {heroImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide}
                alt={slide}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover brightness-50"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/80" />

              {/* Content Layer: Framer Motion + Your Specific Content */}
              <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-5xl"
                >
                  <h1 className="text-2xl md:text-4xl font-black mb-4 drop-shadow-2xl leading-tight">
                    Upgrade Your{" "}
                    <span className="text-indigo-500">Lifestyle</span> Instantly
                  </h1>

                  <p className="text-md md:text-xl mb-7 drop-shadow-lg max-w-4xl mx-auto text-gray-200">
                    From Cyberpunk gear to Professional Drones — get the
                    highest-rated tech and furniture delivered to your door.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 md:gap-6 justify-center">
                    {/* Primary Action */}
                    <Link
                      href="/items"
                      className="btn btn-secondary btn-outline font-bold transition-all duration-300 transform hover:scale-105 "
                    >
                      Shop Now
                    </Link>

                    {/* Secondary Action */}
                    <Link
                      href="#bestsellers"
                      className="btn btn-ghost btn-outline font-bold"
                    >
                      Explore Best Sellers
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
