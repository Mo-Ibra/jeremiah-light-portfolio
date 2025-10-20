"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour12: false,
        timeZone: "Europe/London",
      };

      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-10 px-6 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center text-center lg:text-left">
          {/* Left - Time (Desktop) / Email + Social (Mobile) */}
          <div className="lg:order-1 order-1">
            {/* Mobile: Email + Social */}
            <div className="lg:hidden flex flex-col items-center gap-4">
              <div className="text-gray-900 font-medium">
                jeremiah@harcharran.com
              </div>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/twitter.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
            {/* Desktop: Time */}
            <div className="hidden lg:block">
              <div className="text-primary font-medium mb-1">{time}</div>
              <div className="text-base text-gray-600">
                Local Time in London, United Kingdom
              </div>
            </div>
          </div>

          {/* Center - Time (Mobile) / Copyright and Links (Desktop) */}
          <div className="lg:order-2 order-2">
            {/* Mobile: Time */}
            <div className="lg:hidden">
              <div className="text-primary font-medium mb-1">{time}</div>
              <div className="text-[10px] text-gray-600">
                Local Time in London, United Kingdom
              </div>
            </div>
            {/* Desktop: Copyright and Links */}
            <div className="hidden lg:block">
              <div className="text-gray-900 font-medium mb-3 text-base">
                © 2025 HARCHARRAN LIMITED.{" "}
                <span className="block md:inline">All Rights Reserved</span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="hover:text-primary transition-colors text-base">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors text-base">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors text-base">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Right - Copyright and Links (Mobile) / Email + Social (Desktop) */}
          <div className="lg:order-3 order-3">
            {/* Mobile: Copyright and Links */}
            <div className="lg:hidden">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#000000090] mb-3">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
              <div className="text-gray-900 font-medium text-xs">
                © 2025 HARCHARRAN LIMITED. All Rights Reserved
              </div>
            </div>
            {/* Desktop: Email + Social */}
            <div className="hidden lg:flex flex-col items-end gap-4">
              <div className="text-gray-900 font-medium">
                jeremiah@harcharran.com
              </div>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center border border-primary transition-colors"
                >
                  <Image
                    src="/images/footer/twitter.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;