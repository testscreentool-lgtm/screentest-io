// File: /app/page.tsx
// CORRECTED Homepage - ONLY 12 tools

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ScreenTest - 12 Professional Display Testing Tools | Free',
  description: 'Complete suite of 12 free display testing tools. Test for dead pixels, color accuracy, brightness, contrast, and more. Professional QA tools used by 10,000+ monthly.',
}

export default function HomePage() {
  const tools = [
    {
      name: 'Black Screen Test',
      href: '/black-screen',
      description: 'Find bright dead pixels and backlight bleeding in 60 seconds.',
      icon: '⬛',
      color: 'from-gray-900 to-gray-800',
      popular: true
    },
    {
      name: 'White Screen Test',
      href: '/white-screen',
      description: 'Detect dark dead pixels and brightness uniformity issues.',
      icon: '⬜',
      color: 'from-gray-100 to-gray-200',
      textDark: true
    },
    {
      name: 'Dead Pixel Test',
      href: '/dead-pixel-test',
      description: 'Comprehensive 6-color test detects 90%+ of all pixel defects.',
      icon: '🔍',
      color: 'from-purple-600 to-indigo-600',
      popular: true
    },
    {
      name: 'Color Test',
      href: '/color-test',
      description: 'RGB color accuracy and display calibration testing.',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Pixel Fixer',
      href: '/pixel-fixer',
      description: 'Attempt to fix stuck pixels (20-60% success rate).',
      icon: '🔧',
      color: 'from-orange-500 to-red-500',
      popular: true
    },
    {
      name: 'Monitor Test',
      href: '/monitor-test',
      description: 'Comprehensive testing suite for professionals.',
      icon: '🖥️',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Brightness Test',
      href: '/brightness-test',
      description: 'Calibrate screen brightness and contrast levels.',
      icon: '☀️',
      color: 'from-yellow-400 to-orange-400',
      textDark: true
    },
    {
      name: 'Contrast Test',
      href: '/contrast-test',
      description: 'Test display contrast and grayscale accuracy.',
      icon: '◐',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Burn-in Prevention',
      href: '/burn-in-prevention',
      description: 'Prevent OLED burn-in with screensaver patterns.',
      icon: '🛡️',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Refresh Rate Test',
      href: '/refresh-rate-test',
      description: 'Detect your monitor refresh rate and Hz.',
      icon: '↻',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Screen Resolution',
      href: '/screen-resolution',
      description: 'Detect screen resolution and pixel density.',
      icon: '📐',
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Response Time Test',
      href: '/response-time-test',
      description: 'Test display response time and ghosting.',
      icon: '⚡',
      color: 'from-violet-600 to-purple-700'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Display Testing Tools
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Complete suite of 12 free tools to test monitors, laptops, phones, and TVs
          </p>
          <div className="flex items-center justify-center gap-8 text-lg">
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100% Free
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Signup
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              All Devices
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600">Professional Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Monthly Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">90%+</div>
              <div className="text-gray-600">Defect Detection</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$300</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Complete Testing Suite
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            12 professional tools for complete display evaluation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                {tool.popular && (
                  <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4`}>
                  {tool.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {tool.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {tool.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Start Test
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why ScreenTest?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Testing</h3>
              <p className="text-gray-600">
                No downloads, no installation, no signup. Tests load instantly in your browser.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save Money</h3>
              <p className="text-gray-600">
                Professional testing services charge $35-100. Our tools are completely free.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-gray-600">
                Same tests used by manufacturers. 90%+ detection rate for display defects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Test Your Display Now</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 10,000+ users who trust ScreenTest for professional display testing
          </p>
          <Link
            href="/black-screen"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Testing →
          </Link>
        </div>
      </section>
    </div>
  )
}
