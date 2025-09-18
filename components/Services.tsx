"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Services = () => {
  const [aiContentSlide, setAiContentSlide] = useState(0);
  const [ugcSlide, setUgcSlide] = useState(0);
  const [studioSlide, setStudioSlide] = useState(0);

  const aiContentImages = [
    "/images/services/AI-Generated-Content/1.jpg",
    "/images/services/AI-Generated-Content/2.png",
    "/images/services/AI-Generated-Content/3.jpg",
  ];

  const ugcImages = [
    "/images/services/User-Generated-Content/1.png",
    "/images/services/User-Generated-Content/2.png",
    "/images/services/User-Generated-Content/3.png",
  ];

  const studioImages = [
    "/images/services/Studio-Content/1.jpg",
    "/images/services/Studio-Content/2.jpg",
    "/images/services/Studio-Content/3.png",
  ];

  const nextAiSlide = () =>
    setAiContentSlide((prev) => (prev + 1) % aiContentImages.length);
  const prevAiSlide = () =>
    setAiContentSlide(
      (prev) => (prev - 1 + aiContentImages.length) % aiContentImages.length
    );

  const nextUgcSlide = () =>
    setUgcSlide((prev) => (prev + 1) % ugcImages.length);

  const prevUgcSlide = () =>
    setUgcSlide((prev) => (prev - 1 + ugcImages.length) % ugcImages.length);

  const nextStudioSlide = () =>
    setStudioSlide((prev) => (prev + 1) % studioImages.length);
  const prevStudioSlide = () =>
    setStudioSlide(
      (prev) => (prev - 1 + studioImages.length) % studioImages.length
    );

  return (
    <section className="py-20 px-6">
      <div className="container max-w-[1400px] mx-auto">
        {/* Header */}
        <SectionHeader badgeText="My Services">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Here's What I Can Do For Your{" "}
            <span className="text-primary">Brand</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In terms of content, here is what I leverage to produce
            omni-channel, high-quality creative that drive remarkable results -
            in both acquisition and retention
          </p>
        </SectionHeader>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* AI Generated Content */}
          <div className="relative overflow-hidden rounded-3xl min-h-[600px] group pointer-events-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${aiContentImages[aiContentSlide]}')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>

            {/* Navigation arrows for AI content */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-opacity cursor-pointer z-10 pointer-events-auto"
              onClick={prevAiSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-opacity cursor-pointer z-10 pointer-events-auto"
              onClick={nextAiSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2 text-[#8994E9]">
                AI Generated Content
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Hyper-realistic AI generated content made for quick testing and
                iteration - so we can cut costs and scale at the speed of light.
              </p>
            </div>
          </div>

          {/* User Generated Content */}
          <div className="relative overflow-hidden rounded-3xl min-h-[600px] group pointer-events-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${ugcImages[ugcSlide]}')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>

            {/* Navigation arrows for AI content */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-opacity cursor-pointer z-10 pointer-events-auto"
              onClick={prevUgcSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-opacity cursor-pointer z-10 pointer-events-auto"
              onClick={nextUgcSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2 text-[#8994E9]">
                User Generated Content
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Customer-created content like reviews, photos, and posts that
                converts incredibly well, builds authentic trust, and real
                engagement.
              </p>
            </div>
          </div>

          {/* Studio Content */}
          <div className="relative overflow-hidden rounded-3xl min-h-[600px] group pointer-events-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${studioImages[studioSlide]}')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>

            {/* Navigation arrows for AI content */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-opacity cursor-pointer z-10 pointer-events-auto"
              onClick={prevStudioSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-opacity cursor-pointer z-10 pointer-events-auto"
              onClick={nextStudioSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2 text-[#8994E9]">
                Studio Content
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Professional, high-quality content created in-house that will
                WOW your consumers, build trust, and elevate your brand
                presence.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="inset-x-0 top-full flex justify-center pointer-events-none">
          <Image
            src="/images/services/line.svg"
            alt="Arrow Connector"
            width={800}
            height={200}
            className="w-full max-w-3xl h-auto"
          />
        </div>

        {/* Growth Engine Card - Centered and Smaller */}
        <div className="mt-8 flex justify-center">
          <div className="relative overflow-hidden rounded-3xl max-w-2xl w-full bg-gradient-to-t from-black via-[#0a0a1a] to-[#1a1a3a] shadow-2xl border-2 border-white">
            {/* Image */}
            <div className="relative z-10 w-full h-[250px] flex justify-center items-center">
              <Image
                src="/images/services/group.png"
                alt="Growth Chart"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="relative z-10 px-6 pb-8 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-xl md:text-3xl font-semibold">
                The Ultimate{" "}
                <span className="text-indigo-400 font-bold">Growth</span> Engine
                For DTC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
