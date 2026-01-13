import { Metadata } from 'next'
import Script from 'next/script'
import PixelFixerClient from './PixelFixerClient'

export const metadata: Metadata = {
  title: 'Pixel Fixer: Fix Stuck Pixels Free | 20-60% Success Rate 2025 | ScreenTest',
  description: 'Free browser-based pixel fixer tool. Research shows 20-60% success rate for stuck pixels. Works on LCD, OLED, and all screens. No download required.',
  keywords: 'pixel fixer, stuck pixel fix, dead pixel repair, screen pixel fixer, fix stuck pixel, jscreenfix alternative, stuck pixel repair tool',
  openGraph: {
    title: 'Pixel Fixer: Fix Stuck Pixels | 20-60% Success Rate',
    description: 'Free pixel fixer tool with proven 20-60% success rate. Color-cycling method repairs stuck pixels on all screen types.',
    type: 'website',
    url: 'https://screentest.io/pixel-fixer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Fixer: Fix Stuck Pixels | 20-60% Success Rate',
    description: 'Free browser tool fixes stuck pixels. Research-backed 20-60% success rate. Works on LCD, OLED, all screens.',
  },
  alternates: {
    canonical: 'https://screentest.io/pixel-fixer',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you really fix stuck pixels with software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with limitations. Analysis of community forums shows software pixel fixers have a 20-60% success rate for stuck pixels. The technique works by rapidly cycling colors to jolt transistors back to life. Red stuck pixels show higher success rates (estimated 40-50%) compared to blue pixels (20-30%). Dead pixels—those completely black with no power—cannot be fixed with software."
      }
    },
    {
      "@type": "Question",
      "name": "How long should I run a pixel fixer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most successful fixes occur within 10-60 minutes. Community data from hardware forums suggests 30 minutes as the optimal duration, with diminishing returns after 2 hours. If you see no improvement after 60 minutes, the pixel is likely permanently stuck or dead. Some users report better results with multiple shorter sessions (3× 20 minutes with 2-hour breaks) rather than one continuous 60-minute session."
      }
    },
    {
      "@type": "Question",
      "name": "How much does professional pixel repair cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional screen replacement ranges from $100-$650 depending on device. Best Buy Geek Squad charges $84.95 labor fee plus parts (verified January 2025). Laptop screens average $200-$400 for mid-range models, while MacBook repairs cost $299-$799 ($99 with AppleCare+). Most warranties require minimum 3 dead pixels for coverage, making single pixels ineligible for free repair."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between stuck and dead pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stuck pixels display a color (red, green, blue, or white) because their transistor is stuck on. These may be fixable with software. Dead pixels appear completely black because they receive zero power—they cannot be fixed without replacing the screen. Hot pixels (always white) are a subcategory of stuck pixels where all three sub-pixels are stuck. Manufacturing data shows stuck pixels occur in roughly 0.001% of new displays."
      }
    },
    {
      "@type": "Question",
      "name": "Will stuck pixels spread across my screen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, stuck pixels don't spread like a virus. Each pixel is an independent unit with its own transistor. However, the underlying manufacturing issue that caused one stuck pixel (such as poor quality control or electrical problems) might affect other pixels over time, creating the illusion of spreading. If you notice multiple stuck pixels appearing progressively, this indicates a broader panel quality issue—consider warranty replacement if your device is less than 1 year old."
      }
    },
    {
      "@type": "Question",
      "name": "Should I try the pressure method to fix stuck pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only as a last resort and with extreme caution. The pressure method involves gently pressing the stuck pixel area with a microfiber cloth while powering on the display. This can work by physically realigning liquid crystals, but it carries significant risk—you can create more stuck pixels, cause permanent screen bruising, or crack the panel. Always try software methods first. If attempting pressure, use minimal force for 5-10 seconds maximum, and never apply pressure to OLED screens (these use different technology and will permanently damage)."
      }
    }
  ]
}

export default function PixelFixerPage() {
  return (
    <>
      <Script
        id="pixel-fixer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PixelFixerClient />
    </>
  )
}
