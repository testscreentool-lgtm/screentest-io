// File: /app/guides/page.tsx
// Guides & Articles Landing Page
// P1 FIX: Removed 6 dead guide links, replaced with internal tool links that actually exist

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Display Testing Guides & Articles | Expert Monitor Resources',
  description: 'Comprehensive guides on display testing, monitor calibration, dead pixel prevention, and choosing the right screen. Expert advice for professionals and enthusiasts.',
  keywords: ['monitor guides', 'display testing', 'calibration guides', 'dead pixel guide', 'monitor buying guide'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/guides' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Display Testing Guides & Articles | Expert Monitor Resources',
    description: 'Comprehensive guides on display testing, monitor calibration, dead pixel prevention, and choosing the right screen.',
    type: 'website',
    url: 'https://screentest.io/guides',
    siteName: 'ScreenTest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Display Testing Guides & Articles | Expert Monitor Resources',
    description: 'Expert guides on display testing, monitor calibration, and dead pixel prevention.',
  },
}

export default function GuidesPage() {
  // P1 FIX: These now link to actual existing tool pages instead of non-existent /guides/* routes
  const guides = [
    {
      title: 'Dead Pixels: Complete Testing Guide',
      href: '/dead-pixel-test',
      description: 'What causes dead pixels, how to test for them, warranty policies, and whether they can be fixed. Use our free tool to check your screen.',
      category: 'Troubleshooting',
      readTime: '8 min',
      icon: '🔍'
    },
    {
      title: 'Stuck Pixel Detection & Repair',
      href: '/stuck-pixel-test',
      description: 'Find and fix stuck pixels on any display. Learn the difference between stuck and dead pixels, plus try our pixel fixer tool.',
      category: 'Troubleshooting',
      readTime: '6 min',
      icon: '🔧'
    },
    {
      title: 'Monitor Color Calibration',
      href: '/color-test',
      description: 'Step-by-step guide to testing color accuracy. Essential for photographers and designers working with RGB color spaces.',
      category: 'Calibration',
      readTime: '10 min',
      icon: '🎨'
    },
    {
      title: 'Complete Monitor Testing Suite',
      href: '/monitor-test',
      description: '8 professional tests in one tool: dead pixels, backlight bleed, colors, gradients, text clarity, and response time.',
      category: 'Testing',
      readTime: '12 min',
      icon: '🖥️'
    },
    {
      title: 'Refresh Rate: Are You Really at 144Hz?',
      href: '/refresh-rate-test',
      description: 'Verify your monitor runs at true 144Hz, 240Hz, or 360Hz. 40-60% of users are stuck at 60Hz without knowing it.',
      category: 'Gaming',
      readTime: '7 min',
      icon: '⚡'
    },
    {
      title: 'OLED Burn-in Prevention Guide',
      href: '/burn-in-prevention',
      description: 'Protect your OLED TV, phone, or monitor from permanent image retention. Free screensaver patterns included.',
      category: 'Protection',
      readTime: '6 min',
      icon: '🛡️'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Display Testing Guides
          </h1>
          <p className="text-xl text-blue-100">
            Expert advice on monitor testing, calibration, and choosing the right display
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{guide.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-blue-600 mb-1">{guide.category}</div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                    {guide.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {guide.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{guide.readTime} read</span>
                <span className="text-blue-600 font-semibold group-hover:gap-1 flex items-center transition">
                  Read Guide
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">More Guides Coming Soon</h3>
          <p className="text-gray-600">
            We are constantly adding new expert guides on display testing, calibration, and monitor technology.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Browse by Category</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🖥️</div>
              <h3 className="font-bold text-gray-900 mb-1">Monitor Testing</h3>
              <p className="text-sm text-gray-600">Complete display tests</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-bold text-gray-900 mb-1">Calibration</h3>
              <p className="text-sm text-gray-600">Color accuracy setup</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-900 mb-1">Troubleshooting</h3>
              <p className="text-sm text-gray-600">Fix display issues</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-900 mb-1">Gaming</h3>
              <p className="text-sm text-gray-600">Performance testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Test Your Display Now</h2>
          <p className="text-xl text-blue-100 mb-8">
            Use our free professional tools to test your monitor for defects
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View All Tools
          </Link>
        </div>
      </section>
    </div>
  )
}
