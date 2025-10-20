"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import BlurCircle from "./BlurCircle";

const Services = () => {
  return (
    <section className="md:py-16 py-12 px-6 bg-[#5360c226] relative" id="services">
      <BlurCircle />

      <div className="container max-w-[1200px] mx-auto">
        {/* Header */}
        <SectionHeader
          badgeText="Our Services"
          badgeBackgroundColor="bg-[#5360c226]"
          className="md:mb-12 mb-6"
        >
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 mb-6">
            The Complete{" "}
            <span className="text-primary">Performance Creative</span> Stack
          </h2>
          <p className="text-base md:text-2xl text-[#00000073] max-w-4xl mx-auto leading-relaxed">
            We leverage 3 main creative styles to find what scales your brand,
            faster
          </p>
        </SectionHeader>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* AI Generated Content */}
          <div className="relative overflow-hidden rounded-3xl h-[390px] group border-4 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/services/AI-Generated-Content/1.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold mb-2 text-[#8994E9]">
                AI Generated Content
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Hyper-realistic AI generated content made for quick testing and
                iteration – so we can cut costs and scale at the speed of light.
              </p>
            </div>
          </div>

          {/* User Generated Content */}
          <div className="relative overflow-hidden rounded-3xl h-[390px] group border-4 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/services/User-Generated-Content/1.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

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
          <div className="relative overflow-hidden rounded-3xl h-[390px] group border-4 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/services/Studio-Content/1.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

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

        {/* Arrow Line */}
        <div className="inset-x-0 top-full flex justify-center pointer-events-none">
          <Image
            src="/images/services/line.svg"
            alt="Arrow Connector"
            width={800}
            height={200}
            className="w-full max-w-3xl h-auto"
          />
        </div>

        {/* Growth Engine Card */}
        <div className="mt-8 flex justify-center">
          <div className="relative overflow-hidden rounded-3xl max-w-2xl w-full bg-gradient-to-t from-black via-[#0a0a1a] to-[#1a1a3a] shadow-2xl border-3 border-primary">
            <div className="relative z-10 w-full h-[250px] flex justify-center items-center">
              <Image
                src="/images/services/group.png"
                alt="Growth Chart"
                width={500}
                height={400}
                className="object-contain"
              />
            </div>

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
