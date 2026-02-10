"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  // "/images/logo-carousel/logo-1.svg",
  "/images/logo-carousel/logo-2.svg",
  "/images/logo-carousel/logo-3.svg",
  "/images/logo-carousel/logo-4.svg",
  "/images/logo-carousel/logo-5.svg",
  "/images/logo-carousel/logo-6.svg",
];

function NewLogoCarousel() {
  const repeatedLogos = Array(20).fill(logos).flat();

  return (
    <div className="overflow-hidden relative">
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

export default NewLogoCarousel;