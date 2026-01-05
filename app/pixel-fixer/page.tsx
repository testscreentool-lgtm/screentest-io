'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const flashColors = [
  '#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000',
  '#FFFF00', '#FF00FF', '#00FFFF', '#FF8000', '#8000FF'
]

export default function PixelFixer() {
  const [isRunning, setIsRunning] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [speed, setSpeed] = useState(50) // milliseconds between colors
  const [duration, setDuration] = useState(10) // minutes
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      const inFullscreen = !!document.fullscreenElement
      setIsFullscreen(inFullscreen)
      if (!inFullscreen) {
        stopFixer()
      }
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        stopFixer()
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    if (isRunning) {
      // Color cycling interval
      intervalRef.current = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % flashColors.length)
      }, speed)

      // Timer countdown
      setTimeRemaining(duration * 60)
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            stopFixer()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRunning, speed, duration])

  const startFixer = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    }
    setIsRunning(true)
  }

  const stopFixer = () => {
    setIsRunning(false)
    setTimeRemaining(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!isFullscreen || !isRunning ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div
              className="relative aspect-video bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="text-8xl animate-pulse">⚡</div>
                  <div className="text-3xl font-bold">Pixel Fixer Tool</div>
                  <div className="text-lg opacity-90">Rapid color flashing to unstick pixels</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white space-y-6">
              {/* Speed Control */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Flash Speed</label>
                  <span className="text-sm font-mono text-gray-600">
                    {speed}ms ({Math.round(1000 / speed)} Hz)
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  className="w-full"
                  disabled={isRunning}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Fast (10ms)</span>
                  <span>Slow (200ms)</span>
                </div>
              </div>

              {/* Duration Control */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">Duration</label>
                  <span className="text-sm font-mono text-gray-600">{duration} minutes</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full"
                  disabled={isRunning}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 min</span>
                  <span>30 min</span>
                </div>
              </div>

              {/* Start/Stop Button */}
              <div className="pt-4 border-t">
                {!isRunning ? (
                  <button
                    onClick={startFixer}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
                  >
                    ⚡ Start Pixel Fixer
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <div className="text-green-900 font-semibold mb-1">Pixel Fixer Running</div>
                      <div className="text-3xl font-mono text-green-700">{formatTime(timeRemaining)}</div>
                      <div className="text-sm text-green-600 mt-1">Time Remaining</div>
                    </div>
                    <button
                      onClick={stopFixer}
                      className="w-full bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                    >
                      Stop Fixer
                    </button>
                  </div>
                )}
              </div>

              {/* Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⚠️</span>
                  <div className="text-yellow-900">
                    <strong>Seizure Warning:</strong> This tool uses rapid color flashing. 
                    Do not use if you have photosensitive epilepsy. Recommended duration: 10-30 minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pixel Fixer Tool</h1>
              <p className="text-lg text-gray-600">
                Attempt to fix stuck pixels using rapid color cycling. This tool flashes random colors at high speed 
                to stimulate stuck subpixels and potentially restore them to normal function. Success rate: 50-60%.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>First, use the <Link href="/dead-pixel-test" className="text-blue-600 underline">Dead Pixel Test</Link> to locate the stuck pixel</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Adjust flash speed (50ms recommended) and duration (10-30 minutes)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Click "Start Pixel Fixer" - the tool enters fullscreen automatically</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Position the flashing area over the stuck pixel (entire screen flashes)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Let it run for the full duration. Press ESC to stop early if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">6.</span>
                  <span>After finishing, test the pixel again. May need multiple attempts</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Success Tips</h2>
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">✅ Best Practices</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Run for 20-30 minutes for best results</li>
                    <li>• Try multiple times if first attempt fails</li>
                    <li>• Leave overnight on lowest brightness if persistent</li>
                    <li>• Use 50ms flash speed (balanced effectiveness)</li>
                    <li>• Ensure monitor is warmed up (20+ minutes on)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Limitations</h3>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    <li>• Only works on stuck pixels, not dead pixels</li>
                    <li>• Success rate approximately 50-60%</li>
                    <li>• Stuck pixel may return after a while</li>
                    <li>• Won't fix physical panel damage</li>
                    <li>• Check warranty before attempting - some warranties cover stuck pixels</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
              <div className="bg-white border rounded-lg p-4 space-y-3 text-sm">
                <p className="text-gray-600">
                  <strong className="text-gray-900">The Science:</strong> Stuck pixels occur when a subpixel 
                  (red, green, or blue) gets stuck in an "on" position due to electrical charge buildup or 
                  liquid crystal misalignment.
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-900">The Fix:</strong> Rapid color cycling creates quick voltage 
                  changes that may dislodge stuck liquid crystals or dissipate trapped charges, potentially 
                  restoring normal pixel function.
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Why It Sometimes Fails:</strong> Dead pixels (completely off) 
                  have broken transistors and can't be fixed by software. True hardware damage requires physical 
                  repair or replacement.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Can this damage my screen?</h3>
                  <p className="text-gray-600">
                    No. This tool is safe and doesn't push the display beyond normal operating parameters. 
                    It simply changes colors rapidly, which displays are designed to do.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How long should I run it?</h3>
                  <p className="text-gray-600">
                    Start with 10-20 minutes. If unsuccessful, try 30 minutes. Some users report success after 
                    running overnight on low brightness. If no improvement after several attempts, the pixel is likely permanently stuck.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What if the pixel is still stuck after?</h3>
                  <p className="text-gray-600">
                    Try again with different settings (slower/faster speed, longer duration). Check your warranty - 
                    many manufacturers replace monitors with multiple stuck pixels. Some warranties cover even a single stuck pixel.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Will this work on OLED displays?</h3>
                  <p className="text-gray-600">
                    OLED uses different technology (organic compounds, not liquid crystals). Stuck pixels are rare 
                    on OLED, but this tool may still help. OLED "burn-in" is permanent and can't be fixed with this method.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Is there a warranty concern?</h3>
                  <p className="text-gray-600">
                    Check your warranty first! Many monitors come with zero-defect pixel policies. Using third-party 
                    fixes shouldn't void warranty, but check with your manufacturer. May be better to RMA if under warranty.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-red-900 mb-3">⚠️ Important Safety Information</h2>
              <ul className="text-red-800 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Photosensitive Epilepsy Warning:</strong> Do not use if you have photosensitive epilepsy or seizure disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Eye Strain:</strong> Do not stare directly at the flashing. Look away periodically</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Headaches:</strong> Stop immediately if you experience discomfort, dizziness, or headaches</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong>Children:</strong> Keep young children away from the flashing screen</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                  <div className="text-sm text-gray-600">Find stuck pixels first</div>
                </Link>
                <Link href="/black-screen" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Black Screen</div>
                  <div className="text-sm text-gray-600">Verify the fix worked</div>
                </Link>
                <Link href="/monitor-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                  <div className="font-semibold text-gray-900">Monitor Test</div>
                  <div className="text-sm text-gray-600">Full display check</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div 
          className="fullscreen-container"
          style={{ backgroundColor: flashColors[currentColorIndex] }}
        >
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            {formatTime(timeRemaining)} remaining | ESC: Stop
          </div>
        </div>
      )}
    </div>
  )
}
