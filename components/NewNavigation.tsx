'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

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
    <nav className="bg-white shadow-sm">
      <div className="max-w-[85rem] mx-auto">

        <div className="flex justify-between items-center h-20 px-5">

          {/* Logo */}
          <div>
            <Image src="/images/new-navbar/logo.svg" alt="Logo" width={209} height={40} />
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
              className="text-[#8480FF]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#8480FF] hover:text-[#6b68d9] py-2 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-[#8480FF] hover:bg-[#6b68d9] text-white px-6 py-2 rounded-lg font-medium transition-colors w-full mt-2">
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}