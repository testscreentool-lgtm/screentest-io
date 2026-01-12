// File: /components/ToolsMenu.tsx
// COMPLETE Navigation - 12 Tools + Guides Section

import Link from 'next/link'

const tools = [
  { name: 'Black Screen', href: '/black-screen', icon: '⬛', description: 'Test for bright dead pixels' },
  { name: 'White Screen', href: '/white-screen', icon: '⬜', description: 'Test for dark dead pixels' },
  { name: 'Dead Pixel Test', href: '/dead-pixel-test', icon: '🔍', description: '6-color cycling test' },
  { name: 'Color Test', href: '/color-test', icon: '🎨', description: 'RGB color accuracy' },
  { name: 'Pixel Fixer', href: '/pixel-fixer', icon: '🔧', description: 'Fix stuck pixels' },
  { name: 'Monitor Test', href: '/monitor-test', icon: '🖥️', description: 'Comprehensive suite' },
  { name: 'Brightness Test', href: '/brightness-test', icon: '☀️', description: 'Calibrate brightness' },
  { name: 'Contrast Test', href: '/contrast-test', icon: '◐', description: 'Test contrast ratio' },
  { name: 'Burn-in Prevention', href: '/burn-in-prevention', icon: '🛡️', description: 'OLED screensaver' },
  { name: 'Refresh Rate Test', href: '/refresh-rate-test', icon: '↻', description: 'Detect Hz' },
  { name: 'Screen Resolution', href: '/screen-resolution', icon: '📐', description: 'Show resolution' },
  { name: 'Response Time Test', href: '/response-time-test', icon: '⚡', description: 'Test ghosting' },
]

// Placeholder guides - add real guides here as you create them
const guides = [
  { name: 'Display Buying Guide', href: '/guides/display-buying-guide', icon: '📖', description: 'How to choose the right monitor' },
  { name: 'Dead Pixel Guide', href: '/guides/dead-pixel-guide', icon: '📝', description: 'Everything about dead pixels' },
  { name: 'Monitor Calibration', href: '/guides/monitor-calibration', icon: '⚙️', description: 'Professional calibration steps' },
  { name: 'Gaming Monitor Guide', href: '/guides/gaming-monitor-guide', icon: '🎮', description: 'Best specs for gaming' },
  { name: 'All Guides', href: '/guides', icon: '📚', description: 'View all articles' },
]

export default function ToolsMenu() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🖥️</span>
            <span className="text-xl font-bold text-gray-900">ScreenTest</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Display Tools Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Display Tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 grid grid-cols-2 gap-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="flex flex-col gap-1 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{tool.icon}</span>
                        <span className="text-sm font-semibold text-gray-900">{tool.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{tool.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <span className="text-xl flex-shrink-0">{guide.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{guide.name}</div>
                        <div className="text-xs text-gray-500">{guide.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" id="mobile-menu-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="py-4 space-y-2">
            {/* Mobile Tools */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">Display Tools</div>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <div>
                    <div className="text-gray-900 font-medium">{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Guides */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">Guides & Articles</div>
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50"
                >
                  <span className="text-xl">{guide.icon}</span>
                  <div>
                    <div className="text-gray-900 font-medium">{guide.name}</div>
                    <div className="text-xs text-gray-500">{guide.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Links */}
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            const button = document.getElementById('mobile-menu-button');
            const menu = document.getElementById('mobile-menu');
            if (button && menu) {
              button.addEventListener('click', () => {
                menu.classList.toggle('hidden');
              });
            }
          }
        `
      }} />
    </nav>
  )
}
