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
    <section className="flex justify-center items-center md:min-h-[95vh] z-40 relative overflow-hidden py-4 md:py-0 md:m-6 rounded-b-3xl md:rounded-3xl">
      <div
        className="absolute inset-0 pointer-events-none scale-150"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Right */}
        {/* <div className="absolute top-20 right-0 text-white opacity-80">
          <Image
            src={"/images/hero/cloud.png"}
            width={433}
            height={433}
            alt="Cloud"
          />
        </div> */}

        {/* Left */}
        {/* {!isMobile && (
          <div className="absolute -top-[450px] right-[1100px] text-white opacity-80">
            <Image
              src={"/images/hero/top-left-cloud.svg"}
              width={1058}
              height={1058}
              alt="Cloud"
            />
          </div>
        )} */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-8 max-w-[85rem] mx-auto w-full mt-10 md:mt-64 lg:mt-0">
        {/* Top Section - Text and Video Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 w-full mb-8 mt-8 lg:mt-24">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mt-6">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-1 border border-green-400 bg-[#eff1fe] rounded-full text-[#0ea300] text-sm font-semibold mb-4 md:mb-0">
              <div className="w-3 h-3 bg-[#00c514] rounded-full mr-2"></div>
              Partnering with 1 more brand this month
            </div>

            {/* Hero Text */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[70px] md:mb-6 leading-tight bg-gradient-to-r from-[#5360C2] to-[#272E5C] bg-clip-text text-transparent font-instrument">
              Performance Creative
              <br />
              for Scale-Stage Brands
            </h1>

            {/* Desktop Text - Hidden on Mobile */}
            <p className="hidden md:block text-xs md:text-[15px] text-black mb-2 leading-relaxed max-w-xl">
              We help DTC brands spending $20k-$100k/month grow profitably by
              creating high-converting ads at scale.
            </p>
            <p className="hidden md:block text-xs md:text-[15px] text-black mb-6 leading-relaxed max-w-xl">
              Creative Strategy, Copywriting, Funnels, Post Production, Ads and
              Campaign Structure - done with and for you.
            </p>
          </div>

          {/* Right Column - Wistia Video */}
          <div className="relative w-full lg:w-1/2 max-w-2xl">
            <div className="relative aspect-video rounded-2xl border-4 border-primary overflow-hidden shadow-2xl bg-gradient-to-b from-[#1f2346] to-[#272E5C]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Loading Spineer*/}
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`wistia_embed wistia_async_hgkhne26m9 plugin_wistiaLogo=false volumeControl=false autoPlay=false relative w-full h-full transition-[filter] duration-300 ease-in-out hover:brightness-110`}
                ></div>
              </div>
            </div>

            {/* Mobile Text - Hidden on Desktop */}
            <p className="block md:hidden mt-6 text-xs md:text-xl text-black leading-relaxed max-w-xl text-center">
              We help DTC brands spending $20k-$100k/month grow profitably by
              creating high-converting ads at scale.
            </p>
            <p className="block md:hidden mt-2 text-xs md:text-xl text-black leading-relaxed max-w-xl text-center">
              Creative Strategy, Copywriting, Funnels, Post Production, Ads and
              Campaign Structure - done with and for you.
            </p>
          </div>
        </div>

        {/* CTA Buttons - Centered Below */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => (location.href = "#cta")}
            className="px-6 py-3 md:px-8 md:py-3 w-fit mx-auto cursor-pointer bg-primary font-bold text-white rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Schedule Free Ads Audit</span>
            <svg
              className="w-3 md:w-4 h-3 md:h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
            </svg>
          </button>

          {/* <button className="px-6 md:px-8 py-3 md:py-4 cursor-pointer bg-white hover:bg-gray-50 text-gray-700 rounded-lg shadow-xl font-medium hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2">
            <span>Show Me Some Proof First</span>
            <svg
              className="w-3 md:w-4 h-3 md:h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 0l10 10-10 10-2-2 6-6H0V8h14l-6-6z" />
            </svg>
          </button> */}
        </div>

        {/* Social Proof - Centered Below Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 text-gray-600 justify-center">
          {/* Avatars */}
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden"
              >
                <Image
                  src={`/images/hero/avatars-2/${num}.jpg`}
                  width={48}
                  height={48}
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

export default Hero;
