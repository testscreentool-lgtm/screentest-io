'use client'

import { useState } from 'react'

export default function ResponseTimeTestClient() {
  const [isRunning, setIsRunning] = useState(false)
  const [showWhite, setShowWhite] = useState(true)

  const startTest = () => {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
      setIsRunning(true)
      
      setInterval(() => {
        setShowWhite(prev => !prev)
      }, 100)
    }
  }

  const stopTest = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      setIsRunning(false)
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good monitor response time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1ms (GtG) is ideal for competitive gaming, 5ms acceptable for casual gaming, 8-16ms sufficient for office work. Lower response times reduce motion blur and ghosting. OLED achieves 0.1ms, TN panels 1-5ms, IPS panels 4-8ms, VA panels 8-16ms."
        }
      },
      {
        "@type": "Question",
        "name": "What causes ghosting on monitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ghosting occurs when pixels cannot change fast enough, creating trailing images during motion. Caused by slow response times (above 8ms) or aggressive overdrive settings creating inverse ghosting. Test by displaying moving objects—trailing shadows indicate ghosting."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between response time and input lag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Response time is how fast pixels change color (measured in ms GtG). Input lag is delay between input action and screen update (measured in ms total). Both affect gaming: response time causes motion blur, input lag causes control delay."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        {isRunning && (
          <div 
            className="fixed inset-0 z-50 cursor-pointer"
            style={{ backgroundColor: showWhite ? '#ffffff' : '#000000' }}
            onClick={stopTest}
          >
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-500 bg-opacity-75 rounded-lg p-4">
                <div className="text-white text-center text-sm">
                  Flashing at 10Hz | Watch for ghosting/trailing | Click to exit
                </div>
              </div>
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Response Time Test: Check Ghosting & Motion Blur
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Test monitor response time and detect ghosting with black-to-white transitions. Verify 1ms, 5ms, or 8ms response times for gaming and fast motion.
            </p>

            <button
              onClick={startTest}
              disabled={isRunning}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg disabled:opacity-50"
            >
              Start Response Time Test →
            </button>

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ Ghosting Detection</span>
              <span>✓ Motion Blur Test</span>
              <span>✓ Fast Transitions</span>
              <span>✓ Gaming Optimization</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Good Monitor Response Time?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>1ms</strong> (GtG) is ideal for competitive gaming, <strong>5ms</strong> acceptable for casual gaming, <strong>8-16ms</strong> sufficient for office work. Lower response times reduce motion blur and ghosting. OLED achieves <strong>0.1ms</strong>, TN panels <strong>1-5ms</strong>, IPS panels <strong>4-8ms</strong>, VA panels <strong>8-16ms</strong>.
                </p>
              </div>

              <p className="mb-4">
                Response time measures how quickly pixels transition from one color to another, typically measured as gray-to-gray (GtG). Faster response times reduce motion blur during gameplay, camera panning, and scrolling. However, response time is just one factor—a 5ms IPS panel often looks better in motion than a 1ms TN panel due to superior color reproduction and viewing angles.
              </p>

              <p className="mb-4">
                Panel technology determines response time capabilities. TN panels achieve fastest response (1-3ms) but sacrifice color quality. IPS balances response (4-8ms) with excellent colors. VA offers deep contrast but slower response (8-16ms) creating noticeable ghosting. OLED eliminates ghosting entirely with near-instantaneous pixel transitions (0.1ms).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Causes Ghosting on Monitors?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Ghosting occurs when pixels cannot change fast enough, creating trailing images during motion. Caused by slow response times (above <strong>8ms</strong>) or aggressive overdrive settings creating inverse ghosting. Test by displaying moving objects—trailing shadows indicate ghosting.
                </p>
              </div>

              <p className="mb-4">
                Ghosting manifests as shadow trails behind moving objects—dark trails on bright backgrounds or bright trails on dark backgrounds. Caused either by naturally slow pixel transitions or by monitor overdrive ("pixel acceleration") settings pushed too high. Moderate overdrive reduces ghosting; excessive overdrive creates inverse ghosting where trails appear in opposite colors.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's the Difference Between Response Time and Input Lag?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>Response time</strong> is how fast pixels change color (measured in ms GtG). <strong>Input lag</strong> is delay between input action and screen update (measured in ms total). Both affect gaming: response time causes motion blur, input lag causes control delay.
                </p>
              </div>

              <p className="mb-4">
                Gamers often confuse these terms. Response time (1ms, 5ms) measures pixel color transition speed, affecting motion clarity. Input lag (10ms, 30ms) measures total delay from controller input to visible screen change, affecting responsiveness. A monitor can have 1ms response time but 40ms input lag (unresponsive) or 8ms response time with 10ms input lag (responsive with slight motion blur).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is a good monitor response time?
                  </h3>
                  <p className="text-gray-700">
                    <strong>1ms</strong> ideal for competitive gaming, <strong>5ms</strong> acceptable for casual gaming, <strong>8-16ms</strong> sufficient for office work. OLED: <strong>0.1ms</strong>, TN: <strong>1-5ms</strong>, IPS: <strong>4-8ms</strong>, VA: <strong>8-16ms</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What causes ghosting on monitors?
                  </h3>
                  <p className="text-gray-700">
                    Ghosting occurs when pixels cannot change fast enough, creating trailing images. Caused by slow response times (above <strong>8ms</strong>) or aggressive overdrive settings creating inverse ghosting.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What's the difference between response time and input lag?
                  </h3>
                  <p className="text-gray-700">
                    <strong>Response time</strong> is pixel color change speed (ms GtG). <strong>Input lag</strong> is delay between input and screen update (ms total). Both affect gaming differently: response time causes motion blur, input lag causes control delay.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Test Response Time Now</h2>
                <p className="text-blue-100 mb-6">
                  Detect ghosting and motion blur with fast black-white transitions.
                </p>
                <button
                  onClick={startTest}
                  disabled={isRunning}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                >
                  Start Response Time Test →
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
