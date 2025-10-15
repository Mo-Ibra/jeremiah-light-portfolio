"use client";

import "../styles/video-reels.css";

import React from "react";
import VideoReelCard from "@/components/VideoReelCard";
import { portfolioReels } from "@/data/data";

const VideoReelsForPortfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#5360c226] pt-16 z-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center my-2 sm:my-4 lg:my-6 tracking-tight opacity-0 translate-y-5 animate-[fadeInUp_1s_ease_forwards]">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-bold">
            I&apos;ve created <span className="text-primary">1,000+</span> ads
            that
            <br />
            have generated <span className="text-primary">$1M+</span> in sales
          </p>
        </div>

        {/* Reels Grid */}
        <div className="columns-2 sm:columns-2 lg:columns-3 md:gap-2 lg:gap-5 mx-auto max-w-max mb-20">
          {portfolioReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReelsForPortfolio;
