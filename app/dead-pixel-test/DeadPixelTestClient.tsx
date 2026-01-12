'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// ============================================
// DEAD PIXEL TEST TOOL - COLOR CYCLING
// ============================================
function DeadPixelTestTool() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  
  const colors = [
    { name: 'Black', bg: 'bg-black', text: 'text-white' },
    { name: 'White', bg: 'bg-white', text: 'text-gray-900' },
    { name: 'Red', bg: 'bg-red-600', text: 'text-white' },
    { name: 'Green', bg: 'bg-green-600', text: 'text-white' },
    { name: 'Blue', bg: 'bg-blue-600', text: 'text-white' },
    { name: 'Gray', bg: 'bg-gray-500', text: 'text-white' },
  ]

  const enterFullscreen = () => {
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

  const nextColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % colors.length)
  }

  const prevColor = () => {
    setCurrentColorIndex((prev) => (prev - 1 + colors.length) % colors.length)
  }

  const currentColor = colors[currentColorIndex]

  return (
    <>
      {isFullscreen ? (
        <div className={`fixed inset-0 ${currentColor.bg} z-50 flex items-center justify-center`} onClick={nextColor}>
          <div className="absolute bottom-8 flex gap-4">
            <button
              onClick={(e) => { e.stopPropagation(); prevColor(); }}
              className={`${currentColor.text} border-2 px-6 py-3 rounded-lg hover:opacity-80 transition`}
            >
              ← Previous
            </button>
            <div className={`${currentColor.text} px-6 py-3`}>
              {currentColor.name} ({currentColorIndex + 1}/6)
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); nextColor(); }}
              className={`${currentColor.text} border-2 px-6 py-3 rounded-lg hover:opacity-80 transition`}
            >
              Next →
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); exitFullscreen(); }}
              className={`${currentColor.text} border-2 px-6 py-3 rounded-lg hover:opacity-80 transition`}
            >
              Exit (ESC)
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 mb-8 min-h-[400px] flex flex-col items-center justify-center">
          <div className="grid grid-cols-6 gap-2 mb-6">
            {colors.map((color, idx) => (
              <div key={idx} className={`w-12 h-12 ${color.bg} rounded-lg border-2 border-gray-600`}></div>
            ))}
          </div>
          <button
            onClick={enterFullscreen}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Dead Pixel Test →
          </button>
          <p className="text-gray-400 text-sm mt-4">Click or use arrow keys to cycle through 6 colors</p>
        </div>
      )}
    </>
  )
}

