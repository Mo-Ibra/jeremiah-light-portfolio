"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <Image
              src="/images/navbar/logo.svg"
              width={160}
              height={40}
              alt="Logo"
              className="w-32 sm:w-40 lg:w-[195px] h-auto"
            />
            <p className="text-xs sm:text-sm lg:text-base text-white ml-[6px]">
              Performance Creative Partner
            </p>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-gray-300 space-x-2">
            <a href="#" className="px-4 py-2 text-white hover:bg-white/20 rounded-full transition">
              Home
            </a>
            <a href="#" className="px-4 py-2 text-white hover:bg-white/20 rounded-full transition">
              Portfolio
            </a>
            <a href="#" className="px-4 py-2 text-white hover:bg-white/20 rounded-full transition">
              Case Studies
            </a>
            <a href="#" className="px-4 py-2 text-white hover:bg-white/20 rounded-full transition">
              About
            </a>
            <a href="#" className="px-4 py-2 text-white hover:bg-white/20 rounded-full transition">
              Process
            </a>
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex px-6 py-2 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 items-center space-x-2">
            <span>Let&apos;s Talk</span>
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l8 8-8 8-1.5-1.5L12 9H0V7h12L6.5 1.5z" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all text-sm flex items-center space-x-2">
              <span>Let&apos;s Talk</span>
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0l8 8-8 8-1.5-1.5L12 9H0V7h12L6.5 1.5z" />
              </svg>
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 backdrop-blur-lg`}
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 left-0 right-0 h-full bg-black/90 border-b border-gray-700 transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            <a href="#" className="text-2xl font-medium text-white hover:text-gray-300" onClick={closeMenu}>
              Home
            </a>
            <a href="#" className="text-2xl font-medium text-white hover:text-gray-300" onClick={closeMenu}>
              Portfolio
            </a>
            <a href="#" className="text-2xl font-medium text-white hover:text-gray-300" onClick={closeMenu}>
              Case Studies
            </a>
            <a href="#" className="text-2xl font-medium text-white hover:text-gray-300" onClick={closeMenu}>
              About
            </a>
            <a href="#" className="text-2xl font-medium text-white hover:text-gray-300" onClick={closeMenu}>
              Process
            </a>

            {/* CTA */}
            <button className="w-full max-w-xs py-4 bg-white rounded-full text-gray-800 font-semibold shadow-md hover:shadow-lg transition-all text-center">
              Book Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
