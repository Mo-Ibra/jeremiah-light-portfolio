import SectionHeader from "./SectionHeader";

const Process = () => {
  return (
    <section className="md:py-16 py-12 px-6" id="process">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badgeText="My Process" className="md:mb-12 mb-6">
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 mb-6">
            Our <span className="text-primary">4-Step Process</span> to{" "}
            <span className="text-primary">Predictable Results</span>
          </h2>
          <p className="text-base md:text-2xl md:leading-8 text-[#00000073] max-w-4xl mx-auto">
            A streamlined collaborative approach that quickly allows us to
            create on-brand, resonant creatives, that look and perform great
          </p>
        </SectionHeader>

        {/* Timeline */}
        <div className="w-full max-w-7xl mx-auto mb-12 hidden md:block">
          <div className="relative flex items-center justify-between">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary -translate-y-1/2"></div>

            {/* Dots */}
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full"></div>
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full left-[10px]"></div>
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full left-[20px]"></div>
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full left-[30px]"></div>
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Process Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl p-3 bg-none md:bg-[url('/images/process/bg.png')] md:bg-cover md:bg-center"
        >
          {/* Step 1 - Onboarding & Analysis */}
          <div className="relative overflow-hidden h-[320px] md:rounded-none rounded-3xl">
            <div
              className="absolute inset-0 bg-center"
              style={{
                backgroundImage: `url('/images/process/1.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0" />

            <div className="relative z-10 p-4 h-full flex flex-col md:rounded-none rounded-xl">
              <div className="flex justify-between items-center">
                <div className="text-5xl font-bold text-white mb-5">01</div>

                <div className="bg-white rounded-2xl px-3 py-1 inline-flex items-center gap-2 mb-6 w-fit">
                  <img
                    src="/images/process/icons/1.svg"
                    alt="SVG Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-xs text-gray-800 font-bold">
                    Audience Research
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-2">
                  Onboarding & Analysis
                </h3>
                <p className="text-white text-xs md:text-[14px] leading-5">
                  The foundation phase where we dive deep into understanding
                  your brand, business goals, target audience, and competitive
                  landscape to create a strategic roadmap for your
                  project&apos;s success.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Production */}
          <div className="relative overflow-hidden h-[320px] md:rounded-none rounded-3xl">
            <div
              className="absolute inset-0 bg-center"
              style={{
                backgroundImage: `url('/images/process/2.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* <div className="absolute inset-0" /> */}

            <div className="relative z-10 p-4 h-full flex flex-col md:rounded-none rounded-xl">
              <div className="flex justify-between items-center">
                <div className="text-5xl font-bold text-white mb-5">02</div>

                <div className="bg-white rounded-2xl px-3 py-1 inline-flex items-center gap-2 mb-6 w-fit">
                  <img
                    src="/images/process/icons/2.svg"
                    alt="SVG Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-xs text-gray-800 font-bold">
                    Creative Production
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-2">
                  Production
                </h3>
                <p className="text-white text-xs md:text-[14px] leading-5">
                  Next is the production phase where our planning becomes real.
                  We make your content with great care, optimize for
                  performance, build out, and revise the final result until you
                  are satisfied. We go the extra mile at no extra cost.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Launch & Optimize */}
          <div className="relative overflow-hidden h-[320px] md:rounded-none rounded-3xl">
            <div
              className="absolute inset-0 bg-center"
              style={{
                backgroundImage: `url('/images/process/3.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0" />

            <div className="relative z-10 p-4 h-full flex flex-col md:rounded-none rounded-xl">
              <div className="flex justify-between items-center">
                <div className="text-5xl font-bold text-white mb-5">03</div>

                <div className="bg-white rounded-2xl px-3 py-1 inline-flex items-center gap-2 mb-6 w-fit">
                  <img
                    src="/images/process/icons/3.svg"
                    alt="SVG Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-xs text-gray-800 font-bold">
                    Ad Optimization
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-2">
                  Launch & Optimize
                </h3>
                <p className="text-white text-xs md:text-[14px] leading-5">
                  After production we implement your final performance creatives
                  across your channels, monitor performance, and make
                  data-driven adjustments to ensure maximum impact and ongoing
                  success.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Scaling */}
          <div className="relative overflow-hidden h-[320px] md:rounded-none rounded-3xl">
            <div
              className="absolute inset-0 bg-center"
              style={{
                backgroundImage: `url('/images/process/4.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0" />

            <div className="relative z-10 p-4 h-full flex flex-col">
              <div className="flex justify-between items-center">
                <div className="text-5xl font-bold text-white mb-5">04</div>

                <div className="bg-white rounded-2xl px-3 py-1 inline-flex items-center gap-2 mb-6 w-fit">
                  <img
                    src="/images/process/icons/4.svg"
                    alt="SVG Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-xs text-gray-800 font-bold">
                    Scaling Efficiency
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-2">
                  Scaling
                </h3>
                <p className="text-white text-xs md:text-[14px] leading-5">
                  In this final phase we focus on growth. We spend more on your
                  best ads and stop what isn’t working. We'll then take these
                  winning ads to new markets and channels to help you expand
                  smoothly. Then iterate for reproducible success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
