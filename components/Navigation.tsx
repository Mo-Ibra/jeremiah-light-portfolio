"use client";

import Image from "next/image";
import React, { useState } from "react";

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Container */}
        <div className="flex items-center justify-between px-6 py-4 lg:px-24">
          
          {/* Logo Desktop only */}
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-4xl font-extralight tracking-tighter text-white font-mono">
              Harcherran
            </h1>
            {/* <Image src={"/images/navbar/logo.png"} width={195} height={42} alt="Logo" /> */}
            <p className="text-xs lg:text-base text-white">
              Performance Creative Partner
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-transparent backdrop-blur-sm rounded-full px-2 py-2 shadow-lg border border-gray-300 space-x-2">
            <button className="px-6 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-all hover:scale-105">
              Home
            </button>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-800 transition-colors rounded-full hover:bg-white/50"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-800 transition-colors rounded-full hover:bg-white/50"
            >
              Case Studies
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-800 transition-colors rounded-full hover:bg-white/50"
            >
              About
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-800 transition-colors rounded-full hover:bg-white/50"
            >
              Process
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:flex px-6 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-all hover:scale-105 items-center space-x-2">
            <span>Let's Talk</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l8 8-8 8-1.5-1.5L12 9H0V7h12L6.5 1.5z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-center space-y-1 p-2"
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-20" : "opacity-0"
          }`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute top-0 left-0 right-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
            <div className="flex flex-col">
              <h1 className="text-xl font-extralight tracking-tighter text-white font-mono">
                Harcherran
              </h1>
              <p className="text-xs text-gray-600">
                Performance Creative Partner
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-all text-sm flex items-center space-x-2">
                <span>Let's Talk</span>
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0l8 8-8 8-1.5-1.5L12 9H0V7h12L6.5 1.5z" />
                </svg>
              </button>

              <button onClick={closeMenu} className="p-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="px-6 py-6 space-y-6">
            <a
              href="#"
              className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Case Studies
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors"
              onClick={closeMenu}
            >
              Process
            </a>
          </div>

          {/* Mobile CTA Button */}
          <div className="px-6 pb-8">
            <button className="w-full py-4 bg-white rounded-full text-gray-800 font-semibold shadow-md hover:shadow-lg transition-all text-center">
              Book Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
