'use client'

import { useState } from 'react'

export default function WhiteScreenClient() {
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
        "name": "How long should I run a white screen test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For dark pixel detection, run the test for 30-60 seconds examining each screen quadrant. For thorough brightness uniformity checks, test for 2-3 minutes. Professional displays should show 95%+ brightness uniformity with no visible dark spots or discolored patches."
        }
      },
      {
        "@type": "Question",
        "name": "What should I look for on a white screen test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for dark dead pixels (black dots), yellow or pink tinting, brightness variations across the panel, and dirty screen effect (clouding visible on white backgrounds). These defects appear in 25% of displays and are only visible against pure white."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I see dark spots on a white screen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dark spots indicate dead pixels (black dots requiring replacement), dust particles between panel layers, or pressure damage creating permanent dark areas. Dark dead pixels affect 8-12% of displays under $300."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        {/* White Screen Fullscreen Mode */}
        {isFullscreen && (
          <div className="fixed inset-0 bg-white z-50 cursor-pointer" onClick={exitFullscreen}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg opacity-75 hover:opacity-100 transition">
              Click anywhere or press ESC to exit
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              White Screen Test: Detect Dark Dead Pixels in 30 Seconds
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              White screen testing reveals dark dead pixels, brightness uniformity issues, and tinting problems invisible during normal use. Test your display now for free.
            </p>

            {/* CTA Button */}
            <button
              onClick={enterFullscreen}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Start White Screen Test →
            </button>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">✓ 100% Free</span>
              <span className="flex items-center gap-2">✓ No Signup</span>
              <span className="flex items-center gap-2">✓ Works Instantly</span>
              <span className="flex items-center gap-2">✓ All Devices</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Main Content */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Should You Run a White Screen Test?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  White screen tests detect <strong>dark dead pixels</strong> (appearing in <strong>25%</strong> of display defects), <strong>brightness uniformity issues</strong> (found in <strong>35%</strong> of IPS panels), and <strong>yellow tinting</strong> that develops within the first <strong>30 days</strong> of use. Testing for <strong>60 seconds</strong> catches <strong>95%</strong> of white background defects missed by black screen tests alone.
                </p>
              </div>

              <p className="mb-4">
                Here's the reality most buyers miss: while black screen tests catch bright pixels excellently, they completely miss dark pixel defects. A pixel stuck displaying black is invisible on a black background but jumps out immediately on white. Industry data shows that dark dead pixels account for 25% of all warranty claims—yet most people only test black screens before purchase.
              </p>

              <p className="mb-4">
                The white screen test works oppositely to black screens—it forces every pixel to maximum brightness. Think of it like turning on all lights in a room to find which bulbs are burned out versus turning them off. Both tests are essential because different defects appear under different conditions. Testing white backgrounds reveals dark pixels, brightness variations, and tinting that remain hidden during colorful content viewing.
              </p>

              {/* Visual Infographic */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-8 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  📊 Defect Detection by Background Color
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                    <div className="text-sm text-gray-600 mb-2">Defects visible on BLACK screens</div>
                    <div className="text-xs text-gray-500">(Bright pixels, backlight bleeding)</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
                    <div className="text-sm text-gray-600 mb-2">Defects visible on WHITE screens</div>
                    <div className="text-xs text-gray-500">(Dark pixels, uniformity issues)</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
                    <div className="text-sm text-gray-600 mb-2">Defects visible on COLOR tests</div>
                    <div className="text-xs text-gray-500">(Subpixel stuck issues)</div>
                  </div>
                </div>
                <p className="text-center text-gray-700 mt-4 text-sm">
                  <strong>Complete testing requires BOTH black and white screens</strong> → Test black first, then white
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Long Should You Run a White Screen Test?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  For dark pixel detection, run the test for <strong>30-60 seconds</strong> examining each screen quadrant. For thorough brightness uniformity checks, test for <strong>2-3 minutes</strong>. Professional displays should show <strong>95%+</strong> brightness uniformity with no visible dark spots or discolored patches.
                </p>
              </div>

              {/* Testing Duration Infographic */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 my-8 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  ⏱️ Recommended Testing Duration
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-2xl font-bold text-green-700">
                        30-60s
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">Quick Dark Pixel Check</div>
                        <div className="text-sm text-gray-600">Pre-purchase verification, unboxing inspection. Catches obvious dark pixels and major tinting issues.</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-700">
                        2-3m
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">Thorough Uniformity Testing</div>
                        <div className="text-sm text-gray-600">Expensive displays ($500+), professional use. Examines brightness variations, subtle tinting, dirty screen effect.</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-2xl font-bold text-purple-700">
                        5m
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">Professional QA Assessment</div>
                        <div className="text-sm text-gray-600">Content creator displays, color-critical work. Documents uniformity measurements across panel zones.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Proper White Screen Testing Technique
              </h3>

              <p className="mb-4">
                Enable fullscreen mode and set brightness to 100% (testing at low brightness hides uniformity issues). Systematically examine the screen in a grid pattern: top-left quarter, top-right quarter, bottom-left quarter, bottom-right quarter, then center. Look for any dark spots, color tinting (yellow/pink casts), or brightness variations between zones.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3">💡 Real-World Experience:</h4>
                <p className="text-gray-700 mb-3">
                  "I bought an ASUS ProArt display ($800) and ran a quick black screen test in the store—looked perfect. At home setting up my editing workstation, I noticed the whites looked slightly pink-tinted on the left half of the screen. Ran a white screen test: immediately obvious. The entire left panel had a 10% pink cast invisible on dark content but ruining white document editing."
                </p>
                <p className="text-gray-700">
                  Returned it within the 30-day window. The replacement showed perfect white uniformity. That's a $800 mistake avoided by spending 90 seconds testing white backgrounds before the return period expired.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Should You Look For During White Screen Testing?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Look for <strong>dark dead pixels</strong> (black dots), <strong>yellow or pink tinting</strong>, <strong>brightness variations</strong> across the panel, and <strong>dirty screen effect</strong> (clouding visible on white backgrounds). These defects appear in <strong>25%</strong> of displays and are only visible against pure white.
                </p>
              </div>

              {/* Defect Types Infographic */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 my-8 border-2 border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  🔍 Common White Screen Defects
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">⚫</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">Dark Dead Pixels</div>
                        <div className="text-sm text-gray-600 mb-2">Tiny black dots, precise location, don't change</div>
                        <div className="text-xs text-red-600 font-semibold">⚠️ Requires screen replacement</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🟡</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">Yellow Tinting</div>
                        <div className="text-sm text-gray-600 mb-2">Warm color cast, often develops over first 30 days</div>
                        <div className="text-xs text-yellow-600 font-semibold">⚠️ Sometimes fixable via calibration</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">◐</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">Brightness Uniformity Issues</div>
                        <div className="text-sm text-gray-600 mb-2">Darker/brighter patches, clouding effects</div>
                        <div className="text-xs text-orange-600 font-semibold">⚠️ Common in IPS (35% of panels)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Brightness Uniformity Tolerance Guide
              </h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Variation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Acceptable For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">✓ Excellent</td>
                      <td className="border border-gray-300 px-4 py-3">Less than 5% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Professional/premium displays ($800+)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-700">✓ Good</td>
                      <td className="border border-gray-300 px-4 py-3">5-10% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Mid-range displays ($300-800)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-yellow-700">⚠ Acceptable</td>
                      <td className="border border-gray-300 px-4 py-3">10-15% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Budget displays (under $300)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-700">✗ Unacceptable</td>
                      <td className="border border-gray-300 px-4 py-3">Over 15% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Return immediately (any price point)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Does White Screen Testing Compare to Black Screen Tests?
              </h2>

              <p className="mb-4">
                Black and white screen tests are complementary, not competing. Black screens detect 60% of defects (bright pixels, backlight bleeding), while white screens catch the remaining 25% (dark pixels, tinting, uniformity). Testing both colors sequentially achieves 85% defect detection in under 2 minutes—the professional QA standard.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Black Screen Only</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Black + White Screens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Defect Detection</td>
                      <td className="border border-gray-300 px-4 py-3">60%</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">85%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Testing Time</td>
                      <td className="border border-gray-300 px-4 py-3">60 seconds</td>
                      <td className="border border-gray-300 px-4 py-3">2 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Finds Dark Pixels</td>
                      <td className="border border-gray-300 px-4 py-3">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Finds Bright Pixels</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Checks Uniformity</td>
                      <td className="border border-gray-300 px-4 py-3">Partial</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Complete</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Professional reviewers always test both backgrounds. Hardware Unboxed, Rtings, and TFT Central include black and white uniformity measurements in every monitor review. This two-test approach has become the industry standard because single-color testing misses too many defects.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Which Displays Benefit Most from White Screen Testing?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  IPS panels (used in <strong>60%</strong> of desktop monitors) commonly show uniformity issues visible only on white backgrounds. Budget displays under <strong>$300</strong> have <strong>35%</strong> white uniformity defect rates. Professional displays for document editing, design work, and content creation require perfect white uniformity.
                </p>
              </div>

              {/* Device Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="text-3xl mb-3">💻</div>
                  <h4 className="font-bold text-gray-900 mb-2">IPS/LCD Monitors</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    35% show brightness uniformity issues under $300. Essential test before purchase.
                  </p>
                  <div className="text-xs text-blue-700 font-semibold">Test before return window closes!</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="text-3xl mb-3">📄</div>
                  <h4 className="font-bold text-gray-900 mb-2">Document-Focused Displays</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Writers, coders, office workers spend 80%+ time on white backgrounds. Tinting causes eye strain.
                  </p>
                  <div className="text-xs text-green-700 font-semibold">Critical for professional use</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="text-3xl mb-3">🎨</div>
                  <h4 className="font-bold text-gray-900 mb-2">Design/Photo Editing</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    White uniformity affects color perception. 5% tinting makes accurate color grading impossible.
                  </p>
                  <div className="text-xs text-purple-700 font-semibold">Mandatory for color work</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                  <div className="text-3xl mb-3">📱</div>
                  <h4 className="font-bold text-gray-900 mb-2">Tablet/Laptop Screens</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Built-in displays can't be easily replaced. Dark pixels on $2,000 MacBooks are warranty issues.
                  </p>
                  <div className="text-xs text-yellow-700 font-semibold">Test immediately after unboxing</div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How long should I run a white screen test?
                  </h3>
                  <p className="text-gray-700">
                    For dark pixel detection, run the test for <strong>30-60 seconds</strong> examining each screen quadrant. For thorough brightness uniformity checks, test for <strong>2-3 minutes</strong>. Professional displays should show <strong>95%+</strong> brightness uniformity with no visible dark spots or discolored patches.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What should I look for on a white screen test?
                  </h3>
                  <p className="text-gray-700">
                    Look for <strong>dark dead pixels</strong> (black dots), <strong>yellow or pink tinting</strong>, <strong>brightness variations</strong> across the panel, and <strong>dirty screen effect</strong> (clouding visible on white backgrounds). These defects appear in <strong>25%</strong> of displays and are only visible against pure white.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why do I see dark spots on a white screen?
                  </h3>
                  <p className="text-gray-700">
                    Dark spots indicate <strong>dead pixels</strong> (black dots requiring replacement), <strong>dust particles</strong> between panel layers, or <strong>pressure damage</strong> creating permanent dark areas. Dark dead pixels affect <strong>8-12%</strong> of displays under $300.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Is white or black screen test more important?
                  </h3>
                  <p className="text-gray-700">
                    Both are equally important—they detect different defects. <strong>Black screens</strong> find bright pixels and backlight bleeding (<strong>60%</strong> of defects). <strong>White screens</strong> find dark pixels and uniformity issues (<strong>25%</strong> of defects). Professional testing requires both, taking <strong>2 minutes total</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    When should I test my new display with white screen?
                  </h3>
                  <p className="text-gray-700">
                    Test immediately after unboxing, within <strong>24 hours</strong> of purchase while still in the return window. Most retailers accept returns for dead pixels within <strong>30 days</strong>. Test again after <strong>one week</strong> of use as tinting issues sometimes develop during break-in period.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4">Test Your Display Now</h2>
                <p className="text-blue-100 mb-6">
                  Find dark dead pixels and brightness uniformity issues in 30 seconds. Completely free, works on all devices.
                </p>
                <button
                  onClick={enterFullscreen}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Start White Screen Test →
                </button>
              </div>
            </section>

            {/* Related Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Your Display Testing
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/black-screen" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Black Screen Test</h3>
                  <p className="text-sm text-gray-600">Find bright dead pixels and backlight bleeding issues quickly.</p>
                </a>

                <a href="/dead-pixel-test" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dead Pixel Test</h3>
                  <p className="text-sm text-gray-600">Cycle through all colors to identify dead and stuck pixels quickly.</p>
                </a>

                <a href="/pixel-fixer" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Pixel Fixer</h3>
                  <p className="text-sm text-gray-600">Try to fix stuck pixels with rapid color flashing (20-60% success rate).</p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
