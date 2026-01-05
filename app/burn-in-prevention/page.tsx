'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const patterns = [
  { id: 'logo', name: 'Logo Orbiter', icon: '🔄', description: 'Prevents static logos from burning in' },
  { id: 'bars', name: 'Color Bars', icon: '🌈', description: 'Cycling color bars' },
  { id: 'snow', name: 'White Noise', icon: '❄️', description: 'Random pixel pattern' },
  { id: 'wave', name: 'Wave Pattern', icon: '🌊', description: 'Moving wave animation' },
]

export default function BurnInPrevention() {
  const [isRunning, setIsRunning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentPattern, setCurrentPattern] = useState(patterns[0])
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [colorIndex, setColorIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF']

  useEffect(() => {
    const handleFullscreenChange = () => {
      const inFullscreen = !!document.fullscreenElement
      setIsFullscreen(inFullscreen)
      if (!inFullscreen) {
        setIsRunning(false)
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        stopPrevention()
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      } else if (e.key === ' ' && isFullscreen) {
        e.preventDefault()
        const nextIdx = (patterns.indexOf(currentPattern) + 1) % patterns.length
        setCurrentPattern(patterns[nextIdx])
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isFullscreen, currentPattern])

  useEffect(() => {
    if (isRunning && isFullscreen) {
      const interval = setInterval(() => {
        setPosition({
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10
        })
        setColorIndex((prev) => (prev + 1) % colors.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isRunning, isFullscreen])

  useEffect(() => {
    if (isRunning && currentPattern.id === 'snow' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const drawNoise = () => {
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
          const value = Math.random() * 255
          data[i] = value
          data[i + 1] = value
          data[i + 2] = value
          data[i + 3] = 255
        }

        ctx.putImageData(imageData, 0, 0)
      }

      const interval = setInterval(drawNoise, 50)
      return () => clearInterval(interval)
    }
  }, [isRunning, currentPattern])

  const startPrevention = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    }
    setIsRunning(true)
  }

  const stopPrevention = () => {
    setIsRunning(false)
  }

  const renderPattern = () => {
    switch (currentPattern.id) {
      case 'logo':
        return (
          <div 
            className="absolute transition-all duration-[3000ms] ease-in-out"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="text-9xl opacity-30"
              style={{ color: colors[colorIndex] }}
            >
              🖥️
            </div>
          </div>
        )
      
      case 'bars':
        return (
          <div className="w-full h-full flex">
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="flex-1 transition-all duration-1000"
                style={{ 
                  backgroundColor: colors[(idx + colorIndex) % colors.length]
                }}
              />
            ))}
          </div>
        )
      
      case 'snow':
        return (
          <canvas
            ref={canvasRef}
            className="w-full h-full"
          />
        )
      
      case 'wave':
        return (
          <div 
            className="w-full h-full"
            style={{
              background: `repeating-linear-gradient(
                ${position.x * 3.6}deg,
                ${colors[colorIndex]} 0px,
                ${colors[(colorIndex + 1) % colors.length]} 50px,
                ${colors[(colorIndex + 2) % colors.length]} 100px
              )`
            }}
          />
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen || !isRunning ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="relative aspect-video bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="text-8xl animate-bounce">🛡️</div>
                  <div className="text-3xl font-bold">OLED Burn-in Prevention</div>
                  <div className="text-lg opacity-90">Moving patterns to prevent image retention</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white space-y-6">
              {/* Pattern Selection */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-3 block">Select Pattern</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {patterns.map((pattern) => (
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
                      <div className="text-sm font-semibold">{pattern.name}</div>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">{currentPattern.description}</p>
              </div>

              {/* Start Button */}
              <div className="pt-4 border-t">
                {!isRunning ? (
                  <button
                    onClick={startPrevention}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
                  >
                    🛡️ Start Burn-in Prevention
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <div className="text-green-900 font-semibold">Prevention Active</div>
                      <div className="text-sm text-green-600 mt-1">Pattern: {currentPattern.name}</div>
                    </div>
                    <button
                      onClick={stopPrevention}
                      className="w-full bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                      Stop Prevention
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <strong>Tip:</strong> Run for 30-60 minutes after extended static content. 
                Press SPACE to cycle patterns while running.
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Burn-in Prevention Tool</h1>
              <p className="text-lg text-gray-600">
                Prevent OLED burn-in and image retention with moving patterns. Essential for displays showing 
                static content like logos, taskbars, or UI elements. Works as a screensaver for OLED TVs and monitors.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Select a pattern (Logo Orbiter recommended for general use)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click "Start Burn-in Prevention" - enters fullscreen automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Let it run for 30-60 minutes after displaying static content</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Press SPACE to cycle through different patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Press ESC to stop and exit fullscreen</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding OLED Burn-in</h2>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">What is Burn-in?</h3>
                  <p className="text-gray-600 text-sm">
                    Burn-in (or image retention) occurs when static images displayed for extended periods cause 
                    permanent "ghost images" on OLED screens. The organic compounds degrade unevenly, leaving 
                    visible imprints of frequently-displayed content like logos, taskbars, or HUD elements.
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Why OLED is Vulnerable</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Unlike LCD displays that use backlights, OLED pixels emit their own light. Each organic LED 
                    has a finite lifespan and degrades with use. Static content causes uneven wear, leading to burn-in.
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    • Blue OLEDs degrade fastest (~14,000 hours)
                    <br />• Green OLEDs moderate (~46,000 hours)
                    <br />• Red OLEDs most stable (~46,000 hours)
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">⚠️ High-Risk Content</h3>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Channel logos and watermarks (TV)</li>
                    <li>• Windows taskbar and MacOS dock</li>
                    <li>• Game HUDs and health bars</li>
                    <li>• Static website headers/navigation</li>
                    <li>• News tickers and stock tickers</li>
                    <li>• Bright UI elements on dark backgrounds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevention Best Practices</h2>
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">✅ Do This</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Enable auto-hide for taskbars and docks</li>
                    <li>• Use dark mode when possible (reduces overall pixel usage)</li>
                    <li>• Run pixel shift/screen shift features if available</li>
                    <li>• Use this tool after 4+ hours of static content</li>
                    <li>• Reduce brightness to 50-70% (still looks great on OLED)</li>
                    <li>• Enable screensaver after 5-10 minutes of inactivity</li>
                    <li>• Vary your content - don't watch the same channel 24/7</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">❌ Avoid This</h3>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Leaving static content on-screen for hours</li>
                    <li>• Maximum brightness (100%) - accelerates degradation</li>
                    <li>• Watching news channels with static tickers 24/7</li>
                    <li>• Using OLED as a computer monitor without protection</li>
                    <li>• Displaying white/bright static elements continuously</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can burn-in be fixed once it occurs?</h3>
                  <p className="text-gray-600">
                    Mild temporary image retention may fade over time or with pixel refresher cycles. True burn-in 
                    (permanent degradation) cannot be reversed - it requires panel replacement. Prevention is key.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How long until burn-in happens?</h3>
                  <p className="text-gray-600">
                    Depends on content and brightness. With normal varied use, modern OLEDs last 50,000+ hours 
                    (20+ years at 6 hours/day). Burn-in typically takes 1,000-5,000 hours of static content at high brightness.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is OLED safe for computer use?</h3>
                  <p className="text-gray-600">
                    Yes, with precautions! Modern OLED monitors have built-in pixel shift and screen savers. 
                    Use auto-hide taskbars, dark themes, vary content, and run this prevention tool regularly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Do LCD/LED screens get burn-in?</h3>
                  <p className="text-gray-600">
                    Rare but possible. LCD can experience temporary "image persistence" that usually fades. 
                    True permanent burn-in is extremely uncommon on LCD/LED displays.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How often should I run this tool?</h3>
                  <p className="text-gray-600">
                    After 4-6 hours of static content, run for 30-60 minutes. For heavy static use (news, monitoring, gaming), 
                    run daily. For varied content (movies, browsing), weekly is sufficient.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                  <div className="text-sm text-gray-600">Check for damage</div>
                </Link>
                <Link href="/brightness-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Brightness Test</div>
                  <div className="text-sm text-gray-600">Optimize brightness</div>
                </Link>
                <Link href="/white-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">White Screen</div>
                  <div className="text-sm text-gray-600">Detect burn-in early</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fullscreen-container bg-black">
          {renderPattern()}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            {currentPattern.name} Active | SPACE: Change Pattern | ESC: Exit
          </div>
        </div>
      )}
    </div>
  )
}
