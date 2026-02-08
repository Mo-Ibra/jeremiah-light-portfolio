export interface VideoTestimonial {
  id: number;
  thumbnail: string;
  name: string;
  avatarImage: string;
  videoId: string;
}

export interface TextTestimonial {
  name: string;
  avatar: string;
  avatarBg: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  isPhoto: boolean;
  photoUrl: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Mike Ndoye",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    videoId: "243psjy9l4",
  },
  {
    id: 2,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Mike Ndoye",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    videoId: "243psjy9l4",
  },
  {
    id: 3,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Mike Ndoye",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    videoId: "243psjy9l4",
  },
  {
    id: 4,
    thumbnail: "/images/new-testimonials/testimonials-1.png",
    name: "Mike Ndoye",
    avatarImage: "/images/new-testimonials/testimonial-2.svg",
    videoId: "243psjy9l4",
  },
];

export const TEXT_TESTIMONIALS: TextTestimonial[] = [
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