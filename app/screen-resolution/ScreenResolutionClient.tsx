'use client'

import { useState, useEffect } from 'react'

export default function ScreenResolutionClient() {
  const [resolution, setResolution] = useState<{width: number, height: number} | null>(null)
  const [dpi, setDpi] = useState<number | null>(null)

  useEffect(() => {
    setResolution({
      width: window.screen.width * window.devicePixelRatio,
      height: window.screen.height * window.devicePixelRatio
    })
    
    // Calculate DPI
    const div = document.createElement('div')
    div.style.width = '1in'
    document.body.appendChild(div)
    const calculatedDpi = div.offsetWidth
    document.body.removeChild(div)
    setDpi(calculatedDpi)
  }, [])

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good screen resolution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1920x1080 (Full HD) is standard for 24-inch monitors, 2560x1440 (QHD) ideal for 27-inch, 3840x2160 (4K) for 32-inch+. Higher resolutions provide sharper text and more screen space. Consider pixel density (PPI): aim for 90-110 PPI for general use, 140+ PPI for design work."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check my screen resolution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check resolution in Display Settings (Windows: Settings > System > Display) or System Preferences (Mac: Apple Menu > System Preferences > Displays). Browser-based tests detect physical pixel count including Retina/HiDPI scaling."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between resolution and screen size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resolution is pixel count (1920x1080). Screen size is physical dimensions (24 inches diagonal). Same resolution on different sizes creates different pixel density (PPI). 1080p on 24-inch = sharp, 1080p on 32-inch = pixelated."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Screen Resolution Test: Check Resolution & Pixel Density
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Detect your screen's actual resolution and pixel density (PPI/DPI). Verify 1080p, 1440p, 4K, or Retina displays are configured correctly.
            </p>

            {resolution && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">{resolution.width} × {resolution.height}</div>
                    <div className="text-gray-600">Screen Resolution (pixels)</div>
                  </div>
                  {dpi && (
                    <div className="bg-white rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">{dpi} DPI</div>
                      <div className="text-gray-600">Pixel Density</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ Instant Detection</span>
              <span>✓ Accurate Measurement</span>
              <span>✓ All Devices</span>
              <span>✓ HiDPI/Retina Support</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Is a Good Screen Resolution?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>1920x1080</strong> (Full HD) is standard for 24-inch monitors, <strong>2560x1440</strong> (QHD) ideal for 27-inch, <strong>3840x2160</strong> (4K) for 32-inch+. Higher resolutions provide sharper text and more screen space. Consider pixel density (PPI): aim for <strong>90-110 PPI</strong> for general use, <strong>140+ PPI</strong> for design work.
                </p>
              </div>

              <p className="mb-4">
                Resolution determines both sharpness and available screen space. Higher pixel counts create sharper text and images but require more GPU power. The optimal resolution depends on screen size, viewing distance, and use case. Too high resolution on small screens wastes GPU resources; too low resolution on large screens looks pixelated.
              </p>

              <p className="mb-4">
                Pixel density (PPI - pixels per inch) matters more than raw resolution. A 27-inch 1440p monitor (109 PPI) looks sharper than a 32-inch 1440p monitor (92 PPI) despite identical resolution. Calculate PPI by dividing diagonal pixel count by diagonal inches. Target 90-110 PPI for comfortable viewing at normal distances, 140-220 PPI for close-up work.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Do I Check My Screen Resolution?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  Check resolution in <strong>Display Settings</strong> (Windows: Settings &gt; System &gt; Display) or <strong>System Preferences</strong> (Mac: Apple Menu &gt; System Preferences &gt; Displays). Browser-based tests detect physical pixel count including Retina/HiDPI scaling.
                </p>
              </div>

              <p className="mb-4">
                Operating systems sometimes display "scaled" resolution rather than native resolution. For example, MacBook Pros show 1920x1200 in settings but actually run 3840x2400 pixels (Retina 2x scaling). Browser-based detection reads actual pixel count. Always verify you're running at native resolution for sharpest image—scaled resolutions reduce clarity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's the Difference Between Resolution and Screen Size?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-gray-800 font-medium">
                  <strong>Resolution</strong> is pixel count (<strong>1920x1080</strong>). <strong>Screen size</strong> is physical dimensions (<strong>24 inches</strong> diagonal). Same resolution on different sizes creates different pixel density (PPI). <strong>1080p on 24-inch</strong> = sharp, <strong>1080p on 32-inch</strong> = pixelated.
                </p>
              </div>

              <p className="mb-4">
                Common mistake: buying large monitors without considering resolution. A 32-inch 1080p monitor has visibly pixelated text compared to a 24-inch 1080p, despite identical resolution. The pixels are physically larger and more visible. Always match resolution to screen size: 24-inch = 1080p, 27-inch = 1440p, 32-inch = 4K.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What is a good screen resolution?
                  </h3>
                  <p className="text-gray-700">
                    <strong>1920x1080</strong> for 24-inch monitors, <strong>2560x1440</strong> for 27-inch, <strong>3840x2160</strong> for 32-inch+. Aim for <strong>90-110 PPI</strong> for general use, <strong>140+ PPI</strong> for design work.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I check my screen resolution?
                  </h3>
                  <p className="text-gray-700">
                    Check in <strong>Display Settings</strong> (Windows) or <strong>System Preferences</strong> (Mac). Browser tests detect physical pixel count including Retina/HiDPI scaling.
                  </p>
                </div>

                <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What's the difference between resolution and screen size?
                  </h3>
                  <p className="text-gray-700">
                    <strong>Resolution</strong> is pixel count. <strong>Screen size</strong> is physical dimensions. Same resolution on different sizes creates different pixel density. <strong>1080p on 24-inch</strong> = sharp, <strong>1080p on 32-inch</strong> = pixelated.
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
