import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

interface Testimonial {
  name: string;
  avatar: string;
  avatarBg: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  isPhoto?: boolean;
  photoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sophia Carter",
    avatar: "S",
    avatarBg: "bg-red-500",
    date: "on Mar 12, 2024",
    rating: 5,
    title: "Amazing Experience!",
    content:
      "I couldn't be happier with my purchase. The quality is exceptional, and the support team was incredibly helpful.",
  },
  {
    name: "Emma Robinson",
    avatar: "E",
    avatarBg: "bg-blue-600",
    date: "on Jun 13, 2024",
    rating: 5,
    title: "Best Purchase Ever",
    content:
      "This is hands down the best thing I've bought this year. It's exactly what I needed, and it looks amazing!",
  },
  {
    name: "Ava Martinez",
    avatar: "A",
    avatarBg: "bg-green-600",
    date: "on Jun 16, 2024",
    rating: 2,
    title: "Total Waste of Time",
    content:
      "The app is buggy and crashes constantly. It's filled with ads and lacks basic features promised in the description.",
  },
  {
    name: "Lucas Hernandez",
    avatar: "L",
    avatarBg: "bg-yellow-400",
    date: "on Apr 2, 2024",
    rating: 5,
    title: "Worth Every Penny!",
    content:
      "I was hesitant because of the price, but it's been worth it. The quality and service are unbeatable.",
  },
  {
    name: "Ethan James",
    avatar: "E",
    avatarBg: "bg-gray-400",
    date: "on Mar 22, 2024",
    rating: 4,
    title: "Exceeded Expectations!",
    content:
      "The product arrived even better than described. It works perfectly, and I'm thrilled with the entire experience. Highly recommend!",
    isPhoto: true,
    photoUrl: "/images/testimonials-2/1.png",
  },
  {
    name: "Olivia Green",
    avatar: "O",
    avatarBg: "bg-gray-400",
    date: "on Apr 11, 2024",
    rating: 5,
    title: "Great Service and Quick Delivery",
    content:
      "The delivery was faster than expected, and the product quality is outstanding. I'll definitely shop here again!",
    isPhoto: true,
    photoUrl: "/images/testimonials-2/2.png",
  },
  {
    name: "Liam Miller",
    avatar: "L",
    avatarBg: "bg-orange-500",
    date: "on Sep 11, 2024",
    rating: 5,
    title: "Superb Quality!",
    content:
      "The attention to detail is incredible. Everything was packaged perfectly, and the product works like a charm for me.",
  },
  {
    name: "Amelia Brown",
    avatar: "A",
    avatarBg: "bg-green-500",
    date: "on Jun 13, 2024",
    rating: 5,
    title: "Fantastic Support Team!",
    content:
      "The customer service was so patient and kind. They resolved my issue quickly and professionally. Thanks a lot!",
  },
  {
    name: "Noah Wilson",
    avatar: "N",
    avatarBg: "bg-gray-400",
    date: "on Aug 16, 2024",
    rating: 5,
    title: "Top-notch Experience",
    content:
      "The entire process was seamless, from ordering to delivery. The product is worth every penny",
    isPhoto: true,
    photoUrl: "/images/testimonials-2/3.png",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className={`${star <= rating ? "bg-green-600" : "bg-gray-300"} p-1`}>
          <IoStar
            className={`h-4 w-4 ${
              star <= rating
                ? "bg-green-600 fill-white text-white"
                : "bg-gray-300 fill-white text-white"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="min-h-screen bg-[#5360c226] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader badgeText="Testimonials" badgeBackgroundColor="bg-[#5360c226]" marginBottom="8">
          <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 mb-6">
            Thinking About{" "}
            <span className="text-primary">Working With Us?</span>
          </h2>
          <p className="text-xl font-semibold text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Hear about what our clients have to say first
          </p>
        </SectionHeader>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-xl transition-shadow"
            >
              {/* Avatar and Name */}
              <div className="mb-4 flex gap-3 items-center">
                <div className="relative">
                  {testimonial.isPhoto ? (
                    <Image
                      src={testimonial.photoUrl || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover"
                      width={64}
                      height={64}
                    />
                  ) : (
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${testimonial.avatarBg} text-3xl font-bold text-white`}
                    >
                      {testimonial.avatar}
                    </div>
                  )}
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg">
                    <IoStar
                      className="h-4 w-4 text-green-600"
                      strokeWidth={3}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500">{testimonial.date}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-3">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Title */}
              <h4 className="mb-2 font-bold text-gray-900">
                {testimonial.title}
              </h4>

              {/* Content */}
              <p className="text-md leading-relaxed text-gray-600">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
