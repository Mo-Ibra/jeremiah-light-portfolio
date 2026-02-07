"use client";

import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Mock Data
const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
  },
  {
    id: 2,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
  },
  {
    id: 3,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
  },
  {
    id: 4,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
  },
];

const TEXT_TESTIMONIALS = [
  {
    id: 1,
    text: "Navigating the complexities of CMMC compliance was daunting for our team. Get Compliant Now provided clear, step-by-step guidance tailored to our organization's needs.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatar: "/images/new-testimonials/testimonials-2.png",
    rating: 5,
  },
  {
    id: 2,
    text: "Their deep understanding of the latest DoD standards ensured we met all requirements efficiently.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatar: "/images/new-testimonials/testimonials-2.png",
    rating: 5,
  },
  {
    id: 3,
    text: "Navigating the complexities of CMMC compliance was daunting for our team. Get Compliant Now provided clear, step-by-step guidance tailored to our organization's needs.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatar: "/images/new-testimonials/testimonials-2.png",
    rating: 5,
  },
];

export const NewTestimonials = () => {
  return (
    <section className="px-6 md:py-24 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl mb-12">
        {/* Header */}
        <SectionHeader badgeText="Testimonials" className="md:mb-8 mb-4">
          <h2 className="text-3xl md:text-[40px] font-semibold text-gray-900 mb-4 tracking-tight">
            Thinking about <span className="text-primary">Working With Us?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear about what our clients have to say first
          </p>
        </SectionHeader>
      </div>

      <div className="flex flex-col gap-10">
        {/* Top Carousel - Right to Left (Video Cards) */}
        <div className="relative w-full flex overflow-hidden mask-linear-fade">
          {/* Gradient Masks for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 min-w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS].map((item, index) => (
              <div
                key={`video-${index}`}
                className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden shadow-lg bg-white flex-shrink-0 group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600/90 flex items-center justify-center text-white shadow-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>

                {/* Bottom Detail */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-md flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative border border-gray-200">
                      <Image src={item.thumbnail} alt={item.name} fill className="object-cover" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm hidden sm:block">{item.name}</span>
                  </div>
                  <div className="flex gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Carousel - Left to Right (Text Cards) */}
        <div className="relative w-full flex overflow-hidden mask-linear-fade">
          {/* Gradient Masks for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 min-w-max px-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 45,
            }}
          >
            {[...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS].map((item, index) => (
              <div
                key={`text-${index}`}
                className="w-[350px] p-8 rounded-2xl bg-white shadow-sm border border-gray-100 flex-shrink-0 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="mb-6">
                  <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-1 mb-6 text-yellow-500 text-sm">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gray-100">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonials;