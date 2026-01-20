// File: /app/page.tsx
// Homepage showcasing all display testing tools

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Screen Test - 12 Free Display Testing Tools',
  description:
    'Test monitors, phones & TVs with 12 professional tools including black screen, white screen & dead pixel tests. Find display defects instantly — free, no download.',
}

export default function HomePage() {
  const tools = [
    {
      name: 'Black Screen Test',
      href: '/black-screen',
      description: 'Find bright dead pixels and backlight bleeding in seconds.',
      icon: '⬛',
      color: 'from-gray-900 to-gray-800',
      popular: true,
    },
    {
      name: 'White Screen Test',
      href: '/white-screen',
      description: 'Detect dark dead pixels and brightness uniformity issues.',
      icon: '⬜',
      color: 'from-gray-100 to-gray-200',
      textDark: true,
    },
    {
      name: 'Dead Pixel Test',
      href: '/dead-pixel-test',
      description: 'Multi-color test detects over 90% of pixel defects.',
      icon: '🔍',
      color: 'from-purple-600 to-indigo-600',
      popular: true,
    },
    {
      name: 'Pixel Fixer',
      href: '/pixel-fixer',
      description: 'Attempt to revive stuck pixels with rapid color flashing.',
      icon: '🔧',
      color: 'from-orange-500 to-red-500',
      popular: true,
    },
    {
      name: 'Color Test',
      href: '/color-test',
      description: 'Check RGB color accuracy and gradient performance.',
      icon: '🎨',
      color: 'from-pink-500 via-purple-500 to-indigo-500',
    },
    {
      name: 'Brightness Test',
      href: '/brightness-test',
      description: 'Test brightness uniformity and backlight consistency.',
      icon: '☀️',
      color: 'from-yellow-400 to-orange-400',
      textDark: true,
    },
    {
      name: 'Contrast Test',
      href: '/contrast-test',
      description: 'Evaluate contrast ratio and black level performance.',
      icon: '◐',
      color: 'from-gray-800 to-gray-900',
    },
    {
      name: 'Monitor Test',
      href: '/monitor-test',
      description: 'Complete monitor diagnostics with test patterns.',
      icon: '🖥️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Burn-in Prevention',
      href: '/burn-in-prevention',
      description: 'Prevent OLED burn-in with screen cycling tools.',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Refresh Rate Test',
      href: '/refresh-rate-test',
      description: 'Check real refresh rate and motion smoothness.',
      icon: '⚡',
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'Response Time Test',
      href: '/response-time-test',
      description: 'Measure ghosting and pixel response speed.',
      icon: '⏱️',
      color: 'from-red-500 to-rose-600',
    },
    {
      name: 'Screen Resolution',
      href: '/screen-resolution',
      description: 'Detect resolution and pixel density automatically.',
      icon: '📐',
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Professional Display Testing Tools
          </h1>
          <p className="text-xl text-blue-100">
            Free online tools to test monitors, laptops, phones and TVs for dead pixels and display defects.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Complete Testing Suite
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-xl transition"
              >
                {tool.popular && (
                  <div className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full w-max mb-3">
                    POPULAR
                  </div>
                )}

                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-4 ${tool.textDark ? 'text-gray-800' : ''}`}>
                  {tool.icon}
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600">
                  {tool.name}
                </h3>

                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
