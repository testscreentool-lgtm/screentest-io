import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ScreenTest.io - Professional Display Testing Tools | Free Online',
  description: 'Free tools to test dead pixels, calibrate monitors, and optimize displays. Black screen, white screen, dead pixel test. No download required.',
}

const tools = [
  {
    name: 'Black Screen',
    href: '/black-screen',
    icon: '⬛',
    iconAlt: 'Black square icon representing black screen test',
    description: 'Test dead pixels and clean your monitor with pure black display',
    gradient: 'from-gray-900 to-gray-800',
  },
  {
    name: 'White Screen',
    href: '/white-screen',
    icon: '⬜',
    iconAlt: 'White square icon representing white screen test',
    description: 'Brightness test and screen cleaning with pure white display',
    gradient: 'from-gray-100 to-gray-200',
    textColor: 'text-gray-900',
  },
  {
    name: 'Dead Pixel Test',
    href: '/dead-pixel-test',
    icon: '🔴',
    iconAlt: 'Red circle icon representing dead pixel test',
    description: 'Detect stuck and dead pixels with color cycling test',
    gradient: 'from-red-500 to-red-600',
  },
  {
    name: 'Color Test',
    href: '/color-test',
    icon: '🎨',
    iconAlt: 'Color palette icon representing color test',
    description: 'RGB color accuracy and display calibration testing',
    gradient: 'from-green-500 to-green-600',
  },
  {
    name: 'Monitor Test',
    href: '/monitor-test',
    icon: '🖥️',
    iconAlt: 'Computer monitor icon representing monitor test',
    description: 'Comprehensive display testing suite for professionals',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Brightness Test',
    href: '/brightness-test',
    icon: '☀️',
    iconAlt: 'Sun icon representing brightness test',
    description: 'Calibrate screen brightness and contrast levels',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Contrast Test',
    href: '/contrast-test',
    icon: '◐',
    iconAlt: 'Half-filled circle icon representing contrast test',
    description: 'Test display contrast and grayscale accuracy',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    name: 'Pixel Fixer',
    href: '/pixel-fixer',
    icon: '⚡',
    iconAlt: 'Lightning bolt icon representing pixel fixer',
    description: 'Attempt to fix stuck pixels with rapid color flashing',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Burn-in Prevention',
    href: '/burn-in-prevention',
    icon: '🛡️',
    iconAlt: 'Shield icon representing burn-in prevention',
    description: 'Prevent OLED burn-in with screensaver patterns',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'Refresh Rate Test',
    href: '/refresh-rate-test',
    icon: '🔄',
    iconAlt: 'Refresh icon representing refresh rate test',
    description: 'Detect your monitor refresh rate and Hz',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    name: 'Screen Resolution',
    href: '/screen-resolution',
    icon: '📐',
    iconAlt: 'Ruler icon representing screen resolution tool',
    description: 'Detect your screen resolution and pixel density',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Response Time Test',
    href: '/response-time-test',
    icon: '⏱️',
    iconAlt: 'Stopwatch icon representing response time test',
    description: 'Test display response time and ghosting',
    gradient: 'from-teal-500 to-teal-600',
  },
]

const features = [
  {
    icon: '⚡',
    iconAlt: 'Lightning bolt icon',
    title: 'Lightning Fast',
    description: 'Sub-1 second load times on all devices',
  },
  {
    icon: '📱',
    iconAlt: 'Mobile phone icon',
    title: 'Mobile Optimized',
    description: 'Perfect experience on phones and tablets',
  },
  {
    icon: '🔒',
    iconAlt: 'Lock icon',
    title: '100% Free',
    description: 'No signup, no download, no hidden fees',
  },
  {
    icon: '🎯',
    iconAlt: 'Target icon',
    title: 'Professional',
    description: 'Used by designers and tech professionals',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Display
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Testing Tools
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Free online tools to test dead pixels, calibrate monitors, and optimize your display quality.
            No download required.
          </p>
          <a
            href="#tools"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
          >
            Start Testing →
          </a>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Tool Access</h2>
            <p className="text-lg text-gray-600">Professional tools for display testing and calibration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition hover:-translate-y-1 hover:border-blue-500"
              >
                <div 
                  className={`w-16 h-16 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 ${tool.textColor || ''}`}
                  role="img"
                  aria-label={tool.iconAlt}
                >
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1" role="img" aria-label="Instant access">⚡ Instant</span>
                  <span className="flex items-center gap-1" role="img" aria-label="Mobile friendly">📱 Mobile</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose ScreenTest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4"
                  role="img"
                  aria-label={feature.iconAlt}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
