"use client";

import "../styles/video-reels.css";

import { useState } from "react";
import VideoReelCard from "@/components/VideoReelCard";
import { videoReels } from "@/data/data";
import Link from "next/link";

const VideoReelsCarousel = () => {
  const [touchingTop, setTouchingTop] = useState(false);

  return (
    <section id="portfolio" className="relative overflow-hidden z-0 bg-white" style={{
    }}>
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
        
        .paused .animate-marquee-rtl,
        .paused .animate-marquee-ltr {
          animation-play-state: paused;
        }

        @media (min-width: 768px) {
          .pause-on-hover:hover .animate-marquee-rtl,
          .pause-on-hover:hover .animate-marquee-ltr {
            animation-play-state: paused;
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-8 md:mb-16">
        <div className="text-center mb-2 sm:mb-4 lg:mb-6 tracking-tight opacity-0 translate-y-5 animate-[fadeInUp_1s_ease_forwards]">
          <p className="text-2xl md:text-4xl text-black font-semibold md:leading-12">
            <span className="text-primary">10,000+</span> Ads Created
            <br />
            <span className="text-primary">$10.25M+</span> In Sales Generated
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className={`relative w-full border-y border-gray-100 flex overflow-x-auto scrollbar-hide snap-x md:snap-none pause-on-hover${touchingTop ? ' paused' : ''}`}
          onTouchStart={() => setTouchingTop(true)}
          onTouchEnd={() => setTouchingTop(false)}
          onTouchCancel={() => setTouchingTop(false)}
        >
          {/* Gradient Masks */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-rtl gap-4 md:gap-8 py-4 md:py-8">
            {[...videoReels, ...videoReels, ...videoReels, ...videoReels].map((item, index) => (
              <div key={`video-${index}`} className="flex-shrink-0">
                <VideoReelCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <Link
          href="/portfolio"
          className="group relative overflow-hidden px-7 md:px-9 py-3 md:py-4 w-fit bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 text-white font-bold rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto md:my-12 my-6"
        >
          <span className="relative z-10">See Full Portfolio</span>
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[100%]" />
        </Link>
      </div>
    </section>
  );
};

export default VideoReelsCarousel;
