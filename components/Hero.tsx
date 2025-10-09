"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      className="flex justify-center items-center h-screen relative overflow-hidden py-12"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, transparent 70%, white 100%), url('/images/hero/sky-from-bottom.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Cloud */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Right Cloud */}
        <div className="absolute top-20 right-0 text-white opacity-80">
          <Image
            src={"/images/hero/cloud.png"}
            width={433}
            height={433}
            alt="Cloud"
          />
        </div>

        {/* Left Cloud */}
        {!isMobile && (
          <div className="absolute -top-32 left-0 rotate-180 text-white opacity-80">
            <Image
              src={"/images/hero/cloud.png"}
              width={433}
              height={433}
              alt="Cloud"
            />
          </div>
        )}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-8 max-w-[95rem] mx-auto w-full">
        {/* Top Section - Text and Video Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 w-full mb-8 mt-8 lg:mt-40">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl">
            {/* Status Badge */}
            <div className="mb-8 inline-flex items-center px-4 py-1 border border-green-400 bg-[#d4d4ff] rounded-full text-green-600 text-sm font-semibold">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              Partnering with 1 more brand this month
            </div>

            {/* Hero Text */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[90px] mb-6 leading-tight bg-gradient-to-r from-[#5360C2] to-[#272E5C] bg-clip-text text-transparent font-instrument">
              Performance Creative
              <br />
              for Scale-Stage Brands
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-xl">
              Our proven systems help DTC brands spending $20k-$100k/month scale
              their ad production and better understand their consumers - the
              result is profitable, sustainable growth in new-customer
              acquisition.
            </p>
          </div>

          {/* Right Column - Wistia Video */}
          <div className="relative w-full lg:w-1/2 max-w-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`wistia_embed wistia_async_hgkhne26m9 plugin_wistiaLogo=false volumeControl=false autoPlay=false relative w-full h-full  transition-[filter] duration-300 ease-in-out hover:brightness-110`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Centered Below */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="px-6 md:px-8 py-3 md:py-4 cursor-pointer bg-primary text-white rounded-lg shadow-xl font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
            <span>Schedule Free Ads Audit</span>
            <svg
              className="w-3 md:w-4 h-3 md:h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
            </svg>
          </button>

          <button className="px-6 md:px-8 py-3 md:py-4 cursor-pointer bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-xl font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
            <span>Show Me Some Proof First</span>
            <svg
              className="w-3 md:w-4 h-3 md:h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
            </svg>
          </button>
        </div>

        {/* Social Proof - Centered Below Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 text-gray-600 justify-center mb-12">
          {/* Avatars */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden"
              >
                <Image
                  src={`/images/hero/avatars-2/${num}.jpg`}
                  width={400}
                  height={400}
                  alt={`Avatar ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text + Shopify */}
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <p className="font-bold text-gray-800 text-sm md:text-base">
              Trusted by 86+ Shopify{" "}
            </p>
            <Image
              src="/images/hero/shopify.png"
              alt="Shopify"
              className="h-5 md:h-6"
              height={20}
              width={20}
            />
            <p className="font-bold text-gray-800 text-sm md:text-base">
              Brands
            </p>
          </div>
        </div>

        {/* Logo Carousel - At the Bottom */}
        <div className="w-full">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
