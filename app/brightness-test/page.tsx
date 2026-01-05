'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const brightnessLevels = [
  { name: 'Black', value: 0, hex: '#000000' },
  { name: '10%', value: 26, hex: '#1A1A1A' },
  { name: '20%', value: 51, hex: '#333333' },
  { name: '30%', value: 77, hex: '#4D4D4D' },
  { name: '40%', value: 102, hex: '#666666' },
  { name: '50%', value: 128, hex: '#808080' },
  { name: '60%', value: 153, hex: '#999999' },
  { name: '70%', value: 179, hex: '#B3B3B3' },
  { name: '80%', value: 204, hex: '#CCCCCC' },
  { name: '90%', value: 230, hex: '#E6E6E6' },
  { name: 'White', value: 255, hex: '#FFFFFF' },
]

export default function BrightnessTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(5) // Start at 50%
  const [showGradient, setShowGradient] = useState(false)

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
      } else if (e.key === 'ArrowUp' && isFullscreen) {
        e.preventDefault()
        setCurrentLevel(Math.min(currentLevel + 1, brightnessLevels.length - 1))
      } else if (e.key === 'ArrowDown' && isFullscreen) {
        e.preventDefault()
        setCurrentLevel(Math.max(currentLevel - 1, 0))
      } else if (e.key === 'g' || e.key === 'G') {
        setShowGradient(!showGradient)
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isFullscreen, currentLevel, showGradient])

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

  const getCurrentColor = () => {
    const val = brightnessLevels[currentLevel].value
    return `rgb(${val}, ${val}, ${val})`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              style={{ 
                background: showGradient 
                  ? 'linear-gradient(to right, #000000 0%, #FFFFFF 100%)'
                  : getCurrentColor() 
              }}
              className="relative aspect-video cursor-pointer group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl">☀️</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm">
                    {showGradient ? 'Gradient Mode' : `Level: ${brightnessLevels[currentLevel].name}`}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white space-y-4">
              {/* Brightness Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Brightness Level</label>
                  <span className="text-sm font-mono text-gray-600">
                    {brightnessLevels[currentLevel].name} ({brightnessLevels[currentLevel].hex})
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={brightnessLevels.length - 1}
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-black to-white rounded-lg appearance-none cursor-pointer"
                  style={{
                    WebkitAppearance: 'none',
                  }}
                />
              </div>

              {/* Quick Select Buttons */}
              <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
                {brightnessLevels.map((level, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentLevel(idx)}
                    style={{ backgroundColor: level.hex }}
                    className={`h-12 rounded-lg font-medium transition border-4 ${
                      currentLevel === idx
                        ? 'border-blue-600 scale-105'
                        : 'border-gray-200'
                    } ${
                      level.value > 128 ? 'text-gray-900' : 'text-white'
                    }`}
                    title={level.name}
                  >
                    <div className="text-xs font-semibold">{level.name}</div>
                  </button>
                ))}
              </div>

              {/* Gradient Toggle */}
              <div className="flex items-center justify-between border-t pt-4">
                <span className="text-sm font-semibold text-gray-700">Gradient Mode</span>
                <button
                  onClick={() => setShowGradient(!showGradient)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    showGradient
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {showGradient ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <strong>Controls:</strong> Arrow Up/Down to adjust brightness | G for gradient | F for fullscreen | ESC to exit
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Brightness Test Tool</h1>
              <p className="text-lg text-gray-600">
                Calibrate your monitor brightness with 11 grayscale levels from pure black to pure white. 
                Test brightness uniformity, gradient smoothness, and find the optimal brightness setting for your eyes.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Use the slider or buttons to select a brightness level (0-100%)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click the display or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Use Arrow Up/Down keys to fine-tune brightness in fullscreen</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Toggle gradient mode (press 'G') to check for banding</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Adjust your monitor settings until all levels are distinguishable</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimal Brightness Settings</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">🏢 Office Environment (Bright Light)</h3>
                  <p className="text-yellow-800 text-sm">
                    <strong>Recommended:</strong> 250-350 cd/m² (70-90% brightness). Higher brightness to compete 
                    with ambient light. All 11 levels should be clearly visible.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">🏠 Home Use (Medium Light)</h3>
                  <p className="text-blue-800 text-sm">
                    <strong>Recommended:</strong> 150-250 cd/m² (50-70% brightness). Balanced setting for mixed 
                    lighting conditions. Comfortable for extended use.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-900 mb-2">🌙 Dark Room (Low Light)</h3>
                  <p className="text-purple-800 text-sm">
                    <strong>Recommended:</strong> 100-150 cd/m² (30-50% brightness). Reduce eye strain in dark 
                    environments. Black levels should remain deep, not grayish.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">🎨 Color-Critical Work</h3>
                  <p className="text-green-800 text-sm">
                    <strong>Recommended:</strong> 120 cd/m² (calibrated). Professional standard for photo/video 
                    editing. Use hardware calibration tool for accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Brightness</h2>
              <div className="bg-white border rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <strong className="text-gray-900">Nits (cd/m²):</strong>
                  <p className="text-gray-600">Measurement of screen brightness. 1 nit = 1 candela per square meter. 
                  Most monitors range from 200-400 nits.</p>
                </div>
                <div>
                  <strong className="text-gray-900">Black Level:</strong>
                  <p className="text-gray-600">Lowest brightness the screen can display. Lower is better. 
                  OLED displays achieve true black (0 nits).</p>
                </div>
                <div>
                  <strong className="text-gray-900">Contrast Ratio:</strong>
                  <p className="text-gray-600">Difference between brightest white and darkest black. 
                  Higher ratio means better image quality. Typical: 1000:1 for LCD, infinite for OLED.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Should I see all 11 brightness levels?</h3>
                  <p className="text-gray-600">
                    Yes! If you can't distinguish between adjacent levels (especially dark grays), your monitor 
                    brightness is too high or your contrast is miscalibrated.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's the ideal brightness for my eyes?</h3>
                  <p className="text-gray-600">
                    Match your monitor brightness to ambient lighting. The screen should not be noticeably brighter 
                    or dimmer than your surroundings. Too bright causes eye strain, too dim causes squinting.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Why does black look gray on my screen?</h3>
                  <p className="text-gray-600">
                    LCD displays have backlight that can't turn off completely, causing elevated black levels. 
                    This is normal. OLED/AMOLED displays can show true black by turning off pixels.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What is gradient banding?</h3>
                  <p className="text-gray-600">
                    Visible steps or bands in smooth gradients instead of continuous transitions. Caused by limited 
                    color depth (6-bit vs 8-bit panels) or poor calibration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Does brightness affect power consumption?</h3>
                  <p className="text-gray-600">
                    Yes! LCD brightness significantly affects power (backlight intensity). OLED power depends on 
                    content (white pixels use more power than black pixels).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/contrast-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Contrast Test</div>
                  <div className="text-sm text-gray-600">Check contrast ratio</div>
                </Link>
                <Link href="/white-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">White Screen</div>
                  <div className="text-sm text-gray-600">Max brightness test</div>
                </Link>
                <Link href="/black-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Black Screen</div>
                  <div className="text-sm text-gray-600">Min brightness test</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div 
          className="fullscreen-container show-cursor"
          style={{ 
            background: showGradient 
              ? 'linear-gradient(to right, #000000 0%, #FFFFFF 100%)'
              : getCurrentColor() 
          }}
          onClick={exitFullscreen}
        >
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            {showGradient ? 'Gradient Mode' : `${brightnessLevels[currentLevel].name} - ${brightnessLevels[currentLevel].hex}`} | 
            ↑↓: Adjust | G: Gradient | ESC: Exit
          </div>
        </div>
      )}
    </div>
  )
}
