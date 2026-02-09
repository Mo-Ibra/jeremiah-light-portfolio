"use client";

import SectionHeader from "./SectionHeader";
import { VideoCard } from "./VideoCard";
import { VIDEO_TESTIMONIALS, TEXT_TESTIMONIALS } from "@/data/testimonials";
import { TextTestimonialCard } from "./TextTestimonialCard";
import Image from "next/image";

export const NewTestimonials = () => {
  return (
    <section className="px-4 py-4 md:px-6 md:py-6 overflow-hidden bg-white" id="testimonials">
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

      <div className="mx-auto max-w-7xl mb-8 md:mb-16">
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
          <div className="absolute left-0 top-0 bottom-0 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-rtl">
            {[...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS].map((item, index) => (
              <VideoCard key={`video-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Carousel - Left to Right (Text Panels) */}
        <div
          className="relative w-full flex overflow-hidden pause-on-hover"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-ltr">
            {[...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS].map((item, index) => (
              <TextTestimonialCard key={`text-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row justify-center gap-4 my-4">
        <button
          onClick={() => (location.href = "#cta")}
          className="group relative overflow-hidden px-6 py-3 md:px-8 md:py-3 w-fit mx-auto cursor-pointer bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 font-bold text-white rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>Schedule Free Ads Audit</span>
            <Image
              src="/images/arrow-white.svg"
              alt="Arrow Icon"
              width={16}
              height={16}
              className="w-3 md:w-4 h-3 md:h-4"
            />
          </span>
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[100%]" />
        </button>
      </div>
    </section>
  );
};

export default NewTestimonials;