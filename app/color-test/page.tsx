'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const primaryColors = [
  { name: 'Red', value: '#FF0000', desc: 'Pure red - tests red subpixels' },
  { name: 'Green', value: '#00FF00', desc: 'Pure green - tests green subpixels' },
  { name: 'Blue', value: '#0000FF', desc: 'Pure blue - tests blue subpixels' },
  { name: 'Cyan', value: '#00FFFF', desc: 'Green + Blue combination' },
  { name: 'Magenta', value: '#FF00FF', desc: 'Red + Blue combination' },
  { name: 'Yellow', value: '#FFFF00', desc: 'Red + Green combination' },
  { name: 'White', value: '#FFFFFF', desc: 'All colors at maximum' },
  { name: 'Black', value: '#000000', desc: 'All colors off' },
]

export default function ColorTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentColor, setCurrentColor] = useState(primaryColors[0])
  const [customColor, setCustomColor] = useState('#FF0000')

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen()
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isFullscreen])

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const exitFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const useCustomColor = () => {
    setCurrentColor({ name: 'Custom', value: customColor, desc: 'Your custom color' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              style={{ backgroundColor: currentColor.value }}
              className="relative aspect-video cursor-pointer group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl">🎨</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm">Current: {currentColor.name}</div>
                  <div className="text-xs">{currentColor.desc}</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white space-y-4">
              {/* Primary Colors */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Primary & Secondary Colors</h3>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                  {primaryColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setCurrentColor(color)}
                      style={{ backgroundColor: color.value }}
                      className={`h-16 rounded-lg font-medium transition border-4 hover:scale-105 ${
                        currentColor.name === color.name
                          ? 'border-blue-600 scale-105'
                          : 'border-gray-200'
                      } ${
                        ['#FFFFFF', '#FFFF00', '#00FFFF'].includes(color.value) 
                          ? 'text-gray-900' 
                          : 'text-white'
                      }`}
                      title={color.desc}
                    >
                      <div className="text-xs font-semibold">{color.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Color Picker */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Custom Color</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="h-12 w-20 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg font-mono uppercase"
                    placeholder="#FF0000"
                  />
                  <button
                    onClick={useCustomColor}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Use Custom Color
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <strong>Tip:</strong> Press 'F' for fullscreen mode. Look for color uniformity and accuracy across your entire screen.
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Color Test Tool</h1>
              <p className="text-lg text-gray-600">
                Test RGB color accuracy and display calibration with primary colors, secondary colors, and custom color picker.
                Perfect for checking color reproduction on monitors, TVs, and mobile devices.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Select a color from the palette or use the custom color picker</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click the display or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Check if colors appear accurate and uniform across the entire screen</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Test each primary color (Red, Green, Blue) to verify subpixel functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Press 'Escape' or click to exit fullscreen when finished</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding RGB Colors</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-600 rounded"></div>
                    <h3 className="font-semibold text-red-900">Red (#FF0000)</h3>
                  </div>
                  <p className="text-red-800 text-sm">
                    Tests red subpixels. Should appear as pure red with no orange or pink tint.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-600 rounded"></div>
                    <h3 className="font-semibold text-green-900">Green (#00FF00)</h3>
                  </div>
                  <p className="text-green-800 text-sm">
                    Tests green subpixels. Should be bright green, not yellow or blue-green.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                    <h3 className="font-semibold text-blue-900">Blue (#0000FF)</h3>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Tests blue subpixels. Should be pure blue, not purple or cyan.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What should I look for during color testing?</h3>
                  <p className="text-gray-600">
                    Check for color uniformity (no patches or gradients), accurate hue (no color shifts), 
                    and proper brightness. Colors should match across your entire screen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Why do colors look different on different screens?</h3>
                  <p className="text-gray-600">
                    Each display has different color gamut, calibration, and panel technology. OLED displays show 
                    more vibrant colors than LCD, while IPS panels have better color accuracy than TN panels.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do I calibrate my monitor colors?</h3>
                  <p className="text-gray-600">
                    Use this tool to identify color issues, then adjust your monitor's color settings or use 
                    professional calibration tools like a colorimeter for accurate results.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is this tool free?</h3>
                  <p className="text-gray-600">
                    Yes! Completely free, no download, no signup required. Works on all devices including 
                    phones, tablets, and desktop monitors.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's the difference between primary and secondary colors?</h3>
                  <p className="text-gray-600">
                    Primary colors (Red, Green, Blue) are single subpixels. Secondary colors (Cyan, Magenta, Yellow) 
                    are combinations of two primaries. All three primaries create White.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                  <div className="text-sm text-gray-600">Find defective pixels</div>
                </Link>
                <Link href="/brightness-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Brightness Test</div>
                  <div className="text-sm text-gray-600">Calibrate brightness</div>
                </Link>
                <Link href="/monitor-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Monitor Test Suite</div>
                  <div className="text-sm text-gray-600">Complete testing</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fullscreen-container"
          style={{ backgroundColor: currentColor.value }}
          onClick={exitFullscreen}
        >
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
            {currentColor.name} {currentColor.value} | ESC: Exit | Click to exit
          </div>
        </div>
      )}
    </div>
  )
}
