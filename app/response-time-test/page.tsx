'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const speedOptions = [
  { label: 'Slow', value: 3000 },
  { label: 'Medium', value: 2000 },
  { label: 'Fast', value: 1000 },
  { label: 'Very Fast', value: 500 },
]

export default function ResponseTimeTest() {
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(speedOptions[2])
  const [backgroundColor, setBackgroundColor] = useState('#000000')
  const [objectColor, setObjectColor] = useState('#FFFFFF')
  const [position, setPosition] = useState(0)

  useEffect(() => {
    if (!isRunning) return

    const animate = () => {
      setPosition((prev) => {
        const next = prev + 2
        return next > 100 ? 0 : next
      })
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [isRunning])

  const boxStyle = {
    position: 'absolute' as const,
    left: `${position}%`,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: `left ${speed.value}ms linear`,
    backgroundColor: objectColor,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div
            className="relative h-96 overflow-hidden cursor-pointer"
            style={{ backgroundColor }}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? (
              <div style={boxStyle} className="w-20 h-20 rounded-lg shadow-lg" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-center text-white space-y-4">
                  <div className="text-8xl">⏱️</div>
                  <div className="text-3xl font-bold">Response Time Test</div>
                  <div className="text-lg opacity-90">Click to start test</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-white space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-3 block">Movement Speed</label>
              <div className="grid grid-cols-4 gap-2">
                {speedOptions.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSpeed(s)}
                    disabled={isRunning}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      speed.value === s.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t pt-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Background</label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-full h-12 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Object Color</label>
                <input
                  type="color"
                  value={objectColor}
                  onChange={(e) => setObjectColor(e.target.value)}
                  className="w-full h-12 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use</h2>
            <ol className="space-y-2 text-gray-700">
              <li className="flex"><span className="font-semibold mr-2">1.</span>Click the test area to start</li>
              <li className="flex"><span className="font-semibold mr-2">2.</span>Watch the moving box</li>
              <li className="flex"><span className="font-semibold mr-2">3.</span>Look for ghosting or motion blur</li>
              <li className="flex"><span className="font-semibold mr-2">4.</span>Try different speeds</li>
              <li className="flex"><span className="font-semibold mr-2">5.</span>Test different color combinations</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Response Time?</h2>
            <p className="text-gray-600 mb-4">
              Response time measures how quickly a pixel can change from one color to another. 
              Lower is better - faster response means less motion blur and ghosting.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-1">1ms - Excellent</h4>
                <p className="text-green-800 text-sm">Professional gaming standard. Virtually no ghosting.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-1">3-5ms - Very Good</h4>
                <p className="text-blue-800 text-sm">Modern IPS gaming monitors. Minimal ghosting.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-1">6-8ms - Good</h4>
                <p className="text-yellow-800 text-sm">Quality IPS displays. Fine for casual gaming.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is 1ms always better than 5ms?</h3>
                <p className="text-gray-600">Not necessarily. A quality 5ms IPS can outperform a cheap 1ms TN panel.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Do I need 1ms for gaming?</h3>
                <p className="text-gray-600">For casual gaming, 5ms is fine. Competitive players benefit from 1-3ms.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">OLED vs LCD response time?</h3>
                <p className="text-gray-600">OLED has near-instant response time. LCD uses liquid crystals that cause delay.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/refresh-rate-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Refresh Rate Test</div>
                <div className="text-sm text-gray-600">Check your Hz</div>
              </Link>
              <Link href="/monitor-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Monitor Test Suite</div>
                <div className="text-sm text-gray-600">Complete testing</div>
              </Link>
              <Link href="/dead-pixel-test" className="p-4 bg-white rounded-lg hover:shadow-md transition">
                <div className="font-semibold text-gray-900">Dead Pixel Test</div>
                <div className="text-sm text-gray-600">Check for defects</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
