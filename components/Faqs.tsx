"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "./SectionHeader";

import { faqData } from "@/data/data";
import BlurCircle from "./BlurCircle";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-background relative overflow-hidden">

      {/* <BlurCircle top="50%" left="50%" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader badgeText="Do you have any question?" badgeBackgroundColor="bg-[#5360c226]">
          <h2 className="text-[40px] font-bold text-foreground">
            Frequently Asked{" "}
            <span className="text-primary relative">
              Questions
            </span>
          </h2>
        </SectionHeader>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-black bg-[#000000dd] backdrop-blur-sm transition-all duration-300 hover:border-primary/30 rounded-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
