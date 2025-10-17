"use client";

import { useEffect, useState } from "react";
import { Instagram, Facebook, X } from "lucide-react";

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
    <footer className="py-10 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center text-center lg:text-left">
          {/* Left - Time */}
          <div>
            <div className="text-primary font-medium mb-1">{time}</div>
            <div className="text-sm text-gray-600">
              Local Time in London, United Kingdom
            </div>
          </div>

          {/* Center - Copyright and Links */}
          <div>
            <div className="text-gray-900 font-medium mb-3">
              © 2025 HARCHARRAN LIMITED. All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 ">
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
          </div>

          {/* Right - Email + Social */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="text-gray-900 font-medium">
              jeremiah@harcharran.com
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200 transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