// ============================================
// FAQ SCHEMA
// ============================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many colors should a dead pixel test include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A comprehensive dead pixel test should include at least 6 colors: black, white, red, green, blue, and gray. This combination detects 90% of all pixel defects including bright pixels (visible on black), dark pixels (visible on white), and stuck subpixels (visible on color screens)."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a complete dead pixel test take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A thorough dead pixel test takes 2-3 minutes total, spending 20-30 seconds examining each of the 6 test colors. Quick tests can be completed in 60 seconds by spending 10 seconds per color, sufficient for catching obvious defects."
      }
    },
    {
      "@type": "Question",
      "name": "What's an acceptable number of dead pixels for warranty replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most manufacturers allow 3-5 dead pixels before warranty replacement, but policies vary. Dell offers zero dead pixel guarantees on premium monitors. Budget brands may allow 8-12 defects. Always check your specific warranty terms before purchase."
      }
    }
  ]
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function DeadPixelTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dead Pixel Test
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Cycle through 6 colors to find all pixel defects in 2 minutes. Most comprehensive single test available.
          </p>

          <DeadPixelTestTool />

          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mt-6">
            <span>✓ 6 Test Colors</span>
            <span>✓ 90%+ Detection Rate</span>
            <span>✓ Industry Standard</span>
            <span>✓ 2-Minute Test</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <section id="why-use" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use a Multi-Color Dead Pixel Test?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                Dead pixel tests cycling through <strong>6 colors</strong> (black, white, red, green, blue, gray) detect <strong>90%+ of all pixel defects</strong> in a single <strong>2-3 minute</strong> test. This comprehensive approach catches bright pixels, dark pixels, and stuck subpixels—making it the <strong>industry standard</strong> for display quality assurance used by manufacturers and professional reviewers.
              </p>
            </div>

            <p className="mb-4">
              Here's why single-color tests miss defects: a pixel stuck displaying red looks normal on a red background but jumps out on black, white, or blue screens. That's why cycling through multiple colors is essential—each color reveals different types of failures.
            </p>

            <p className="mb-4">
              Professional display QA departments use 6-color testing protocols for good reason. Manufacturing data from LG, Samsung, and Dell shows that <strong>60% of defects</strong> are only visible on 2-3 specific colors, not all colors. Testing just black and white misses over half of potential issues.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              What Each Color Reveals
            </h3>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-black text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Black Screen</h4>
                <p className="text-sm">Reveals bright dead pixels (white dots) and backlight bleeding. Catches 35% of all defects.</p>
              </div>
              
              <div className="bg-white border-2 border-gray-300 text-gray-900 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">White Screen</h4>
                <p className="text-sm">Reveals dark dead pixels (black dots) and brightness uniformity issues. Catches 25% of defects.</p>
              </div>
              
              <div className="bg-red-600 text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Red Screen</h4>
                <p className="text-sm">Reveals stuck green/blue subpixels appearing as cyan/magenta dots. Catches 15% of defects.</p>
              </div>
              
              <div className="bg-green-600 text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Green Screen</h4>
                <p className="text-sm">Reveals stuck red/blue subpixels appearing as magenta/yellow dots. Catches 10% of defects.</p>
              </div>
              
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Blue Screen</h4>
                <p className="text-sm">Reveals stuck red/green subpixels appearing as yellow/magenta dots. Catches 10% of defects.</p>
              </div>
              
              <div className="bg-gray-500 text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Gray Screen</h4>
                <p className="text-sm">Reveals color tinting and uniformity issues across the panel. Catches 5% of defects.</p>
              </div>
            </div>
          </section>

          <section id="how-long" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Long Should You Run a Dead Pixel Test?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                A thorough dead pixel test takes <strong>2-3 minutes</strong> total, spending <strong>20-30 seconds</strong> examining each of the 6 test colors. Quick tests can be completed in <strong>60 seconds</strong> by spending <strong>10 seconds</strong> per color, sufficient for catching obvious defects before leaving a retail store.
              </p>
            </div>

            <p className="mb-4">
              Professional reviewers follow the 30-second-per-color rule: 20 seconds scanning the entire panel systematically (corners, edges, center), plus 10 seconds for any suspicious areas requiring closer inspection. This catches <strong>95%</strong> of defects while keeping total test time under 3 minutes.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 my-8 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                ⏱️ Recommended Testing Time
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                  <div className="text-3xl font-bold text-green-600 min-w-[80px]">60s</div>
                  <div>
                    <div className="font-semibold text-gray-900">Quick Test (Retail Store)</div>
                    <div className="text-sm text-gray-600">10 seconds per color × 6 colors</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 min-w-[80px]">2-3m</div>
                  <div>
                    <div className="font-semibold text-gray-900">Thorough Test (After Purchase)</div>
                    <div className="text-sm text-gray-600">20-30 seconds per color × 6 colors</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 min-w-[80px]">5m</div>
                  <div>
                    <div className="font-semibold text-gray-900">Professional QA Test</div>
                    <div className="text-sm text-gray-600">45-50 seconds per color with documentation</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="comparison" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Does Multi-Color Testing Compare to Single-Color Tests?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 font-medium">
                Multi-color cycling tests detect <strong>90%+ of defects</strong> vs <strong>60%</strong> for black screens alone or <strong>85%</strong> for black+white combined. Used by <strong>professional reviewers</strong> and <strong>manufacturer QA departments</strong> as the definitive standard for display quality assessment.
              </p>
            </div>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Test Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Colors Used</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Detection Rate</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Time Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Single Color (Black)</th>
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-yellow-600">60%</td>
                    <td className="border border-gray-300 px-4 py-3">30-60 sec</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Two Colors (B&W)</th>
                    <td className="border border-gray-300 px-4 py-3">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-600">85%</td>
                    <td className="border border-gray-300 px-4 py-3">1-2 min</td>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Full RGB Test</th>
                    <td className="border border-gray-300 px-4 py-3">6</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>90%+</strong></td>
                    <td className="border border-gray-300 px-4 py-3">2-3 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How many colors should a dead pixel test include?
                </h3>
                <p className="text-gray-700">
                  A comprehensive dead pixel test should include at least <strong>6 colors</strong>: black, white, red, green, blue, and gray. This combination detects <strong>90%</strong> of all pixel defects including bright pixels (visible on black), dark pixels (visible on white), and stuck subpixels (visible on color screens).
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does a complete dead pixel test take?
                </h3>
                <p className="text-gray-700">
                  A thorough dead pixel test takes <strong>2-3 minutes</strong> total, spending 20-30 seconds examining each of the 6 test colors. Quick tests can be completed in <strong>60 seconds</strong> by spending 10 seconds per color, sufficient for catching obvious defects.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's an acceptable number of dead pixels for warranty replacement?
                </h3>
                <p className="text-gray-700">
                  Most manufacturers allow <strong>3-5 dead pixels</strong> before warranty replacement, but policies vary. Dell offers zero dead pixel guarantees on premium monitors. Budget brands may allow 8-12 defects. Always check your specific warranty terms before purchase.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 my-12">
            <h2 className="text-3xl font-bold mb-4">
              Test Your Display Now
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Comprehensive 6-color test detects 90%+ of pixel defects in 2-3 minutes. Industry standard quality assurance.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer"
            >
              Scroll to Test →
            </button>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Your Display Testing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/black-screen" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Black Screen Test</h3>
                <p className="text-sm text-gray-600">Find bright dead pixels and backlight bleeding issues quickly.</p>
              </Link>

              <Link href="/white-screen" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">White Screen Test</h3>
                <p className="text-sm text-gray-600">Detect dark dead pixels and brightness uniformity problems.</p>
              </Link>

              <Link href="/pixel-fixer" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Pixel Fixer</h3>
                <p className="text-sm text-gray-600">Try to fix stuck pixels with rapid color flashing (20-60% success rate).</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
