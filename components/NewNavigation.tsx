'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnnouncementBar from './AnnouncementBar'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
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

          <div className="flex justify-between items-center h-20 px-5 relative z-50 bg-white">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src="/images/new-navbar/logo.svg" alt="Logo" width={209} height={40} className="w-[160px] md:w-[209px]" />
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
            <div className="hidden md:block" onClick={() => location.href = "#cta"}>
              <button className="bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-md active:scale-95 cursor-pointer">
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#8480FF] p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-40 overflow-hidden"
              >
                <div className="flex flex-col gap-1 p-5 pt-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[#8480FF] hover:text-[#6b68d9] py-3 font-medium border-b border-gray-50 last:border-none flex items-center justify-between group"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.3 }}
                    className="pt-4 pb-2"
                  >
                    <button className="bg-gradient-to-b from-[#8480FF] to-[#6b68d9] hover:contrast-125 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95 w-full">
                      Let's Talk
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}
