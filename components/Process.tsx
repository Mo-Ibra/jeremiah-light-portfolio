import SectionHeader from "./SectionHeader";

const Process = () => {
  return (
    <section className="py-20 px-6" id="process">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badgeText="My Process">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">4-Step Process</span> to {" "}
            <span className="text-primary">Predictable Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 - Onboarding & Analysis */}
          <div className="relative overflow-hidden rounded-3xl h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/1.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="text-6xl font-bold text-white/20 mb-4">01</div>

              <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 w-fit">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v-2.5c0-1.1.9-2 2-2h2V8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v1.5h2c1.1 0 2 .9 2 2V12h2v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  Audience Research
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-[#8994e8] mb-3">
                  Onboarding & Analysis
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  The foundation phase where we dive deep into understanding
                  your brand, business goals, target audience, and competitive
                  landscape to create a strategic roadmap for your project&apos;s
                  success.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Production */}
          <div className="relative overflow-hidden rounded-3xl h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/2.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="text-6xl font-bold text-white/20 mb-4">02</div>

              <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 w-fit">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  Creative Production
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-[#8994e8] mb-3">
                  Production
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  The execution phase where strategic concepts come to life
                  through meticulous design work, refined iterations, and
                  quality craftsmanship to deliver exceptional brand assets that
                  exceed expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Launch & Optimize */}
          <div className="relative overflow-hidden rounded-3xl h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/3.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="text-6xl font-bold text-white/20 mb-4">03</div>

              <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 w-fit">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  Ad Optimization
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-[#8994e8] mb-3">
                  Launch & Optimize
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  The final phase where we implement your brand assets across
                  all channels, monitor performance, and make data-driven
                  adjustments to ensure maximum impact and ongoing success.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Scaling */}
          <div className="relative overflow-hidden rounded-3xl h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/process/4.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

            <div className="relative z-10 p-6 h-full flex flex-col">
              <div className="text-6xl font-bold text-white/20 mb-4">04</div>

              <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 w-fit">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  Scaling Efficiency
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-[#8994e8] mb-3">Scaling</h3>
                <p className="text-white/90 text-sm leading-relaxed">
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
