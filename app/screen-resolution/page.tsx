'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ScreenResolution() {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    availWidth: 0,
    availHeight: 0,
    colorDepth: 0,
    pixelDepth: 0,
    devicePixelRatio: 0,
    orientation: '',
    touchSupport: false,
  })

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const updateInfo = () => {
      setScreenInfo({
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
        devicePixelRatio: window.devicePixelRatio,
        orientation: window.screen.orientation?.type || 'unknown',
        touchSupport: 'ontouchstart' in window,
      })
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateInfo()
    window.addEventListener('resize', updateInfo)
    window.addEventListener('orientationchange', updateInfo)

    return () => {
      window.removeEventListener('resize', updateInfo)
      window.removeEventListener('orientationchange', updateInfo)
    }
  }, [])

  const getResolutionCategory = (width: number, height: number) => {
    const totalPixels = width * height
    
    if (totalPixels >= 7680 * 4320) return { name: '8K', color: 'purple', desc: 'Ultra HD Premium' }
    if (totalPixels >= 5120 * 2880) return { name: '5K', color: 'indigo', desc: 'Retina 5K' }
    if (totalPixels >= 3840 * 2160) return { name: '4K UHD', color: 'blue', desc: 'Ultra High Definition' }
    if (totalPixels >= 2560 * 1440) return { name: 'QHD/1440p', color: 'green', desc: 'Quad HD' }
    if (totalPixels >= 1920 * 1200) return { name: 'WUXGA', color: 'cyan', desc: 'Widescreen Ultra' }
    if (totalPixels >= 1920 * 1080) return { name: 'Full HD/1080p', color: 'teal', desc: 'Full High Definition' }
    if (totalPixels >= 1600 * 900) return { name: 'HD+', color: 'yellow', desc: 'High Definition Plus' }
    if (totalPixels >= 1366 * 768) return { name: 'HD/720p', color: 'orange', desc: 'High Definition' }
    return { name: 'SD', color: 'red', desc: 'Standard Definition' }
  }

  const getAspectRatio = (width: number, height: number) => {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b)
    const divisor = gcd(width, height)
    const ratioW = width / divisor
    const ratioH = height / divisor
    
    // Common aspect ratios
    if (Math.abs((width/height) - (16/9)) < 0.01) return '16:9'
    if (Math.abs((width/height) - (16/10)) < 0.01) return '16:10'
    if (Math.abs((width/height) - (21/9)) < 0.01) return '21:9'
    if (Math.abs((width/height) - (32/9)) < 0.01) return '32:9'
    if (Math.abs((width/height) - (4/3)) < 0.01) return '4:3'
    
    return `${ratioW}:${ratioH}`
  }

  const getPPI = (width: number, height: number, diagonal: number) => {
    const diagonalPixels = Math.sqrt(width * width + height * height)
    return Math.round(diagonalPixels / diagonal)
  }

  const category = getResolutionCategory(screenInfo.width, screenInfo.height)
  const aspectRatio = getAspectRatio(screenInfo.width, screenInfo.height)
  const totalPixels = (screenInfo.width * screenInfo.height / 1000000).toFixed(2)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className={`relative aspect-video bg-gradient-to-br from-${category.color}-600 via-${category.color}-500 to-${category.color}-400 flex items-center justify-center`}>
            <div className="text-center text-white space-y-4">
              <div className="text-8xl">📐</div>
              <div className="text-5xl font-bold">{screenInfo.width} × {screenInfo.height}</div>
              <div className="text-2xl font-semibold">{category.name}</div>
              <div className="text-lg opacity-90">{category.desc}</div>
              <div className="text-md opacity-75">{totalPixels}M pixels | {aspectRatio} aspect ratio</div>
            </div>
          </div>
          
          <div className="p-6 bg-white space-y-6">
            {/* Display Information Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-900">{screenInfo.width}</div>
                <div className="text-sm text-blue-700 mt-1">Width (px)</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-900">{screenInfo.height}</div>
                <div className="text-sm text-purple-700 mt-1">Height (px)</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-900">{aspectRatio}</div>
                <div className="text-sm text-green-700 mt-1">Aspect Ratio</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-900">{screenInfo.colorDepth}</div>
                <div className="text-sm text-orange-700 mt-1">Color Depth</div>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="border-t pt-4">
              <h3 className="font-semibold text-gray-900 mb-3">Detailed Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Total Pixels:</span>
                  <span className="font-semibold">{totalPixels}M</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Device Pixel Ratio:</span>
                  <span className="font-semibold">{screenInfo.devicePixelRatio}x</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Available Width:</span>
                  <span className="font-semibold">{screenInfo.availWidth}px</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Available Height:</span>
                  <span className="font-semibold">{screenInfo.availHeight}px</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Browser Width:</span>
                  <span className="font-semibold">{windowSize.width}px</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Browser Height:</span>
                  <span className="font-semibold">{windowSize.height}px</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Orientation:</span>
                  <span className="font-semibold capitalize">{screenInfo.orientation.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Touch Support:</span>
                  <span className="font-semibold">{screenInfo.touchSupport ? 'Yes ✓' : 'No ✗'}</span>
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => {
                const info = `Screen Resolution: ${screenInfo.width}×${screenInfo.height}
Category: ${category.name}
Aspect Ratio: ${aspectRatio}
Total Pixels: ${totalPixels}M
Color Depth: ${screenInfo.colorDepth}-bit
Device Pixel Ratio: ${screenInfo.devicePixelRatio}x`
                navigator.clipboard.writeText(info)
                alert('Display information copied to clipboard!')
              }}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              📋 Copy Display Info
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Screen Resolution Detector</h1>
            <p className="text-lg text-gray-600">
              Instantly detect your display resolution, aspect ratio, pixel density, and more. 
              Perfect for checking if you're running at native resolution or troubleshooting display settings.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Tool Shows</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Screen Resolution:</strong> Your display's pixel dimensions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Category:</strong> HD, Full HD, 4K, etc.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Aspect Ratio:</strong> Width-to-height proportional relationship</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Color Depth:</strong> Bits per pixel for color representation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Device Pixel Ratio:</strong> Physical vs logical pixels (Retina displays)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Touch Support:</strong> Whether your display has touchscreen capability</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Resolutions</h2>
            <div className="space-y-3">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">8K UHD (7680×4320)</h3>
                <p className="text-gray-600 text-sm">
                  33.2M pixels. Extreme resolution for professional content creation. Requires powerful hardware.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">4K UHD (3840×2160)</h3>
                <p className="text-gray-600 text-sm">
                  8.3M pixels. Four times 1080p. Standard for high-end monitors, TVs, and content creation.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">QHD/1440p (2560×1440)</h3>
                <p className="text-gray-600 text-sm">
                  3.7M pixels. Sweet spot for gaming. 78% more pixels than 1080p, manageable GPU requirements.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold text-teal-900 mb-2">Full HD/1080p (1920×1080)</h3>
                <p className="text-gray-600 text-sm">
                  2.1M pixels. Most common resolution. Great for gaming, general use. Budget-friendly.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">HD/720p (1280×720)</h3>
                <p className="text-gray-600 text-sm">
                  0.9M pixels. Entry-level HD. Common on budget laptops and older displays.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aspect Ratios Explained</h2>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">16:9 (Most Common)</h4>
                <p className="text-gray-600">
                  Standard widescreen. Used in most modern monitors, TVs, and laptops. Perfect for movies and gaming.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">16:10 (Productivity)</h4>
                <p className="text-gray-600">
                  Taller than 16:9. More vertical space for documents and multitasking. Common in professional monitors.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">21:9 (Ultrawide)</h4>
                <p className="text-gray-600">
                  Ultra-wide cinema format. Great for immersive gaming and video editing. Like having two monitors.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1">32:9 (Super Ultrawide)</h4>
                <p className="text-gray-600">
                  Equivalent to two 16:9 monitors side by side. Maximum productivity and immersion.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What's the difference between screen resolution and window size?</h3>
                <p className="text-gray-600">
                  Screen resolution is your display's full pixel count. Window size is your browser's current dimensions, 
                  which is smaller when not maximized or when toolbars/taskbars take space.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What is Device Pixel Ratio?</h3>
                <p className="text-gray-600">
                  Shows how many physical pixels equal one CSS pixel. 2x means Retina/HiDPI display with 4x the pixels 
                  (2× width, 2× height). Higher DPR = sharper text and images.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Should I use native resolution?</h3>
                <p className="text-gray-600">
                  Yes! Always use your display's native resolution for sharpest image. Scaling to non-native resolutions 
                  causes blurriness. Adjust font size/UI scaling instead if things are too small.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Why does my resolution look wrong?</h3>
                <p className="text-gray-600">
                  Check display settings in Windows/Mac. Update graphics drivers. Ensure proper cable connection 
                  (some HDMI versions limit resolution). Try different port if available.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/refresh-rate-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Refresh Rate Test</div>
                <div className="text-sm text-gray-600">Check your Hz</div>
              </Link>
              <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                <div className="text-sm text-gray-600">Test all pixels</div>
              </Link>
              <Link href="/monitor-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Monitor Test</div>
                <div className="text-sm text-gray-600">Full testing suite</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
