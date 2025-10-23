"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/images/hero/logos/1.webp",
  "/images/hero/logos/2.webp",
  "/images/hero/logos/3.webp",
  "/images/hero/logos/4.webp",
  "/images/hero/logos/5.webp",
  "/images/hero/logos/6.webp",
];

function LogoCarousel() {
  const repeatedLogos = Array(20).fill(logos).flat();

  return (
    <div className="overflow-hidden mt-7 md:mt-8 relative">
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -((120 + 48) * logos.length)],
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
    </div>
  );
}

export default LogoCarousel;