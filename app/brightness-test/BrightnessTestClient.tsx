'use client'

import { useState } from 'react'

type BrightnessLevel = 0 | 25 | 50 | 75 | 100

export default function BrightnessTestClient() {
  const [brightnessLevel, setBrightnessLevel] = useState<BrightnessLevel>(100)
  const [showFullscreen, setShowFullscreen] = useState(false)

  const brightnessDescriptions = {
    0: { desc: 'Black (0% brightness)', use: 'Testing minimum black level' },
    25: { desc: 'Dark (25% brightness)', use: 'Dark room / night viewing' },
    50: { desc: 'Medium (50% brightness)', use: 'Office / moderate lighting' },
    75: { desc: 'Bright (75% brightness)', use: 'Bright room / daytime' },
    100: { desc: 'Maximum (100% brightness)', use: 'Peak brightness / HDR testing' }
  }

  const enterFullscreen = () => {
    setShowFullscreen(true)
    document.body.style.overflow = 'hidden'
  }

  const exitFullscreen = () => {
    setShowFullscreen(false)
    document.body.style.overflow = 'auto'
  }

  if (showFullscreen) {
    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ 
          backgroundColor: `rgba(255, 255, 255, ${brightnessLevel / 100})`,
          transition: 'background-color 0.3s ease'
        }}
      >
        <div className="absolute top-4 left-0 right-0 flex flex-col items-center gap-4 z-10">
          <div className="bg-black/80 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-semibold">{brightnessDescriptions[brightnessLevel].desc}</p>
            <p className="text-sm text-gray-300">{brightnessDescriptions[brightnessLevel].use}</p>
          </div>
          
          <div className="bg-black/80 px-6 py-4 rounded-lg backdrop-blur-sm flex items-center gap-4">
            <label className="text-white text-sm font-medium">Brightness:</label>
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={brightnessLevel}
              onChange={(e) => setBrightnessLevel(Number(e.target.value) as BrightnessLevel)}
              className="w-64 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-white text-sm font-mono min-w-[60px]">{brightnessLevel}%</span>
          </div>

          <button
            onClick={exitFullscreen}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Exit Test (ESC)
          </button>
        </div>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Brightness Test</h1>
          <p className="text-xl mb-6">
            Test your monitor's brightness levels, check uniformity, and understand HDR capabilities. Essential for validating DisplayHDR certifications and optimal viewing settings.
          </p>
          <button 
            onClick={enterFullscreen}
            className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Brightness Test →
          </button>
          <p className="mt-4 text-sm opacity-90">
            Press ESC to exit • Fullscreen test • Adjust brightness levels
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Ever cranked your monitor to 100% brightness at midnight, only to burn your retinas? Or struggled to see anything on your screen during daytime? That's why brightness matters. But here's what manufacturers don't tell you: that "HDR400" sticker on your monitor? It's a marketing scam. Real HDR starts at 600 nits with local dimming—anything less is just washed-out SDR content with a fancy badge.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-3">Quick Answer: What Brightness Do I Need?</h3>
            <ul className="space-y-2 text-lg">
              <li><strong>Office work:</strong> 250-350 nits (comfortable for 8+ hours)</li>
              <li><strong>Gaming SDR:</strong> 300-400 nits (bright without eye strain)</li>
              <li><strong>HDR gaming:</strong> 600-1000 nits minimum (DisplayHDR 600 certification)</li>
              <li><strong>Professional HDR:</strong> 1000+ nits (DisplayHDR 1000 for film/photo editing)</li>
              <li><strong>Eye strain prevention:</strong> 200-300 nits dark room, 400-500 office lighting</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">What Is DisplayHDR 400, 600, and 1000?</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            VESA (Video Electronics Standards Association) created DisplayHDR certifications to bring order to the HDR chaos. But here's the dirty secret: not all certifications are created equal, and DisplayHDR 400 is basically a participation trophy.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Certification</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Peak Brightness</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Local Dimming</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Real-World Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">DisplayHDR 400</td>
                  <td className="border border-gray-300 px-4 py-3">400 nits</td>
                  <td className="border border-gray-300 px-4 py-3">❌ Not required</td>
                  <td className="border border-gray-300 px-4 py-3">Marketing checkbox. Avoid.</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">DisplayHDR 600</td>
                  <td className="border border-gray-300 px-4 py-3">600 nits</td>
                  <td className="border border-gray-300 px-4 py-3">✅ Required (FALD/Mini-LED)</td>
                  <td className="border border-gray-300 px-4 py-3">First tier with real HDR. Sweet spot.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">DisplayHDR 1000</td>
                  <td className="border border-gray-300 px-4 py-3">1000 nits</td>
                  <td className="border border-gray-300 px-4 py-3">✅ Advanced zones</td>
                  <td className="border border-gray-300 px-4 py-3">Top LCD tier. Exceptional HDR.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">DisplayHDR True Black</td>
                  <td className="border border-gray-300 px-4 py-3">400-1000 nits</td>
                  <td className="border border-gray-300 px-4 py-3">✅ Per-pixel (OLED)</td>
                  <td className="border border-gray-300 px-4 py-3">Perfect blacks. Premium pricing.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            <strong>DisplayHDR 400</strong> monitors hit 400 nits peak brightness but have NO local dimming requirement. This means they can't display bright highlights AND deep blacks simultaneously—the entire backlight stays at one brightness level. Result? SDR content looks washed out when you enable HDR mode, and HDR content loses its impact. Enthusiasts call this "fake HDR" because it fails to deliver the core HDR benefit: contrast between bright and dark areas.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>DisplayHDR 600</strong> is where meaningful HDR begins. The 600 nit requirement plus mandatory FALD (Full Array Local Dimming) or Mini-LED backlighting means the monitor can actually brighten highlights while keeping blacks dark. This costs more ($400-700 monitors) but delivers a noticeable improvement over SDR. Professional reviews consistently rank this as the minimum for "real" HDR gaming.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>DisplayHDR 1000</strong> represents top-tier LCD HDR with 1000 nit peaks and advanced local dimming with higher zone counts to minimize blooming (glow around bright objects). These monitors ($700-1200) deliver dramatic HDR experiences, but diminishing returns set in—the jump from 600 to 1000 nits is less impactful than 400 to 600.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>DisplayHDR True Black</strong> variants (400/500/600/1000) are OLED-specific certifications. The "True Black" designation means perfect blacks (0.0005 nits measured) thanks to per-pixel lighting. OLED True Black 1000 is the new 2025 standard delivering 1000 nits peak with 500 nits sustained—previously impossible on OLED.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-3">Reality Check: Should You Enable HDR400?</h3>
            <p className="text-lg leading-relaxed">
              Community testing (Reddit r/Monitors, November 2024) compared ASUS TUF Gaming VG27AQL1A (HDR400) vs Gigabyte M27Q (HDR400). Conclusion: Both monitors produced WORSE image quality with HDR enabled—SDR content looked washed out, colors appeared desaturated, and brightness uniformity suffered. Recommendation: Disable HDR on HDR400 monitors and wait to upgrade to HDR600 minimum.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">What is a good brightness level for a monitor in nits?</h3>
            <p className="text-lg leading-relaxed">
              Monitor brightness recommendations by use: Office work/general use: 250-350 nits sufficient for indoor environments. Gaming SDR content: 300-400 nits for bright, clear visuals without eye strain. Content creation: 350-500 nits for color-critical work in controlled lighting. HDR gaming: 600-1000 nits minimum for true HDR experience (DisplayHDR 600 certification). Bright rooms/daytime use: 500-700 nits to combat ambient light glare. Professional HDR content: 1000+ nits (DisplayHDR 1000) for film/photo editing. Eye strain prevention: 200-300 nits in dark rooms, 400-500 in office lighting. Budget monitors: 250-350 nits typical, premium monitors: 400-600 nits, HDR monitors: 600-1000+ nits.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">What is DisplayHDR 400, 600, and 1000?</h3>
            <p className="text-lg leading-relaxed">
              VESA DisplayHDR certification tiers for monitor brightness and HDR performance: DisplayHDR 400 - 400 nits peak brightness, NO local dimming required, NOT considered true HDR by enthusiasts, makes SDR content look washed out, essentially marketing checkbox. DisplayHDR 600 - 600 nits peak, REQUIRES local dimming (FALD or Mini-LED), first tier delivering genuine HDR experience, 90%+ DCI-P3 color gamut, sweet spot for HDR gaming ($400-700 monitors). DisplayHDR 1000 - 1000 nits peak, advanced local dimming with higher zone count, 90% DCI-P3, minimizes blooming, exceptional contrast, top-tier HDR ($700-1200 monitors). DisplayHDR True Black (OLED) - 400/500/600/1000 variants, perfect blacks (0.0005 nits), per-pixel lighting, no blooming.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">How do I test my monitor's brightness?</h3>
            <p className="text-lg leading-relaxed">
              Monitor brightness testing methods: Software test (basic) - Display fullscreen white, use Windows/macOS brightness slider, observe comfort level at different percentages. Professional measurement requires hardware: Colorimeter ($100-500) like X-Rite ColorMunki, Datacolor Spyder, or Calibrite. Place device on center of screen, run calibration software, measures actual nit output. Professional testing: RTINGS methodology uses Konica Minolta CA-2000, measures 10% window brightness (industry standard), full-screen sustained brightness, peak brightness different APL levels. Uniformity testing: 25-point measurement (5x5 grid), center vs edge brightness delta, acceptable <15% drop in corners. DIY assessment: Fullscreen white at max brightness in dark room, look for hot spots/dim areas.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">What brightness should I use for gaming?</h3>
            <p className="text-lg leading-relaxed">
              Gaming brightness recommendations by scenario: Dark room gaming - 200-300 nits (30-50% brightness slider), prevents eye strain during long sessions, maintains contrast. Office/moderate lighting - 300-400 nits (50-70% brightness), balances visibility with comfort, most common gaming scenario. Bright room/daytime - 400-500 nits (70-85% brightness), overcomes ambient light, maintains color accuracy. HDR gaming - Monitor automatically adjusts: SDR content 250-350 nits, HDR highlights 600-1000+ nits depending on certification. Competitive FPS gaming - 350-400 nits recommended, enhances visibility in dark corners without washing out. Eye strain prevention - Lower brightness in evening (200-250 nits), increase daytime (350-450 nits), use bias lighting behind monitor.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Is 400 nits enough for HDR?</h3>
            <p className="text-lg leading-relaxed">
              No, 400 nits is NOT enough for true HDR experience. DisplayHDR 400 reality: Only 400 nits peak brightness, no local dimming requirement, cannot display bright highlights AND deep blacks simultaneously, makes SDR content look washed out when HDR enabled, considered marketing checkbox by enthusiasts. Why 400 nits fails HDR: HDR content mastered for 1000-4000 nits, 400 nit monitor tone-maps down aggressively, loses highlight detail and impact, bright scenes like sun/explosions look dim. Minimum for real HDR: DisplayHDR 600 (600 nits + local dimming) delivers noticeable HDR improvement, $400-700 monitor investment. Ideal HDR: DisplayHDR 1000 (1000 nits + advanced FALD) provides dramatic HDR experience, $700-1200 monitors.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">What is brightness uniformity and why does it matter?</h3>
            <p className="text-lg leading-relaxed">
              Brightness uniformity measures evenness of brightness across the screen, tested with fullscreen white. Common issues: 10-15% brightness drop in corners (acceptable for budget monitors), hot spots in center (backlight bleed through), dark patches/vignetting in quadrants (manufacturing defect). Professional measurement: 25-point test (5x5 grid), measure luminance at each point, compare to center reference. Acceptable standards: Budget monitors (<$300): <15% corner drop. Mid-range ($300-700): <10% corner drop, <5% center areas. Professional ($700+): <5% corner drop, <3% center areas. Why it matters: Photo/video editing - color grading inaccurate with uneven brightness, professional work requires <5% deviation. Gaming - less critical, 10-15% acceptable.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Test Your Monitor Brightness</h2>
          <p className="text-lg mb-6">
            Check brightness levels, test uniformity, understand HDR capabilities. 30-second test reveals actual performance vs marketing claims.
          </p>
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setTimeout(() => enterFullscreen(), 500)
            }}
            className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            Run Brightness Test →
          </button>
          <p className="mt-4 text-sm opacity-90">
            Fullscreen test • Multiple brightness levels • Uniformity assessment
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Related Display Tests</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Contrast Test</h3>
            <p className="text-gray-600 mb-4">
              Test dynamic range, black level precision, and contrast ratio. Essential for HDR evaluation.
            </p>
            <a href="/contrast-test" className="text-orange-600 hover:text-orange-800 font-medium">
              Test Contrast →
            </a>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Dead Pixel Test</h3>
            <p className="text-gray-600 mb-4">
              Detect stuck and dead pixels before return window closes. Essential for new monitor validation.
            </p>
            <a href="/dead-pixel-test" className="text-orange-600 hover:text-orange-800 font-medium">
              Check Pixels →
            </a>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Monitor Test</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive 8-test suite covering all display quality aspects. Complete testing in 5-10 minutes.
            </p>
            <a href="/monitor-test" className="text-orange-600 hover:text-orange-800 font-medium">
              Full Monitor Test →
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}
