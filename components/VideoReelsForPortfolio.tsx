"use client";

import "../styles/video-reels.css";

import React, { useState } from "react";
import VideoReelCard from "@/components/VideoReelCard";
import { portfolioReels } from "@/data/data";
import SectionHeader from "./SectionHeader";
import BlurCircle from "./BlurCircle";

const VideoReelsForPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "UGC", "Studio", "AI", "Statics"];

  // Filter the reels based on active filter
  const filteredReels =
    activeFilter === "All"
      ? portfolioReels
      : portfolioReels.filter((reel) => reel.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden pt-24 md:pt-36"
    >
      <BlurCircle top="200px" className="z-40" />
      <BlurCircle left="1500px" top="900px" className="z-40" />

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

        {/* Filter Buttons */}
        <div className="flex items-center flex-wrap justify-center gap-3 pt-6 z-[100]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 z-50
                ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-5 mx-auto max-w-max mb-20 gap-2 sm:gap-3">
          {filteredReels.map((reel, index) => (
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
