import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Check, X } from "lucide-react";
import AboutMe from "./AboutMe";

interface Metric {
  icon: string | "/images/case-studies/icons/1.svg";
  value: string;
  label: string;
}

interface CaseStudy {
  id: number;
  clientBrand: string;
  company: string;
  revenue: string;
  description: string;
  wistiaId?: string;
  metrics: Metric[];
}

export default function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      clientBrand: "Client Brand",
      company: "E-Commerce Health & Wellness Brand",
      revenue: "$132,910.16 → $696,176.48",
      wistiaId: "8w1bkkaovj",
      description:
        "We put focus on dialling in the messaging and testing different formats given the niche we needed to capture and convert attention in a crowded space - which we did, generating over $600K in revenue.",
      metrics: [
        {
          icon: "/images/case-studies/icons/1.svg",
          value: "563k",
          label: "Revenue",
        },
        {
          icon: "/images/case-studies/icons/2.svg",
          value: "281k",
          label: "Adspend",
        },
        {
          icon: "/images/case-studies/icons/3.svg",
          value: "7321",
          label: "Orders",
        },
        {
          icon: "/images/case-studies/icons/4.svg",
          value: "2.01x",
          label: "Roas",
        },
      ],
    },
    {
      id: 2,
      clientBrand: "Client Brand",
      company: "E-Commerce Productivity Brand",
      revenue: "Year To Date → $974,512.53",
      wistiaId: "mylt1wd29e",
      description:
        "Since this product had lots of visual appeal we focused on strong hooks, followed by clear targeting to sell, reach, and retain our target audience - this allowed us to easily sell the product through our creative - scaling the brand as a result.",
      metrics: [
        {
          icon: "/images/case-studies/icons/1.svg",
          value: "974k",
          label: "Revenue",
        },
        {
          icon: "/images/case-studies/icons/2.svg",
          value: "213k",
          label: "Adspend",
        },
        {
          icon: "/images/case-studies/icons/3.svg",
          value: "3224",
          label: "Orders",
        },
        {
          icon: "/images/case-studies/icons/4.svg",
          value: "3.43x",
          label: "Roas",
        },
      ],
    },
    {
      id: 3,
      clientBrand: "Client Brand",
      company: "E-Commerce Merchandising Brand",
      revenue: "Generated → $461.738.21",
      wistiaId: "2fe13joke6",
      description:
        "Since this product had lots of visual appeal we focused on strong hooks, followed by clear targeting to sell, reach, and retain our target audience - this allowed us to easily sell the product through our creative - scaling the brand as a result.",
      metrics: [
        {
          icon: "/images/case-studies/icons/1.svg",
          value: "461k",
          label: "Revenue",
        },
        {
          icon: "/images/case-studies/icons/2.svg",
          value: "110k",
          label: "Adspend",
        },
        {
          icon: "/images/case-studies/icons/3.svg",
          value: "4321",
          label: "Orders",
        },
        {
          icon: "/images/case-studies/icons/4.svg",
          value: "4.19x",
          label: "Roas",
        },
      ],
    },
    {
      id: 4,
      clientBrand: "Client Brand",
      company: "E-Commerce (Physical) Tech Brand",
      revenue: "$600 CAC → $130 CAC",
      wistiaId: "cavjkqvav3",
      description:
        "This brand is taking longer than most to help scale due to the nature of the niche, market, and business model - however - we have managed to cut the CAC from $600 to just $130 using our creative since onboarding with this client - this is great, as the typical LTV is just $268.",
      metrics: [
        {
          icon: "/images/case-studies/icons/1.svg",
          value: "30k",
          label: "Revenue",
        },
        {
          icon: "/images/case-studies/icons/2.svg",
          value: "14k",
          label: "Adspend",
        },
        {
          icon: "/images/case-studies/icons/3.svg",
          value: "98",
          label: "Orders",
        },
        {
          icon: "/images/case-studies/icons/4.svg",
          value: "2.10x",
          label: "Roas",
        },
      ],
    },
  ];

  return (
    <section className="md:py-16 py-12 px-4 bg-gradient-to-b from-[#5360c226] from-[90%] to-white to-[80%]" id="case-studies">
      <div className="max-w-4xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          badgeText="Case studies"
          badgeBackgroundColor="bg-[#5360c226]"
          className="md:mb-12 mb-6"
        >
          <h2 className="text-xl md:text-[40px] font-semibold text-gray-900 mb-2">
            Our Creatives Actually Work <span className="hidden md:inline">-</span> {" "}
            <span className="text-primary md:inline block">Watch Some Results Below</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Recent highlights from past/current brands that have scaled using
            our creative
          </p>
        </SectionHeader>

        {/* Case Studies Grid */}
        <div className="grid xl:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-tr from-[#010a58] to-[#191d3b]"
            >
              {/* Video Preview Section */}
              <div className="relative bg-[#f1f1f1] border-2 border-b-0 border-[#818cf8] rounded-t-3xl overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">
                    {study.clientBrand}
                  </span>
                </div>

                <div
                  className={`wistia_embed wistia_async_${study.wistiaId} videoFoam=true`}
                  style={{ height: "100%", width: "100%" }}
                ></div>
              </div>

              {/* Content Section */}
              <div className="bg-gradient-to-tr from-[#010a58] to-[#191d3b] p-6">
                <div className="flex flex-col-reverse gap-2.5 md:flex-row md:gap-0 items-center justify-between mb-4">
                  <h3 className="md:text-xl md:text-left text-md text-center font-bold text-[#98a2f1]">
                    {study.company}
                  </h3>
                  <span className="px-3 py-1 rounded-md bg-primary text-white font-semibold text-xs">
                    {study.revenue}
                  </span>
                </div>

                <p className="text-gray-300 text-center md:text-start text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {study.metrics.map((metric, index) => {
                    const isStringIcon = typeof metric.icon === "string";
                    return (
                      <div
                        key={index}
                        className="bg-[#0f0d1f] rounded-xl px-3 py-2 border border-primary"
                      >
                        <div className="flex items-center gap-4 mb-1">
                          <div className="w-8 h-8 rounded flex items-center justify-center">
                            {isStringIcon ? (
                              <Image
                                src={metric.icon as string}
                                alt={metric.label}
                                width={20}
                                height={20}
                                className="w-8 h-8 text-primary"
                              />
                            ) : (
                              React.createElement(metric.icon, {
                                className: "w-5 h-5 text-white",
                              })
                            )}
                          </div>
                          <div>
                            <div className="text-white font-bold text-lg">
                              {metric.value}
                            </div>
                            <div className="text-gray-200 text-xs">
                              {metric.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-5 mb-12 md:mt-10 md:mb-16">
          <button
            onClick={() => (location.href = "#cta")}
            className="group relative overflow-hidden px-6 py-3 md:px-8 md:py-3 w-fit mx-auto cursor-pointer bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 font-bold text-white rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Schedule Free Ads Audit</span>
              <Image
                src="/images/arrow-white.svg"
                alt="Arrow Icon"
                width={16}
                height={16}
                className="w-3 md:w-4 h-3 md:h-4"
              />
            </span>
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[100%]" />
          </button>
        </div>

        <AboutMe />

        {/* NEW SECTION */}
        <div className="relative max-w-6xl mx-auto w-full bg-black rounded-3xl p-8 shadow-2xl border-2 border-primary">
          <div className="grid md:grid-cols-2 gap-8 md:mt-8">
            {/* Left Column */}
            <div className="text-white space-y-6 z-20">
              <h1 className="text-[28px] md:text-5xl mb-4">
                Who do we{" "}
                <span className="italic font-light font-instrument">
                  work with?
                </span>
              </h1>

              <p className="text-sm md:text-xl leading-relaxed max-w-md">
                We&apos;re a lean team of senior specialists helping DTC
                E-commerce brands grow globally.
              </p>

              <p className="text-sm md:text-xl leading-relaxed max-w-md">
                With 5+ years experience each and thousands spent on ads, we
                work with established companies that understand their metrics
                and seek long-term growth.
              </p>

              <p className="text-sm md:text-xl leading-relaxed max-w-md">
                We deliver hardcore paid advertising, capping our roster at 4
                clients at any given time to invest 95% of our time on their
                success.
              </p>

              <p className="text-sm md:text-xl leading-relaxed max-w-md">
                We aren&apos;t here to be the biggest; we&apos;re here to be the
                best.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Yes Box */}
              <div className="bg-gradient-to-tr from-[#5cc8d4] via-[#5360c2] to-[#5360c2] rounded-2xl pt-1 pb-8 px-4 shadow-lg">
                <div className="flex items-center gap-2 mb-2 relative">
                  <h2 className="text-[40px] font-instrument italic text-white">
                    Yes
                  </h2>
                  <Image
                    src="/images/case-studies/to-down.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="text-white relative top-2"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Brand (or product) has product-market-fit
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Wants a long-term partnership
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Is in need of more, different or better creative
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Spends between $20k - $100k per month on paid advertising
                      (Meta, TikTok, Google)
                    </p>
                  </div>
                </div>
              </div>

              {/* No Box */}
              <div className="bg-transparent border-2 border-gray-200 rounded-2xl pt-1 pb-8 px-4 shadow-lg relative z-20">
                <div className="flex items-center gap-2 mb-2 relative">
                  <h2 className="text-[40px] font-instrument italic text-white">
                    No
                  </h2>
                  <Image
                    src="/images/case-studies/to-down.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="text-white relative top-2"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Doesn&apos;t have product-market-fit
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Success is based on short-term fixes
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Cares more about price than value & results
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <p className="text-white text-sm max-w-md">
                      Lack of communication & understanding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 md:w-[350px] md:h-[350px] w-[200px] h-[200px] bg-gradient-to-bl from-primary via-[#5cc8d4]/10 to-transparent pointer-events-none blur-3xl"></div>

          {/* Blur Background */}
          <div className="absolute bottom-0 left-0">
            <img
              src="/images/case-studies/blur-bg.svg"
              alt="Blur BG"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
