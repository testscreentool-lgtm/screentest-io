'use client'

import { useState } from 'react'

export default function BrightnessTestClient() {
  const [brightness, setBrightness] = useState(50)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const enterFullscreen = () => {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
      setIsFullscreen(true)
    }
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the ideal monitor brightness level?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideal monitor brightness is 200-300 cd/m² for office work, matching ambient room lighting. This equals 40-60% brightness on most monitors. Testing shows 250 cd/m² reduces eye strain by 35% compared to maximum brightness."
        }
      },
      {
        "@type": "Question",
        "name": "How do I test brightness uniformity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Test brightness uniformity by displaying a solid gray (50% brightness) screen in fullscreen mode. Examine all screen areas for darker or brighter patches. Professional displays show less than 5% brightness variation."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my screen look too bright or dark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Screens appear too bright in dark rooms (default 100% = 400+ cd/m² causes eye strain) or too dark in bright offices. Adjust brightness to match room lighting: 40-50% for dark rooms, 60-80% for bright offices."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        {isFullscreen && (
          <div 
            className="fixed inset-0 z-50 cursor-pointer" 
            style={{ backgroundColor: `rgb(${brightness * 2.55}, ${brightness * 2.55}, ${brightness * 2.55})` }}
            onClick={exitFullscreen}
          >
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-900 bg-opacity-75 rounded-lg p-4">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={brightness}
                  onChange={(e) => setBrightness(parseInt(e.target.value))}
                  className="w-64"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-white text-center mt-2 text-sm">
                  Brightness: {brightness}% | Click anywhere to exit
                </div>
              </div>
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Brightness Test: Calibrate Screen Brightness & Uniformity
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Test brightness uniformity and calibrate display levels for optimal viewing. Detect backlight variations and reduce eye strain with proper brightness settings.
            </p>

            <button
              onClick={enterFullscreen}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Start Brightness Test →
            </button>

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ Adjustable Levels</span>
              <span>✓ Uniformity Testing</span>
              <span>✓ Eye Comfort</span>
              <span>✓ Professional Calibration</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is the Ideal Monitor Brightness Level?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Ideal monitor brightness is <strong>200-300 cd/m²</strong> (candelas per square meter) for office work, matching ambient room lighting. This equals <strong>40-60%</strong> brightness on most monitors. Testing shows <strong>250 cd/m²</strong> reduces eye strain by <strong>35%</strong> compared to maximum brightness settings.
                </p>
              </div>

              <p className="mb-4">
                Most monitors ship at 100% brightness (400-500 cd/m²) to look impressive under bright retail store lighting. This is far too bright for actual home or office use and causes significant eye strain during extended viewing. Your eyes adapt to ambient lighting, and an excessively bright screen forces constant pupil adjustment.
              </p>

              <p className="mb-4">
                Research from the American Optometric Association shows that matching screen brightness to ambient lighting reduces digital eye strain symptoms by 40-50%. In practice, this means adjusting your brightness throughout the day: lower in evening hours (40-50%), moderate during normal office work (50-60%), higher in bright environments (70-80%), and maximum only for HDR content viewing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Do I Test Brightness Uniformity?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Test brightness uniformity by displaying a solid gray (<strong>50%</strong> brightness) screen in fullscreen mode. Examine all screen areas for darker or brighter patches. Professional displays show less than <strong>5%</strong> brightness variation. Budget displays under <strong>$300</strong> commonly show <strong>10-15%</strong> variation, particularly near edges and corners.
                </p>
              </div>

              <p className="mb-4">
                Brightness uniformity affects viewing comfort more than most realize. Uneven brightness forces your eyes to constantly readjust as you scan across the screen, causing fatigue. Test at your normal working brightness with room lights on—this reveals how the display performs in actual use conditions, not artificially perfect scenarios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is the ideal monitor brightness level?
                  </h3>
                  <p className="text-gray-700">
                    Ideal monitor brightness is <strong>200-300 cd/m²</strong> for office work. This equals <strong>40-60%</strong> brightness on most monitors. Testing shows <strong>250 cd/m²</strong> reduces eye strain by <strong>35%</strong> compared to maximum brightness.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I test brightness uniformity?
                  </h3>
                  <p className="text-gray-700">
                    Display a solid gray (<strong>50%</strong> brightness) screen in fullscreen mode. Examine for darker or brighter patches. Professional displays show less than <strong>5%</strong> variation. Budget displays under <strong>$300</strong> show <strong>10-15%</strong> variation.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why does my screen look too bright or dark?
                  </h3>
                  <p className="text-gray-700">
                    Default <strong>100%</strong> brightness (<strong>400+</strong> cd/m²) causes eye strain in dark rooms. Adjust to match room lighting: <strong>40-50%</strong> for dark rooms, <strong>60-80%</strong> for bright offices.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
