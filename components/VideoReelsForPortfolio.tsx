"use client";

import "../styles/video-reels.css";

import React from "react";
import VideoReelCard from "@/components/VideoReelCard";
import { portfolioReels } from "@/data/data";
import SectionHeader from "./SectionHeader";
import BlurCircle from "./BlurCircle";

const VideoReelsForPortfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden pt-24 md:pt-36 z-0">
      <BlurCircle top="200px" />
      <BlurCircle left="1500px" top="900px" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <SectionHeader badgeText="Creative Portfolio" className="md:mb-0 mb-2">
          <h2 className="text-2xl md:text-[40px] font-bold text-gray-900 mb-6">
            The <span className="text-primary">Creative Styles</span> Trusted by{" "}
            <span className="text-primary">6, 7, and 8-Figure Brands</span>
          </h2>
          <p className="text-base md:text-2xl font-semibold text-[#00000073] max-w-5xl mx-auto leading-relaxed">
            See the data-driven UGC, AI-generated, and Studio ads that form the
            backbone of a high-performance creative strategy. This is what
            allows top brands to profitably acquire new customers with
            confidence
          </p>
        </SectionHeader>

        {/* Reels Grid */}
        <div className="columns-2 sm:columns-2 lg:columns-3 md:gap-2 lg:gap-5 mx-auto max-w-max mb-20">
          {portfolioReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>

        <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-primary rounded-full shadow-md font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto my-12 border-2 border-primary">
          <span>Schedule Free Ads Audit Today</span>
        </button>
      </div>
    </section>
  );
};

export default VideoReelsForPortfolio;
