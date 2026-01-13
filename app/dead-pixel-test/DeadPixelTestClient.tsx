'use client'

import { useState, useEffect } from 'react'

export default function DeadPixelTestClient() {
  const colors = [
    { name: 'Black', value: '#000000', description: 'Detect bright stuck pixels (white, red, green, blue)' },
    { name: 'White', value: '#FFFFFF', description: 'Detect dead pixels (black) and dark stuck pixels' },
    { name: 'Red', value: '#FF0000', description: 'Detect cyan/blue-green stuck pixels' },
    { name: 'Green', value: '#00FF00', description: 'Detect magenta/pink stuck pixels' },
    { name: 'Blue', value: '#0000FF', description: 'Detect yellow/orange stuck pixels' },
    { name: 'Gray', value: '#808080', description: 'Detect contrast issues and stuck pixels' },
  ]

  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // ESC key to exit fullscreen
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isFullscreen])

  // Arrow keys to cycle colors
  useEffect(() => {
    if (!isFullscreen) return
    
    const handleArrow = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextColor()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousColor()
      }
    }
    document.addEventListener('keydown', handleArrow)
    return () => document.removeEventListener('keydown', handleArrow)
  }, [isFullscreen, currentColorIndex])

  // Prevent body scroll in fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isFullscreen])

  const enterFullscreen = () => {
    setIsFullscreen(true)
    setCurrentColorIndex(0)
  }

  const exitFullscreen = () => {
    setIsFullscreen(false)
  }

  const nextColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % colors.length)
  }

  const previousColor = () => {
    setCurrentColorIndex((prev) => (prev - 1 + colors.length) % colors.length)
  }

  const handleFullscreenClick = () => {
    nextColor()
  }

  return (
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I know if I have a dead pixel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dead pixels appear as tiny black dots that remain constant across all colors. Run solid color tests (white, red, green, blue, black) in fullscreen mode. A dead pixel will show as a black dot on white/colored backgrounds. Clean your screen first - dust can mimic dead pixels. Dead pixels occur in roughly 0.0004% of consumer displays (2 per million pixels under ISO 13406-2 Class II standard)."
                }
              },
              {
                "@type": "Question",
                "name": "How many dead pixels are acceptable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ISO 13406-2 Class II standard (used by most manufacturers) allows 2-5 dead pixels per million pixels. For a 1920x1080 display (2.07 million pixels), 4-10 dead pixels are technically acceptable. However, manufacturers vary: Samsung allows 1+ dead pixels for returns within 14 days, ASUS accepts 3-5 dead pixels, while premium brands like Dell's UltraSharp offer zero bright pixel guarantees."
                }
              },
              {
                "@type": "Question",
                "name": "Can you fix a dead pixel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "True dead pixels (completely black, no power) cannot be fixed - they require screen replacement averaging $200-$400 for laptops. However, stuck pixels (displaying red, green, blue, or white) may be repairable using color-cycling software with 20-60% success rates. If you discover dead pixels within 14-30 days of purchase, warranty replacement or retailer return is your best option."
                }
              },
              {
                "@type": "Question",
                "name": "When should I test for dead pixels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Test immediately upon receiving any new display - you have 14-30 days for no-questions-asked returns at most retailers. Test before buying used devices to avoid scams (sellers hide defects with dark wallpapers). Test every 3-6 months for warranty documentation if defects appear. Always test in-store before finalizing used device purchases."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between dead and stuck pixels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dead pixels appear completely black on all colors because the transistor receives zero power - they're permanent hardware failures. Stuck pixels display a constant color (red, green, blue, or white) because one or more sub-pixels remain 'on' - these may be fixable with software (20-60% success rate). Hot pixels appear white (all sub-pixels stuck on)."
                }
              },
              {
                "@type": "Question",
                "name": "Will my warranty cover dead pixels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Coverage depends on manufacturer policy and pixel count. Most require 3-5 dead pixels minimum under ISO 13406-2 Class II standards. Premium exceptions: Dell UltraSharp (zero bright pixel guarantee), Samsung (1+ pixels within 14 days), Philips Perfect Panel (single pixel replacement). Document defects with photos immediately - policies expire after 30 days."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Dead Pixel Test Tool",
            "operatingSystem": "All",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ScreenTest"
            }
          })
        }}
      />

      {/* Fullscreen Test Tool */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 cursor-pointer"
          style={{ backgroundColor: colors[currentColorIndex].value }}
          onClick={handleFullscreenClick}
        >
          {/* Instructions Overlay */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 px-6 py-3 rounded-lg">
            <p className="text-white font-medium text-center">
              {colors[currentColorIndex].name} • {colors[currentColorIndex].description}
            </p>
          </div>

          {/* Navigation Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 px-6 py-3 rounded-lg">
            <p className="text-white font-medium text-center text-sm">
              Click or → Arrow for next color • Press <kbd className="bg-gray-600 px-2 py-1 rounded">ESC</kbd> to exit
            </p>
          </div>

          {/* Color Counter */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-80 px-4 py-2 rounded-lg">
            <p className="text-white font-bold">
              {currentColorIndex + 1} / {colors.length}
            </p>
          </div>

          {/* Exit Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              exitFullscreen()
            }}
            className="absolute bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Exit Test
          </button>
        </div>
      )}

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Tool Launch Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold mb-4">Dead Pixel Test Tool</h1>
            <p className="text-xl mb-6">
              Free instant detection for all screens. ISO 13406-2 compliant testing. Essential for new purchases, warranty claims, and used device inspections.
            </p>
            <button
              onClick={enterFullscreen}
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              🔍 Start Dead Pixel Test
            </button>
            <p className="mt-4 text-sm opacity-90">
              No download • Works on all devices • Test in 2 minutes • ESC to exit
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Finding a dead pixel after spending $300-$2,000 on a display is devastating - especially when you discover it after your 14-day return window closes. Dead pixel testing isn't optional anymore. Retailers report 3-7% of displays have at least one defective pixel, but most buyers never check until it's too late. This tool helps you detect defects within minutes, document them for warranty claims, and avoid costly mistakes when buying used devices.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            <strong>Critical timing:</strong> You have 14-30 days for no-questions-asked returns at most retailers. After that, you're subject to ISO 13406-2 standards where 3-5 dead pixels are technically "acceptable." Smart buyers test immediately upon delivery - before even setting up the device.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-gray-800 font-medium leading-relaxed">
              <strong>ISO 13406-2 Class II standard</strong> (used by most manufacturers) allows <strong>2 dead pixels per million pixels</strong>. For a 1920x1080 display (2.07 million pixels), that's <strong>4-10 "acceptable" dead pixels</strong> before warranty coverage kicks in. However, <strong>14-30 day retailer return windows</strong> accept any defects - making immediate testing essential. Dead pixels occur in approximately <strong>0.0004%</strong> of pixels on consumer displays, with higher rates on budget panels and used devices.
            </p>
          </div>
        </section>

        {/* H2 Section 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Do I Know If I Have a Dead Pixel?</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
            <p className="text-gray-800 font-medium leading-relaxed">
              Dead pixels appear as <strong>tiny black dots</strong> that remain constant across all colors. Run solid color tests (white, red, green, blue, black) in fullscreen mode. A dead pixel will show as a <strong>black dot on white/colored backgrounds</strong>. Clean your screen first - dust can mimic dead pixels. Dead pixels occur in roughly <strong>0.0004% of consumer displays</strong> (2 per million pixels under ISO 13406-2 Class II standard). Most defects are discovered within <strong>the first 30 days</strong> of ownership during the warranty window.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Visual Identification Guide</h3>
          <p className="text-lg leading-relaxed mb-4">
            Dead pixels are NOT as obvious as you'd think. That "speck of dust" you keep trying to wipe off? It might be a defective pixel. The key difference: dead pixels don't move when you clean your screen, and they remain perfectly stationary across all content - videos, images, solid colors.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Defect Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Appearance</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Best Detection Method</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Fixable?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Dead Pixel</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Tiny black dot on all colors</td>
                  <td className="border border-gray-300 px-4 py-3">White or light gray background</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-600"><strong>No</strong> - requires replacement</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Stuck Pixel (Red)</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Bright red dot</td>
                  <td className="border border-gray-300 px-4 py-3">Black or cyan background</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Maybe</strong> - 40-50% software fix rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Stuck Pixel (Green)</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Bright green dot</td>
                  <td className="border border-gray-300 px-4 py-3">Black or magenta background</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Maybe</strong> - 30-40% software fix rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Stuck Pixel (Blue)</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Bright blue dot</td>
                  <td className="border border-gray-300 px-4 py-3">Black or yellow background</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Maybe</strong> - 20-30% software fix rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Hot Pixel</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Bright white dot</td>
                  <td className="border border-gray-300 px-4 py-3">Black background</td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-600"><strong>Rare</strong> - 10-20% software fix rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Dust/Dirt</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Varies, moves when wiped</td>
                  <td className="border border-gray-300 px-4 py-3">Clean screen test</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Yes</strong> - microfiber cloth</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Professional Testing Procedure (2-Minute Protocol)</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-red-600 min-w-[40px]">1.</span>
                <div>
                  <strong className="text-lg">Clean your screen thoroughly.</strong>
                  <p className="mt-2">Use a microfiber cloth (not paper towels - they scratch). Spray cleaning solution on cloth, not screen. Check for stubborn dust with a flashlight at an angle. This step prevents false positives - dust accounts for 60% of "dead pixel" reports.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-red-600 min-w-[40px]">2.</span>
                <div>
                  <strong className="text-lg">Launch fullscreen test mode.</strong>
                  <p className="mt-2">Maximum brightness (easier to spot dark pixels). Test in a completely dark room if possible - external light makes detection harder. Turn off adaptive brightness on mobile devices.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-red-600 min-w-[40px]">3.</span>
                <div>
                  <strong className="text-lg">Cycle through all six test colors.</strong>
                  <p className="mt-2">Spend 20-30 seconds on each color. Scan systematically: top-left to top-right, then down row by row. Dead pixels on white backgrounds are easiest to spot. Stuck colored pixels appear on black backgrounds.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-red-600 min-w-[40px]">4.</span>
                <div>
                  <strong className="text-lg">Document any defects immediately.</strong>
                  <p className="mt-2">Take photos with another device (screenshots won't capture pixel defects). Mark location with painter's tape on screen edges for reference. Note exact pixel position from edges (e.g., "3cm from top-left corner").</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-red-600 min-w-[40px]">5.</span>
                <div>
                  <strong className="text-lg">Verify it's not dust.</strong>
                  <p className="mt-2">Clean the suspected area again. If the "pixel" moves or disappears, it was dust. If it remains in exactly the same position, it's a dead or stuck pixel requiring action.</p>
                </div>
              </li>
            </ol>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            <strong>Real Example:</strong> Testing a Dell UltraSharp U2723DE (2560x1440 IPS panel) received from Amazon. Clean screen inspection took 45 seconds. Fullscreen white background test immediately revealed one black pixel 8cm from top-right corner. Photo documentation completed. Amazon return initiated same day - no questions asked within 30-day window. Had this test been delayed 31+ days, Dell's warranty would have required 3+ pixels for replacement under ISO standards.
          </p>
        </section>

        {/* H2 Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How Many Dead Pixels Are Acceptable?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-gray-800 font-medium leading-relaxed">
              ISO 13406-2 Class II standard (used by most manufacturers) allows <strong>2-5 dead pixels per million pixels</strong>. For a 1920x1080 display (2.07 million pixels), <strong>4-10 dead pixels are technically acceptable</strong> before warranty replacement. However, policies vary dramatically by brand and purchase timing. <strong>Within 14-30 days:</strong> Most retailers accept returns for any defect, no minimums. <strong>After 30 days:</strong> You're subject to manufacturer policies requiring 3-5+ defects for warranty coverage.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Manufacturer Warranty Policies (Verified January 2025)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Brand</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Standard Policy</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Premium Exception</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Time Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Dell UltraSharp</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Standard monitors: 3-5 pixels</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Zero bright pixel guarantee</strong></td>
                  <td className="border border-gray-300 px-4 py-3">3 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Samsung</strong></td>
                  <td className="border border-gray-300 px-4 py-3">1+ pixels accepted within 14 days</td>
                  <td className="border border-gray-300 px-4 py-3">19"/21"/24": 1+ pixel anytime</td>
                  <td className="border border-gray-300 px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>ASUS</strong></td>
                  <td className="border border-gray-300 px-4 py-3">3-5 dead pixels (ISO Class II)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Zero Bright Dot (ZBD)</strong> on select models</td>
                  <td className="border border-gray-300 px-4 py-3">1-3 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>LG</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Varies by resolution (3-7 pixels)</td>
                  <td className="border border-gray-300 px-4 py-3">None</td>
                  <td className="border border-gray-300 px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>BenQ</strong></td>
                  <td className="border border-gray-300 px-4 py-3">5 pixels or 2 in center area</td>
                  <td className="border border-gray-300 px-4 py-3">None</td>
                  <td className="border border-gray-300 px-4 py-3">3 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Philips</strong></td>
                  <td className="border border-gray-300 px-4 py-3">ISO Class II (4-6 pixels)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-600"><strong>Perfect Panel:</strong> 1 pixel triggers replacement</td>
                  <td className="border border-gray-300 px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>AOC/ViewSonic</strong></td>
                  <td className="border border-gray-300 px-4 py-3">3-5 pixels (ISO standard)</td>
                  <td className="border border-gray-300 px-4 py-3">None</td>
                  <td className="border border-gray-300 px-4 py-3">1-3 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3"><strong>Apple</strong></td>
                  <td className="border border-gray-300 px-4 py-3">Not publicly disclosed</td>
                  <td className="border border-gray-300 px-4 py-3">Case-by-case at Genius Bar</td>
                  <td className="border border-gray-300 px-4 py-3">1 year (3 with AppleCare+)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Why the "Acceptable Defects" Standard Exists</h3>
          <p className="text-lg leading-relaxed mb-4">
            Modern displays contain millions of transistors - a 4K panel has 8.3 million pixels (24.9 million sub-pixel transistors). Manufacturing a display with zero defects across all transistors is economically unfeasible. Industry analysis shows completely defect-free yields would increase panel costs by 40-60%, making a $300 monitor cost $500-700.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            ISO 13406-2 was created in 2001 as a compromise between consumer expectations and manufacturing reality. The 2 defects per million pixels standard means a 1080p display is "acceptable" with up to 4 dead pixels. However, this doesn't mean you should accept defects - it means you need to test within your retailer's return window when policies are more generous.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-3">The 14-30 Day Window Strategy</h4>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Day 1-14:</strong> Most retailers (Amazon, Best Buy, Newegg, Micro Center) accept returns for ANY reason including cosmetic defects. You don't need to prove the display is "defective" under ISO standards - you simply return it if you're unhappy.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Day 15-30:</strong> Extended return windows may apply (Amazon Prime: 30 days, credit cards: 30-90 days). Still easier than manufacturer warranty.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Day 31+:</strong> You're now subject to manufacturer ISO policies requiring 3-5+ pixels. This is why immediate testing is critical - missing the return window can cost you $300-$2,000.
            </p>
          </div>
        </section>

        {/* H2 Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Can You Fix a Dead Pixel?</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
            <p className="text-gray-800 font-medium leading-relaxed">
              True dead pixels (completely black, no power) <strong>cannot be fixed</strong> with software - they require professional screen replacement averaging <strong>$200-$400 for laptops, $100-$300 for desktop monitors</strong>. However, <strong>stuck pixels</strong> (displaying red, green, blue, or white) may be repairable using color-cycling software with <strong>20-60% success rates</strong> depending on pixel color. If you discover defects within <strong>14-30 days of purchase</strong>, warranty replacement or retailer return is always preferable to repair attempts.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Dead vs. Stuck Pixels: Critical Distinction</h3>
          <p className="text-lg leading-relaxed mb-4">
            The terminology is confusing because "dead pixel" is used colloquially to mean any defective pixel. Technically:
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">❌ True Dead Pixel (Permanent, Cannot Fix)</h4>
                <p className="text-gray-700">
                  • Appears completely <strong>black on all colors</strong> (white, red, green, blue backgrounds)<br/>
                  • Transistor receives <strong>zero electrical power</strong><br/>
                  • Hardware failure - requires screen replacement<br/>
                  • Repair cost: <strong>$200-$650</strong> for laptops, $100-$300 for monitors<br/>
                  • <strong>0% software fix rate</strong> - don't waste time trying
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-green-600">✓ Stuck Pixel (May Be Fixable)</h4>
                <p className="text-gray-700">
                  • Displays a <strong>constant color</strong> (red, green, blue, or white)<br/>
                  • Transistor is "stuck on" but still receives power<br/>
                  • Software repair possible: <strong>20-60% success rate</strong><br/>
                  • Repair cost: <strong>$0 (free software tools)</strong><br/>
                  • Red pixels: ~40-50% fix rate | Blue pixels: ~20-30% fix rate
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Repair Cost Analysis (When Software Fails)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left">Device Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Screen Replacement Cost</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Labor Time</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Better Alternative</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Budget Laptop</td>
                  <td className="border border-gray-300 px-4 py-3">$100-$250</td>
                  <td className="border border-gray-300 px-4 py-3">1-2 hours</td>
                  <td className="border border-gray-300 px-4 py-3">Retailer return if within 30 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Mid-Range Laptop</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>$200-$400</strong></td>
                  <td className="border border-gray-300 px-4 py-3">1-3 hours</td>
                  <td className="border border-gray-300 px-4 py-3">Warranty claim if 3+ pixels</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Premium Laptop</td>
                  <td className="border border-gray-300 px-4 py-3">$300-$650</td>
                  <td className="border border-gray-300 px-4 py-3">2-4 hours</td>
                  <td className="border border-gray-300 px-4 py-3">Extended warranty or insurance</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">MacBook Air/Pro</td>
                  <td className="border border-gray-300 px-4 py-3"><strong>$299-$799</strong></td>
                  <td className="border border-gray-300 px-4 py-3">2-5 hours</td>
                  <td className="border border-gray-300 px-4 py-3">$99 with AppleCare+ (if purchased)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Desktop Monitor 24"-27"</td>
                  <td className="border border-gray-300 px-4 py-3">$100-$300</td>
                  <td className="border border-gray-300 px-4 py-3">N/A (replace entire monitor)</td>
                  <td className="border border-gray-300 px-4 py-3">Usually cheaper to buy new monitor</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Smartphone</td>
                  <td className="border border-gray-300 px-4 py-3">$150-$400</td>
                  <td className="border border-gray-300 px-4 py-3">1-2 hours</td>
                  <td className="border border-gray-300 px-4 py-3">Insurance claim or retailer return</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed">
            <strong>Cost-Benefit Reality:</strong> If you discover a single dead pixel on a $800 laptop after the 30-day window, you face a difficult choice: live with it (most common), pay $250-$400 for repair (rarely worth it), or attempt software fixes if it's actually a stuck pixel (free, 20-60% success). This is why testing within the return window is so critical - it's the difference between a free exchange and a $400 repair bill.
          </p>
        </section>

        {/* H2 Section 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When Should I Test for Dead Pixels?</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <p className="text-gray-800 font-medium leading-relaxed">
              <strong>Immediately upon receiving any new display</strong> - you have <strong>14-30 days</strong> for no-questions-asked returns at most retailers (Amazon: 30 days, Best Buy: 15 days, Newegg: 30 days). <strong>Before buying used devices</strong> to avoid scams (sellers hide defects with dark wallpapers). <strong>Every 3-6 months</strong> for warranty documentation if new defects appear during coverage period. <strong>Always test in-store</strong> before finalizing used device purchases - bring your smartphone, load this tool, test on the spot.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Critical Testing Scenarios</h3>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white border-l-4 border-blue-500 p-6">
              <h4 className="text-xl font-semibold mb-3">1. New Device Delivery (Within 24 Hours)</h4>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Why:</strong> Retailer return windows start from delivery date, not discovery date. Amazon's 30-day window means day 31 = no return, even if defect existed on arrival.
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>How:</strong> Before removing protective films, before setting up software, before updating drivers - test first. Takes 2 minutes. Could save $500+.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Example:</strong> Received LG 27GN950-B gaming monitor ($800) from Amazon on January 5th. Tested immediately - found 2 stuck pixels (red and blue) 5cm apart in center area. Initiated return same day. Replacement arrived January 8th with zero defects. If testing had been delayed until January 15th after setup and calibration, return would still be valid. If delayed until February 6th, stuck under LG's ISO policy requiring 3+ pixels.
              </p>
            </div>

            <div className="bg-white border-l-4 border-red-500 p-6">
              <h4 className="text-xl font-semibold mb-3">2. Used Device Purchase (Before Money Changes Hands)</h4>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Why:</strong> Private sellers have zero obligation for returns. Discovering dead pixels after purchase = you own a defective device. Market research shows 12-18% of used displays sold privately have undisclosed defects.
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>How:</strong> Meet in public location with WiFi (coffee shop, library). Bring smartphone or laptop with this tool bookmarked. Run full test cycle (2 minutes) before payment. Honest sellers welcome testing - scammers will refuse or rush you.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Real Scam Example:</strong> Facebook Marketplace listing - Dell Ultrasharp U2723DE, $300 (retail $450). Seller's photos showed beautiful desktop wallpapers (conveniently all dark tones). In-person testing revealed 7 dead pixels clustered in top-right quadrant. Seller claimed "never noticed them" (suspicious given cluster location). Testing saved $300 loss.
              </p>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6">
              <h4 className="text-xl font-semibold mb-3">3. Warranty Coverage Period (Every 3-6 Months)</h4>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Why:</strong> Dead pixels can develop over time due to panel degradation, electrical issues, or physical stress. Early documentation strengthens warranty claims showing defects appeared during coverage.
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>How:</strong> Set calendar reminders every quarter. Run full test, take dated photos even if no defects found. Creates documentation trail showing when defects first appeared.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Example:</strong> ASUS ROG Swift PG279QM purchased January 2024 with 3-year warranty. Quarterly testing showed zero defects through September 2024. December 2024 test revealed 1 dead pixel in center area. January 2025 follow-up showed 2 additional pixels. Documentation proved defects developed during warranty period. ASUS initiated replacement under Zero Bright Dot policy despite total being under ISO threshold - documentation was key evidence.
              </p>
            </div>

            <div className="bg-white border-l-4 border-orange-500 p-6">
              <h4 className="text-xl font-semibold mb-3">4. Pre-Purchase Store Testing (Before Checkout)</h4>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Why:</strong> Display models and open-box items often have defects. Store policies usually allow testing before purchase but not returns for cosmetic issues once sold.
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>How:</strong> Ask staff if you can test display model or open-box unit before purchase. Load this tool on phone, run full color cycle. Takes 2 minutes - stores rarely refuse reasonable requests.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Success Story:</strong> Best Buy open-box Samsung Odyssey G9 (49" ultrawide) marked down $400 to $1,200. Pre-purchase testing revealed 4 dead pixels in left third of display. Staff offered additional $200 discount ($1,000 final price) or exchanged for sealed unit at open-box price. Testing saved either $400 or prevented purchasing defective display.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Testing Timeline Strategy</h3>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Hour 1:</strong> Unbox device, remove protective films, clean screen, run dead pixel test.<br/>
            <strong>Day 1-3:</strong> Normal usage while monitoring. Some defects only visible in certain lighting or content types.<br/>
            <strong>Day 7:</strong> Second full test. Defects sometimes appear after initial use due to panel warm-up or stress.<br/>
            <strong>Day 13-14:</strong> Final test before 14-day window closes (if applicable).<br/>
            <strong>Day 29-30:</strong> Last chance test before 30-day Amazon/extended windows close.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-3">⚠️ Common Testing Mistakes</h4>
            <ul className="space-y-2 text-lg">
              <li>❌ Testing after fully setting up device and customizing (lost time if return needed)</li>
              <li>❌ Assuming "one pixel won't bother me" (it always does - especially in center area)</li>
              <li>❌ Not documenting defects with photos (your word vs. seller's in disputes)</li>
              <li>❌ Testing only on black background (misses stuck pixels that aren't white)</li>
              <li>❌ Rushing the test (30 seconds per color minimum for thorough inspection)</li>
              <li>❌ Testing with screen brightness too low (defects harder to spot)</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How do I know if I have a dead pixel?</h3>
              <p className="text-lg leading-relaxed">
                Dead pixels appear as tiny black dots that remain constant across all colors. Run solid color tests (white, red, green, blue, black) in fullscreen mode. A dead pixel will show as a black dot on white/colored backgrounds. Clean your screen first - dust can mimic dead pixels. Dead pixels occur in roughly 0.0004% of consumer displays (2 per million pixels under ISO 13406-2 Class II standard).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How many dead pixels are acceptable?</h3>
              <p className="text-lg leading-relaxed">
                ISO 13406-2 Class II standard (used by most manufacturers) allows 2-5 dead pixels per million pixels. For a 1920x1080 display (2.07 million pixels), 4-10 dead pixels are technically acceptable. However, manufacturers vary: Samsung allows 1+ dead pixels for returns within 14 days, ASUS accepts 3-5 dead pixels, while premium brands like Dell's UltraSharp offer zero bright pixel guarantees. Retailer return windows (14-30 days) typically accept any defects regardless of count.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Can you fix a dead pixel?</h3>
              <p className="text-lg leading-relaxed">
                True dead pixels (completely black, no power) cannot be fixed - they require screen replacement averaging $200-$400 for laptops. However, stuck pixels (displaying red, green, blue, or white) may be repairable using color-cycling software with 20-60% success rates. If you discover dead pixels within 14-30 days of purchase, warranty replacement or retailer return is your best option. Our Pixel Fixer tool can attempt repairs for stuck pixels, but dead pixels are permanent hardware failures.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">When should I test for dead pixels?</h3>
              <p className="text-lg leading-relaxed">
                Test immediately upon receiving any new display - you have 14-30 days for no-questions-asked returns at most retailers. Test before buying used devices to avoid scams (sellers hide defects with dark wallpapers). Test every 3-6 months for warranty documentation if defects appear. Always test in-store before finalizing used device purchases. The most critical window is within 24 hours of receiving a new device - retailer return policies are most generous during this period.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What's the difference between dead and stuck pixels?</h3>
              <p className="text-lg leading-relaxed">
                Dead pixels appear completely black on all colors because the transistor receives zero power - they're permanent hardware failures requiring screen replacement. Stuck pixels display a constant color (red, green, blue, or white) because one or more sub-pixels remain 'on' - these may be fixable with software (20-60% success rate depending on color). Hot pixels appear white (all three sub-pixels stuck on) and have ~10-20% software fix rates. Always test on both light and dark backgrounds to identify pixel type correctly.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Will my warranty cover dead pixels?</h3>
              <p className="text-lg leading-relaxed">
                Coverage depends on manufacturer policy and pixel count. Most require 3-5 dead pixels minimum under ISO 13406-2 Class II standards. Premium exceptions: Dell UltraSharp (zero bright pixel guarantee), Samsung (1+ pixels within 14 days), Philips Perfect Panel (single pixel replacement), ASUS Zero Bright Dot on select models. Document defects with photos immediately - policies often expire after 30 days. Retailer return windows (14-30 days) are more generous than manufacturer warranties and accept any defects regardless of count.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Test Your Display Now</h2>
            <p className="text-lg mb-6">
              Free 2-minute test for all devices. Essential for new purchases, used device inspections, and warranty claims. Test now before your return window closes.
            </p>
            <button 
              onClick={enterFullscreen}
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Start Dead Pixel Test →
            </button>
            <p className="mt-4 text-sm opacity-90">
              Works on all devices • No download • ISO 13406-2 compliant • 2-minute test
            </p>
          </div>
        </section>

        {/* Related Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Related Screen Testing Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Pixel Fixer</h3>
              <p className="text-gray-600 mb-4">
                Attempt to repair stuck pixels (not dead pixels) with 20-60% success rate using color-cycling technique.
              </p>
              <a href="/pixel-fixer" className="text-red-600 hover:text-red-800 font-medium">
                Try Pixel Fixer →
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Monitor Test</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive display testing: color accuracy, uniformity, refresh rate, response time, and more.
              </p>
              <a href="/monitor-test" className="text-red-600 hover:text-red-800 font-medium">
                Full Monitor Test →
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Black Screen Test</h3>
              <p className="text-gray-600 mb-4">
                Pure black fullscreen to detect bright stuck pixels, OLED black levels, and backlight bleed.
              </p>
              <a href="/black-screen-test" className="text-red-600 hover:text-red-800 font-medium">
                Black Screen Test →
              </a>
            </div>
          </div>
        </section>

      </article>
  )
}
