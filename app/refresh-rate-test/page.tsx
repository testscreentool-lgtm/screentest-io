'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function RefreshRateTest() {
  const [detectedRate, setDetectedRate] = useState<number | null>(null)
  const [isDetecting, setIsDetecting] = useState(false)
  const [frameCount, setFrameCount] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const framesRef = useRef(0)

  const detectRefreshRate = () => {
    setIsDetecting(true)
    setFrameCount(0)
    framesRef.current = 0
    startTimeRef.current = null
    setDetectedRate(null)

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      framesRef.current++
      setFrameCount(framesRef.current)

      const elapsed = timestamp - startTimeRef.current

      if (elapsed >= 1000) { // Measure for 1 second
        const fps = Math.round((framesRef.current / elapsed) * 1000)
        setDetectedRate(fps)
        setIsDetecting(false)
        return
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (showAnimation) {
      const animateBox = (timestamp: number) => {
        animationRef.current = requestAnimationFrame(animateBox)
      }
      animationRef.current = requestAnimationFrame(animateBox)
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [showAnimation])

  const getRefreshRateInfo = (rate: number) => {
    if (rate >= 360) return { color: 'purple', label: 'Esports Pro', desc: 'Ultimate competitive gaming' }
    if (rate >= 240) return { color: 'blue', label: 'High-End Gaming', desc: 'Extreme smoothness' }
    if (rate >= 144) return { color: 'green', label: 'Gaming', desc: 'Great for FPS games' }
    if (rate >= 120) return { color: 'cyan', label: 'Smooth', desc: 'Very responsive' }
    if (rate >= 75) return { color: 'yellow', label: 'Enhanced', desc: 'Better than standard' }
    if (rate >= 60) return { color: 'orange', label: 'Standard', desc: 'Most common' }
    return { color: 'red', label: 'Low', desc: 'Below standard' }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="relative aspect-video bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
            {detectedRate ? (
              <div className="text-center text-white space-y-4">
                <div className="text-8xl font-bold animate-pulse">{detectedRate} Hz</div>
                <div className="text-2xl font-semibold">
                  {getRefreshRateInfo(detectedRate).label} Display
                </div>
                <div className="text-lg opacity-90">
                  {getRefreshRateInfo(detectedRate).desc}
                </div>
              </div>
            ) : (
              <div className="text-center text-white space-y-4">
                <div className="text-8xl">🔄</div>
                <div className="text-3xl font-bold">Refresh Rate Test</div>
                <div className="text-lg opacity-90">
                  {isDetecting ? `Detecting... ${frameCount} frames` : 'Click button below to detect'}
                </div>
              </div>
            )}

            {/* Animation Test Box */}
            {showAnimation && (
              <div className="absolute left-8 top-1/2 -translate-y-1/2">
                <div 
                  className="w-16 h-16 bg-white rounded-lg"
                  style={{
                    animation: 'slideAnimation 2s linear infinite'
                  }}
                />
              </div>
            )}
          </div>
          
          <style jsx>{`
            @keyframes slideAnimation {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(100vw - 200px)); }
            }
          `}</style>

          <div className="p-6 bg-white space-y-4">
            {/* Detect Button */}
            <button
              onClick={detectRefreshRate}
              disabled={isDetecting}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition transform ${
                isDetecting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              {isDetecting ? '⏳ Detecting...' : '🔄 Detect Refresh Rate'}
            </button>

            {/* Animation Toggle */}
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <span className="text-sm font-semibold text-gray-700">Show Test Animation</span>
                <p className="text-xs text-gray-500">Moving box to visualize smoothness</p>
              </div>
              <button
                onClick={() => setShowAnimation(!showAnimation)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  showAnimation
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {showAnimation ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Current Display Info */}
            <div className="bg-blue-50 rounded-lg p-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-gray-600">Screen Resolution:</span>
                  <div className="font-semibold text-gray-900">
                    {typeof window !== 'undefined' && `${window.screen.width} × ${window.screen.height}`}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Color Depth:</span>
                  <div className="font-semibold text-gray-900">
                    {typeof window !== 'undefined' && `${window.screen.colorDepth}-bit`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refresh Rate Test</h1>
            <p className="text-lg text-gray-600">
              Detect your monitor's actual refresh rate in Hz. Test if you're getting the full 144Hz, 240Hz, 
              or higher that your display is capable of. Essential for gamers and smooth scrolling.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">1.</span>
                <span>Click "Detect Refresh Rate" button</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">2.</span>
                <span>Wait 1 second while the tool measures frame rate</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">3.</span>
                <span>Your display's actual refresh rate will be shown in Hz</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">4.</span>
                <span>Enable test animation to visually see smoothness differences</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">5.</span>
                <span>Compare result with your monitor's specifications</span>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refresh Rate Explained</h2>
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">What is Refresh Rate?</h3>
                <p className="text-gray-600 text-sm">
                  Refresh rate (Hz) measures how many times per second your monitor redraws the image. 
                  Higher refresh rates create smoother motion, reduce blur, and improve responsiveness. 
                  60Hz = 60 frames per second, 144Hz = 144 frames per second.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-1">60Hz - Standard</h4>
                  <p className="text-orange-800 text-sm">
                    Most common. Fine for office work, web browsing, movies (24/30fps). 
                    May feel sluggish for fast gaming.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-1">75-90Hz - Enhanced</h4>
                  <p className="text-yellow-800 text-sm">
                    Noticeable improvement over 60Hz. Good for casual gaming and smooth scrolling. 
                    Budget gaming monitors.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-1">120-144Hz - Gaming</h4>
                  <p className="text-green-800 text-sm">
                    Sweet spot for gaming. Smooth motion, reduced input lag, competitive advantage. 
                    Popular for FPS and esports.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-1">240Hz - High-End</h4>
                  <p className="text-blue-800 text-sm">
                    Ultra-smooth for competitive gaming. Professional esports standard. 
                    Diminishing returns above this for most users.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-1">360Hz+ - Esports Pro</h4>
                  <p className="text-purple-800 text-sm">
                    Maximum performance. Millisecond advantages for pro gamers. 
                    Requires powerful GPU to achieve high framerates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <div className="space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">Getting 60Hz on 144Hz monitor?</h3>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Check Windows/Mac display settings - manually select 144Hz</li>
                  <li>• Use DisplayPort cable (HDMI may be limited to 60Hz)</li>
                  <li>• Update GPU drivers</li>
                  <li>• Some browsers limit refresh rate - try different browser</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">How to Enable High Refresh Rate</h3>
                <div className="text-blue-800 text-sm space-y-2">
                  <div>
                    <strong>Windows:</strong> Settings → Display → Advanced Display → 
                    Choose refresh rate
                  </div>
                  <div>
                    <strong>Mac:</strong> System Preferences → Displays → Hold Option, 
                    click Scaled → Choose refresh rate
                  </div>
                  <div>
                    <strong>NVIDIA:</strong> Control Panel → Change resolution → 
                    Select refresh rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Does higher refresh rate use more power?</h3>
                <p className="text-gray-600">
                  Yes, slightly. The difference is minimal (5-10W) for most users. The bigger power draw 
                  comes from your GPU rendering more frames, not the monitor refresh rate itself.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can my eyes see above 60Hz?</h3>
                <p className="text-gray-600">
                  Yes! While movies are 24fps, your eyes can perceive differences well beyond 60Hz. 
                  Most people notice improvement up to 120-144Hz. Some can tell differences at 240Hz+.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do I need high FPS to use high refresh rate?</h3>
                <p className="text-gray-600">
                  Your game FPS should match or exceed your refresh rate for full benefit. 
                  If your GPU outputs 60fps on a 144Hz monitor, you'll only see 60fps smoothness.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What about VRR/G-Sync/FreeSync?</h3>
                <p className="text-gray-600">
                  Variable Refresh Rate technologies sync monitor refresh to GPU output, eliminating 
                  screen tearing. This tool shows your monitor's maximum refresh rate capability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/response-time-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Response Time</div>
                <div className="text-sm text-gray-600">Test ghosting</div>
              </Link>
              <Link href="/screen-resolution" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Screen Resolution</div>
                <div className="text-sm text-gray-600">Check your resolution</div>
              </Link>
              <Link href="/monitor-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Monitor Test</div>
                <div className="text-sm text-gray-600">Complete testing</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
