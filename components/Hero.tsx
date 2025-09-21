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
      className="flex justify-center items-center h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/hero/sky-from-bottom.png')",
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

      {/* Birds */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[370px] left-[90px] text-white opacity-80">
            <Image
              src={"/images/hero/birds.png"}
              width={433}
              height={433}
              alt="Birds"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8 text-center max-w-[30rem] md:max-w-max">
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center px-4 py-1 border border-green-400 bg-[#d4d4ff] rounded-full text-green-600 text-sm font-semibold mt-32">
          <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
          Partnering with 1 more brand this month
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 leading-tight bg-gradient-to-r from-[#5360C2] to-[#272E5C] bg-clip-text text-transparent">
          Creatives That{" "}
          <span className="italic font-serif font-light">Fly</span>
        </h1>

        <p className="text-lg sm:text-lg md:text-xl text-gray-800 max-w-xl md:max-w-2xl mb-12 leading-relaxed">
          Blending data, design, and marketing psychology to help DTC brands
          scale further through creative content that converts
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 mt-12">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg shadow-xl font-medium transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
            <span>I&apos;m Ready To Talk</span>
            <svg
              className="w-4 md:w-5 h-4 md:h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
            </svg>
          </button>

          <button className="px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-xl font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
            <span>Show Me Some Proof First</span>
            <svg
              className="w-4 md:w-5 h-4 md:h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
            </svg>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 text-gray-600 w-full justify-center">
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
            <img
              src="/images/hero/shopify.png"
              alt="Shopify"
              className="h-5 md:h-6"
            />
            <p className="font-bold text-gray-800 text-sm md:text-base">
              Brands
            </p>
          </div>
        </div>

        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
