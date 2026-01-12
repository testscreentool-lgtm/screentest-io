'use client'

import { useState, useEffect } from 'react'

export default function BurnInPreventionClient() {
  const [isRunning, setIsRunning] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isRunning) return
    
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isRunning])

  const startPrevention = () => {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
      setIsRunning(true)
    }
  }

  const stopPrevention = () => {
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
        "name": "What causes OLED burn-in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OLED burn-in occurs when static images display for extended periods (hours/days), causing uneven pixel wear. Bright UI elements like taskbars, logos, or HUDs degrade faster than surrounding pixels. After 2000+ hours of static content, permanent ghost images appear. Risk increases with screen brightness above 80%."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for OLED burn-in to occur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OLED burn-in typically requires 2000-5000 hours of displaying static content at high brightness (80%+). With normal varied usage, modern OLEDs last 5-10 years without noticeable burn-in. Displaying static taskbars 8 hours daily may show burn-in within 12-24 months."
        }
      },
      {
        "@type": "Question",
        "name": "Can OLED burn-in be prevented?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Prevention methods: Keep brightness at 60% or lower for static content, enable pixel shift features, hide taskbars when not needed, use dark mode, run screensavers after 5-10 minutes idle, vary displayed content frequently. These extend OLED lifespan significantly."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        {isRunning && (
          <div className="fixed inset-0 z-50 bg-black">
            <div 
              className="absolute w-24 h-24"
              style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
                transition: 'all 3s ease-in-out'
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-lg opacity-50 animate-pulse"></div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={stopPrevention}
                className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg hover:bg-opacity-30 transition font-semibold"
              >
                Stop Burn-in Prevention
              </button>
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Burn-in Prevention: Protect OLED Displays from Image Retention
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Prevent OLED burn-in with moving screensaver patterns. Protect your OLED TV, phone, or monitor from permanent image retention caused by static content.
            </p>

            <button
              onClick={startPrevention}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Start Burn-in Prevention →
            </button>

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ Moving Patterns</span>
              <span>✓ OLED Protection</span>
              <span>✓ Automated Refresh</span>
              <span>✓ Safe for All Displays</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Causes OLED Burn-in?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  OLED burn-in occurs when static images display for extended periods (hours/days), causing uneven pixel wear. Bright UI elements like taskbars, logos, or HUDs degrade faster than surrounding pixels. After <strong>2000+</strong> hours of static content, permanent ghost images appear. Risk increases with screen brightness above <strong>80%</strong>.
                </p>
              </div>

              <p className="mb-4">
                OLED technology works differently than LCD. Each pixel generates its own light through organic compounds that degrade with use. When displaying static content (taskbars, news tickers, game HUDs), those specific pixels work constantly while others rest. Over thousands of hours, heavily-used pixels dim relative to less-used areas, creating permanent ghost images of static content.
              </p>

              <p className="mb-4">
                Modern OLED displays include burn-in mitigation features like pixel shift (moving content by 1-2 pixels periodically), logo dimming, and screen refresh cycles. However, these only reduce risk—they don't eliminate it. Users displaying static content 8+ hours daily (Windows taskbars, macOS menu bars, CNN news tickers) remain at high risk despite built-in protections.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Long Does It Take for OLED Burn-in to Occur?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  OLED burn-in typically requires <strong>2000-5000</strong> hours of displaying static content at high brightness (<strong>80%+</strong>). With normal varied usage, modern OLEDs last <strong>5-10 years</strong> without noticeable burn-in. Displaying static taskbars <strong>8 hours daily</strong> may show burn-in within <strong>12-24 months</strong>.
                </p>
              </div>

              <p className="mb-4">
                Timeline varies dramatically based on usage patterns. Gaming with static HUDs for 4 hours daily at 100% brightness risks visible burn-in within 18-24 months. Office work with auto-hiding taskbars, varied content, and 50% brightness might never show burn-in over 5+ years. The key factors: brightness level (exponential impact), static content percentage, and total usage hours.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Can OLED Burn-in Be Prevented?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Yes. Prevention methods: Keep brightness at <strong>60%</strong> or lower for static content, enable pixel shift features, hide taskbars when not needed, use dark mode, run screensavers after <strong>5-10 minutes</strong> idle, vary displayed content frequently. These methods extend OLED lifespan significantly.
                </p>
              </div>

              <p className="mb-4">
                Prevention is highly effective when consistently applied. The most impactful single change: reduce brightness to 50-60% for desktop work. Brightness has exponential effect on pixel degradation—running at 100% brightness degrades pixels 4-5x faster than 50% brightness. This single adjustment can extend burn-in-free usage from 2 years to 8+ years.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What causes OLED burn-in?
                  </h3>
                  <p className="text-gray-700">
                    OLED burn-in occurs when static images display for extended periods, causing uneven pixel wear. After <strong>2000+</strong> hours of static content, permanent ghost images appear. Risk increases with brightness above <strong>80%</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How long does it take for OLED burn-in to occur?
                  </h3>
                  <p className="text-gray-700">
                    OLED burn-in typically requires <strong>2000-5000</strong> hours of static content at high brightness. With normal varied usage, modern OLEDs last <strong>5-10 years</strong> without burn-in. Static taskbars <strong>8 hours daily</strong> may show burn-in within <strong>12-24 months</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can OLED burn-in be prevented?
                  </h3>
                  <p className="text-gray-700">
                    Yes. Keep brightness at <strong>60%</strong> or lower, enable pixel shift features, hide taskbars, use dark mode, run screensavers after <strong>5-10 minutes</strong> idle, vary content frequently. These methods extend OLED lifespan significantly.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Start Protection Now</h2>
                <p className="text-blue-100 mb-6">
                  Run burn-in prevention screensaver to protect OLED displays during idle time.
                </p>
                <button
                  onClick={startPrevention}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Start Burn-in Prevention →
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
