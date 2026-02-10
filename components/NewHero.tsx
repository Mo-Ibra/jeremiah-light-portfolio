"use client";

import Image from "next/image";
import NewLogoCarousel from "./NewLogoCarousel";

const NewHero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#6F67FF] to-[#B2B9FF] min-h-[calc(100vh-120px)] flex flex-col">
        <div className="flex-grow flex justify-center items-center z-40 relative overflow-hidden">
          {/* Background Dot Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage: "url('/images/new-hero/texture.png')",
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              maskImage: "linear-gradient(to right, transparent 20%, black 80%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 20%, black 80%)",
            }}
          />
          {/* Main Content Container */}
          <div className="relative z-10 px-8 max-w-[85rem] mx-auto w-full md:mt-20 lg:mt-0">
            {/* Top Section - Text and Video Side by Side */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 w-full mb-8 mt-5 md:mt-16">
              {/* Left Column - Text Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl md:mt-6">
                {/* Hero Text */}
                <h1 className="text-[28px] sm:text-5xl md:text-5xl lg:text-6xl xl:text-[50px] font-bold md:mb-6 tracking-[-0.05em] leading-tight bg-white bg-clip-text text-transparent">
                  Performance Creative
                  <br />
                  for Scale Stage Brands
                </h1>

                {/* Desktop Text - Hidden on Mobile */}
                <p className="hidden md:block text-xs md:text-[15px] text-white mb-8 leading-relaxed max-w-xl">
                  We help DTC brands spending $20k-$100k/month grow profitably by
                  creating high-converting ads at scale.
                </p>
                <p className="hidden md:block text-xs md:text-[15px] text-white mb-6 leading-relaxed max-w-xl">
                  Creative Strategy, Copywriting, Funnels, Post Production, Ads and
                  Campaign Structure - done with and for you.
                </p>
              </div>

              {/* Right Column -- Wistia Video */}
              <div className="relative w-full lg:w-1/2 max-w-2xl">
                <div className="p-1.5 md:p-4 bg-diagonal-video-stripes rounded-3xl shadow-2xl border-2 border-white">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white bg-gradient-to-b from-[#1f2346] to-[#272E5C]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Loading Spineer*/}
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`wistia_embed wistia_async_uzq66c53fa plugin_wistiaLogo=false volumeControl=false autoPlay=false relative w-full h-full transition-[filter] duration-300 ease-in-out hover:brightness-110`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Text - Hidden on Desktop */}
                <p className="block md:hidden mt-6 text-xs md:text-xl text-white leading-relaxed max-w-xl text-center">
                  We help DTC brands spending $20k-$100k/month grow profitably by
                  creating high-converting ads at scale.
                </p>
                <p className="block md:hidden mt-2 text-xs md:text-xl text-white leading-relaxed max-w-xl text-center">
                  Creative Strategy, Copywriting, Funnels, Post Production, Ads and
                  Campaign Structure - done with and for you.
                </p>
              </div>
            </div>

            {/* CTA Buttons - Centered Below */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 my-8 md:my-10">
              <button
                onClick={() => (location.href = "#cta")}
                className="px-6 py-3 md:px-8 md:py-3 w-fit md:mt-16 mx-auto cursor-pointer bg-white font-bold text-[#8480FF] rounded-lg shadow-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Schedule Free Ads Audit</span>
                <Image
                  src="/images/button-arrow.svg"
                  alt="Arrow Icon"
                  width={16}
                  height={16}
                  className="w-3 md:w-4 h-3 md:h-4"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Logo Carousel - Full Width at the Bottom within 100vh */}
        <div className="w-full bg-[#FFFFFF] bg-diagonal-carousel-stripes py-4 md:py-8 border-y border-white/20">
          <div className="max-w-full mx-auto px-8">
            <h3 className="text-center text-[#8480FF] font-semibold mb-3 md:mb-6 text-sm md:text-base">
              TRUSTED BY TOP BRANDS
            </h3>
            <NewLogoCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHero;