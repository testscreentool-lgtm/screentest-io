'use client'

import { useState } from 'react'

export default function ContrastTestClient() {
  const [level, setLevel] = useState(5)
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

  const getGrayValue = () => {
    const grays = [0, 17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255]
    return grays[level] || 128
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good contrast ratio for monitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good contrast ratio is 1000:1 minimum for general use, 3000:1+ for photo/video editing, and 100,000:1+ for OLED displays. IPS panels typically achieve 1000-1500:1, VA panels 3000-6000:1, OLED panels achieve infinite contrast with true blacks."
        }
      },
      {
        "@type": "Question",
        "name": "How do I test my monitor contrast ratio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Test contrast by displaying grayscale gradients from pure black (0,0,0) to pure white (255,255,255). You should distinguish all 16 gray levels. If blacks appear gray or whites appear dim, adjust contrast settings. Professional testing requires colorimeters measuring actual luminance values."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between contrast ratio and brightness?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brightness measures maximum light output (cd/m²). Contrast ratio measures the difference between darkest black and brightest white. High brightness with low contrast looks washed out. High contrast with moderate brightness provides better image quality and depth perception."
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
            style={{ backgroundColor: `rgb(${getGrayValue()}, ${getGrayValue()}, ${getGrayValue()})` }}
            onClick={exitFullscreen}
          >
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-900 bg-opacity-90 rounded-lg p-4">
                <div className="text-white text-xs mb-2">Grayscale Level: {level}/15</div>
                <input 
                  type="range" 
                  min="0" 
                  max="15" 
                  value={level}
                  onChange={(e) => setLevel(parseInt(e.target.value))}
                  className="w-64"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-white text-center mt-2 text-sm">
                  RGB: {getGrayValue()} | Click to exit
                </div>
              </div>
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contrast Test: Check Contrast Ratio & Grayscale Accuracy
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Test display contrast ratio and grayscale accuracy with 16-level gradient testing. Verify your monitor can distinguish all gray levels from pure black to pure white.
            </p>

            <button
              onClick={enterFullscreen}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Start Contrast Test →
            </button>

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ 16 Gray Levels</span>
              <span>✓ Contrast Ratio Check</span>
              <span>✓ Grayscale Accuracy</span>
              <span>✓ Black Level Testing</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Good Contrast Ratio for Monitors?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  A good contrast ratio is <strong>1000:1</strong> minimum for general use, <strong>3000:1+</strong> for photo/video editing, and <strong>100,000:1+</strong> for OLED displays. IPS panels typically achieve <strong>1000-1500:1</strong>, VA panels <strong>3000-6000:1</strong>, OLED panels achieve infinite contrast with true blacks.
                </p>
              </div>

              <p className="mb-4">
                Contrast ratio represents the difference between the darkest black and brightest white your display can produce. Higher contrast creates deeper blacks, more vibrant colors, and better overall image depth. A 1000:1 ratio means whites are 1000 times brighter than blacks. OLED's "infinite" contrast comes from pixels that completely turn off, producing true black (0 cd/m²) rather than the dark gray of backlit LCD panels.
              </p>

              <p className="mb-4">
                Panel technology determines contrast capabilities. IPS panels prioritize color accuracy and viewing angles but sacrifice contrast (typically 1000-1500:1). VA panels offer superior contrast (3000-6000:1) with deeper blacks, ideal for movies and gaming. OLED provides the best contrast but costs significantly more and risks burn-in with static content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Do I Test My Monitor Contrast Ratio?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Test contrast by displaying grayscale gradients from pure black (<strong>0,0,0</strong>) to pure white (<strong>255,255,255</strong>). You should distinguish all <strong>16 gray levels</strong>. If blacks appear gray or whites appear dim, adjust contrast settings. Professional testing requires colorimeters measuring actual luminance values.
                </p>
              </div>

              <p className="mb-4">
                Use our contrast test slider to cycle through 16 grayscale levels. In a dim room, you should clearly distinguish each step from pure black (level 0) through mid-grays to pure white (level 15). If level 0 and level 1 look identical, your black levels are crushed. If level 14 and level 15 look identical, your whites are clipping.
              </p>

              <p className="mb-4">
                Testing environment matters significantly. Perform contrast testing in a moderately lit room, not complete darkness. Ambient light affects perceived contrast—a display with excellent measured contrast ratio may look washed out under bright office lighting due to screen reflections reducing effective black levels.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's the Difference Between Contrast Ratio and Brightness?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>Brightness</strong> measures maximum light output (<strong>cd/m²</strong>). <strong>Contrast ratio</strong> measures the difference between darkest black and brightest white. High brightness with low contrast looks washed out. High contrast with moderate brightness provides better image quality and depth perception than high brightness alone.
                </p>
              </div>

              <p className="mb-4">
                Many buyers mistakenly prioritize brightness (400+ cd/m²) over contrast ratio. A display with 500 cd/m² peak brightness but only 500:1 contrast produces worse image quality than one with 300 cd/m² brightness and 3000:1 contrast. Contrast creates perceived depth and color richness, while excessive brightness mainly causes eye strain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is a good contrast ratio for monitors?
                  </h3>
                  <p className="text-gray-700">
                    A good contrast ratio is <strong>1000:1</strong> minimum for general use, <strong>3000:1+</strong> for photo/video editing. IPS panels: <strong>1000-1500:1</strong>, VA panels: <strong>3000-6000:1</strong>, OLED: <strong>100,000:1+</strong> infinite contrast.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I test my monitor contrast ratio?
                  </h3>
                  <p className="text-gray-700">
                    Display grayscale gradients from pure black to pure white. You should distinguish all <strong>16 gray levels</strong>. If blacks appear gray or whites appear dim, adjust contrast settings. Professional testing requires colorimeters.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What's the difference between contrast ratio and brightness?
                  </h3>
                  <p className="text-gray-700">
                    <strong>Brightness</strong> measures maximum light output. <strong>Contrast ratio</strong> measures the difference between darkest black and brightest white. High contrast with moderate brightness beats high brightness with low contrast for image quality.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Test Contrast Now</h2>
                <p className="text-blue-100 mb-6">
                  Verify contrast ratio and grayscale accuracy. Free professional testing.
                </p>
                <button
                  onClick={enterFullscreen}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Start Contrast Test →
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
