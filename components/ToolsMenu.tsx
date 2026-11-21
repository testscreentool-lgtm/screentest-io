// File: /components/ToolsMenu.tsx
// Navigation menu with all 13 display testing tools
// P1 FIX: Added stuck-pixel-test to tools list, removed dead guide links

'use client'

import Link from 'next/link'
import { useState } from 'react'

const tools = [
  { name: 'Black Screen', href: '/black-screen', icon: '⬛' },
  { name: 'White Screen', href: '/white-screen', icon: '⬜' },
  { name: 'Dead Pixel Test', href: '/dead-pixel-test', icon: '🔍' },
  { name: 'Stuck Pixel Test', href: '/stuck-pixel-test', icon: '📌' }, // P1 FIX: Added
  { name: 'Pixel Fixer', href: '/pixel-fixer', icon: '🔧' },
  { name: 'Color Test', href: '/color-test', icon: '🎨' },
  { name: 'Brightness Test', href: '/brightness-test', icon: '☀️' },
  { name: 'Contrast Test', href: '/contrast-test', icon: '◐' },
  { name: 'Monitor Test', href: '/monitor-test', icon: '🖥️' },
  { name: 'Burn-in Prevention', href: '/burn-in-prevention', icon: '🛡️' },
  { name: 'Refresh Rate Test', href: '/refresh-rate-test', icon: '⚡' },
  { name: 'Response Time Test', href: '/response-time-test', icon: '⏱️' },
  { name: 'Screen Resolution', href: '/screen-resolution', icon: '📐' },
]

// P1 FIX: Removed dead guide links, only link to the guides hub
const guides = [
  { name: 'All Guides', href: '/guides', icon: '📚' },
]

export default function ToolsMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Using Favicon Design */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="6" fill="url(#logo-grad)" className="group-hover:opacity-90 transition-opacity"/>
                <g transform="translate(8, 8)">
                  <rect x="0" y="0" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="6" y="0" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="12" y="0" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="0" y="6" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="6" y="6" width="4" height="4" rx="1" fill="#ffffff"/>
                  <rect x="12" y="6" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="0" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="6" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="12" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                </g>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              ScreenTest
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Home */}
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>

            {/* Display Tools Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Display Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition group/item"
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="text-gray-700 group-hover/item:text-gray-900 font-medium">
                        {tool.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Guides Link */}
            <Link href="/guides" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Guides
            </Link>

            {/* About */}
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>

            {/* Contact */}
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-4 py-2 text-sm font-semibold text-gray-500">Display Tools</div>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-gray-700 font-medium">{tool.name}</span>
                </Link>
              ))}

              <div className="border-t border-gray-200 mt-4 pt-4">
                <Link
                  href="/guides"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Guides
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
