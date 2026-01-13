'use client'

import { useState } from 'react'

type BrightnessLevel = 0 | 25 | 50 | 75 | 100

export default function BrightnessTestClient() {
  const [brightnessLevel, setBrightnessLevel] = useState<BrightnessLevel>(100)
  const [showFullscreen, setShowFullscreen] = useState(false)

  const brightnessDescriptions = {
    0: { desc: 'Black (0% brightness)', use: 'Testing minimum black level' },
    25: { desc: 'Dark (25% brightness)', use: 'Dark room / night viewing' },
    50: { desc: 'Medium (50% brightness)', use: 'Office / moderate lighting' },
    75: { desc: 'Bright (75% brightness)', use: 'Bright room / daytime' },
    100: { desc: 'Maximum (100% brightness)', use: 'Peak brightness / HDR testing' }
  }

  const enterFullscreen = () => {
    setShowFullscreen(true)
    document.body.style.overflow = 'hidden'
  }

  const exitFullscreen = () => {
    setShowFullscreen(false)
    document.body.style.overflow = 'auto'
  }

  if (showFullscreen) {
    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ 
          backgroundColor: `rgba(255, 255, 255, ${brightnessLevel / 100})`,
          transition: 'background-color 0.3s ease'
        }}
      >
        <div className="absolute top-4 left-0 right-0 flex flex-col items-center gap-4 z-10">
          <div className="bg-black/80 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-semibold">{brightnessDescriptions[brightnessLevel].desc}</p>
            <p className="text-sm text-gray-300">{brightnessDescriptions[brightnessLevel].use}</p>
          </div>
          
          <div className="bg-black/80 px-6 py-4 rounded-lg backdrop-blur-sm flex items-center gap-4">
            <label className="text-white text-sm font-medium">Brightness:</label>
            <input
              type="range"
              min="0"
              max="100"
              step="25"
              value={brightnessLevel}
              onChange={(e) => setBrightnessLevel(Number(e.target.value) as BrightnessLevel)}
              className="w-64 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-white text-sm font-mono min-w-[60px]">{brightnessLevel}%</span>
          </div>

          <button
            onClick={exitFullscreen}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Exit Test (ESC)
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Brightness Test</h1>
          <p className="text-xl mb-6">
            Test your monitor brightness levels, check uniformity, and understand HDR capabilities.
          </p>
          <button 
            onClick={enterFullscreen}
            className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Brightness Test
          </button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What Is DisplayHDR 400, 600, and 1000?</h2>
        <p className="text-lg mb-4">
          DisplayHDR 400: Marketing checkbox, avoid. DisplayHDR 600: Real HDR starts here (600 nits + local dimming). DisplayHDR 1000: Top tier LCD HDR (1000 nits).
        </p>
      </div>
    </div>
  )
}
