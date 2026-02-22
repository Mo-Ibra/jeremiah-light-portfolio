"use client";

import "../styles/video-reels.css";

import React, { useState } from "react";
import { portfolioReels } from "@/data/data";
import SectionHeader from "./SectionHeader";
import BlurCircle from "./BlurCircle";
import VideoReelCardForPortfolio from "@/components/VideoReelCardForPortfolio";
import Image from "next/image";

const VideoReelsForPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "UGC", "High-Production", "AI", "Statics"];

  // Filter the reels based on active filter
  const filteredReels =
    activeFilter === "All"
      ? portfolioReels
      : portfolioReels.filter((reel) => reel.category === activeFilter);

  return (
    <section id="portfolio" className="relative overflow-hidden pt-6 md:pt-12">
      <BlurCircle top="700px" />
      <BlurCircle top="1200px" left="1400px" blur="350px" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <SectionHeader
          badgeText="Creative Portfolio"
          className="md:mb-0 mb-2"
          withLabel={false}
        >
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 mb-6">
            The <span className="text-primary">Creative Styles</span> Trusted by{" "}
            <span className="text-primary">7, 8, and 9-Figure Brands</span>
          </h2>
        </SectionHeader>

        {/* Filter Buttons */}
        <div className="flex items-center flex-wrap justify-center gap-3 pt-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-5 py-2 rounded-full text-sm transition-all duration-200 font-semibold z-50 text-[15px]
                ${activeFilter === filter
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-transparent text-primary hover:bg-gray-50 "
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-5 mx-auto max-w-max mb-20 gap-2 sm:gap-3">
          {filteredReels.map((reel) => (
            <VideoReelCardForPortfolio key={reel.id} {...reel} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5 mb-12 md:mt-10 md:mb-16">
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
      </div>
    </section>
  );
};

export default VideoReelsForPortfolio;
