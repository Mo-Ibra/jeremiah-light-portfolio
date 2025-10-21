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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl p-3"
          style={{
            backgroundImage: "url('images/process/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Step 1 - Onboarding & Analysis */}
          <div className="relative overflow-hidden rounded-3xl h-[320px] border-2 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/1.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

            <div className="relative z-10 p-4 h-full flex flex-col">
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
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-3">
                  Onboarding & Analysis
                </h3>
                <p className="text-white text-xs md:text-[15px] leading-relaxed">
                  The foundation phase where we dive deep into understanding
                  your brand, business goals, target audience, and competitive
                  landscape to create a strategic roadmap for your
                  project&apos;s success.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Production */}
          <div className="relative overflow-hidden rounded-3xl h-[320px] border-2 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/2.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

            <div className="relative z-10 p-4 h-full flex flex-col">
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
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-3">
                  Production
                </h3>
                <p className="text-white text-xs md:text-[15px] leading-relaxed">
                  The execution phase where strategic concepts come to life
                  through meticulous design work, refined iterations, and
                  quality craftsmanship to deliver exceptional brand assets that
                  exceed expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Launch & Optimize */}
          <div className="relative overflow-hidden rounded-3xl h-[320px] border-2 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/3.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

            <div className="relative z-10 p-4 h-full flex flex-col">
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
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-3">
                  Launch & Optimize
                </h3>
                <p className="text-white text-xs md:text-[15px] leading-relaxed">
                  The final phase where we implement your brand assets across
                  all channels, monitor performance, and make data-driven
                  adjustments to ensure maximum impact and ongoing success.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Scaling */}
          <div className="relative overflow-hidden rounded-3xl h-[320px] border-2 border-primary">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/4.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

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
                <h3 className="text-[23px] font-bold text-[#8994e8] mb-3">
                  Scaling
                </h3>
                <p className="text-white text-xs md:text-[15px] leading-relaxed">
                  The growth phase where we expand your successful brand
                  foundation across new markets, channels, and touchpoints while
                  maintaining consistency and adapting strategies to support
                  your business expansion.
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
