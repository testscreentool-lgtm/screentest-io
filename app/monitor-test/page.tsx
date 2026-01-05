'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const testModes = [
  { 
    id: 'solid', 
    name: 'Solid Colors', 
    icon: '🎨',
    colors: ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF']
  },
  { 
    id: 'gradient', 
    name: 'Gradient Test', 
    icon: '📊',
    type: 'gradient'
  },
  { 
    id: 'grid', 
    name: 'Grid Pattern', 
    icon: '⊞',
    type: 'grid'
  },
  { 
    id: 'backlight', 
    name: 'Backlight Bleed', 
    icon: '💡',
    colors: ['#000000', '#111111', '#222222']
  },
]

export default function MonitorTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentMode, setCurrentMode] = useState(testModes[0])
  const [colorIndex, setColorIndex] = useState(0)

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
      } else if (e.key === ' ' && isFullscreen) {
        e.preventDefault()
        nextTest()
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isFullscreen, currentMode, colorIndex])

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

  const nextTest = () => {
    if (currentMode.colors && colorIndex < currentMode.colors.length - 1) {
      setColorIndex(colorIndex + 1)
    } else {
      setColorIndex(0)
      const nextModeIndex = (testModes.indexOf(currentMode) + 1) % testModes.length
      setCurrentMode(testModes[nextModeIndex])
    }
  }

  const selectMode = (mode: typeof testModes[0]) => {
    setCurrentMode(mode)
    setColorIndex(0)
  }

  const renderTestPattern = () => {
    if (currentMode.type === 'gradient') {
      return (
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(to right, #000000 0%, #FFFFFF 100%)'
          }}
        />
      )
    } else if (currentMode.type === 'grid') {
      return (
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 50px),
              repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 50px)
            `,
            backgroundColor: '#FFFFFF'
          }}
        />
      )
    } else if (currentMode.colors) {
      return (
        <div 
          className="w-full h-full"
          style={{ backgroundColor: currentMode.colors[colorIndex] }}
        />
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              className="relative aspect-video cursor-pointer group bg-gray-900"
            >
              {renderTestPattern()}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl">{currentMode.icon}</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm">Mode: {currentMode.name}</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {testModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => selectMode(mode)}
                    className={`p-4 rounded-lg font-medium transition border-2 ${
                      currentMode.id === mode.id
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{mode.icon}</div>
                    <div className="text-sm font-semibold">{mode.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Monitor Test Suite</h1>
              <p className="text-lg text-gray-600">
                Comprehensive display testing suite for professionals. Test solid colors, gradients, grid patterns, 
                and backlight bleeding. Perfect for monitor calibration and quality control.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Select a test mode from the buttons above</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click the display or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Press SPACE to cycle through tests, or ESC to exit</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Look for defects, uniformity issues, and color accuracy</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Test Modes Explained</h2>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🎨 Solid Colors</h3>
                  <p className="text-gray-600 text-sm">
                    Test pure colors (black, white, RGB) to detect dead pixels, stuck pixels, 
                    and color uniformity issues.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📊 Gradient Test</h3>
                  <p className="text-gray-600 text-sm">
                    Smooth black-to-white gradient reveals banding, color accuracy, and grayscale performance.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">⊞ Grid Pattern</h3>
                  <p className="text-gray-600 text-sm">
                    Checks geometry, convergence, and focus. Lines should be sharp and straight.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">💡 Backlight Bleed</h3>
                  <p className="text-gray-600 text-sm">
                    Dark screens reveal backlight bleeding around edges, common in LCD displays.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How often should I test my monitor?</h3>
                  <p className="text-gray-600">
                    Test when you first buy a monitor, after warranty period starts, and whenever you notice 
                    display issues. Professional users test monthly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What is backlight bleeding?</h3>
                  <p className="text-gray-600">
                    Light leaking from edges or corners during dark scenes. Common in LCD/LED displays. 
                    Some bleeding is normal, but excessive amounts indicate defects.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is this tool professional-grade?</h3>
                  <p className="text-gray-600">
                    Yes! Used by display professionals, repair shops, and quality control departments. 
                    Provides comprehensive testing suitable for certification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                  <div className="text-sm text-gray-600">Detect stuck pixels</div>
                </Link>
                <Link href="/brightness-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Brightness Test</div>
                  <div className="text-sm text-gray-600">Calibrate brightness</div>
                </Link>
                <Link href="/contrast-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Contrast Test</div>
                  <div className="text-sm text-gray-600">Check contrast ratio</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fullscreen-container show-cursor">
          {renderTestPattern()}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            {currentMode.name} | SPACE: Next Test | ESC: Exit
          </div>
        </div>
      )}
    </div>
  )
}
