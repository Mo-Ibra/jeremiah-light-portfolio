"use client";

import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Play } from "lucide-react";
import { IoStar } from "react-icons/io5";
import { VideoCard } from "./VideoCard";

// Mock Data
const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
  {
    id: 2,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
  {
    id: 3,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
  {
    id: 4,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Jenney Roy",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
  },
];

const TEXT_TESTIMONIALS = [
  {
    name: "Malike from Albumtags",
    avatar: "M",
    avatarBg: "bg-red-500",
    date: "on Mar 12, 2025",
    rating: 5,
    title: "Couldn’t recommend anyone else",
    content:
      "Can only recommend Jeremiah and the team at Harcharran, super service minded, problem solver, creative, and very fast. Jeremiah is always available and always ready to try out new ideas. He provides updates throughout the week, and monitors absolutely everything. Best, Malike CEO & Founder ",
    isPhoto: false,
    photoUrl: "",
  },
  {
    name: "Lucas from MorningBrew",
    avatar: "L",
    avatarBg: "bg-yellow-400",
    date: "on Dec 2, 2024",
    rating: 5,
    title: "Worth Every Penny!",
    content:
      "Huge recommendation to Jeremiah! He’s been making and running our Facebook ads for over 3 months now and has created impressive results throughout our partnership. Jeremiah works insanely hard to create the best results for us and I couldn’t recommend him more.",
    isPhoto: false,
    photoUrl: "",
  },
  {
    name: "Harrison from Ecomlocker",
    avatar: "H",
    avatarBg: "bg-orange-500",
    date: "on Sep 11, 2025",
    rating: 5,
    title: "Very Helpful",
    content:
      "This team goes above and beyond when it comes to service delivery and the quality of the creatives produced is unlike any other. We onboarded for help with B2B lead generation and well the results have been more than fantastic. Definitely recommend working with them.",
    isPhoto: false,
    photoUrl: "",
  },
  {
    name: "Damian from Nuvera",
    avatar: "D",
    avatarBg: "bg-red-600",
    date: "on Dec 22, 2024",
    rating: 5,
    title: "Exceeded Expectations",
    content:
      "The ads delivered were way better than what I was expecting. After working with other agencies, I honestly thought the ads were going to be generic but Jeremiah is different, he really does go the extra mile and this is reflected in the work he and his team produce.",
    isPhoto: false,
    photoUrl: "",
  },
];

export const NewTestimonials = () => {
  return (
    <section className="px-6 md:py-24 py-16 overflow-hidden bg-white">
      <style jsx>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 45s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-rtl,
        .pause-on-hover:hover .animate-marquee-ltr {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl mb-16">
        <SectionHeader badgeText="Testimonials" className="md:mb-10 mb-6 text-center">
          <h2 className="text-3xl md:text-[45px] font-semibold text-gray-900 mb-4 tracking-tight">
            Thinking about <span className="text-primary">Working With Us?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Hear about what our clients have to say first
          </p>
        </SectionHeader>
      </div>

      <div className="flex flex-col">
        {/* Top Carousel - Right to Left (Video Panels) */}
        <div
          className="relative w-full border-y border-gray-100 flex overflow-hidden pause-on-hover"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-rtl">
            {[...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS, ...VIDEO_TESTIMONIALS].map((item, index) => (
              <VideoCard index={index} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Carousel - Left to Right (Text Panels) */}
        <div
          className="relative w-full flex overflow-hidden pause-on-hover"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex animate-marquee-ltr">
            {[...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS].map((item, index) => (
              <div
                key={`text-${index}`}
                className="flex-shrink-0 px-4 pt-6 pb-4 bg-white group cursor-pointer"
              >
                <div className="w-[450px] rounded-2xl bg-white p-8 break-inside-avoid shadow-[0px_2px_12px_0px_rgba(0,0,0,0.3)] border border-gray-100">
                  {/* Avatar and Name */}
                  <div className="flex gap-4 items-center">
                    <div className="relative">
                      {item.isPhoto ? (
                        <Image
                          src={item.photoUrl || "/placeholder.svg"}
                          alt={item.name}
                          className="h-16 w-16 rounded-full object-cover"
                          width={64}
                          height={64}
                        />
                      ) : (
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full ${item.avatarBg} text-3xl font-bold text-white`}
                        >
                          {item.avatar}
                        </div>
                      )}
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100">
                        <IoStar
                          className="h-4 w-4 text-green-600"
                          strokeWidth={3}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {item.name}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="my-6 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`${star <= item.rating ? "bg-green-600" : "bg-gray-300"} p-1`}
                      >
                        <IoStar
                          className="h-3.5 w-3.5 fill-white text-white"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>

                  {/* Content */}
                  <p className="text-base leading-relaxed text-gray-600">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonials;