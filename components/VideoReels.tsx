"use client";

import "../styles/video-reels.css";

import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import VideoReelCard from "@/components/VideoReelCard";
import { videoReels, portfolioReels } from "@/data/data";

type ButtonConfig = {
  text: string;
  icon: string;
  action: () => void;
} | null;

const VideoReels = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  // const [isExpanded, setIsExpanded] = useState(false);

  // Check if device is mobile
  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset visible count when switching between mobile/desktop
  useEffect(() => {
    if (isMobile === null) {
      setVisibleCount(videoReels.length);
      // setIsExpanded(false);
    } else {
      setVisibleCount(4);
      // setIsExpanded(false);
    }
  }, [isMobile]);

  // Choose data source based on device
  const reelsData = isMobile ? portfolioReels : videoReels;
  const displayedReels = isMobile
    ? reelsData.slice(0, visibleCount)
    : reelsData;
  // const hasMore = isMobile && visibleCount < reelsData.length;
  // const isFullyExpanded = isMobile && visibleCount >= reelsData.length;

  // const handleWantMore = () => {
  //   const newCount = Math.min(visibleCount + 4, reelsData.length);
  //   setVisibleCount(newCount);
  //   setIsExpanded(true);
  // };

  // const handleCollapse = () => {
  //   setVisibleCount(4);
  //   setIsExpanded(false);
  // };

  // Determine button text and action
  // const getButtonConfig = (): ButtonConfig => {
  //   if (!isExpanded && visibleCount === 4) {
  //     return { text: "See Full Portfolio", icon: "→", action: handleWantMore };
  //   } else if (hasMore) {
  //     return { text: "Want More?", icon: "+", action: handleWantMore };
  //   } else if (isFullyExpanded) {
  //     return { text: "Collapse", icon: "−", action: handleCollapse };
  //   }
  //   return null;
  // };

  // const buttonConfig = useMemo<ButtonConfig>(getButtonConfig, [
  //   isExpanded,
  //   visibleCount,
  //   hasMore,
  //   isFullyExpanded,
  // ]);

  return (
    <section id="portfolio" className="relative overflow-hidden z-0">
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
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-2 sm:gap-3 lg:gap-5 mx-auto max-w-max mb-20">
          {displayedReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>

        {/* Dynamic Button - Mobile Only */}
        {/* {isMobile && buttonConfig && (
          <div className="flex justify-center my-4 md:my-8 md:hidden">
            <button
              onClick={buttonConfig.action}
              className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>{buttonConfig.text}</span>
              <span>{buttonConfig.icon}</span>
            </button>
          </div>
        )}

        {!isMobile && (
          <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-bold rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto my-12" onClick={() => location.href = "/portfolio"}>
            <span>See Full Portfolio</span>
            <span>→</span>
          </button>
        )} */}

        <a
          href="/portfolio"
          className="px-6 md:px-8 py-3 md:py-4 w-fit bg-primary text-white font-bold rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto my-12"
        >
          <span>See Full Portfolio</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default VideoReels;
