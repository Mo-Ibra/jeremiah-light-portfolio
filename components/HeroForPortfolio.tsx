"use client";

import NewLogoCarousel from "./NewLogoCarousel";

const HeroForPorftolio = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#6F67FF] to-[#B2B9FF] md:min-h-[calc(100vh-120px)] flex flex-col relative overflow-hidden">
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

        <div className="flex-grow flex flex-col justify-center items-center z-40 relative px-8 max-w-[85rem] mx-auto w-full text-center py-20">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold mb-8 tracking-tighter leading-[1.1] text-white drop-shadow-sm">
              Recent creatives <br className="hidden md:block" />
              from the studio
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
              We’ve made every single type of advertisement for paid acquisition.
              Discover the performance-driven creatives that will drive measurable revenue growth for your brand.
            </p>
          </div>
        </div>

        {/* Logo Carousel - Full Width at the Bottom */}
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

export default HeroForPorftolio;