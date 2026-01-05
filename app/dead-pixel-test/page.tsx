'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const colors = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Black', value: '#000000' },
  { name: 'Cyan', value: '#00FFFF' },
  { name: 'Magenta', value: '#FF00FF' },
  { name: 'Yellow', value: '#FFFF00' },
]

export default function DeadPixelTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const [isAuto, setIsAuto] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAuto && isFullscreen) {
      interval = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % colors.length)
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [isAuto, isFullscreen])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen()
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen()
      } else if (e.key === ' ' && isFullscreen) {
        e.preventDefault()
        nextColor()
      } else if (e.key === 'a' || e.key === 'A') {
        setIsAuto(!isAuto)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isFullscreen, isAuto])

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

  const nextColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % colors.length)
  }

  const selectColor = (index: number) => {
    setCurrentColorIndex(index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              style={{ backgroundColor: colors[currentColorIndex].value }}
              className="relative aspect-video cursor-pointer group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl">🔴</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm">Current: {colors[currentColorIndex].name}</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <div className="flex flex-wrap gap-3 mb-4">
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => selectColor(index)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      currentColorIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsAuto(!isAuto)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  isAuto
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAuto ? '⏸ Stop Auto-Cycle' : '▶️ Auto-Cycle Colors'}
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Dead Pixel Test</h1>
              <p className="text-lg text-gray-600">
                Professional dead and stuck pixel detector. Cycles through colors to find defective pixels
                on your screen. Works on all devices with instant fullscreen mode.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Click the color display above or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Press 'A' to auto-cycle through colors, or SPACE to manually advance</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Look for pixels that don't change color or stay the wrong color</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Press 'Escape' to exit fullscreen when finished</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Dead vs Stuck Pixels</h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">❌ Dead Pixel</h3>
                  <p className="text-red-800 text-sm">
                    Always black/dark on all colors. The pixel is completely non-functional and typically cannot be fixed.
                    Usually covered by warranty if there are multiple dead pixels.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Stuck Pixel</h3>
                  <p className="text-yellow-800 text-sm">
                    Stays one color (often red, green, or blue) regardless of screen content. May be fixable using the{' '}
                    <Link href="/pixel-fixer" className="underline">Pixel Fixer tool</Link>.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">✅ Hot Pixel</h3>
                  <p className="text-green-800 text-sm">
                    Always bright/white. Less common than dead or stuck pixels. May be covered by warranty.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How many dead pixels are acceptable?</h3>
                  <p className="text-gray-600">
                    Most manufacturers allow 3-5 dead pixels before warranty replacement. Premium displays often have
                    stricter policies. Check your specific warranty terms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can stuck pixels be fixed?</h3>
                  <p className="text-gray-600">
                    Stuck pixels can sometimes be fixed using rapid color cycling. Try our{' '}
                    <Link href="/pixel-fixer" className="text-blue-600 hover:underline">Pixel Fixer tool</Link>{' '}
                    for 10-30 minutes. Success rate is around 50-60%.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is one dead pixel noticeable?</h3>
                  <p className="text-gray-600">
                    Depends on location and usage. Dead pixels in the center are more noticeable than edges.
                    On high-resolution displays (4K+), single pixels are barely visible during normal use.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/pixel-fixer" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Pixel Fixer</div>
                  <div className="text-sm text-gray-600">Fix stuck pixels</div>
                </Link>
                <Link href="/black-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Black Screen</div>
                  <div className="text-sm text-gray-600">Find bright pixels</div>
                </Link>
                <Link href="/monitor-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Monitor Test Suite</div>
                  <div className="text-sm text-gray-600">Full display test</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fullscreen-container show-cursor"
          style={{ backgroundColor: colors[currentColorIndex].value }}
          onClick={nextColor}
        >
          <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
            {colors[currentColorIndex].name} | SPACE: Next | A: Auto | ESC: Exit
          </div>
        </div>
      )}
    </div>
  )
}
