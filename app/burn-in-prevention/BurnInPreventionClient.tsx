'use client'

import { useState, useEffect } from 'react'

export default function BurnInPreventionClient() {
  const [isRunning, setIsRunning] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [colorIndex, setColorIndex] = useState(0)

  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']

  useEffect(() => {
    if (!isRunning) return
    
    const moveInterval = setInterval(() => {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100)
      })
    }, 3000)

    const colorInterval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length)
    }, 1000)

    return () => {
      clearInterval(moveInterval)
      clearInterval(colorInterval)
    }
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
          "text": "OLED burn-in occurs when static images display for extended periods (2000+ hours), causing uneven pixel wear. Bright UI elements like taskbars, logos, or HUDs degrade faster than surrounding pixels. Risk increases with screen brightness above 80% and static content over 4 hours daily."
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
          "text": "Yes. Keep brightness at 60% or lower for static content, enable pixel shift features, hide taskbars when not needed, use dark mode, run screensavers after 5-10 minutes idle, vary displayed content frequently. These methods extend OLED lifespan by 3-5x."
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
              className="absolute w-24 h-24 rounded-lg opacity-60"
              style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
                backgroundColor: colors[colorIndex],
                transition: 'all 3s ease-in-out',
                boxShadow: `0 0 40px ${colors[colorIndex]}`
              }}
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={stopPrevention}
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition font-semibold shadow-lg"
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
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Start Burn-in Prevention →
            </button>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-600">
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

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  OLED burn-in occurs when static images display for extended periods (<strong>2000+</strong> hours), causing uneven pixel wear. Bright UI elements like taskbars, logos, or HUDs degrade faster than surrounding pixels. After <strong>2000-5000</strong> hours of static content at <strong>80%+</strong> brightness, permanent ghost images appear. Risk increases exponentially with brightness—<strong>100%</strong> brightness degrades pixels <strong>4-5x faster</strong> than <strong>50%</strong> brightness.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                OLED technology fundamentally differs from LCD. Each OLED pixel generates its own light through organic compounds that chemically degrade with use. When displaying static content (Windows taskbars, macOS menu bars, CNN news tickers, game HUDs), those specific pixels work constantly at high intensity while surrounding pixels rest or display darker content. Over thousands of hours, heavily-used pixels dim relative to less-used areas, creating permanent ghost images—the "burn-in" phenomenon.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Modern OLED displays include burn-in mitigation features: pixel shift (moving content by 1-2 pixels periodically), logo dimming (detecting static elements and reducing their brightness), screen refresh cycles (running compensation algorithms during idle periods), and automatic brightness limiting (capping UI element brightness below maximum). However, these only reduce risk—they don't eliminate it entirely. Users displaying static content 8+ hours daily remain at significant risk despite built-in protections.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                The degradation mechanism is cumulative and irreversible. OLED organic compounds (typically derivatives of anthracene, perylene, or rubrene for different colors) emit light through electroluminescence. Each emission cycle causes molecular breakdown—blue OLEDs degrade fastest (shortest lifespan at 10,000-15,000 hours to 50% brightness), green moderate (20,000-30,000 hours), red slowest (40,000-50,000 hours). Static content accelerates this natural aging in specific pixel locations, creating visible brightness mismatch.
              </p>

              {/* Burn-in timeline - UNIQUE RED/ORANGE DESIGN with warning timeline */}
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-8 my-8 border-2 border-red-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  ⚠️ Burn-in Risk Timeline
                </h3>
                
                <div className="space-y-4">
                  {/* 0-500 hours */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-bold text-gray-900 text-lg">0-500 Hours</div>
                        <div className="text-sm text-gray-600">Initial Break-in Period</div>
                      </div>
                      <div className="text-2xl font-bold text-green-600">Safe ✓</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '10%'}}></div>
                    </div>
                    <p className="text-sm text-gray-700">Minimal degradation. Pixels still in optimal condition. No visible burn-in risk during this period.</p>
                  </div>

                  {/* 500-2000 hours */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-bold text-gray-900 text-lg">500-2000 Hours</div>
                        <div className="text-sm text-gray-600">Low Risk Period</div>
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">Caution ⚠</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <p className="text-sm text-gray-700">Early degradation begins. Static UI elements at <strong>100%</strong> brightness showing measurable aging. Still reversible with varied content.</p>
                  </div>

                  {/* 2000-5000 hours */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-bold text-gray-900 text-lg">2000-5000 Hours</div>
                        <div className="text-sm text-gray-600">Moderate Risk Period</div>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">Warning ⚠️</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <p className="text-sm text-gray-700">Burn-in becomes visible with static content at <strong>80%+</strong> brightness. Taskbars, logos show as faint ghost images. Prevention critical.</p>
                  </div>

                  {/* 5000+ hours */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="font-bold text-gray-900 text-lg">5000+ Hours</div>
                        <div className="text-sm text-gray-600">High Risk Period</div>
                      </div>
                      <div className="text-2xl font-bold text-red-600">Danger ⛔</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <p className="text-sm text-gray-700"><strong>Permanent burn-in highly likely</strong> with continued static content. Visible ghost images on all backgrounds. Replacement may be only solution.</p>
                  </div>
                </div>

                <div className="mt-6 bg-red-100 border-2 border-red-400 rounded-lg p-4">
                  <p className="text-red-900 font-semibold text-center">
                    <strong>Note:</strong> Timeline assumes <strong>80-100%</strong> brightness with static content. Lower brightness (<strong>50-60%</strong>) extends safe period by <strong>3-5x</strong>.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Long Does It Take for OLED Burn-in to Occur?
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  OLED burn-in typically requires <strong>2000-5000</strong> hours of displaying static content at high brightness (<strong>80%+</strong>). With normal varied usage, modern OLEDs last <strong>5-10 years</strong> without noticeable burn-in. However, displaying static taskbars <strong>8 hours daily</strong> at <strong>100%</strong> brightness may show visible burn-in within <strong>12-24 months</strong>. Timeline varies dramatically based on brightness level, content type, and panel quality.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Timeline calculation example: Working 8 hours daily with Windows taskbar visible = 2,920 hours annually. At 100% brightness, visible burn-in appears around 2,000-2,500 hours (8-10 months). At 50% brightness, the same wear requires 8,000-10,000 hours (2.7-3.4 years). This exponential relationship between brightness and degradation explains why brightness management is the single most effective prevention strategy.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Real-world testing by Rtings.com (2017-2022 OLED burn-in study) displayed static content 20 hours daily at 100% brightness on multiple OLED TVs. Results: CNN logo visible at 2,100 hours (4.3 months), FIFA game HUD visible at 4,300 hours (8.9 months), severe permanent burn-in at 9,000 hours (18.7 months). All displays eventually failed with permanent logo retention. Key finding: reducing brightness to 50% extended time-to-burn-in by 4-5x in parallel testing.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Gaming presents specific risks: static HUD elements (health bars, minimaps, score displays) remain on-screen for entire gaming sessions. Playing Call of Duty 4 hours daily with HUD at 100% brightness = 1,460 hours annually concentrated on same screen pixels. Visible HUD burn-in typically appears within 12-18 months under these conditions. Modern games offering HUD transparency/hiding options significantly reduce risk.
              </p>

              {/* Real-world scenarios - UNIQUE RED DESIGN with warning cards */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">💻</div>
                    <h4 className="font-bold text-gray-900 text-lg">Office Work Scenario</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Usage:</strong> 8 hours daily, Windows taskbar always visible</p>
                    <p><strong>Brightness:</strong> 100% (default)</p>
                    <p><strong>Annual hours:</strong> 2,920 hours on taskbar pixels</p>
                    <p className="text-red-700 font-semibold bg-red-100 p-2 rounded">⚠️ <strong>Burn-in risk: 8-12 months</strong></p>
                    <p><strong>Prevention:</strong> Reduce to 50% brightness = 32-48 months safe</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">🎮</div>
                    <h4 className="font-bold text-gray-900 text-lg">Gaming Scenario</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Usage:</strong> 4 hours daily with static HUD</p>
                    <p><strong>Brightness:</strong> 80% (HDR gaming)</p>
                    <p><strong>Annual hours:</strong> 1,460 hours on HUD pixels</p>
                    <p className="text-orange-700 font-semibold bg-orange-100 p-2 rounded">⚠️ <strong>Burn-in risk: 18-24 months</strong></p>
                    <p><strong>Prevention:</strong> Enable HUD transparency, reduce brightness to 60%</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">📺</div>
                    <h4 className="font-bold text-gray-900 text-lg">Varied Content Scenario</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Usage:</strong> 6 hours daily mixed content (movies, shows, games)</p>
                    <p><strong>Brightness:</strong> 60% average</p>
                    <p><strong>Annual hours:</strong> 2,190 hours varied content</p>
                    <p className="text-green-700 font-semibold bg-green-100 p-2 rounded">✓ <strong>Burn-in risk: 5-10 years</strong></p>
                    <p><strong>Best practice:</strong> Normal consumer lifespan without issues</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">📱</div>
                    <h4 className="font-bold text-gray-900 text-lg">Mobile Phone Scenario</h4>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><strong>Usage:</strong> 5 hours daily, status bar always visible</p>
                    <p><strong>Brightness:</strong> 70% average (auto-brightness)</p>
                    <p><strong>Annual hours:</strong> 1,825 hours on status icons</p>
                    <p className="text-blue-700 font-semibold bg-blue-100 p-2 rounded">⚠️ <strong>Burn-in risk: 2-3 years</strong></p>
                    <p><strong>Built-in protection:</strong> Pixel shift, icon dimming extends lifespan</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Can OLED Burn-in Be Prevented?
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-gray-800 font-medium leading-relaxed">
                  Yes, burn-in is highly preventable. Keep brightness at <strong>60%</strong> or lower for static content (extends lifespan <strong>3-5x</strong>), enable pixel shift features (built into most OLEDs), hide taskbars when not actively needed, use dark mode (reduces overall pixel activation), run screensavers after <strong>5-10 minutes</strong> idle, and vary displayed content frequently. These methods combined can extend OLED lifespan from <strong>2 years</strong> to <strong>8-10 years</strong> without visible burn-in.
                </p>
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Prevention effectiveness hierarchy based on impact: (<strong>1</strong>) Brightness reduction to 50-60% provides the largest benefit—4-5x lifespan extension and completely free. (<strong>2</strong>) Hiding static UI elements (taskbars, menu bars) removes the primary burn-in source—2-3x extension for desktop users. (<strong>3</strong>) Dark mode reduces average pixel activation across entire display—1.5-2x extension. (<strong>4</strong>) Pixel shift moves content 1-2 pixels preventing perfect alignment—1.3-1.5x extension. (<strong>5</strong>) Screensavers after 5-10 minutes prevents overnight/idle burn-in—1.2-1.3x extension.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                Brightness management deserves emphasis because it's exponential, not linear. Running at 100% brightness versus 50% doesn't provide 2x lifespan—it provides 4-5x lifespan because OLED degradation accelerates at higher power levels. The chemical reaction producing light also produces heat, which accelerates molecular breakdown. Lower brightness = lower power = lower heat = dramatically slower degradation. This is why professional OLED users (video editors, colorists) run displays at 120-150 cd/m² (30-40% brightness) for longevity.
              </p>

              {/* Prevention strategies - UNIQUE RED DESIGN with action steps */}
              <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-8 my-8 border-2 border-red-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  🛡️ Burn-in Prevention Action Plan
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Reduce Brightness to 50-60% Immediately</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Single most effective prevention method. Extends lifespan <strong>4-5x</strong>. Set display brightness to 50-60% for desktop work, 70-80% maximum for HDR gaming. Never exceed 80% for static content.</p>
                        <div className="text-xs text-red-700 bg-red-50 inline-block px-3 py-2 rounded font-semibold mt-2">Impact: 4-5x lifespan extension | Cost: $0 | Time: 30 seconds</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Hide Taskbars and Static UI Elements</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Windows: Set taskbar to auto-hide. macOS: Enable auto-hide Dock and menu bar. Gaming: Use HUD transparency/hiding options when available. Removes primary burn-in source.</p>
                        <div className="text-xs text-orange-700 bg-orange-50 inline-block px-3 py-2 rounded font-semibold mt-2">Impact: 2-3x lifespan extension | Cost: $0 | Time: 2 minutes setup</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">3</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Enable Dark Mode System-Wide</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Reduces average pixel activation by 40-60%. Dark backgrounds use minimal OLED power. Enable dark themes in OS, browsers, applications. Particularly effective for text-heavy work.</p>
                        <div className="text-xs text-yellow-700 bg-yellow-50 inline-block px-3 py-2 rounded font-semibold mt-2">Impact: 1.5-2x lifespan extension | Cost: $0 | Time: 5 minutes</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Enable Built-in Pixel Shift Features</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Check display settings for "pixel shift," "screen shift," or "OLED care" features. Moves content by 1-2 pixels periodically. Most modern OLEDs include this, ensure it's enabled.</p>
                        <div className="text-xs text-green-700 bg-green-50 inline-block px-3 py-2 rounded font-semibold mt-2">Impact: 1.3-1.5x lifespan extension | Cost: $0 | Time: 1 minute</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Set Screensaver to 5-10 Minutes</h4>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">Prevents overnight/idle burn-in from static content. Use moving screensaver or blank screen. Our burn-in prevention tool provides free screensaver option with moving patterns.</p>
                        <div className="text-xs text-blue-700 bg-blue-50 inline-block px-3 py-2 rounded font-semibold mt-2">Impact: 1.2-1.3x lifespan extension | Cost: $0 | Time: 2 minutes</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-100 border-2 border-green-400 rounded-lg p-4">
                  <p className="text-green-900 font-semibold text-center">
                    <strong>Combined Effect:</strong> Implementing all 5 strategies can extend OLED lifespan from <strong>2 years</strong> to <strong>8-10 years</strong> without visible burn-in.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-red-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What causes OLED burn-in?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    OLED burn-in occurs when static images display for <strong>2000+</strong> hours, causing uneven pixel wear. Bright UI elements (taskbars, HUDs) at <strong>80%+</strong> brightness degrade <strong>4-5x faster</strong> than <strong>50%</strong> brightness. OLED pixels emit light through organic compounds that chemically degrade with use—cumulative and irreversible damage creating permanent ghost images.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-red-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How long does it take for OLED burn-in to occur?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    OLED burn-in requires <strong>2000-5000</strong> hours of static content at <strong>80%+</strong> brightness. With varied usage, modern OLEDs last <strong>5-10 years</strong>. Static taskbars <strong>8 hours daily</strong> at <strong>100%</strong> brightness show burn-in within <strong>8-12 months</strong>. Reducing brightness to <strong>50%</strong> extends timeline to <strong>32-48 months</strong> (4-5x longer).
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-red-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can OLED burn-in be prevented?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes. <strong>Brightness reduction to 50-60%</strong> provides <strong>4-5x</strong> extension. Hide taskbars (<strong>2-3x</strong>), use dark mode (<strong>1.5-2x</strong>), enable pixel shift (<strong>1.3-1.5x</strong>), run screensavers after <strong>5-10 minutes</strong> (<strong>1.2-1.3x</strong>). Combined strategies extend lifespan from <strong>2 years</strong> to <strong>8-10 years</strong> without visible burn-in.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-red-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Is burn-in covered under warranty?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most manufacturers exclude burn-in from warranty as "user-caused damage" from improper usage. LG provides <strong>1-2 year</strong> coverage on some OLED TVs. Best Buy's Geek Squad Protection (<strong>$200-400</strong>) covers burn-in. Apple replaces OLED iPhones with burn-in within <strong>1-year</strong> warranty if severe. Prevention cheaper than replacement.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-red-300 transition hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Should I avoid OLED displays because of burn-in?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No, not if you implement prevention strategies. OLED provides superior image quality (infinite contrast, perfect blacks, instant response). With <strong>50-60%</strong> brightness and varied content, expect <strong>5-10 years</strong> lifespan. Avoid OLED only for <strong>24/7</strong> static content (news tickers, security monitors). For normal varied usage with proper settings, burn-in risk is minimal.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Start Protection Now</h2>
                <p className="text-red-100 mb-6 text-lg">
                  Run burn-in prevention screensaver to protect OLED displays during idle time. Free moving pattern protection.
                </p>
                <button
                  onClick={startPrevention}
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg text-lg"
                >
                  Start Burn-in Prevention →
                </button>
              </div>
            </section>

            {/* Related Tools */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Related Display Protection
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="/black-screen" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-red-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Black Screen Test</h3>
                  <p className="text-sm text-gray-600">Test OLED for existing burn-in with black background.</p>
                </a>

                <a href="/pixel-fixer" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-red-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Pixel Fixer</h3>
                  <p className="text-sm text-gray-600">Attempt to fix stuck pixels before burn-in develops.</p>
                </a>

                <a href="/brightness-test" className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition hover:border-red-400">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Brightness Test</h3>
                  <p className="text-sm text-gray-600">Calibrate brightness to safe 50-60% for OLED protection.</p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  )
}
