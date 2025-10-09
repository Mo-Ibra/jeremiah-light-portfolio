"use client";

import { portfolioReels } from "@/data/data";
import VideoReelCard from "@/components/VideoReelCard";
import SectionHeader from "./SectionHeader";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="portfolio relative overflow-hidden z-0 py-20 px-4"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <SectionHeader badgeText="Creative Portfolio" marginBottom="0">
          <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 mb-6">
            The <span className="text-primary">Creative Styles</span> Trusted by{" "}
            <span className="text-primary">6, 7, and 8-Figure Brands</span>
          </h2>
          <p className="text-xl font-semibold text-gray-600 max-w-5xl mx-auto leading-relaxed">
            See the data-driven UGC, AI-generated, and Studio ads that form the
            backbone of a high-performance creative strategy. This is what
            allows top brands to profitably acquire new customers with
            confidence
          </p>
        </SectionHeader>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-3 lg:gap-5 mx-auto max-w-max mb-20">
          {portfolioReels.map((reel, index) => (
            <VideoReelCard key={index} {...reel} />
          ))}
        </div>

        <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-primary rounded-lg shadow-md font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto my-12 border-2 border-primary">
          <span>Get Performative Advertisements Today</span>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
