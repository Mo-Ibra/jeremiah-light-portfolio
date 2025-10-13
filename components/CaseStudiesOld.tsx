"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { ChartBar, DollarSign, ListOrdered, UploadCloud } from "lucide-react";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [innerWidth, setInnerWidth] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      company: "Accent Studios",
      revenue: "$931,968.93",
      startRevenue: "$0",
      description:
        "We prioritized split-testing viral hooks given the niche and products are heavily visually focused and, with fewer than five ad creatives, generated over $900K in revenue.",
      stats: [
        { icon: <DollarSign />, value: "932k", label: "Revenue" },
        { icon: <ChartBar />, value: "384k", label: "Adspend" },
        { icon: <ListOrdered />, value: "145", label: "Orders" },
        { icon: <UploadCloud />, value: "3.24x", label: "Roas" },
      ],
    },
    {
      id: 2,
      company: "Creative Labs",
      revenue: "$1,245,892.45",
      startRevenue: "$0",
      description:
        "Strategic content creation and viral marketing campaigns that resulted in exponential growth through targeted social media advertising.",
      stats: [
        { icon: <DollarSign />, value: "932k", label: "Revenue" },
        { icon: <ChartBar />, value: "456k", label: "Adspend" },
        { icon: <ListOrdered />, value: "124", label: "Orders" },
        { icon: <UploadCloud />, value: "2.73x", label: "Roas" },
      ],
    },
    {
      id: 3,
      company: "Brand Studios",
      revenue: "$789,234.12",
      startRevenue: "$0",
      description:
        "Focused on user-generated content and authentic storytelling to build trust and drive conversions across platforms.",
      stats: [
        { icon: <DollarSign />, value: "932k", label: "Revenue" },
        { icon: <ChartBar />, value: "298k", label: "Adspend" },
        { icon: <ListOrdered />, value: "654", label: "Orders" },
        { icon: <UploadCloud />, value: "2.65x", label: "Roas" },
      ],
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setCurrentX(deltaX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const threshold = 100;
      if (currentX > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (
        currentX < -threshold &&
        currentIndex < caseStudies.length - 1
      ) {
        setCurrentIndex(currentIndex + 1);
      }
      setCurrentX(0);
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => handleMouseUp();
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startX, currentX, currentIndex]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerWidth(window.innerWidth);

      const handleResize = () => setInnerWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader badgeText="Case Studies" marginBottom="12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transformative Brand <span className="text-primary">Success</span>{" "}
            Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Recent highlights from past/current brands that have scaled using
            our creative
          </p>
        </SectionHeader>

        {/* Carousel Container */}
        <div
          className="w-full mx-auto relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          style={{ height: "600px" }}
        >
          {/* Cards */}
          {caseStudies.map((study, index) => {
            const offset = index - currentIndex;
            const isActive = index === currentIndex;

            // Calculate position and scale
            let translateX =
              offset * 85 * ((innerWidth ?? 1200) / 100) +
              (isDragging ? currentX : 0);
            let scale = isActive ? 1 : 0.8;
            let opacity = isActive ? 1 : 0.4;
            const zIndex = isActive ? 10 : 1;

            // Side cards positioning
            if (offset === -1) {
              translateX = -500 + (isDragging ? currentX : 0);
              scale = 0.8;
              opacity = 0.6;
            } else if (offset === 1) {
              translateX = 500 + (isDragging ? currentX : 0);
              scale = 0.8;
              opacity = 0.6;
            }

            return (
              <div
                key={study.id}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: "80vh",
                  height: "500px",
                }}
              >
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl h-full relative bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/studies/1.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50"></div>

                  {/* Company Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      {study.company}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-3xl font-bold">{study.company}</h3>

                        {/* Revenue Badge */}
                        <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md text-lg font-bold">
                          {study.startRevenue} → {study.revenue}
                        </div>
                      </div>

                      <p className="text-gray-200 text-md leading-relaxed mb-8 max-w-lg">
                        {study.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-4 gap-4">
                        {study.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-primary flex items-center gap-4"
                          >
                            {/* Icon circle */}
                            <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white text-2xl">
                              {stat.icon}
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col justify-center">
                              <div className="text-2xl font-bold text-white leading-none">
                                {stat.value}
                              </div>
                              <div className="text-gray-300 text-sm leading-tight">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
