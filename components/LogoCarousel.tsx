"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/images/hero/logos/1.svg",
  "/images/hero/logos/2.svg",
  "/images/hero/logos/3.svg",
  "/images/hero/logos/4.svg",
  "/images/hero/logos/5.svg",
  "/images/hero/logos/6.svg",
];

function LogoCarousel() {
  const repeatedLogos = Array(20).fill(logos).flat();

  return (
    <div className="overflow-hidden mt-12 md:mt-16">
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -((120 + 48) * logos.length)], // 120 width + 48 gap (12 * 4)
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-shrink-0"
          >
            <Image
              src={logo}
              alt={`Logo ${(index % logos.length) + 1}`}
              width={120}
              height={60}
              className="object-contain transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default LogoCarousel;
