'use client'

import { useState } from 'react'

export default function MonitorTestClient() {
  const [currentTest, setCurrentTest] = useState<string | null>(null)

  const tests = [
    { id: 'black', name: 'Black Screen', color: '#000000', desc: 'Test for bright pixels' },
    { id: 'white', name: 'White Screen', color: '#ffffff', desc: 'Test for dark pixels' },
    { id: 'red', name: 'Red Screen', color: '#ff0000', desc: 'Test red subpixels' },
    { id: 'green', name: 'Green Screen', color: '#00ff00', desc: 'Test green subpixels' },
    { id: 'blue', name: 'Blue Screen', color: '#0000ff', desc: 'Test blue subpixels' },
    { id: 'gray', name: 'Gray Screen', color: '#808080', desc: 'Test uniformity' },
  ]

  const startTest = (testId: string) => {
    setCurrentTest(testId)
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
  }

  const stopTest = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
    setCurrentTest(null)
  }

  const nextTest = () => {
    const currentIndex = tests.findIndex(t => t.id === currentTest)
    const nextIndex = (currentIndex + 1) % tests.length
    setCurrentTest(tests[nextIndex].id)
  }

  const currentTestData = tests.find(t => t.id === currentTest)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long should a complete monitor test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive monitor test takes 5-8 minutes covering black screen (60s), white screen (60s), 6 color tests (60s each), brightness uniformity (60s), and dead pixel check (2-3 min). Quick tests can be completed in 2-3 minutes testing only black, white, and primary colors."
        }
      },
      {
        "@type": "Question",
        "name": "What should I test when buying a new monitor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Test for dead pixels (black and white screens), backlight bleeding (black screen in dark room), color uniformity (solid color screens), brightness uniformity (gray screen), and IPS glow (black screen at angles). Test within return window, ideally within 48 hours of purchase."
        }
      },
      {
        "@type": "Question",
        "name": "Can monitor tests damage my display?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Monitor tests are completely safe—they display normal colors your screen shows daily. Running tests for hours causes no damage to LCD, LED, OLED, or plasma displays. Only physical damage, manufacturing defects, or electrical issues damage displays."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        {currentTest && currentTestData && (
          <div 
            className="fixed inset-0 z-50"
            style={{ backgroundColor: currentTestData.color }}
          >
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-900 bg-opacity-75 rounded-lg p-4 flex gap-4">
                <button
                  onClick={nextTest}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                >
                  Next Test →
                </button>
                <button
                  onClick={stopTest}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition text-sm"
                >
                  Exit Tests
                </button>
              </div>
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Monitor Test: Complete Display Quality Test Suite
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive monitor testing suite with 6 color tests, dead pixel detection, uniformity checks, and backlight bleeding tests. Professional QA standard.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {tests.map(test => (
                <button
                  key={test.id}
                  onClick={() => startTest(test.id)}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition text-left"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-8 h-8 rounded border-2 border-gray-300"
                      style={{ backgroundColor: test.color }}
                    ></div>
                    <h3 className="font-semibold text-gray-900">{test.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{test.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ 6 Color Tests</span>
              <span>✓ Dead Pixel Detection</span>
              <span>✓ Uniformity Check</span>
              <span>✓ Professional QA</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Long Should a Complete Monitor Test Take?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  A comprehensive monitor test takes <strong>5-8 minutes</strong> covering black screen (<strong>60s</strong>), white screen (<strong>60s</strong>), 6 color tests (<strong>60s each</strong>), brightness uniformity (<strong>60s</strong>), and dead pixel check (<strong>2-3 min</strong>). Quick tests can be completed in <strong>2-3 minutes</strong> testing only black, white, and primary colors.
                </p>
              </div>

              <p className="mb-4">
                Professional display QA testing follows systematic protocols testing multiple aspects. Start with black screen to find bright pixels and backlight bleeding (60 seconds). Follow with white screen for dark pixels and tinting (60 seconds). Test red, green, blue individually for subpixel issues (30 seconds each). Finish with gray screen for uniformity (60 seconds).
              </p>

              <p className="mb-4">
                Quick pre-purchase testing in retail stores: black screen 30 seconds, white screen 30 seconds, cycle through RGB 15 seconds each. Total 2 minutes catches 80% of defects. Extended home testing after purchase: full 8-minute protocol catches 95% of issues before return window closes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Should I Test When Buying a New Monitor?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Test for <strong>dead pixels</strong> (black and white screens), <strong>backlight bleeding</strong> (black screen in dark room), <strong>color uniformity</strong> (solid color screens), <strong>brightness uniformity</strong> (gray screen), and <strong>IPS glow</strong> (black screen at angles). Test within return window, ideally within <strong>48 hours</strong> of purchase.
                </p>
              </div>

              <p className="mb-4">
                Testing priority depends on monitor type and intended use. IPS panels: focus on backlight bleeding and IPS glow. VA panels: test for black crush and uniformity. TN panels: check viewing angles and color shift. OLED: verify no burn-in from previous use (retail displays), test pixel uniformity. Gaming monitors: add response time and refresh rate verification.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Can Monitor Tests Damage My Display?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  No. Monitor tests are completely safe—they display normal colors your screen shows daily. Running tests for hours causes no damage to LCD, LED, OLED, or plasma displays. Only physical damage, manufacturing defects, or electrical issues damage displays.
                </p>
              </div>

              <p className="mb-4">
                Solid color screens are less demanding than typical content. A white screen at 100% brightness uses the same power as white webpage backgrounds. Black screens use minimal power. Running tests overnight causes zero harm—displays are designed for thousands of hours of continuous operation displaying far more demanding content like HDR video.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How long should a complete monitor test take?
                  </h3>
                  <p className="text-gray-700">
                    A comprehensive test takes <strong>5-8 minutes</strong>. Quick tests: <strong>2-3 minutes</strong> testing only black, white, and primary colors catches <strong>80%</strong> of defects.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What should I test when buying a new monitor?
                  </h3>
                  <p className="text-gray-700">
                    Test for <strong>dead pixels</strong>, <strong>backlight bleeding</strong>, <strong>color uniformity</strong>, <strong>brightness uniformity</strong>, and <strong>IPS glow</strong>. Test within <strong>48 hours</strong> of purchase during return window.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can monitor tests damage my display?
                  </h3>
                  <p className="text-gray-700">
                    No. Monitor tests are completely safe. Running tests for hours causes no damage to LCD, LED, OLED, or plasma displays. Only physical damage or manufacturing defects damage displays.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Start Complete Testing</h2>
                <p className="text-blue-100 mb-6">
                  Run comprehensive monitor test suite. Professional QA standard testing.
                </p>
                <button
                  onClick={() => startTest('black')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Start Monitor Test →
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
