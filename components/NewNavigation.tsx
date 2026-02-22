'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnnouncementBar from './AnnouncementBar'

export default function Navbar() {

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: "Testimonials", href: "#testimonials" },
    { label: 'Process', href: '#process' },
  ]

  return (

    <>
      <AnnouncementBar />

      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-[85rem] mx-auto">

          <div className="flex justify-between items-center h-14 md:h-20 px-5 relative z-50 bg-white">

            {/* Logo */}
            <div className="flex-shrink-0 md:mt-0 mt-1">
              <Link href="/">
                <Image src="/images/new-navbar/logo.svg" alt="Logo" width={209} height={40} className="w-[130px] md:w-[209px]" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#8480FF] hover:text-[#6b68d9] transition-colors font-medium text-[15px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link href="#cta">
                <button className="group relative overflow-hidden bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-md active:scale-95 cursor-pointer">
                  <span className="relative z-10">Let's Talk</span>
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                </button>
              </Link>
            </div>

            {/* Mobile CTA Button */}
            <div className="md:hidden">
              <Link href="#cta">
                <button className="group relative overflow-hidden bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 text-white px-4 py-2 rounded-lg font-medium text-[13px] transition-all shadow-md active:scale-95 cursor-pointer">
                  <span className="relative z-10 whitespace-nowrap">Schedule Free Ads Audit</span>
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-all duration-700 ease-in-out group-hover:left-[100%]" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
