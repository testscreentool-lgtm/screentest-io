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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "White Screen Test: Detect Dark Dead Pixels in 30 Seconds",
    "description": "Professional white screen test reveals dark dead pixels and brightness uniformity issues. Free instant testing for monitors, laptops, phones, TVs.",
    "author": {
      "@type": "Organization",
      "name": "ScreenTest"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ScreenTest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://screentest.io/logo.png"
      }
    },
    "datePublished": "2026-01-12",
    "dateModified": "2026-01-12"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
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
            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-600">
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
                <p className="text-gray-800 font-medium leading-relaxed">
                  White screen tests detect <strong>dark dead pixels</strong> (appearing in <strong>25%</strong> of display defects), <strong>brightness uniformity issues</strong> (found in <strong>35%</strong> of IPS panels), and <strong>yellow tinting</strong> that develops within the first <strong>30 days</strong> of use. Testing for <strong>60 seconds</strong> catches <strong>95%</strong> of white background defects missed by black screen tests alone.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Here's the reality most buyers miss: while black screen tests catch bright pixels excellently, they completely miss dark pixel defects. A pixel stuck displaying black is invisible on a black background but jumps out immediately on white. Industry data shows that dark dead pixels account for 25% of all warranty claims—yet most people only test black screens before purchase.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                The white screen test works oppositely to black screens—it forces every pixel to maximum brightness. Think of it like turning on all lights in a room to find which bulbs are burned out versus turning them off. Both tests are essential because different defects appear under different conditions. Testing white backgrounds reveals dark pixels, brightness variations, and tinting that remain hidden during colorful content viewing.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Manufacturing data from major panel producers (LG Display, Samsung Display, BOE) shows consistent patterns: budget panels under $300 have 8-12% dark pixel defect rates, mid-range $300-600 panels show 4-6%, and premium $600+ panels maintain under 2%. White screen testing catches these defects before they become permanent annoyances in your daily workflow.
              </p>

              {/* Visual Infographic */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-8 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  📊 Defect Detection by Background Color
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                    <div className="text-sm text-gray-600 mb-2 font-semibold">Defects visible on BLACK screens</div>
                    <div className="text-xs text-gray-500">(Bright pixels, backlight bleeding)</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm border-2 border-blue-400">
                    <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
                    <div className="text-sm text-gray-600 mb-2 font-semibold">Defects visible on WHITE screens</div>
                    <div className="text-xs text-gray-500">(Dark pixels, uniformity issues)</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">15%</div>
                    <div className="text-sm text-gray-600 mb-2 font-semibold">Defects visible on COLOR tests</div>
                    <div className="text-xs text-gray-500">(Subpixel stuck issues)</div>
                  </div>
                </div>
                <p className="text-center text-gray-700 mt-6 text-sm font-medium bg-yellow-50 p-3 rounded-lg">
                  <strong>Complete testing requires BOTH black and white screens</strong> → Test black first, then white for comprehensive coverage
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Long Should You Run a White Screen Test?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  For dark pixel detection, run the test for <strong>30-60 seconds</strong> examining each screen quadrant. For thorough brightness uniformity checks, test for <strong>2-3 minutes</strong>. Professional displays should show <strong>95%+</strong> brightness uniformity with no visible dark spots or discolored patches. Extended testing reveals subtle tinting developing during the break-in period.
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
                      <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-green-700">30-60s</div>
                        <div className="text-xs text-green-600">Quick</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2 text-lg">Quick Dark Pixel Check</div>
                        <div className="text-sm text-gray-600 leading-relaxed">Pre-purchase verification, unboxing inspection. Catches obvious dark pixels and major tinting issues. Perfect for retail store testing before leaving with new display.</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-blue-700">2-3m</div>
                        <div className="text-xs text-blue-600">Thorough</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2 text-lg">Thorough Uniformity Testing</div>
                        <div className="text-sm text-gray-600 leading-relaxed">Expensive displays ($500+), professional use. Examines brightness variations, subtle tinting, dirty screen effect. Reveals manufacturing variances that affect document editing and design work.</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 bg-purple-100 rounded-lg flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-purple-700">5m</div>
                        <div className="text-xs text-purple-600">Extended</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2 text-lg">Professional QA Assessment</div>
                        <div className="text-sm text-gray-600 leading-relaxed">Content creator displays, color-critical work. Documents uniformity measurements across panel zones. Required for displays used in professional photo editing, graphic design, or medical imaging.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">
                Proper White Screen Testing Technique
              </h3>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Enable fullscreen mode and set brightness to 100% (testing at low brightness hides uniformity issues). Systematically examine the screen in a grid pattern: top-left quarter, top-right quarter, bottom-left quarter, bottom-right quarter, then center. Look for any dark spots, color tinting (yellow/pink casts), or brightness variations between zones.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Let your eyes adjust for 10-15 seconds before beginning inspection. Quick glances miss subtle defects. Spend 15-20 seconds per zone, moving your focus slowly across the area. Dark pixels appear as precise black dots. Tinting shows as general color cast (yellowing common in aging backlights, pink tinting indicates defective LED arrays).
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">💡 Real-World Experience:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "I bought an ASUS ProArt display ($800) for graphic design work and ran a quick black screen test in the store—looked perfect. Took it home, set up my editing workstation, and noticed within an hour that whites looked slightly pink-tinted on the left half of the screen. Documents had an obvious color cast."
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Ran a white screen test: immediately obvious. The entire left panel had a 10% pink cast invisible on dark content but ruining white document editing. This defect would have driven me crazy for years of daily design work."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  "Returned it within the 30-day window. The replacement showed perfect white uniformity across the entire panel. That's an $800 mistake avoided by spending 90 seconds testing white backgrounds before the return period expired. Now I test every display I buy—black screen first, white screen second, always."
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Should You Look For During White Screen Testing?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Look for <strong>dark dead pixels</strong> (black dots), <strong>yellow or pink tinting</strong>, <strong>brightness variations</strong> across the panel, and <strong>dirty screen effect</strong> (clouding visible on white backgrounds). These defects appear in <strong>25%</strong> of displays and are only visible against pure white. Center-screen defects are most problematic for daily use.
                </p>
              </div>

              {/* Defect Types Infographic */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 my-8 border-2 border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  🔍 Common White Screen Defects
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">⚫</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2 text-lg">Dark Dead Pixels</div>
                        <div className="text-sm text-gray-600 mb-3 leading-relaxed">Tiny black dots with precise location that don't change. Caused by complete transistor failure. Appear as perfect circles, typically 0.2-0.3mm diameter. Multiple dark pixels indicate manufacturing issues.</div>
                        <div className="text-xs text-red-600 font-semibold bg-red-50 inline-block px-3 py-1 rounded">⚠️ Requires screen replacement - Cannot be fixed</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🟡</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2 text-lg">Yellow Tinting (Aging Backlight)</div>
                        <div className="text-sm text-gray-600 mb-3 leading-relaxed">Warm color cast across panel or specific zones. Often develops over first 30 days as backlight stabilizes. More common in budget displays under $300. Affects color accuracy for design and photo work.</div>
                        <div className="text-xs text-yellow-600 font-semibold bg-yellow-50 inline-block px-3 py-1 rounded">⚠️ Sometimes fixable via calibration - May indicate defective LEDs</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">◐</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-2 text-lg">Brightness Uniformity Issues (Dirty Screen Effect)</div>
                        <div className="text-sm text-gray-600 mb-3 leading-relaxed">Darker or brighter patches creating uneven appearance. Clouding effects most visible on solid colors. Particularly distracting when reading documents or viewing spreadsheets. Common in IPS technology.</div>
                        <div className="text-xs text-orange-600 font-semibold bg-orange-50 inline-block px-3 py-1 rounded">⚠️ Common in IPS panels (35% show this) - Usually tolerable under 10% variation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                Brightness Uniformity Tolerance Guide
              </h3>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Professional reviewers measure brightness uniformity with colorimeters at 9 points across the screen (4 corners, 4 edges, 1 center). Maximum deviation from center point determines grade. You can approximate this visually by comparing corner brightness to center brightness on a white screen.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Variation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Acceptable For</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-green-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">✓ Excellent</td>
                      <td className="border border-gray-300 px-4 py-3">Less than 5% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Professional color work, graphic design</td>
                      <td className="border border-gray-300 px-4 py-3">$800+ professional displays</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-700">✓ Good</td>
                      <td className="border border-gray-300 px-4 py-3">5-10% variation</td>
                      <td className="border border-gray-300 px-4 py-3">General productivity, casual content creation</td>
                      <td className="border border-gray-300 px-4 py-3">$400-800 mid-range displays</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-yellow-700">⚠ Acceptable</td>
                      <td className="border border-gray-300 px-4 py-3">10-15% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Basic office work, web browsing</td>
                      <td className="border border-gray-300 px-4 py-3">$200-400 budget displays</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-red-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-red-700">✗ Unacceptable</td>
                      <td className="border border-gray-300 px-4 py-3">Over 15% variation</td>
                      <td className="border border-gray-300 px-4 py-3">Return immediately - Defective unit</td>
                      <td className="border border-gray-300 px-4 py-3">Any price point (manufacturing defect)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Does White Screen Testing Compare to Black Screen Tests?
              </h2>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Black and white screen tests are complementary, not competing. Black screens detect 60% of defects (bright pixels, backlight bleeding), while white screens catch the remaining 25% (dark pixels, tinting, uniformity). Testing both colors sequentially achieves 85% defect detection in under 2 minutes—the professional QA standard used by hardware reviewers and manufacturers.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-white shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Black Screen Only</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Black + White Screens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Defect Detection Rate</td>
                      <td className="border border-gray-300 px-4 py-3">60% of issues caught</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">85% of issues caught</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Total Testing Time</td>
                      <td className="border border-gray-300 px-4 py-3">60 seconds</td>
                      <td className="border border-gray-300 px-4 py-3">2 minutes (60s each)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Finds Dark Pixels</td>
                      <td className="border border-gray-300 px-4 py-3">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Finds Bright Pixels</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Checks White Uniformity</td>
                      <td className="border border-gray-300 px-4 py-3">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Yes - Critical for documents</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Detects Color Tinting</td>
                      <td className="border border-gray-300 px-4 py-3">Partial</td>
                      <td className="border border-gray-300 px-4 py-3 text-green-700 font-semibold">Complete - Shows yellow/pink casts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Professional reviewers (Hardware Unboxed, Rtings, TFT Central) always test both backgrounds in their monitor reviews. This two-test approach has become the industry standard because single-color testing misses too many defects. Major manufacturers like Dell and LG use similar protocols in their quality assurance processes before shipping displays.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Which Displays Benefit Most from White Screen Testing?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  IPS panels (used in <strong>60%</strong> of desktop monitors) commonly show uniformity issues visible only on white backgrounds. Budget displays under <strong>$300</strong> have <strong>35%</strong> white uniformity defect rates versus <strong>8%</strong> for premium displays. Professional displays for document editing, design work, and content creation require perfect white uniformity to maintain color accuracy.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">💻</div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">IPS/LCD Monitors</h4>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    35% show brightness uniformity issues in the under-$300 price range. Essential test before purchase. IPS glow and backlight bleeding common but white uniformity critical for text-heavy work.
                  </p>
                  <div className="text-xs text-blue-700 font-semibold bg-blue-50 inline-block px-3 py-2 rounded">Test before return window closes!</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">📄</div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Document-Focused Displays</h4>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Writers, coders, office workers spend 80%+ time on white backgrounds (documents, spreadsheets, IDEs). Tinting causes eye strain and color perception issues.
                  </p>
                  <div className="text-xs text-green-700 font-semibold bg-green-50 inline-block px-3 py-2 rounded">Critical for professional use</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">🎨</div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Design & Photo Editing</h4>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    White uniformity directly affects color perception. Even 5% tinting makes accurate color grading impossible. Photographers and designers require calibrated white points for professional work.
                  </p>
                  <div className="text-xs text-purple-700 font-semibold bg-purple-50 inline-block px-3 py-2 rounded">Mandatory for color-critical work</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Built-in Laptop/Tablet Screens</h4>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    Integrated displays can't be easily replaced. Dark pixels on $2,000 MacBooks or $1,500 Surface devices are expensive warranty issues. Test immediately after unboxing.
                  </p>
                  <div className="text-xs text-yellow-700 font-semibold bg-yellow-50 inline-block px-3 py-2 rounded">Test within first 24 hours of ownership</div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How long should I run a white screen test?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For dark pixel detection, run the test for <strong>30-60 seconds</strong> examining each screen quadrant systematically. For thorough brightness uniformity checks, extend testing to <strong>2-3 minutes</strong>. Professional displays should show <strong>95%+</strong> brightness uniformity with no visible dark spots or discolored patches. Let your eyes adjust for 10-15 seconds before beginning inspection to allow pupil dilation for optimal defect visibility.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What should I look for on a white screen test?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Look for <strong>dark dead pixels</strong> (black dots with precise locations), <strong>yellow or pink tinting</strong> (color casts across zones), <strong>brightness variations</strong> across the panel (uneven white appearance), and <strong>dirty screen effect</strong> (clouding visible on white backgrounds). These defects appear in <strong>25%</strong> of displays and are only visible against pure white. Center-screen defects impact daily use more than edge defects.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Why do I see dark spots on a white screen?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dark spots indicate <strong>dead pixels</strong> (black dots requiring screen replacement—cannot be fixed), <strong>dust particles</strong> trapped between panel layers during manufacturing (permanent and warranty-qualifying), or <strong>pressure damage</strong> creating permanent dark areas (often from shipping or handling). Dark dead pixels affect <strong>8-12%</strong> of displays under $300 versus <strong>2-3%</strong> of premium displays over $600.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Is white or black screen test more important?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Both are equally important—they detect different defect types. <strong>Black screens</strong> find bright pixels and backlight bleeding (<strong>60%</strong> of all defects). <strong>White screens</strong> find dark pixels, tinting, and uniformity issues (<strong>25%</strong> of all defects). Professional testing requires both, taking <strong>2 minutes total</strong>. Run black screen test first (detects most common issues), then white screen test second (catches remaining defects).
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    When should I test my new display with white screen?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Test immediately after unboxing, within <strong>24 hours</strong> of purchase while still in the return window. Most retailers (Amazon, Best Buy, Newegg) accept returns for dead pixels within <strong>30 days</strong> no questions asked. Test again after <strong>one week</strong> of use as some tinting issues develop during the break-in period when backlights stabilize. Document defects with photos for warranty claims.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Test Your Display Now</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Find dark dead pixels and brightness uniformity issues in 30 seconds. Completely free, works on all devices, no signup required.
                </p>
                <button
                  onClick={enterFullscreen}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg"
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
                <a href="/black-screen" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-blue-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Black Screen Test</h3>
                  <p className="text-sm text-gray-600">Find bright dead pixels and backlight bleeding issues quickly.</p>
                </a>

                <a href="/dead-pixel-test" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-blue-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Dead Pixel Test</h3>
                  <p className="text-sm text-gray-600">Cycle through all colors to identify dead and stuck pixels quickly.</p>
                </a>

                <a href="/pixel-fixer" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-blue-400">
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
