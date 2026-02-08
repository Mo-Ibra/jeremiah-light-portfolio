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
    name: "Malike from Albumtags",
    avatar: "M",
    avatarBg: "bg-red-500",
    date: "on Mar 12, 2025",
    rating: 5,
    title: "Couldn’t recommend anyone else",
    content:
      "Can only recommend Jeremiah and the team at Harcharran, super service minded, problem solver, creative, and very fast. Jeremiah is always available and always ready to try out new ideas. He provides updates throughout the week, and monitors absolutely everything. Best, Malike CEO & Founder ",
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
  },
  {
    name: "Cameron from Waistora",
    avatar: "C",
    avatarBg: "bg-blue-600",
    date: "on Jun 13, 2025",
    rating: 5,
    title: "Great team",
    content:
      "We’ve had the pleasure of collaborating with Harcharran since 2024. During this period, our brand has expanded into new markets and significantly grown the company in DTC sales. Unlike larger agencies, we experience a tremendous effort put into both understanding the brand and the company. Plus, Jeremiah really does practice what he preaches. You get an experienced team and committed wingman who thinks on a high level. Jeremiah & Team get my absolute highest recommendations.",
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
  },
  {
    name: "Amelia from Flo",
    avatar: "A",
    avatarBg: "bg-green-500",
    date: "on Jun 13, 2025",
    rating: 5,
    title: "Fantastic Support Team",
    content:
      "If you need ads that actually convert (and scale) Jeremiah and his team are definitely the go-to. Unlike other agencies, the ads weren’t generic, were clearly planned, and delivered very fast, each week - with little that needed changing.",
  },
  {
    name: "Ava from Blitzpop",
    avatar: "A",
    avatarBg: "bg-green-600",
    date: "on Jun 16, 2025",
    rating: 5,
    title: "Lovely Ads :)",
    content:
      "I am extremely impressed with the quality and results of the ads delivered by Jeremiah and his team - they have exceeded expectations, look amazing, and are bringing about an influx of sales, constantly selling out our stock. He is a fantastic character to work with and has a killer team of specialists. I highly recommend.",
  },
  {
    name: "Lauren from Seranova",
    avatar: "L",
    avatarBg: "bg-purple-600",
    date: "on Apr 11, 2025",
    rating: 5,
    title: "Great addition to the team!",
    content:
      "Working with Harcharran has made a huge difference for our brand. We have increased the amount of creatives in our pipeline, and our revenue and profits have also increased - the quality on the creatives is also excellent!",
  },

  {
    name: "Noah from Dermave",
    avatar: "N",
    avatarBg: "bg-green-500",
    date: "on Aug 16, 2025",
    rating: 5,
    title: "Top-notch Experience",
    content:
      "The entire process was seamless, they have a fantastic system, and if there were any delays, we would always be notified well before. The communication Jeremiah has with his clients is really fantastic, he messages us almost daily, and leaves in-depth video analysis reviews each week along with visual and written reports on performance. The ads, man where do I even start, they’re all f*cking killer!!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`${star <= rating ? "bg-green-600" : "bg-gray-300"} p-1`}
        >
          <IoStar
            className={`h-4 w-4 ${star <= rating
                ? "bg-green-600 fill-white text-white"
                : "bg-gray-300 fill-white text-white"
              }`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-6 md:py-16 py-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader badgeText="Testimonials" className="md:mb-8 mb-4">
          <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 mb-2">
            <span className="block md:inline">Thinking About </span>
            <span className="text-primary">Working With Us?</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Hear about what our clients have to say first
          </p>
        </SectionHeader>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 mb-6 break-inside-avoid"
              style={{ boxShadow: "0px 2px 12px 0px #00000050" }}
            >
              {/* Avatar and Name */}
              <div className="flex gap-3 items-center">
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
                  <p className="text-sm font-semibold text-gray-500">
                    {testimonial.date}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="my-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Title */}
              <h4 className="mb-2 text-sm md:text-[20px] font-bold text-gray-900">
                {testimonial.title}
              </h4>

              {/* Content */}
              <p className="text-sm md:text-[20px] leading-relaxed text-gray-600">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 md:mt-12">
          <button
            onClick={() => (location.href = "#cta")}
            className="px-6 py-3 md:px-8 md:py-3 w-fit mx-auto cursor-pointer bg-primary font-bold text-white rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Schedule Free Ads Audit</span>
            <Image
              src="/images/button-arrow.svg"
              alt="Arrow Icon"
              width={16}
              height={16}
              className="w-3 md:w-4 h-3 md:h-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
