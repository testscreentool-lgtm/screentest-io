'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const contrastPatterns = [
  { 
    id: 'checkerboard', 
    name: 'Checkerboard', 
    icon: '▦',
    description: 'Classic black/white pattern'
  },
  { 
    id: 'vertical', 
    name: 'Vertical Stripes', 
    icon: '|||',
    description: 'Vertical contrast bars'
  },
  { 
    id: 'horizontal', 
    name: 'Horizontal Stripes', 
    icon: '☰',
    description: 'Horizontal contrast bars'
  },
  { 
    id: 'gradient', 
    name: 'Contrast Gradient', 
    icon: '◧',
    description: 'Smooth black to white'
  },
  { 
    id: 'text', 
    name: 'Text Contrast', 
    icon: 'Aa',
    description: 'Text readability test'
  },
]

export default function ContrastTest() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentPattern, setCurrentPattern] = useState(contrastPatterns[0])
  const [inverted, setInverted] = useState(false)

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
        const nextIdx = (contrastPatterns.indexOf(currentPattern) + 1) % contrastPatterns.length
        setCurrentPattern(contrastPatterns[nextIdx])
      } else if (e.key === 'i' || e.key === 'I') {
        setInverted(!inverted)
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isFullscreen, currentPattern, inverted])

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

  const renderPattern = () => {
    const colors = inverted 
      ? { primary: '#FFFFFF', secondary: '#000000' }
      : { primary: '#000000', secondary: '#FFFFFF' }

    switch (currentPattern.id) {
      case 'checkerboard':
        return (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-conic-gradient(${colors.primary} 0% 25%, ${colors.secondary} 0% 50%)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        )
      
      case 'vertical':
        return (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, 
                  ${colors.primary} 0px, 
                  ${colors.primary} 40px, 
                  ${colors.secondary} 40px, 
                  ${colors.secondary} 80px
                )
              `
            }}
          />
        )
      
      case 'horizontal':
        return (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, 
                  ${colors.primary} 0px, 
                  ${colors.primary} 40px, 
                  ${colors.secondary} 40px, 
                  ${colors.secondary} 80px
                )
              `
            }}
          />
        )
      
      case 'gradient':
        return (
          <div 
            className="w-full h-full"
            style={{
              background: inverted
                ? 'linear-gradient(to right, #FFFFFF 0%, #000000 100%)'
                : 'linear-gradient(to right, #000000 0%, #FFFFFF 100%)'
            }}
          />
        )
      
      case 'text':
        return (
          <div 
            className="w-full h-full flex items-center justify-center p-8"
            style={{ backgroundColor: colors.secondary }}
          >
            <div className="max-w-4xl text-center space-y-8">
              <h1 
                className="text-6xl md:text-8xl font-bold"
                style={{ color: colors.primary }}
              >
                Text Contrast
              </h1>
              <p 
                className="text-2xl md:text-4xl"
                style={{ color: colors.primary }}
              >
                Can you read this text clearly?
              </p>
              <p 
                className="text-lg md:text-2xl"
                style={{ color: colors.primary }}
              >
                Testing contrast ratio and text readability at different sizes.
                All text should be crisp and easy to read.
              </p>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              onClick={toggleFullscreen}
              className="relative aspect-video cursor-pointer group overflow-hidden"
            >
              {renderPattern()}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center text-white space-y-4">
                  <div className="text-6xl">{currentPattern.icon}</div>
                  <div className="text-xl font-semibold">Click for Fullscreen</div>
                  <div className="text-sm">{currentPattern.name}</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {contrastPatterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    onClick={() => setCurrentPattern(pattern)}
                    className={`p-4 rounded-lg font-medium transition border-2 ${
                      currentPattern.id === pattern.id
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{pattern.icon}</div>
                    <div className="text-xs font-semibold">{pattern.name}</div>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <span className="text-sm font-semibold text-gray-700">Invert Colors</span>
                  <p className="text-xs text-gray-500">Swap black/white</p>
                </div>
                <button
                  onClick={() => setInverted(!inverted)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    inverted
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {inverted ? 'Inverted' : 'Normal'}
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <strong>Controls:</strong> SPACE to cycle patterns | I to invert | F for fullscreen | ESC to exit
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contrast Test Tool</h1>
              <p className="text-lg text-gray-600">
                Test your display contrast ratio with multiple black/white patterns. Check uniformity, sharpness, 
                and text readability. Essential for photo editing, design work, and optimal viewing experience.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Select a contrast pattern from the buttons above</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click the display or press 'F' to enter fullscreen mode</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Press SPACE to cycle through patterns, I to invert colors</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Look for bleeding, ghosting, or uneven contrast</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>All patterns should be sharp with no color fringing</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Contrast Ratio</h2>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What is Contrast Ratio?</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Contrast ratio measures the difference between the brightest white and darkest black your 
                    display can produce. Expressed as a ratio like 1000:1 or 5000:1.
                  </p>
                  <div className="mt-3 space-y-1 text-sm">
                    <div><strong>LCD/LED:</strong> 1000:1 to 5000:1 (typical)</div>
                    <div><strong>VA Panel:</strong> 3000:1 to 6000:1 (best LCD)</div>
                    <div><strong>OLED:</strong> Infinite (true black = 0 nits)</div>
                    <div><strong>Mini-LED:</strong> 10,000:1+ (with local dimming)</div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Why Contrast Matters</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• <strong>Image Depth:</strong> Higher contrast = more depth and dimension</li>
                    <li>• <strong>Dark Scenes:</strong> Better shadow detail in movies/games</li>
                    <li>• <strong>Text Clarity:</strong> Sharper, more readable text</li>
                    <li>• <strong>Color Vibrancy:</strong> Colors appear more vivid</li>
                    <li>• <strong>Eye Comfort:</strong> Reduced eye strain in dark environments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pattern Guide</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">▦ Checkerboard</h3>
                  <p className="text-gray-600 text-sm">
                    Tests overall contrast and pixel alignment. Edges should be sharp with no color fringing.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">||| Vertical Stripes</h3>
                  <p className="text-gray-600 text-sm">
                    Checks vertical ghosting and response time. No smearing or trailing should occur.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">☰ Horizontal Stripes</h3>
                  <p className="text-gray-600 text-sm">
                    Tests horizontal uniformity and interlacing artifacts. Lines should be perfectly straight.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">◧ Contrast Gradient</h3>
                  <p className="text-gray-600 text-sm">
                    Reveals banding and gradient smoothness. Should show smooth transition without visible steps.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Aa Text Contrast</h3>
                  <p className="text-gray-600 text-sm">
                    Tests readability at different sizes. All text should be sharp and easy to read.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What's a good contrast ratio?</h3>
                  <p className="text-gray-600">
                    1000:1 is acceptable for general use. 3000:1+ is excellent for movies and photo editing. 
                    OLED's infinite contrast is ideal but expensive.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Should I see color fringing around edges?</h3>
                  <p className="text-gray-600">
                    No! Color fringing (chromatic aberration) indicates poor panel quality, incorrect pixel alignment, 
                    or overdrive artifacts. All edges should be pure black/white.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Why does my LCD have grayish blacks?</h3>
                  <p className="text-gray-600">
                    LCD backlights can't turn off completely, causing "backlight bleed." This is normal but varies 
                    by quality. VA panels have deeper blacks than IPS. OLED achieves true black.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How do I improve my monitor contrast?</h3>
                  <p className="text-gray-600">
                    Use dark room for testing, adjust monitor contrast setting (usually 70-80), reduce brightness 
                    to improve black levels, enable local dimming if available on LED displays.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/brightness-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Brightness Test</div>
                  <div className="text-sm text-gray-600">Calibrate brightness</div>
                </Link>
                <Link href="/black-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Black Screen</div>
                  <div className="text-sm text-gray-600">Test black levels</div>
                </Link>
                <Link href="/white-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">White Screen</div>
                  <div className="text-sm text-gray-600">Test white levels</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fullscreen-container show-cursor" onClick={exitFullscreen}>
          {renderPattern()}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            {currentPattern.name} {inverted ? '(Inverted)' : ''} | SPACE: Next | I: Invert | ESC: Exit
          </div>
        </div>
      )}
    </div>
  )
}
