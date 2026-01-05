'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export default function BlackScreen() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

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

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tool Interface */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              className="relative bg-black aspect-video cursor-pointer group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-6xl">⬛</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm text-gray-400">Press F or click to enter fullscreen mode</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Black Screen Tool</h1>
              <p className="text-lg text-gray-600">
                Free online black screen tool for testing dead pixels, cleaning your monitor, and OLED power saving.
                Works instantly in your browser with true black (#000000) color.
              </p>
            </div>

            {/* How to Use */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Click the black rectangle above or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Look carefully for any bright spots or colored pixels (these are dead/stuck pixels)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Press 'Escape' or click to exit fullscreen when finished</span>
                </li>
              </ol>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Dead Pixel Detection:</strong> Any visible bright spot on pure black indicates a dead or stuck pixel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Screen Cleaning:</strong> Pure black background makes dust and smudges highly visible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>OLED Power Saving:</strong> True black pixels consume zero power on OLED displays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Monitor Testing:</strong> Essential tool when buying or testing new displays</span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What is a black screen test?</h3>
                  <p className="text-gray-600">
                    A black screen test displays pure black (#000000) across your entire screen to detect dead pixels,
                    stuck pixels, backlight bleeding, and screen uniformity issues.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do I fix a black screen on my computer?</h3>
                  <p className="text-gray-600">
                    If your computer screen is stuck black, try: force restart, check power connections, update display drivers,
                    boot in safe mode, or connect to external monitor. For device-specific fixes,{' '}
                    <Link href="/guides/fix-black-screen" className="text-blue-600 hover:underline">
                      see our troubleshooting guide
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is this tool free?</h3>
                  <p className="text-gray-600">
                    Yes! 100% free, no download required, no signup needed. Works instantly in your browser on any device.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Does it work on mobile phones?</h3>
                  <p className="text-gray-600">
                    Yes, it works perfectly on iPhone, Android, tablets, and all mobile devices. Tap the screen to enter fullscreen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What should I look for during the test?</h3>
                  <p className="text-gray-600">
                    Look for any bright spots, colored dots, or light bleeding around the edges. A perfect screen should show
                    completely uniform black with no visible pixels.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Tools */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/white-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">White Screen Test</div>
                  <div className="text-sm text-gray-600">Test brightness uniformity</div>
                </Link>
                <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                  <div className="text-sm text-gray-600">Detect stuck pixels</div>
                </Link>
                <Link href="/color-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Color Test</div>
                  <div className="text-sm text-gray-600">Verify color accuracy</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fullscreen-container bg-black" onClick={exitFullscreen}>
          {/* Fullscreen mode - completely black */}
        </div>
      )}
    </div>
  )
}
