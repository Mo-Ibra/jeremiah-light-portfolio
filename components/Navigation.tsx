"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute md:top-9 left-0 right-0 z-50">
        <div
          className={`flex flex-col px-4 sm:px-6 md:px-6 lg:px-20 xl:px-56 py-2 bg-white/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-[50px] border border-gray-300 md:border-none mx-2.5 md:mx-0 my-2 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[500px]" : "max-h-[60px] md:max-h-[80px]"
          }`}
        >
          {/* Top Section - Always Visible */}
          <div className="flex items-center justify-between">
            {/* Desktop Nav - Combined with Logo and CTA */}
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1 border border-gray-300 space-x-4 justify-center mx-auto md:shadow-sm">
              {/* Logo Inside */}
              <Link href="/">
                <div className="flex flex-col mx-4">
                  <Image
                    src="/images/navbar/logo.svg"
                    width={160}
                    height={40}
                    alt="Logo"
                    className="w-32 lg:w-[160px] h-auto"
                  />
                  <p className="text-[8px] lg:text-[11px] text-white ml-[6px]">
                    Performance Creative Partner
                  </p>
                </div>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-2">
                <a
                  href="#home"
                  className="px-4 py-2 rounded-full transition text-white hover:bg-white/20"
                >
                  Home
                </a>
                <a
                  href="#portfolio"
                  className="px-4 py-2 rounded-full transition text-white hover:bg-white/20"
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  className="px-4 py-2 rounded-full transition text-white hover:bg-white/20"
                >
                  Services
                </a>
                <a
                  href="#case-studies"
                  className="px-4 py-2 rounded-full transition text-white hover:bg-white/20"
                >
                  Case Studies
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 rounded-full transition text-white hover:bg-white/20"
                >
                  About
                </a>
                <a
                  href="#process"
                  className="px-4 py-2 rounded-full transition text-white hover:bg-white/20"
                >
                  Process
                </a>
              </div>

              {/* CTA Inside */}
              <button
                className="flex px-6 py-2 mx-4 bg-white rounded-full font-bold text-gray-700 shadow-md hover:shadow-lg transition-all hover:scale-105 items-center space-x-2 whitespace-nowrap"
                onClick={() => (window.location.href = "#cta")}
              >
                <span>Let&apos;s Talk</span>
              </button>
            </div>

            {/* Mobile Logo - Separate */}
            <Link href="/" className="md:hidden">
              <div className="flex flex-col">
                <Image
                  src="/images/navbar/logo.svg"
                  width={160}
                  height={40}
                  alt="Logo"
                  className="w-32 sm:w-40 h-auto"
                />
                <p className="text-[8px] sm:text-sm text-white ml-[6px]">
                  Performance Creative Partner
                </p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                className="px-8 py-2 rounded-full bg-white text-gray-700 font-bold transition-all text-sm flex items-center space-x-2 relative group"
                onClick={() => (window.location.href = "#cta")}
              >
                <span className="relative">
                  Let&apos;s Talk
                </span>
              </button>

              {/* Burger Menu */}
              <button
                onClick={toggleMenu}
                className="flex flex-col items-center space-y-1 p-2"
              >
                <div
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Content - Expandable */}
          <div
            className={`md:hidden transition-all duration-500 ${
              isMenuOpen ? "opacity-100 mt-6" : "opacity-0 mt-0"
            }`}
          >
            {/* Links */}
            <div className="flex flex-col items-start space-y-4 text-base font-medium text-white">
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-white/70"
              >
                Home
              </a>
              <a
                href="#portfolio"
                onClick={toggleMenu}
                className="hover:text-white/70"
              >
                Portfolio
              </a>
              <a
                href="#case-studies"
                onClick={toggleMenu}
                className="hover:text-white/70"
              >
                Case Studies
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:text-white/70"
              >
                About
              </a>
              <a
                href="#process"
                onClick={toggleMenu}
                className="hover:text-white/70"
              >
                Process
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                className="w-full py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                onClick={() => (window.location.href = "#cta")}
              >
                Book Meeting
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;