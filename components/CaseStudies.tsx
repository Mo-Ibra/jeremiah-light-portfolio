import {
  Play,
  DollarSign,
  Megaphone,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      clientBrand: "Client Brand",
      company: "Accent Studios",
      revenue: "$0 → $931,968.93",
      description:
        "We prioritized split-testing viral hooks given the niche and products are heavily visually focused and, with fewer than five ad creatives, generated over $900K in revenue.",
      metrics: [
        { icon: DollarSign, value: "932k", label: "Revenue" },
        { icon: Megaphone, value: "384k", label: "Adspend" },
        { icon: ShoppingBag, value: "12345", label: "Orders" },
        { icon: TrendingUp, value: "3.24x", label: "Roas" },
      ],
    },
    {
      id: 2,
      clientBrand: "Client Brand",
      company: "Accent Studios",
      revenue: "$0 → $931,968.93",
      description:
        "We prioritized split-testing viral hooks given the niche and products are heavily visually focused and, with fewer than five ad creatives, generated over $900K in revenue.",
      metrics: [
        { icon: DollarSign, value: "932k", label: "Revenue" },
        { icon: Megaphone, value: "384k", label: "Adspend" },
        { icon: ShoppingBag, value: "12345", label: "Orders" },
        { icon: TrendingUp, value: "3.24x", label: "Roas" },
      ],
    },
    {
      id: 3,
      clientBrand: "Client Brand",
      company: "Accent Studios",
      revenue: "$0 → $931,968.93",
      description:
        "We prioritized split-testing viral hooks given the niche and products are heavily visually focused and, with fewer than five ad creatives, generated over $900K in revenue.",
      metrics: [
        { icon: DollarSign, value: "932k", label: "Revenue" },
        { icon: Megaphone, value: "384k", label: "Adspend" },
        { icon: ShoppingBag, value: "12345", label: "Orders" },
        { icon: TrendingUp, value: "3.24x", label: "Roas" },
      ],
    },
    {
      id: 4,
      clientBrand: "Client Brand",
      company: "Accent Studios",
      revenue: "$0 → $931,968.93",
      description:
        "We prioritized split-testing viral hooks given the niche and products are heavily visually focused and, with fewer than five ad creatives, generated over $900K in revenue.",
      metrics: [
        { icon: DollarSign, value: "932k", label: "Revenue" },
        { icon: Megaphone, value: "384k", label: "Adspend" },
        { icon: ShoppingBag, value: "12345", label: "Orders" },
        { icon: TrendingUp, value: "3.24x", label: "Roas" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4" id="case-studies">
      <div className="max-w-4xl xl:max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader badgeText="Case studies">
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
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Preview Section */}
              <div className="relative bg-[#f1f1f1] h-64 flex items-center justify-center border-2 border-b-0 border-[#818cf8] rounded-t-3xl">
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium">
                    {study.clientBrand}
                  </span>
                </div>

                <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-[#5558e3] transition-colors shadow-lg cursor-pointer">
                  <Play className="w-5 h-5 text-white fill-white" />
                </button>
              </div>

              {/* Content Section */}
              <div className="bg-gradient-to-tr from-[#010a58] to-[#191d3b] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#98a2f1]">
                    {study.company}
                  </h3>
                  <span className="px-3 py-1 rounded-md bg-primary text-white text-sm font-semibold">
                    {study.revenue}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {study.metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={index}
                        className="bg-[#0f0d1f] rounded-xl p-3 border border-[#2d2a4a]"
                      >
                        <div className="flex items-center gap-4 mb-1">
                          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
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
