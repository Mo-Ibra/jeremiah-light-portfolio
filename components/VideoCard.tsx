import Image from "next/image"
import { Play } from "lucide-react"

export const VideoCard = ({ index, item }: { index: number, item: any }) => {
  return (
    <div
      key={`video-${index}`}
      className="flex-shrink-0 px-10 py-12 border-r border-gray-200 group cursor-pointer bg-white"
    >
      <div className="relative w-[340px] flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-[535px] rounded-xl overflow-hidden border border-gray-100">
          <Image
            src={item.thumbnail}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Play Button - Design Accurate */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              {/* Outer Glassy Ring */}
              <div className="absolute w-[84px] h-[84px] rounded-full bg-[#83789880] backdrop-blur-[2px] border border-white" />
              {/* Main Indigo Button */}
              <div className="relative w-[58px] h-[58px] rounded-full bg-[#4B42E4] flex items-center justify-center text-white shadow-[0_8px_25px_-5px_rgba(75,66,228,0.5)]">
                <Play fill="white" size={32} className="ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="pt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
              <Image src={item.avatarImage} alt={item.name} fill className="object-cover" />
            </div>
            <span className="font-bold text-[#1a1a1a] text-base">{item.name}</span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src="/images/star.svg" alt="star" width={18} height={18} className="w-[18px] h-[18px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}