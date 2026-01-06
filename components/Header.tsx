'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Modern Redesign */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Modern Icon */}
            <div className="relative w-10 h-10">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-xl transform group-hover:scale-105 transition-transform duration-200"></div>
              
              {/* Screen Grid Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-[3px]">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-[6px] h-[6px] rounded-[2px] transition-all duration-200 ${
                        i === 4 
                          ? 'bg-white shadow-sm' 
                          : 'bg-white/40 group-hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Modern Typography - No .io */}
            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
                ScreenTest
              </span>
              <span className="text-[9px] font-medium text-blue-600 tracking-wider uppercase mt-0.5">
                Display Tools
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#tools" className="text-gray-600 hover:text-blue-600 font-medium transition">
              Tools
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#tools"
                className="text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
