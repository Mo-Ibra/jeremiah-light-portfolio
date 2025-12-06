import SectionHeader from "./SectionHeader";

const Comparison = () => {
  return (
    <section className="md:py-16 py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center md:left-[730px] md:bottom-[130px] md:right-0 bottom-[600px] -right-[225px]">
        <img
          src="/images/case-studies/background.svg"
          alt="Case Studies Background"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader badgeText="Why Us?" className="md:mb-6 mb-6">
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 md:mb-6 mb-2">
            Why <span className="text-primary">Leading DTC Brands</span>{" "}
            Collaborate With Us
          </h2>
          <p className="text-base md:text-2xl md:leading-8 text-[#00000073] max-w-4xl mx-auto">
            Here&apos;s exactly why over 80+ Established DTC Brands have worked
            with us to help scale content production and profits
          </p>
        </SectionHeader>

        {/* Comparison Cards */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {/* Traditional Agencies Card */}
            <div className="relative lg:mt-12 rounded-3xl overflow-hidden group w-full lg:w-96">
              {/* Gradient Border */}
              <div className="relative inset-0 rounded-3xl">
                <div className="h-full w-full bg-black rounded-3xl shadow-lg p-6 flex flex-col">
                  <h3 className="text-3xl font-bold text-white">
                    Traditional Agencies
                  </h3>

                  <div className="h-[1px] w-full bg-gradient-to-r from-white to-transparent my-6"></div>

                  <div className="space-y-4">
                    <div className="text-white text-base md:text-lg">
                      Boring Cookie Cutter Ads
                    </div>

                    <div className="text-white text-base md:text-lg">
                      No Learning or Optimization
                    </div>

                    <div className="text-white text-base md:text-lg">
                      Poor Communication
                    </div>

                    <div className="text-white text-base md:text-lg">
                      Bad Customer Experience
                    </div>

                    <div className="text-white text-base md:text-lg">
                      Creatives Delivered Monthly
                    </div>

                    <div className="text-white text-base md:text-lg">
                      Here and There Communication
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working With Me Card */}
            <div className="relative rounded-3xl overflow-hidden group w-full lg:w-96 md:right-16">
              {/* Gradient Border */}
              <div className="relative inset-0 rounded-3xl p-[4px] bg-gradient-to-b from-primary via-[#6253c290] to-black shadow-2xl">
                <div className="h-full w-full bg-black rounded-3xl shadow-lg p-6 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-primary/40 blur-3xl rounded-full pointer-events-none"></div>

                  <h3 className="text-3xl font-bold text-primary">
                    Working With Us
                  </h3>

                  <div className="h-[1px] w-full bg-gradient-to-r from-white to-transparent my-6"></div>

                  <div className="space-y-4">
                    {[
                      "High Performance Creative",
                      "Scale Through Creative Diversity",
                      "Detailed Reporting & Insights",
                      "Full-Funnel Creative Approach",
                      "Creatives Delivered Weekly",
                      "24/7 Communication Support",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-white text-lg"
                      >
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
                        {item}
                      </div>
                    ))}
                  </div>
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
