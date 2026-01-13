import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-poppins font-bold text-2xl text-white">Screen</span>
              <span className="font-poppins font-semibold text-2xl text-indigo-400">Test</span>
              <span className="font-inter text-xl text-gray-400">.io</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional display testing tools for dead pixels, color accuracy, and monitor calibration.
            </p>
          </div>

          {/* Testing Tools Column */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg mb-4">Testing Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dead-pixel-test" className="text-sm hover:text-indigo-400 transition-colors">
                  Dead Pixel Test
                </Link>
              </li>
              <li>
                <Link href="/color-test" className="text-sm hover:text-indigo-400 transition-colors">
                  Color Test
                </Link>
              </li>
              <li>
                <Link href="/brightness-test" className="text-sm hover:text-indigo-400 transition-colors">
                  Brightness Test
                </Link>
              </li>
              <li>
                <Link href="/contrast-test" className="text-sm hover:text-indigo-400 transition-colors">
                  Contrast Test
                </Link>
              </li>
              <li>
                <Link href="/refresh-rate-test" className="text-sm hover:text-indigo-400 transition-colors">
                  Refresh Rate Test
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides Column */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg mb-4">Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/display-buying-guide" className="text-sm hover:text-indigo-400 transition-colors">
                  Display Buying Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/dead-pixel-guide" className="text-sm hover:text-indigo-400 transition-colors">
                  Dead Pixel Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/monitor-calibration" className="text-sm hover:text-indigo-400 transition-colors">
                  Monitor Calibration
                </Link>
              </li>
              <li>
                <Link href="/guides/gaming-monitor-guide" className="text-sm hover:text-indigo-400 transition-colors">
                  Gaming Monitor Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ScreenTest.io. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
