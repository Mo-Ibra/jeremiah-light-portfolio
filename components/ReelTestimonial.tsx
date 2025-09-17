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
      <AiFillStar key={i} className="text-primary" size={20} />
    ) : (
      <AiOutlineStar key={i} className="text-primary" size={20} />
    )
  );

  return (
    <div className="reel-testimonial">
      <div className="flex items-center gap-1 mb-2">{stars}</div>

      <p>{testimonialText}</p>
      <div className="reel-testimonial-author">
        <Image
          src={`/images/testimonials/${testimonialImageSrc}`}
          alt="Testimonial Author"
          width={60}
          height={60}
          className="author-image"
        />
        <div className="author-info">
          <p className="author-name">{authorName}</p>
          <p className="author-title">{authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default ReelTestimonial;
