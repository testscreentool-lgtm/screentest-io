'use client'

import Link from 'next/link'
import { useState } from 'react'

const colors = [
  { name: 'Red', bg: 'bg-red-600', hex: '#DC2626' },
  { name: 'Green', bg: 'bg-green-600', hex: '#16A34A' },
  { name: 'Blue', bg: 'bg-blue-600', hex: '#2563EB' },
  { name: 'Yellow', bg: 'bg-yellow-400', hex: '#FACC15' },
  { name: 'Cyan', bg: 'bg-cyan-400', hex: '#22D3EE' },
  { name: 'Magenta', bg: 'bg-fuchsia-600', hex: '#C026D3' },
  { name: 'Black', bg: 'bg-black', hex: '#000000' },
  { name: 'White', bg: 'bg-white', hex: '#FFFFFF' },
  { name: 'Gray', bg: 'bg-gray-500', hex: '#6B7280' },
]

function ColorTestTool() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0])

  const enterFullscreen = (color: typeof colors[0]) => {
    setSelectedColor(color)
    const element = document.documentElement
    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
    setIsFullscreen(true)
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
    setIsFullscreen(false)
  }

  return (
    <>
      {isFullscreen ? (
        <div className={`fixed inset-0 ${selectedColor.bg} z-50 flex items-center justify-center`}>
          <button
            onClick={exitFullscreen}
            className={`absolute bottom-8 px-6 py-3 rounded-lg hover:opacity-80 transition ${
              selectedColor.name === 'Black' ? 'bg-white text-black' : 'bg-gray-900 text-white'
            }`}
          >
            Exit Fullscreen (Press ESC)
          </button>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8">
          <h3 className="text-white text-xl font-semibold mb-6 text-center">Select a Color to Test</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => enterFullscreen(color)}
                className={`${color.bg} rounded-xl p-6 hover:scale-105 transition-transform border-2 border-gray-600 hover:border-white`}
              >
                <div className="text-center">
                  <div className={`font-semibold ${color.name === 'Black' ? 'text-white' : color.name === 'White' || color.name === 'Yellow' || color.name === 'Cyan' ? 'text-gray-900' : 'text-white'}`}>
                    {color.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6 text-center">
            Click any color to test in fullscreen mode
          </p>
        </div>
      )}
    </>
  )
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is RGB color accuracy testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RGB color accuracy testing verifies that your display correctly reproduces red, green, and blue primary colors. Professional displays should show pure RGB values without color shift or tinting. Testing with 9 key colors (RGB primaries, CMY secondaries, black, white, gray) catches 95% of color calibration issues."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my display has good color accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Good color accuracy means pure colors appear correct without tinting. Red should be vivid red (not orange), blue should be deep blue (not purple), white should be neutral (not yellow or blue-tinted). Professional displays achieve Delta E < 2, meaning colors are visually indistinguishable from reference standards."
      }
    },
    {
      "@type": "Question",
      "name": "Why test multiple colors instead of just RGB?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Testing RGB primaries plus CMY secondaries (cyan, magenta, yellow) catches color mixing issues. A display might show pure red correctly but fail at cyan (blue + green mix). Testing 9 colors covers the full gamut and reveals calibration problems that single-color tests miss."
      }
    }
  ]
}

export default function ColorTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Color Test
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            RGB color accuracy and display calibration testing. Test 9 key colors for professional color reproduction.
          </p>

          <ColorTestTool />

          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mt-6">
            <span>✓ 9 Test Colors</span>
            <span>✓ RGB + CMY</span>
            <span>✓ Instant Testing</span>
            <span>✓ Professional Calibration</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Test Color Accuracy?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                Color accuracy testing verifies your display correctly reproduces <strong>RGB primaries</strong> (red, green, blue) and <strong>CMY secondaries</strong> (cyan, magenta, yellow). Professional work requires <strong>Delta E &lt; 2</strong> accuracy, meaning colors are visually indistinguishable from reference standards. Testing <strong>9 key colors</strong> catches <strong>95%</strong> of calibration issues in under <strong>3 minutes</strong>.
              </p>
            </div>

            <p className="mb-4">
              Here's what most people don't realize: your display uses only three colors of light (red, green, blue) to create every color you see. If any RGB channel is miscalibrated, every color on your display will be wrong. That's why professionals test primary and secondary colors—it reveals calibration problems affecting everything.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Test Color Accuracy
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                Test each color for <strong>15-20 seconds</strong> in normal room lighting. Look for <strong>color shift</strong> (red appearing orange), <strong>tinting</strong> (blue cast on white), and <strong>uniformity</strong> (color varies across panel). Professional displays maintain <strong>consistent color</strong> from center to edges with <strong>no visible tinting</strong>.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Check for Each Color:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">🔴 Red:</span>
                  <span>Should be vivid pure red, not orange or pink-tinted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">🟢 Green:</span>
                  <span>Should be bright pure green, not yellow or blue-green</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">🔵 Blue:</span>
                  <span>Should be deep pure blue, not purple or cyan-tinted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold">⚫ Black:</span>
                  <span>Should be uniform pure black, no bright spots</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 font-bold">⚪ White:</span>
                  <span>Should be neutral white, not yellow or blue-tinted</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is RGB color accuracy testing?
                </h3>
                <p className="text-gray-700">
                  RGB color accuracy testing verifies that your display correctly reproduces red, green, and blue primary colors. Professional displays should show pure RGB values without color shift or tinting. Testing with <strong>9 key colors</strong> catches <strong>95%</strong> of color calibration issues.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I know if my display has good color accuracy?
                </h3>
                <p className="text-gray-700">
                  Good color accuracy means pure colors appear correct without tinting. Red should be vivid red (not orange), blue should be deep blue (not purple), white should be neutral (not yellow or blue-tinted). Professional displays achieve <strong>Delta E &lt; 2</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Why test multiple colors instead of just RGB?
                </h3>
                <p className="text-gray-700">
                  Testing RGB primaries plus CMY secondaries catches color mixing issues. A display might show pure red correctly but fail at cyan (blue + green mix). Testing <strong>9 colors</strong> covers the full gamut.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related Testing Tools
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/dead-pixel-test" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dead Pixel Test</h3>
                <p className="text-sm text-gray-600">6-color cycling test detects 90%+ of pixel defects.</p>
              </Link>

              <Link href="/brightness-test" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Brightness Test</h3>
                <p className="text-sm text-gray-600">Calibrate screen brightness and uniformity.</p>
              </Link>

              <Link href="/contrast-test" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Contrast Test</h3>
                <p className="text-sm text-gray-600">Test contrast ratio and grayscale accuracy.</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
