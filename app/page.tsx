// File: /app/page.tsx
// Homepage showcasing all 12 display testing tools

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ScreenTest - Free Professional Display Testing Tools',
  description: 'Complete suite of 12 free display testing tools. Test for dead pixels, backlight bleeding, color accuracy, brightness uniformity, and more. Instant testing, no signup required.',
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
      name: 'Pixel Fixer',
      href: '/pixel-fixer',
      description: 'Attempt to fix stuck pixels with rapid color flashing (20-60% success).',
      icon: '🔧',
      color: 'from-orange-500 to-red-500',
      popular: true
    },
    {
      name: 'Color Test',
      href: '/color-test',
      description: 'Comprehensive RGB color accuracy and gradient testing.',
      icon: '🎨',
      color: 'from-pink-500 via-purple-500 to-indigo-500'
    },
    {
      name: 'Brightness Test',
      href: '/brightness-test',
      description: 'Test brightness uniformity and backlight consistency across screen.',
      icon: '☀️',
      color: 'from-yellow-400 to-orange-400',
      textDark: true
    },
    {
      name: 'Contrast Test',
      href: '/contrast-test',
      description: 'Evaluate contrast ratio and black level performance.',
      icon: '◐',
      color: 'from-gray-800 to-gray-900'
    },
    {
      name: 'Monitor Test',
      href: '/monitor-test',
      description: 'Complete monitor diagnostics with multiple test patterns.',
      icon: '🖥️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Burn-in Prevention',
      href: '/burn-in-prevention',
      description: 'Prevent OLED burn-in with pixel shifting and screen cycling.',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Refresh Rate Test',
      href: '/refresh-rate-test',
      description: 'Test actual refresh rate and motion smoothness.',
      icon: '⚡',
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Response Time Test',
      href: '/response-time-test',
      description: 'Measure pixel response time and ghosting performance.',
      icon: '⏱️',
      color: 'from-red-500 to-rose-600'
    },
    {
      name: 'Screen Resolution',
      href: '/screen-resolution',
      description: 'Detect your screen resolution and pixel density (PPI).',
      icon: '📐',
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Stats Section */}
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

      {/* Tools Grid */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Complete Testing Suite
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Choose any tool to start testing your display instantly
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

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4 ${tool.textDark ? 'text-gray-800' : ''}`}>
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

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why ScreenTest?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Testing</h3>
              <p className="text-gray-600">
                No downloads, no installation, no signup. Tests load instantly in your browser and work on all devices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save Money</h3>
              <p className="text-gray-600">
                Professional testing services charge $35-100. Our tools are completely free, saving you hundreds per display tested.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                ✅
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-gray-600">
                Same tests used by manufacturers and professional reviewers. 90%+ detection rate for display defects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Test Your Display Now
          </h2>
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
