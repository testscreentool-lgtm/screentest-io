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
          "text": "Ideal monitor brightness is 200-300 cd/m² for office work, matching ambient room lighting. This equals 40-60% brightness on most monitors. Testing shows 250 cd/m² reduces eye strain by 35% compared to maximum brightness. Adjust based on room lighting throughout the day."
        }
      },
      {
        "@type": "Question",
        "name": "How do I test brightness uniformity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Test brightness uniformity by displaying solid gray (50% brightness) screen in fullscreen mode. Examine all screen areas for darker or brighter patches. Professional displays show less than 5% brightness variation. Budget displays under $300 commonly show 10-15% variation."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my screen look too bright or dark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Screens appear too bright in dark rooms (default 100% = 400+ cd/m² causes eye strain) or too dark in bright offices. Adjust brightness to match room lighting: 40-50% for dark rooms, 60-80% for bright offices, 90-100% for HDR content only."
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
              <div className="bg-gray-900 bg-opacity-75 rounded-lg p-6 min-w-[320px]">
                <div className="text-white text-center mb-4">
                  <div className="text-4xl font-bold mb-1">{brightness}%</div>
                  <div className="text-sm text-yellow-400">Current Brightness</div>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={brightness}
                  onChange={(e) => setBrightness(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="text-white text-center mt-4 text-sm">
                  Drag slider or click to exit
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
              className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition shadow-lg"
            >
              Start Brightness Test →
            </button>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-600">
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

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Ideal monitor brightness is <strong>200-300 cd/m²</strong> (candelas per square meter) for office work, matching ambient room lighting. This equals <strong>40-60%</strong> brightness on most monitors. Testing shows <strong>250 cd/m²</strong> reduces eye strain by <strong>35%</strong> compared to maximum brightness. Gaming and HDR content benefit from <strong>300-400 cd/m²</strong>, but use lower levels for daily work.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Most monitors ship at 100% brightness (400-500 cd/m²) to look impressive under bright retail store lighting. This is far too bright for actual home or office use and causes significant eye strain during extended viewing. Your eyes adapt to ambient lighting conditions—a monitor blasting 400 cd/m² into dilated pupils in a dim room causes discomfort, headaches, and long-term eye fatigue.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Research from the American Optometric Association shows that matching screen brightness to ambient lighting reduces digital eye strain symptoms by 40-50%. The human eye works best when screen brightness slightly exceeds surrounding lighting by 10-20%. Too bright creates glare and pupil constriction fatigue. Too dim forces eye muscles to work harder, causing different strain patterns.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Professional colorists and photographers use light meters to measure ambient room lighting (measured in lux), then calibrate displays to appropriate brightness. Consumer users can approximate this by matching brightness perception—if your screen looks like a bright window during daytime, it's too bright. If it looks dim like a sheet of paper, it's too dark. Aim for "comfortable white paper under room lighting" appearance.
              </p>

              {/* Brightness level guide - UNIQUE YELLOW DESIGN with sliders */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-8 my-8 border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  💡 Recommended Brightness by Environment
                </h3>
                
                {/* Dark Room */}
                <div className="mb-6 bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">🌙 Dark Room (Evening)</div>
                      <div className="text-sm text-gray-600">120-180 cd/m²</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-yellow-600">40-50%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-4" style={{width: '45%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">Reduces eye strain by 40% vs 100% brightness. Perfect for late-night work sessions. Matches dim ambient lighting.</p>
                </div>

                {/* Normal Office */}
                <div className="mb-6 bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">🏢 Normal Office</div>
                      <div className="text-sm text-gray-600">180-250 cd/m²</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">50-60%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-4" style={{width: '55%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">Industry standard for office work. Matches typical fluorescent or LED office lighting (300-500 lux).</p>
                </div>

                {/* Bright Office */}
                <div className="mb-6 bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">☀️ Bright Office/Daylight</div>
                      <div className="text-sm text-gray-600">250-350 cd/m²</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-orange-600">60-80%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-4" style={{width: '70%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">Matches bright ambient lighting near windows. Compensates for sunlight reducing effective contrast.</p>
                </div>

                {/* HDR Content */}
                <div className="bg-white rounded-lg p-6 shadow-md border-2 border-red-300">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">🎮 HDR Gaming/Movies</div>
                      <div className="text-sm text-gray-600">350-500+ cd/m²</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-red-600">80-100%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-pink-600 h-4" style={{width: '90%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed"><strong>Only for HDR content.</strong> Do not use for daily work—causes severe eye strain over time.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Do I Test Brightness Uniformity?
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Test brightness uniformity by displaying solid gray (<strong>50%</strong> brightness) screen in fullscreen mode. Examine all screen areas for darker or brighter patches. Professional displays show less than <strong>5%</strong> brightness variation. Budget displays under <strong>$300</strong> commonly show <strong>10-15%</strong> variation, particularly near edges and corners.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Brightness uniformity affects viewing comfort more than most realize. Uneven brightness forces your eyes to constantly readjust as you scan across the screen, causing fatigue you might not consciously notice but definitely feel after 4-8 hours of work. A display with 10% variation shows visibly darker corners on gray backgrounds—exactly what you see when working with documents, spreadsheets, or code editors.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Testing environment matters significantly. Perform uniformity testing in your normal working environment with typical room lighting. Testing in complete darkness reveals defects but doesn't reflect actual usage. Testing under bright sunlight makes minor issues invisible. Use your actual working conditions for realistic assessment.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Professional reviewers measure uniformity at 9 points (4 corners, 4 edges, 1 center) using colorimeters. Maximum deviation from center determines grade. Consumer testing approximates this visually: divide screen into 9 zones mentally, compare each zone's brightness to center brightness. Differences under 5% are imperceptible, 5-10% noticeable but acceptable, over 10% distracting.
              </p>

              {/* Uniformity tolerance table - UNIQUE YELLOW DESIGN */}
              <div className="overflow-x-auto my-8">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-6 border-2 border-amber-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Brightness Uniformity Grading Scale</h3>
                  <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-yellow-200 px-4 py-3 text-left font-semibold text-gray-900">Grade</th>
                        <th className="border border-yellow-200 px-4 py-3 text-left font-semibold text-gray-900">Variation</th>
                        <th className="border border-yellow-200 px-4 py-3 text-left font-semibold text-gray-900">Visual Impact</th>
                        <th className="border border-yellow-200 px-4 py-3 text-left font-semibold text-gray-900">Typical Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-green-50 transition">
                        <td className="border border-gray-200 px-4 py-3 font-semibold text-green-700">✓ Excellent</td>
                        <td className="border border-gray-200 px-4 py-3">&lt; 5%</td>
                        <td className="border border-gray-200 px-4 py-3">Imperceptible to eye</td>
                        <td className="border border-gray-200 px-4 py-3">$800+ professional</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-blue-50 transition">
                        <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-700">✓ Good</td>
                        <td className="border border-gray-200 px-4 py-3">5-10%</td>
                        <td className="border border-gray-200 px-4 py-3">Slight corner dimming</td>
                        <td className="border border-gray-200 px-4 py-3">$400-800 mid-range</td>
                      </tr>
                      <tr className="hover:bg-yellow-50 transition">
                        <td className="border border-gray-200 px-4 py-3 font-semibold text-yellow-700">⚠ Acceptable</td>
                        <td className="border border-gray-200 px-4 py-3">10-15%</td>
                        <td className="border border-gray-200 px-4 py-3">Visible darker areas</td>
                        <td className="border border-gray-200 px-4 py-3">$200-400 budget</td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-red-50 transition">
                        <td className="border border-gray-200 px-4 py-3 font-semibold text-red-700">✗ Poor</td>
                        <td className="border border-gray-200 px-4 py-3">&gt; 15%</td>
                        <td className="border border-gray-200 px-4 py-3">Distracting variations</td>
                        <td className="border border-gray-200 px-4 py-3">Return/replace unit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">💡 Professional Calibration Tip:</h4>
                <p className="text-gray-700 leading-relaxed">
                  Content creators should test uniformity at <strong>50% gray</strong> specifically because that's the midpoint where brightness variations are most visible. White backgrounds hide variations through brightness saturation. Black backgrounds hide them differently through darkness masking. Gray reveals the truth. Test with lights on at your normal working brightness level, not in artificial darkness.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Does My Screen Look Too Bright or Dark?
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Screens appear too bright in dark rooms (default <strong>100%</strong> = <strong>400+</strong> cd/m² causes eye strain) or too dark in bright offices (needs <strong>250-300</strong> cd/m² to match ambient light). Adjust brightness to match room lighting: <strong>40-50%</strong> for dark rooms, <strong>60-80%</strong> for bright offices, <strong>90-100%</strong> for HDR content viewing only.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                The contrast between screen brightness and ambient lighting creates the perception of "too bright" or "too dark." Your eyes adapt to the average light level in your field of vision through pupil dilation. A bright screen in a dark room creates high contrast, forcing constant pupil adjustment as you look between screen and surroundings (causing headaches). A dim screen in a bright room creates the opposite problem—washed out appearance and difficult readability.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Circadian rhythm also affects perception. Morning eyes prefer brighter displays (matching daylight-adapted vision), while evening eyes prefer dimmer displays (matching scotopic/low-light adapted vision). This is why automatic brightness adjustment (if available) helps maintain comfort throughout the day as lighting conditions and your own visual adaptation changes.
              </p>

              {/* Adjustment guide - UNIQUE YELLOW DESIGN with step cards */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-8 my-8 border-2 border-yellow-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  🎯 Step-by-Step Brightness Calibration
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">1</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Measure Ambient Light (Optional but Recommended)</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">Use smartphone light meter app (many free options). Office lighting: 300-500 lux. Home evening: 50-200 lux. Bright office near windows: 500-1000 lux. This gives objective baseline for adjustment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Start at 50% and Adjust</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">Set brightness to 50% baseline. Display white document or webpage. If screen feels like a bright lamp, reduce to 40%. If screen looks dim like faded paper, increase to 60%. Screen should appear like white paper under room lighting.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Fine-Tune for Comfort</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">Work for 30 minutes at new setting. Adjust ±5% if you experience eye strain, headaches, or difficulty reading text. Perfect brightness feels "neutral"—not drawing attention to itself.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">4</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">Enable Auto-Brightness (If Available)</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">Many modern monitors have ambient light sensors. Enable automatic brightness adjustment to maintain optimal levels as room lighting changes throughout the day. Calibrate sensor to your preferences first.</p>
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
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-yellow-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is the ideal monitor brightness level?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ideal monitor brightness is <strong>200-300 cd/m²</strong> for office work, matching ambient room lighting. This equals <strong>40-60%</strong> brightness on most monitors. Testing shows <strong>250 cd/m²</strong> reduces eye strain by <strong>35%</strong> compared to maximum brightness. Adjust throughout the day: <strong>40-50%</strong> evening, <strong>50-60%</strong> normal office, <strong>60-80%</strong> bright office.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-yellow-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I test brightness uniformity?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Display solid gray (<strong>50%</strong> brightness) screen in fullscreen mode. Examine for darker or brighter patches across all zones. Professional displays show less than <strong>5%</strong> variation. Budget displays under <strong>$300</strong> show <strong>10-15%</strong> variation. Test with normal room lighting, not darkness, for realistic assessment.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-yellow-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why does my screen look too bright or dark?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Default <strong>100%</strong> brightness (<strong>400+</strong> cd/m²) causes eye strain in dark rooms. Match brightness to room lighting: <strong>40-50%</strong> for dark rooms, <strong>60-80%</strong> for bright offices. Screen should appear like white paper under current room lighting—not glowing lamp, not dim gray.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-yellow-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Should I use automatic brightness adjustment?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, if your monitor has ambient light sensors. Automatic brightness maintains optimal levels as room lighting changes throughout the day. Reduces eye strain by <strong>30-40%</strong> compared to static brightness. Calibrate sensor once to match your preferences, then let it adapt automatically.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-yellow-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Does brightness affect monitor lifespan?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Running at <strong>100%</strong> brightness degrades backlights <strong>2-3x faster</strong> than <strong>50%</strong> brightness. LCD backlights rated for <strong>30,000-50,000 hours</strong> at moderate brightness, but only <strong>15,000-25,000 hours</strong> at maximum. Proper brightness extends display life while reducing eye strain.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Test Brightness Now</h2>
                <p className="text-gray-800 mb-6 text-lg">
                  Calibrate brightness for optimal viewing and eye comfort. Free professional testing with adjustable levels.
                </p>
                <button
                  onClick={enterFullscreen}
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg text-lg"
                >
                  Start Brightness Test →
                </button>
              </div>
            </section>

            {/* Related Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Display Testing Suite
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/white-screen" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-yellow-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">White Screen Test</h3>
                  <p className="text-sm text-gray-600">Test brightness uniformity with pure white background.</p>
                </a>

                <a href="/contrast-test" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-yellow-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Contrast Test</h3>
                  <p className="text-sm text-gray-600">Test contrast ratio and grayscale accuracy.</p>
                </a>

                <a href="/black-screen" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-yellow-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Black Screen Test</h3>
                  <p className="text-sm text-gray-600">Test for backlight bleeding and bright pixels.</p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
