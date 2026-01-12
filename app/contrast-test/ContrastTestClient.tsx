'use client'

import { useState } from 'react'

export default function ContrastTestClient() {
  const [level, setLevel] = useState(8)
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
          "text": "Good contrast ratio is 1000:1 minimum for general use, 3000:1+ for photo/video editing, 100,000:1+ for OLED displays. IPS panels typically achieve 1000-1500:1, VA panels 3000-6000:1. Higher contrast creates deeper blacks and more vibrant colors."
        }
      },
      {
        "@type": "Question",
        "name": "How do I test my monitor contrast ratio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Test contrast by displaying grayscale gradients from pure black (0,0,0) to pure white (255,255,255). You should distinguish all 16 gray levels clearly. If blacks appear gray or whites appear dim, adjust contrast settings. Professional testing requires colorimeters."
        }
      },
      {
        "@type": "Question",
        "name": "What causes poor contrast on monitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Poor contrast results from low panel quality (cheap TN/IPS panels under $200), excessive ambient light washing out blacks, incorrect contrast/brightness settings, or aging backlights degrading over 30,000+ hours of use."
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
              <div className="bg-black bg-opacity-90 rounded-lg p-6 min-w-[320px]">
                <div className="text-white text-center mb-4">
                  <div className="text-sm text-purple-400 mb-1">Grayscale Level</div>
                  <div className="text-4xl font-bold mb-1">{level}/15</div>
                  <div className="text-xs text-gray-400">RGB: {getGrayValue()}</div>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="15" 
                  value={level}
                  onChange={(e) => setLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-white text-center mt-4 text-sm">
                  Drag to cycle through gray levels
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
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition shadow-lg"
            >
              Start Contrast Test →
            </button>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-600">
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

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  A good contrast ratio is <strong>1000:1</strong> minimum for general use, <strong>3000:1+</strong> for photo/video editing, and <strong>100,000:1+</strong> for OLED displays. IPS panels typically achieve <strong>1000-1500:1</strong>, VA panels <strong>3000-6000:1</strong>, OLED panels achieve infinite contrast with true blacks. Higher contrast creates deeper blacks, more vibrant colors, and better overall image depth.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Contrast ratio represents the luminance difference between the darkest black and brightest white your display can produce. A 1000:1 ratio means whites are 1000 times brighter than blacks. This measurement directly affects perceived image quality—higher contrast provides more "pop" to images, better shadow detail in dark scenes, and more realistic color reproduction.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Panel technology fundamentally determines contrast capabilities. IPS panels prioritize color accuracy and wide viewing angles but sacrifice contrast (typically 1000-1500:1) because their liquid crystal alignment allows light leakage even in "black" states. VA panels use perpendicular crystal alignment blocking more backlight, achieving superior contrast (3000-6000:1) with truly deep blacks. OLED eliminates the backlight entirely—pixels completely turn off for perfect black (0 cd/m²), creating theoretically infinite contrast ratios.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Real-world contrast differs from manufacturer specifications. Advertised "3000:1 native contrast" may only achieve 2000:1 in actual testing due to measurement methodology differences. Dynamic contrast ratios (often marketed as 50,000,000:1 or similar absurd numbers) measure maximum brightness versus minimum brightness at different times—meaningless for actual viewing where both must display simultaneously. Trust native/static contrast specifications only.
              </p>

              {/* Contrast ratio comparison - UNIQUE PURPLE DESIGN with gradient meters */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 my-8 border-2 border-purple-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  📊 Contrast Ratio by Panel Technology
                </h3>
                
                {/* IPS Panel */}
                <div className="mb-6 bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">IPS/LCD Panels</div>
                      <div className="text-sm text-gray-600">60% of desktop monitors</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">1000-1500:1</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3" style={{width: '25%'}}></div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>✓ Best color accuracy</div>
                    <div>✓ Wide viewing angles (178°)</div>
                    <div>✗ Weakest blacks (grayish appearance)</div>
                  </div>
                </div>

                {/* VA Panel */}
                <div className="mb-6 bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">VA Panels</div>
                      <div className="text-sm text-gray-600">25% of desktop monitors</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-600">3000-6000:1</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3" style={{width: '60%'}}></div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>✓ Excellent deep blacks</div>
                    <div>✓ Best for movies/entertainment</div>
                    <div>✗ Slower response times (8-16ms)</div>
                  </div>
                </div>

                {/* OLED */}
                <div className="bg-white rounded-lg p-6 shadow-md border-2 border-purple-400">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">OLED Displays</div>
                      <div className="text-sm text-gray-600">Premium segment</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-indigo-600">∞:1</div>
                      <div className="text-xs text-gray-500">Infinite</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-700 h-3" style={{width: '100%'}}></div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>✓ True black (0 cd/m²)</div>
                    <div>✓ Instant pixel response (0.1ms)</div>
                    <div>⚠ Burn-in risk with static content</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Do I Test My Monitor Contrast Ratio?
              </h2>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Test contrast by displaying grayscale gradients from pure black (<strong>0,0,0</strong>) to pure white (<strong>255,255,255</strong>). You should distinguish all <strong>16 gray levels</strong> clearly. If level 0 and level 1 look identical (blacks crushed), your black levels are too dark. If level 14 and level 15 look identical (whites clipped), your brightness is too high. Professional testing requires colorimeters measuring actual luminance values.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Use our contrast test slider to cycle through 16 grayscale levels (0-15). In a moderately lit room, you should clearly distinguish each step from pure black (level 0) through mid-grays (levels 7-8) to pure white (level 15). If adjacent levels blend together, your contrast settings need adjustment or your panel has poor native contrast requiring hardware replacement.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Testing environment critically affects results. Ambient light reduces effective contrast—a display with excellent measured 3000:1 ratio may look washed out (500:1 effective) under bright office lighting due to screen reflections raising black levels. Test in your actual working environment, not artificial conditions. Dim rooms reveal true panel capabilities; bright rooms reveal practical usability.
              </p>

              {/* Grayscale level visualization - UNIQUE PURPLE DESIGN */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-xl p-8 my-8 border-2 border-violet-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  🎨 16-Level Grayscale Test Pattern
                </h3>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((lvl) => {
                    const val = Math.floor((lvl / 15) * 255)
                    return (
                      <div key={lvl} className="text-center">
                        <div 
                          className="w-full aspect-square rounded-lg mb-2 border-2 border-gray-300" 
                          style={{ backgroundColor: `rgb(${val}, ${val}, ${val})` }}
                        />
                        <div className="text-xs font-semibold text-gray-700">Level {lvl}</div>
                        <div className="text-xs text-gray-500">RGB: {val}</div>
                      </div>
                    )
                  })}
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                  <p className="text-sm text-gray-700 text-center font-medium">
                    <strong>Proper Contrast:</strong> All 16 levels should be clearly distinguishable. Can't see levels 0-2? Black crush. Can't see levels 13-15? White clipping.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Professional Contrast Measurement Methods
              </h3>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Enthusiasts use i1Display Pro or X-Rite ColorMunki colorimeters ($200-400) measuring actual luminance in cd/m². Method: measure pure white luminance (typically 200-400 cd/m² depending on settings), measure pure black luminance (typically 0.2-0.4 cd/m² for IPS, 0.05-0.15 cd/m² for VA, 0.0000 cd/m² for OLED), divide white by black for contrast ratio.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Visual testing suffices for most users. If you can distinguish all 16 grayscale levels in our test, your display has adequate contrast for general use (1000:1+). If levels 0-2 blend together, you have excellent deep blacks (3000:1+, likely VA panel). If all levels separate cleanly with inky blacks, you likely have OLED or high-end VA technology.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Causes Poor Contrast on Monitors?
              </h2>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Poor contrast results from <strong>low panel quality</strong> (cheap TN/IPS panels under $200 with 700:1 or worse), <strong>excessive ambient light</strong> washing out blacks, <strong>incorrect contrast/brightness settings</strong> (brightness too high crushes whites, too low crushes blacks), or <strong>aging backlights</strong> degrading over 30,000+ hours reducing overall luminance output.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Budget displays sacrifice contrast for cost. Entry-level IPS panels under $200 typically achieve 700:1-900:1 native contrast versus 1200:1-1500:1 for premium IPS. This 40% difference is immediately visible when viewing dark content—budget panels show grayish blacks while premium panels approach true darkness. VA technology provides superior contrast at similar price points, but loses color accuracy and viewing angles.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Ambient light is the contrast killer most users ignore. A display with excellent 3000:1 measured contrast performs like 500:1 effective contrast under bright office lighting because environmental light reflects off the screen surface, raising minimum black level from 0.1 cd/m² to 0.6 cd/m². Anti-glare coatings help but cannot eliminate physics. Work in dimmer environments for true contrast perception.
              </p>

              {/* Contrast degradation factors - UNIQUE PURPLE DESIGN with warning indicators */}
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-8 my-8 border-2 border-red-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  ⚠️ Contrast Degradation Factors
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">💡</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Ambient Light Pollution</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Bright office lighting (500+ lux) reduces effective contrast by <strong>60-80%</strong>. A 3000:1 panel performs like 600:1 under bright lights.</p>
                        <div className="text-xs text-red-700 bg-red-50 inline-block px-3 py-1 rounded font-semibold">Solution: Reduce room lighting or add monitor hood</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">⚙️</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Incorrect Settings</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Brightness above <strong>80%</strong> washes out blacks. Contrast above <strong>75%</strong> clips whites. Default "vivid" modes often destroy grayscale accuracy.</p>
                        <div className="text-xs text-orange-700 bg-orange-50 inline-block px-3 py-1 rounded font-semibold">Solution: Use sRGB mode or calibrate manually</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🕐</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Backlight Aging</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">LED backlights degrade <strong>20-30%</strong> over 30,000-50,000 hours. Older displays (5+ years daily use) show reduced contrast.</p>
                        <div className="text-xs text-yellow-700 bg-yellow-50 inline-block px-3 py-1 rounded font-semibold">Solution: Consider replacement after 40,000+ hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is a good contrast ratio for monitors?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Good contrast ratio is <strong>1000:1</strong> minimum for general use, <strong>3000:1+</strong> for photo/video editing. IPS panels: <strong>1000-1500:1</strong>, VA panels: <strong>3000-6000:1</strong>, OLED: <strong>infinite (∞:1)</strong>. Higher contrast creates deeper blacks and more vibrant colors with better image depth perception.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I test my monitor contrast ratio?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Display grayscale gradients from pure black to pure white. You should distinguish all <strong>16 gray levels</strong> clearly. If blacks appear gray or whites appear dim, adjust contrast/brightness settings. Professional testing requires colorimeters measuring luminance values. Test in your actual working environment with normal room lighting.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What causes poor contrast on monitors?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Poor contrast from <strong>low panel quality</strong> (budget IPS/TN under $200), <strong>excessive ambient light</strong> washing out blacks, <strong>incorrect settings</strong> (brightness too high), or <strong>aging backlights</strong> (30,000+ hours degrades 20-30%). Ambient light reduces effective contrast by <strong>60-80%</strong> in bright offices.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Should I buy IPS or VA for better contrast?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>VA panels</strong> offer <strong>3-4x better</strong> contrast (<strong>3000-6000:1</strong>) than IPS (<strong>1000-1500:1</strong>). Choose VA for movies, gaming, dark content. Choose IPS for color-critical work requiring accuracy over contrast. VA trades viewing angles and response time for superior blacks. OLED provides both but costs significantly more.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-purple-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Does high brightness mean high contrast?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No. <strong>Brightness</strong> measures maximum light output (<strong>cd/m²</strong>). <strong>Contrast</strong> measures ratio between brightest white and darkest black. High brightness (<strong>500+</strong> cd/m²) with low contrast (<strong>800:1</strong>) looks washed out. Better: moderate brightness (<strong>300</strong> cd/m²) with high contrast (<strong>3000:1</strong>) provides superior image quality.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Test Contrast Now</h2>
                <p className="text-purple-100 mb-6 text-lg">
                  Verify contrast ratio and grayscale accuracy. Free professional testing with 16-level gradients.
                </p>
                <button
                  onClick={enterFullscreen}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg"
                >
                  Start Contrast Test →
                </button>
              </div>
            </section>

            {/* Related Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Related Display Tests
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/brightness-test" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-purple-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Brightness Test</h3>
                  <p className="text-sm text-gray-600">Test brightness uniformity and calibrate display levels.</p>
                </a>

                <a href="/black-screen" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-purple-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Black Screen Test</h3>
                  <p className="text-sm text-gray-600">Test black levels and backlight bleeding issues.</p>
                </a>

                <a href="/white-screen" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-purple-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">White Screen Test</h3>
                  <p className="text-sm text-gray-600">Test brightness uniformity on white backgrounds.</p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
