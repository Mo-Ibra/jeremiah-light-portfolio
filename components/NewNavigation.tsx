'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Process', href: '#' },
  ]

  return (
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
          <div className="hidden md:block">
            <button className="bg-[#8480FF] hover:bg-[#6b68d9] text-white px-6 py-2 rounded-lg font-medium transition-colors">
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg z-40 overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#8480FF] hover:text-[#6b68d9] py-3 font-medium border-b border-gray-50 last:border-none flex items-center justify-between group"
                  >
                    {link.label}
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="text-xs"
                    >
                      →
                    </motion.span>
                  </Link>
                ))}
                <div className="pt-4">
                  <button className="bg-[#8480FF] hover:bg-[#6b68d9] text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95 w-full">
                    Let's Talk
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
