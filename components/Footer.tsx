// File: /components/Footer.tsx
// Site footer with 4-column layout

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Favicon Logo */}
              <svg viewBox="0 0 32 32" className="w-8 h-8">
                <defs>
                  <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="6" fill="url(#footer-grad)"/>
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
              <span className="text-xl font-bold text-white">ScreenTest</span>
            </div>
            <p className="text-sm text-gray-400">
              Professional Display Testing Tools
            </p>
          </div>

          {/* Color Tests */}
          <div>
            <h3 className="text-white font-semibold mb-4">Color Tests</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/black-screen" className="hover:text-white transition">Black Screen</Link></li>
              <li><Link href="/white-screen" className="hover:text-white transition">White Screen</Link></li>
              <li><Link href="/red-screen" className="hover:text-white transition">Red Screen</Link></li>
              <li><Link href="/green-screen" className="hover:text-white transition">Green Screen</Link></li>
              <li><Link href="/blue-screen" className="hover:text-white transition">Blue Screen</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Testing Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dead-pixel-test" className="hover:text-white transition">Dead Pixel Test</Link></li>
              <li><Link href="/pixel-fixer" className="hover:text-white transition">Pixel Fixer</Link></li>
              <li><Link href="/gray-screen" className="hover:text-white transition">Gray Screen</Link></li>
              <li><Link href="/yellow-screen" className="hover:text-white transition">Yellow Screen</Link></li>
              <li><Link href="/cyan-screen" className="hover:text-white transition">Cyan Screen</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ScreenTest - All Rights Reserved</p>
          <p className="mt-2">Free Professional Display Testing Tools</p>
        </div>
      </div>
    </footer>
  )
}
