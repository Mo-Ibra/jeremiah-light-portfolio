"use client";

import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Play } from "lucide-react";

// Mock Data
const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
  {
    id: 2,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
  {
    id: 3,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
  {
    id: 4,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
];

const TEXT_TESTIMONIALS = [
  {
    id: 1,
    text: "Navigating the complexities of CMMC compliance was daunting for our team. Get Compliant Now provided clear, step-by-step guidance tailored to our organization's needs.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    rating: 5,
  },
  {
    id: 2,
    text: "Their deep understanding of the latest DoD standards ensured we met all requirements efficiently.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    rating: 5,
  },
  {
    id: 3,
    text: "Navigating the complexities of CMMC compliance was daunting for our team. Get Compliant Now provided clear, step-by-step guidance tailored to our organization's needs.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    rating: 5,
  },
  {
    id: 4,
    text: "Their deep understanding of the latest DoD standards ensured we met all requirements efficiently.",
    name: "Robert Jenkins",
    role: "Founder, ShieldWorks Enterprises",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    rating: 5,
  },
];

export const NewTestimonials = () => {
  return (
    <section className="px-6 md:py-24 py-16 overflow-hidden bg-white">
      <style jsx>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 45s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-rtl,
        .pause-on-hover:hover .animate-marquee-ltr {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl mb-16">
        <SectionHeader badgeText="Testimonials" className="md:mb-10 mb-6 text-center">
          <h2 className="text-3xl md:text-[45px] font-semibold text-gray-900 mb-4 tracking-tight">
            Thinking about <span className="text-primary">Working With Us?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Hear about what our clients have to say first
          </p>
        </SectionHeader>
      </div>

      <div className="flex flex-col">
        {/* Top Carousel - Right to Left (Video Panels) */}
        <div
          className="relative w-full border-y border-gray-100 flex overflow-hidden pause-on-hover"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-rtl">
            {[...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS].map((item, index) => (
              <div
                key={`video-${index}`}
                className="flex-shrink-0 px-10 py-12 border-r border-gray-300 group cursor-pointer bg-white"
              >
                <div className="relative w-[340px] flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full h-[535px] rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#4F46E5] flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4338CA]">
                        <Play fill="white" size={32} className="ml-1.5" />
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="pt-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                        <Image src={item.avatarImage} alt={item.name} fill className="object-cover" />
                      </div>
                      <span className="font-bold text-gray-900 text-base">{item.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/images/star.svg" alt="star" width={20} height={20} className="w-5 h-5" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Carousel - Left to Right (Text Panels) */}
        <div
          className="relative w-full border-b border-gray-100 flex overflow-hidden pause-on-hover"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-ltr">
            {[...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS].map((item, index) => (
              <div
                key={`text-${index}`}
                className="flex-shrink-0 px-10 py-16 border-r border-gray-100 bg-white group cursor-pointer"
              >
                <div className="w-[420px] flex flex-col justify-between h-full">
                  <div className="mb-8">
                    <p className="text-gray-700 text-xl leading-relaxed font-medium">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(item.rating)].map((_, i) => (
                      <Image key={i} src="/images/star.svg" alt="star" width={24} height={24} className="w-6 h-6" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative bg-gray-100 border border-gray-100">
                      <Image src={item.avatarImage} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h4>
                      <p className="text-base text-gray-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonials;