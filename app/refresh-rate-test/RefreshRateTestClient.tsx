'use client'

import { useState, useEffect } from 'react'

export default function RefreshRateTestClient() {
  const [detectedRate, setDetectedRate] = useState<number | null>(null)
  const [isDetecting, setIsDetecting] = useState(false)

  const detectRefreshRate = () => {
    setIsDetecting(true)
    let frameCount = 0
    let lastTime = performance.now()
    
    const measureFrames = () => {
      frameCount++
      const currentTime = performance.now()
      const elapsed = currentTime - lastTime
      
      if (elapsed >= 1000) {
        const fps = Math.round((frameCount / elapsed) * 1000)
        setDetectedRate(fps)
        setIsDetecting(false)
      } else {
        requestAnimationFrame(measureFrames)
      }
    }
    
    requestAnimationFrame(measureFrames)
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good refresh rate for monitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "60Hz is standard for office work, 120-144Hz ideal for gaming, 240Hz+ for competitive esports. Higher refresh rates reduce motion blur and input lag. Most users notice significant improvement from 60Hz to 144Hz, with diminishing returns above 240Hz."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check my monitor refresh rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check refresh rate in Display Settings (Windows) or System Preferences (Mac). Browser-based tests measure actual refresh rate by counting frame updates per second. Verify your GPU supports high refresh rates and cables are compatible (HDMI 2.0+ or DisplayPort 1.2+)."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between refresh rate and FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refresh rate is how many times per second your monitor updates (Hz). FPS is how many frames per second your GPU renders. If GPU renders 200 FPS but monitor is 60Hz, you only see 60 frames. Match refresh rate to GPU capabilities for best results."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Refresh Rate Test: Check Monitor Hz & Frame Rate
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Detect your monitor's actual refresh rate (Hz). Verify 60Hz, 120Hz, 144Hz, or 240Hz displays are running at correct refresh rates for optimal gaming and viewing.
            </p>

            <button
              onClick={detectRefreshRate}
              disabled={isDetecting}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg disabled:opacity-50"
            >
              {isDetecting ? 'Detecting...' : 'Detect Refresh Rate →'}
            </button>

            {detectedRate && (
              <div className="mt-6 bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-700 mb-2">{detectedRate} Hz</div>
                  <div className="text-gray-700">Detected Refresh Rate</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ Instant Detection</span>
              <span>✓ All Refresh Rates</span>
              <span>✓ Accurate Measurement</span>
              <span>✓ Gaming Optimization</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Good Refresh Rate for Monitors?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>60Hz</strong> is standard for office work, <strong>120-144Hz</strong> ideal for gaming, <strong>240Hz+</strong> for competitive esports. Higher refresh rates reduce motion blur and input lag. Most users notice significant improvement from <strong>60Hz to 144Hz</strong>, with diminishing returns above <strong>240Hz</strong>.
                </p>
              </div>

              <p className="mb-4">
                Refresh rate determines how many times per second your display updates its image. A 60Hz monitor shows 60 frames per second maximum, while 144Hz shows 144 frames per second. Higher rates create smoother motion, reduce perceived blur during camera movement, and decrease input lag between mouse movement and on-screen cursor response.
              </p>

              <p className="mb-4">
                The jump from 60Hz to 120-144Hz provides the most noticeable improvement for most users. Going from 144Hz to 240Hz offers smaller gains primarily benefiting competitive FPS players. Casual users and office workers see minimal benefit above 60-75Hz, while serious gamers should target 144Hz minimum.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Do I Check My Monitor Refresh Rate?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Check refresh rate in <strong>Display Settings</strong> (Windows) or <strong>System Preferences</strong> (Mac). Browser-based tests measure actual refresh rate by counting frame updates per second. Verify your GPU supports high refresh rates and cables are compatible (<strong>HDMI 2.0+</strong> or <strong>DisplayPort 1.2+</strong>).
                </p>
              </div>

              <p className="mb-4">
                Many users buy 144Hz monitors but accidentally run them at 60Hz due to incorrect settings or cable limitations. Always verify: (1) Monitor settings show correct refresh rate, (2) GPU driver settings match, (3) Cable supports target refresh rate (old HDMI 1.4 maxes at 60Hz for 1080p, 30Hz for 4K).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's the Difference Between Refresh Rate and FPS?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>Refresh rate</strong> is how many times per second your monitor updates (Hz). <strong>FPS</strong> is how many frames per second your GPU renders. If GPU renders <strong>200 FPS</strong> but monitor is <strong>60Hz</strong>, you only see <strong>60 frames</strong>. Match refresh rate to GPU capabilities for best results.
                </p>
              </div>

              <p className="mb-4">
                Common misconception: "My GPU runs games at 200 FPS so I don't need a high refresh rate monitor." False. A 60Hz monitor physically cannot display more than 60 frames per second regardless of GPU output. Those extra 140 frames are wasted. Conversely, a 240Hz monitor showing 60 FPS content looks identical to 60Hz—you need high FPS AND high refresh rate for benefit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is a good refresh rate for monitors?
                  </h3>
                  <p className="text-gray-700">
                    <strong>60Hz</strong> for office work, <strong>120-144Hz</strong> for gaming, <strong>240Hz+</strong> for competitive esports. Most users notice significant improvement from <strong>60Hz to 144Hz</strong>, with diminishing returns above <strong>240Hz</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I check my monitor refresh rate?
                  </h3>
                  <p className="text-gray-700">
                    Check in <strong>Display Settings</strong> (Windows) or <strong>System Preferences</strong> (Mac). Browser tests measure actual refresh rate. Verify GPU supports high refresh rates and cables are compatible (<strong>HDMI 2.0+</strong> or <strong>DisplayPort 1.2+</strong>).
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What's the difference between refresh rate and FPS?
                  </h3>
                  <p className="text-gray-700">
                    <strong>Refresh rate</strong> is monitor updates per second (Hz). <strong>FPS</strong> is GPU frames per second. If GPU renders <strong>200 FPS</strong> but monitor is <strong>60Hz</strong>, you only see <strong>60 frames</strong>. Need both high for benefit.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Test Refresh Rate Now</h2>
                <p className="text-blue-100 mb-6">
                  Detect your monitor's actual refresh rate instantly. Free accurate testing.
                </p>
                <button
                  onClick={detectRefreshRate}
                  disabled={isDetecting}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                >
                  {isDetecting ? 'Detecting...' : 'Detect Refresh Rate →'}
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
