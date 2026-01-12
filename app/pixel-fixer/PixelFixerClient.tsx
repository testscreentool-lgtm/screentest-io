'use client'

import { useEffect, useState } from 'react'

const COLORS = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffffff',
  '#000000'
]

export default function PixelFixerClient() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)

  const enterFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
      document.body.style.overflow = 'hidden'
      setIsFullscreen(true)
    }
  }

  const exitFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    }
    document.body.style.overflow = 'auto'
    setIsFullscreen(false)
  }

  // ESC to exit fullscreen
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') exitFullscreen()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  // Color cycling (REAL pixel fixer)
  useEffect(() => {
    if (!isFullscreen) return

    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLORS.length)
    }, 60) // fast refresh for pixel stimulation

    return () => clearInterval(interval)
  }, [isFullscreen])

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pixel Fixer Tool",
    "operatingSystem": "All",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ScreenTest"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* TOOL SCREEN */}
      {isFullscreen && (
        <div
          onClick={exitFullscreen}
          className="fixed inset-0 z-50"
          style={{ backgroundColor: COLORS[colorIndex] }}
        />
      )}

      {/* NORMAL PAGE */}
      {!isFullscreen && (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Pixel Fixer Tool</h1>
          <p className="max-w-2xl mb-6 text-gray-600">
            This pixel fixer rapidly cycles solid colors across your entire screen
            to help revive stuck pixels on LCD, LED, and OLED displays.
          </p>

          <button
            onClick={enterFullscreen}
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Start Pixel Fixer
          </button>
        </div>
      )}
    </>
  )
}
