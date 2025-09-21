import SectionHeader from "./SectionHeader";

const Comparison = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader badgeText="Why Us?">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why <span className="text-primary">Leading DTC Brands</span>{" "}
            Collaborate With Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Here&apos;s exactly why over 80+ Established DTC Brands have worked with
            me to help scale content production and profits
          </p>
        </SectionHeader>

        {/* Comparison Cards */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {/* Traditional Agencies Card */}
            <div className="bg-black rounded-3xl p-8 shadow-lg w-full lg:w-96 lg:mt-12 border-3 border-primary">
              <h3 className="text-3xl font-bold text-white">
                Traditional Agencies
              </h3>

              <div className="h-[1px] w-full bg-gradient-to-r from-white to-transparent my-6"></div>

              <div className="space-y-4">
                <div className="text-white text-lg">
                  Boring Cookie Cutter ADs
                </div>

                <div className="text-white text-lg">
                  No Learning or Optimization
                </div>

                <div className="text-white text-lg">Poor Communication</div>

                <div className="text-white text-lg">
                  Bad Customer Experience
                </div>

                <div className="text-white text-lg">
                  Creatives Delivered Monthly
                </div>

                <div className="text-white text-lg">
                  Here and There Communication
                </div>
              </div>
            </div>

            {/* Working With Me Card */}
            <div className="bg-black rounded-3xl p-8 shadow-lg w-full lg:w-96 border-3 border-primary relative md:right-16">
              <h3 className="text-3xl font-bold text-primary">Working With Me</h3>

              {/* Border Gradient Under Heading */}
              <div className="h-[1px] w-full bg-gradient-to-r from-white to-transparent my-6"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white text-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  High Performance Creative
                </div>

                <div className="flex items-center gap-3 text-white text-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Scale Through Creative Diversity
                </div>

                <div className="flex items-center gap-3 text-white text-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Detailed Reporting & Insights
                </div>

                <div className="flex items-center gap-3 text-white text-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Full-Funnel Creative Approach
                </div>

                <div className="flex items-center gap-3 text-white text-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Creatives Delivered Weekly
                </div>

                <div className="flex items-center gap-3 text-white text-lg">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  24/7 Communication Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
