// components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Ayesha Rahman",
    location: "Dhaka, Bangladesh",
    avatar:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "The ergonomic chair completely changed my work-from-home experience. Super comfortable even after 10+ hours!",
  },
  {
    name: "Rahim Khan",
    location: "Chittagong, Bangladesh",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Fast delivery, perfect packaging. The laptop and headphones combo is exactly what I needed!",
  },
  {
    name: "Sarah Mitchell",
    location: "London, United Kingdom",
    avatar:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "International shipping was surprisingly fast. Smart watch is beautiful and tracking is very accurate!",
  },
  {
    name: "Sakib Ahmed",
    location: "Sylhet, Bangladesh",
    avatar:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop", // Updated: New high-quality portrait
    rating: 5,
    text: "Electric standing desk is sturdy and easy to set up. Best purchase for my home office this year!",
  },
  {
    name: "Emily Chen",
    location: "Singapore",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Noise-cancelling headphones are incredible — battery life is insane and sound quality is top tier.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-4 md:py-8 bg-linear-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 md:mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Loved by Thousands of Customers
          </h2>
          <p className="mt-2 text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
            4.8 ★★★★★ average rating from 2,347+ verified customers worldwide
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-8!"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div className="p-5 md:p-6 flex flex-col grow">
                      {/* Avatar + Info */}
                      <div className="flex items-center gap-4 mb-2.5">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-100">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 md:text-lg text-sm">
                            {review.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500">
                            {review.location}
                          </p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-2.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="md:w-5 w-3.5 h-3.5 md:h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base grow">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
