import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ReelTestimonialProps {
  testimonialText?: string | null;
  testimonialImageSrc?: string | null;
  authorName?: string | null;
  authorRole?: string | null;
  rating?: number;
}

const ReelTestimonial = ({
  testimonialText,
  testimonialImageSrc,
  authorName,
  authorRole,
  rating,
}: ReelTestimonialProps) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < (rating ?? 0) ? (
      <AiFillStar key={i} className="text-primary my-2" size={20} />
    ) : (
      <AiOutlineStar key={i} className="text-primary my-2" size={20} />
    )
  );

  return (
    <div className="my-5 mt-8 border border-primary bg-black shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-6 rounded-[15px] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02]">
      <div className="flex items-center gap-1 mb-2">{stars}</div>

      <p className="m-0 text-sm sm:text-base lg:text-base leading-6 text-white">
        {testimonialText}
      </p>
      
      <div className="flex items-center mt-6 text-xs sm:text-sm lg:text-sm text-[#777]">
        <Image
          src={`/images/testimonials/${testimonialImageSrc}`}
          alt="Testimonial Author"
          width={60}
          height={60}
          className="rounded-full mr-[10px] object-cover border-2 border-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] aspect-square"
        />
        <div>
          <p className="text-white font-bold m-0">
            {authorName}
          </p>
          <p className="italic m-0">
            {authorRole}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReelTestimonial;