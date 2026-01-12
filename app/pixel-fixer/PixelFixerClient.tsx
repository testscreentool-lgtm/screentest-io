'use client'

import { useState, useEffect } from 'react'

export default function PixelFixerClient() {
  const [isFullscreen, setIsFullscreen] = useState(false)

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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        exitFullscreen()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pixel Fixer",
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pixel Fixer Tool – Detect and Repair Stuck Pixels",
    "description": "A free online pixel fixer tool to help identify and refresh stuck or dead pixels on LCD, LED, and OLED screens.",
    "author": {
      "@type": "Organization",
      "name": "ScreenTest"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ScreenTest"
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a pixel fixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A pixel fixer rapidly cycles colors on your screen to help revive stuck pixels that are not responding correctly."
        }
      },
      {
        "@type": "Question",
        "name": "Can this fix dead pixels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dead pixels are usually hardware-related and cannot be fixed by software tools."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I run the pixel fixer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Running the tool for 10–30 minutes is typically sufficient for stuck pixel testing."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Pixel Fixer Tool</h1>
        <p className="max-w-2xl mb-6">
          Use this pixel fixer to detect and potentially revive stuck pixels by displaying rapid color changes in fullscreen mode.
        </p>

        {!isFullscreen ? (
          <button
            onClick={enterFullscreen}
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Start Pixel Fixer
          </button>
        ) : (
          <button
            onClick={exitFullscreen}
            className="px-6 py-3 bg-red-600 text-white rounded-lg"
          >
            Exit Fullscreen
          </button>
        )}
      </main>
    </>
  )
}
