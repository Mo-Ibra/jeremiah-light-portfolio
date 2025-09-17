/**
 * 📌 Reels Data
 *
 * This file contains the list of reels that will appear in the website.
 *
 * 👉 How to use:
 * - Each reel is one object inside the `reels` array below.
 * - To add a new reel → copy one object, paste it below, and update the values.
 * - To remove a reel → just delete the object from the list.
 *
 * ⚠️ Important:
 * - Do not remove `aspectRatio`, `videoId`, `views`, or `platform` keys (they are required).
 * - If there is no testimonial → set `hasTestimonial: false` and leave the testimonial fields as `null`.
 * - If there is a testimonial → set `hasTestimonial: true` and fill in the testimonial fields.
 * - Images should be placed in `/public/images/testimonials/`.
 * - The `videoId` comes from Wistia (ask developer if unsure).
 *
 * Example of filling testimonial:
 * {
 *   aspectRatio: "9/16",
 *   videoId: "example123",
 *   views: "1.2M",
 *   platform: "TikTok",
 *   hasTestimonial: true,
 *   testimonialText: "This was an amazing experience! I'm so happy.",
 *   testimonialImageSrc: "1.jpg",   // must match the file name in /public/images/testimonials/
 *   authorName: "John Doe",
 *   authorRole: "CEO, Example Inc.",
 * }
 */
