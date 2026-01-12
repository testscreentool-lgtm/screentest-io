// File: /app/guides/page.tsx
// Guides & Articles Landing Page

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Display Testing Guides & Articles | Expert Monitor Resources',
  description: 'Comprehensive guides on display testing, monitor calibration, dead pixel prevention, and choosing the right screen. Expert advice for professionals and enthusiasts.',
  keywords: ['monitor guides', 'display testing', 'calibration guides', 'dead pixel guide', 'monitor buying guide'],
  authors: [{ name: 'ScreenTest' }],
  alternates: { canonical: 'https://screentest.io/guides' },
  robots: { index: true, follow: true },
}

export default function GuidesPage() {
  const guides = [
    {
      title: 'Complete Display Buying Guide 2025',
      href: '/guides/display-buying-guide',
      description: 'Everything you need to know about choosing the right monitor or display. Panel types, resolution, refresh rate, and more.',
      category: 'Buying Guides',
      readTime: '12 min',
      icon: '📖'
    },
    {
      title: 'Dead Pixels: Complete Guide',
      href: '/guides/dead-pixel-guide',
      description: 'What causes dead pixels, how to test for them, warranty policies, and whether they can be fixed.',
      category: 'Troubleshooting',
      readTime: '8 min',
      icon: '🔍'
    },
    {
      title: 'Professional Monitor Calibration',
      href: '/guides/monitor-calibration',
      description: 'Step-by-step guide to calibrating your display for color accuracy. Essential for photographers and designers.',
      category: 'Calibration',
      readTime: '15 min',
      icon: '⚙️'
    },
    {
      title: 'Gaming Monitor Guide 2025',
      href: '/guides/gaming-monitor-guide',
      description: 'Best specs for gaming: refresh rate, response time, panel type, resolution. Plus recommendations by budget.',
      category: 'Gaming',
      readTime: '10 min',
      icon: '🎮'
    },
    {
      title: 'Understanding Display Panel Types',
      href: '/guides/panel-types',
      description: 'IPS vs TN vs VA vs OLED. Pros, cons, and which panel type is right for your needs.',
      category: 'Technical',
      readTime: '7 min',
      icon: '📱'
    },
    {
      title: 'How to Test Your New Monitor',
      href: '/guides/test-new-monitor',
      description: 'Complete testing checklist for new displays. Test for defects before your return window closes.',
      category: 'Testing',
      readTime: '6 min',
      icon: '✅'
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
          <h3 className="text-xl font-bold text-gray-900 mb-2">📚 More Guides Coming Soon</h3>
          <p className="text-gray-600">
            We're constantly adding new expert guides on display testing, calibration, and monitor technology.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Browse by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold text-gray-900 mb-1">Buying Guides</h3>
              <p className="text-sm text-gray-600">Monitor recommendations</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-1">Calibration</h3>
              <p className="text-sm text-gray-600">Professional setup</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-900 mb-1">Troubleshooting</h3>
              <p className="text-sm text-gray-600">Fix display issues</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold text-gray-900 mb-1">Technical</h3>
              <p className="text-sm text-gray-600">Deep dives & specs</p>
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
            View All Tools →
          </Link>
        </div>
      </section>
    </div>
  )
}
