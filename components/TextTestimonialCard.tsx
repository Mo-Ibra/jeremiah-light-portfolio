import { TextTestimonial } from "@/data/testimonials";
import Image from "next/image"
import { IoStar } from "react-icons/io5";

export const TextTestimonialCard = ({ item }: { item: TextTestimonial }) => {
  return (
    <div
      className="flex-shrink-0 px-2 pt-4 pb-2 md:px-4 md:pt-6 md:pb-4 bg-white group cursor-pointer"
    >
      <div className="w-[320px] md:w-[450px] rounded-2xl bg-white p-5 md:p-8 break-inside-avoid md:shadow-[0px_2px_12px_0px_rgba(0,0,0,0.3)] border border-gray-100">
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
        <p className="text-base leading-relaxed text-gray-600 line-clamp-4 md:line-clamp-none">
          {item.content}
        </p>
      </div>
    </div>
  )
}