export const videoReels = [
  {
    aspectRatio: "9/16",
    videoId: "lbokfo5iv3", // Wistia video ID
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true, // true = show testimonial section, false = hide it
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "1.jpg", // Name of testimonial image in /public/images/testimonials/
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
    rating: 5,
  },
  {
    aspectRatio: "9/16",
    videoId: "69qiuv07hz",
    views: "1.8M",
    platform: "Instagram",
    hasTestimonial: false, // No testimonial → leave these as null
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "ktw4hsumt8",
    views: "3.5M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "n3q3weig8v",
    views: "925K",
    platform: "YouTube Shorts",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "2.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
    rating: 5,
  },
  {
    aspectRatio: "9/16",
    videoId: "1ku3mu07k8",
    views: "1.2M",
    platform: "Facebook",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "dorz4lqu14",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "3.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
    rating: 5,
  },
  {
    aspectRatio: "9/16",
    videoId: "glq2nisk1j",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "4.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
    rating: 4,
  },
  {
    aspectRatio: "9/16",
    videoId: "0l19efg1jt",
    views: "4.1M",
    platform: "Instagram",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
];

/**
 * 📌 Portfolio Reels Data
 *
 * 👉 How to use:
 * - Each reel is one object inside the `portfolioReels` array below.
 * - To add a new reel → copy one object, paste it below, and update the values.
 * - To remove a reel → just delete the object from the list.
 *
 * ⚠️ Important:
 * - `aspectRatio`: Use "9/16" for vertical videos, "1/1" for square, etc.
 * - `videoId`: Wistia video ID (ask developer if unsure).
 * - `views`: Text string for views, e.g. "2.3M".
 * - `platform`: The client/platform name (TikTok, Instagram, etc.).
 * - If there is no testimonial → set `hasTestimonial: false` and leave testimonial fields as `null`.
 * - Images should be placed in `/public/images/testimonials/`.
 */

export const portfolioReels = [
  {
    aspectRatio: "9/16",
    videoId: "s3pthor4vn",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "1.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "dkzw4n1wr0",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "2.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "asoftd14pu",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "1iu0jtd817",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "axpdql1sfx",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "idyc2rfkjp",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "2exlvz5s5n",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "3.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "sbbrj9d2ag",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "4.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "f4pg22t46p",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "5.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "urul1qdxg0",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "6.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "vb44bp1fb5",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "5j96facrfq",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "b606gkduct",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "shz4x8pyt5",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "7.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
  {
    aspectRatio: "9/16",
    videoId: "fx0tr3a1h9",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: false,
    testimonialText: null,
    testimonialImageSrc: null,
    authorName: null,
    authorRole: null,
  },
  {
    aspectRatio: "9/16",
    videoId: "dzwspp5lfe",
    views: "2.3M",
    platform: "TikTok",
    hasTestimonial: true,
    testimonialText:
      "That was an amazing experience. I had a great time and learned a lot. I'm so grateful for the opportunity to work with Jeremiah.",
    testimonialImageSrc: "8.jpg",
    authorName: "Jeremiah Smith",
    authorRole: "CEO, Company Name",
  },
];

/**
 * 🔹 Services Data
 * This file stores all the services displayed on the website.
 *
 * 🔹 How to edit:
 * Each service is stored as an object with:
 *   - title: string (service name, shown as heading)
 *   - description: string (short text shown under the title)
 *   - imagesCarousel: array of images for the service slideshow
 *
 * 🔹 To add a new service:
 * 1. Copy one of the existing service objects { ... }
 * 2. Change the "title", "description", and update the "imagesCarousel"
 * 3. Each image inside imagesCarousel must have:
 *      - id: unique number (1, 2, 3...)
 *      - image: path to the image (must be inside /public/images/)
 *      - alt: description of the image (important for accessibility & SEO)
 * 4. Save the file — the website will update automatically.
 */

export const servicesData = [
  {
    title: "User Generated Content",
    description:
      "Authentic high-converting, organic style user generated content, made to engage and resonate with your target audience",
    imagesCarousel: [
      {
        id: 1,
        image: "/images/services/User-Generated-Content/1.png",
        alt: "Family with children outdoors",
      },
      {
        id: 2,
        image: "/images/services/User-Generated-Content/2.png",
        alt: "Family with children outdoors",
      },
      {
        id: 3,
        image: "/images/services/User-Generated-Content/3.png",
        alt: "Family with children outdoors",
      },
    ],
  },
  {
    title: "Studio Content",
    description:
      "High Production Studio content that will WOW your consumers, build trust, and elevate your brand presence globally",
    imagesCarousel: [
      {
        id: 1,
        image: "/images/services/Studio-Content/1.jpg",
        alt: "Three women in studio setting",
      },
      {
        id: 2,
        image: "/images/services/Studio-Content/2.jpg",
        alt: "Three women in studio setting",
      },
      {
        id: 3,
        image: "/images/services/Studio-Content/3.png",
        alt: "Three women in studio setting",
      },
    ],
  },
  {
    title: "AI Generated Content",
    description:
      "Hyper-realistic AI generated content made for quick testing and iteration - so we can cut costs and scale at the speed of light",
    imagesCarousel: [
      {
        id: 1,
        image: "/images/services/AI-Generated-Content/1.jpg",
        alt: "AI generated product advertisement",
      },
      {
        id: 2,
        image: "/images/services/AI-Generated-Content/2.png",
        alt: "AI generated product advertisement",
      },
      {
        id: 3,
        image: "/images/services/AI-Generated-Content/3.jpg",
        alt: "AI generated product advertisement",
      },
    ],
  },
];

/**
 * ===============================
 *   About Section Static Content
 * ===============================
 *
 * This file contains text and image data
 * for the "About" section of the website.
 *
 * 👉 Non-technical user guide:
 * - To change the NAME → update the "name" value
 * - To change the ROLE → update the "role" value
 * - To change the DESCRIPTION → edit the text in "description"
 * - To change the PHOTO → replace the file in /public/images
 *   and update the "image" path
 *
 * ⚠️ Important:
 * - Keep the text inside quotes (" ")
 * - Do not remove the commas at the end of each line
 * - The image path should start with "/images/"
 */

export const aboutData = {
  name: "Jeremiah.",
  role: "Creative Performance Architect",
  description:
    "I help brands grow by leveraging data-driven insights and creative strategies. From corporate strategist to leading innovative campaigns, I thrive in transforming brands.",
  image: "/images/me.png",
};

/**
 * ===============================
 *   FAQ Section Static Content
 * ===============================
 *
 * This file contains the list of Questions & Answers
 * for the "FAQ" section of the website.
 *
 * 👉 Non-technical user guide:
 * - To change a QUESTION → edit the "question" text
 * - To change an ANSWER → edit the "answer" text
 * - To ADD a new FAQ → copy one of the objects below
 *   (everything inside { ... }) and paste it above the last one,
 *   then change the question and answer.
 *
 * ⚠️ Important:
 * - Keep the text inside quotes (" ")
 * - Do not remove the commas between each item
 * - Make sure each FAQ has BOTH a "question" and an "answer"
 */

export const faqData = [
  {
    question: "How do we know your ads will work for our brand?",
    answer:
      "My process is deeply collaborative. I research your brand and audience, then build high-converting ad content backed by performance insights and consistent iteration.",
  },
  {
    question: "How long until we get our first ads?",
    answer:
      "My turnaround time is ridiculously fast. If there is existing content I can deliver the first set of ads within 6 to 12 days depending on complexity. If content is needing to be sourced, then the initial time taken will be longer - around 21 to 28 days. This includes time for strategy development, creative production, and any necessary revisions to ensure top-quality content - once everything is set in place, content will be delivered to you every Sunday.",
  },
  {
    question: "What does your pricing look like?",
    answer:
      "Pricing is tailored based on your goals and scope. I don't do generic packages - every quote is custom, clear, value-focused with zero hidden fees; and fair for both parties.For a no obligation quote - use the form below, and lets talk about it.",
  },
  {
    question: "What's the commitment?",
    answer:
      "Our standard agreement requires a minimum commitment of 3 months. This allow us to effectively plan, execute, and optimize your campaigns for the best possible results.",
  },
  {
    question: "What are next steps?",
    answer:
      "Fill out the form below, book a meeting with me and lets talk about your brand! Please note that due to high demand, I can't take on all applicant. Thus, each submission will be reviewed to check for compatibility - some may be rejected pre-call.",
  },
];
