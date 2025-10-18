import { DollarSign, Megaphone, ShoppingBag, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

export default function CaseStudiesSection() {
  const caseStudies = [
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
      revenue: "$0 → $931,968.93",
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
    <section className="py-16 px-4 bg-[#5360c226]" id="case-studies">
      <div className="max-w-4xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          badgeText="Case studies"
          badgeBackgroundColor="bg-[#5360c226]"
        >
          <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 mb-6">
            Our Creatives Actually Work -{" "}
            <span className="text-primary">Watch Some Results Below</span>
          </h2>
          <p className="text-xl font-semibold text-gray-600 max-w-5xl mx-auto leading-relaxed">
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
                  style={{ height: "256px", width: "100%" }}
                ></div>
              </div>

              {/* Content Section */}
              <div className="bg-gradient-to-tr from-[#010a58] to-[#191d3b] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#98a2f1]">
                    {study.company}
                  </h3>
                  <span className="px-3 py-1 rounded-md bg-primary text-white font-semibold text-xs">
                    {study.revenue}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {study.metrics.map((metric, index) => {
                    const Icon = metric.icon as any;
                    const isStringIcon = typeof metric.icon === "string";
                    return (
                      <div
                        key={index}
                        className="bg-[#0f0d1f] rounded-xl p-3 border border-[#2d2a4a]"
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
                              <Icon className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="text-white font-bold text-lg">
                              {metric.value}
                            </div>
                            <div className="text-gray-400 text-xs">
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
      </div>
    </section>
  );
}
