// File: /components/ToolsMenu.tsx
// Navigation menu with favicon logo design

'use client'

import Link from 'next/link'
import { useState } from 'react'

const tools = [
  { name: 'Black Screen', href: '/black-screen', icon: '⬛', color: 'bg-gray-900' },
  { name: 'White Screen', href: '/white-screen', icon: '⬜', color: 'bg-gray-100' },
  { name: 'Dead Pixel Test', href: '/dead-pixel-test', icon: '🔍', color: 'bg-gradient-to-r from-black to-white' },
  { name: 'Red Screen', href: '/red-screen', icon: '🟥', color: 'bg-red-600' },
  { name: 'Green Screen', href: '/green-screen', icon: '🟩', color: 'bg-green-600' },
  { name: 'Blue Screen', href: '/blue-screen', icon: '🟦', color: 'bg-blue-600' },
  { name: 'Yellow Screen', href: '/yellow-screen', icon: '🟨', color: 'bg-yellow-400' },
  { name: 'Cyan Screen', href: '/cyan-screen', icon: '🟦', color: 'bg-cyan-400' },
  { name: 'Magenta Screen', href: '/magenta-screen', icon: '🟪', color: 'bg-fuchsia-600' },
  { name: 'Gray Screen', href: '/gray-screen', icon: '⬜', color: 'bg-gray-500' },
  { name: 'Pixel Fixer', href: '/pixel-fixer', icon: '🔧', color: 'bg-gradient-to-r from-red-500 to-blue-500' },
]

export default function ToolsMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Using Favicon Design */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Favicon Logo SVG */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Background rounded square */}
                <rect width="32" height="32" rx="6" fill="url(#logo-grad)" className="group-hover:opacity-90 transition-opacity"/>
                
                {/* Screen grid pattern (3x3) */}
                <g transform="translate(8, 8)">
                  {/* Row 1 */}
                  <rect x="0" y="0" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="6" y="0" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="12" y="0" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  
                  {/* Row 2 - Center pixel highlighted */}
                  <rect x="0" y="6" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="6" y="6" width="4" height="4" rx="1" fill="#ffffff"/>
                  <rect x="12" y="6" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  
                  {/* Row 3 */}
                  <rect x="0" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="6" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="12" y="12" width="4" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                </g>
              </svg>
            </div>
            
            {/* Brand Name */}
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              ScreenTest
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Home Button */}
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

              {/* Dropdown */}
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

            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
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
