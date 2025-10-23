"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LogoCarousel from "./LogoCarousel";

const HeroForPortfolio = () => {
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
    <section className="flex justify-center items-center md:min-h-[95vh] z-40 relative overflow-hidden py-4 md:py-0 md:m-6 rounded-b-3xl md:rounded-3xl">
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center 
             bg-[url('/images/hero/hero-mobile-bg.png')] 
             md:bg-[url('/images/hero/hero-bg.png')]"
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 px-8 max-w-[85rem] mx-auto w-full mt-10 md:mt-64 lg:mt-0">
        {/* Top Section - Centered Text */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-8 mt-20 lg:mt-40">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-1 border border-green-400 bg-[#eff1fe] rounded-full text-[#0ea300] text-[10px] md:text-sm font-semibold mb-4 md:mb-6">
            <div className="w-2 h-2 bg-[#00c514] rounded-full mr-2"></div>
            Partnering with 1 more brand this month
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[70px] mb-4 md:mb-6 leading-tight bg-gradient-to-r from-[#5360C2] to-[#272E5C] bg-clip-text text-transparent font-instrument">
            We Tell Stories and
            <br />
            Solve Problems
          </h1>

          {/* Description Text */}
          <p className="text-xs md:text-[15px] text-black mb-2 leading-relaxed max-w-2xl">
            See the data-driven UGC, AI-generated, and High Production ads that
            form the backbone of a high-performance creative strategy. These
            style are what allow top brands to profitably acquire new customers
            with confidence
          </p>
          {/* <p className="text-xs md:text-[15px] text-black mb-6 leading-relaxed max-w-2xl">
            Creative Strategy, Copywriting, Funnels, Post Production, Ads and
            Campaign Structure - done with and for you.
          </p> */}
        </div>

        {/* CTA Buttons - Centered Below */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8 md:my-14">
          <button
            onClick={() => (location.href = "#portfolio")}
            className="px-6 py-3 md:px-8 md:py-3 w-fit mx-auto cursor-pointer bg-primary font-bold text-white rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Take a look</span>
            <Image
              src="/images/button-arrow.svg"
              alt="Arrow Icon"
              width={16}
              height={16}
              className="w-3 md:w-4 h-3 md:h-4"
            />
          </button>
        </div>

        {/* Social Proof - Centered Below Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 text-gray-600 justify-center md:mt-20 mt-10 mb-10">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden"
              >
                <Image
                  src={`/images/hero/avatars-2/${num}.jpg`}
                  width={40}
                  height={40}
                  alt={`Avatar ${num}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text + Shopify */}
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <p className="font-bold text-gray-800 text-sm">
              Trusted by 86+ Shopify{" "}
            </p>
            <Image
              src="/images/hero/shopify.png"
              alt="Shopify"
              className="h-5 md:h-6"
              height={20}
              width={20}
            />
            <p className="font-bold text-gray-800 text-sm">Brands</p>
          </div>
        </div>

        {/* Logo Carousel - At the Bottom */}
        <div className="w-full relative bottom-4 md:bottom-0">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroForPortfolio;
