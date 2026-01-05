'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function WhiteScreen() {
  const [isFullscreen, setIsFullscreen] = useState(false)

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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              className="relative bg-white aspect-video cursor-pointer group border-4 border-gray-200"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-800 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-6xl">⬜</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm text-gray-500">Press F or click to enter fullscreen mode</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">White Screen Tool</h1>
              <p className="text-lg text-gray-600">
                Free online white screen tool for brightness testing, screen cleaning, and backlight uniformity checking.
                Works instantly with pure white (#FFFFFF) color.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Click the white rectangle above or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Check for dark spots, yellowing, or brightness inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Press 'Escape' or click to exit fullscreen when finished</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Brightness Test:</strong> Check brightness uniformity across your entire display</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Screen Cleaning:</strong> Dust and fingerprints show clearly on white background</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Backlight Bleed Test:</strong> Check for light bleeding around screen edges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Dead Pixel Detection:</strong> Black pixels are visible on pure white background</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What is a white screen test?</h3>
                  <p className="text-gray-600">
                    A white screen test displays pure white (#FFFFFF) to check brightness uniformity, backlight bleeding,
                    and detect dead or stuck pixels that appear as dark spots.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How can I use this to clean my screen?</h3>
                  <p className="text-gray-600">
                    Display the white screen to make all dust, smudges, and fingerprints highly visible. Gently clean
                    with a microfiber cloth and appropriate screen cleaner.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is this tool free?</h3>
                  <p className="text-gray-600">
                    Yes! Completely free, no download, no signup required. Works on all devices including phones and tablets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/black-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Black Screen Test</div>
                  <div className="text-sm text-gray-600">Test for bright pixels</div>
                </Link>
                <Link href="/brightness-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Brightness Test</div>
                  <div className="text-sm text-gray-600">Calibrate brightness</div>
                </Link>
                <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                  <div className="text-sm text-gray-600">Find dead pixels</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fullscreen-container bg-white" onClick={exitFullscreen}>
          {/* Fullscreen mode - completely white */}
        </div>
      )}
    </div>
  )
}
