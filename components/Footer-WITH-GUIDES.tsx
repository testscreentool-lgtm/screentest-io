// File: /components/Footer.tsx
// Updated Footer with Guides Section

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🖥️</span>
              <span className="text-xl font-bold text-white">ScreenTest</span>
            </div>
            <p className="text-sm text-gray-400">
              Professional Display Testing Tools
            </p>
          </div>

          {/* Testing Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Testing Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/black-screen" className="hover:text-white transition">Black Screen</Link></li>
              <li><Link href="/white-screen" className="hover:text-white transition">White Screen</Link></li>
              <li><Link href="/dead-pixel-test" className="hover:text-white transition">Dead Pixel Test</Link></li>
              <li><Link href="/color-test" className="hover:text-white transition">Color Test</Link></li>
              <li><Link href="/pixel-fixer" className="hover:text-white transition">Pixel Fixer</Link></li>
              <li><Link href="/monitor-test" className="hover:text-white transition">Monitor Test</Link></li>
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">More Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/brightness-test" className="hover:text-white transition">Brightness Test</Link></li>
              <li><Link href="/contrast-test" className="hover:text-white transition">Contrast Test</Link></li>
              <li><Link href="/burn-in-prevention" className="hover:text-white transition">Burn-in Prevention</Link></li>
              <li><Link href="/refresh-rate-test" className="hover:text-white transition">Refresh Rate Test</Link></li>
              <li><Link href="/screen-resolution" className="hover:text-white transition">Screen Resolution</Link></li>
              <li><Link href="/response-time-test" className="hover:text-white transition">Response Time Test</Link></li>
            </ul>
          </div>

          {/* Guides & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Guides & Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="hover:text-white transition">All Guides</Link></li>
              <li><Link href="/guides/display-buying-guide" className="hover:text-white transition">Buying Guide</Link></li>
              <li><Link href="/guides/dead-pixel-guide" className="hover:text-white transition">Dead Pixel Guide</Link></li>
              <li><Link href="/guides/monitor-calibration" className="hover:text-white transition">Calibration Guide</Link></li>
              <li><Link href="/guides/gaming-monitor-guide" className="hover:text-white transition">Gaming Monitors</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ScreenTest - All Rights Reserved</p>
          <p className="mt-2">Free Professional Display Testing Tools & Expert Guides</p>
        </div>
      </div>
    </footer>
  )
}
