// File: /components/Footer.tsx
// Modern footer with all 13 tools, no fake social links
// P1 FIX: Added all tools (was only 5), removed fake social media links

import Link from 'next/link'

export default function Footer() {
  const toolsCol1 = [
    { name: 'Black Screen', href: '/black-screen', icon: '⬛' },
    { name: 'White Screen', href: '/white-screen', icon: '⬜' },
    { name: 'Dead Pixel Test', href: '/dead-pixel-test', icon: '🔍' },
    { name: 'Stuck Pixel Test', href: '/stuck-pixel-test', icon: '📌' },
    { name: 'Pixel Fixer', href: '/pixel-fixer', icon: '🔧' },
    { name: 'Color Test', href: '/color-test', icon: '🎨' },
    { name: 'Brightness Test', href: '/brightness-test', icon: '☀️' },
  ]

  const toolsCol2 = [
    { name: 'Contrast Test', href: '/contrast-test', icon: '◐' },
    { name: 'Monitor Test', href: '/monitor-test', icon: '🖥️' },
    { name: 'Burn-in Prevention', href: '/burn-in-prevention', icon: '🛡️' },
    { name: 'Refresh Rate Test', href: '/refresh-rate-test', icon: '⚡' },
    { name: 'Response Time Test', href: '/response-time-test', icon: '⏱️' },
    { name: 'Screen Resolution', href: '/screen-resolution', icon: '📐' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 32 32" className="w-full h-full">
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
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ScreenTest
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional Display Testing Tools. Free online suite for testing dead pixels,
              backlight bleeding, color accuracy, brightness, and more.
            </p>

            {/* Quick Links */}
            <div className="space-y-2">
              <Link href="/about" className="block font-medium text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block font-medium text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/guides" className="block font-medium text-gray-400 hover:text-white transition-colors">
                Guides
              </Link>
              <Link href="/privacy" className="block font-medium text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block font-medium text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Testing Tools Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              Testing Tools
            </h3>
            <ul className="space-y-3">
              {toolsCol1.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="font-medium">
                      {tool.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing Tools Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              More Tools
            </h3>
            <ul className="space-y-3">
              {toolsCol2.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="font-medium">
                      {tool.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why ScreenTest Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              Why ScreenTest?
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">&#10003;</span>
                <span>100% free, no downloads required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">&#10003;</span>
                <span>Works on all devices and browsers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">&#10003;</span>
                <span>13 professional testing tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">&#10003;</span>
                <span>No account or registration needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">&#10003;</span>
                <span>Privacy-first: no data collected</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ScreenTest. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Professional display testing for monitors, TVs, and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
